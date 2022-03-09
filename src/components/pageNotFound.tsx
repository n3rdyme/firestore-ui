/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: February 11th, 2022
 * ****************************************************************************
 */
import React from "react";
import { usePageTitle } from "../hooks/usePageTitle";
import { ErrorMessage } from "./cardMessage";

export function PageNotFound() {
  usePageTitle("Page Not Found");
  return (
    <div className="body">
      <h1>Page Not Found</h1>
      <section>
        <ErrorMessage message="Sorry, we are unable to find the page you are looking for. Please try again." />
      </section>
    </div>
  );
}
