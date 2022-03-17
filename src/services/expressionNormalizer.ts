/* eslint-disable no-multi-assign */
/* eslint-disable no-plusplus */
/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 12th, 2022
 * ****************************************************************************
 */
import { isEqual } from "lodash";
import { sqlComparisonTable } from "./sqlComparisons";
import {
  SqlExpression,
  SqlNormalExpression,
  SqlPredicate,
} from "./sqlStatement";

type TreeNode = SqlExpression & SqlPredicate;

/**
 * Normalizes an expression tree.
 *
 * @note This is not a very efficient implementation, but I don't expect it to
 * be used with 100's or 1000's of operands. This is primarily intended for
 * users writing queries in the browser based UI. If you need to normalize
 * a large number of expressions, you should consider refactoring this code.
 */
export class ExpressionNormalizer {
  public normalize(
    expression: SqlExpression & SqlPredicate
  ): SqlNormalExpression {
    const root = expression;

    // 1. First up, push all negated expressions to the leafs
    const negated = this.pushNegatedExpressions(root);

    // 2. Then, normalize all expressions by creating a set of trees that only and
    const normalized = this.normalizeTree(negated);

    // 3. Then, flatten all expressions
    const flattened = this.flattenTree(normalized);

    // 4. Normalize the expression tree to or [ and [ ... ] ]
    const normalTree = this.normalizeExpression(flattened);

    // 5. Swap all nots for the opposite operator
    const results = this.normalizePredicateLogic(normalTree);

    const commonEquality = this.commonEqualityPredicates(results);
    if (commonEquality.length) {
      results.common = commonEquality;
    }

    return results;
  }

  private pushNegatedExpressions(root: TreeNode): TreeNode {
    return this.visit(root, (node) => {
      if (node.not && node.and) {
        return {
          or: node.and.map((c) => ({ not: !c.not, ...c })),
        };
      }
      if (node.not && node.or) {
        return {
          and: node.or.map((c) => ({ not: !c.not, ...c })),
        };
      }
      return node;
    });
  }

  private normalizeTree(node: TreeNode): TreeNode {
    const result: TreeNode[] = [];
    const todo = [...(node.or ?? [node])];
    let counter = 0;
    while (todo.length && ++counter) {
      const current = todo.shift() as TreeNode;

      const json = JSON.stringify(current);
      const copy = JSON.parse(json);
      const found = this.findNode(copy, (c) => c.or != null);
      if (!found?.or) {
        result.push(current);
      } else if (found.or.length === 1) {
        found.and = found.or;
        delete found.or;
        todo.push(copy);
      } else {
        const copy2 = JSON.parse(json);
        const found2 = this.findNode(copy2, (c) => c.or != null);
        if (!found2?.or) {
          throw new Error("Invariant: Should be the same object tree.");
        }
        const [first, ...remaining] = found.or;
        found.or = [first];
        todo.push(copy);
        found2.or = remaining;
        todo.push(copy2);
      }

      if (counter > 1000) {
        throw new Error(
          "Infinite loop detected while attempting to normalize query tree."
        );
      }
    }

    return { or: result };
  }

  private flattenTree(node: TreeNode): TreeNode {
    if (node.or) {
      return {
        or: node.or.map((e) => this.flattenTreeNode(e)),
      };
    }
    return this.flattenTreeNode(node);
  }

  private flattenTreeNode(node: TreeNode): TreeNode {
    if (node.or) {
      throw new Error("Unexpected OR node remaining in expression tree.");
    }

    if (!node.and) {
      return node;
    }

    const result: TreeNode[] = [];
    for (const child of node.and) {
      if (child.and) {
        result.push(...(this.flattenTree(child).and ?? []));
      } else {
        result.push(child);
      }
    }

    return { and: result };
  }

  private findNode(
    node: TreeNode,
    predicate: (node: TreeNode) => boolean
  ): TreeNode | undefined {
    if (predicate(node)) {
      return node;
    }
    if (node.and) {
      for (const child of node.and) {
        const found = this.findNode(child, predicate);
        if (found) return found;
      }
    }
    if (node.or) {
      for (const child of node.or) {
        const found = this.findNode(child, predicate);
        if (found) return found;
      }
    }

    return undefined;
  }

  private visit(
    node: TreeNode,
    visitor: (node: TreeNode) => TreeNode
  ): TreeNode {
    let newNode = node;
    if (node.and) {
      newNode = { ...node, and: node.and.map((e) => this.visit(e, visitor)) };
    }
    if (node.or) {
      newNode = { ...node, or: node.or.map((e) => this.visit(e, visitor)) };
    }
    return visitor(newNode);
  }

  private normalizeExpression(
    normalized: SqlExpression & SqlPredicate
  ): SqlNormalExpression {
    if (!normalized.or && !normalized.and) {
      return {
        or: [{ and: [normalized] }],
      };
    }
    if (!normalized.or && normalized.and) {
      return {
        or: [{ and: normalized.and }],
      };
    }
    if (normalized.or && normalized.or.find((c) => !c.and)) {
      return {
        or: normalized.or.map((e) => ({ and: e.and ?? [e] })),
      };
    }

    return normalized as SqlNormalExpression;
  }

  private normalizePredicateLogic(
    expression: SqlNormalExpression
  ): SqlNormalExpression {
    for (const andGate of expression.or) {
      for (const predicate of andGate.and) {
        // remove the `not` operation if we can
        let { op } = predicate;
        if (!op) {
          // eslint-disable-next-line no-continue
          continue;
        }

        if (predicate.not && sqlComparisonTable[op]?.invert) {
          delete predicate.not;
          predicate.op = op = sqlComparisonTable[op].invert;
        }
        // if the predicate is lhs=const, rhs=column, swap them
        if (
          predicate.left?.type !== "column" &&
          predicate.right?.type === "column" &&
          sqlComparisonTable[op]?.reorder
        ) {
          const { left, right } = predicate;
          predicate.left = right;
          predicate.right = left;
          predicate.op = op = sqlComparisonTable[op].reorder;
        }
      }
    }

    return expression;
  }

  private commonEqualityPredicates(expression: SqlNormalExpression) {
    let found: SqlPredicate[] = expression.or[0]?.and?.filter(
      (cmp) => cmp.op === "="
    );

    for (const andGate of [...expression.or].slice(1)) {
      for (const predicate of found) {
        const wasFound = !!andGate.and.find((cmp) => isEqual(predicate, cmp));
        if (!wasFound) {
          found = found.filter((cmp) => cmp !== predicate);
        }
      }

      if (!found.length) {
        break;
      }
    }

    return found;
  }
}
