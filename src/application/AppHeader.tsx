/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: January 11th, 2022
 * ****************************************************************************
 */
import React from "react";
import { Link } from "react-router-dom";

export function AppHeader() {
  return (
    <header className="flex flex-row items-center justify-between fixed inset-0 px-2 py-2 h-14 z-30 bg-dark text-light shadow-lg">
      <Link
        to="/"
        className="flex items-center text-white font-bold text-lg sm:text-title space-x-1"
      >
        <img src="/images/firebase_28dp.png" alt="logo" className="h-8" />
        <span>firestore-ui.com</span>
        <span className="font-mono text-xs sm:text-sm">(BETA)</span>
      </Link>
      <div className="flex-grow" />
      <div>
        <Link to="/connect" className="btn bg-primary text-dark w-32">
          Connect!
        </Link>
      </div>
    </header>
  );
}
