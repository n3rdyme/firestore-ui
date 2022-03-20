/* eslint-disable quotes */
/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 19th, 2022
 * ****************************************************************************
 */
import { Monaco } from "@monaco-editor/react";
import type { languages } from "monaco-editor";
import { SqljDocTokenizer } from "./sqljDocTokenizer";

class SqlJ {
  public register(monaco: Monaco) {
    monaco.languages.register(sqlj.language);
    monaco.languages.setLanguageConfiguration("sqlj", sqlj.configuration);
    monaco.languages.registerDocumentSemanticTokensProvider(
      "sqlj",
      sqlj.tokenizer
    );
  }

  get tokenizer() {
    return new SqljDocTokenizer();
  }

  // Used to register the language
  readonly language: languages.ILanguageExtensionPoint = {
    id: "sqlj",
    extensions: [".sqlj"],
    aliases: ["SQLJ"],
  };

  // Used to configure the language
  readonly configuration: languages.LanguageConfiguration = {
    comments: {
      lineComment: "--",
      blockComment: ["/*", "*/"],
    },
    brackets: [
      ["{", "}"],
      ["[", "]"],
      ["(", ")"],
    ],
    autoClosingPairs: [
      { open: "{", close: "}" },
      { open: "[", close: "]" },
      { open: "(", close: ")" },
      { open: '"', close: '"' },
      { open: "'", close: "'" },
      { open: "`", close: "`" },
    ],
    surroundingPairs: [
      { open: "{", close: "}" },
      { open: "[", close: "]" },
      { open: "(", close: ")" },
      { open: '"', close: '"' },
      { open: "'", close: "'" },
      { open: "`", close: "`" },
    ],
    indentationRules: {
      increaseIndentPattern: /{|\[/,
      decreaseIndentPattern: /}|\]/,
    },
  };
}

export const sqlj = new SqlJ();
