import path from 'node:path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const { BASE_URL, DEV_SERVER_PORT } = env;

  return {
    base: BASE_URL ?? '/',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
      // alias: []
    },
    plugins: [react()],
    server: {
      host: 'localhost',
      port: DEV_SERVER_PORT,
      cors: true,
      open: true,
    },
    // Vitest 구성(config)
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./tests/setup.js'],
    },
  };
});
