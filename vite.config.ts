import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import htmlCreateAt from "./lib/vite-plugin-html-create-at";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni(), htmlCreateAt()],
});
