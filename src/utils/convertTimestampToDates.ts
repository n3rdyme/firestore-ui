/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 20th, 2022
 * ****************************************************************************
 */

export function convertTimestampToDates<T = any>(input: T): T {
  const output: { [key: string]: any } = input as any;
  for (const key in output) {
    if (output[key]?.toDate) {
      output[key] = output[key].toDate();
    } else if (typeof output === "object") {
      output[key] = convertTimestampToDates(output[key]);
    }
  }
  return output as any;
}
