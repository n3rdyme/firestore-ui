/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 SellYourCar.com - All rights reserved.
 * Project: @sell-your-car/inventory-syc-hosting
 * Created On: February 16th, 2022
 * ****************************************************************************
 */

import { Route, Routes } from "react-router-dom";
import React from "react";
import { PageNotFound } from "../../components/pageNotFound";
import { ConnectStart } from "./start";

export function ConnectIndex() {
  return (
    <Routes>
      <Route path="" element={<ConnectStart />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
