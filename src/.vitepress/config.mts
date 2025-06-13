import { defineConfig } from "vitepress"
import { britishEnglishConfig, simplifiedChineseConfig } from "./locale-config"

export default defineConfig({
  head: [
    ["link", { rel: "icon", href: "https://dist.onixbyte.com/OnixByte.png" }],
  ],
  locales: {
    root: britishEnglishConfig,
    "zh-CN": simplifiedChineseConfig,
  },
  themeConfig: {
    socialLinks: [{ icon: "github", link: "https://github.com/onixbyte" }],
  },
  outDir: "../dist",
})
