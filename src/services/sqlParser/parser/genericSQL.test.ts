/* eslint-disable quotes */
/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 11th, 2022
 * ****************************************************************************
 */
import { GenericSQL } from "./genericSQL";

const testSqlSyntax = [
  "select id,name from user1",
  "Select 1",
  "Select 1,2; Select 3,4\n--\nSelect 5,6",
  "Select 1 as foo, 'abc' as bar, * from \"foo-bar\"",
  "select * from `This is a name`",
  "select * from `This is a name` as foo",
  "select * from `This is a name` foo",
  "select * from foo where 1 = 1",
  'select * from foo where "abc" = 1',
  'select * from foo as f where f."abc" = 1',
  'select * from foo where "abc" = 1 and "123" = 2',
  'select * from foo where ("abc" = 1 and "123" = 3) or "123" = 2',
  'select * from foo where Not ("abc" = 1 and "123" = 3)',
  'select * from foo where "abc" in (1, 2, 3)',
  "select * from foo where \"abc\" in ('1', '2', '3', null)",
  "select * from foo where \"abc\" in (1, 5.1, 0x25, '2', '3', null)",
  "select * from foo where foo.bar is null",
  "select * from foo where foo.bar is not null",
  "select * from foo f where (f.a >= 1 && (f.b <= 2 OR f.c = 3))",
  "select * from foo f where f.a Between 1 and 2",
  "select * from foo f where f.a noT Between 1 and 2",
  "select * from foo f where f.a like '%abc%'",
  "select * from foo f where f.a not like 'abc%'",
  "select * from foo f where f.a rlike '/abc/gi'",
  "select * from foo f where f.a not rlike '/^abc$/'",
  "select * from foo f where f.a Regexp '/abc/gi'",
  "select * from foo f where (f.a not Regexp '/^abc$/')",
  'select asdf."foo"."124".bar from asdf',
  "select a,bc,d from asdf where a.b.c.d.e.f = 'g'",
  "select a from foo where 1 <= 2 order by a desc",
  "select a from foo where 1 <= 2 order by a, b desc",
  "select a from foo limit 5",
  "select a from foo limit 5, 15",
  "select a from foo limit 5 offset 15",
  "delete from foo",
  "delete from foo where bar = '123'",
  "delete from foo",
  "delete from foo where 1 <= 2 order by a, b desc",
  "delete from foo limit 5",
  "update foo set bar = '123'",
  "update foo set bar = '123', abc = 456.789",
  "update foo set bar = '123', abc = 456.789 limit 1",
  "update foo set bar = '123', abc = 456.789 order by bar limit 1",
  "update foo set bar = '123', abc = 456.789 where 1 <= 2 and 2 >= 3",
  "update foo set bar = '123', abc = 456.789 where 1 <= 2 and 2 >= 3 order by bar limit 1",
  // no longer allowed: "insert into foo values ('123')",
  "insert into foo set bar = '123'",
  "insert into foo set bar = '123', abc = 456.789",
  "insert into foo (bar) values ('123')",
  "insert into foo (bar, abc) value ('123', 456.789)",
  "insert into foo (bar, abc) values ('123', 456.789), ('123', 456.789)",
];

describe("Generic SQL Syntax Tests", () => {
  const parser = new GenericSQL();

  for (const sql of testSqlSyntax) {
    // eslint-disable-next-line jest/valid-title
    test(sql.replace(/\n/g, "\\n"), () =>
      expect(parser.validate(sql)).toEqual([])
    );
  }
});
