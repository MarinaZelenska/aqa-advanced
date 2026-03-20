import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
	{
		files: ['**/*.{js,mjs,cjs}'],

		languageOptions: {
			sourceType: 'module',
			globals: globals.browser,
		},

		rules: {
			semi: ['error', 'always'],
			quotes: ['error', 'double'],
			indent: ['error', 2],
			'no-unused-vars': 'warn',
			'no-console': 'off',
			eqeqeq: ['error', 'always'],
		},
	},
]);
