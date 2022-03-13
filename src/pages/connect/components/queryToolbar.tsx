/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 9th, 2022
 * ****************************************************************************
 */

import React, { useCallback } from "react";
import { BsZoomIn } from "react-icons/bs";
import { FaPlayCircle, FaQuestionCircle } from "react-icons/fa";
import { ResultViewType } from "./constants";

export interface QueryToolbarProps {
  resultType: ResultViewType;
  setResultType: (type: ResultViewType) => void;
}

export function QueryToolbar({ resultType, setResultType }: QueryToolbarProps) {
  const onRun = useCallback(() => setResultType("run"), [setResultType]);
  const onInspect = useCallback(
    () => setResultType("inspect"),
    [setResultType]
  );
  const onHelp = useCallback(() => setResultType("help"), [setResultType]);

  return (
    <div className="flex flex-row py-2 px-4 space-x-2 text-base text-dark">
      <button type="button" className="bg-light py-1" onClick={onRun}>
        <FaPlayCircle className="mr-1" /> Run Query
      </button>
      <button type="button" className="bg-light py-1" onClick={onInspect}>
        <BsZoomIn className="mr-1" /> Inspect Query
      </button>
      <div className="flex-grow" />
      <button
        type="button"
        className="bg-light py-1 px-2 h-8 w-8"
        onClick={onHelp}
      >
        <FaQuestionCircle />
      </button>
    </div>
  );
}
