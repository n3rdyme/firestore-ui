/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 13th, 2022
 * ****************************************************************************
 */
import React from "react";
import { IconType } from "react-icons";
import { classNames } from "../utils/classNames";

export interface TabConfig {
  icon?: IconType;
  name: string;
  color?: string;
  onClick: () => void;
}

export interface TabsDisplayProps {
  currentTab: number;
  tabs: TabConfig[];
}

const tabStyle = [
  "border-transparent",
  "hover:text-secondary",
  "hover:border-secondary",
  "group",
  "inline-flex",
  "items-center",
  "px-3",
  "border-b-2",
  "font-medium",
  "text-sm",
  "rounded-none",
].join(" ");

export function TabsDisplay({ currentTab, tabs }: TabsDisplayProps) {
  return (
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex space-x-4" aria-label="Tabs">
        {tabs.map((tab, index) => (
          <button
            type="button"
            key={tab.name}
            className={classNames(tab.color ?? "text-gray-500", tabStyle, {
              [tab.color ?? "text-gray-500"]: !(index === currentTab),
              [tab.color ?? "text-secondary"]: index === currentTab,
              "border-secondary": index === currentTab,
            })}
            aria-current={index === currentTab}
            onClick={tab.onClick}
          >
            {tab.icon && <tab.icon className="mr-2" />}
            <span>{tab.name}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
