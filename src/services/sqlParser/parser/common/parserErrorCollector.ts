/* eslint-disable no-underscore-dangle */
/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 10th, 2022
 * ****************************************************************************
 */
import { Token, Recognizer } from "antlr4";
import antlrError from "./errorListener";
import { ParserError } from "./interfaceTypes";

export class ParserErrorCollector extends antlrError.ErrorListener {
  private _errors: ParserError[];

  constructor(error: ParserError[]) {
    super();
    this._errors = error;
  }

  syntaxError(
    recognizer: Recognizer,
    offendingSymbol: Token,
    line: number,
    charPositionInLine: number,
    msg: string,
    e: any
  ) {
    let endCol = charPositionInLine + 1;
    if (offendingSymbol && offendingSymbol.text !== null) {
      endCol = charPositionInLine + offendingSymbol.text.length;
    }
    this._errors.push({
      startLine: line,
      endLine: line,
      startCol: charPositionInLine,
      endCol,
      message: msg,
    });
  }
}
