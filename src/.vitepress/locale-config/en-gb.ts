import { LocaleSpecificConfig } from "vitepress"
import { DefaultTheme } from "vitepress/types"
import { projectSidebar } from "../sidebar"

export const britishEnglishConfig: LocaleSpecificConfig<DefaultTheme.Config> & {
  label: string
  link?: string
} = {
  label: "English",
  lang: "en",
  title: "OnixByte Official",
  titleTemplate: ":title | OnixByte",
  description:
    "OnixByte specialises in delivering cutting-edge technology solutions that drive innovation and empower businesses to excel in the digital era.",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Projects",
        items: [
          {
            text: "OnixByte Toolbox",
            link: "/projects/onixbyte-toolbox"
          }
        ],
      },
    ],
    sidebar: {
      "/opensource": [
        {
          text: "Open Source Documents",
          items: [
            { text: "License", link: "/opensource/license" },
            { text: "Contributing", link: "/opensource/contributing" },
            { text: "Code of Conduct", link: "/opensource/code-of-conduct" },
          ],
        },
        {
          text: "Open Source Projects",
          items: [
            {
              text: "OnixByte Toolbox",
              link: "/projects/onixbyte-toolbox"
            }
          ],
        },
      ],
      "/projects/onixbyte-toolbox": [
        {
          text: "Project",
          items: [
            { text: "Intro", link: `/projects/onixbyte-toolbox/` },
            { text: "Usage", link: `/projects/onixbyte-toolbox/usage` },
            { text: "API", link: `/projects/onixbyte-toolbox/api` },
            {
              text: "Changelog",
              link: `/projects/onixbyte-toolbox/changelog`,
            },
          ]
        }
      ],
    },
  },
}