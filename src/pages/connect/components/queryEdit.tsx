/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 9th, 2022
 * ****************************************************************************
 */
import { query } from "firebase/firestore";
import React from "react";
import Editor from "@monaco-editor/react";
import { FaExclamationTriangle } from "react-icons/fa";
import { CardMessage } from "../../../components/cardMessage";

export interface QueryEditProps {
  value: string | undefined;
  onChange: (query: string | undefined) => void;
}

export function QueryEdit({ value, onChange }: QueryEditProps) {
  const [error, setError] = React.useState<string | null>(null);

  return (
    <div className="flex-grow flex flex-col">
      <div className="flex flex-col flex-grow relative">
        <Editor
          className="absolute top-0 left-0 right-0 bottom-0 border"
          defaultLanguage="sql"
          defaultValue="/* Enter your sql query here */"
          options={{
            minimap: { enabled: false },
          }}
          value={value}
          onChange={onChange}
        />
      </div>
      {!!error && (
        <CardMessage
          className="bg-red-200 p-2 text-danger rounded-none"
          iconType={FaExclamationTriangle}
          message={error}
        />
      )}
    </div>
  );
}
