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

function invert(b: boolean | undefined) {
  return b === undefined ? undefined : !b;
}

function equals(a: any, b: any) {
  if (a == null && b == null) return true;
  if (a == null || b == null) return false;

  if (typeof a === "object" && typeof b === "object") {
    return _.isEqual(a, b);
  }

  return a === b;
}

// TODO: add support for appropriate type coercion.
function coerceTypeCompare(cmp: (a: any, b: any) => boolean | undefined) {
  return (inA: any, inB: any): boolean | undefined => {
    let a = inA;
    let b = inB;
    if (a != null && typeof a === "object") {
      if (a.toDate) a = a.toDate();
      if (a instanceof Date) a = a.toISOString();
    }
    if (b != null && typeof b === "object") {
      if (b.toDate) b = b.toDate();
      if (b instanceof Date) b = b.toISOString();
    }
    if (typeof a === "number" && typeof b === "string") {
      a = a.toString();
    }
    if (typeof b === "number" && typeof a === "string") {
      b = b.toString();
    }
    if (typeof a === "boolean" && typeof b === "string") {
      a = a.toString();
    }
    if (typeof b === "boolean" && typeof a === "string") {
      b = b.toString();
    }

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
    compare: coerceTypeCompare(equals),
  },
  "!=": {
    invert: "=",
    reorder: "!=",
    compare: coerceTypeCompare((a: any, b: any) => invert(equals(a, b))),
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
      return undefined;
    }),
  },
  "!like": {
    invert: "like",
    compare: (a: any, b: any) => invert(sqlComparisonTable.like.compare(a, b)),
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
      return undefined;
    }),
  },
  "!regex": {
    invert: "regex",
    compare: (a: any, b: any) => invert(sqlComparisonTable.regex.compare(a, b)),
  },
};
