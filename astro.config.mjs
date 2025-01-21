// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://wag-wonders.lakzian.com",
  integrations: [tailwind()],
  output: "server",

  experimental: {
    svg: {
      mode: "inline",
    },
  },

  adapter: node({
    mode: "standalone",
  }),
});
