import { DefaultTheme, LocaleSpecificConfig } from "vitepress"
import { projectSidebar } from "../sidebar"
import { Locale } from "../types"

export const simplifiedChineseConfig: LocaleSpecificConfig<DefaultTheme.Config> & {
  label: string
  link?: string
} = {
  label: "简体中文",
  lang: "zh-CN",
  title: "OnixByte 官方网站",
  titleTemplate: ":title | OnixByte",
  description: "",
  themeConfig: {
    nav: [
      { text: "主页", link: "/zh-CN/" },
      {
        text: "项目",
        items: [
          {
            text: "Version Catalogue",
            link: "/zh-CN/projects/version-catalogue",
          },
          { text: "Common Toolkit", link: "/zh-CN/projects/common-toolkit" },
          {
            text: "Identity Generator",
            link: "/zh-CN/projects/identity-generator",
          },
          { text: "Crypto Toolkit", link: "/zh-CN/projects/crypto-toolkit" },
          { text: "Math Toolkit", link: "/zh-CN/projects/math-toolkit" },
          {
            text: "JWT Toolkit",
            link: "/zh-CN/projects/jwt-toolkit",
          },
        ],
      },
    ],
    sidebar: {
      "/zh-CN/opensource": [
        {
          text: "开源相关文档",
          items: [
            { text: "许可证", link: "/zh-CN/opensource/license" },
            { text: "贡献", link: "/zh-CN/opensource/contributing" },
            {
              text: "行为准则",
              link: "/zh-CN/opensource/code-of-conduct",
            },
          ],
        },
        {
          text: "开源项目",
          items: [
            {
              text: "Version Catalogue",
              link: "/zh-CN/projects/version-catalogue",
            },
            { text: "Common Toolkit", link: "/zh-CN/projects/common-toolkit" },
            {
              text: "Identity Generator",
              link: "/zh-CN/projects/identity-generator",
            },
            { text: "Crypto Toolkit", link: "/zh-CN/projects/crypto-toolkit" },
            { text: "Math Toolkit", link: "/zh-CN/projects/math-toolkit" },
            {
              text: "JWT Toolkit",
              link: "/zh-CN/projects/jwt-toolkit",
            },
          ],
        },
      ],
      "/zh-CN/projects/version-catalogue": [
        {
          text: "项目",
          items: projectSidebar("version-catalogue", Locale.ZH_CN),
        },
      ],
      "/zh-CN/projects/common-toolkit/": [
        {
          text: "项目",
          items: projectSidebar("common-toolkit", Locale.ZH_CN),
        },
      ],
      "/zh-CN/projects/identity-generator/": [
        {
          text: "项目",
          items: projectSidebar("identity-generator", Locale.ZH_CN),
        },
      ],
      "/zh-CN/projects/crypto-toolkit/": [
        {
          text: "项目",
          items: projectSidebar("crypto-toolkit", Locale.ZH_CN),
        },
      ],
      "/zh-CN/projects/math-toolkit/": [
        {
          text: "项目",
          items: projectSidebar("math-toolkit", Locale.ZH_CN),
        },
      ],
      "/zh-CN/projects/jwt-toolkit/": [
        {
          text: "项目",
          items: projectSidebar("jwt-toolkit", Locale.ZH_CN),
        },
      ],
    },
  },
}
