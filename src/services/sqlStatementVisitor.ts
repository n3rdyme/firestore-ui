/* eslint-disable quotes */
/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 10th, 2022
 * ****************************************************************************
 */
import { ParserRuleContext as AParserRuleContext } from "antlr4";
import { SqlParser } from "./sqlParser/lib/SqlParser";
import { GenericSQL, ParserError, SqlParserVisitor } from "./sqlParser";
import {
  SqlColumn,
  SqlPredicate,
  SqlExpression,
  SqlOrder,
  SqlStatement,
  SqlTable,
  SqlValue,
  DOTTED_ID_CHAR,
  DOTTED_ID_SPLIT,
} from "./sqlStatement";
import { ExpressionNormalizer } from "./expressionNormalizer";
import { mapSynonymOperations } from "./sqlComparisons";

type ParserRuleContext = AParserRuleContext & { [key: string]: any };

const hasType = (obj: any) => !!obj?.type;
const isDefined = (obj: any) => !!obj;

export class SqlStatementVisitor extends SqlParserVisitor {
  private readonly output: SqlStatement[];

  constructor(statements: any[]) {
    super();
    this.output = statements;
  }

  static parseSql(sql: string) {
    const parser = new GenericSQL();

    const errors: ParserError[] = [];
    const tree = parser.parse(sql, (err) => errors?.push(err));

    // if (tree) {
    //   console.debug(parser.toString(tree));
    // }

    const statements: SqlStatement[] = [];
    if (!errors?.length) {
      try {
        const visitor = new SqlStatementVisitor(statements);
        visitor.visitProgram(tree);
      } catch (e: unknown) {
        const error: any = e;

        const newError: ParserError = {
          startCol: 0,
          endCol: 0,
          startLine: 0,
          endLine: 0,
          message: error?.message ?? "Unknown error",
        };

        if (error.syntaxTree != null) {
          const { startPos, endPos } = error;
          newError.startLine = startPos?.line;
          newError.startCol = startPos?.column;
          newError.endLine = endPos?.line ?? startPos?.line;
          newError.endCol = endPos?.column ?? startPos?.column;
        }

        console.error(error, newError);
        errors.push(newError);
      }
    }

    return { errors, statements };
  }

  private errorWithContext(
    err: Error & { [key: string]: any },
    ctx: ParserRuleContext
  ) {
    if (err?.syntaxTree == null) {
      let syntaxTree = "";
      try {
        const pTemp = new GenericSQL();
        pTemp.createParser("");
        syntaxTree = pTemp.toString(ctx);
      } catch (_ignore: unknown) {
        /* */
      }
      const { start, stop } = ctx;
      Object.assign(err, {
        message: `${err.message}`,
        startPos: start,
        endPos: stop,
        syntaxTree: syntaxTree || "-",
      });
    }
    return err;
  }

  visitChildren(ctx: ParserRuleContext) {
    try {
      // console.debug({ enter: ctx.getText() });
      return SqlParserVisitor.prototype.visitChildren.call(this, ctx);
    } catch (e: unknown) {
      throw this.errorWithContext(e as any, ctx);
    }
  }

  // Visit a parse tree produced by SqlParser#sqlStatement.
  override visitSqlStatement(ctx: ParserRuleContext) {
    const [result] = this.visitChildren(ctx);
    if (result.where) {
      result.query = new ExpressionNormalizer().normalize(result.where);
    }
    this.output.push(result);
  }

  private unpackStatement(
    table?: ParserRuleContext,
    whereExp?: ParserRuleContext,
    orderBy?: ParserRuleContext,
    limit?: ParserRuleContext
  ) {
    const statement: SqlStatement = {};
    if (table) {
      statement.table = [this.visitTableSource(table)];
    }
    if (whereExp) {
      statement.where = this.visitWhereExpression(whereExp);
    }
    if (orderBy) {
      statement.orderBy = this.visitOrderByClause(orderBy).orderBy;
    }
    if (limit) {
      const limits = this.visitLimitClause(limit);
      statement.limit = limits.limit;
      statement.offset = limits.offset;
    }
    return statement;
  }

