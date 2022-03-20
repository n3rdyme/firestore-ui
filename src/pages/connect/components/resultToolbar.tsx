/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 9th, 2022
 * ****************************************************************************
 */

import React, { useCallback, useMemo } from "react";
import { BsZoomIn } from "react-icons/bs";
import { FaCode, FaDownload, FaTable } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuItem,
} from "../../../components/dropdownMenu";
import { useDownloadCSV, useDownloadFile } from "../../../hooks/useDownloadCSV";
import { SqlStatementResult } from "../../../services/sqlStatement";
import { createResultTable } from "../../../utils/createResultTable";
import { ResultViewType } from "./constants";
import { ResultTitle, ResultTitleProps } from "./resultTitle";

export interface ResultToolbarProps extends Omit<ResultTitleProps, "children"> {
  results?: SqlStatementResult;
  resultType: ResultViewType;
  setResultType: (type: ResultViewType) => void;
}

export function ResultToolbar({
  results,
  onClose,
  resultType,
  setResultType,
}: ResultToolbarProps) {
  const onViewTable = useCallback(
    () => setResultType("table"),
    [setResultType]
  );
  const onInspect = useCallback(
    () => setResultType("inspect"),
    [setResultType]
  );
  const onViewJson = useCallback(() => setResultType("json"), [setResultType]);

  const menuItems: (DropdownMenuItem & { id: string })[] = useMemo(
    () => [
      { id: "table", icon: FaTable, name: "Data Table", onClick: onViewTable },
      { id: "json", icon: FaCode, name: "JSON Data", onClick: onViewJson },
      { id: "inspect", icon: BsZoomIn, name: "Inspect", onClick: onInspect },
    ],
    [onViewTable, onViewJson, onInspect]
  );

  const filename = `${
    results?.statement?.table?.[0]?.alias ??
    results?.statement?.table?.[0]?.name ??
    "select"
  }-${new Date().toISOString().slice(0, 10)}`;

  const downloadCsv = useDownloadCSV(
    `${filename}.csv`,
    useCallback(() => createResultTable(results), [results])
  );

  const downloadJson = useDownloadFile(
    `${filename}.json`,
    "application/json",
    useCallback(() => JSON.stringify(results?.rows ?? [], null, 2), [results])
  );

  const downloadInspect = useDownloadFile(
    `${filename}.json`,
    "application/json",
    useCallback(
      () => JSON.stringify(results?.statement ?? [], null, 2),
      [results]
    )
  );

  return (
    <ResultTitle onClose={onClose}>
      <div className="flex flex-row flex-nowrap space-x-2 text-dark">
        <DropdownMenu
          currentItem={menuItems.findIndex((x) => x.id === resultType)}
          items={menuItems}
        />

        {resultType === "table" && (
          <button type="button" className="bg-light py-1" onClick={downloadCsv}>
            <FaDownload className="mr-1" /> Download CSV
          </button>
        )}
        {resultType === "json" && (
          <button
            type="button"
            className="bg-light py-1"
            onClick={downloadJson}
          >
            <FaDownload className="mr-1" /> Download JSON
          </button>
        )}
        {resultType === "inspect" && (
          <button
            type="button"
            className="bg-light py-1"
            onClick={downloadInspect}
          >
            <FaDownload className="mr-1" /> Download JSON
          </button>
        )}
      </div>
    </ResultTitle>
  );
}
