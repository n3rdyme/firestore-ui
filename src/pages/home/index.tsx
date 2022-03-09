/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: January 11th, 2022
 * ****************************************************************************
 */
import React from "react";

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
                First visit the Authentication panel in your{" "}
                <a
                  className="text-secondary"
                  target="_blank"
                  href="https://console.firebase.google.com/"
                  rel="noreferrer"
                >
                  Firestore Console
                </a>{" "}
                and create a sign-in method if you don&apos;t already have one.
              </li>
            </ol>
          </section>
        </div>
      </section>
    </div>
  );
}
