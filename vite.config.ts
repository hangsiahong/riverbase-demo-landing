import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    // Load env file from the current directory
    const env = loadEnv(mode, process.cwd(), '');
    
    return {
      base: './', // CRITICAL: Fixes blank screen on many Nginx setups
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        // Use a fallback empty string so the app doesn't crash if ENV is missing
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY || ""),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY || "")
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        outDir: 'dist', // Ensure this matches your Dockerfile COPY command
      }
    };
});
