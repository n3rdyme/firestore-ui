/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 9th, 2022
 * ****************************************************************************
 */

import React, { useMemo } from "react";
import stringify from "json-stringify-pretty-compact";
import Editor from "@monaco-editor/react";
import { useWindowWidth } from "../../../hooks/useWindowWidth";

export function JsonInspect({
  data,
  format,
}: {
  data: any;
  format?: "full" | "compact";
}) {
  const fontSize = 12;
  const winSizeX = useWindowWidth();

  const jsonText = useMemo(() => {
    if (data == null) {
      return "";
    }
    if (format === "full") {
      return JSON.stringify(data, null, 2);
    }
    return stringify(data, {
      indent: 2,
      maxLength: Math.floor(winSizeX / (fontSize * 0.66)),
    });
  }, [data, format, winSizeX]);

  return (
    <div className="flex-grow flex flex-col text-xs font-mono whitespace-pre bg-light relative overflow-clip">
      <Editor
        className="absolute top-0 left-0 right-0 bottom-0 border"
        defaultLanguage="json"
        options={{
          minimap: { enabled: false },
          readOnly: true,
          fontSize,
        }}
        value={jsonText}
      />
    </div>
  );
}
