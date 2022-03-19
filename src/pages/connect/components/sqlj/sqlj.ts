/* eslint-disable quotes */
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import type { languages } from "monaco-editor";

export const conf: languages.LanguageConfiguration = {
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

export const language: languages.IMonarchLanguage = {
  defaultToken: "",
  tokenPostfix: ".sql",
  ignoreCase: true,

  brackets: [
    { open: "[", close: "]", token: "delimiter.square" },
    { open: "{", close: "}", token: "delimiter.bracket" },
    { open: "(", close: ")", token: "delimiter.parenthesis" },
  ],

  keywords: [
    "AS",
    "ASC",
    "BY",
    "DEFAULT",
    "DELETE",
    "DESC",
    "FALSE",
    "FROM",
    "INSERT",
    "INTO",
    "KEY",
    "LIMIT",
    "OFFSET",
    "ORDER",
    "SELECT",
    "SET",
    "TRUE",
    "UPDATE",
    "VALUE",
    "VALUES",
    "WHERE",
    "WITH",
  ],
  operators: [
    // Logical
    "AND",
    "BETWEEN",
    "IN",
    "LIKE",
    "REGEXP",
    "RLIKE",
    "NOT",
    "OR",
    // Predicates
    "IS",
    "NULL",
  ],
  builtinFunctions: [
    // Data Types
    "INT",
    "INTEGER",
    "REAL",
    "DOUBLE",
    "FLOAT",
    "DECIMAL",
    "NUMERIC",
    "DATE",
    "TIMESTAMP",
    "DATETIME",
    "CHAR",
    "NCHAR",
    "VARCHAR",
    "NVARCHAR",
    "TEXT",
    "BOOL",
    "BOOLEAN",

    // Built-in Functions
    "CAST",
    "IFNULL",
    "NOW",
  ],
  builtinVariables: [],
  pseudoColumns: [],
  tokenizer: {
    root: [
      { include: "@comments" },
      { include: "@whitespace" },
      { include: "@pseudoColumns" },
      { include: "@numbers" },
      { include: "@strings" },
      { include: "@complexIdentifiers" },
      { include: "@scopes" },
      [/[;,.]/, "delimiter"],
      [/[()]/, "@brackets"],
      [
        /[\w@#$]+/,
        {
          cases: {
            "@operators": "operator",
            "@builtinVariables": "predefined",
            "@builtinFunctions": "predefined",
            "@keywords": "keyword",
            "@default": "identifier",
          },
        },
      ],
      [/[<>=!%&+\-*/|~^]/, "operator"],
    ],
    whitespace: [[/\s+/, "white"]],
    comments: [
      [/--+.*/, "comment"],
      [/\/\*/, { token: "comment.quote", next: "@comment" }],
    ],
    comment: [
      [/[^*/]+/, "comment"],
      // Not supporting nested comments, as nested comments seem to not be standard?
      // i.e. http://stackoverflow.com/questions/728172/are-there-multiline-comment-delimiters-in-sql-that-are-vendor-agnostic
      // [/\/\*/, { token: 'comment.quote', next: '@push' }],    // nested comment not allowed :-(
      [/\*\//, { token: "comment.quote", next: "@pop" }],
      [/./, "comment"],
    ],
    pseudoColumns: [
      [
        /[$][A-Za-z_][\w@#$]*/,
        {
          cases: {
            "@pseudoColumns": "predefined",
            "@default": "identifier",
          },
        },
      ],
    ],
    numbers: [
      [/0[xX][0-9a-fA-F]*/, "number"],
      [/[$][+-]*\d*(\.\d*)?/, "number"],
      [/((\d+(\.\d*)?)|(\.\d+))([eE][-+]?\d+)?/, "number"],
    ],
    strings: [
      [/N'/, { token: "string", next: "@string" }],
      [/'/, { token: "string", next: "@string" }],
    ],
    string: [
      [/[^']+/, "string"],
      [/''/, "string"],
      [/'/, { token: "string", next: "@pop" }],
    ],
    complexIdentifiers: [
      [/`/, { token: "identifier.quote", next: "@backtickIdentifier" }],
      [/"/, { token: "identifier.quote", next: "@quotedIdentifier" }],
    ],
    backtickIdentifier: [
      [/[^`]+/, "identifier"],
      [/``/, "identifier"],
      [/`/, { token: "identifier.quote", next: "@pop" }],
    ],
    quotedIdentifier: [
      [/[^"]+/, "identifier"],
      [/""/, "identifier"],
      [/"/, { token: "identifier.quote", next: "@pop" }],
    ],
    scopes: [
      // [/BEGIN\s+(DISTRIBUTED\s+)?TRAN(SACTION)?\b/i, "keyword"],
      // [/BEGIN\s+TRY\b/i, { token: "keyword.try" }],
      // [/END\s+TRY\b/i, { token: "keyword.try" }],
      // [/BEGIN\s+CATCH\b/i, { token: "keyword.catch" }],
      // [/END\s+CATCH\b/i, { token: "keyword.catch" }],
      // [/(BEGIN|CASE)\b/i, { token: "keyword.block" }],
      // [/END\b/i, { token: "keyword.block" }],
      // [/WHEN\b/i, { token: "keyword.choice" }],
      // [/THEN\b/i, { token: "keyword.choice" }],
    ],
  },
};
