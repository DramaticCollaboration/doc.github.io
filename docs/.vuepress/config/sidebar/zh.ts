// import type { SidebarConfig } from '@vuepress/theme-default' // 类型推断困难，暂时注释
import { getDirname, path } from 'vuepress/utils'
import fs from 'fs'

const __dirname = getDirname(import.meta.url)

/**
 * Convert the file name of kebab-case or snake_case to a Title Case title
 * @param {string} filename File name (without extension)
 * @returns {string} Converted title
 */
function formatFilenameAsTitle(filename: string): string {
  return filename
    .split(/[-_]/) // Split by hyphen or underscore
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // 首字母大写，其余小写
    .join(' ')
}

/**
 * Dynamically generate Chinese sidebar configurations
 * It scans the predefined subdirectories in the 'docs' directory and generates a corresponding sidebar grouping for each directory.
 * Each group contains the 'README.md' (as an overview link) and other '.md' files under the directory.
 * @returns {any} Return the generated sidebar configuration object (type inference difficult, use any)
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function generateZhSidebar(): any {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sidebar: any = {}
  // Calculate the absolute path to the docs directory
  const docsBaseDir = path.resolve(__dirname, '../../../')

  // Define the table of contents for which you want to generate the sidebar and its corresponding grouping headings
  // key is the directory name (as opposed to the docs directory) and value is the text grouped by the sidebar
  const dirMap: Record<string, string> = {
    guide: 'Guide',
    reference: 'Reference',
    api: 'API Reference',
    faq: 'FAQs',
  }

  // Iterate through the dirMap to generate a sidebar configuration for each directory that exists
  for (const [dir, text] of Object.entries(dirMap)) {
    const dirPath = path.resolve(docsBaseDir, dir)
    // Skip directories that don't exist
    if (!fs.existsSync(dirPath)) continue

    // Read all Markdown files in the directory (excluding README.md)
    const files = fs
      .readdirSync(dirPath)
      .filter(file => file.endsWith('.md') && file !== 'README.md')
      .sort((a, b) => a.localeCompare(b)) // Sort alphabetically
      .map(file => {
        const name = file.replace('.md', '')
        // Convert filename to object format { text: 'title', link: '/path/filename' }
        return {
          text: formatFilenameAsTitle(name), // Use helper functions to generate titles
          link: `/${dir}/${name}`,
        }
      })

    // Create an array of sidebar children with the link for README.md first
    const children = [
      { text: 'Summary', link: `/${dir}/` }, // README.md Link (text customizable)
      ...files, // Other Markdown files link objects
    ]

    // Set the sidebar configuration for the current directory path
    sidebar[`/${dir}/`] = [
      {
        text, // Group Title (from dirMap)
        collapsible: true, // Folding is allowed
        children, // Array of children
      },
    ]
  }

  return sidebar
}

// Export the generated Chinese sidebar configuration
export const zh = generateZhSidebar()
