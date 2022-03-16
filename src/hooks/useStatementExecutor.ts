/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 13th, 2022
 * ****************************************************************************
 */

import { useCallback } from "react";
import { SqlStatement, SqlStatementResult } from "../services/sqlStatement";
import { useSqlDeleteExecutor } from "./useSqDeleteExecutor";
import { useSqlInsertExecutor } from "./useSqlInsertExecutor";
import { useSqlSelectExecutor } from "./useSqSelectExecutor";
import { useSqlUpdateExecutor } from "./useSqUpdateExecutor";

export function useStatementExecutor() {
  const execInsert = useSqlInsertExecutor();
  const execSelect = useSqlSelectExecutor();
  const execUpdate = useSqlUpdateExecutor();
  const execDelete = useSqlDeleteExecutor();

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
      } else if (statement.type === "delete") {
        result = await execDelete(statement);
      } else {
        throw new Error(`Unsupported statement type: ${statement.type}`);
      }

      result.timeTaken = Date.now() - startedAt;
      return result;
    },
    [execDelete, execInsert, execSelect, execUpdate]
  );
}
