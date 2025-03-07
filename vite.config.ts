import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcssVite from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
    plugins: [react(), tailwindcssVite()],
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@bff': path.resolve(__dirname, 'src/bff'),
            '@constants': path.resolve(__dirname, 'src/constants'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@schemas': path.resolve(__dirname, 'src/schemas'),
            '@slices': path.resolve(__dirname, 'src/slices'),
            '@types': path.resolve(__dirname, 'src/types'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@routes': path.resolve(__dirname, 'src/routes'),
        },
    },
    test: {
        environment: 'jsdom',
        globals: true,
        deps: {
            inline: ['@testing-library/react', '@testing-library/jest-dom'],
        },
        setupFiles: ['./src/setup-tests.ts'],
    },
})
