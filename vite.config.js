import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    // base: 'https://palladiumv.github.io/createX/',
    css: {
        modules: {
            // localsConvention: 'camelCaseOnly'
        },
        preprocessorOptions: {
            css: {
                alias: {
                    '~': './node_modules',
                },
            },
        },
    },
})
