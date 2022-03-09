/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: January 10th, 2022
 * ****************************************************************************
 */
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppHeader } from "./AppHeader";
import { AppRoutes } from "./AppRoutes";

export function AppLoader() {
  return (
    <div className="App">
      <Router>
        <AppHeader />
        <AppRoutes />
      </Router>
    </div>
  );
}
