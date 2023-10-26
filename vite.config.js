import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import npmLessImport from "less-plugin-npm-import"
import customiseSemanticUiLess from "./plugins/customise-semantic-ui-less";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        customiseSemanticUiLess()
    ],
    css: {
        preprocessorOptions: {
            less: {
                math: "always",
                relativeUrls: false,
                plugins: [
                    new npmLessImport()
                ]
            }
        }
    },
})
