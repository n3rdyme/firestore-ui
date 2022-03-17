/* eslint-disable no-param-reassign */
/* eslint-disable no-await-in-loop */
/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 13th, 2022
 * ****************************************************************************
 */

import { useCallback } from "react";
import { SqlStatement, SqlStatementResult } from "../services/sqlStatement";
import { useCollectionInsert } from "./useCollectionInsert";
import { useSqlDocumentUpdate } from "./useSqlDocumentUpdate";

export function useSqlInsertExecutor() {
  const insert = useCollectionInsert();
  const modify = useSqlDocumentUpdate();

  return useCallback(
    async (statement: SqlStatement): Promise<SqlStatementResult> => {
      if (statement.type !== "insert") {
        throw new Error("Expected insert statement");
      }

      const { table, columns, values: rows } = statement;
      if (!table?.[0].name || !columns || !rows) {
        throw new Error("Expected insert with table, columns, and values");
      }

      const result: SqlStatementResult = {
        statement,
        columns,
        rows: [],
        errors: [],
        recordsAffected: 0,
      };

      for (const values of rows) {
        const doc = {};
        columns.forEach((col, ix) => modify(doc, col, values[ix]));
        result.rows.push(doc);
        await insert(table[0].name, table[0].identifier, doc)
          .then(() => {
            result.recordsAffected += 1;
          })
          .catch((ex: unknown) => {
            (ex as any).rowIndex = result.rows.length - 1;
            result.errors.push(ex as any);
          });
      }

      return result;
    },
    [insert, modify]
  );
}
