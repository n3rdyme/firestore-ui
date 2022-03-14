/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 14th, 2022
 * ****************************************************************************
 */

import React, { useMemo } from "react";
import { SqlStatementResult } from "../../../services/sqlStatement";

export function ResultTable({ results }: { results: SqlStatementResult }) {
  const columns = useMemo(
    () =>
      !results?.statement.columns
        ? Object.keys(results?.rows[0] ?? {})
        : results.statement.columns.map((c) => c.value),
    [results]
  );

  return (
    <div className="flex flex-grow flex-col overflow-scroll">
      <table className="w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">#</th>
            {columns.map((c) => (
              <th key={c}>{c}</th>
            ))}
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {results.rows?.map((row, index) => (
            <tr key={row}>
              <td className="px-4 py-2">{index + 1}</td>
              {columns.map((c) => (
                <td key={c}>{row[c]}</td>
              ))}
              <td className="w-full" />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
