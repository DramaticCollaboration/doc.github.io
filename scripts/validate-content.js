/**
 * Content validation script
 *
 * This script checks for common issues in the documentation:
 * - Check for broken links
 * - Check for missing images
 * - Check Frontmatter issues
 * - Check for duplicate titles
 * - Check for spelling errors
 * - Verify the validity of external links
 */

import fs from 'fs'
import http from 'http'
import https from 'https'
import path from 'path'
import { URL } from 'url'

import chalk from 'chalk'
import { glob } from 'glob'
import matter from 'gray-matter'

// Configuration constants
const CONFIG = {
  docsDir: path.join(process.cwd(), 'docs'),
  maxConcurrentRequests: 5,
  requestTimeout: 5000,
  ignoredPatterns: ['node_modules/**', '.vuepress/**'],
}

// Performance monitoring
const stats = {
  startTime: Date.now(),
  filesChecked: 0,
  linksChecked: 0,
  errors: [],
  warnings: [],
}

// cache
const checkedUrls = new Map()
let activeRequests = 0
const urlQueue = []

// Common spelling errors and correction suggestions
const SPELLING_CORRECTIONS = {
  javascript: 'JavaScript',
  css: 'CSS',
  html: 'HTML',
  nodejs: 'Node.js',
  'vue.js': 'Vue.js',
  vuejs: 'Vue.js',
  vuepress: 'VuePress',
  github: 'GitHub',
  gitlab: 'GitLab',
  bitbucket: 'Bitbucket',
  npm: 'npm',
  webpack: 'webpack',
  fire: 'FIRE',
  oauth: 'OAuth',
  http: 'HTTP',
  https: 'HTTPS',
  ios: 'iOS',
  macos: 'macOS',
  linux: 'Linux',
  windows: 'Windows',
  typescript: 'TypeScript',
  eslint: 'ESLint',
  jsx: 'JSX',
  tsx: 'TSX',
  ui: 'UI',
  ux: 'UX',
  url: 'URL',
  urls: 'URLs',
  json: 'JSON',
  yaml: 'YAML',
  xml: 'XML',
}

// Chinese spelling errors and correction suggestions
const CHINESE_SPELLING_CORRECTIONS = {
  RefreshCache: 'Refresh cache',
  Uninstall: 'Uninstall',
  Installation: 'Install',
  frame: 'frame',
  Error: 'Error',
  Warning: 'Warning',
  Component: 'Component',
  Module: 'module',
  plugin: 'plugin',
  Subject: 'Subject',
  Routing: 'routing',
  Status: 'status',
  Configuration: 'Configuration',
  Build: 'Build',
  Deployment: 'deploy',
  debug: 'debug',
  test: 'test',
  Packaging: 'Packaging',
  Compile: 'Compile',
}

console.log(chalk.blue('Start verifying document content...'))

// Get all markdown files
const markdownFiles = glob.sync('**/*.md', {
  cwd: CONFIG.docsDir,
  ignore: CONFIG.ignoredPatterns,
})

// Main verification function
async function validateContent() {
  try {
    // Check all markdown files
    for (const file of markdownFiles) {
      stats.filesChecked++
      const filePath = path.join(CONFIG.docsDir, file)
      const relativePath = path.relative(process.cwd(), filePath)
      const content = fs.readFileSync(filePath, 'utf8')

      try {
        // Check frontmatter
        validateFrontmatter(content, relativePath)

        // Check the link
        validateLinks(content, relativePath, file)

        // Check the image
        validateImages(content, relativePath, file)

        // Check title
        validateHeadings(content, relativePath)

        // Check for spelling errors
        validateSpelling(content, relativePath)
      } catch (error) {
        stats.errors.push(`${relativePath}: ${error.message}`)
      }
    }

    // Verify all external links
    await validateExternalLinks()

    // Display the results
    console.log('\n=== Verification result===')
    console.log(chalk.blue(`\nPerformance statistics:`))
    console.log(chalk.blue(`- Checked files: ${stats.filesChecked}`))
    console.log(chalk.blue(`- Checked links: ${stats.linksChecked}`))
    console.log(chalk.blue(`- Total time: ${((Date.now() - stats.startTime) / 1000).toFixed(2)}s`))

    if (stats.errors.length === 0 && stats.warnings.length === 0) {
      console.log(chalk.green('✓ No problems found!'))
    } else {
      if (stats.errors.length > 0) {
        console.log(chalk.red(`\n错误 (${stats.errors.length}):`))
        stats.errors.forEach(error => console.log(chalk.red(`- ${error}`)))
      }

      if (stats.warnings.length > 0) {
        console.log(chalk.yellow(`\n警告 (${stats.warnings.length}):`))
        stats.warnings.forEach(warning => console.log(chalk.yellow(`- ${warning}`)))
      }

      if (stats.errors.length > 0) {
        process.exit(1)
      }
    }
  } catch (error) {
    console.error(chalk.red('Error in verification process:'), error)
    process.exit(1)
  }
}

