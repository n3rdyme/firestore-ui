/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 17th, 2022
 * ****************************************************************************
 */

import React, { useCallback } from "react";
import { FaTimes } from "react-icons/fa";
import { Modal } from "../../../components/modal";
import { JsonInspect } from "./jsonInspect";

export function ModalJsonView({
  shown,
  title,
  obj,
  onClose,
}: {
  title?: string;
  shown: boolean;
  obj: any;
  onClose: () => void;
}) {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(JSON.stringify(obj, null, 2));
  }, [obj]);

  return (
    <Modal shown={shown} onClose={onClose} maxWidth="max-w-screen-80">
      <div className="flex flex-row mb-4 items-center">
        <h2 className="">{title}</h2>
      </div>
      <div className="flex flex-col h-96 relative border">
        <JsonInspect data={obj} format="full" />
      </div>
      <div className="flex flex-row justify-center mt-4 space-x-2">
        <button type="button" onClick={onCopy} className="bg-primary w-32">
          Copy
        </button>
      </div>
    </Modal>
  );
}
