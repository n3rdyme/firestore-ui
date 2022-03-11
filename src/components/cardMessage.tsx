/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: February 5th, 2022
 * ****************************************************************************
 */

import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { IconType } from "react-icons/lib";

export function CardMessage({
  message,
  className,
  iconType: Icon,
  textSize,
}: {
  message?: string | null;
  className?: string;
  iconType?: IconType;
  textSize?: "text-xs" | "text-sm" | "text-base" | "text-lg";
}) {
  if (!message) {
    return null;
  }
  return (
    <div
      className={`flex flex-row items-center flex-wrap p-4 rounded-lg shadow-lg ${className} ${
        textSize || "text-lg"
      }`}
    >
      {!!Icon && <Icon />}
      <div className="m-1" />
      <div>{message}</div>
    </div>
  );
}

export function ErrorMessage({ message }: { message?: string | null }) {
  return (
    <CardMessage
      className="bg-red-200 text-danger"
      iconType={FaExclamationTriangle}
      message={message}
    />
  );
}
