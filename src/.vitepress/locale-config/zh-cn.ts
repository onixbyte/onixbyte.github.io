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
            text: "OnixByte 工具箱",
            link: "/zh-CN/projects/onixbyte-toolbox",
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
              text: "OnixByte 工具箱",
              link: "/zh-CN/projects/onixbyte-toolbox",
            },
          ],
        },
      ],
      "/zh-CN/projects/onixbyte-toolbox": [
        {
          text: "项目",
          items: [
            { text: "简介", link: "/zh-CN/projects/onixbyte-toolbox/" },
            {
              text: "使用",
              link: "/zh-CN/projects/onixbyte-toolbox/usage",
            },
            { text: "API", link: `/zh-CN/projects/onixbyte-toolbox/api` },
            {
              text: "更新日志",
              link: `/zh-CN/projects/onixbyte-toolbox/changelog`,
            },
          ],
        },
      ],
    },
  },
}
