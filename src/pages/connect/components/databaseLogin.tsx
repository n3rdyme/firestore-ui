/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 9th, 2022
 * ****************************************************************************
 */

import React, { useCallback, useEffect } from "react";
import { BsGoogle, BsEnvelope } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "../../../components/cardMessage";
import { Spinner } from "../../../components/spinner";
import { useFirestoreAuth } from "../../../services/authenticatedUser";

export function DatabaseLogin() {
  const navigate = useNavigate();
  const auth = useFirestoreAuth();
  const [working, setWorking] = React.useState(false);
  const [error, setError] = React.useState<Error | null>(null);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  useEffect(() => {
    if (auth?.user?.uid) {
      setTimeout(() => navigate("../tabs/query"), 0);
    }
  }, [auth?.user?.uid, navigate]);

  const loginEmail = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();
      setWorking(true);
      setError(null);
      console.info("loginEmail", email, password);
      auth
        ?.login("email", { email, password })
        .then(() => console.info("Login complete"))
        .catch(setError)
        .finally(() => setWorking(false));
    },
    [auth, email, password]
  );

  const loginGoogle = useCallback(() => {
    setWorking(true);
    setError(null);
    auth
      ?.login("google")
      .then(() => console.info("Login complete"))
      .catch(setError)
      .finally(() => setWorking(false));
  }, [auth]);

  if (!auth) {
    return <Spinner>Loading...</Spinner>;
  }

  return (
    <div className="body">
      <h1>Database Login</h1>
      <section>
        <h2>Choose an Authentication Provider</h2>
        {!!error && <ErrorMessage message={error.message} />}
        <div className="flex flex-col items-center">
          <form onSubmit={loginEmail} className="flex-grow flex flex-col w-96">
            <label htmlFor="email">
              Email Address
              <input
                id="email"
                type="email"
                className="w-full"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                disabled={working}
              />
            </label>
            <label htmlFor="password">
              Password
              <input
                id="password"
                type="password"
                className="w-full"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                disabled={working}
              />
            </label>
            <button
              type="submit"
              disabled={working}
              className="mt-4 flex flex-row items-center bg-primary"
            >
              <BsEnvelope className="mr-2" />
              Login with Email
            </button>
          </form>

          <div className="mt-8 flex flex-row w-96 items-center">
            <div className="flex-grow border border-gray-400 h-0" />
            <div className="p-2 text-gray-500">OR</div>
            <div className="flex-grow border border-gray-400 h-0" />
          </div>

          <div className="mt-8 flex flex-col">
            <button
              type="button"
              onClick={loginGoogle}
              disabled={working}
              className="flex flex-row items-center bg-primary w-96"
            >
              <BsGoogle className="mr-2" />
              Login with Google
            </button>
          </div>

          <div />
        </div>
      </section>
    </div>
  );
}
