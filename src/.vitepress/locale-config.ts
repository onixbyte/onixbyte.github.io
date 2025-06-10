import { defineConfig } from "vitepress"
import { projectSidebar } from "./sidebar"

export const britishEnglishConfig = defineConfig({
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
})

export const simplifiedChineseConfig = defineConfig({
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
            { text: "Code of Conduct", link: "/zh-CN/opensource/code-of-conduct" },
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
          text: "Project",
          items: projectSidebar("version-catalogue"),
        },
      ],
      "/zh-CN/projects/common-toolkit/": [
        {
          text: "Project",
          items: projectSidebar("common-toolkit"),
        },
      ],
      "/zh-CN/projects/identity-generator/": [
        {
          text: "Project",
          items: projectSidebar("identity-generator"),
        },
      ],
      "/zh-CN/projects/crypto-toolkit/": [
        {
          text: "Project",
          items: projectSidebar("crypto-toolkit"),
        },
      ],
      "/zh-CN/projects/math-toolkit/": [
        {
          text: "Project",
          items: projectSidebar("math-toolkit"),
        },
      ],
      "/zh-CN/projects/jwt-toolkit/": [
        {
          text: "Project",
          items: projectSidebar("jwt-toolkit"),
        },
      ],
    },
  },
})

export const traditionalChineseConfig = defineConfig({})
