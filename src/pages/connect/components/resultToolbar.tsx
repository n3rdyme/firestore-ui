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

export interface ResultToolbarProps {
  resultType: ResultViewType;
  setResultType: (type: ResultViewType) => void;
}

export function ResultToolbar({
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
    <div className="flex flex-row py-2 px-4 space-x-2 text-base text-dark bg-navy-300">
      <button type="button" className="bg-light py-1" onClick={onViewTable}>
        <FaTable className="mr-1" /> Data Table
      </button>
      <button type="button" className="bg-light py-1" onClick={onViewJson}>
        <FaCode className="mr-1" /> JSON Data
      </button>
      <button type="button" className="bg-light py-1" onClick={onInspect}>
        <BsZoomIn /> Inspect
      </button>
      <div className="flex-grow" />
    </div>
  );
}
