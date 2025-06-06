// import type { NavGroup } from '@vuepress/theme-default' // 类型推断困难，暂时注释
import { getDirname, path } from 'vuepress/utils'
import fs from 'fs'

const __dirname = getDirname(import.meta.url)

// 定义可能的导航项类型 (类型推断困难，使用 any)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type NavbarConfigItem = any

/**
 * Dynamically generate Chinese navigation bar configurations
 * It checks if a predefined subdirectory under the 'docs' directory exists, and if so, adds it to the navigation bar.
 * @returns {NavbarConfigItem[]} Returns the generated navigation bar configuration array
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function generateZhNavbar(): any[] {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navbar: any[] = [
    // Always include a link to the homepage
    { text: 'Homepage', link: '/' },
  ]

  // Check for the presence of each primary directory (adjust the path to fit the new config directory structure)
  const docsBaseDir = path.resolve(__dirname, '../../../') // 指向 docs 目录 (退三级)

  const dirMap = {
    synceta: 'SyncETA',
    syncboot: 'SyncBoot',
    synccms: 'SyncCms',
    syncadmin: 'SyncAdmin',
  }

  for (const [dir, text] of Object.entries(dirMap)) {
    const dirPath = path.resolve(docsBaseDir, dir)
    const exists = fs.existsSync(dirPath)
    if (exists) {
      navbar.push({ text, link: `/${dir}/` })
    }
  }

  return navbar
}

export const kr = generateZhNavbar()
