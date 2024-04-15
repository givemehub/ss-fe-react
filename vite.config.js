import { defineConfig, loadEnv } from 'vite';

const viteConfig = defineConfig(({ mode }) => {
  // const env = loadEnv(mode, process.cwd(), '');
  const { BASE_URL, DEV_SERVER_PORT } = loadEnv(mode, process.cwd(), '');

  return {
    base: BASE_URL ?? '/',
    server: {
      host: 'localhost',
      port: DEV_SERVER_PORT ?? 3000,
      cors: true,
      open: true,
    },
  };
});

export default viteConfig;
