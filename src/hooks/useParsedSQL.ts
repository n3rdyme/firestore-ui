/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 11th, 2022
 * ****************************************************************************
 */

import { useEffect, useState } from "react";
import { ParserError } from "../services/sqlParser";
import { SqlStatement } from "../services/sqlStatement";
import { SqlStatementVisitor } from "../services/sqlStatementVisitor";

export interface ParsedSQLResult {
  sql?: string;
  errors?: ParserError[];
  statements: SqlStatement[];
}

export function useParsedSQL(sql?: string): ParsedSQLResult {
  const [statements, setStatements] = useState<SqlStatement[]>([]);
  const [errors, setErrors] = useState<ParserError[]>();

  useEffect(() => {
    if (!sql) {
      setStatements([]);
      setErrors(undefined);
      return;
    }

    const { errors: errs, statements: stmt } =
      SqlStatementVisitor.parseSql(sql);
    setErrors(errs);
    setStatements(stmt);
  }, [sql]);

  return { sql, errors, statements };
}
