import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // base: "/CV-Application/", // Update the base path to match the deployment URL
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Set this to a higher value, e.g., 1000 kB
    rollupOptions: {},
  },
});
