import { defineConfig } from "vite";


export default defineConfig({
    base: './',
    build: {
        outDir: 'docs',
        rollupOptions: {
            input: {
                main: '/index.html',
                keyboards: './src/html/keyboards.html',
                login: './src/html/login.html',
            }
        },
    }
});