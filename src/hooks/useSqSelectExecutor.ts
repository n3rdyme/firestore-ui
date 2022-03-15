/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 14th, 2022
 * ****************************************************************************
 */
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

import _ from "lodash";
import {
  DOTTED_ID_CHAR,
  SqlColumn,
  SqlStatement,
  SqlStatementResult,
} from "../services/sqlStatement";
import { useFirestore } from "../services/firebaseApp";
import { FirestoreQueryPlan } from "../utils/firestoreQueryPlan";
import { SqlFieldValue } from "../services/sqlFieldValue";

export function useSqlSelectExecutor() {
  const fs = useFirestore();
  return useCallback(
    async (statement: SqlStatement): Promise<SqlStatementResult> => {
      if (!fs) {
        throw new Error("Firestore is not initialized.");
      }
      if (statement.type !== "select") {
        throw new Error("Expected select statement");
      }

      const { table, columns } = statement;
      if (!table?.[0].name || !columns?.length) {
        console.error("Invalid statement", statement);
        throw new Error("Expected select with table and columns.");
      }

      const result: SqlStatementResult = {
        statement,
        columns,
        rows: [],
        errors: [],
        recordsAffected: 0,
        recordsFetched: 0,
      };

      const fsQuery = new FirestoreQueryPlan(fs, table[0].name);
      const found = await fsQuery.execute(statement);

      result.rows = found.map((doc) => ({
        $id: doc.id,
        ...doc.data(),
      }));

      // Expand the column names for uses of '*'
      if (result.rows.length) {
        const newCols: SqlColumn[] = [];
        const seen = new Set<string>(columns.map((c) => c.value));
        for (const col of columns) {
          if (col.star) {
            let dataset = result.rows;
            let nested = "";
            if (col.value && col.value !== "*") {
              const colVal = new SqlFieldValue(col);
              nested = col.value + DOTTED_ID_CHAR;
              dataset = dataset.map((row) => colVal.getValue(row));
            }
            for (const name of _.uniq(
              _.flatten(dataset.map((r) => Object.keys(r)))
            )) {
              if (!seen.has(name)) {
                seen.add(name);
                newCols.push({ type: "column", value: nested + name });
              }
            }
          } else {
            newCols.push(col);
          }
        }
        result.columns = newCols;
      }

      return result;
    },
    [fs]
  );
}
