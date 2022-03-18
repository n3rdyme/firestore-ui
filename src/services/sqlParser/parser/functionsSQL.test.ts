/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 18th, 2022
 * ****************************************************************************
 */
/* eslint-disable quotes */
/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 11th, 2022
 * ****************************************************************************
 */
import { GenericSQL } from "./genericSQL";

/*
TEXT | NCHAR | CHAR | VARCHAR| NVARCHAR 
| DATE | DATETIME | TIMESTAMP 
| NUMERIC | DECIMAL | INT | INTEGER | FLOAT | DOUBLE | REAL
| IFNULL
| CAST
*/

const dataTypes = [
  "TEXT",
  "NCHAR",
  "CHAR",
  "VARCHAR",
  "NVARCHAR",
  "DATE",
  "DATETIME",
  "TIMESTAMP",
  "NUMERIC",
  "DECIMAL",
  "INT",
  "INTEGER",
  "FLOAT",
  "DOUBLE",
  "REAL",
  "BOOL",
  "BOOLEAN",
];

const testSqlSyntax = [
  ...dataTypes.reduce(
    (all, dataType) =>
      all.concat([
        // Casting to a data type in SELECT columns:
        `SELECT ${dataType} ( 'foo' ) FROM table`,
        `SELECT CAST('foo' as ${dataType}) AS field FROM table`,
        `SELECT ${dataType}(column."field") as Testing FROM table`,
        // Casting to a data type in WHERE clause:
        `SELECT foo FROM table WHERE ${dataType}(foo) = CAST('value' as ${dataType})`,
        `INSERT INTO table (foo) VALUES (CAST('value' as ${dataType}))`,
        `UPDATE table SET foo = ${dataType}('value')`,
      ]),
    [] as string[]
  ),

  // NOW()

  `SELECT NOW() FROM table`,
  `SELECT NOW() AS field FROM table`,
  `SELECT foo FROM table WHERE NOW() = NOW()`,
  `INSERT INTO table (foo) VALUES (NOW())`,
  `INSERT INTO table SET foo=NOW()`,
  `UPDATE table SET foo = NOW()`,

  // IFNULL(,)

  `SELECT IFNULL(x, y) FROM table`,
  `SELECT IFNULL(x, y) AS field FROM table`,
  `SELECT foo FROM table WHERE IFNULL(x, y) = IFNULL(x, y)`,
  `INSERT INTO table (foo) VALUES (IFNULL(x, y))`,
  `INSERT INTO table SET foo=IFNULL(x, y)`,
  `UPDATE table SET foo = IFNULL(x, y)`,
];

describe("Functions SQL Syntax Tests", () => {
  const parser = new GenericSQL();

  for (const sql of testSqlSyntax) {
    // eslint-disable-next-line jest/valid-title
    test(sql.replace(/\n/g, "\\n"), () =>
      expect(parser.validate(sql)).toEqual([])
    );
  }
});
