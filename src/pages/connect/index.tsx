/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: January 11th, 2022
 * ****************************************************************************
 */
import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { FirebaseOptions } from "firebase/app";
import { FaExclamationTriangle } from "react-icons/fa";
import { CardMessage } from "../../components/cardMessage";

const exampleConfig: FirebaseOptions & { [key: string]: any } = {
  apiKey: "EXAMPLEu4JhvyfaaWa8pwuqSqDQ4bWvUU2JGq283",
  authDomain: "example-app.firebaseapp.com",
  databaseURL: "https://example-app.firebaseio.com",
  projectId: "example-app",
  messagingSenderId: "181342432533",
  appId: "1:181342432533:web:8pwuqSqDQ4bWvUU2JGq283",
};

export function HomeIndex() {
  const [editText, setEditText] = useState<string | undefined>(() =>
    JSON.stringify(exampleConfig, null, 2)
  );
  const [config, setConfig] = useState<FirebaseOptions | undefined>();
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    try {
      const cfg = JSON.parse(editText || "");
      const isExample = Object.keys(exampleConfig).find(
        (key) => exampleConfig[key] === cfg[key]
      );
      setError(undefined);
      setConfig(isExample ? undefined : cfg);
    } catch (e: unknown) {
      console.error(e);
      setConfig(undefined);
      setError((e as Error).message);
    }
  }, [editText]);

  return (
    <div className="body">
      <h1>Home</h1>
      <section>
        <div className="card flex flex-col flex-grow">
          <h2>1. Getting Started</h2>
          <section className="block flex-grow-0">
            First things first, we&apos;ll need your <em>client</em>{" "}
            configuration for the api to talk to firestore. This information is
            used only in the browser to connect the firestore sdk.
            <div className="m-4" />
            You can find this information in the General Settings of the{" "}
            <a
              href="https://console.firebase.google.com/"
              target="_blank"
              rel="noreferrer"
              className="text-secondary"
            >
              Firebase Console
            </a>{" "}
            under the &quot;<b>Your apps</b>&quot; section.
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
            >
              Connect!
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
