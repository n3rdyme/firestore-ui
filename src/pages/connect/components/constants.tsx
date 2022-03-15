/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 13th, 2022
 * ****************************************************************************
 */

export type QueryViewType = "none" | "run" | "inspect" | "help";

export type ResultViewType = "table" | "json" | "inspect";

export const DefaultQuery = `/* Enter your sql query here */
SELECT Make_Name, Model_Name
  FROM Models
  WHERE Model_Name >= 'FIREBLADE' 
  ORDER BY Model_Name
  LIMIT 10 OFFSET 1
;
`;
