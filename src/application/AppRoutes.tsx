/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: January 11th, 2022
 * ****************************************************************************
 */
import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomeIndex } from "../pages/home";
import { PageNotFound } from "../components/pageNotFound";
import { ConnectIndex } from "../pages/connect";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route path="" element={<HomeIndex />} />
        <Route path="connect" element={<ConnectIndex />} />
        <Route path="connect/*" element={<ConnectIndex />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}
