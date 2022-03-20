/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 19th, 2022
 * ****************************************************************************
 */
import { useEffect, useState } from "react";
import { useMonaco } from "@monaco-editor/react";
import { sqlConfig } from "../services/sqlj/sqljConfig";
import { conf } from "../services/sqlj/sqlj";
import { SqljDocTokenizer } from "../services/sqlj/sqljDocTokenizer";

const global = {
  initialized: false,
};

export function useMonacoSqlj() {
  const monaco = useMonaco();
  const [ready, setReady] = useState(global.initialized);

  useEffect(() => {
    if (monaco && !ready) {
      monaco.languages.register(sqlConfig);
      monaco.languages.setLanguageConfiguration("sqlj", conf);
      monaco.languages.registerDocumentSemanticTokensProvider(
        "sqlj",
        new SqljDocTokenizer()
      );

      global.initialized = true;
      setReady(true);
    }
  }, [monaco, ready]);

  return ready;
}
