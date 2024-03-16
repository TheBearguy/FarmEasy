import path from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@components/core": path.resolve(
                __dirname,
                "./src/components/ui/core",
            ),
            "@components/common": path.resolve(
                __dirname,
                "./src/components/ui/common",
            ),
        },
    },
});
