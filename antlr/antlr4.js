/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path");
const { exec } = require("child_process");

const antlr4 = path.resolve(__dirname, "antlr-4.8-complete.jar");
const grammars = path.resolve(__dirname, "./grammar/*.g4");
const output = path.resolve(__dirname, "../src/services/sqlParser/lib");

const cmd = [
  "java",
  "-jar",
  antlr4,
  "-Dlanguage=JavaScript",
  "-visitor",
  // "-listener",
  "-no-listener",
  "-o",
  output,
  grammars,
].join(" ");

exec(cmd, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
