import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    host: '127.0.0.1',
    proxy: {
      '/api': {
        target: 'http://localhost:3000/api',
        changeOrigin: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/public/images': {
        target: 'http://localhost:3000/public/images',
        changeOrigin: false,
        rewrite: (path) => path.replace(/^\/public\/images/, ''),
      },
    },
  },
  resolve: {
    alias: [
      {
        find: '@assets',
        replacement: path.resolve(__dirname, './src/assets'),
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, './src/components'),
      },
      {
        find: '@pages',
        replacement: path.resolve(__dirname, './src/pages'),
      },
      {
        find: '@types',
        replacement: path.resolve(__dirname, './src/types'),
      },
      {
        find: '@utils',
        replacement: path.resolve(__dirname, './src/utils'),
      },
    ],
  },
});
