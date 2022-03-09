/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: January 11th, 2022
 * ****************************************************************************
 */

import React from "react";

export interface AuthenticatedUser {
  readonly uid: string;
  readonly isAnonymous: boolean;
  readonly displayName: string | null;
  readonly email: string | null;
  readonly emailVerified: boolean;
  readonly phoneNumber: string | null;
  readonly photoURL: string | null;
  readonly providerId: string;
  readonly metadata: { creationTime?: string; lastSignInTime?: string };
  getIdToken(forceRefresh?: boolean): Promise<string>;
}

export interface FirestoreAuthController {
  user: AuthenticatedUser | null;
  login(provider: "email" | "google" | "github"): Promise<void>;
  logout(): Promise<void>;
}

export const FirestoreAuthContext =
  React.createContext<FirestoreAuthController | null>(null);

export const useFirestoreAuth = () => React.useContext(FirestoreAuthContext);

export const useAuthenticatedUser = () =>
  React.useContext(FirestoreAuthContext)?.user ?? null;
