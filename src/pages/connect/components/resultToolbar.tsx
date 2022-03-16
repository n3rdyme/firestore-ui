/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 9th, 2022
 * ****************************************************************************
 */

import React, { useCallback, useMemo } from "react";
import { BsZoomIn } from "react-icons/bs";
import { FaCode, FaTable } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuItem,
} from "../../../components/dropdownMenu";
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

  const menuItems: (DropdownMenuItem & { id: string })[] = useMemo(
    () => [
      { id: "table", icon: FaTable, name: "Data Table", onClick: onViewTable },
      { id: "json", icon: FaCode, name: "JSON Data", onClick: onViewJson },
      { id: "inspect", icon: BsZoomIn, name: "Inspect", onClick: onInspect },
    ],
    [onViewTable, onViewJson, onInspect]
  );

  return (
    <ResultTitle onClose={onClose}>
      <div className="flex flex-row flex-nowrap space-x-2 text-dark">
        <DropdownMenu
          currentItem={menuItems.findIndex((x) => x.id === resultType)}
          items={menuItems}
        />
      </div>
    </ResultTitle>
  );
}