/**
 * Verify Frontmatter
 */
function validateFrontmatter(content, filePath) {
  try {
    const { data } = matter(content)

    // Check required fields
    if (!data.title) {
      stats.warnings.push(`${filePath}: missing title field`)
    }

    // Check date format
    if (data.date && isNaN(new Date(data.date).getTime())) {
      stats.errors.push(`${filePath}: invalid date format: ${data.date}`)
    }
  } catch (error) {
    stats.errors.push(`${filePath}: Frontmatter parse error: ${error.message}`)
  }
}

/**
 * Verification link
 */
function validateLinks(content, filePath, relativeMdPath) {
  const mdLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
  let match

  while ((match = mdLinkRegex.exec(content)) !== null) {
    const [, linkText, linkPath] = match

    // Check for empty link text
    if (!linkText.trim()) {
      stats.warnings.push(`${filePath}: link is missing description text: ${linkPath}`)
    }

    // Handle external links
    if (linkPath.startsWith('http')) {
      // Add external links to the check queue
      urlQueue.push({
        url: linkPath,
        filePath,
        lineNum: getLineNumber(content, match.index),
      })
      return
    }

    // Ignore anchor links
    if (linkPath.startsWith('#')) {
      validateAnchorLink(content, linkPath, filePath)
      return
    }

    // Handle relative paths
    const targetPath =
      linkPath.endsWith('.md') || linkPath.endsWith('.html')
        ? path.resolve(path.dirname(path.join(CONFIG.docsDir, relativeMdPath)), linkPath)
        : null

    if (targetPath && !fs.existsSync(targetPath)) {
      stats.errors.push(`${filePath}: Link is broken: ${linkPath}`)
    }
  }
}

/**
 * Verify anchor link
 */
function validateAnchorLink(content, anchor, filePath) {
  // Remove the leading # symbol
  const headingId = anchor.substring(1)

  // Check if the corresponding title ID exists in the document
  // This is a simplified process. In fact, we need to consider the ID generation rules of VuePress
  const headingRegex = new RegExp(
    `<h[1-6][^>]*id=["']${headingId}["'][^>]*>|^#+\\s+(.+?)\\s*$`,
    'gm'
  )

  if (!headingRegex.test(content)) {
    stats.warnings.push(`${filePath}: possible invalid anchor link: ${anchor}`)
  }
}

/**
 * Verification picture
 */
function validateImages(content, filePath, relativeMdPath) {
  const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g
  let match

  while ((match = imageRegex.exec(content)) !== null) {
    const [, altText, imagePath] = match

    // Check alt text
    if (!altText) {
      stats.warnings.push(`${filePath}: image is missing alt text: ${imagePath}`)
    }

    // Ignore external images
    if (imagePath.startsWith('http')) {
      // Add external image links to the check queue
      urlQueue.push({
        url: imagePath,
        filePath,
        lineNum: getLineNumber(content, match.index),
        isImage: true,
      })
      return
    }

    // Check if the image exists
    const targetPath = path.resolve(
      path.dirname(path.join(CONFIG.docsDir, relativeMdPath)),
      imagePath
    )
    if (!fs.existsSync(targetPath)) {
      stats.errors.push(`${filePath}: Image does not exist: ${imagePath}`)
    }
  }
}

/**
 * Validation Title
 */
