/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 13th, 2022
 * ****************************************************************************
 */
import React from "react";

export function QueryHelp() {
  return (
    <div className="flex flex-col flex-grow bg-white p-4 overflow-y-auto">
      <h2>SELECT Statement</h2>
      <div className="h-2" />
      <div className="text-sm font-semibold font-mono p-4">
        <div>
          <span className="text-blue-700">SELECT</span>{" "}
          <i>column1, column2, *</i>
        </div>
        <div className="ml-4">
          <div>
            <span className="text-blue-700">FROM</span>{" "}
            <i>&quot;Collection Name&quot;</i>{" "}
            <span className="text-blue-700">AS</span> <i>alias</i>
          </div>
          <div>
            <span className="text-blue-700">WHERE</span>{" "}
            <i>&quot;Field Name&quot;</i>
            {" = "}
            <span className="text-red-500">&apos;Value&apos;</span>
          </div>
          <div>
            <span className="text-blue-700">ORDER BY</span> <i>column1</i>{" "}
            <span className="text-blue-700">ASC</span>
          </div>
          <div>
            <span className="text-blue-700">LIMIT</span>{" "}
            <i className="text-green-600">10</i>{" "}
            <span className="text-blue-700">OFFSET</span>{" "}
            <i className="text-green-600">100</i>
          </div>
        </div>
        <div>;</div>
      </div>

      <div>
        Select statements do not support GROUP BY, HAVING, or DISTINCT clauses.
        In addition, no support is provided for subqueries, joins, or built-in
        functions.
      </div>
      <div className="h-2" />
      <div>
        Select clauses may contain nested fields and aliases. From clause
        supports a single table with an optional alias. Where clause supports
        artbitrary nesting of expressions and predicates; however, predicates
        may not be expressed against the result of an expression or predicate
        (i.e. the phrase &quot;<span>WHERE ( a = b ) = TRUE</span>&quot;). The
        order by and limit clauses should behave as expected.
      </div>
    </div>
  );
}