  // Visit a parse tree produced by SqlParser#deleteStatement.
  override visitDeleteStatement(ctx: ParserRuleContext) {
    const statement: SqlStatement = {
      type: "delete",
      ...this.unpackStatement(ctx.table, ctx.whereExp, ctx.order, ctx.limit),
    };
    return statement;
  }

  // Visit a parse tree produced by SqlParser#selectStatement.
  override visitSelectStatement(ctx: ParserRuleContext) {
    const statement: SqlStatement = {
      type: "select",
    };
    Object.assign(statement, ...this.visitChildren(ctx));
    return statement;
  }

  // Visit a parse tree produced by SqlParser#updateStatement.
  override visitUpdateStatement(ctx: ParserRuleContext) {
    const statement: SqlStatement = {
      type: "update",
      ...this.unpackStatement(ctx.table, ctx.whereExp, ctx.order, ctx.limit),
    };
    const columns: SqlColumn[] = [];
    const values: SqlValue[] = [];

    const updates = this.visitChildren(ctx).filter((o: any) => !!o?.set);
    updates.forEach(({ set, value }: any) => {
      columns.push(set);
      values.push(value);
    });
    statement.columns = columns;
    statement.values = [values];
    return statement;
  }

  // Visit a parse tree produced by SqlParser#insertStatement.
  override visitInsertStatement(ctx: ParserRuleContext) {
    const statement: SqlStatement = {
      type: "insert",
    };
    if (ctx.table) {
      statement.table = [{ name: this.visitTableName(ctx.table) }];
    }
    if (ctx.columns) {
      statement.columns = this.visitFullColumnNameList(ctx.columns);
    }
    if (ctx.identifier) {
      statement.identifier = this.visitFullColumnName(ctx.identifier);
    }

    // Object.assign(statement, ...this.visitChildren(ctx));
    if (ctx.values) {
      Object.assign(statement, this.visitInsertStatementValues(ctx.values));
    } else if (ctx.valueSet) {
      Object.assign(
        statement,
        this.visitInsertStatementSetValues(ctx.valueSet)
      );
    }

    if (!statement.columns?.length) {
      throw this.errorWithContext(
        new Error(`No columns found in insert statement`),
        ctx.columns || ctx
      );
    }
    const unbalanced = statement.values?.find(
      (v) => v?.length !== statement.columns?.length
    );

    if (unbalanced) {
      throw this.errorWithContext(
        new Error(
          `Unbalanced values in insert statement, expected ${statement.columns.length} values, found ${unbalanced.length}.`
        ),
        ctx.values || ctx
      );
    }

    return statement;
  }

  // Visit a parse tree produced by SqlParser#insertStatementSetValues.
  override visitInsertStatementSetValues(ctx: ParserRuleContext) {
    const columns: SqlColumn[] = [];
    const values: SqlValue[] = [];

    const updates = this.visitChildren(ctx).filter((o: any) => !!o?.set);
    updates.forEach(({ set, value }: any) => {
      columns.push(set);
      values.push(value);
    });
    const statement: SqlStatement = {
      columns,
      values: [values],
    };
    return statement;
  }

  // Visit a parse tree produced by SqlParser#insertStatementValues.
  override visitInsertStatementValues(ctx: ParserRuleContext) {
    const statement: SqlStatement = {};
    if (ctx.columns) {
      statement.columns = this.visitFullColumnNameList(ctx.columns);
    }
    if (ctx.values) {
      statement.values = this.visitInsertStatementValue(ctx.values).filter(
        hasType
      );
    }

    return statement;
  }

  // Visit a parse tree produced by SqlParser#insertStatementValue.
  override visitInsertStatementValue(ctx: ParserRuleContext) {
    return this.visitChildren(ctx).filter((data: any) => Array.isArray(data));
  }

