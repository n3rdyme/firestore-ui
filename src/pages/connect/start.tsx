/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: January 11th, 2022
 * ****************************************************************************
 */
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "@monaco-editor/react";
import { FirebaseOptions } from "firebase/app";
import { FaExclamationTriangle } from "react-icons/fa";
import { CardMessage } from "../../components/cardMessage";
import { usePageTitle } from "../../hooks/usePageTitle";

const exampleConfig: FirebaseOptions & { [key: string]: any } = {
  appId: "1:812750465909:web:4c41dc587f2dae14c2813c",
  apiKey: "AIzaSyBHbsK9EE5e-8RqnCD5qM_i5JR4OkSiJT4",
  authDomain: "firestore-ui-com.firebaseapp.com",
  projectId: "firestore-ui-com",
  messagingSenderId: "812750465909",
  measurementId: "G-QSSBNZBXCP",
};

export function ConnectStart() {
  const navigate = useNavigate();
  usePageTitle("Connect To Firestore");
  const [editText, setEditText] = useState<string | undefined>(() =>
    JSON.stringify(exampleConfig, null, 2)
  );
  const [config, setConfig] = useState<FirebaseOptions | undefined>();
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    try {
      const cfg = JSON.parse(editText || "");
      // const isExample = Object.keys(exampleConfig).find(
      //   (key) => exampleConfig[key] === cfg[key]
      // );
      setError(undefined);
      setConfig(cfg); // isExample ? undefined : cfg);
    } catch (e: unknown) {
      console.error(e);
      setConfig(undefined);
      setError((e as Error).message);
    }
  }, [editText]);

  const onConnect = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();
      if (!config) return;
      const jsonConfig = btoa(JSON.stringify(config)).replace(/=*$/, "");
      navigate(`/connect/${jsonConfig}`);
    },
    [config, navigate]
  );

  return (
    <div className="body">
      <h1>Connect To Firestore</h1>
      <section>
        <div className="card flex flex-col flex-grow">
          <h2>1. Getting Started</h2>
          <section className="block flex-grow-0">
            First things first, we&apos;ll need your <em>client</em>{" "}
            configuration for the api to talk to firestore. This information is
            used only in the browser to connect the firestore sdk.
            <div className="m-4" />
            You can find this information in the{" "}
            <a
              href="https://console.firebase.google.com/project/_/settings/general"
              target="_blank"
              rel="noreferrer"
            >
              General Settings of the Firebase Console
            </a>{" "}
            under the &quot;<b>Your apps</b>&quot; section. If you do not
            already have one, click the &lt;/&gt; button to create a new web
            client application.
          </section>
          <div className="flex flex-col flex-grow relative">
            <Editor
              className="absolute top-0 left-0 right-0 bottom-0 border"
              defaultLanguage="json"
              defaultValue=""
              options={{
                minimap: { enabled: false },
              }}
              value={editText}
              onChange={(e) => setEditText(e)}
            />
          </div>
          {!!error && (
            <CardMessage
              className="bg-red-200 mt-4 text-danger"
              iconType={FaExclamationTriangle}
              message={error}
            />
          )}
          {!error && !config && editText && (
            <CardMessage
              className="bg-orange-100 mt-4 text-danger"
              iconType={FaExclamationTriangle}
              message="Please change the sample config to continue."
            />
          )}
          <div className="pt-4 flex flex-row justify-end flex-grow-0">
            <button
              type="button"
              className="bg-primary text-dark w-32"
              disabled={!config}
              onClick={onConnect}
            >
              Connect!
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
