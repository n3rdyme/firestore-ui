/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 14th, 2022
 * ****************************************************************************
 */

import _ from "lodash";

export type SqlComparisonType =
  | "="
  | "!="
  // | "<>"
  | ">"
  | "<"
  | ">="
  | "<="
  | "like"
  | "!like"
  // | "rlike"
  | "regex"
  | "!regex";

const regexWithOptions = /^\/(.+)\/([imugsy]{0,6})$/;

/**
 * Keep a cache of most recently used regexes as they can be expensive to create.
 */
const regexCache = (() => {
  const seen: string[] = [];
  const cache = new Map<string, RegExp>();

  return (pattern: string, flags?: string) => {
    const key = `/${pattern}/${flags || ""}`;
    let re = cache.get(key);
    if (!re) {
      re = new RegExp(pattern, flags);
      cache.set(key, re);
      seen.push(key);

      if (seen.length > 25) {
        const removeKey = seen.shift();
        if (removeKey) cache.delete(removeKey);
      }
    }
    return re;
  };
})();

export function mapSynonymOperations(op: string): SqlComparisonType {
  switch (op) {
    case "<>":
      return "!=";
    case "rlike":
      return "regex";
    default:
      return op as SqlComparisonType;
  }
}

// TODO: add support for appropriate type coercion.
function coerceTypeCompare(cmp: (a: any, b: any) => boolean) {
  return (a: any, b: any): boolean | undefined => {
    return cmp(a, b);
  };
}

export interface ComparisonTable {
  [key: string]: {
    invert: SqlComparisonType;
    reorder?: SqlComparisonType;
    compare: (a: any, b: any) => boolean | undefined;
  };
}

export const sqlComparisonTable: ComparisonTable = {
  "=": {
    invert: "!=",
    reorder: "=",
    compare: coerceTypeCompare(
      (a: any, b: any) => (a == null && b == null) || a === b
    ),
  },
  "!=": {
    invert: "=",
    reorder: "!=",
    compare: coerceTypeCompare(
      (a: any, b: any) => !((a == null && b == null) || a === b)
    ),
  },
  ">": {
    invert: "<=",
    reorder: "<",
    compare: coerceTypeCompare((a: any, b: any) => a > b),
  },
  "<": {
    invert: ">=",
    reorder: ">",
    compare: coerceTypeCompare((a: any, b: any) => a < b),
  },
  "<=": {
    invert: ">",
    reorder: ">=",
    compare: coerceTypeCompare((a: any, b: any) => a <= b),
  },
  ">=": {
    invert: "<",
    reorder: "<=",
    compare: coerceTypeCompare((a: any, b: any) => a >= b),
  },
  like: {
    invert: "!like",
    compare: coerceTypeCompare((a: any, b: any) => {
      if (a != null && typeof b === "string") {
        try {
          const match = `^${_.escapeRegExp(b).replace(/%/g, ".*")}$`;
          const exp = regexCache(match, "i");
          return exp.test(a.toString());
        } catch (ex: unknown) {
          console.error(`Invalid regex: ${JSON.stringify(b)}`, ex);
        }
      }
      return false;
    }),
  },
  "!like": {
    invert: "like",
    compare: (a: any, b: any) => !sqlComparisonTable.like.compare(a, b),
  },
  regex: {
    invert: "!regex",
    compare: coerceTypeCompare((a: any, b: any) => {
      if (a != null && typeof b === "string") {
        try {
          const [, pattern, expArgs] = b.match(regexWithOptions) || ["", b, ""];
          const exp = regexCache(pattern, expArgs);
          return exp.test(a.toString());
        } catch (ex: unknown) {
          console.error(`Invalid regex: ${JSON.stringify(b)}`, ex);
        }
      }
      return false;
    }),
  },
  "!regex": {
    invert: "regex",
    compare: (a: any, b: any) => !sqlComparisonTable.regex.compare(a, b),
  },
};
