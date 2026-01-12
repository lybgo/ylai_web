// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 替换为你的 GitHub 域名
  //site: 'https://lybgo.github.io',
  // 替换为你的仓库名称
  base: '/',
  vite: {
    plugins: [tailwindcss()]
  }
});