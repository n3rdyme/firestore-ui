/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 14th, 2022
 * ****************************************************************************
 */

export function properCase(input: string): string {
  return input.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substring(1);
  });
}
