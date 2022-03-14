/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 14th, 2022
 * ****************************************************************************
 */

import React from "react";
import { SqlStatementResult } from "../../../services/sqlStatement";
import { ResultViewType } from "./constants";
import { JsonInspect } from "./jsonInspect";
import { ResultTable } from "./resultTable";
import { ResultToolbar } from "./resultToolbar";

export function ResultPanel({ results }: { results: SqlStatementResult }) {
  const [resultType, setResultType] = React.useState<ResultViewType>("table");

  return (
    <div className="flex flex-grow flex-col">
      <ResultToolbar resultType={resultType} setResultType={setResultType} />
      {
        {
          table: !results ? null : <ResultTable results={results} />,
          json: !results ? null : <JsonInspect data={results.rows} />,
          inspect: !results ? null : <JsonInspect data={results} />,
        }[resultType]
      }
    </div>
  );
}
