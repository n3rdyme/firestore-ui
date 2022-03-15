/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 14th, 2022
 * ****************************************************************************
 */

import React from "react";
import { SqlFieldValue } from "../../../services/sqlFieldValue";
import { SqlColumn } from "../../../services/sqlStatement";

export interface TableHeadingProps {
  column: SqlColumn;
}

export function TableHeading({ column }: TableHeadingProps) {
  const col = new SqlFieldValue(column);
  const title = col.aliasName ?? col.fqFieldName;
  return (
    <th>
      <div className="px-3">{title}</div>
    </th>
  );
}
