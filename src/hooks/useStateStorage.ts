/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 16th, 2022
 * ****************************************************************************
 */

import { useEffect, useState } from "react";
import { useDebouncedValue } from "./useDebouncedValue";

export function readStorage<T>(key: string, defaultValue: T): T {
  try {
    const storage = localStorage.getItem(key);
    if (storage != null) {
      return JSON.parse(storage) as T;
    }
  } catch (e: unknown) {
    /* ignore */
  }
  return defaultValue;
}

export function writeStorage<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e: unknown) {
    /* ignore */
  }
}

export function useStateStorage<T>(
  name: string,
  defaultValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = useState(() => readStorage(name, defaultValue));
  useEffect(() => writeStorage(name, state), [name, state]);
  return [state, setState];
}

export function useDebouncedStateStorage<T>(
  name: string,
  defaultValue: T,
  delay = 300
): [T, T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState(() => readStorage(name, defaultValue));
  const debouncedValue = useDebouncedValue(value, delay);

  // Update on debounced value change.
  useEffect(() => writeStorage(name, debouncedValue), [name, debouncedValue]);

  return [value, debouncedValue, setValue];
}
