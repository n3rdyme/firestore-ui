/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 9th, 2022
 * ****************************************************************************
 */

import React, { useCallback, useEffect, useState } from "react";
import { ParsedSQLResult } from "../../../hooks/useParsedSQL";
import { SqlStatementResult } from "../../../services/sqlStatement";
import { promiseParallel } from "../../../utils/promiseParallel";
import { useStatementExecutor } from "../../../hooks/useStatementExecutor";
import { ProgressModal } from "../../../components/progressModal";
import { ResultView, ResultViewProps } from "./resultView";

export interface QueryRunnerProps extends Pick<ResultViewProps, "onClose"> {
  parsed: ParsedSQLResult;
  instanceKey: string;
}

export function QueryRunner({
  parsed,
  instanceKey: inputKey,
  onClose,
}: QueryRunnerProps) {
  const sqlExec = useStatementExecutor();
  const [instanceKey, setInstanceKey] = useState(inputKey);
  const [error, setError] = React.useState<Error | null>(null);
  const [results, setResults] = React.useState<SqlStatementResult[]>([]);
  const [progress, setProgress] =
    React.useState<{ count: number; total: number }>();
  const cancelRequest = React.useRef({ cancel: false });
  const [run, setRun] = useState("");

  useEffect(() => setInstanceKey(inputKey), [inputKey]);

  const onCancel = useCallback(() => {
    cancelRequest.current.cancel = true;
  }, []);

  useEffect(() => {
    if (run !== instanceKey) {
      const parseError = parsed.errors?.[0];
      setError(
        parseError
          ? new Error(
              `(${parseError.startLine}:${parseError.startCol}) ${parseError.message}`
            )
          : null
      );
      setResults([]);
      cancelRequest.current.cancel = false;
      setProgress({ count: 0, total: parsed.statements.length });
      setRun(instanceKey);

      promiseParallel(
        parsed.statements,
        sqlExec,
        1,
        (count, total) => setProgress({ count, total }),
        cancelRequest.current
      )
        .then(setResults)
        .catch((ex) => {
          setError(ex);
          console.error(ex);
        })
        .finally(() => setProgress(undefined));
    }
  }, [run, instanceKey, parsed, sqlExec]);

  return (
    <div className="flex-grow flex flex-col">
      <ProgressModal
        inProgress={!!progress}
        value={progress?.count ?? 0}
        max={progress?.total ?? 0}
        cancel={onCancel}
        label={`Running ${
          progress?.total === 1 ? "query" : `${progress?.total} queries`
        }...`}
      />
      <ResultView
        inProgress={!!progress}
        error={error}
        results={results}
        onClose={onClose}
      />
    </div>
  );
}
