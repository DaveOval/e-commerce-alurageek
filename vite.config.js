import { defineConfig } from "vite";


export default defineConfig({
    base: './',
    build: {
        outDir: 'docs',
        rollupOptions: {
            input: {
                main: '/index.html',
                login: './login.html',
                loginjs: './src/js/login.js',
                search: './search.html',
                searchjs: './src/js/search.js',
                addproduct: './addproduct.html',
                addproductjs: './src/js/addproduct.js',
                keyboards: './keyboards.html',
                keyboadsjs: './src/js/keyboards.js',
                keycaps: './keycaps.html',
                keycapsjs: './src/js/keycaps.js',
                switchs: './switchs.html',
                switchsjs: './src/js/switchs.js',
                
            }
        },
    }
});