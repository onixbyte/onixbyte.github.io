import type { DefaultTheme } from "vitepress/types"

export function projectSidebar(
  projectIndex: string
): DefaultTheme.SidebarItem[] {
  return [
    { text: "Intro", link: `/projects/${projectIndex}/` },
    { text: "Usage", link: `/projects/${projectIndex}/usage` },
    { text: "API", link: `/projects/${projectIndex}/api` },
    { text: "Changelog", link: `/projects/${projectIndex}/changelog` },
  ]
}
