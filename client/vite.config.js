import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// client/vite.config.js
export default defineConfig({
  // ...
  server: {
    proxy: {
      '/api': 'https://real-estate-server-p39t.onrender.com',
    }
  }
});


  plugins: [react()],
});