import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcssVite from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
    plugins: [react(), tailwindcssVite()],
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@constants': path.resolve(__dirname, 'src/constants'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@reducers': path.resolve(__dirname, 'src/reducers'),
            '@actions': path.resolve(__dirname, 'src/actions'),
        },
    },
})
