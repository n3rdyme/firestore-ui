/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 9th, 2022
 * ****************************************************************************
 */

import React, { useCallback, useEffect, useRef } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { CardMessage } from "../../../components/cardMessage";
import { Modal } from "../../../components/modal";
import { ProgressModal } from "../../../components/progressModal";
import { useCollectionInsert } from "../../../hooks/useCollectionInsert";
import { promiseParallel } from "../../../utils/promiseParallel";
import { JsonEditor } from "./jsonEditor";
import { UpsertToolbar } from "./upsertToolbar";

const exampleData = [
  {
    id: "1",
    name: "John",
    age: 30,
    address: {
      street: "Main Street",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
  },
];

export function UpsertView() {
  const upsertDoc = useCollectionInsert();
  const [json, setJson] = React.useState<string | undefined>(() =>
    JSON.stringify(exampleData, null, 2)
  );
  const [error, setError] = React.useState<Error | undefined>();
  const [jsonData, setJsonData] = React.useState<any[]>();
  const [jsonValid, setJsonValid] = React.useState(true);
  // upload
  const [uploading, setUploading] = React.useState(false);
  const [progress, setProgress] =
    React.useState<{ count: number; total: number }>();
  const [uploadError, setUploadError] = React.useState<Error | undefined>();
  const cancelRequest = useRef({ cancel: false });

  useEffect(() => {
    try {
      const data = JSON.parse(json || "");
      if (
        (Array.isArray(data) && data.length > 0) ||
        (typeof data === "object" && Object.keys(data).length > 0)
      ) {
        setJsonData(Array.isArray(data) ? data : [data]);
        setJsonValid(true);
        setError(undefined);
      } else {
        setJsonValid(false);
        setJsonData(undefined);
        setError(
          new Error("The JSON data should be a non-empty array or an object.")
        );
      }
    } catch (e: unknown) {
      setError(e as any);
      setJsonValid(false);
      setJsonData(undefined);
    }
  }, [json]);

  const upsertOne = useCallback(
    (collectionName: string, documentId: string | undefined, data: any) => {
      console.log("upsert", data);
      const id = !documentId ? undefined : data?.[documentId];
      return upsertDoc(collectionName, id, data);
    },
    [upsertDoc]
  );

  const updateProgress = useCallback((count: number, total: number) => {
    setProgress({ count, total });
  }, []);

  const onUpload = useCallback(
    (collectionName: string, documentId?: string) => {
      if (!jsonData) {
        return;
      }

      console.log(`Uploading ${jsonData.length} items to ${collectionName}`);
      cancelRequest.current.cancel = false;
      setProgress({ count: 0, total: jsonData.length });
      setUploading(true);

      promiseParallel(
        jsonData,
        (data: any) => upsertOne(collectionName, documentId, data),
        5,
        updateProgress,
        cancelRequest.current
      )
        .catch(setUploadError)
        .finally(() => {
          setUploading(false);
        });
    },
    [jsonData, updateProgress, upsertOne]
  );

  return (
    <div className="flex-grow flex flex-col">
      <UpsertToolbar jsonValid={jsonValid} onUpload={onUpload} />
      <JsonEditor value={json} onChange={setJson} />
      {!!error && (
        <CardMessage
          textSize="text-sm"
          className="bg-orange-200 text-sm p-1 px-2 text-danger rounded-none"
          iconType={FaExclamationTriangle}
          message={`${error.message}`}
        />
      )}
      <ProgressModal
        inProgress={uploading}
        value={progress?.count ?? 0}
        max={progress?.total ?? 0}
        label="Uploading"
        cancel={() => {
          cancelRequest.current.cancel = true;
        }}
      />
      <Modal
        shown={!!uploadError}
        onOverlayClick={() => setUploadError(undefined)}
      >
        <div>{uploadError?.message}</div>
      </Modal>
    </div>
  );
}
