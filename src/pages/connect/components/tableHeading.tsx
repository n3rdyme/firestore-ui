/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 14th, 2022
 * ****************************************************************************
 */

import React from "react";

export interface TableHeadingProps {
  title: string;
}

export function TableHeading({ title }: TableHeadingProps) {
  return (
    <th>
      <div className="px-3">{title}</div>
    </th>
  );
}
