/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 14th, 2022
 * ****************************************************************************
 */

import React, { useCallback } from "react";
import { SqlFieldValue } from "../../../services/sqlFieldValue";
import { SqlColumn } from "../../../services/sqlStatement";
import { classNames } from "../../../utils/classNames";
import { patterns } from "../../../utils/patterns";

export interface ResultRowProps {
  row: any;
  column: SqlColumn;
  showDetail?: (title: string, obj: any, col?: SqlColumn) => void;
}

export function ResultRow({ showDetail, row, column }: ResultRowProps) {
  const onOpen = useCallback(
    () => showDetail?.(column.alias ?? column.value, row, column),
    [showDetail, row, column]
  );
  let value = new SqlFieldValue(column).getValue(row);
  let title: string | undefined;
  let align: "justify-start" | "justify-end" = "justify-start";
  let color: string | undefined;
  let width = "w-8";
  let expand = false;

  if (value instanceof Date || patterns.isoDateTime.test(value)) {
    title = new Date(value).toISOString();
    value = new Date(value).toLocaleString();
    align = "justify-end";
    width = "w-24";
  } else if (typeof value === "string") {
    color = "text-red-600";
    width = "w-32";
  } else if (typeof value === "number" || typeof value === "bigint") {
    align = "justify-end";
    color = "text-green-700";
    width = "w-16";
  } else if (typeof value === "boolean") {
    value = value ? "true" : "false";
    color = "text-blue-800";
    width = "w-8";
  } else if (value == null) {
    color = value === null ? "text-blue-800" : "text-gray-500";
    value = JSON.stringify(value);
    width = "w-16";
  } else if (typeof value === "object") {
    value = JSON.stringify(value);
    title = JSON.stringify(value, null, 2);
    expand = true;
    width = "w-32";
  }

  return (
    <td className={width}>
      <div
        title={title ?? value}
        className={classNames("flex relative px-3 truncate", align, color)}
      >
        {value}
        {expand && (
          <button
            type="button"
            onClick={onOpen}
            className="text-xs bg-white text-gray-400 hover:text-secondary p-0 m-0 px-1 absolute right-0 top-0 bottom-0"
          >
            &#x2026;
          </button>
        )}
      </div>
    </td>
  );
}
