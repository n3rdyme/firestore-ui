/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 14th, 2022
 * ****************************************************************************
 */

import React, { useCallback, useEffect, useMemo } from "react";
import { ErrorMessage } from "../../../components/cardMessage";
import { expandSqlColumns } from "../../../services/expandSqlColumns";
import { SqlFieldValue } from "../../../services/sqlFieldValue";
import { SqlColumn, SqlStatementResult } from "../../../services/sqlStatement";
import { ModalJsonView } from "./modalJsonView";
import { TableHeading } from "./tableHeading";
import { TableRow } from "./tableRow";

interface ExpandableSqlColumn extends SqlColumn {
  canExpand?: boolean;
}

export function ResultTable({ results }: { results: SqlStatementResult }) {
  const [viewJsonOf, setViewJsonOf] =
    React.useState<{ title: string; obj: any }>();
  const clearJsonView = useCallback(() => setViewJsonOf(undefined), []);

  const [columns, setColumns] = React.useState<ExpandableSqlColumn[]>(() =>
    results.columns.map((c) => ({ ...c, canExpand: undefined }))
  );
  useEffect(
    () =>
      setColumns(results.columns.map((c) => ({ ...c, canExpand: undefined }))),
    [results.columns]
  );

  const expandable = useMemo(() => {
    const result = [...columns];
    let needed = result.map((_, i) => i);
    for (let ix = 0; ix < results.rows.length && needed.length; ix += 1) {
      needed = needed.filter((colIx) => {
        const datum = new SqlFieldValue(result[colIx]).getValue(
          results.rows[ix]
        );
        if (datum == null) {
          return true;
        }
        result[colIx].canExpand =
          result[colIx].type === "column" &&
          typeof datum === "object" &&
          !(datum instanceof Date);
        return false;
      });
    }
    return result;
  }, [columns, results?.rows]);

  const showColumnDetail = useCallback(
    (title: string, row: any, col?: SqlColumn) => {
      if (col) {
        setViewJsonOf({
          title,
          obj: new SqlFieldValue(col).getValue(row),
        });
      } else if (row) {
        setViewJsonOf({ title, obj: row });
      }
    },
    []
  );

  const expandColumn = useCallback(
    (col: SqlColumn) => {
      const expandIx = expandable.findIndex((c) => c === col);
      const newCols = expandSqlColumns(
        expandable.map((c, ix) => ({ ...c, star: ix === expandIx })),
        results.rows
      );
      setColumns(newCols);
    },
    [expandable, results.rows]
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
                {expandable.map((c) => (
                  <TableHeading
                    key={c.value}
                    column={c}
                    onExpand={c.canExpand ? expandColumn : undefined}
                  />
                ))}
                <th className="w-1/2 border">&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {results.rows?.map((row, index) => (
                <TableRow
                  key={row?.$id ?? index}
                  index={index}
                  columns={columns}
                  row={row}
                  error={rowToError[index]}
                  showDetail={showColumnDetail}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
