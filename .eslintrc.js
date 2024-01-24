module.exports = {
  root: true,
  extends: [
    '@react-native',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {ecmaVersion: 'latest', sourceType: 'module'},
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'react-native',
    'react-refresh',
    'unused-imports',
    'prettier',
    'detox',
    '@typescript-eslint',
  ],
  ignorePatterns: ['!.*', 'dist', 'node_modules'],
  rules: {
    // 'prettier/prettier': 'error',
    'react-native/no-inline-styles': 0,
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'no-console': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'react-refresh/only-export-components': [
      'warn',
      {allowConstantExport: true},
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
