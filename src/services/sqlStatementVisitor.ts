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
  SqlCondition as SqlPredicate,
  SqlExpression,
  SqlOrder,
  SqlStatement,
  SqlTable,
  SqlValue,
} from "./sqlStatement";

type ParserRuleContext = AParserRuleContext & { [key: string]: any };

export class SqlStatementVisitor extends SqlParserVisitor {
  private readonly output: SqlStatement[];

  private readonly statements: SqlStatement[];

  constructor(statements: any[]) {
    super();
    this.output = statements;
    this.statements = [];
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
      const visitor = new SqlStatementVisitor(statements);
      visitor.visitProgram(tree);
      // console.debug(statements);
    }

    return { errors, statements };
  }

  visit(ctx: ParserRuleContext): any {
    return SqlParserVisitor.prototype.visit.call(this, ctx);
  }

  private visitChildren(ctx: ParserRuleContext) {
    return SqlParserVisitor.prototype.visitChildren.call(this, ctx);
  }

  // visitTerminal(node: TerminalNode): any;

  // visitErrorNode(node: ErrorNode): any;

  // Visit a parse tree produced by SqlParser#program.
  override visitProgram(ctx: ParserRuleContext) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by SqlParser#sqlStatement.
  override visitSqlStatement(ctx: ParserRuleContext) {
    const [result] = this.visitChildren(ctx);
    this.output.push(result);
  }

  // Visit a parse tree produced by SqlParser#deleteStatement.
  override visitDeleteStatement(ctx: ParserRuleContext) {
    const statement: SqlStatement = {
      type: "delete",
    };
    Object.assign(statement, ...this.visitChildren(ctx));
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
    };
    Object.assign(statement, ...this.visitChildren(ctx));
    return statement;
  }

  // Visit a parse tree produced by SqlParser#insertStatement.
  override visitInsertStatement(ctx: ParserRuleContext) {
    const statement: SqlStatement = {
      type: "insert",
    };
    Object.assign(statement, ...this.visitChildren(ctx));
    return statement;
  }

  // Visit a parse tree produced by SqlParser#insertStatementValue.
  override visitInsertStatementValue(ctx: ParserRuleContext) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by SqlParser#updatedElement.
  override visitUpdatedElement(ctx: ParserRuleContext) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by SqlParser#orderByClause.
  override visitOrderByClause(ctx: ParserRuleContext) {
    return {
      orderBy: this.visitChildren(ctx).filter((o: any) => !!o),
    };
  }

  // Visit a parse tree produced by SqlParser#orderByExpression.
  override visitOrderByExpression(ctx: ParserRuleContext) {
    const order: SqlOrder = {
      name: ctx.orderOn.getText(),
    };
    order.order = ctx.orderBy?.type === SqlParser.DESC ? "desc" : "asc";
    return order;
  }

  // Visit a parse tree produced by SqlParser#selectElements.
  override visitSelectElements(ctx: ParserRuleContext) {
    const columns: SqlColumn[] = this.visitChildren(ctx).filter(
      (o: any) => !!o
    );
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
    const colData = ctx.starOf ?? ctx.column ?? ctx.value;
    const col: SqlColumn = {
      type: "column",
      value: colData.getText(),
    };

    if (ctx.starOf) {
      col.value = ctx.getText();
      col.star = true;
    }
    if (ctx.alias) {
      col.alias = ctx.alias.getText();
    }
    if (ctx.value) {
      Object.assign(col, ...this.visitChildren(ctx));
    }

    return col;
  }

  override visitTableSource(ctx: ParserRuleContext) {
    const [tableName] = this.visitChildren(ctx);
    const tableSource: SqlTable = {
      name: tableName,
    };
    if (ctx.alias) {
      tableSource.alias = ctx.alias.getText();
    }

    return tableSource;
  }

  // Visit a parse tree produced by SqlParser#fromClause.
  override visitFromClause(ctx: ParserRuleContext) {
    const [, from, , where] = this.visitChildren(ctx);
    return {
      from: Array.isArray(from) ? from : [from],
      where,
    };
  }

  // Visit a parse tree produced by SqlParser#limitClause.
  override visitLimitClause(ctx: ParserRuleContext) {
    const statement: SqlStatement = {};
    if (ctx.limit) {
      statement.limit = parseInt(ctx.limit.getText(), 10);
    }
    if (ctx.offset) {
      statement.offset = parseInt(ctx.offset.getText(), 10);
    }

    return statement;
  }

  // Visit a parse tree produced by SqlParser#fullId.
  override visitFullId(ctx: ParserRuleContext) {
    return ctx.getText();
  }

  // Visit a parse tree produced by SqlParser#tableName.
  override visitTableName(ctx: ParserRuleContext) {
    return ctx.getText();
  }

  // Visit a parse tree produced by SqlParser#fullColumnName.
  override visitFullColumnName(ctx: ParserRuleContext) {
    return ctx.getText();
  }

  // Visit a parse tree produced by SqlParser#uid.
  override visitUid(ctx: ParserRuleContext) {
    return ctx.getText();
  }

  // Visit a parse tree produced by SqlParser#simpleId.
  override visitSimpleId(ctx: ParserRuleContext) {
    return ctx.getText();
  }

  // Visit a parse tree produced by SqlParser#dottedId.
  override visitDottedId(ctx: ParserRuleContext) {
    return ctx.getText();
  }

  // Visit a parse tree produced by SqlParser#decimalLiteral.
  override visitDecimalLiteral(ctx: ParserRuleContext) {
    const value: SqlValue = {
      type: "number",
      value: ctx.getText(),
    };
    return value;
  }

  // Visit a parse tree produced by SqlParser#decimalLiteral.
  override visitConstNumberLiteral(ctx: ParserRuleContext) {
    const value: SqlValue = {
      type: "number",
      value: ctx.getText(),
    };
    return value;
  }

  // Visit a parse tree produced by SqlParser#stringLiteral.
  override visitStringLiteral(ctx: ParserRuleContext) {
    const value: SqlValue = {
      type: "string",
      value: ctx.getText(),
    };
    return value;
  }

  // Visit a parse tree produced by SqlParser#booleanLiteral.
  override visitBooleanLiteral(ctx: ParserRuleContext) {
    const value: SqlValue = {
      type: "boolean",
      value: ctx.getText(),
    };
    return value;
  }

  // Visit a parse tree produced by SqlParser#hexadecimalLiteral.
  override visitHexadecimalLiteral(ctx: ParserRuleContext) {
    const value: SqlValue = {
      type: "hexadecimal",
      value: ctx.getText(),
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

  // Visit a parse tree produced by SqlParser#constant.
  override visitConstant(ctx: ParserRuleContext) {
    const [datum] = this.visitChildren(ctx);
    return datum;
  }

  // Visit a parse tree produced by SqlParser#uidList.
  override visitUidList(ctx: ParserRuleContext) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by SqlParser#constants.
  override visitConstants(ctx: ParserRuleContext) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by SqlParser#notExpression.
  override visitNotExpression(ctx: ParserRuleContext) {
    const [result] = this.visitChildren(ctx);
    result.not = !result.not;
    return result;
  }

  // Visit a parse tree produced by SqlParser#logicalExpression.
  override visitLogicalExpression(ctx: ParserRuleContext) {
    const exp: SqlExpression = {};
    const [left, op, right] = this.visitChildren(ctx);
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
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by SqlParser#isNullPredicate.
  override visitIsNullPredicate(ctx: ParserRuleContext) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by SqlParser#binaryComparisonPredicate.
  override visitBinaryComparisonPredicate(ctx: ParserRuleContext) {
    const [left, op, right] = this.visitChildren(ctx);
    const predicate: SqlPredicate = { left, op, right };
    return predicate;
  }

  // Visit a parse tree produced by SqlParser#betweenPredicate.
  override visitBetweenPredicate(ctx: ParserRuleContext) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by SqlParser#likePredicate.
  override visitLikePredicate(ctx: ParserRuleContext) {
    return this.visitChildren(ctx);
  }

  // Visit a parse tree produced by SqlParser#regexpPredicate.
  override visitRegexpPredicate(ctx: ParserRuleContext) {
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
    const [child] = this.visitChildren(ctx);
    return child;
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
