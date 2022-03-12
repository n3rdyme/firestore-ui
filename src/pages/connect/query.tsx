/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 9th, 2022
 * ****************************************************************************
 */

import React, { useEffect } from "react";
import stringify from "json-stringify-pretty-compact";
import Editor from "@monaco-editor/react";
import { Splitter } from "../../components/splitter";
import { useParsedSQL } from "../../hooks/useParsedSQL";
import { QueryEdit } from "./components/queryEdit";
import { useWindowWidth } from "../../hooks/useWindowWidth";

const defaultQuery = `/*
 * Enter your sql query here 
 */

SELECT foo, bar, * 
  FROM "Collection Name" 
  WHERE "Field Name" = 'Whatever'
  ORDER BY "Field Name" ASC
  LIMIT 10 OFFSET 0
;
`;

export function DatabaseQuery() {
  const [query, setQuery] = React.useState<string | undefined>(defaultQuery);
  const fontSize = 12;
  const winSizeX = useWindowWidth();

  const parsed = useParsedSQL(query);
  const [jsonText, setJsonText] = React.useState<string | undefined>();
  useEffect(() => {
    setJsonText(
      stringify(parsed, {
        indent: 2,
        maxLength: Math.floor(winSizeX / (fontSize * 0.66)),
      })
    );
  }, [parsed]);

  return (
    <Splitter
      minSize={50}
      defaultSize={180}
      top={
        <QueryEdit value={query} onChange={setQuery} errors={parsed.errors} />
      }
      bottom={
        <div className="flex-grow flex flex-col text-xs font-mono whitespace-pre bg-light relative">
          {}
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
      }
    />
  );
}
