module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'next'
  ],
  plugins: [
    '@typescript-eslint',
    'react-hooks',
    'prettier',
    'simple-import-sort'
  ],
  rules: {
    'no-console': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    camelcase: 'error',
    'jsx-a11y/alt-text': 'warn',
    '@next/next/no-img-element': 'off'
  },
  env: {
    node: true
  }
}
