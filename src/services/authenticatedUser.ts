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

export const AuthenticatedUserContext =
  React.createContext<AuthenticatedUser | null>(null);

export const useAuthenticatedUser = () =>
  React.useContext(AuthenticatedUserContext);
