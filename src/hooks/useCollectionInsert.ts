/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 9th, 2022
 * ****************************************************************************
 */

import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { useCallback } from "react";
import { useFirestore } from "../services/firebaseApp";

export function useCollectionInsert() {
  const fs = useFirestore();

  return useCallback(
    async (
      collectionName: string,
      identifiedBy: string | undefined,
      data: any
    ) => {
      if (!data) return undefined;
      if (!fs) throw new Error("Firestore is not initialized");

      const coll = collection(fs, collectionName);

      if (identifiedBy) {
        const id = `${data?.[identifiedBy] ?? ""}`;
        await setDoc(doc(coll, id), data);
        return identifiedBy;
      }

      const docRef = await addDoc(coll, data);
      return docRef.id;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [fs?.app]
  );
}
