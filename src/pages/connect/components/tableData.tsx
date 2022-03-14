/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 14th, 2022
 * ****************************************************************************
 */

import React from "react";
import { classNames } from "../../../utils/classNames";
import { patterns } from "../../../utils/patterns";

export interface TableDataProps {
  row: any;
  column: string;
}

export function TableData({ row, column }: TableDataProps) {
  let value = row[column];
  let align: "text-left" | "text-right" = "text-left";
  let color: string | undefined;
  let width = "w-8";

  if (value instanceof Date || patterns.isoDateTime.test(value)) {
    value = new Date(value).toLocaleString();
    align = "text-right";
    width = "w-24";
  } else if (typeof value === "string") {
    color = "text-red-600";
    width = "w-32";
  } else if (typeof value === "number" || typeof value === "bigint") {
    align = "text-right";
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
    width = "w-32";
  }

  return (
    <td className={width}>
      <div title={value} className={classNames("px-3 truncate", align, color)}>
        {value}
      </div>
    </td>
  );
}
