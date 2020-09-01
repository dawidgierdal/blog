module.exports = {
    root: true,
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
    },
    overrides: [
        {
            // enable the rule specifically for TypeScript files
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/explicit-function-return-type': ['error'],
                'no-console': 2,
                'no-debugger': 2,
                'object-shorthand': 2,
                'no-else-return': 2,
                'eslint-comments/no-unlimited-disable': 0,
                'react-hooks/exhaustive-deps': 0,
                'prefer-const': 2,
                'no-shadow': 0,
                'no-trailing-spaces': ['error', { ignoreComments: true }],
            },
        },
    ],
};
