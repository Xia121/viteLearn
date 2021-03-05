import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';

import path from 'path';

export default defineConfig({
    'plugins':[vue()],
    'alias': {
        '/@': path.resolve(__dirname, './src')
    },
    // 控制台打印
    'logLevel': 'silent',
    // cssPreprocessOptions: {
    //     //这里注意，键名是scss不是sass！一字之差能让你折腾好久
    //     scss: {
    //         //这里写你想导入全局scss变量的路径
    //         //这里注意只能写相对路径，alias貌似在css中不会生效
    //         additionalData: "@import './src/style/a.scss';",
    //     },
    // },
    'server': {
        'host': 'localhost',
        'port': 3000,
        // 是否自动在浏览器打开
        'open': true,
        // 是否开启 https
        'https': false,
        'proxy': {
            //   '/api': {
            // target: 'https://blog.csdn.net/weixin_45292658',
            // changeOrigin: true,
            // rewrite: path => path.replace(/^\/api/, '')
            //   }
        }
    }
});
