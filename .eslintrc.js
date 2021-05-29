module.exports = {
  extends: ['plugin:testing-library/react'],
  plugins: ['testing-library'],
  parser: '@typescript-eslint/parser',
  rules: {
    'react/prop-types': 0,
    'no-unused-vars': 'off',
    'no-undef': 0,
    'no-use-before-define': 'off',
    'import/no-anonymous-default-export': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'testing-library/no-node-access': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
      node: {
        extensions: ['.ts', '.tsx'],
      },
    },
    'import/extensions': ['.tsx', '.ts'],
  },
}
