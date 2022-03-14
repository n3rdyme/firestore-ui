/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 14th, 2022
 * ****************************************************************************
 */

import React from "react";
import { SqlStatementResult } from "../../../services/sqlStatement";
import { JsonInspect } from "./jsonInspect";

export function ResultPanel({ results }: { results: SqlStatementResult }) {
  return (
    <div className="flex flex-grow flex-col">
      <JsonInspect data={results} />
    </div>
  );
}
