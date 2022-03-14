/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 9th, 2022
 * ****************************************************************************
 */

import React, { useEffect, useState } from "react";
import stringify from "json-stringify-pretty-compact";
import Editor from "@monaco-editor/react";
import { ParsedSQLResult } from "../../../hooks/useParsedSQL";
import { useWindowWidth } from "../../../hooks/useWindowWidth";
import { SqlStatementResult } from "../../../services/sqlStatement";
import { promiseParallel } from "../../../utils/promiseParallel";
import { useStatementExecutor } from "../../../hooks/useStatementExecutor";
import { ErrorMessage } from "../../../components/cardMessage";

export function QueryRunner({ parsed }: { parsed: ParsedSQLResult }) {
  const sqlExec = useStatementExecutor();
  const [error, setError] = React.useState<Error | null>(null);
  const [results, setResults] = React.useState<SqlStatementResult[]>([]);
  const [run, setRun] = useState(true);
  const fontSize = 12;
  const winSizeX = useWindowWidth();

  useEffect(() => {
    if (run) {
      promiseParallel(parsed.statements, sqlExec, 1)
        .then(setResults)
        .catch(setError);
      setRun(false);
    }
  }, [run, parsed, sqlExec]);

  const [jsonText, setJsonText] = React.useState<string | undefined>();
  useEffect(() => {
    setJsonText(
      stringify(results, {
        indent: 2,
        maxLength: Math.floor(winSizeX / (fontSize * 0.66)),
      })
    );
  }, [results, winSizeX]);

  return (
    <div className="flex-grow flex flex-col">
      {!!error && <ErrorMessage message={error.message} />}
      <div className="flex-grow flex flex-col text-xs font-mono whitespace-pre bg-light relative overflow-clip">
        <Editor
          className="absolute top-0 left-0 right-0 bottom-0 border"
          defaultLanguage="json"
          options={{
            minimap: { enabled: false },
            readOnly: true,
            fontSize,
          }}
          value={jsonText}
        />
      </div>
    </div>
  );
}
