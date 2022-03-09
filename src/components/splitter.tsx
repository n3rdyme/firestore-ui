/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 9th, 2022
 * ****************************************************************************
 */
import React, { useCallback, useMemo } from "react";

export interface SplitterProps {
  minSize?: number;
  defaultSize?: number;
  top: React.ReactNode;
  bottom: React.ReactNode;
}

export function Splitter({ minSize, defaultSize, top, bottom }: SplitterProps) {
  const [size, setSize] = React.useState(defaultSize || 200);
  const [captureAt, setCaptureAt] = React.useState<{
    screenY: number;
    size: number;
  } | null>(null);

  const onPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      e.preventDefault();
      setCaptureAt({ size, screenY: e.screenY });
      e.currentTarget.setPointerCapture(e.pointerId);
    },
    [size]
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (!captureAt) return;
      const diff = e.screenY - captureAt.screenY;
      setSize(Math.max(minSize || 50, captureAt.size + diff));
    },
    [captureAt, minSize]
  );

  const onPointerUp = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    setCaptureAt(null);
    e.currentTarget.releasePointerCapture(e.pointerId);
  }, []);

  const style = useMemo(
    () => (size == null ? undefined : { height: `${size}px` }),
    [size]
  );

  return (
    <div className="flex-grow flex flex-col">
      <div className="flex flex-col" style={style}>
        {top}
      </div>
      <div
        className="py-1 cursor-ns-resize bg-gradient-to-t from-gray-200 to-gray-400"
        onPointerDown={onPointerDown}
        onPointerMoveCapture={onPointerMove}
        onPointerUpCapture={onPointerUp}
      >
        <div className="border border-gray-400" />
      </div>
      <div className="flex-grow flex flex-col">{bottom}</div>
    </div>
  );
}
