/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 13th, 2022
 * ****************************************************************************
 */

import { useCallback } from "react";
import { SqlStatement, SqlStatementResult } from "../services/sqlStatement";
import { useSqlInsertExecutor } from "./useSqlInsertExecutor";

export function useStatementExecutor() {
  const execInsert = useSqlInsertExecutor();

  return useCallback(
    async (statement: SqlStatement): Promise<SqlStatementResult> => {
      if (statement.type === "insert") {
        return execInsert(statement);
      }
      throw new Error(`Unsupported statement type: ${statement.type}`);
    },
    [execInsert]
  );
}
