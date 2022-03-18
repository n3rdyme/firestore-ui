/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 11th, 2022
 * ****************************************************************************
 */

import { SqlComparisonType } from "./sqlComparisons";

// using this character to separate the names in multi-part names
export const DOTTED_ID_CHAR = "\u0000";
export const DOTTED_ID_SPLIT = new RegExp(DOTTED_ID_CHAR, "g");

export interface IHaveName {
  name: string;
}

export interface SqlTable extends IHaveName {
  name: string;
  alias?: string;
  identifier?: string;
}

export interface SqlColumn extends SqlValue {
  alias?: string;
  star?: boolean;
}

export interface SqlOrder extends IHaveName {
  name: string;
  order?: "asc" | "desc";
}

export interface SqlValue {
  type:
    | "column"
    | "string"
    | "number"
    | "hexadecimal"
    | "boolean"
    | "date"
    | "function"
    | "null"
    | "default";
  value: string;
  valueNum?: number;
  valueBool?: boolean;
  valueDate?: Date;
  params?: SqlValue[];
}

export interface SqlPredicate {
  not?: boolean;
  left?: SqlColumn | SqlValue;
  op?: SqlComparisonType;
  right?: SqlColumn | SqlValue;
}

export interface SqlNormalizedAnd {
  and: SqlPredicate[];
}

export interface SqlNormalExpression {
  or: SqlNormalizedAnd[];
  common?: SqlPredicate[];
}

export interface SqlExpression {
  not?: boolean;
  and?: (SqlExpression & SqlPredicate)[];
  or?: (SqlExpression & SqlPredicate)[];
}

export interface SqlStatement {
  type?: "select" | "insert" | "update" | "delete";
  table?: SqlTable[];
  columns?: SqlColumn[];
  values?: SqlValue[][];
  orderBy?: SqlOrder[];
  where?: string;
  query?: SqlNormalExpression;
  limit?: number;
  offset?: number;
}

export interface SqlStatementResult {
  statement: SqlStatement;
  columns: SqlColumn[];
  rows: any[];
  errors: Array<Error & { rowIndex?: number }>;
  recordsAffected: number;
  recordsFetched?: number;
  timeTaken?: number;
}
