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
import React, { useEffect, useState } from "react";

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

export function FirebaseAppConnection({
  name,
  config,
  children,
}: {
  name: string;
  config: FirebaseOptions;
} & Pick<React.HTMLProps<HTMLDivElement>, "children">) {
  const fbApp = useFirebaseAppConnection(name, config);
  return (
    <FirebaseAppContext.Provider value={fbApp}>
      {children}
    </FirebaseAppContext.Provider>
  );
}

export const useFirebaseApp = () => React.useContext(FirebaseAppContext);
