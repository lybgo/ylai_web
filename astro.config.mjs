// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // 替换为你的真实域名
  site: 'https://ylznc.com',
  base: '/',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});