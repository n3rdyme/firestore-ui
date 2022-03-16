/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 16th, 2022
 * ****************************************************************************
 */
/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * ANTLR 4.7.2
 * Needs to ignore 'fs' package on browser, but currently does not :/
 */

const fs = require("fs");
const path = require("path");

const antlrPackageFile = path.join(
  __dirname,
  "../",
  "node_modules/antlr4/package.json"
);

if (fs.existsSync(antlrPackageFile)) {
  const antlrSpec = JSON.parse(fs.readFileSync(antlrPackageFile).toString());
  antlrSpec.browser = antlrSpec.browser ?? { fs: false };
  fs.writeFileSync(antlrPackageFile, JSON.stringify(antlrSpec, null, 2));
}
