/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 9th, 2022
 * ****************************************************************************
 */

import React from "react";
import { Splitter } from "../../../components/splitter";
import { useParsedSQL } from "../../../hooks/useParsedSQL";
import { DefaultQuery, ResultViewType } from "./constants";
import { QueryEdit } from "./queryEdit";
import { QueryHelp } from "./queryHelp";
import { QueryInspect } from "./queryInspect";
import { QueryToolbar } from "./queryToolbar";

export function QueryView() {
  const [resultType, setResultType] = React.useState<ResultViewType>("none");
  const [query, setQuery] = React.useState<string | undefined>(DefaultQuery);
  const parsed = useParsedSQL(query);

  return (
    <Splitter
      minSize={50}
      defaultSize={180}
      top={
        <>
          <QueryToolbar resultType={resultType} setResultType={setResultType} />
          <QueryEdit value={query} onChange={setQuery} errors={parsed.errors} />
        </>
      }
      bottom={
        {
          none: null,
          inspect: <QueryInspect parsed={parsed} />,
          run: null,
          help: <QueryHelp />,
        }[resultType]
      }
    />
  );
}
