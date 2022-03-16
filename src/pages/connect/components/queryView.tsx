/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 9th, 2022
 * ****************************************************************************
 */

import React, { useCallback } from "react";
import { Splitter } from "../../../components/splitter";
import { useParsedSQL } from "../../../hooks/useParsedSQL";
import { useDebouncedStateStorage } from "../../../hooks/useStateStorage";
import { DefaultQuery, QueryViewType } from "./constants";
import { QueryEdit } from "./queryEdit";
import { QueryHelp } from "./queryHelp";
import { JsonInspect } from "./jsonInspect";
import { QueryRunner } from "./queryRunner";
import { QueryToolbar } from "./queryToolbar";
import { ResultTitle } from "./resultTitle";

export function QueryView() {
  const [resultType, setResultType] = React.useState<QueryViewType>("none");
  const [resultTime, setResultTime] = React.useState("");
  const [query, debouncedQuery, setQuery] = useDebouncedStateStorage<
    string | undefined
  >("last-query", DefaultQuery, 400);

  console.log(debouncedQuery);
  const parsed = useParsedSQL(debouncedQuery);

  const onChangeResultType = useCallback((changeType: QueryViewType) => {
    setResultType(changeType);
    setResultTime(`${changeType}@${new Date().toISOString()}`);
  }, []);

  const onClose = useCallback(() => setResultType("none"), []);

  return (
    <Splitter
      minSize={50}
      defaultSize={180}
      top={
        <>
          <QueryToolbar
            isValid={!parsed.errors?.length}
            resultType={resultType}
            setResultType={onChangeResultType}
          />
          <QueryEdit value={query} onChange={setQuery} errors={parsed.errors} />
        </>
      }
      bottom={
        {
          none: null,
          inspect: (
            <div className="flex flex-grow flex-col">
              <ResultTitle onClose={onClose}>Inspect Query</ResultTitle>
              <JsonInspect data={parsed} />
            </div>
          ),
          run: (
            <QueryRunner
              parsed={parsed}
              instanceKey={resultTime}
              onClose={onClose}
            />
          ),
          help: (
            <div className="flex flex-grow flex-col">
              <ResultTitle onClose={onClose}>Query Help</ResultTitle>
              <QueryHelp />
            </div>
          ),
        }[resultType]
      }
    />
  );
}
