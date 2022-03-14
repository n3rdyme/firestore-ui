/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 13th, 2022
 * ****************************************************************************
 */

export type QueryViewType = "none" | "run" | "inspect" | "help";

export type ResultViewType = "table" | "json" | "inspect";

export const DefaultQuery = `/*
 * Enter your sql query here 
 */

SELECT foo, bar, * 
  FROM "Collection Name" 
  WHERE "Field Name" = 'Whatever'
  ORDER BY "Field Name" ASC
  LIMIT 10 OFFSET 0
;
`;