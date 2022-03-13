/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 13th, 2022
 * ****************************************************************************
 */

import React from "react";
import { FaStopCircle } from "react-icons/fa";
import { Modal } from "./modal";
import { Progress } from "./progress";

export interface ProgressModalProps {
  inProgress: boolean;
  value: number;
  max: number;
  label: string;
  cancel?: () => void;
}

export function ProgressModal({
  inProgress,
  label,
  max,
  value,
  cancel,
}: ProgressModalProps) {
  return (
    <Modal shown={inProgress}>
      <Progress inProgress label={label} value={value} max={max} />
      {!!cancel && (
        <div className="mt-6 flex flex-col items-center justify-center">
          <button
            type="button"
            className="bg-light flex flex-row items-center py-2 px-4 text-danger border rounded-lg shadow-sm hover:bg-danger hover:text-white"
            onClick={cancel}
          >
            <FaStopCircle className="mr-2" />
            Cancel
          </button>
        </div>
      )}
    </Modal>
  );
}
