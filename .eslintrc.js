module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'import/no-unresolved': 'off',
    'react/prop-types': 'off',
    'no-nested-ternary': 'off',
    'import/extensions': 'off',
    'react/jsx-filename-extension': 'off',
    // Hit error where it was saying React was used before it's defined
    // on first line.Here is solution:
    // https://stackoverflow.com/questions/63818415/react-was-used-before-it-was-defined/64024916#64024916
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
  },
};
