import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
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
      }
    },
},
})