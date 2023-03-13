import { defineConfig } from "vite";


export default defineConfig({
    base: './',
    build: {
        outDir: 'docs',
        rollupOptions: {
            input: {
                main: '/index.html',
                keyboards: '/keyboards.html',
                login: '/login.html',
            }
        },
    }
});