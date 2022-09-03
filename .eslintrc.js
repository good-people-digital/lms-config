module.exports = {
	extends: [
		'react-app',
		'react-app/jest',
		'prettier',
		'plugin:jsx-a11y/recommended',
	],
	plugins: ['prettier', 'jsx-a11y'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				useTabs: true,
				tabWidth: 4,
				printWidth: 80,
				singleQuote: true,
				trailingComma: 'es5',
				bracketSpacing: true,
				parenSpacing: false,
				bracketSameLine: false,
				semi: true,
				arrowParens: 'always',
			},
		],
		'@typescript-eslint/no-shadow': [
			'error',
			{
				hoist: 'all',
			},
		],
	},
	overrides: [
		{
			files: ['**/*.stories.*'],
			rules: {
				'import/no-anonymous-default-export': 'off',
			},
		},
	],
};
