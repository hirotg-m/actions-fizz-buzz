const nodePrettier = require("@cybozu/eslint-config/flat/presets/node-prettier");
const globals = require("globals");

module.exports = [
  {
    ignores: ["eslint.config.js"],
  },
  ...nodePrettier,
  {
    files: ["test/**/*.js"],
    languageOptions: {
      globals: globals.mocha,
    },
  },
];