  // Visit a parse tree produced by SqlParser#updatedElement.
  override visitUpdatedElement(ctx: ParserRuleContext) {
    const [column, , value] = this.visitChildren(ctx);
    const set = { type: "column", value: column };
    if (ctx.isDefault) {
      return { set, value: { type: "default", value: "default" } };
    }
    return { set, value };
  }

  // Visit a parse tree produced by SqlParser#orderByClause.
  override visitOrderByClause(ctx: ParserRuleContext) {
    return {
      orderBy: this.visitChildren(ctx).filter(isDefined),
    };
  }

  // Visit a parse tree produced by SqlParser#orderByExpression.
  override visitOrderByExpression(ctx: ParserRuleContext) {
    const order: SqlOrder = {
      name: this.visitFullColumnName(ctx.orderOn),
    };
    order.order = ctx.orderBy?.type === SqlParser.DESC ? "desc" : "asc";
    return order;
  }

  // Visit a parse tree produced by SqlParser#selectElements.
  override visitSelectElements(ctx: ParserRuleContext) {
    const columns: SqlColumn[] = this.visitChildren(ctx).filter(hasType);
    if (ctx.star && !columns.find((c) => c.value === "*")) {
      columns.push({ type: "column", value: "*", star: true });
    }

    const statement: SqlStatement = {
      columns,
    };
    return statement;
  }

  // Visit a parse tree produced by SqlParser#selectElement.
  override visitSelectElement(ctx: ParserRuleContext) {
    const col: SqlColumn = {
      type: "column",
      value: "",
    };

    if (ctx.starOf) {
      col.star = true;
      col.value = this.visitFullId(ctx.starOf);
    } else if (ctx.column) {
      col.value = this.visitFullColumnName(ctx.column);
    } else if (ctx.value) {
      const [value] = this.visitChildren(ctx);
      Object.assign(col, value);
    }

    if (ctx.alias) {
      col.alias = this.visitUid(ctx.alias);
    }

    return col;
  }

  override visitTableSource(ctx: ParserRuleContext) {
    const [tableName] = this.visitChildren(ctx);
    const tableSource: SqlTable = {
      name: tableName,
    };
    if (ctx.alias) {
      tableSource.alias = this.visitUid(ctx.alias);
    }

    return tableSource;
  }

  // Visit a parse tree produced by SqlParser#fromClause.
  override visitFromClause(ctx: ParserRuleContext) {
    const [, from, , where] = this.visitChildren(ctx);
    return {
      table: Array.isArray(from) ? from : [from],
      where,
    };
  }

  // Visit a parse tree produced by SqlParser#limitClause.
  override visitLimitClause(ctx: ParserRuleContext) {
    const statement: SqlStatement = {};
    if (ctx.limit) {
      statement.limit = this.visitDecimalLiteral(ctx.limit).valueNum;
    }
    if (ctx.offset) {
      statement.offset = this.visitDecimalLiteral(ctx.offset).valueNum;
    }

    return statement;
  }

  // Visit a parse tree produced by SqlParser#fullId.
  override visitFullId(ctx: ParserRuleContext) {
    const values = this.visitChildren(ctx).filter(isDefined);
    if (values.length === 1) {
      return values[0];
    }
    // Join and ensure we can get the same result back...
    const text = values.join(DOTTED_ID_CHAR);
    if (values.length !== text.split(DOTTED_ID_SPLIT).length) {
      throw this.errorWithContext(
        new Error(`Invalid identifier: ${text}`),
        ctx
      );
    }
    return text;
  }

  // Visit a parse tree produced by SqlParser#tableName.
  override visitTableName(ctx: ParserRuleContext) {
    const [value] = this.visitChildren(ctx);
    return value;
  }

  // Visit a parse tree produced by SqlParser#fullColumnName.
  override visitFullColumnName(ctx: ParserRuleContext) {
    const values = this.visitChildren(ctx).filter(isDefined);
    if (values.length === 1) {
      return values[0];
    }
    // Join and ensure we can get the same result back...
    const text = values.join(DOTTED_ID_CHAR);
    if (values.length !== text.split(DOTTED_ID_SPLIT).length) {
      throw this.errorWithContext(
        new Error(`Invalid identifier: ${text}`),
        ctx
      );
    }
    return text;
  }

