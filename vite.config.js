import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Use root base for Vercel default URL, will work at /quiz when configured
  base: '/',
})

