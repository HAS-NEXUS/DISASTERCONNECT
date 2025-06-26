import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // PWA optimizations
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['framer-motion', 'lucide-react'],
          maps: ['leaflet', 'react-leaflet'],
          three: ['three', '@react-three/fiber', '@react-three/drei']
        }
      }
    },
    // Enable source maps for debugging
    sourcemap: true,
    // Optimize for mobile
    target: ['es2015', 'chrome58', 'firefox57', 'safari11'],
    // Compress assets
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  server: {
    // Enable HTTPS for PWA testing
    https: false, // Set to true for local HTTPS testing
    host: true, // Allow external connections
    port: 5173
  },
  preview: {
    port: 4173,
    host: true
  }
});