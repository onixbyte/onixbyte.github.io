import { defineConfig } from "vitepress"
import { britishEnglishConfig, simplifiedChineseConfig } from "./locale-config"

export default defineConfig({
  locales: {
    root: {
      label: "English",
      lang: "en",
      ...britishEnglishConfig,
    },
    "zh-CN": {
      label: "简体中文",
      lang: "zh-CN",
      ...simplifiedChineseConfig,
    },
  },
  themeConfig: {
    socialLinks: [{ icon: "github", link: "https://github.com/onixbyte" }],
  },
  outDir: "../dist",
})
