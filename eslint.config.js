import globals from "globals";
import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";

/**
 * Custom ESLint rule to forbid strings containing "public/assets/".
 * This rule is auto-fixable.
 */
const noPublicAssetsPathRule = {
  meta: {
    type: 'problem',
    docs: {
      description: "Disallow asset paths that incorrectly start with 'public/assets/'. Use '/assets/...' instead.",
      recommended: true,
    },
    messages: {
      noPublicInPath: "Nepoužívaj 'public' v URL cestách. Použi '/assets/...'.",
    },
    fixable: 'code',
    schema: [],
  },
  create(context) {
    const forbiddenSubstring = 'public/assets/';
    const forbiddenPattern = /public\/assets\//g;

    function checkAndReport(node) {
      // Handles simple string literals: "public/assets/image.png"
      if (node.type === 'Literal' && typeof node.value === 'string' && node.value.includes(forbiddenSubstring)) {
        context.report({
          node,
          messageId: 'noPublicInPath',
          fix(fixer) {
            const fixedString = node.raw.replace(forbiddenPattern, '/assets/');
            return fixer.replaceText(node, fixedString);
          },
        });
      }
      
      // Handles template literals (for dynamic paths): `public/assets/${path}`
      if (node.type === 'TemplateElement' && node.value.raw.includes(forbiddenSubstring)) {
        context.report({
          node,
          messageId: 'noPublicInPath',
          fix(fixer) {
            const fixedString = node.value.raw.replace(forbiddenPattern, '/assets/');
            return fixer.replaceText(node, fixedString);
          },
        });
      }
    }

    return {
      Literal: checkAndReport,
      TemplateElement: checkAndReport,
    };
  },
};

const customPlugin = {
  rules: {
    'no-public-assets-path': noPublicAssetsPathRule,
  },
};

export default [
  {
    ignores: ["dist/", "node_modules/"],
  },
  js.configs.recommended,
  {
    plugins: {
      'local-rules': customPlugin,
      '@typescript-eslint': tsPlugin,
      'react': reactPlugin,
      'react-hooks': hooksPlugin,
    },
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...hooksPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
      // Enable our custom rule
      'local-rules/no-public-assets-path': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];