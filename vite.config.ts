import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages project site is served from /digimom/.
// In dev we use "/" so the local server works at the root.
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/digimom/" : "/",
  plugins: [react(), tailwindcss()],
}));
