module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended'
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react'
    ],

    rules: {
        'react/prop-types': 'warn',
        'no-var': 'error',
        'no-extra-semi': 'error',
        'camelcase': 'error',
        'no-use-before-define': 'error',
        'quotes': ['error', 'single'],
        // 'padded-blocks': ['error', 'always', { 'allowSingleLineBlocks': true, }],
        'comma-dangle': ['error', {
            'objects': 'always',
        }],
        'indent': ['error', 4, { 'SwitchCase': 1, 'VariableDeclarator': 2, 'MemberExpression': 1, 'ObjectExpression': 1, }],
        'comma-style': ['error', 'last'],
    },
};
