/**
 * VuePress document check script
 *
 * This script is used to check various aspects of the document:
 * - Document format check
 * - Link validity check
 * - Build checks
 * - Image Check
 * - Code block check
 * - Metadata check
 */

import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

import chalk from 'chalk'

// Configuration constants
const CONFIG = {
  docsDir: path.join(process.cwd(), 'docs'),
  imageDir: path.join(process.cwd(), 'docs/.vuepress/public/images'),
  allowedImageExtensions: ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'],
  maxImageSize: 5 * 1024 * 1024, // 5MB
  commands: {
    format: 'pnpm format',
    validate: 'pnpm validate:content',
    build: 'pnpm docs:build',
  },
}

// Performance monitoring
const stats = {
  startTime: Date.now(),
  filesChecked: 0,
  imagesChecked: 0,
  codeBlocksChecked: 0,
  results: {
    format: { passed: false, error: null },
    links: { passed: false, error: null },
    build: { passed: false, error: null },
    images: { passed: false, error: null },
    codeBlocks: { passed: false, error: null },
    metadata: { passed: false, error: null },
  },
}

// Check document format
function checkFormat() {
  console.log(chalk.blue('Check document format...'))
  try {
    execSync(CONFIG.commands.format, { stdio: 'inherit' })
    stats.results.format.passed = true
    console.log(chalk.green('✓ Document format check passed'))
  } catch (error) {
    stats.results.format.error = error.message
    console.error(chalk.red('✗ Document format check failed'))
    console.error(chalk.red(error.message))
  }
}

// Check link validity
function checkLinks() {
  console.log(chalk.blue('Check the documentation link...'))
  try {
    execSync(CONFIG.commands.validate, { stdio: 'inherit' })
    stats.results.links.passed = true
    console.log(chalk.green('✓ Document link check passed'))
  } catch (error) {
    stats.results.links.error = error.message
    console.error(chalk.red('✗ Document link check failed'))
    console.error(chalk.red(error.message))
  }
}

// Check build
function checkBuild() {
  console.log(chalk.blue('Check document build...'))
  try {
    execSync(CONFIG.commands.build, { stdio: 'inherit' })
    stats.results.build.passed = true
    console.log(chalk.green('✓ Document build check passed'))
  } catch (error) {
    stats.results.build.error = error.message
    console.error(chalk.red('✗ Document build check failed'))
    console.error(chalk.red(error.message))
  }
}

// Check the image
function checkImages() {
  console.log(chalk.blue('Check document image...'))
  try {
    if (!fs.existsSync(CONFIG.imageDir)) {
      throw new Error('Image directory does not exist')
    }

    const files = fs.readdirSync(CONFIG.imageDir)
    let hasError = false

    for (const file of files) {
      stats.imagesChecked++
      const filePath = path.join(CONFIG.imageDir, file)
      const ext = path.extname(file).toLowerCase()
      const fileStats = fs.statSync(filePath)

      // Check the file extension
      if (!CONFIG.allowedImageExtensions.includes(ext)) {
        console.error(chalk.yellow(`! Unsupported image format: ${file}`))
        hasError = true
      }

      // Check the file size
      if (fileStats.size > CONFIG.maxImageSize) {
        console.error(chalk.yellow(`! Image too large: ${file} (${formatSize(fileStats.size)})`))
        hasError = true
      }
    }

    if (!hasError) {
      stats.results.images.passed = true
      console.log(chalk.green('✓ Document image check passed'))
    } else {
      throw new Error('Image problem found')
    }
  } catch (error) {
    stats.results.images.error = error.message
    console.error(chalk.red('✗ Document image check failed'))
    console.error(chalk.red(error.message))
  }
}

