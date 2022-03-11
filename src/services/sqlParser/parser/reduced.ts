/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 10th, 2022
 * ****************************************************************************
 */
import { CommonTokenStream, Lexer, Parser } from "antlr4";
import CaseInsensitiveStream from "./common/caseInsensitiveStream";
import { SqlLexer } from "../lib/reduced/SqlLexer";
import { SqlParser } from "../lib/reduced/SqlParser";
import BasicParser from "./common/basicParser";

export default class GenericSQL extends BasicParser {
  public createLexer(input: string): Lexer {
    const chars = new CaseInsensitiveStream(input); // Some Lexer only support uppercase token, So you need transform
    return new SqlLexer(chars) as any;
  }

  public createParserFromLexer(lexer: Lexer): Parser {
    const tokenStream = new CommonTokenStream(lexer);
    return new SqlParser(tokenStream) as any;
  }
}
