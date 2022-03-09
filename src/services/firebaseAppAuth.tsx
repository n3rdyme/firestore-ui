/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: January 11th, 2022
 * ****************************************************************************
 */
import {
  getAuth,
  signInWithPopup,
  AuthProvider,
  EmailAuthProvider,
  GoogleAuthProvider,
  GithubAuthProvider,
  User,
  signOut,
} from "firebase/auth";
import React, {
  HTMLProps,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  FirestoreAuthContext,
  FirestoreAuthController,
} from "./authenticatedUser";
import { useFirebaseApp } from "./firebaseApp";

export function FirebaseAppAuth({
  children,
}: Pick<HTMLProps<HTMLDivElement>, "children">) {
  const firebaseApp = useFirebaseApp();
  const auth = useMemo(
    () => (!firebaseApp ? null : getAuth(firebaseApp ?? undefined)),
    [firebaseApp]
  );
  const [loaded, setLoaded] = useState(false);
  const [fbUser, setFbUser] = useState<User | null>(null);

  useEffect(() => {
    if (!auth) {
      return undefined;
    }
    const unsubscribe = auth.onAuthStateChanged((user) => {
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
    return unsubscribe;
  });

  const login = useCallback<FirestoreAuthController["login"]>(
    (provider) => {
      if (!auth) {
        return Promise.reject(new Error("No database connected."));
      }

      let authProvider: AuthProvider;
      if (provider === "google") {
        authProvider = new GoogleAuthProvider();
      } else if (provider === "github") {
        authProvider = new GithubAuthProvider();
      } else if (provider === "email") {
        authProvider = new EmailAuthProvider();
      } else {
        return Promise.reject(new Error(`Unknown provider: ${provider}`));
      }

      return signInWithPopup(auth, authProvider)
        .then((usr) => {
          /* do nothing */
        })
        .catch((ex) => {
          console.error(ex);
          throw ex;
        });
    },
    [auth]
  );

  const logout = useCallback(() => {
    if (!auth) {
      return Promise.reject(new Error("No database connected."));
    }

    return signOut(auth).catch((ex) => {
      console.error(ex);
    });
  }, [auth]);

  // if (!loaded) {
  //   return <Spinner />;
  // }

  // if (!fbUser || fbUser.isAnonymous) {
  //   return (
  //     <div className="flex flex-col flex-grow">
  //       <div className="flex-grow" />
  //       <div className="flex flex-col items-center">
  //         <button
  //           type="button"
  //           onClick={loginClick}
  //           className="flex flex-row items-center bg-light h-10 p-2 font-bold"
  //         >
  //           <FcGoogle size="2em" />
  //           Login With Google
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }

  const authContext = useMemo(
    () => ({ user: fbUser, login, logout }),
    [fbUser, login, logout]
  );

  return (
    <FirestoreAuthContext.Provider value={!loaded ? null : authContext}>
      {children}
    </FirestoreAuthContext.Provider>
  );
}