// Check code block
function checkCodeBlocks() {
  console.log(chalk.blue('Check code block...'))
  try {
    const files = getAllMarkdownFiles(CONFIG.docsDir)
    let hasError = false

    for (const file of files) {
      const content = fs.readFileSync(file, 'utf-8')
      const codeBlocks = content.match(/```[\s\S]*?```/g) || []

      for (const block of codeBlocks) {
        stats.codeBlocksChecked++
        // Check the code block language
        if (!block.startsWith('```')) {
          console.error(chalk.yellow(`! Code block missing language tag: ${file}`))
          hasError = true
        }

        // Check the code block content
        if (block.trim() === '```') {
          console.error(chalk.yellow(`! Empty code block: ${file}`))
          hasError = true
        }
      }
    }

    if (!hasError) {
      stats.results.codeBlocks.passed = true
      console.log(chalk.green('✓ Code block check passed'))
    } else {
      throw new Error('Code block problem found')
    }
  } catch (error) {
    stats.results.codeBlocks.error = error.message
    console.error(chalk.red('✗ Code block check failed'))
    console.error(chalk.red(error.message))
  }
}

// Check metadata
function checkMetadata() {
  console.log(chalk.blue('Check document metadata...'))
  try {
    const files = getAllMarkdownFiles(CONFIG.docsDir)
    let hasError = false

    for (const file of files) {
      stats.filesChecked++
      const content = fs.readFileSync(file, 'utf-8')
      const frontmatter = content.match(/^---\n([\s\S]*?)\n---/) || []

      if (frontmatter.length === 0) {
        console.error(chalk.yellow(`! 缺少 frontmatter: ${file}`))
        hasError = true
        continue
      }

      const metadata = frontmatter[1]
      const requiredFields = ['title']

      for (const field of requiredFields) {
        if (!metadata.includes(`${field}:`)) {
          console.error(chalk.yellow(`! Missing required field ${field}: ${file}`))
          hasError = true
        }
      }
    }

    if (!hasError) {
      stats.results.metadata.passed = true
      console.log(chalk.green('✓ Document metadata check passed'))
    } else {
      throw new Error('Found metadata problem')
    }
  } catch (error) {
    stats.results.metadata.error = error.message
    console.error(chalk.red('✗ Document metadata check failed'))
    console.error(chalk.red(error.message))
  }
}

// Get all Markdown files
function getAllMarkdownFiles(dir) {
  const files = []
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (!entry.name.startsWith('.') && entry.name !== 'node_modules') {
        files.push(...getAllMarkdownFiles(fullPath))
      }
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(fullPath)
    }
  }

  return files
}

//Format file size
function formatSize(bytes) {
  if (bytes < 1024) return bytes + ' B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return (bytes / Math.pow(k, i)).toFixed(2) + ' ' + sizes[i]
}

// Generate inspection report
function generateReport() {
  console.log(chalk.cyan('\n=== Document Check Report==='))
  console.log(chalk.blue(`\nPerformance statistics:`))
  console.log(chalk.blue(`- Checked files: ${stats.filesChecked}`))
  console.log(chalk.blue(`- Checked images: ${stats.imagesChecked}`))
  console.log(chalk.blue(`- Check code block count: ${stats.codeBlocksChecked}`))
  console.log(chalk.blue(`- Total time: ${((Date.now() - stats.startTime) / 1000).toFixed(2)}s`))

  const allPassed = Object.values(stats.results).every(r => r.passed)
  if (allPassed) {
    console.log(chalk.green('\nAll checks passed!'))
  } else {
    console.log(chalk.red('\nThe following problems were found:'))
    Object.entries(stats.results).forEach(([key, result]) => {
      if (!result.passed) {
        console.log(chalk.red(`\n${key}:`))
        console.log(chalk.red(result.error))
      }
    })
  }
}

// Main function
function main() {
  try {
    console.log(chalk.yellow('Start document check...\n'))

    checkFormat()
    checkLinks()
    checkBuild()
    checkImages()
    checkCodeBlocks()
    checkMetadata()

    generateReport()

    // If any check fails, exit with code 1
    if (!Object.values(stats.results).every(r => r.passed)) {
      process.exit(1)
    }
  } catch (error) {
    console.error(chalk.red('Error in checking process:'), error)
    process.exit(1)
  }
}

main()
