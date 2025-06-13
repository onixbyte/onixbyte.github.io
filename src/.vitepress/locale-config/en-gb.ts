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
            text: "Java Dev Kit",
            link: "/projects/java-dev-kit"
          },
          {
            text: "Version Catalogue",
            link: "/projects/version-catalogue",
          },
          { text: "Common Toolkit", link: "/projects/common-toolkit" },
          {
            text: "Identity Generator",
            link: "/projects/identity-generator",
          },
          { text: "Crypto Toolkit", link: "/projects/crypto-toolkit" },
          { text: "Math Toolkit", link: "/projects/math-toolkit" },
          {
            text: "JWT Toolkit",
            link: "/projects/jwt-toolkit",
          },
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
              text: "Java Dev Kit",
              link: "/projects/java-dev-kit"
            },
            {
              text: "Version Catalogue",
              link: "/projects/version-catalogue",
            },
            { text: "Common Toolkit", link: "/projects/common-toolkit" },
            {
              text: "Identity Generator",
              link: "/projects/identity-generator",
            },
            { text: "Crypto Toolkit", link: "/projects/crypto-toolkit" },
            { text: "Math Toolkit", link: "/projects/math-toolkit" },
            {
              text: "JWT Toolkit",
              link: "/projects/jwt-toolkit",
            },
          ],
        },
      ],
      "/projects/java-dev-kit": [
        {
          text: "Project",
          items: projectSidebar("java-dev-kit")
        }
      ],
      "/projects/version-catalogue": [
        {
          text: "Project",
          items: projectSidebar("version-catalogue"),
        },
      ],
      "/projects/common-toolkit/": [
        {
          text: "Project",
          items: projectSidebar("common-toolkit"),
        },
      ],
      "/projects/identity-generator/": [
        {
          text: "Project",
          items: projectSidebar("identity-generator"),
        },
      ],
      "/projects/crypto-toolkit/": [
        {
          text: "Project",
          items: projectSidebar("crypto-toolkit"),
        },
      ],
      "/projects/math-toolkit/": [
        {
          text: "Project",
          items: projectSidebar("math-toolkit"),
        },
      ],
      "/projects/jwt-toolkit/": [
        {
          text: "Project",
          items: projectSidebar("jwt-toolkit"),
        },
      ],
    },
  },
}