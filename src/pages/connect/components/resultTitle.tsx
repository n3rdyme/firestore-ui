/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 9th, 2022
 * ****************************************************************************
 */

import React from "react";
import { FaTimes } from "react-icons/fa";

export interface ResultTitleProps
  extends Pick<React.HTMLAttributes<HTMLDivElement>, "children"> {
  onClose?: () => void;
}

export function ResultTitle({ onClose, children }: ResultTitleProps) {
  return (
    <div className="flex flex-row py-2 px-4  text-light text-xl font-semibold bg-navy-300">
      {children}
      <div className="flex-grow" />
      {!!onClose && (
        <button
          type="button"
          className="bg-transparent text-light py-1 px-2 h-8 w-8"
          onClick={onClose}
        >
          <FaTimes />
        </button>
      )}
    </div>
  );
}
