/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 13th, 2022
 * ****************************************************************************
 */

import React from "react";

export function Progress({
  inProgress,
  value,
  max,
  label,
}: {
  inProgress: boolean;
  value: number;
  max: number;
  label?: string;
}) {
  if (!inProgress || !max) {
    return null;
  }

  return (
    <div className="flex flex-col w-full">
      {label && (
        <div className="text-base text-dark mb-2">
          {label}: {Math.floor(value)} / {Math.floor(max)}
        </div>
      )}
      <div className="w-full h-full border rounded-lg">
        <div
          className="w-full h-6 rounded-lg bg-navy-300 bg-gradient-to-b from-navy-200 to-navy-500"
          style={{
            width: `${(value / max) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}
