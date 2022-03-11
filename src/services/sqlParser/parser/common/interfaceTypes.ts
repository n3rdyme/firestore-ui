/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 10th, 2022
 * ****************************************************************************
 */
import { Token, Recognizer } from "antlr4";

export interface ParserError {
  startLine: number;
  endLine: number;
  startCol: number;
  endCol: number;
  message: string;
}

export interface SyntaxError {
  recognizer: Recognizer;
  offendingSymbol: Token;
  line: number;
  charPositionInLine: number;
  msg: string;
  e: any;
}

export type ErrorHandler = (err: ParserError, errOption: SyntaxError) => void;
