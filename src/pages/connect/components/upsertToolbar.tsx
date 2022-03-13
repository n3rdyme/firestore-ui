/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 13th, 2022
 * ****************************************************************************
 */
/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 9th, 2022
 * ****************************************************************************
 */

import React, { useCallback } from "react";
import { FaUpload } from "react-icons/fa";

export interface UpsertToolbarProps {
  jsonValid?: boolean;
  onUpload: (collectionName: string, documentId?: string) => void;
}

export function UpsertToolbar({ jsonValid, onUpload }: UpsertToolbarProps) {
  const [collectionName, setCollectionName] = React.useState<string>();
  const [documentId, setDocumentId] = React.useState<string>();

  const onChangeCollection = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCollectionName(e.target.value);
    },
    []
  );

  const onChangeDocumentId = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setDocumentId(e.target.value);
    },
    []
  );

  const onUploadClick = useCallback(() => {
    if (jsonValid && collectionName) {
      onUpload(collectionName, documentId);
    }
  }, [onUpload]);

  const notReady = !jsonValid || !collectionName;

  return (
    <div className="flex flex-row flex-wrap py-2 px-4 text-base text-dark bg-navy-300">
      <div className="flex items-center mr-2">
        <div className="text-white w-24 pr-4 text-right">Collection:</div>
        <input
          type="text"
          className="py-1"
          placeholder="[Enter Collection Name]"
          value={collectionName ?? ""}
          onChange={onChangeCollection}
        />
      </div>
      <div className="flex items-center mr-2">
        <div className="text-white w-24 pr-4 text-right">Identity:</div>
        <input
          type="text"
          className="py-1"
          placeholder="[Generated Key]"
          value={documentId ?? ""}
          onChange={onChangeDocumentId}
        />
      </div>

      <div className="flex-grow" />
      <button
        type="button"
        className="bg-light py-1"
        disabled={notReady}
        onClick={onUploadClick}
      >
        <FaUpload className="mr-1" /> Upsert Data
      </button>
    </div>
  );
}
