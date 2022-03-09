/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: January 11th, 2022
 * ****************************************************************************
 */
import React from "react";
import { Link } from "react-router-dom";

export function HomeIndex() {
  return (
    <div className="body">
      <h1>Home</h1>
      <section>
        <div className="card flex flex-col flex-grow">
          <h2>Welcome to firestore-ui</h2>
          <section className="block flex-grow-0">
            This is a simple React app that allows you to connect to a firestore
            database, and query, view and edit data in a simple editor. Queries
            can be written in a simple SQL-like format to query the database,
            add, update, or remove data from a firestore database.
          </section>
          <h2>What is Required?</h2>
          <section className="block flex-grow-0">
            The editor relies on the firestore client SDK and will issue queries
            and updates to the database via that connection. This will require
            that you have firestore rules in place that allow a user to perform
            the desired operations.
          </section>
          <h2>How to Connect</h2>
          <section className="block flex-grow-0">
            <ol className="list-decimal pl-4">
              <li>
                First visit the{" "}
                <a
                  target="_blank"
                  href="https://console.firebase.google.com/project/_/authentication/users"
                  rel="noreferrer"
                >
                  Authentication panel in your Firestore Console
                </a>{" "}
                and create a sign-in method if you don&apos;t already have one.
              </li>
              <li>
                Press the <Link to="/connect">Connect</Link> button below and
                create an account, or login to an existing account.
              </li>
              <li>
                Once you&apos;re connected, you may need to modify the{" "}
                <a
                  target="_blank"
                  href="https://firebase.google.com/docs/firestore/security/get-started"
                  rel="noreferrer"
                >
                  firestore rules
                </a>{" "}
                to allow this account to access the database. You can do this
                via the{" "}
                <a
                  target="_blank"
                  href="https://console.firebase.google.com/project/_/firestore/rules"
                  rel="noreferrer"
                >
                  Rules Tab in the Firestore Console
                </a>{" "}
                providing a rule similar to the following:
                <div className="font-mono text-sm whitespace-pre-wrap p-4">
                  {`match /{document=**} {
    allow read, write, list: if request.auth != null && request.auth.uid == '<Enter User ID Here>';
}`}
                </div>
                Obviously you will need to replace the{" "}
                <em>&lt;Enter User ID Here&gt;</em> with the user ID of the
                account you want to allow access to the database. You can find
                your user ID on the{" "}
                <a
                  target="_blank"
                  href="https://console.firebase.google.com/project/_/authentication/users"
                  rel="noreferrer"
                >
                  Authentication panel in the Firestore Console
                </a>
                .
              </li>
            </ol>
          </section>
          <section className="flex-grow-0 flex items-center justify-center">
            <Link to="/connect" className="btn bg-primary text-dark w-32">
              Connect!
            </Link>
          </section>
        </div>
      </section>
    </div>
  );
}
