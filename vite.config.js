import { defineConfig } from 'vite';
import { copyFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = fileURLToPath(new URL('.', import.meta.url));

/** env.js and components.js are classic scripts — copy them into dist for Netlify */
function copyClassicScripts() {
  return {
    name: 'copy-classic-scripts',
    closeBundle() {
      const out = resolve(rootDir, 'dist');
      for (const file of ['env.js', 'components.js']) {
        const src = resolve(rootDir, file);
        if (existsSync(src)) {
          copyFileSync(src, resolve(out, file));
        }
      }
    },
  };
}

export default defineConfig({
  root: '.',
  publicDir: 'public',
  plugins: [copyClassicScripts()],
  server: {
    port: 8888,
    open: '/index.html',
  },
  preview: {
    port: 8888,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(rootDir, 'index.html'),
        login: resolve(rootDir, 'login.html'),
        patientDashboard: resolve(rootDir, 'patient-dashboard.html'),
        hospitalDashboard: resolve(rootDir, 'hospital-dashboard.html'),
      },
    },
  },
});