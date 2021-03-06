/* eslint-disable no-underscore-dangle */
/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 10th, 2022
 * ****************************************************************************
 */

import { Token, Lexer, Parser } from "antlr4";

import ParseTreeWalker from "./parseTreeWalker";
import { ParserError, ErrorHandler } from "./interfaceTypes";
import { ParserErrorCollector } from "./parserErrorCollector";
import { ParserErrorListener } from "./parserErrorListener";

/**
 * Custom Parser class, subclass needs extends it.
 */
export default abstract class BasicParser {
  private _parser: any;

  public parse(input: string, errorListener?: ErrorHandler) {
    const parser = this.createParser(input);
    this._parser = parser;

    parser.removeErrorListeners();
    parser.addErrorListener(
      new ParserErrorListener(
        errorListener ??
          (() => {
            /* noop */
          })
      )
    );

    const parserTree = parser.program();

    return parserTree;
  }

  public validate(input: string): ParserError[] {
    const parseErrors: ParserError[] = [];

    const parser = this.createParser(input);
    this._parser = parser;

    parser.removeErrorListeners();
    parser.addErrorListener(new ParserErrorCollector(parseErrors));

    parser.program();

    return parseErrors;
  }

  /**
   * Create antrl4 Lexer object
   * @param input source string
   */
  public abstract createLexer(input: string): Lexer;

  /**
   * Create Parser by lexer
   * @param lexer Lexer
   */
  public abstract createParserFromLexer(lexer: Lexer): Parser;

  /**
   * Visit parser tree
   * @param parserTree
   */
  // public abstract visit(visitor: any, parserTree: any);

  /**
   * The source string
   * @param input string
   */
  public getAllTokens(input: string): Token[] {
    return this.createLexer(input).getAllTokens();
  }

  /**
   * Get Parser instance by input string
   * @param input
   */
  public createParser(input: string) {
    const lexer = this.createLexer(input);
    const parser: any = this.createParserFromLexer(lexer);
    parser.buildParseTrees = true;
    this._parser = parser;

    return parser;
  }

  /**
   * It convert tree to string, it's convenient to use in unit test.
   * @param string input
   */
  public parserTreeToString(input: string): string {
    const parser = this.createParser(input);
    this._parser = parser;

    const tree = parser.program();
    return tree.toStringTree(parser.ruleNames);
  }

  /**
   * Get List-like style tree string
   * @param parserTree
   */
  public toString(parserTree: any): string {
    return parserTree.toStringTree(this._parser?.ruleNames);
  }

  /**
   * @param listener Listener instance extends ParserListener
   * @param parserTree parser Tree
   */
  public listen(listener: any, parserTree: any) {
    ParseTreeWalker.DEFAULT.walk(listener, parserTree);
  }
}
