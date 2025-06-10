import { defineConfig } from "vitepress"

export default defineConfig({
  title: "OnixByte Official",
  titleTemplate: "OnixByte | :title",
  description:
    "OnixByte specialises in delivering cutting-edge technology solutions that drive innovation and empower businesses to excel in the digital era.",
  locales: {
    root: {
      label: "English",
      lang: "en",
    },
  },
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Projects",
        items: [
          { text: "Version Catalogue", link: "/projects/version-catalogue" },
        ],
      },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/onixbyte" }],
  },
  outDir: "../dist"
})
