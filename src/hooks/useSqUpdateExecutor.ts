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
import { updateDoc } from "firebase/firestore";

import { SqlStatement, SqlStatementResult } from "../services/sqlStatement";
import { useFirestore } from "../services/firebaseApp";
import { FirestoreQueryPlan } from "../utils/firestoreQueryPlan";
import { expandSqlColumns } from "../services/expandSqlColumns";
import { promiseParallel } from "../utils/promiseParallel";
import { SqlFieldValue } from "../services/sqlFieldValue";

export function useSqlUpdateExecutor() {
  const fs = useFirestore();
  return useCallback(
    async (statement: SqlStatement): Promise<SqlStatementResult> => {
      if (!fs) {
        throw new Error("Firestore is not initialized.");
      }
      if (statement.type !== "update") {
        throw new Error("Expected update statement");
      }

      const { table, columns, values } = statement;
      if (
        !table?.[0].name ||
        !columns?.length ||
        values?.length !== 1 ||
        columns.length !== values[0].length
      ) {
        console.error("Invalid statement", statement);
        throw new Error("Expected update with table and columns to set.");
      }

      const result: SqlStatementResult = {
        statement,
        columns,
        rows: [],
        errors: [],
        recordsAffected: 0,
        recordsFetched: 0,
      };

      const fsQuery = new FirestoreQueryPlan(fs);
      const found = await fsQuery.execute(statement);

      result.rows = await promiseParallel(
        found,
        async (doc, rowIndex) => {
          const { data } = doc;

          try {
            for (let ix = 0; ix < columns.length; ix++) {
              const lhs = new SqlFieldValue(columns[ix]);
              const rhs = new SqlFieldValue(values[0][ix]);
              // console.debug({ lhs, rhs, value: rhs.getValue(data) });
              lhs.setValue(data, rhs.getValue(data));
            }

            await updateDoc(doc.ref, data);
          } catch (e: unknown) {
            console.error(e, { data, columns, values: values[0] });
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
