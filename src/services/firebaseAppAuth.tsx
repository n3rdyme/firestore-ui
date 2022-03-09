/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: January 11th, 2022
 * ****************************************************************************
 */
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from "firebase/auth";
import React, {
  HTMLProps,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { FcGoogle } from "react-icons/fc";
import { Spinner } from "../components/spinner";
import { AuthenticatedUserContext } from "./authenticatedUser";
import { useFirebaseApp } from "./firebaseApp";

export function FirebaseAppAuth({
  children,
}: Pick<HTMLProps<HTMLDivElement>, "children">) {
  const firebaseApp = useFirebaseApp();
  const auth = useMemo(() => getAuth(firebaseApp ?? undefined), [firebaseApp]);
  const [loaded, setLoaded] = useState(false);
  const [fbUser, setFbUser] = useState<User | null>(null);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      setFbUser((current) => {
        if (
          current?.uid === user?.uid &&
          current?.email === user?.email &&
          current?.displayName === user?.displayName
        )
          return current;
        console.debug(
          `user: ${user?.uid ?? null}, email: ${user?.email ?? null}`
        );
        return user;
      });
      setLoaded(true);
    });
    return unsub;
  });

  const loginClick = useCallback(() => {
    if (!fbUser || fbUser.isAnonymous) {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider).catch((ex) => {
        console.error(ex);
      });
    }
  }, [auth, fbUser]);

  if (!loaded) {
    return <Spinner />;
  }

  if (!fbUser || fbUser.isAnonymous) {
    return (
      <div className="flex flex-col flex-grow">
        <div className="flex-grow" />
        <div className="flex flex-col items-center">
          <button
            type="button"
            onClick={loginClick}
            className="flex flex-row items-center bg-light h-10 p-2 font-bold"
          >
            <FcGoogle size="2em" />
            Login With Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <AuthenticatedUserContext.Provider value={fbUser}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
}
