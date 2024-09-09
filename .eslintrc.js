module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'react-hooks',
    ],
    rules: {
        indent: [2, 4],
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-shadow': 'off',
        'no-unused-vars': 'warn',
        'no-underscore-dangle': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/no-unused-prop-types': 'off',
        'react/function-component-definition': 'off',
        'react/button-has-type': 'off',
        'max-len': [2, 120, { ignoreComments: true }],
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'no-param-reassign': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'no-undef': 'off',
        'react/jsx-one-expression-per-line': 'off',
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.{test}.{ts,tsx}'],
            rules: {
                'max-len': 'off',
            },
        },
    ],
};
