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
import { DefaultQuery, QueryViewType } from "./constants";
import { QueryEdit } from "./queryEdit";
import { QueryHelp } from "./queryHelp";
import { JsonInspect } from "./jsonInspect";
import { QueryRunner } from "./queryRunner";
import { QueryToolbar } from "./queryToolbar";

export function QueryView() {
  const [resultType, setResultType] = React.useState<QueryViewType>("none");
  const [resultTime, setResultTime] = React.useState("");
  const [query, setQuery] = React.useState<string | undefined>(DefaultQuery);
  const parsed = useParsedSQL(query);

  const onChangeResultType = useCallback((changeType: QueryViewType) => {
    setResultType(changeType);
    setResultTime(`${changeType}@${new Date().toISOString()}`);
  }, []);

  return (
    <Splitter
      minSize={50}
      defaultSize={180}
      top={
        <>
          <QueryToolbar
            resultType={resultType}
            setResultType={onChangeResultType}
          />
          <QueryEdit value={query} onChange={setQuery} errors={parsed.errors} />
        </>
      }
      bottom={
        {
          none: null,
          inspect: <JsonInspect data={parsed} />,
          run: <QueryRunner parsed={parsed} instanceKey={resultTime} />,
          help: <QueryHelp />,
        }[resultType]
      }
    />
  );
}
