/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 19th, 2022
 * ****************************************************************************
 */
import { useEffect, useState } from "react";
import { useMonaco } from "@monaco-editor/react";
import { sqlj } from "../services/sqlj/sqljConfig";

const global = {
  initialized: false,
};

export function useMonacoSqlj() {
  const monaco = useMonaco();
  const [ready, setReady] = useState(global.initialized);

  useEffect(() => {
    if (monaco && !ready) {
      sqlj.register(monaco);
      global.initialized = true;
      setReady(true);
    }
  }, [monaco, ready]);

  return ready;
}
