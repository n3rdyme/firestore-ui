/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 9th, 2022
 * ****************************************************************************
 */

import React, { useMemo } from "react";
import { FaDatabase, FaUpload } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { TabConfig, TabsDisplay } from "../../components/tabsDisplay";
import { QueryView } from "./components/queryView";
import { UpsertView } from "./components/upsertView";

export function DatabaseTabs() {
  const navigate = useNavigate();
  const currentTabId = useParams<{ tabId: string }>().tabId;

  const dbTabs: (TabConfig & { id: string })[] = useMemo(
    () => [
      {
        id: "query",
        icon: FaDatabase,
        name: "Query",
        onClick: () => navigate("../tabs/query"),
      },
      {
        id: "upsert",
        icon: FaUpload,
        name: "Upsert Data",
        onClick: () => navigate("../tabs/upsert"),
      },
    ],
    [navigate]
  );

  const tabIx = dbTabs.findIndex((tab) => tab.id === currentTabId);
  return (
    <div className="flex-grow flex flex-col">
      <h1 className="px-4 py-0 flex flex-col justify-center h-16">
        <TabsDisplay tabs={dbTabs} currentTab={tabIx} />
      </h1>
      <div className="flex-grow flex flex-col">
        <div
          className={
            currentTabId === "query" ? "flex-grow flex flex-col" : "hidden"
          }
        >
          <QueryView />
        </div>
        <div
          className={
            currentTabId === "upsert" ? "flex-grow flex flex-col" : "hidden"
          }
        >
          <UpsertView />
        </div>
      </div>
    </div>
  );
}
