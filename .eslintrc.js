module.exports = {
  root: true,
  env: {
    es6: true,
    jest: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2019,
    sourceType: "module",
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  plugins: ["import", "prettier", "hooks"],
  extends: [
    "plugin:import/recommended",
    "plugin:react/recommended",
    "airbnb",
    "prettier",
  ],
  rules: {
    "prettier/prettier": "error",
    camelcase: "off",
    "import/prefer-default-export": "off",
    "import/no-cycle": "warn",
    "react/prop-types": "off",
    "react/jsx-filename-extension": "off",
    "no-plusplus": "off",
    "react/jsx-props-no-spreading": "off",
    "react/no-unused-prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "react/destructuring-assignment": "off",
    "no-nested-ternary": "off",
    "import/no-dynamic-require": "off",
    "global-require": "off",
    "react/no-array-index-key": "off",
    "no-param-reassign": "off",
    "no-shadow": "off",
    "consistent-return": "off",
    "import/no-extraneous-dependencies": "off",
    "no-unused-expressions": 0,
    "import/no-unresolved": [2, { caseSensitive: false }],
    "no-use-before-define": [0],
    "no-underscore-dangle": "off",
    "import/order": [
      "error",
      {
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
          {
            pattern: "react-native",
            group: "external",
            position: "before",
          },
          {
            pattern: "@react-navigation/*",
            group: "external",
            position: "before",
          },
          {
            pattern: "src/**/*",
            group: "external",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
        js: "never",
        jsx: "never",
      },
    ],
  },
  overrides: [
    {
      files: "**/*.+(ts|tsx)",
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint/eslint-plugin"],
      extends: ["plugin:@typescript-eslint/recommended"],
      rules: {
        "@typescript-eslint/no-use-before-define": [0],
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "hooks/sort": [
          2,
          {
            groups: [
              "useSelector",
              "useContext",
              "useState",
              "useDispatch",
              "useCallback",
            ],
          },
        ],
      },
    },
  ],
  settings: {
    "import/resolver": {
      typescript: {
        project: ".",
      },
    },
    react: {
      version: "detect",
    },
  },
};
