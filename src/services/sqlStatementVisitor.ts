/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 10th, 2022
 * ****************************************************************************
 */
import { GenericSQL, SqlParserVisitor } from "dt-sql-parser";

export interface ParserError {
  startLine: number;
  endLine: number;
  startCol: number;
  endCol: number;
  message: string;
}

export class SqlStatementVisitor extends SqlParserVisitor {
  public statements: any[] = [];

  static parseSql(sql: string) {
    const parser = new GenericSQL();

    const errors: ParserError[] = [];
    const tree = parser.parse(sql, (err) => errors?.push(err));

    let statements: any[] | undefined;
    if (!errors?.length) {
      const visitor = new SqlStatementVisitor();
      visitor.visitSelectSpec(tree);
      statements = visitor.statements;
    }

    return { errors, statements };
  }

  // overwrite visitTableName
  override visitTableName(ctx: any) {
    const tableName = ctx.getText();
    console.log("TableName", tableName, {
      start: ctx.start,
      stop: ctx.stop,
      keys: Object.keys(ctx),
    });
  }

  // overwrite visitSelectElements
  visitSelectElements(ctx: any) {
    const selectElements = ctx.getText();
    console.log("SelectElements", selectElements, {
      start: ctx.start,
      stop: ctx.stop,
      keys: Object.keys(ctx),
    });
  }
}
