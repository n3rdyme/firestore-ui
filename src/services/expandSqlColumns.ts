/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 15th, 2022
 * ****************************************************************************
 */

import _ from "lodash";
import { SqlFieldValue } from "./sqlFieldValue";
import { DOTTED_ID_CHAR, SqlColumn } from "./sqlStatement";

export function expandSqlColumns(
  columns: SqlColumn[],
  rowData?: any[]
): SqlColumn[] {
  if (!rowData?.length) {
    return columns;
  }
  const newCols: SqlColumn[] = [];
  const seen = new Set<string>(columns.map((c) => c.value));
  for (const col of columns) {
    if (col.star) {
      let dataset = rowData;
      let nested = "";
      if (col.value && col.value !== "*") {
        const colVal = new SqlFieldValue(col);
        nested = col.value + DOTTED_ID_CHAR;
        dataset = dataset.map((row) => colVal.getValue(row));
      }
      for (const name of _.uniq(
        _.flatten(dataset.map((r) => Object.keys(r ?? {})))
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
  return newCols;
}