function validateHeadings(content, filePath) {
  const lines = content.split('\n')
  const headings = []

  lines.forEach((line, i) => {
    if (line.startsWith('#')) {
      const level = line.match(/^#+/)[0].length
      const text = line.replace(/^#+\s+/, '').trim()

      headings.push({
        level,
        text,
        line: i + 1,
      })

      // Check for heading level jumps (e.g. from h1 directly to h3)
      if (headings.length > 1) {
        const prevHeading = headings[headings.length - 2]
        if (level > prevHeading.level + 1) {
          stats.warnings.push(
            `${filePath}:${i + 1}: Heading level jump: from h${prevHeading.level} to h${level}`
          )
        }
      }
    }
  })

  // Check for duplicate titles
  const headingTexts = {}
  headings.forEach(heading => {
    if (headingTexts[heading.text]) {
      stats.warnings.push(
        `${filePath}: Repeat title "${heading.text}" on line ${headingTexts[heading.text]} and line ${heading.line}`
      )
    } else {
      headingTexts[heading.text] = heading.line
    }
  })
}

/**
 * Verify spelling
 */
function validateSpelling(content, filePath) {
  const lines = content.split('\n')

  lines.forEach((line, lineIndex) => {
    // Skip code block and frontmatter
    if (line.startsWith('```') || line.startsWith('---')) {
      return
    }

    // Check the spelling of English terms
    Object.keys(SPELLING_CORRECTIONS).forEach(misspelled => {
      const regex = new RegExp(`\\b${misspelled}\\b`, 'i')
      if (regex.test(line)) {
        const correctTerm = SPELLING_CORRECTIONS[misspelled]
        // If you have used the correct case, no warning is needed
        if (!line.includes(correctTerm)) {
          stats.warnings.push(
            `${filePath}:${lineIndex + 1}: possible spelling error: "${misspelled}" should be "${correctTerm}"`
          )
        }
      }
    })

    // Check Chinese terminology
    Object.keys(CHINESE_SPELLING_CORRECTIONS).forEach(term => {
      if (line.includes(term)) {
        const suggestion = CHINESE_SPELLING_CORRECTIONS[term]
        if (term !== suggestion && !line.includes(suggestion)) {
          stats.warnings.push(
            `${filePath}:${lineIndex + 1}: Possible term suggestion: "${term}" Suggestion: "${suggestion}"`
          )
        }
      }
    })
  })
}

/**
 * Verify external links
 */
async function validateExternalLinks() {
  if (urlQueue.length === 0) {
    return
  }

  console.log(chalk.blue(`\nStart verifying ${urlQueue.length} external links...`))

  return new Promise(resolve => {
    // Process the links in the queue
    const processQueue = () => {
      // If the queue is empty and there are no active requests, then complete
      if (urlQueue.length === 0 && activeRequests === 0) {
        resolve()
        return
      }

      // If there is a free slot and there are links in the queue to check
      while (activeRequests < CONFIG.maxConcurrentRequests && urlQueue.length > 0) {
        activeRequests++
        const { url, filePath, lineNum, isImage } = urlQueue.shift()
        checkUrl(url, filePath, lineNum, isImage).finally(() => {
          activeRequests--
          processQueue() // Process the next
        })
      }
    }

    // Start processing the queue
    processQueue()
  })
}

/**
 * Check if the URL is valid
 */
async function checkUrl(url, filePath, lineNum, isImage = false) {
  stats.linksChecked++

  // If this URL has already been checked, use the cached result directly
  if (checkedUrls.has(url)) {
    const result = checkedUrls.get(url)
    if (!result.valid) {
      const errorMsg = `${filePath}:${lineNum}: ${isImage ? 'Image' : 'Link'} Access failed: ${url} (${result.statusCode || result.error})`
      stats.errors.push(errorMsg)
    }
    return
  }

  try {
    const parsedUrl = new URL(url)
    const protocol = parsedUrl.protocol === 'https:' ? https : http

    const result = await new Promise((resolve, reject) => {
      const request = protocol.get(
        url,
        {
          timeout: CONFIG.requestTimeout,
          headers: {
            'User-Agent': 'Mozilla/5.0 VuePress-Link-Checker',
          },
        },
        response => {
          // Handle redirection
          if (
            response.statusCode >= 300 &&
            response.statusCode < 400 &&
            response.headers.location
          ) {
            resolve({
              valid: true,
              redirectTo: response.headers.location,
              statusCode: response.statusCode,
            })
          } else if (response.statusCode >= 200 && response.statusCode < 400) {
            resolve({
              valid: true,
              statusCode: response.statusCode,
            })
          } else {
            resolve({
              valid: false,
              statusCode: response.statusCode,
            })
          }
        }
      )

      request.on('error', error => {
        reject(error)
      })

      request.on('timeout', () => {
        request.destroy()
        reject(new Error('Request timeout'))
      })
    })

    // Cache results
    checkedUrls.set(url, result)

    // If the link is invalid, add an error
    if (!result.valid) {
      const errorMsg = `${filePath}:${lineNum}: ${isImage ? 'Image' : 'Link'} Access failed: ${url} (${result.statusCode || result.error})`
      stats.errors.push(errorMsg)
    }

    // If it is a redirect, add a warning
    if (result.redirectTo) {
      stats.warnings.push(
        `${filePath}:${lineNum}: ${isImage ? 'Image' : 'Link'} Redirect: ${url} -> ${result.redirectTo}`
      )
    }
  } catch (error) {
    // Cache error results
    checkedUrls.set(url, {
      valid: false,
      error: error.message,
    })

    stats.errors.push(
      `${filePath}:${lineNum}: ${isImage ? 'Image' : 'Link'} invalid format: ${url} (${error.message})`
    )
  }
}

/**
 * Get the line number of a certain position in the content
 */
function getLineNumber(content, index) {
  const lines = content.substring(0, index).split('\n')
  return lines.length
}

//Perform verification
validateContent().catch(error => {
  console.error(chalk.red('Error in verification process:'), error)
  process.exit(1)
})
