/*
MySQL (Positive Technologies) grammar
The MIT License (MIT).
Copyright (c) 2015-2017, Ivan Kochurkin (kvanttt@gmail.com), Positive Technologies.
Copyright (c) 2017, Ivan Khudyashev (IHudyashov@ptsecurity.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

parser grammar SqlParser;

options { tokenVocab=SqlLexer; }

program: statement EOF;

statement
    : sqlStatements? MINUSMINUS? EOF
    ;

sqlStatements
    : (sqlStatement MINUSMINUS? SEMI? | SEMI)*
    (sqlStatement (MINUSMINUS? SEMI)? | SEMI)
    ;

sqlStatement
    : selectStatement | insertStatement | updateStatement
    | deleteStatement 
    ;

/** INSERT */

insertStatement
    : INSERT
      INTO? table=tableName (WITH KEY identifier=fullColumnName)?
      (valueSet=insertStatementSetValues | values=insertStatementValues)
    ;
    
insertStatementSetValues
    : SET updatedElement (',' updatedElement)*
    ;

insertStatementValues
    : ('(' columns=fullColumnNameList ')') values=insertStatementValue
    ;

insertStatementValue
    : (VALUES | VALUE)
      '(' constantsOrDefaults ')' (',' '(' constantsOrDefaults ')')*
    ;

/** UPDATE */

updateStatement
    : UPDATE 
      table=tableSource
      SET updatedElement (',' updatedElement)*
      (WHERE whereExp=whereExpression)? order=orderByClause? limit=limitClause?
    ;

updatedElement
    : fullColumnName '=' (valueElement | isDefault=DEFAULT)
    ;

/** DELETE */

deleteStatement
    : DELETE
      FROM table=tableSource
      (WHERE whereExp=whereExpression)? order=orderByClause? limit=limitClause?
    ;

/** SELECT */

selectStatement
    : SELECT selectElements
      (fromClause orderByClause? limitClause?)?
    ;

selectElements
    : (star='*') | selectElement (',' selectElement)* (',' star='*')?
    ;

selectElement
    : starOf=fullId '.' '*'
    | column=fullColumnName (AS? alias=uid)?
    | value=constant (AS? alias=uid)?
    | func=functionCall (AS? alias=uid)?
    ;

/** SHARED */

fromClause
    : FROM tableSource (WHERE whereExp=whereExpression)?
    ;

orderByClause
    : ORDER BY orderByExpression (',' orderByExpression)*
    ;

orderByExpression
    : orderOn=fullColumnName orderBy=(ASC | DESC)?
    ;

tableSource
    : tableName (AS? alias=uid)? (WITH KEY identifier=fullColumnName)?
    ;

limitClause
    : LIMIT
    (
      (offset=decimalLiteral ',')? limit=decimalLiteral
      | limit=decimalLiteral OFFSET offset=decimalLiteral
    )
    ;

fullId
    : uid (dotLiteral | '.' uid)*
    ;

tableName
    : table=fullId
    ;

fullColumnName
    : uid dottedId*
    ;

uid
    : simpleId
    | doubleQuoteId
    | reverseQuoteId
    // | blockedQuoteId
    // | CHARSET_REVERSE_QOUTE_STRING
    ;

doubleQuoteId
    : DOUBLE_QUOTE_ID
    ;
    
reverseQuoteId
    : REVERSE_QUOTE_ID
    ;

simpleId
    : ID
    ; 

dotLiteral
    : DOT_ID
    ;

dottedId
    : dotLiteral
    | '.' uid
    ;

decimalLiteral
    : DECIMAL_LITERAL | ZERO_DECIMAL | ONE_DECIMAL | TWO_DECIMAL
    ;

stringLiteral
    : STRING_LITERAL
    ;

booleanLiteral
    : TRUE | FALSE;

hexadecimalLiteral
    : HEXADECIMAL_LITERAL;

constNumberLiteral
    : 
    | decimalLiteral
    | negative='-' decimalLiteral
    | REAL_LITERAL
    | negative='-' REAL_LITERAL
    ;

nullLiteral
    : NULL_LITERAL | NULL_SPEC_LITERAL
    ;

constant
    : stringLiteral 
    | constNumberLiteral
    | hexadecimalLiteral 
    | booleanLiteral
    | nullLiteral
    ;

fullColumnNameList
    : fullColumnName (',' fullColumnName)*
    ;

castConstantCall
    : CAST '(' param=constant AS dataType=convertedDataType ')'
    | dataType=convertedDataType '(' param=constant ')'
    ;

constantOrDefault
    : constant 
    | functionCall
    | isDefault=DEFAULT
    ;
    
constantsOrDefaults
    : constantOrDefault (',' constantOrDefault)*
    ;

whereExpression
    : expression
    ;

expression
    : not=(NOT | '!') expression                                    #notExpression
    | expression op=logicalOperator expression                      #logicalExpression
    | predicate                                                     #predicateExpression
    ;

predicate
    : left=predicateOperand not=NOT? IN '(' (values=constantAtoms) ')'           #inPredicate
    | left=predicateOperand IS not=NOT? nil=nullLiteral                          #isNullPredicate
    | left=predicateOperand op=comparisonOperator right=predicateOperand         #binaryComparisonPredicate
    | left=predicateOperand not=NOT? BETWEEN min=constant AND max=constant       #betweenPredicate
    | left=predicateOperand not=NOT? LIKE like=stringLiteral                     #likePredicate
    | left=predicateOperand not=NOT? (REGEXP | RLIKE) regex=stringLiteral        #regexpPredicate
    | expressionAtom                                                             #expressionAtomPredicate
    ;

constantAtoms
    : constant (',' constant)*
    ;

predicateOperand
    : valueElement
    ;

valueElement
    : constant
    | columnElement
    | functionCall
    ;

constOrColumnAtom
    : constant
    | columnElement
    ;

columnElement
    : fullColumnName                                                #fullColumnNameValueAtom
    ;

expressionAtom
    : constant                                                      #constantExpressionAtom
    | fullColumnName                                                #fullColumnNameExpressionAtom
    | '(' expression ')'                                            #nestedExpressionAtom
    ;

comparisonOperator
    : '=' | '>' | '<' | '<' '=' | '>' '='
    | '<' '>' | '!' '=' 
    // Nope this | '<' '=' '>'
    ;

logicalOperator
    : AND | '&' '&' | OR | '|' '|' //  | XOR
    ;

// Built-in functions

functionCall
    : castAsFunctionCall
    | simpleFunctionCall
    ;

castAsFunctionCall
    : CAST '(' param=constOrColumnAtom AS dataType=convertedDataType ')'
    | dataType=convertedDataType '(' param=constOrColumnAtom ')'
  ;

convertedDataType
    : typeName=
    ( TEXT | NCHAR | CHAR | VARCHAR | NVARCHAR 
    | DATE | DATETIME | TIMESTAMP 
    | NUMERIC | DECIMAL | INT | INTEGER | FLOAT | DOUBLE | REAL
    | BOOL | BOOLEAN
    );

simpleFunctionCall
    : func=IFNULL '(' arg1=constOrColumnAtom ',' arg2=constOrColumnAtom ')' |
    | func=NOW '(' ')'
    ;
