import { defineConfig } from "vitepress"
import { britishEnglishConfig, simplifiedChineseConfig } from "./locale-config"

export default defineConfig({
  locales: {
    root: britishEnglishConfig,
    "zh-CN": simplifiedChineseConfig
  },
  themeConfig: {
    socialLinks: [{ icon: "github", link: "https://github.com/onixbyte" }],
  },
  outDir: "../dist",
})
