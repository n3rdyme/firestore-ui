/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 9th, 2022
 * ****************************************************************************
 */

import React, { useCallback } from "react";
import { BsZoomIn } from "react-icons/bs";
import { FaCode, FaTable } from "react-icons/fa";
import { ResultViewType } from "./constants";
import { ResultTitle, ResultTitleProps } from "./resultTitle";

export interface ResultToolbarProps extends Omit<ResultTitleProps, "children"> {
  resultType: ResultViewType;
  setResultType: (type: ResultViewType) => void;
}

export function ResultToolbar({
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

  return (
    <ResultTitle onClose={onClose}>
      <div className="flex flex-row flex-nowrap space-x-2 text-dark">
        <button type="button" className="bg-light py-1" onClick={onViewTable}>
          <FaTable className="mr-1" /> Data Table
        </button>
        <button type="button" className="bg-light py-1" onClick={onViewJson}>
          <FaCode className="mr-1" /> JSON Data
        </button>
        <button type="button" className="bg-light py-1" onClick={onInspect}>
          <BsZoomIn className="mr-1" /> Inspect
        </button>
      </div>
    </ResultTitle>
  );
}
