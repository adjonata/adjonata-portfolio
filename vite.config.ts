import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import PwaConfig from './public/pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), PwaConfig],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
