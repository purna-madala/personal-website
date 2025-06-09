// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://madala.me/",
  output: "static",
  integrations: [mdx(), sitemap()],
  build: {
    inlineStylesheets: "auto",
  },
});
