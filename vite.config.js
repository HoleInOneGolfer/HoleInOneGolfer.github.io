import { defineConfig } from "vite";

import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  base: "/",
  server: {
    port: 8080,
  },
  plugins: [
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
  ],
  resolve: {
    alias: {
      "@": "/src", // Useful for path aliasing
    },
  },
});
