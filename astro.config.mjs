// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import cloudflare from "@astrojs/cloudflare";

import sitemap, { ChangeFreqEnum } from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.enesb.im",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    mdx(),
    sitemap({
      chunks: {
        blog: (item) => {
          if (/blog/.test(item.url)) {
            return item;
          }
        },
      },
    }),
  ],
  adapter: cloudflare(),
});
