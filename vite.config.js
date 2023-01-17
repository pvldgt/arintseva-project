import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    base: "/arintseva-project/",
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                nested: resolve(__dirname, 'en.html'),
            },
        },
    },
})

