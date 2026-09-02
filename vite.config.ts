import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";
import vinext from "vinext";
import { defineConfig } from "vite";

// Nitro detects Vercel automatically during CI builds and emits the
// platform-specific Build Output API bundle in .vercel/output.
export default defineConfig(({ command }) => ({
  // Nitro's fetchable RSC environment is only needed for deployment builds.
  // Keeping it out of dev avoids plugin-rsc expecting a missing runner.
  plugins: [tailwindcss(), vinext(), command === "build" && nitro()],
}));
