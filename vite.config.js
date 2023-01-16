import { defineConfig, loadEnv } from 'vite';

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    root: 'src',
    define: {
      'process.env': process.env,
    },
    build: {
      outDir: '../dist',
    },
    server: {
      port: 4000,
    },
  });
};
