import type { DefaultTheme } from "vitepress/types"
import { Locale } from "./types"

export function projectSidebar(
  projectIndex: string,
  locale?: Locale
): DefaultTheme.SidebarItem[] {
  const langTag = locale && locale != Locale.EN_GB ? `/${locale}` : ""
  return [
    { text: "Intro", link: `${langTag}/projects/${projectIndex}/` },
    { text: "Usage", link: `${langTag}/projects/${projectIndex}/usage` },
    { text: "API", link: `${langTag}/projects/${projectIndex}/api` },
    {
      text: "Changelog",
      link: `${langTag}/projects/${projectIndex}/changelog`,
    },
  ]
}
