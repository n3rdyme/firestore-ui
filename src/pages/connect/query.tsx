/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 9th, 2022
 * ****************************************************************************
 */
import React from "react";
import { Splitter } from "../../components/splitter";
import { QueryEdit } from "./components/queryEdit";

const defaultQuery = `/*
 * Enter your sql query here 
 */

SELECT * 
FROM "Collection Name" 
WHERE "Field Name" = 'Whatever'
;
`;

export function DatabaseQuery() {
  const [query, setQuery] = React.useState<string | undefined>(defaultQuery);
  return (
    <Splitter
      minSize={50}
      defaultSize={180}
      top={<QueryEdit value={query} onChange={setQuery} />}
      bottom={<div>Results will be here</div>}
    />
  );
}
