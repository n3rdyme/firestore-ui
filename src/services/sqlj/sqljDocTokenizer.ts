/* eslint-disable no-plusplus */
/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 19th, 2022
 * ****************************************************************************
 */
import { Token } from "antlr4";
import type {
  CancellationToken,
  editor,
  IEvent,
  languages,
} from "monaco-editor";
import { GenericSQL } from "../sqlParser";
import { SqlLexer } from "../sqlParser/lib/SqlLexer";

export class SqljDocTokenizer
  implements languages.DocumentSemanticTokensProvider
{
  onDidChange?: IEvent<void> | undefined;

  getLegend(): languages.SemanticTokensLegend {
    return {
      tokenTypes: [
        "keyword.sql",
        "identifier.sql",
        "delimiter.sql",
        "string.sql",
        "number.sql",
        "comment.sql",
        "operator.sql",
        "predefined.sql",
        "error.sql",
      ],
      tokenModifiers: ["none"],
    };
  }

  provideDocumentSemanticTokens(
    model: Pick<editor.ITextModel, "getValue" | "getLinesContent">,
    lastResultId: string | null,
    cancelToken: CancellationToken
  ): languages.ProviderResult<
    languages.SemanticTokens | languages.SemanticTokensEdits
  > {
    /*
    The format of the token tuple is somewhat frustrating to work with:
      1. Line number (0-indexed, and offset from the previous line)
      2. Column position (0-indexed, and offset from the previous column, unless this is the beginning of a new line)
      3. Token length
      4. Token type index (0-indexed into the tokenTypes array defined in getLegend)
      5. Modifier index (0-indexed into the tokenModifiers array defined in getLegend)
    */
    /** @type {number[]} */
    const data = [];

    let prevLine = 0;
    let prevChar = 0;
    const lineLengths = model.getLinesContent().map((line) => line.length);
    const lexer = new GenericSQL().createLexer(model.getValue());
    let token: Token;

    let tokenLimit = 1000000; // just to keep things from hanging
    while ((token = lexer.nextToken()) && tokenLimit-- > 0) {
      if (cancelToken.isCancellationRequested) {
        break;
      }
      if (token.type === SqlLexer.EOF) {
        break;
      }
      if (token.type === SqlLexer.SPACE) {
        // eslint-disable-next-line no-continue
        continue;
      }

      let lineIx = token.line - 1;
      let lineOffset = lineIx - prevLine;
      if (lineOffset) {
        prevChar = 0;
      }
      let charOffset = token.column;
      let length = token.stop - token.start + 1;

      const mappedType = this.mapTokenType(token.channel, token.type);

      // This sux, but we have to split the text run into multiple runs
      // if it spans multiple lines.
      let maxLine = lineLengths[lineIx];
      for (; length + charOffset > maxLine; maxLine = lineLengths[lineIx]) {
        data.push(
          lineOffset,
          charOffset - prevChar,
          maxLine - charOffset,
          mappedType,
          0
        );
        length -= maxLine - charOffset + 1; // +1 to account for the newline
        lineIx++;
        lineOffset = 1;
        charOffset = 0;
        prevChar = 0;
      }

      data.push(lineOffset, charOffset - prevChar, length, mappedType, 0);
      prevLine = lineIx;
      prevChar = charOffset;
    }

    return {
      data: new Uint32Array(data),
    };
  }

  mapTokenType(channel: any, type: number): number {
    const map = {
      keyword: 0,
      identifier: 1,
      delimiter: 2,
      string: 3,
      number: 4,
      comment: 5,
      operator: 6,
      predefined: 7,
      error: 8,
    };

    switch (type) {
      case SqlLexer.SPEC_MYSQL_COMMENT:
      case SqlLexer.COMMENT_INPUT:
      case SqlLexer.LINE_COMMENT:
        return map.comment;

      case SqlLexer.OR:
      case SqlLexer.AND:
      case SqlLexer.NOT:
      case SqlLexer.NULL_LITERAL:
      case SqlLexer.LIKE:
      case SqlLexer.REGEXP:
      case SqlLexer.RLIKE:
        return map.operator;

      case SqlLexer.INT:
      case SqlLexer.INTEGER:
      case SqlLexer.REAL:
      case SqlLexer.DOUBLE:
      case SqlLexer.FLOAT:
      case SqlLexer.DECIMAL:
      case SqlLexer.NUMERIC:
      case SqlLexer.DATE:
      case SqlLexer.TIMESTAMP:
      case SqlLexer.DATETIME:
      case SqlLexer.CHAR:
      case SqlLexer.NCHAR:
      case SqlLexer.VARCHAR:
      case SqlLexer.NVARCHAR:
      case SqlLexer.TEXT:
      case SqlLexer.BOOL:
      case SqlLexer.BOOLEAN:
      case SqlLexer.CAST:
      case SqlLexer.IFNULL:
      case SqlLexer.NOW:
        return map.predefined;

      case SqlLexer.STAR:
      case SqlLexer.DIVIDE:
      case SqlLexer.MODULE:
      case SqlLexer.PLUS:
      case SqlLexer.MINUSMINUS:
      case SqlLexer.MINUS:
      case SqlLexer.EQUAL_SYMBOL:
      case SqlLexer.GREATER_SYMBOL:
      case SqlLexer.LESS_SYMBOL:
      case SqlLexer.EXCLAMATION_SYMBOL:
      case SqlLexer.BIT_OR_OP:
      case SqlLexer.BIT_AND_OP:
      case SqlLexer.DOT:
        // case SqlLexer.DIV:
        // case SqlLexer.MOD:
        // case SqlLexer.BIT_NOT_OP:
        // case SqlLexer.BIT_XOR_OP:
        return map.operator;

      case SqlLexer.LR_BRACKET:
      case SqlLexer.RR_BRACKET:
      case SqlLexer.COMMA:
      case SqlLexer.SEMI:
      case SqlLexer.COLON_SYMB:
        return map.delimiter;

      // case SqlLexer.AT_SIGN:
      //   return map.identifier;

      case SqlLexer.ZERO_DECIMAL:
      case SqlLexer.ONE_DECIMAL:
      case SqlLexer.TWO_DECIMAL:
      case SqlLexer.DECIMAL_LITERAL:
      case SqlLexer.HEXADECIMAL_LITERAL:
      case SqlLexer.REAL_LITERAL:
      case SqlLexer.FILESIZE_LITERAL:
        return map.number;

      case SqlLexer.SINGLE_QUOTE_SYMB:
        return map.string;

      case SqlLexer.DOUBLE_QUOTE_SYMB:
      case SqlLexer.REVERSE_QUOTE_SYMB:
        return map.identifier;

      case SqlLexer.START_NATIONAL_STRING_LITERAL:
      case SqlLexer.STRING_LITERAL:
      case SqlLexer.BIT_STRING:
        return map.string;
      case SqlLexer.NULL_SPEC_LITERAL:
        return map.operator;

      case SqlLexer.DOT_ID:
      case SqlLexer.ID:
      case SqlLexer.DOUBLE_QUOTE_ID:
      case SqlLexer.REVERSE_QUOTE_ID:
      case SqlLexer.LOCAL_ID:
      case SqlLexer.GLOBAL_ID:
        return map.identifier;

      case SqlLexer.ERROR_RECONGNIGION:
      case SqlLexer.ERRORCHANNEL:
        return map.error;

      default:
        return map.keyword;
    }
  }

  releaseDocumentSemanticTokens(resultId: string | undefined): void {
    // noop
  }
}
/*
console.log(
  new SqljDocTokenizer().provideDocumentSemanticTokens(
    {
      getValue: () => `select now(), 235 as current_time
SELECT * from "x" WITH KEY id WHERE id <> 0;


select null, NOW() as current_time, date('2022-03-17T15:55:17.485Z') as "datetime" from test where id = 11
;


{xxxx: { yyyy: "foo", aaa: "bbbb" } }
{
  test: [
    {
      foo: 'abc'
    }
  ]
}

[ null, null, true, false, [true false]]
[[{},{x: {}}]]

select * from [
  // Roger
  {
    "foo": "Ranger",
    asdf: null, 
    do: 1, 
    if: true, 
    then: {}, 
    "where": "asdf"
  }, 
  11.10,
  null,
  "Stri\n\"ng",
  'string',
  true,
  false,
  [1,2,3]
]


-- update test set updated = date('2022-03-17T15:55:17.485Z') where id = 11
  -- update test set age = 110 where id = 11

insert into test with key id (id, age, name, updated, strAge)
values (1, 65, 'Roger', now(), text(age))

select * from test where id = 1;

SELECT * 
FROM test WITH KEY id
  WHERE id <> 0
  AND id in ('''3''', '''4''', 11, 12, 2)
  AND NOT id in ( 0, 1, false, 'undefined' )
  AND id is not null
  AND (id between 0 AND 99 OR id between '' and 'z')
  AND (name like '''test%' or name like 'FOO')
  AND name regexp '/TEST|^FOO/i'
  AND 11 = '11'
  AND true = 'true'
  AND false != 'true'
  and true != false;

  -- Update test set updated = '2022-03-17T15:55:17.485Z'
  -- update test set age = 110 where id = 11

  `,
    },
    null,
    { isCancellationRequested: false } as any
  )
);
*/
