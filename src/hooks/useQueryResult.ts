/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 9th, 2022
 * ****************************************************************************
 */

import { FirebaseError } from "firebase/app";
import {
  collection,
  query,
  limit,
  onSnapshot,
  QuerySnapshot,
  DocumentData,
  QueryConstraint,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useFirestore } from "../services/firebaseApp";

export function useQueryResult(
  path: string,
  options?: { limit?: number; orderBy?: string }
) {
  const fs = useFirestore();
  const [inProgress, setInProgress] = useState(true);
  const [error, setError] = useState<FirebaseError | null>(null);
  const [result, setResult] = useState<QuerySnapshot<DocumentData>>();

  useEffect(
    () => {
      if (!fs) {
        setInProgress(false);
        return undefined;
      }

      // test query...
      setInProgress(true);
      const constraints: QueryConstraint[] = [];
      if (options?.limit != null) {
        constraints.push(limit(options.limit));
      }

      const q = query(collection(fs, path), ...constraints);
      const unsubscribe = onSnapshot(
        q,
        (r) => {
          setResult(r);
          setInProgress(false);
        },
        (e) => {
          setError(e);
          setInProgress(false);
        }
      );
      return () => {
        unsubscribe();
        setInProgress(false);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [fs?.app, path, JSON.stringify(options ?? {})]
  );

  return { working: !inProgress, result, error };
}
