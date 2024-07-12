import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'


export default [
    pluginReactConfig,
    {languageOptions: {parserOptions: {ecmaFeatures: {jsx: true}}}},
    {languageOptions: {globals: {__IS_DEV__: true}}},
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        rules: {
            'react/jsx-indent': [2, 4],
            'react/jsx-indent-props': [2, 4],
            indent: [2, 4],
            'react/react-in-jsx-scope': 'off',
            'react/jsx-filename-extension': [2, {'extensions': ['.tsx', '.js', '.jsx']}],
            'import/no-unresolved': 'off',
            'import/prefer-default-export': 'off',
            'no-unused-vars': 'warn',
            '@typescript-eslint/ban-ts-comment': 'off',
            '@typescript-eslint/no-unused-vars': 'warn',
            'react/require-default-props': 'off',
            'react/jsx-props-no-spreading': 'off',
            'react/function-component-definition': 'off',
            'no-shadow': 'off',
            'import/extensions': 'off',
            'import/no-extraneous-dependencies': 'off',
            'no-underscore-dangle': 'off',
            'react/display-name': 'off',
            'max-len': [2, {'code': 120, 'ignoreComments': true}]
        }
    }
]

