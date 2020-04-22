"use strict";

const path = require("path");
const fs = require("fs");
const chalk = require("chalk");

const appDirectory = fs.realpathSync(process.cwd());

/**
 * Path aliases for Webpack for folders under `src`.
 */
const aliases = {
  "src/components": path.resolve(appDirectory, `src/components/`),
  "src/utils": path.resolve(appDirectory, `src/utils/`)
};

console.info(
  `${chalk.green("react-conditionals")} => Loading alias configurations for storybook.`
);

module.exports = aliases;