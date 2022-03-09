/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 SellYourCar.com - All rights reserved.
 * Project: @sell-your-car/inventory-syc-hosting
 * Created On: February 16th, 2022
 * ****************************************************************************
 */

import React from "react";
import { Route, Routes } from "react-router-dom";
import { PageNotFound } from "../../components/pageNotFound";
import { ConnectStart } from "./start";
import { ConnectDatabase } from "./database";

export function ConnectIndex() {
  return (
    <Routes>
      <Route path="" element={<ConnectStart />} />
      <Route path=":config" element={<ConnectDatabase />} />
      <Route path=":config/*" element={<ConnectDatabase />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
