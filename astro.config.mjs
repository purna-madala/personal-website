// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://personal-website.pages.dev/",
  output: "static",
  adapter: cloudflare({
    platformProxy: {
      enabled: false,
    },
  }),
  integrations: [mdx(), sitemap()],
  build: {
    inlineStylesheets: "auto",
  },
});
