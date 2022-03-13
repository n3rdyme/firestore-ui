/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 9th, 2022
 * ****************************************************************************
 */
import React from "react";
import Editor from "@monaco-editor/react";

export interface JsonEditorProps {
  value: string | undefined;
  onChange: (json: string | undefined) => void;
}
export function JsonEditor({ value, onChange }: JsonEditorProps) {
  return (
    <div className="flex-grow flex flex-col">
      <div className="flex flex-col flex-grow relative overflow-clip">
        <Editor
          className="absolute top-0 left-0 right-0 bottom-0 border"
          defaultLanguage="json"
          options={{
            minimap: { enabled: false },
          }}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
