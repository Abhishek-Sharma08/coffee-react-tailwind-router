import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react()],
  publicDir: 'src/assets',
  base: '/coffee-shop-react-tailwind/',

});
