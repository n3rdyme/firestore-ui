/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 13th, 2022
 * ****************************************************************************
 */

import { useCallback } from "react";
import { SqlFieldValue } from "../services/sqlFieldValue";
import { SqlColumn, SqlValue } from "../services/sqlStatement";

export function useSqlDocumentUpdate() {
  // Right now this could just be a function, but it may need environment data
  // like author and date at some point, so I'm going to make it a hook now.

  return useCallback((doc: any, col: SqlColumn, value: SqlValue) => {
    new SqlFieldValue(col).setValue(doc, value);
  }, []);
}
