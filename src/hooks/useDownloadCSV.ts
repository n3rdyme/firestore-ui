/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 20th, 2022
 * ****************************************************************************
 */

import papaparse from "papaparse";
import React, { useCallback, useEffect } from "react";

function openUrl(filename: string, href: string) {
  let docItem = document.getElementById("do_open_url");

  if (!docItem) {
    const link = document.createElement("a");
    link.id = "do_open_url";
    link.style.display = "none";
    document.body.appendChild(link);
    docItem = link;
  }
  const downloadLink = docItem as HTMLAnchorElement;

  downloadLink.href = href;
  downloadLink.download = filename;
  downloadLink.click();
}

export function useDownloadFile(
  filename: string,
  contentType: string,
  getContent: () => string
) {
  const [oldUrl, setOldUrl] = React.useState<string>();
  useEffect(() => {
    return () => {
      if (oldUrl) {
        window.URL.revokeObjectURL(oldUrl);
      }
    };
  }, [oldUrl]);

  return useCallback(() => {
    const blob = new Blob(["\ufeff", getContent()], { type: contentType });
    const url = URL.createObjectURL(blob);
    setOldUrl(url);
    openUrl(filename, url);
  }, [getContent, contentType, filename]);
}

export function useDownloadCSV(
  filename: string,
  createDataset: () => { [key: string]: string | number | null | undefined }[]
) {
  return useDownloadFile(filename, "text/csv", () => {
    return papaparse.unparse(createDataset(), { header: true });
  });
}
