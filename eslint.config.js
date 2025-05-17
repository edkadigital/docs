import js from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";

export default [
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/.astro/**",
      "**/build/**",
      "**/coverage/**",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended, // For general TS files
  
  // Astro specific configuration
  ...eslintPluginAstro.configs['flat/recommended'],
  // You can add further overrides for Astro files if needed, for example:
  {
    files: ["**/*.astro"],
    rules: {
      // Example: "@typescript-eslint/no-unused-vars": "warn"
      // Add any Astro-specific rule overrides here
    }
  },

  // Global settings for JS/TS files (excluding Astro components' script tags handled by the above)
  {
    files: [
      "**/*.js",
      "**/*.mjs",
      "**/*.cjs",
      "**/*.ts",
      "**/*.mts",
      "**/*.cts",
    ],
    languageOptions: {
      globals: {
        document: "readonly",
        window: "readonly",
        console: "readonly",
        navigator: "readonly",
      },
    },
  },
];
