/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 16th, 2022
 * ****************************************************************************
 */

import React, { useCallback, useMemo } from "react";
import { FaChevronDown } from "react-icons/fa";
import { classNames } from "../utils/classNames";
import { TabConfig } from "./tabsDisplay";

export type DropdownMenuItem = TabConfig;

export interface DropdownMenuProps {
  items: DropdownMenuItem[];
  currentItem: number;
  buttonStyle?: {
    background: string;
    text: string;
  };
  itemStyle?: {
    background: string;
    selected?: string;
    text: string;
  };
}

export function DropdownMenu({
  currentItem,
  items,
  buttonStyle,
  itemStyle,
}: DropdownMenuProps) {
  const [open, setOpen] = React.useState(false);
  const toggleOpen = useCallback(() => setOpen(!open), [open]);
  const current = useMemo(() => items[currentItem], [currentItem, items]);
  const CurrentIcon = current.icon;
  const colors = buttonStyle || {
    background: "bg-light",
    border: "border-dark",
    text: "text-dark",
  };

  return (
    <div>
      <div className="relative">
        <div className="inline-flex">
          <button
            type="button"
            className={classNames(
              "relative p-0 m-0",
              colors.background,
              colors.text
            )}
            aria-haspopup="listbox"
            aria-labelledby="listbox-label"
            aria-expanded={open}
            onClick={toggleOpen}
          >
            <div className="inline-flex items-center p-1 px-2 pr-3 mx-1 border-r border-gray-400">
              {!!current && (
                <>
                  {!!CurrentIcon && <CurrentIcon className="w-4 h-4 mr-1" />}
                  {current.name}
                </>
              )}
            </div>
            <FaChevronDown className="ml-2 mr-3 h-3 w-3" aria-hidden="true" />
          </button>
        </div>

        <ul
          className={classNames(
            "origin-top-left absolute z-10 left-0",
            "mt-1 w-fit min-w-full rounded-md shadow-lg overflow-hidden",
            "divide-y divide-gray-200 focus:outline-none",
            itemStyle?.text ?? "bg-white",
            { block: open, hidden: !open }
          )}
          tabIndex={-1}
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant={`listbox-item-${currentItem}`}
          onClick={toggleOpen}
        >
          <div
            className="fixed inset-0 bg-transparent"
            aria-hidden="true"
            onClick={toggleOpen}
          />

          {items.map((item, index) => (
            <li
              key={item.name}
              className={classNames(
                "cursor-default select-none relative",
                itemStyle?.text ?? "text-dark hover:text-secondary",
                {
                  [itemStyle?.selected ?? "bg-gray-100"]: index === currentItem,
                }
              )}
              role="option"
              id={`listbox-item-${index}`}
              aria-selected={index === currentItem}
            >
              <button
                type="button"
                onClick={item.onClick}
                className="relative w-full px-4 py-3 rounded-none whitespace-nowrap justify-start focus:ring-0"
              >
                <div className="inline-flex items-center">
                  {!!item.icon && <item.icon className="w-4 h-4 mr-1" />}
                  {item.name}
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
