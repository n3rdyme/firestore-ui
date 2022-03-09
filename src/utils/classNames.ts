/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: February 9th, 2022
 * ****************************************************************************
 */

/**
 * Creates a list of css names found in the array combined with object keys
 * that have a truthy value and returns a single space-delimited string.
 * @param classes Array of classnames, undefined, null or object => expression
 * @returns css class names
 * @example
 * <div classNames={classNames("mx-2", "my-1", { bold: selected })} />
 */
export function classNames(
  ...classes: Array<undefined | null | false | string | Record<string, any>>
) {
  return [
    ...(classes.filter((b) => b && typeof b === "string") as string[]),
    ...classes
      .filter((o) => o && typeof o === "object")
      .reduce<string[]>(
        (names, o) => [
          ...names,
          ...Object.keys(o as any).filter((key) => !!(o as any)[key]),
        ],
        []
      ),
  ].join(" ");
}
