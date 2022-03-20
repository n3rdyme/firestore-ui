/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 14th, 2022
 * ****************************************************************************
 */

import React from "react";
import { ErrorMessage } from "../../../components/cardMessage";
import { Spinner } from "../../../components/spinner";
import { SqlStatementResult } from "../../../services/sqlStatement";
import { ResultViewType } from "./constants";
import { JsonInspect } from "./jsonInspect";
import { ResultDescription } from "./resultDescription";
import { ResultTable } from "./resultTable";
import { ResultToolbar, ResultToolbarProps } from "./resultToolbar";

export interface ResultPanelProps extends Pick<ResultToolbarProps, "onClose"> {
  inProgress?: boolean;
  error?: Error | null;
  results?: SqlStatementResult;
}

export function ResultPanel({
  inProgress,
  error,
  results,
  onClose,
}: ResultPanelProps) {
  const [resultType, setResultType] = React.useState<ResultViewType>("table");

  return (
    <div className="flex flex-grow flex-col">
      <ResultToolbar
        results={results}
        resultType={resultType}
        setResultType={setResultType}
        onClose={onClose}
      />
      {!!error && <ErrorMessage message={error.message} />}
      {!results ? (
        <div className="flex flex-grow flex-col items-center justify-center relative">
          {inProgress ? <Spinner /> : "No Results"}
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
