/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 10th, 2022
 * ****************************************************************************
 */
import { CommonTokenStream, Lexer, Parser } from "antlr4";
import CaseInsensitiveStream from "./common/caseInsensitiveStream";
import { SqlLexer } from "../lib/SqlLexer";
import { SqlParser } from "../lib/SqlParser";
import BasicParser from "./common/basicParser";

export class GenericSQL extends BasicParser {
  public createLexer(input: string): Lexer {
    const chars = new CaseInsensitiveStream(input); // Some Lexer only support uppercase token, So you need transform
    return new SqlLexer(chars) as any;
  }

  public createParserFromLexer(lexer: Lexer): Parser {
    const tokenStream = new CommonTokenStream(lexer);
    return new SqlParser(tokenStream) as any;
  }

  private static tokenMap: { [key: number]: string } | undefined;

  static tokenToString(token: number): string | undefined {
    if (!GenericSQL.tokenMap) {
      GenericSQL.tokenMap = Object.keys(SqlLexer).reduce((acc, key) => {
        const value = (SqlLexer as any)[key];
        if (typeof value === "number") {
          return { ...acc, [value]: key };
        }
        return acc;
      }, GenericSQL.tokenMap || {});
    }

    return GenericSQL.tokenMap[token];
  }
}
