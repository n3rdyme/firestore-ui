/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 11th, 2022
 * ****************************************************************************
 */

export interface IHaveName {
  name: string;
}

export interface SqlTable extends IHaveName {
  name: string;
  alias?: string;
}

export interface SqlColumn extends IHaveName {
  name: string;
  alias?: string;
  star?: boolean;
  value?: SqlValue;
}

export interface SqlOrder extends IHaveName {
  name: string;
  order?: "asc" | "desc";
}

export interface SqlValue {
  type: "column" | "string" | "number" | "hexadecimal" | "boolean" | "null";
  value: string;
}

export interface SqlCondition {
  not?: boolean;
  left?: SqlColumn | SqlValue;
  op?: "=" | "!=" | ">" | "<" | ">=" | "<=" | "like" | "rlike" | "regex";
  right?: SqlColumn | SqlValue;
}

export interface SqlExpression {
  not?: boolean;
  and?: (SqlExpression | SqlCondition)[];
  or?: (SqlExpression | SqlCondition)[];
}

export interface SqlStatement {
  type?: "select" | "insert" | "update" | "delete";
  table?: SqlTable[];
  columns?: SqlColumn[];
  orderBy?: SqlOrder[];
  where?: string;
  limit?: number;
  offset?: number;
}
