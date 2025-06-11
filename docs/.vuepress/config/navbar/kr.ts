// import type { NavGroup } from '@vuepress/theme-default' // 类型推断困难，暂时注释
import { getDirname, path } from 'vuepress/utils'
import fs from 'fs'

const __dirname = getDirname(import.meta.url)

// Define possible navigation item types (type inference is difficult, use any)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type NavbarConfigItem = any

/**
 * Dynamically generate Chinese navigation bar configurations
 * It checks if a predefined subdirectory under the 'docs' directory exists, and if so, adds it to the navigation bar.
 * @returns {NavbarConfigItem[]} Returns the generated navigation bar configuration array
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function generateKrNavbar(): any[] {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const navbar: any[] = [
    // Always include a link to the homepage
    { text: '홈', link: '/' },
  ]

  // Check for the presence of each primary directory (adjust the path to fit the new config directory structure)
  const docsBaseDir = path.resolve(__dirname, '../../../') // 指向 docs 目录 (退三级)

  const dirMap = {
    synceta: 'SyncETA',
    syncboot: 'SyncBoot',
    syncadmin: 'SyncAdmin',
    synccms: 'SyncCms',
    syncapim: 'SyncApim',
  }

  for (const [dir, text] of Object.entries(dirMap)) {
    const dirPath = path.resolve(docsBaseDir, dir)
    const exists = fs.existsSync(dirPath)
    if (exists) {
      navbar.push({ text, link: `/${dir}/` })
    }
  }

  navbar.push({
    text: 'PDF 다운로드',
    link: 'https://www.empasy.com/assets/pdf/empasy_guide_v1.8.pdf',
    target: '_blank',
    rel: 'noopener noreferrer', // Recommended for security
  })

  navbar.push({
    text: '엠파시',
    link: 'https://www.empasy.com',
    target: '_blank',
    rel: 'noopener noreferrer', // Recommended for security
  })

  return navbar
}

export const kr = generateKrNavbar()