  // Visit a parse tree produced by SqlParser#uid.
  override visitUid(ctx: ParserRuleContext) {
    const [value] = this.visitChildren(ctx);
    return value;
  }

  // Visit a parse tree produced by SqlParser#simpleId.
  override visitSimpleId(ctx: ParserRuleContext) {
    return ctx.getText(); // plain text
  }

  private unescapeChar(char: string) {
    switch (char) {
      case "n":
        return "\n";
      case "r":
        return "\r";
      case "t":
        return "\t";
      case "b":
        return "\b";
      case "f":
        return "\f";
      case "\\":
        return "\\";
      default:
        return char;
    }
  }

  // Visit a parse tree produced by SqlParser#doubleQuoteId
  override visitDoubleQuoteId(ctx: ParserRuleContext) {
    const text = ctx.getText();
    return text.substring(1, text.length - 1).replace(/(""|\\.)/g, (txt) => {
      if (txt === '""') {
        return '"';
      }
      return this.unescapeChar(txt[1]);
    });
  }

  // Visit a parse tree produced by SqlParser#reverseQuoteId
  override visitReverseQuoteId(ctx: ParserRuleContext) {
    const text = ctx.getText();
    return text.substring(1, text.length - 1).replace(/(``|\\.)/g, (txt) => {
      if (txt === "``") {
        return "`";
      }
      return this.unescapeChar(txt[1]);
    });
  }

  // Visit a parse tree produced by SqlParser#blockedQuoteId
  override visitBlockedQuoteId(ctx: ParserRuleContext) {
    const text = ctx.getText();
    return text.substring(1, text.length - 1);
  }

  // Visit a parse tree produced by SqlParser#dottedId.
  override visitDottedId(ctx: ParserRuleContext) {
    const [idOrToken, id2] = this.visitChildren(ctx).filter(isDefined);
    // Token '.' would be undefined, so use the second argument
    return idOrToken ?? id2;
  }

  // Visit a parse tree produced by SqlParser#dotLiteral.
  override visitDotLiteral(ctx: ParserRuleContext) {
    return ctx.getText().substring(1);
  }

  // Visit a parse tree produced by SqlParser#decimalLiteral.
  override visitDecimalLiteral(ctx: ParserRuleContext) {
    const value: SqlValue = {
      type: "number",
      value: ctx.getText(),
      valueNum: parseInt(ctx.getText(), 10),
    };
    return value;
  }

  // Visit a parse tree produced by SqlParser#constNumberLiteral.
  override visitConstNumberLiteral(ctx: ParserRuleContext) {
    const value: SqlValue = {
      type: "number",
      value: ctx.getText(),
      valueNum: parseFloat(ctx.getText()),
    };
    return value;
  }

  // Visit a parse tree produced by SqlParser#stringLiteral.
  override visitStringLiteral(ctx: ParserRuleContext) {
    const text = ctx.getText();
    const stringValue = text
      .substring(1, text.length - 1)
      .replace(/(''|\\.)/g, (txt) => {
        if (txt === "''") {
          return "'";
        }
        return this.unescapeChar(txt[1]);
      });
    const value: SqlValue = {
      type: "string",
      value: stringValue,
    };
    return value;
  }

  // Visit a parse tree produced by SqlParser#booleanLiteral.
  override visitBooleanLiteral(ctx: ParserRuleContext) {
    const text = ctx.getText();
    const value: SqlValue = {
      type: "boolean",
      value: text,
      valueBool: text[0] !== "f" && text[0] !== "F" && text[0] !== "0",
    };
    return value;
  }

