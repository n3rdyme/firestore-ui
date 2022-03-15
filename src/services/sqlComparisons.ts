/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 14th, 2022
 * ****************************************************************************
 */

export type SqlComparisonType =
  | "="
  | "!="
  // | "<>"
  | ">"
  | "<"
  | ">="
  | "<="
  | "like"
  // | "rlike"
  | "regex";

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
    reorder: SqlComparisonType;
    compare: (a: any, b: any) => boolean | undefined;
  };
}

export const sqlComparisonTable: ComparisonTable = {
  "=": {
    invert: "!=",
    reorder: "=",
    compare: coerceTypeCompare((a: any, b: any) => a === b),
  },
  "!=": {
    invert: "=",
    reorder: "!=",
    compare: coerceTypeCompare((a: any, b: any) => a !== b),
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
};
