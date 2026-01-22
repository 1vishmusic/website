import pluginVue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'
import skipFormatting from 'eslint-config-prettier'

export default [
    // Ignorované složky (náhrada za .eslintignore)
    {
        ignores: ['dist/**', 'node_modules/**', '.nuxt/**', '.output/**'],
    },

    // Základní JavaScript a TypeScript pravidla
    ...tseslint.configs.recommended,

    // Vue pravidla
    ...pluginVue.configs['flat/essential'], // nebo 'flat/strongly-recommended' / 'flat/recommended'

    // Specifické nastavení pro Vue soubory
    {
        files: ['*.vue', '**/*.vue'],
        languageOptions: {
            parserOptions: {
                parser: tseslint.parser,
            },
        },
    },

    // Vlastní pravidla
    {
        rules: {
            'vue/multi-word-component-names': 'off', // Vypne otravné varování pro jednoslovné komponenty
            'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        },
    },

    // Prettier – musí být vždy POSLEDNÍ, aby přebil formátovací pravidla ESLintu
    skipFormatting,
]
