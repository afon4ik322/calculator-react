module.exports = {
  extends: [require.resolve('arui-presets-lint/eslint'), 'plugin:react/jsx-runtime'],
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },

  overrides: [
    {
      files: ['config/**/*.ts', 'src/global-definitions.d.ts', 'src/libs.d.ts'],
    },
  ],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.{ts,tsx,js,jsx}'],
      },
    ],

    indent: 'off', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^action' }],
    'no-nested-ternary': 'off',
    'no-unneeded-ternary': 'off',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    'func-names': ['error', 'as-needed'],
    'max-classes-per-file': ['error', 2],
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
        ignore: ['App.tsx', 'reportWebVitals.ts'],
      },
    ],
    'react/state-in-constructor': [1, 'always'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'warn',
    '@typescript-eslint/no-inferrable-types': 'warn',
    complexity: ['warn', 30],
    'no-negated-condition': 'off',
    'react/jsx-fragments': 'off',
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
  },
  ignorePatterns: ['coverage', 'cypress.config.ts'],
};
