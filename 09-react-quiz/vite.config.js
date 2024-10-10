import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'React-complete-guide/09-react-quiz',
  plugins: [react()],
})
