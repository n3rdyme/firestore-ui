/* eslint-disable no-underscore-dangle */
/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 10th, 2022
 * ****************************************************************************
 */

/**
 * https://github.com/antlr/antlr4/blob/master/doc/resources/CaseChangingStream.js
 */
import { InputStream } from "antlr4";

export default class CaseInsensitiveStream implements InputStream {
  private readonly _stream: InputStream;

  constructor(input: string) {
    this._stream = new InputStream(input);
  }

  get index(): number {
    return this._stream.index;
  }

  get size(): number {
    return this._stream.size;
  }

  reset(): void {
    return this._stream.reset();
  }

  consume(): void {
    return this._stream.consume();
  }

  LA(offset: number): number {
    // return this._stream.LA(offset);
    const c: number = this._stream.LA(offset) as any;
    if (c <= 0) {
      return c as any;
    }

    return String.fromCodePoint(c).toUpperCase().codePointAt(0) as any;
    // return String.fromCodePoint(c)[this._upper ? "toUpperCase" : "toLowerCase"]().codePointAt(0);
  }

  LT(offset: number): number {
    return this._stream.LT(offset);
    // const c = this._stream.LT(offset);
    // if (!c) {
    //     return c;
    // }

    // return c.toUpperCase();
  }

  mark(): number {
    return this._stream.mark();
  }

  release(marker: any): number {
    return this._stream.release(marker);
  }

  seek(index: number): void {
    return this._stream.seek(index);
  }

  getText(start: number, stop: number): string {
    return this._stream.getText(start, stop);
  }

  toString(): string {
    return this._stream.toString();
  }
}
