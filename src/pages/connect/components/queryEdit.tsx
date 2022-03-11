/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 9th, 2022
 * ****************************************************************************
 */
import React, { useEffect } from "react";
import Editor from "@monaco-editor/react";
import { FaExclamationTriangle } from "react-icons/fa";
import { CardMessage } from "../../../components/cardMessage";
import {
  ParserError,
  SqlStatementVisitor,
} from "../../../services/sqlStatementVisitor";

export interface QueryEditProps {
  value: string | undefined;
  onChange: (query: string | undefined) => void;
}
export function QueryEdit({ value, onChange }: QueryEditProps) {
  const [errors, setErrors] = React.useState<ParserError[] | null>(null);

  useEffect(() => {
    if (!value) return;
    const { errors: errs, statements } = SqlStatementVisitor.parseSql(value);
    setErrors(errs);
    console.log({ statements });
  }, [value]);

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
      {!!errors?.length && (
        <CardMessage
          textSize="text-sm"
          className="bg-orange-200 text-sm p-1 px-2 text-danger rounded-none"
          iconType={FaExclamationTriangle}
          message={`(${errors[0].startLine}:${errors[0].startCol}) ${errors[0].message}`}
        />
      )}
    </div>
  );
}
