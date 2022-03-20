/* eslint-disable @typescript-eslint/no-non-null-assertion */
/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 15th, 2022
 * ****************************************************************************
 */

import {
  Firestore,
  QueryConstraint,
  collection,
  query,
  limit,
  orderBy,
  where,
  getDocs,
  DocumentData,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { sqlComparisonTable } from "../services/sqlComparisons";
import { SqlFieldValue } from "../services/sqlFieldValue";
import {
  SqlColumn,
  SqlNormalExpression,
  SqlNormalizedAnd,
  SqlOrder,
  SqlPredicate,
  SqlStatement,
} from "../services/sqlStatement";
import { promiseParallel } from "./promiseParallel";

// Just used to ensure that this class doesn't care about the type of the
// statement, or if the statement has columns or not.
type SqlStatementQuery = Pick<
  SqlStatement,
  "table" | "query" | "orderBy" | "offset" | "limit"
>;

export class FirestoreQueryPlan {
  private totalRecords = 0;

  constructor(private readonly fs: Firestore) {}

  public get recordsScanned() {
    return this.totalRecords;
  }

  public async execute(statement: SqlStatementQuery) {
    const found = await this.getDocuments(statement);

    // At this point, firestore has done what very little it can for us, now the rest is up to us ;)
    const filtered = this.filterResults(statement, found);

    const ordered = this.orderedResults(statement, filtered);

    let results = ordered;
    if (statement.offset) {
      results = results.slice(statement.offset);
    }
    if (statement.limit) {
      results = results.slice(0, statement.limit);
    }

    return results;
  }

  private filterResults(
    statement: SqlStatementQuery,
    dataset: QueryDocumentSnapshot<DocumentData>[]
  ): QueryDocumentSnapshot<DocumentData>[] {
    const { query: criteria } = statement;

    if (!criteria || criteria.or.length === 0) {
      return dataset;
    }

    const testGate = (exp: SqlPredicate, doc: any) => {
      const op = sqlComparisonTable[exp.op ?? "??????"];
      if (!op) {
        console.warn("Operator not implemented.", exp);
        return false;
      }
      const data = { $id: doc.id, ...doc.data() };
      const rhs = !exp.right
        ? undefined
        : new SqlFieldValue(exp.right).getValue(data);
      const lhs = !exp.left
        ? undefined
        : new SqlFieldValue(exp.left).getValue(data);

      // console.debug(`${lhs} ${exp.op} ${rhs} = ${op.compare(lhs, rhs)}`);
      return op.compare(lhs, rhs) === true;
    };

    const testAnd = (exp: SqlPredicate[], doc: any) => {
      return exp.every((e) => testGate(e, doc));
    };

    const testOr = (exp: SqlNormalizedAnd[], doc: any) => {
      return exp.some((e) => testAnd(e.and, doc));
    };

    return dataset.filter((doc: any) => testOr(criteria.or, doc));
  }

  private orderedResults(
    statement: SqlStatementQuery,
    dataset: QueryDocumentSnapshot<DocumentData>[]
  ): QueryDocumentSnapshot<DocumentData>[] {
    const { orderBy: orderByFields } = statement;
    if (!orderByFields?.length) {
      return dataset;
    }

    return dataset.sort((a, b) => {
      const docA = { $id: a.id, ...a.data() };
      const docB = { $id: b.id, ...b.data() };

      for (const { name, order } of orderByFields) {
        const col: SqlColumn = { type: "column", value: name };
        const valueA = new SqlFieldValue(col).getValue(docA);
        const valueB = new SqlFieldValue(col).getValue(docB);

        if (sqlComparisonTable["<"].compare(valueA, valueB)) {
          if (order === "desc") return 1;
          return -1;
        }
        if (!sqlComparisonTable["="].compare(valueA, valueB)) {
          if (order === "desc") return -1;
          return 1;
        }
      }

      return 0;
    });
  }

  private async getDocuments(
    statement: SqlStatementQuery
  ): Promise<QueryDocumentSnapshot<DocumentData>[]> {
    // It's usually more efficient to use multiple queries if there are multiple equality conditions,
    // i.e. WHERE ( id = 1 or id = 2 )
    const plans = this.planMultipleQueries(statement);
    if (plans) {
      const allResults = await promiseParallel(plans, (p) =>
        this.getDocumentsFromQuery(p)
      );

      const combinedResult = allResults.reduce(
        (acc, cur) => acc.concat(cur),
        []
      );
      // Find unique results by document id
      const dedupKeys: { [key: string]: boolean } = {};
      return combinedResult.filter((r) => {
        const key = r.id;
        if (dedupKeys[key]) {
          return false;
        }
        dedupKeys[key] = true;
        return true;
      });
    }

    // Otherwise, we can use a single query
    return this.getDocumentsFromQuery(statement);
  }

  private async getDocumentsFromQuery(
    statement: SqlStatementQuery
  ): Promise<QueryDocumentSnapshot<DocumentData>[]> {
    if (!statement.table?.[0]?.name) {
      return [
        {
          id: null as any,
          data: () => ({}),
          ref: null as any,
          metadata: null as any,
          exists: () => false,
          get: () => undefined,
        },
      ];
    }

    // single query execution
    const constraints = [
      ...this.getQuery(statement),
      ...this.getOrderBy(statement.query, statement.orderBy),
      ...this.getLimits(statement),
    ];

    const coll = collection(this.fs, statement.table?.[0]?.name ?? "ignore");
    const q = query(coll, ...constraints);
    const documents = await getDocs(q);

    this.totalRecords += documents.size;
    const results = documents.docs;
    return results;
  }

  private planMultipleQueries(
    statement: SqlStatementQuery
  ): SqlStatementQuery[] | undefined {
    const { query: criteria } = statement;

    if (!criteria || criteria.or.length <= 1) {
      return undefined;
    }

    const equalCounters = criteria.or.map(
      (or) => or.and.filter((c) => c.op === "=").length
    );

    const common = this.commonCriteria(criteria);

    // Use multiple queries if any or condition has more than one equality in addition to those in common
    const useMultipleQueries = equalCounters.some((c) => c !== common?.length);

    if (!useMultipleQueries) {
      return undefined;
    }

    const plans: SqlStatementQuery[] = criteria.or.map((c) => {
      return {
        ...statement,
        query: {
          or: [c],
          common: c.and.filter((p) => p.op === "="),
        },
        orderBy: undefined,
        limit: undefined,
        offset: undefined,
      };
    });

    return plans;
  }

  private getQuery(statement: SqlStatementQuery): QueryConstraint[] {
    const { query: criteria } = statement;

    // console.info(
    //   `Query ${JSON.stringify(statement.table?.[0].name)} for ${JSON.stringify(
    //     criteria?.or?.[0]?.and.map(
    //       ({ left, op, right }) => `${left?.value} ${op} ${right?.value}`
    //     )
    //   )}`
    // );

    if (!criteria || criteria.or.length === 0) {
      return [];
    }

    const common = this.commonCriteria(criteria);

    if (common?.length) {
      return common.map((c) => {
        const lhs = new SqlFieldValue(c.left!);
        const rhs = new SqlFieldValue(c.right!);
        // console.debug("where", [lhs.fqFieldName, "==", rhs.value]);
        return where(lhs.fqFieldName, "==", rhs.value);
      });
    }

    for (const c of criteria.or[0].and) {
      if (
        c.left &&
        c.right &&
        c.left.type === "column" &&
        c.right?.type !== "column" &&
        sqlComparisonTable[c.op ?? "??????"]
      ) {
        const lhs = new SqlFieldValue(c.left!);
        const rhs = new SqlFieldValue(c.right!);
        // console.debug("where", [lhs.fqFieldName, "==", rhs.value]);
        const op = (
          {
            "=": "==",
            "!=": "!=",
            ">": ">",
            "<": "<",
            ">=": ">=",
            "<=": "<=",
          } as any
        )[(c.op ?? "") as any];

        if (op) {
          return [where(lhs.fqFieldName, op as any, rhs.value)];
        }
      }
    }

    return [];
  }

  private getLimits(statement: SqlStatementQuery): QueryConstraint[] {
    if (!statement.limit) {
      return [];
    }

    const common = this.commonCriteria(statement.query);

    let limitSafe = false;
    if (!statement.query?.or.length) {
      limitSafe = (statement?.orderBy?.length ?? 0) <= 1;
    } else {
      const isSimpleCriteria =
        (statement.query?.or.length ?? 0) <= 1 &&
        statement.query?.or[0].and.length === (common?.length ?? -1) &&
        !common?.find(
          (c) =>
            (c.left?.type === "column" && c.right?.type !== "column") ||
            (c.left?.type !== "column" && c.right?.type === "column")
        );

      limitSafe = isSimpleCriteria && !statement.orderBy?.length;
    }

    if (limitSafe && statement.limit) {
      // There is no longer a means to skip the first n records in a query :/
      return [limit(statement.limit + (statement.offset ?? 0))];
    }
    return [];
  }

  private getOrderBy(
    q: SqlNormalExpression | undefined,
    order: SqlOrder[] | undefined
  ): QueryConstraint[] {
    // unable to order when there is a query, otherwise we can at least order by the first field
    if (!q?.or.length && order?.length) {
      return [
        orderBy(order[0].name, order[0].order === "desc" ? "desc" : "asc"),
      ];
    }

    return [];
  }

  private commonCriteria(criteria: SqlStatement["query"]) {
    if (criteria?.common?.length) {
      const result = criteria.common.filter(
        (c) =>
          c.left?.type === "column" &&
          c.right?.type !== "default" &&
          c.right?.type !== "null" &&
          c.right?.type !== "column"
      );
      return result;
    }
    return [];
  }
}