  // Visit a parse tree produced by SqlParser#hexadecimalLiteral.
  override visitHexadecimalLiteral(ctx: ParserRuleContext) {
    const text = ctx.getText();
    let valueNum: number | undefined;
    if (text[0] === "x" || text[0] === "X") {
      valueNum = parseInt(text.substring(2, text.length - 1), 16);
    } else if (text[0] === "0" && (text[1] === "x" || text[1] === "X")) {
      valueNum = parseInt(text.substring(2), 16);
    }

    if (!valueNum || !Number.isFinite(valueNum)) {
      throw this.errorWithContext(
        new Error(`Invalid hexadecimal literal: ${text}`),
        ctx
      );
    }

    const value: SqlValue = {
      type: "hexadecimal",
      value: text,
      valueNum,
    };
    return value;
  }

  // Visit a parse tree produced by SqlParser#nullNotnull.
  override visitNullLiteral(ctx: ParserRuleContext) {
    const value: SqlValue = {
      type: "null",
      value: ctx.getText(),
    };
    return value;
  }

  override visitConstantsOrDefaults(ctx: ParserRuleContext) {
    return this.visitChildren(ctx).filter(hasType);
  }

  override visitConstantOrDefault(ctx: ParserRuleContext) {
    if (ctx.isDefault) {
      const defValue: SqlValue = { type: "default", value: ctx.getText() };
      return defValue;
    }
    const [value] = this.visitChildren(ctx);
    return value;
  }

  // Visit a parse tree produced by SqlParser#constant.
  override visitConstant(ctx: ParserRuleContext) {
    const [datum] = this.visitChildren(ctx);
    return datum;
  }

  // Visit a parse tree produced by SqlParser#fullColumnNameList.
  override visitFullColumnNameList(ctx: ParserRuleContext) {
    const columnNames: string[] = this.visitChildren(ctx).filter(
      isDefined
    ) as any;
    return columnNames.map<SqlColumn>((name) => ({
      type: "column",
      value: name,
    }));
  }

  // Visit a parse tree produced by SqlParser#constants.
  override visitConstants(ctx: ParserRuleContext) {
    return this.visitChildren(ctx);
  }

  override visitWhereExpression(ctx: ParserRuleContext) {
    const [expr] = this.visitChildren(ctx);
    return expr;
  }

  // Visit a parse tree produced by SqlParser#notExpression.
  override visitNotExpression(ctx: ParserRuleContext) {
    const [, exp] = this.visitChildren(ctx);
    exp.not = !exp.not;
    return exp;
  }

  // Visit a parse tree produced by SqlParser#logicalExpression.
  override visitLogicalExpression(ctx: ParserRuleContext) {
    const exp: SqlExpression = {};
    const children = this.visitChildren(ctx);
    const [left, op, right] = children;
    if (op === "AND") {
      exp.and = [left, right];
    } else {
      exp.or = [left, right];
    }
    return exp;
  }

  // Visit a parse tree produced by SqlParser#predicateExpression.
  override visitPredicateExpression(ctx: ParserRuleContext) {
    const [value] = this.visitChildren(ctx);
    return value;
  }

  // Visit a parse tree produced by SqlParser#inPredicate.
  override visitInPredicate(ctx: ParserRuleContext) {
    const left = this.visitPredicateOperand(ctx.left);
    const args = this.visitConstantAtoms(ctx.values).filter(hasType);
    const exp: SqlExpression = {
      or: args.map((right: any) => ({
        left,
        op: "=",
        right,
      })),
    };
    if (ctx.not) {
      exp.not = true;
    }
    return exp;
  }

  // Visit a parse tree produced by SqlParser#predicateOperand.
  override visitPredicateOperand(ctx: ParserRuleContext) {
    const [value] = this.visitChildren(ctx);
    return value;
  }

  // Visit a parse tree produced by SqlParser#isNullPredicate.
  override visitIsNullPredicate(ctx: ParserRuleContext) {
    const left = this.visitPredicateOperand(ctx.left);
    const exp: SqlPredicate = {
      left,
      op: "=",
      right: { type: "null", value: ctx.nil?.getText() ?? "NULL" },
    };
    if (ctx.not) {
      exp.not = true;
    }
    return exp;
  }

