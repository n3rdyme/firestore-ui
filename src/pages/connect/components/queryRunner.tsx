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
import { ErrorMessage } from "../../../components/cardMessage";
import { ProgressModal } from "../../../components/progressModal";
import { ResultView } from "./resultView";

export function QueryRunner({
  parsed,
  instanceKey: inputKey,
}: {
  parsed: ParsedSQLResult;
  instanceKey: string;
}) {
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
      setError(null);
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
        .catch(setError)
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
      {!!error && <ErrorMessage message={error.message} />}
      <ResultView results={results} />
    </div>
  );
}
