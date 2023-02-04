module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    camelcase: 'off',
    'no-sequences': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
  },
};
