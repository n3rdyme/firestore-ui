/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 13th, 2022
 * ****************************************************************************
 */

import { useCallback } from "react";
import { DOTTED_ID_SPLIT, SqlColumn, SqlValue } from "../services/sqlStatement";

export function useSqlDocumentUpdate() {
  // Right now this could just be a function, but it may need environment data
  // like author and date at some point, so I'm going to make it a hook now.

  return useCallback((doc: any, col: SqlColumn, value: SqlValue) => {
    if (!col.value) {
      throw new Error("Column name is required for insert/update.");
    }

    let typedValue: any;
    if (value.type === "string") {
      typedValue = value.value;
    } else if (value.type === "number" || value.type === "hexadecimal") {
      typedValue = Number(value.value);
    } else if (value.type === "boolean") {
      typedValue = value.value === "true";
    } else if (value.type === "null") {
      typedValue = null;
    }

    let data = doc;
    const parts = col.value.split(DOTTED_ID_SPLIT);

    parts.forEach((key, ix) => {
      if (ix === parts.length - 1) {
        data[key] = typedValue;
        return;
      }

      if (!data[key]) {
        data[key] = {};
      }
      data = data[key];
    });
  }, []);
}
