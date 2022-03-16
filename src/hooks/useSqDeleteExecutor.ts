/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 15th, 2022
 * ****************************************************************************
 */
/* eslint-disable no-plusplus */
/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 14th, 2022
 * ****************************************************************************
 */
/* eslint-disable no-param-reassign */
/* eslint-disable no-await-in-loop */

import { useCallback } from "react";
import { deleteDoc } from "firebase/firestore";

import { SqlStatement, SqlStatementResult } from "../services/sqlStatement";
import { useFirestore } from "../services/firebaseApp";
import { FirestoreQueryPlan } from "../utils/firestoreQueryPlan";
import { expandSqlColumns } from "../services/expandSqlColumns";
import { promiseParallel } from "../utils/promiseParallel";
import { SqlFieldValue } from "../services/sqlFieldValue";

export function useSqlDeleteExecutor() {
  const fs = useFirestore();
  return useCallback(
    async (statement: SqlStatement): Promise<SqlStatementResult> => {
      if (!fs) {
        throw new Error("Firestore is not initialized.");
      }
      if (statement.type !== "delete") {
        throw new Error("Expected delete statement");
      }

      const { table, columns, values } = statement;
      if (!table?.[0].name) {
        console.error("Invalid statement", statement);
        throw new Error("Expected delete with table.");
      }

      const result: SqlStatementResult = {
        statement,
        columns: [{ type: "column", value: "*", star: true }],
        rows: [],
        errors: [],
        recordsAffected: 0,
        recordsFetched: 0,
      };

      const fsQuery = new FirestoreQueryPlan(fs, table[0].name);
      const found = await fsQuery.execute(statement);

      result.rows = await promiseParallel(
        found,
        async (doc, rowIndex) => {
          const data = doc.data();

          try {
            await deleteDoc(doc.ref);
          } catch (e: unknown) {
            console.error(e, { rowIndex, data });
            (e as any).rowIndex = rowIndex;
            result.errors.push(e as any);
          }

          return {
            $id: doc.id,
            ...data,
          };
        },
        10
      );

      result.recordsAffected = result.rows.length;
      result.recordsFetched = fsQuery.recordsScanned;

      // Expand the column names for uses of '*'
      result.columns = expandSqlColumns(result.columns, result.rows);

      return result;
    },
    [fs]
  );
}
