/* eslint-disable no-plusplus */
/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 15th, 2022
 * ****************************************************************************
 */

import { patterns } from "../utils/patterns";
import { DOTTED_ID_SPLIT, SqlColumn, SqlValue } from "./sqlStatement";

export class SqlFieldValue {
  constructor(private readonly data: SqlValue) {}

  public get isField(): boolean {
    return this.data.type === "column";
  }

  public get aliasName(): string | undefined {
    if (!this.isField) {
      throw new Error("The field references a value, not a column.");
    }

    const { alias } = this.data as SqlColumn;
    if (alias) {
      return alias;
    }
    return undefined;
  }

  public get fqFieldName(): string {
    if (!this.isField) {
      throw new Error("The field references a value, not a column.");
    }

    return this.data.value.split(DOTTED_ID_SPLIT).join(".");
  }

  public get value(): string | number | boolean | null | undefined {
    if (this.isField) {
      throw new Error("The field references a column, not a value.");
    }
    if (this.data.type === "string") {
      return this.data.value;
    }
    if (this.data.type === "number" || this.data.type === "hexadecimal") {
      return Number(this.data.value);
    }
    if (this.data.type === "boolean") {
      return this.data.value === "true";
    }
    if (this.data.type === "null") {
      return null;
    }
    if (this.data.type === "default") {
      return undefined;
    }

    throw new Error(`Unknown value type: ${this.data.type}`);
  }

  public getValue(doc: any): any {
    if (!this.isField) {
      return this.value;
    }
    if (!this.data.value) {
      throw new Error("Column name is required for insert/update.");
    }

    let data = doc;
    const parts = this.data.value.split(DOTTED_ID_SPLIT);

    for (let ix = 0; ix < parts.length; ix++) {
      let key: string | number = parts[ix];

      if (Array.isArray(data) && patterns.digitsOnly.test(key)) {
        key = parseInt(key, 10);
      }

      if (ix === parts.length - 1) {
        return data[key];
      }

      if (!data[key]) {
        return undefined;
      }

      data = data[key];
    }

    return undefined;
  }

  public setValue(doc: any, newValue: SqlValue): any {
    if (!this.isField) {
      throw new Error("The field references a value, not a column.");
    }
    if (!this.data.value) {
      throw new Error("Column name is required for insert/update.");
    }

    let data = doc;
    const parts = this.data.value.split(DOTTED_ID_SPLIT);

    for (let ix = 0; ix < parts.length; ix++) {
      let key: string | number = parts[ix];

      if (Array.isArray(data) && patterns.digitsOnly.test(key)) {
        key = parseInt(key, 10);
      }

      if (ix === parts.length - 1) {
        data[key] = new SqlFieldValue(newValue).getValue(doc);
        return;
      }

      if (!data[key]) {
        const nextKeyIsNumber = patterns.digitsOnly.test(parts[ix + 1] ?? "");
        data[key] = nextKeyIsNumber ? [] : {};
      }

      data = data[key];
    }
  }
}
