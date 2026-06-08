import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      '/backend_bb': {
        target: 'https://bloodbankbackend.free.nf',
        changeOrigin: true,
        secure: true,
      },
    },
  },
})