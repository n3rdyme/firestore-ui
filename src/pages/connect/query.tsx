/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 9th, 2022
 * ****************************************************************************
 */
import React from "react";
import { Splitter } from "../../components/splitter";
import { useParsedSQL } from "../../hooks/useParsedSQL";
import { QueryEdit } from "./components/queryEdit";

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

  const parsed = useParsedSQL(query);

  return (
    <Splitter
      minSize={50}
      defaultSize={180}
      top={
        <QueryEdit value={query} onChange={setQuery} errors={parsed.errors} />
      }
      bottom={
        <div className="font-mono whitespace-pre">
          {JSON.stringify(parsed, null, 2)}
        </div>
      }
    />
  );
}
