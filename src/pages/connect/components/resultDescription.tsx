/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 15th, 2022
 * ****************************************************************************
 */

import React, { useMemo } from "react";
import numeral from "numeral";
import { SqlStatementResult } from "../../../services/sqlStatement";

export function ResultDescription({
  results,
}: {
  results?: SqlStatementResult;
}) {
  const description = useMemo(() => {
    if (!results) {
      return "Waiting...";
    }
    let text = `${numeral(results.recordsAffected).format("0,0")} record${
      results.recordsAffected > 1 ? "s" : ""
    } affected`;
    if (results.recordsFetched != null) {
      text += `, ${numeral(results.recordsFetched).format("0,0")} record${
        results.recordsFetched > 1 ? "s" : ""
      } fetched`;
    }
    if (results.errors?.length) {
      text += `, ${numeral(results.errors.length).format("0,0")} error`;
      text += results.errors.length > 1 ? "s" : "";
    }
    if (results.timeTaken) {
      const seconds = results.timeTaken / 1000;
      text += ` in ${numeral(seconds).format("0.0a")} seconds`;
    }

    return `${text}.`;
  }, [results]);

  return (
    <div className="bg-gray-400 border-t border-navy-300 py-1 px-4 text-xs">
      {description}
    </div>
  );
}
