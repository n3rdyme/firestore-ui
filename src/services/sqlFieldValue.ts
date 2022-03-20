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

  public get isFunc(): boolean {
    return this.data.type === "function";
  }

  public get aliasName(): string | undefined {
    const { alias } = this.data as SqlColumn;
    if (alias) {
      return alias;
    }
    if (!this.isField) {
      return this.data.value;
    }
    return undefined;
  }

  public get fqFieldName(): string {
    if (!this.isField) {
      throw new Error("The field references a value, not a column.");
    }

    return this.data.value.split(DOTTED_ID_SPLIT).join(".");
  }

  public get value():
    | string
    | number
    | boolean
    | Date
    | any[]
    | { [key: string]: any }
    | null
    | undefined {
    if (this.isField) {
      throw new Error("The field references a column, not a value.");
    }
    if (this.isFunc) {
      return this.callFunction({});
    }
    if (this.data.type === "string") {
      return this.data.value;
    }
    if (this.data.type === "number" || this.data.type === "hexadecimal") {
      return Number(this.data.valueNum ?? this.data.value);
    }
    if (this.data.type === "boolean") {
      return this.data.valueBool ?? Boolean(this.data.value);
    }
    if (this.data.type === "date") {
      return this.data.valueDate ?? new Date(this.data.value);
    }
    if (this.data.type === "array") {
      return this.data.valueArray ?? [];
    }
    if (this.data.type === "object") {
      return this.data.valueObject ?? {};
    }
    if (this.data.type === "null") {
      return null;
    }
    if (this.data.type === "default") {
      return undefined;
    }

    console.error(`Unknown type: ${this.data.type}`, this.data);
    throw new Error(`Unknown value type: ${this.data.type}`);
  }

  private callFunction(doc: any): any {
    if (!this.isFunc || !this.data.value) {
      throw new Error("Function name is required.");
    }
    if (this.data.value === "cast" && this.data.params) {
      const [value, type] = this.data.params;
      const newValue = new SqlFieldValue(value).getValue(doc);
      if (type.value === "string") {
        return String(newValue);
      }
      if (type.value === "number") {
        return Number(newValue);
      }
      if (type.value === "integer") {
        return Math.round(Number(newValue));
      }
      if (type.value === "boolean") {
        return Boolean(newValue);
      }
      if (type.value === "date") {
        return new Date(newValue);
      }
    }
    if (this.data.value === "ifnull" && this.data.params) {
      const newValue = new SqlFieldValue(this.data.params[0]).getValue(doc);
      return newValue ?? new SqlFieldValue(this.data.params[1]).getValue(doc);
    }
    if (this.data.value === "now") {
      return new Date();
    }

    console.warn(`Unknown function call: ${this.data.value}`);
    return undefined;
  }

  public getValue(doc: any): any {
    if (!this.isField && !this.isFunc) {
      return this.value;
    }

    if (!this.data.value) {
      console.error("Invalid field value:", this.data);
      throw new Error("Column name is required for insert/update.");
    }

    if (this.isFunc) {
      return this.callFunction(doc);
    }

    let data = doc;
    const parts = this.data.value.split(DOTTED_ID_SPLIT);

    for (let ix = 0; ix < parts.length; ix++) {
      let key: string | number = parts[ix];

      if (Array.isArray(data) && patterns.digitsOnly.test(key)) {
        key = parseInt(key, 10);
      }

      if (ix === parts.length - 1) {
        const result = data[key];
        return result;
      }

      if (!data[key]) {
        return undefined;
      }

      data = data[key];
    }

    return undefined;
  }

  public setValueFrom(doc: any, newValue: SqlValue): any {
    this.setValue(doc, new SqlFieldValue(newValue).getValue(doc));
  }

  public setValue(doc: any, newValue: any): any {
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
        data[key] = newValue;
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
