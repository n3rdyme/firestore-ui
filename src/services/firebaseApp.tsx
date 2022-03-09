/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: January 11th, 2022
 * ****************************************************************************
 */

import {
  FirebaseApp,
  FirebaseOptions,
  initializeApp,
  deleteApp,
} from "firebase/app";
import {
  Firestore,
  getFirestore,
  initializeFirestore,
} from "firebase/firestore";
import React, { useEffect, useMemo, useState } from "react";

export function useFirebaseAppConnection(
  name: string,
  config: FirebaseOptions
) {
  const [fbApp, setFbApp] = useState<FirebaseApp | null>(null);

  useEffect(() => {
    const app = initializeApp(config, name);
    setFbApp(app);
    return () => {
      deleteApp(app);
    };
  }, [name, config]);

  return fbApp;
}

export const FirebaseAppContext = React.createContext<FirebaseApp | null>(null);
export const FirestoreDBContext = React.createContext<Firestore | null>(null);

export function FirebaseAppConnection({
  name,
  config,
  children,
}: {
  name: string;
  config: FirebaseOptions;
} & Pick<React.HTMLProps<HTMLDivElement>, "children">) {
  const fbApp = useFirebaseAppConnection(name, config);
  const firestoreDb = useMemo(() => {
    if (!fbApp) {
      return null;
    }

    initializeFirestore(fbApp, {
      ignoreUndefinedProperties: true,
    });

    return getFirestore(fbApp);
  }, [fbApp]);

  return (
    <FirebaseAppContext.Provider value={fbApp}>
      <FirestoreDBContext.Provider value={firestoreDb}>
        {children}
      </FirestoreDBContext.Provider>
    </FirebaseAppContext.Provider>
  );
}

export const useFirebaseApp = () => React.useContext(FirebaseAppContext);
export const useFirestore = () => React.useContext(FirestoreDBContext);
