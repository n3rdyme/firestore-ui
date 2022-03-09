/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: February 7th, 2022
 * ****************************************************************************
 */

import React from "react";
import { Route, Routes } from "react-router-dom";
import { PageNotFound } from "../components/pageNotFound";
import { HomeIndex } from "./home";

export function SiteIndex() {
  return (
    <Routes>
      <Route path="" element={<HomeIndex />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
