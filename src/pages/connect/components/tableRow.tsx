/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 17th, 2022
 * ****************************************************************************
 */

import React, { useCallback } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { SqlColumn } from "../../../services/sqlStatement";
import { classNames } from "../../../utils/classNames";
import { ResultRow } from "./resultRow";

export interface TableRowProps {
  index: number;
  columns: SqlColumn[];
  row: any;
  error?: Error;
  showDetail?: (title: string, obj: any, col?: SqlColumn) => void;
}

export function TableRow({
  index,
  columns,
  row,
  error,
  showDetail,
}: TableRowProps) {
  const showRowDetail = useCallback(
    () => showDetail?.(row?.$id ?? "undefined", row),
    [showDetail, row]
  );

  return (
    <tr className={classNames({ "bg-red-100": !!error })}>
      <td className="px-3 bg-navy-50 text-right">{index + 1}</td>
      {(columns ?? []).map((c) => (
        <ResultRow key={c.value} row={row} column={c} showDetail={showDetail} />
      ))}
      <td>
        <button
          type="button"
          onClick={showRowDetail}
          className="text-xs text-gray-400 hover:text-secondary p-0 m-0 px-1"
        >
          &#x2026;
        </button>
        {!!error && (
          <div className="w-full px-3 text-danger flex flex-nowrap items-center whitespace-nowrap max-w-none">
            <FaExclamationTriangle className="mr-2" />
            {error?.message}
          </div>
        )}
      </td>
    </tr>
  );
}
