import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import qwikdev from "@qwikdev/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react({ include: ["**/react/**"] }),
    svelte({ include: ["**/svelte/**"] }),
    qwikdev({ include: ["**/qwik/**"] }),
    svelte({ include: ["svelte"] }),
  ],
  output: "server",
});
