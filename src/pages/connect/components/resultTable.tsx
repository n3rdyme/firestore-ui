/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 14th, 2022
 * ****************************************************************************
 */

import React, { useCallback, useMemo } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { ErrorMessage } from "../../../components/cardMessage";
import { SqlFieldValue } from "../../../services/sqlFieldValue";
import { SqlColumn, SqlStatementResult } from "../../../services/sqlStatement";
import { classNames } from "../../../utils/classNames";
import { ModalJsonView } from "./modalJsonView";
import { TableData } from "./tableData";
import { TableHeading } from "./tableHeading";

export function ResultTable({ results }: { results: SqlStatementResult }) {
  const [viewJsonOf, setViewJsonOf] =
    React.useState<{ title: string; obj: any }>();
  const clearJsonView = useCallback(() => setViewJsonOf(undefined), []);

  const showColumnDetail = useCallback((row: any, col: SqlColumn) => {
    const data = new SqlFieldValue(col);
    setViewJsonOf({
      title: data.aliasName ?? data.fqFieldName,
      obj: data.getValue(row),
    });
  }, []);

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
    <div className="flex flex-grow flex-col">
      {unknownErrors?.length > 0 &&
        unknownErrors.map((e) => (
          <ErrorMessage message={e.message} key={e.toString()} />
        ))}
      <ModalJsonView
        shown={viewJsonOf !== undefined}
        title={viewJsonOf?.title}
        obj={viewJsonOf?.obj}
        onClose={clearJsonView}
      />
      <div className="flex flex-grow flex-col relative">
        <div className="absolute overflow-scroll top-0 left-0 bottom-0 right-0">
          <table className="w-full">
            <thead className="sticky top-0 bg-white">
              <tr>
                <th className="w-1 px-3 bg-navy-50 text-right">
                  <div className="">#</div>
                </th>
                {results.columns.map((c) => (
                  <TableHeading key={c.value} column={c} />
                ))}
                <th className="w-1/2 border">&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {results.rows?.map((row, index) => (
                <tr
                  key={row.$id ?? index}
                  className={classNames({ "bg-red-100": !!rowToError[index] })}
                >
                  <td className="px-3 bg-navy-50 text-right">{index + 1}</td>
                  {(results.columns ?? []).map((c) => (
                    <TableData
                      key={c.value}
                      row={row}
                      column={c}
                      openDetails={showColumnDetail}
                    />
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
      </div>
    </div>
  );
}
