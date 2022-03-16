/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 14th, 2022
 * ****************************************************************************
 */

import numeral from "numeral";
import React, { useMemo } from "react";
import { Spinner } from "../../../components/spinner";
import { SqlStatementResult } from "../../../services/sqlStatement";
import { ResultViewType } from "./constants";
import { JsonInspect } from "./jsonInspect";
import { ResultDescription } from "./resultDescription";
import { ResultTable } from "./resultTable";
import { ResultToolbar } from "./resultToolbar";

export function ResultPanel({ results }: { results?: SqlStatementResult }) {
  const [resultType, setResultType] = React.useState<ResultViewType>("table");

  return (
    <div className="flex flex-grow flex-col">
      <ResultToolbar resultType={resultType} setResultType={setResultType} />
      {!results ? (
        <div className="flex flex-grow flex-col relative">
          <Spinner />
        </div>
      ) : (
        {
          table: <ResultTable results={results} />,
          json: <JsonInspect data={results.rows} />,
          inspect: <JsonInspect data={results} />,
        }[resultType]
      )}

      <ResultDescription results={results} />
    </div>
  );
}
