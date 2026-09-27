/**
 * Writes env.js for Netlify/production builds.
 * Set Firebase keys in Netlify: Site settings → Environment variables.
 * If unset, placeholders are used and the app runs in demo mode.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const out = path.join(root, 'env.js');

const val = (key, fallback = '') => process.env[key] || fallback;

const env = {
  FIREBASE_API_KEY: val('FIREBASE_API_KEY', 'your-api-key-here'),
  FIREBASE_AUTH_DOMAIN: val('FIREBASE_AUTH_DOMAIN', 'your-project-id.firebaseapp.com'),
  FIREBASE_PROJECT_ID: val('FIREBASE_PROJECT_ID', 'your-project-id'),
  FIREBASE_STORAGE_BUCKET: val('FIREBASE_STORAGE_BUCKET', 'your-project-id.firebasestorage.app'),
  FIREBASE_MESSAGING_SENDER_ID: val('FIREBASE_MESSAGING_SENDER_ID', 'your-sender-id'),
  FIREBASE_APP_ID: val('FIREBASE_APP_ID', 'your-app-id'),
  FIREBASE_MEASUREMENT_ID: val('FIREBASE_MEASUREMENT_ID', 'your-measurement-id'),
};

const lines = Object.entries(env).map(([k, v]) => `  ${k}: ${JSON.stringify(v)}`);
const content = `window.ENV = {\n${lines.join(',\n')}\n};\n`;

fs.writeFileSync(out, content, 'utf8');
console.log('Wrote env.js for build (demo mode if Firebase vars are not set).');
