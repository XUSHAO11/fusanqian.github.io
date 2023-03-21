import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import proxy from './proxy'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  server: {
    proxy: {
      ...proxy,
      '/xu': {

        target: 'https://apis.map.qq.com',
        changeOrigin: true,
        // rewrite:{
        //   '^/wangshuaibin':""
        // },
        rewrite: (path) => path.replace(/^\/xu/, ''),
      }
    }
  },
})
