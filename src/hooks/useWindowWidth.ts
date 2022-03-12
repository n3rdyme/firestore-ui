/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 12th, 2022
 * ****************************************************************************
 */

import { useEffect } from "react";
import useDebouncedState from "./useDebouncedState";

export const useWindowWidth = () => {
  const [value, , setValue] = useDebouncedState(window.innerWidth, 500);

  useEffect(() => {
    const handleResize = () => setValue(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return value;
};
