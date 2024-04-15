import { defineConfig } from 'vite';

const viteConfig = defineConfig({
  base: '/',
  server: {
    host: 'localhost',
    port: 3000,
    cors: true,
    open: true,
  },
});

export default viteConfig;
