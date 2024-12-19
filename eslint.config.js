import antfu from '@antfu/eslint-config'

export default antfu(
    {
        // Type of the project. 'lib' for libraries, the default is 'app'
        type: 'app',
        // TypeScript and Vue are autodetected, you can also explicitly enable them:
        typescript: true,
        node: false,

        // `.eslintignore` is no longer supported in Flat config, use `ignores` instead
        ignores: [
            // '**/fixtures',
            'node_modules/*',
            '.nuxt/*',
            'config/plugins/**/*.js',
            'dist/*',
            '.stylelintcache',
            'types/generated.ts',
        ],

        languageOptions: {
            globals: {
                _: false,
                defineProps: 'readonly',
                defineEmits: 'readonly',
                defineExpose: 'readonly',
                withDefaults: 'readonly',
                defineModel: 'readonly',
                defineNuxtPlugin: 'readonly',
                onMounted: 'readonly',
                nextTick: 'readonly',
                computed: 'readonly',
                ref: 'readonly',
                useCssModule: 'readonly',
                onUnmounted: 'readonly',
            },
        },

        rules: {
            'style/indent': 'off',
            'style/quotes': ['error', 'single'],
            'style/comma-dangle': ['error', 'only-multiline'],
            'style/quote-props': ['error', 'as-needed'],
            'style/brace-style': ['error', '1tbs'],
            'style/arrow-parens': ['error', 'always'],
            'style/operator-linebreak': ['error', 'after'],
            'style/indent-binary-ops': 'off',
            'style/space-before-blocks': ['error', 'always'],
            'antfu/if-newline': 'off',
            'antfu/top-level-function': 'off',
            'no-console': [
                'warn',
                {
                    allow: ['warn', 'error'],
                },
            ], // TODO! почитать про опцию
            'node/prefer-global/process': 'off',

            'no-unused-vars': 'off',
            'no-useless-return': 'error',
            'no-unused-expressions': [
                'error',
                {
                    allowTernary: true,
                },
            ],
            'linebreak-style': ['error', 'unix'],
            'style/array-bracket-newline': ['error', 'consistent'],
            'style/array-bracket-spacing': ['error', 'never'],
            'style/func-call-spacing': ['error', 'never'],
            'func-name-matching': 'error',
            'func-style': [
                'error',
                'declaration',
                {
                    allowArrowFunctions: true,
                },
            ],
        },
    },
    {
        files: ['**/*.vue'],
        rules: {
            'vue/html-indent': ['error', 4, { baseIndent: 1 }],
            'vue/script-indent': [
                'error',
                4,
                {
                    baseIndent: 1,
                    switchCase: 1,
                },
            ],
            'vue/block-order': [
                'error',
                {
                    order: ['script', 'template', 'style'],
                },
            ],
            'vue/html-self-closing': [
                'error',
                {
                    html: {
                        void: 'always',
                        normal: 'always',
                        component: 'always',
                    },
                    svg: 'always',
                    math: 'always',
                },
            ],
            'vue/singleline-html-element-content-newline': ['error', {
                ignoreWhenEmpty: true,
            }],
            'vue/first-attribute-linebreak': [
                'error',
                {
                    singleline: 'beside',
                    multiline: 'below',
                },
            ],
            'vue/max-attributes-per-line': [
                'error',
                {
                    singleline: {
                        max: 1,
                    },
                    multiline: {
                        max: 1,
                    },
                },
            ],
            'vue/custom-event-name-casing': ['error', 'kebab-case'],
        },
    }
)
