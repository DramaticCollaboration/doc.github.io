import fs from 'fs'
import path from 'path'
import matter from 'gray-matter' // gray-matter 패키지 추가

export function generateKrSidebar(dir: string): any {
  // Calculate the absolute path to the docs directory
  const docsBaseDir = path.resolve(__dirname, '../ko')
  // Iterate through the dirMap to generate a sidebar configuration for each directory that exists
    const dirPath = path.resolve(docsBaseDir, dir)

    // Skip directories that don't exist
    if (!fs.existsSync(dirPath)) return [];
    const fileList = fs.readdirSync(dirPath).filter(file => file.endsWith('.md') && file !== 'index.md')

    const filesWithMeta = fileList.map(file => {
      const filePath = path.resolve(dirPath, file)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const { data: frontmatter } = matter(fileContent)
      const name = file.replace('.md', '')

      return {
        file,
        name,
        // frontmatter에서 title과 sort 속성 가져오기
        title: frontmatter.title || formatFilenameAsTitle(name),
        sort: frontmatter.sort || 999, // sort가 없으면 높은 값(999) 설정
        link: `/${dir}/${name}`,
      }
    })
    filesWithMeta.sort((a, b) => {
      // 숫자 값으로 정렬
      return a.sort - b.sort
    })

    // 정렬된 파일 정보로 링크 객체 생성
    const files = filesWithMeta.map(fileInfo => {
      return {
        text: fileInfo.title, // frontmatter에서 가져온 title 사용
        link: fileInfo.link,
      }
    })

    // Create an array of sidebar children with the link for README.md first
    const children = [
      //{ text: '기능설명', link: `/${dir}/` }, // README.md Link (text customizable)
      ...files, // Other Markdown files link objects
    ]

  return children
}



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