/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 14th, 2022
 * ****************************************************************************
 */

import numeral from "numeral";
import React, { useMemo } from "react";
import { SqlStatementResult } from "../../../services/sqlStatement";
import { ResultViewType } from "./constants";
import { JsonInspect } from "./jsonInspect";
import { ResultTable } from "./resultTable";
import { ResultToolbar } from "./resultToolbar";

export function ResultPanel({ results }: { results?: SqlStatementResult }) {
  const [resultType, setResultType] = React.useState<ResultViewType>("table");
  const description = useMemo(() => {
    if (!results) {
      return "Waiting...";
    }
    let text = `${numeral(results.recordsAffected).format("0,0")} record${
      results.recordsAffected > 1 ? "s" : ""
    } affected`;
    if (results.recordsFetched) {
      text += `, ${numeral(results.recordsFetched).format("0,0")} record${
        results.recordsFetched > 1 ? "s" : ""
      } fetched`;
    }
    if (results.errors?.length) {
      text += `, ${numeral(results.errors.length).format("0,0")} error`;
      text += results.errors.length > 1 ? "s" : "";
    }
    if (results.timeTaken) {
      const seconds = results.timeTaken / 1000;
      text += ` in ${numeral(seconds).format("0.0a")} seconds`;
    }

    return `${text}.`;
  }, [results]);

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
      <div className="bg-gray-400 border-t border-navy-300 py-1 px-4 text-xs">
        {description}
      </div>
    </div>
  );
}
