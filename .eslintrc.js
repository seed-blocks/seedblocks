module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb", "plugin:prettier/recommended"],
  env: {
    jest: true,
    browser: true
  },
  settings: {
    "import/resolver": {
      "babel-module": {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      },
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  rules: {
    camelcase: "off",
    "no-use-before-define": "off",
    "no-restricted-syntax": "off",
    "no-param-reassign": "off",
    "no-sparse-arrays": "off",
    "no-underscore-dangle": "off",
    "no-unused-expressions": "off",
    "no-plusplus": "off",
    "no-bitwise": "off",
    "no-nested-ternary": "off",
    "global-require": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/label-has-for": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/no-autofocus": "off",
    "import/export": "off",
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "import/no-named-as-default": "off",
    "import/no-webpack-loader-syntax": "off",
    "import/no-extraneous-dependencies": "off",
    "jsx-a11y/anchor-has-content": "off",
    "import/order": [
      "error",
      {
        "newlines-between": "never",
        groups: [
          ["builtin", "external", "internal"],
          "parent",
          "sibling",
          "index"
        ]
      }
    ]
  },
  overrides: [
    {
      files: ["**/*.md"],
      plugins: ["markdown"],
      rules: {
        "no-unused-vars": "off",
      }
    },
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      rules: {
        "no-undef": "off",
        "no-unused-vars": "off",
        "no-restricted-globals": "off",
        "no-useless-constructor": "off"
      }
    }
  ]
};
