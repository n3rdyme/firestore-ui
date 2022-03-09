/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 9th, 2022
 * ****************************************************************************
 */

import React from "react";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../../../components/spinner";
import { ErrorMessage } from "../../../components/cardMessage";
import { useQueryResult } from "../../../hooks/useQueryResult";

export function TestConnection() {
  const navigate = useNavigate();
  const { result, working, error } = useQueryResult("test", { limit: 1 });

  const connectedOk = result || error?.code === "permission-denied";
  if (connectedOk) {
    setTimeout(() => navigate("./login"), 0);
  }

  return (
    <div className="body">
      <h1>Testing Connection</h1>
      <section>
        {!!error && <ErrorMessage message={error.message} />}
        {working && <Spinner>Testing connection...</Spinner>}
        {result && <div>Connection successful!</div>}
      </section>
    </div>
  );
}
