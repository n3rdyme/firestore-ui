/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 20th, 2022
 * ****************************************************************************
 */

import { SqlFieldValue } from "../services/sqlFieldValue";
import { SqlStatementResult } from "../services/sqlStatement";

export function createResultTable(results?: SqlStatementResult) {
  if (!results || !results.rows || !results.columns) {
    return [];
  }

  const columns = results?.columns
    .map((col) => new SqlFieldValue(col))
    .map((col) => ({
      name: col.aliasName ?? col.fqFieldName,
      col,
    }));

  const rows = results.rows.map((row) =>
    Object.assign(
      {},
      ...columns.map(({ name, col }) => {
        let val = col.getValue(row);
        if (val == null) val = "";
        else if (val instanceof Date) val = val.toLocaleString();
        else if (typeof val === "object") val = JSON.stringify(val);
        return { [name]: val };
      })
    )
  );

  return rows;
}
