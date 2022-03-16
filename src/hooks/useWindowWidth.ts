/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 12th, 2022
 * ****************************************************************************
 */

import { useState, useEffect } from "react";
import { useDebouncedValue } from "./useDebouncedValue";

export const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const debouncedWidth = useDebouncedValue(width, 500);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return debouncedWidth;
};
