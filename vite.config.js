import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const { BASE_URL, DEV_SERVER_PORT } = env;

  return {
    base: BASE_URL ?? '/',
    server: {
      host: 'localhost',
      port: DEV_SERVER_PORT,
      cors: true,
      open: true,
    },
    test: {
      globals: true,
    },
  };
});
