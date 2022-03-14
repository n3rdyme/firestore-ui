/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 14th, 2022
 * ****************************************************************************
 */

import React, { useMemo } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { ErrorMessage } from "../../../components/cardMessage";
import { SqlStatementResult } from "../../../services/sqlStatement";
import { classNames } from "../../../utils/classNames";
import { TableData } from "./tableData";
import { TableHeading } from "./tableHeading";

export function ResultTable({ results }: { results: SqlStatementResult }) {
  const columns = useMemo(
    () =>
      !results?.statement.columns
        ? Object.keys(results?.rows[0] ?? {})
        : results.statement.columns.map((c) => c.value),
    [results]
  );

  const { unknownErrors, rowToError } = useMemo(
    () => ({
      unknownErrors: results?.errors?.filter((e) => e.rowIndex == null),
      rowToError: results?.errors
        ?.filter((e) => e.rowIndex != null)
        .reduce(
          (acc, err) => ({ ...acc, [err.rowIndex ?? -1]: err }),
          {} as { [key: number]: Error }
        ),
    }),
    [results]
  );

  return (
    <div className="flex flex-grow flex-col overflow-scroll">
      {unknownErrors?.length > 0 &&
        unknownErrors.map((e) => (
          <ErrorMessage message={e.message} key={e.toString()} />
        ))}
      <table className="w-full">
        <thead>
          <tr>
            <th className="w-1 px-3 bg-navy-50 text-right">#</th>
            {columns.map((c) => (
              <TableHeading key={c} title={c} />
            ))}
            <th className="w-1/2">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {results.rows?.map((row, index) => (
            <tr
              key={row.$id ?? index}
              className={classNames({ "bg-red-100": !!rowToError[index] })}
            >
              <td className="px-3 bg-navy-50 text-right">{index + 1}</td>
              {columns.map((c) => (
                <TableData key={c} row={row} column={c} />
              ))}
              {!!rowToError[index] && (
                <td className="w-full px-3 text-danger flex flex-nowrap items-center whitespace-nowrap max-w-none">
                  <FaExclamationTriangle className="mr-2" />
                  {rowToError[index]?.message}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
