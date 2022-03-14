/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 14th, 2022
 * ****************************************************************************
 */

import React, { useEffect, useMemo, useState } from "react";
import { FaCheckCircle, FaStopCircle } from "react-icons/fa";
import { TabConfig, TabsDisplay } from "../../../components/tabsDisplay";
import { SqlStatementResult } from "../../../services/sqlStatement";
import { properCase } from "../../../utils/properCase";
import { ResultPanel } from "./resultPanel";

export function ResultView({ results }: { results: SqlStatementResult[] }) {
  const resultsWithNames = React.useMemo(
    () =>
      results.map<SqlStatementResult & { name: string }>((result, index) => ({
        ...result,
        name: `${index + 1}. ${properCase(result.statement.type ?? "unknown")}`,
      })),
    [results]
  );

  const resultTabs: (TabConfig & { id: string })[] = useMemo(
    () =>
      resultsWithNames.map((result, index) => ({
        id: result.name,
        name: result.name,
        color: result.errors?.length ? "text-danger" : "text-success",
        icon: result.errors?.length ? FaStopCircle : FaCheckCircle,
        onClick: () => setCurrentTab(index),
      })),
    [resultsWithNames]
  );

  const [currentTab, setCurrentTab] = useState(() =>
    Math.max(
      0,
      resultsWithNames.findIndex((r) => r.errors?.length)
    )
  );

  useEffect(() => {
    setCurrentTab(
      Math.max(
        0,
        resultsWithNames.findIndex((r) => r.errors?.length)
      )
    );
  }, [resultsWithNames]);

  // Only one entry in results? don't show the tabs
  if (resultsWithNames.length <= 1) {
    return <ResultPanel results={results[0]} />;
  }

  return (
    <div className="flex flex-grow flex-col">
      <h1 className="px-4 py-0 flex flex-col justify-center h-16">
        <TabsDisplay tabs={resultTabs} currentTab={currentTab} />
      </h1>
      <ResultPanel results={results[currentTab]} />
    </div>
  );
}
