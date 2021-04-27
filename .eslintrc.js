module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "linebreak-style": "off",
    "no-console": "off",
    "no-unused-vars": "off",
    "vue/no-unused-components": "off",
    "no-irregular-whitespace": "off",
    "treatUndefinedAsUnspecified": "off",
    "no-multi-spaces": "off",
    "space-before-blocks": "off",
    "padded-blocks": "off",
    "no-trailing-spaces": "off",
    "indent": "off",
    "no-shadow": "off",
    "no-unused-expressions": "off",
    "max-len": "off",
    "no-restricted-syntax": "off",
    "no-underscore-dangle": "off"
  },
};
