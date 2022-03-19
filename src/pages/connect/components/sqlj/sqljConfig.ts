/*
 * ****************************************************************************
 * Copyright (C) 2022-2022 - All rights reserved.
 * Project: firestore-ui
 * Created On: March 19th, 2022
 * ****************************************************************************
 */

import type { languages } from "monaco-editor";

export const sqlConfig: languages.ILanguageExtensionPoint = {
  id: "sqlj",
  extensions: [".sqlj"],
  aliases: ["SQLJ"],
};
