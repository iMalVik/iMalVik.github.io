module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard',
    ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        indent: [ 'warn', 4, { MemberExpression: 1 }],
        'vue/html-indent': [ 'warn', 2, { baseIndent: 1 }],
        'vue/script-indent': [ 'warn', 2, { baseIndent: 1 }],
        'comma-dangle': [ 'warn', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'never',
            exports: 'never',
            functions: 'never',
        }],
        'no-multi-spaces': 'off',
        'object-curly-spacing': [ 'warn', 'always', { objectsInObjects: false, arraysInObjects: false }],
        'array-bracket-spacing': [ 'warn', 'always', {
            singleValue: false,
            objectsInArrays: false,
            arraysInArrays: false,
        }],
        'spaced-comment': 'off',
    },
    overrides: [
        {
            files: ['*.vue'],
            rules: {
                indent: 'off',
            },
        },
    ],
}
