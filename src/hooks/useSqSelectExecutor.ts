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

import { SqlStatement, SqlStatementResult } from "../services/sqlStatement";
import { useFirestore } from "../services/firebaseApp";
import { FirestoreQueryPlan } from "../utils/firestoreQueryPlan";
import { expandSqlColumns } from "../services/expandSqlColumns";

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

      result.recordsAffected = result.rows.length;
      result.recordsFetched = fsQuery.recordsScanned;

      // Expand the column names for uses of '*'
      result.columns = expandSqlColumns(result.columns, result.rows);

      return result;
    },
    [fs]
  );
}
