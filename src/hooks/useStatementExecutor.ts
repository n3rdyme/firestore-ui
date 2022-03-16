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
import { useSqlSelectExecutor } from "./useSqSelectExecutor";
import { useSqUpdateExecutor } from "./useSqUpdateExecutor";

export function useStatementExecutor() {
  const execInsert = useSqlInsertExecutor();
  const execSelect = useSqlSelectExecutor();
  const execUpdate = useSqUpdateExecutor();

  return useCallback(
    async (statement: SqlStatement): Promise<SqlStatementResult> => {
      const startedAt = Date.now();
      let result: SqlStatementResult;

      if (statement.type === "insert") {
        result = await execInsert(statement);
      } else if (statement.type === "select") {
        result = await execSelect(statement);
      } else if (statement.type === "update") {
        result = await execUpdate(statement);
      } else {
        throw new Error(`Unsupported statement type: ${statement.type}`);
      }

      result.timeTaken = Date.now() - startedAt;
      return result;
    },
    [execInsert, execSelect, execUpdate]
  );
}
