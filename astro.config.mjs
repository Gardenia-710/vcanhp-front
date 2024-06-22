import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["assets.newt.so"]
  },
  integrations: [tailwind({
    applyBaseStyles: false
  }), react()],
  output: "hybrid",
  adapter: cloudflare()
});