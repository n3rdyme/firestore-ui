/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 14th, 2022
 * ****************************************************************************
 */

import React, { useCallback } from "react";
import { FaPlus } from "react-icons/fa";
import { SqlFieldValue } from "../../../services/sqlFieldValue";
import { SqlColumn } from "../../../services/sqlStatement";

export interface TableHeadingProps {
  column: SqlColumn;
  onExpand?: (col: SqlColumn) => void;
}

export function TableHeading({ column, onExpand }: TableHeadingProps) {
  const onClick = useCallback(() => onExpand?.(column), [onExpand, column]);
  const expand = !!onExpand;

  const col = new SqlFieldValue(column);
  const title = col.aliasName ?? col.fqFieldName;
  return (
    <th>
      <div className="flex flex-row px-3">
        {title}
        {expand && (
          <button
            type="button"
            onClick={onClick}
            title="Expand all fields in this object to columns"
            className="text-xs text-gray-500 hover:text-secondary p-0 m-0 px-1 -mr-2 ml-auto"
          >
            {/* &#x2026; */}
            <FaPlus />
          </button>
        )}
      </div>
    </th>
  );
}
