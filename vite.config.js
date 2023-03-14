import { defineConfig } from "vite";


export default defineConfig({
    base: './',
    build: {
        outDir: 'docs',
        rollupOptions: {
            input: {
                main: '/index.html',
                // keyboards: './src/html/keyboards.html',
                login: './login.html',
                loginjs: './src/js/login.js',
            }
        },
    }
});