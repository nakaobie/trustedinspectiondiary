// eslint.config.js
import js from "@eslint/js";
import prettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";

export default [
  js.configs.recommended, // base ESLint rules for JS
  configPrettier,         // disables rules that conflict with Prettier
  {
    plugins: {
      prettier,
    },
    rules: {
      "prettier/prettier": "error", // enforce Prettier formatting
    },
  },
];
