import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { environmentManager } from "@tanstack/react-query";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/public": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
  plugins: [tanstackRouter(), react()],
  test: {
    environment: "happy-dom",
  },
  coverage: {
    reporter: ["text", "json", "html"],
  },
});
