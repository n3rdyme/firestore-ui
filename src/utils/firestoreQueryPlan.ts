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
  CollectionReference,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import _ from "lodash";
import { SqlFieldValue } from "../services/sqlFieldValue";
import {
  SqlNormalExpression,
  SqlOrder,
  SqlStatement,
} from "../services/sqlStatement";
import { promiseParallel } from "./promiseParallel";

export class FirestoreQueryPlan {
  private collection: CollectionReference<DocumentData>;

  constructor(private readonly fs: Firestore, readonly collectionName: string) {
    this.collection = collection(this.fs, collectionName);
  }

  public async execute(statement: SqlStatement) {
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

  filterResults(
    statement: SqlStatement,
    dataset: QueryDocumentSnapshot<DocumentData>[]
  ): QueryDocumentSnapshot<DocumentData>[] {
    return dataset;
  }

  orderedResults(
    statement: SqlStatement,
    dataset: QueryDocumentSnapshot<DocumentData>[]
  ): QueryDocumentSnapshot<DocumentData>[] {
    return dataset;
  }

  async getDocuments(
    statement: SqlStatement
  ): Promise<QueryDocumentSnapshot<DocumentData>[]> {
    // It's usually more efficient to use multiple queries if there are multiple equality conditions,
    // i.e. WHERE ( id = 1 or id = 2 )
    const plans = this.planMultipleQueries(statement);
    if (plans) {
      const allResults = await promiseParallel(plans, (p) =>
        this.getDocuments(p)
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
    const constraints = [
      ...this.getQuery(statement.query),
      ...this.getOrderBy(statement.query, statement.orderBy),
      ...this.getLimits(statement),
    ];

    const q = query(this.collection, ...constraints);
    const documents = await getDocs(q);

    const results = documents.docs;
    return results;
  }

  private planMultipleQueries(
    statement: SqlStatement
  ): SqlStatement[] | undefined {
    const { query: criteria } = statement;

    if (!criteria || criteria.or.length === 0) {
      return undefined;
    }

    const equalCounters = criteria.or.map(
      (or) => or.and.filter((c) => c.op === "=").length
    );

    // Use multiple queries if any or condition has more than one equality in addition to those in common
    const useMultipleQueries = equalCounters.some(
      (c) => c !== criteria.common?.length
    );

    if (!useMultipleQueries) {
      return undefined;
    }

    const plans: SqlStatement[] = criteria.or.map((c) => {
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

  private getQuery(criteria: SqlStatement["query"]): QueryConstraint[] {
    if (!criteria || criteria.or.length === 0) {
      return [];
    }

    if (criteria.common?.length) {
      return criteria.common
        .filter(
          (c) =>
            c.left &&
            c.right &&
            c.left.type === "column" &&
            c.right?.type !== "column"
        )
        .map((c) => {
          const lhs = new SqlFieldValue(c.left!);
          const rhs = new SqlFieldValue(c.right!);
          // console.log("where", [lhs.fqFieldName, "==", rhs.value]);
          return where(lhs.fqFieldName, "==", rhs.value);
        });
    }
    return [];
  }

  private getLimits(statement: SqlStatement): QueryConstraint[] {
    if (!statement.limit) {
      return [];
    }

    let limitSafe = false;
    if (!statement.query?.or.length) {
      limitSafe = (statement?.orderBy?.length ?? 0) <= 1;
    } else {
      const isSimpleCriteria =
        (statement.query?.or.length ?? 0) <= 1 &&
        statement.query?.or[0].and.length ===
          (statement.query?.common?.length ?? -1) &&
        !statement.query?.common?.find(
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
}
