import js from '@eslint/js';

export default [
  js.configs.recommended,
  { ignores: ['dist/**'] },
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'no-unused-vars': 'warn',
      'react/react-in-jsx-scope': 'off', // Next.js 같은 경우
    },
    settings: {},
  },
  {
    files: ['webpack/**/*.cjs'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        __dirname: 'readonly',
        module: 'readonly',
        require: 'readonly',
        process: 'readonly',
      },
    },
  },
];
