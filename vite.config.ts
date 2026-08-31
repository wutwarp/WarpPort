import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";
import vinext from "vinext";
import { defineConfig } from "vite";

// Nitro detects Vercel automatically during CI builds and emits the
// platform-specific Build Output API bundle in .vercel/output.
export default defineConfig({
  plugins: [tailwindcss(), vinext(), nitro()],
});
