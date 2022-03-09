/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 8th, 2022
 * ****************************************************************************
 */

import { useEffect } from "react";

export const usePageTitle = (title: string) => {
  useEffect(() => {
    const saved = document.title;
    if (title) {
      document.title = `${title}`;
    }
    return () => {
      document.title = saved;
    };
  }, [title]);
};
