/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 9th, 2022
 * ****************************************************************************
 */

import React, { useMemo } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { FirebaseOptions } from "firebase/app";
import { FirebaseAppConnection } from "../../services/firebaseApp";
import { PageNotFound } from "../../components/pageNotFound";
import { TestConnection } from "./components/testConnection";
import { FirebaseAppAuth } from "../../services/firebaseAppAuth";
import { DatabaseLogin } from "./components/databaseLogin";
import { DatabaseQuery } from "./query";

export function ConnectDatabase() {
  const configJson = useParams<{ config: string }>();
  const config = useMemo(() => {
    try {
      if (configJson.config) {
        return JSON.parse(atob(configJson.config)) as FirebaseOptions;
      }
    } catch (ex: unknown) {
      console.error(ex);
    }
    return null;
  }, [configJson.config]);

  const appName = useMemo(
    () => `${config?.projectId}-${config?.apiKey}`,
    [config]
  );

  if (!config) {
    return <div>Invalid configuration</div>;
  }

  return (
    <FirebaseAppConnection name={appName} config={config}>
      <FirebaseAppAuth>
        <Routes>
          <Route path="" element={<TestConnection />} />
          <Route path="login" element={<DatabaseLogin />} />
          <Route path="query" element={<DatabaseQuery />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </FirebaseAppAuth>
    </FirebaseAppConnection>
  );
}