  // Visit a parse tree produced by SqlParser#binaryComparisonPredicate.
  override visitBinaryComparisonPredicate(ctx: ParserRuleContext) {
    const [left, operation, right] = this.visitChildren(ctx);
    const op = mapSynonymOperations(operation);
    const predicate: SqlPredicate = { left, op, right };
    return predicate;
  }

  // Visit a parse tree produced by SqlParser#betweenPredicate.
  override visitBetweenPredicate(ctx: ParserRuleContext) {
    // left=predicateOperand not=NOT? BETWEEN min=constant AND max=constant
    const left = this.visitPredicateOperand(ctx.left);
    const min = this.visitConstant(ctx.min);
    const max = this.visitConstant(ctx.max);
    const exp: SqlExpression = {
      and: [
        { left, op: ">=", right: min },
        { left, op: "<=", right: max },
      ],
    };
    if (ctx.not) {
      exp.not = true;
    }
    return exp;
  }

  // Visit a parse tree produced by SqlParser#likePredicate.
  override visitLikePredicate(ctx: ParserRuleContext) {
    // left=predicateOperand not=NOT? LIKE like=STRING_LITERAL
    const left = this.visitPredicateOperand(ctx.left);
    const like = this.visitStringLiteral(ctx.like);
    const exp: SqlPredicate = {
      left,
      op: "like",
      right: like,
    };
    if (ctx.not) {
      exp.not = true;
    }
    return exp;
  }

  // Visit a parse tree produced by SqlParser#regexpPredicate.
  override visitRegexpPredicate(ctx: ParserRuleContext) {
    // left=predicateOperand not=NOT? (REGEXP | RLIKE) regex=stringLiteral
    const left = this.visitPredicateOperand(ctx.left);
    const regex = this.visitStringLiteral(ctx.regex);
    const exp: SqlPredicate = {
      left,
      op: "regex",
      right: regex,
    };
    if (ctx.not) {
      exp.not = true;
    }
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by SqlParser#expressionAtomPredicate.
  override visitExpressionAtomPredicate(ctx: ParserRuleContext) {
    const [value] = this.visitChildren(ctx);
    return value;
  }

  // Visit a parse tree produced by SqlParser#constantAtoms.
  override visitConstantAtoms(ctx: ParserRuleContext) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by SqlParser#constantValueAtom.
  override visitConstantValueAtom(ctx: ParserRuleContext) {
    const [value] = this.visitChildren(ctx);
    return value;
  }

  // Visit a parse tree produced by SqlParser#fullColumnNameValueAtom.
  override visitFullColumnNameValueAtom(ctx: ParserRuleContext) {
    const [value] = this.visitChildren(ctx);
    const column: SqlValue = {
      type: "column",
      value,
    };
    return column;
  }

  // Visit a parse tree produced by SqlParser#constantExpressionAtom.
  override visitConstantExpressionAtom(ctx: ParserRuleContext) {
    const [value] = this.visitChildren(ctx);
    return value;
  }

  // Visit a parse tree produced by SqlParser#fullColumnNameExpressionAtom.
  override visitFullColumnNameExpressionAtom(ctx: ParserRuleContext) {
    const [value] = this.visitChildren(ctx);
    const column: SqlValue = {
      type: "column",
      value,
    };
    return column;
  }

  // Visit a parse tree produced by SqlParser#nestedExpressionAtom.
  override visitNestedExpressionAtom(ctx: ParserRuleContext) {
    const [, exp] = this.visitChildren(ctx);
    return exp;
  }

  // Visit a parse tree produced by SqlParser#comparisonOperator.
  override visitComparisonOperator(ctx: ParserRuleContext) {
    return ctx.getText();
  }

  // Visit a parse tree produced by SqlParser#logicalOperator.
  override visitLogicalOperator(ctx: ParserRuleContext) {
    const op = ctx.getText();
    if (op[0] === "A" || op[0] === "a" || op[0] === "&") {
      return "AND";
    }
    return "OR";
  }
}
