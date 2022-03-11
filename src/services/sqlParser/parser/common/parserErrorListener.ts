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
import { ErrorHandler } from "./interfaceTypes";

export class ParserErrorListener extends antlrError.ErrorListener {
  private _errorHandler;

  constructor(errorListener: ErrorHandler) {
    super();
    this._errorHandler = errorListener;
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
    if (this._errorHandler) {
      this._errorHandler(
        {
          startLine: line,
          endLine: line,
          startCol: charPositionInLine,
          endCol,
          message: msg,
        },
        {
          e,
          line,
          msg,
          recognizer,
          offendingSymbol,
          charPositionInLine,
        }
      );
    }
  }
}
