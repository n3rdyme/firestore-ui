/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 13th, 2022
 * ****************************************************************************
 */

import React from "react";
import { FaTimes } from "react-icons/fa";
import { classNames } from "../utils/classNames";

export type ModalProps = {
  shown: boolean;
  maxWidth?: string;
  onClose?: () => void;
} & Pick<React.HTMLProps<HTMLDivElement>, "children">;

export function Modal({ shown, onClose, maxWidth, children }: ModalProps) {
  if (!shown) {
    return null;
  }

  return (
    <div
      className="fixed z-50 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
          onClick={onClose}
        />

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className={classNames(
            "relative inline-block align-bottom",
            "bg-white rounded-lg px-4 pt-5 pb-4",
            "text-left overflow-hidden shadow-xl",
            "transform transition-all",
            "w-full sm:w-auto",
            "sm:my-8 sm:align-middle sm:w-full sm:p-6",
            maxWidth ?? "sm:max-w-md"
          )}
        >
          <button
            type="button"
            className="absolute top-3 right-3 ml-auto text-gray-500"
            onClick={onClose}
          >
            <FaTimes />
          </button>
          <div className="flex flex-col w-full">{children}</div>
        </div>
      </div>
    </div>
  );
}
