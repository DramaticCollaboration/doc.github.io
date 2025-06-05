/**
 * VuePress builds analytics scripts
 *
 * This script analyzes the VuePress build output and provides the following information:
 * - Statistics on the number and size of pages
 * - Resource size analysis
 * - Build time analysis
 * - Possible performance issues are identified
 * - Performance scores and recommendations
 */

import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import zlib from 'zlib'

import chalk from 'chalk'

// Configure constants
const CONFIG = {
  distDir: path.join(process.cwd(), 'docs/.vuepress/dist'),
  outputReport: path.join(process.cwd(), 'docs/.vuepress/dist/build-report.json'),
  sizeThreshold: {
    js: 250 * 1024, // 250KB
    css: 50 * 1024, // 50KB
    html: 100 * 1024, // 100KB
    image: 5 * 1024 * 1024, // 5MB
  },
  performanceScores: {
    totalSize: {
      excellent: 2 * 1024 * 1024, // 2MB
      good: 5 * 1024 * 1024, // 5MB
      poor: 10 * 1024 * 1024, // 10MB
    },
    compressionRatio: {
      excellent: 0.3, // 30%
      good: 0.5, // 50%
      poor: 0.7, // 70%
    },
    jsFiles: {
      excellent: 5,
      good: 10,
      poor: 15,
    },
    cssFiles: {
      excellent: 3,
      good: 5,
      poor: 10,
    },
  },
  weights: {
    totalSize: 0.3,
    compressionRatio: 0.3,
    jsFiles: 0.2,
    cssFiles: 0.2,
  },
  buildCommand: 'npx vuepress build docs',
}

// Performance monitoring
const stats = {
  startTime: Date.now(),
  totalSize: 0,
  compressedSize: 0,
  fileTypes: {},
  largeFiles: [],
  pages: 0,
  assets: {
    js: [],
    css: [],
    images: [],
  },
  performance: {
    score: 0,
    metrics: {},
  },
}

// Check if the build directory exists
if (!fs.existsSync(CONFIG.distDir)) {
  console.log(chalk.yellow("The build directory doesn't exist, start building..."))
  try {
    execSync(CONFIG.buildCommand, { stdio: 'inherit' })
  } catch (error) {
    console.error(chalk.red('The build failed:'), error.message)
    process.exit(1)
  }
}

// 分析函数
async function analyze() {
  try {
    console.log(chalk.blue('Start analyzing your VuePress build...'))
    await walkDir(CONFIG.distDir)

    // Calculate the total result
    const buildTime = (Date.now() - stats.startTime) / 1000

    // Calculate the performance score
    calculatePerformanceScore()

    // Output the analysis results
    console.log(chalk.green('\n=== Build an analytics report ==='))
    console.log(`Build time: ${buildTime.toFixed(2)}秒`)
    console.log(`Total number of pages: ${stats.pages}`)
    console.log(
      `Total size: ${formatSize(stats.totalSize)} (After compression: ${formatSize(stats.compressedSize)})`
    )
    console.log(`Performance score: ${stats.performance.score}/100`)

    // Displayed by type
    console.log(chalk.cyan('\nFile type distribution:'))
    Object.keys(stats.fileTypes)
      .sort()
      .forEach(type => {
        const typeStats = stats.fileTypes[type]
        console.log(
          `  ${type}: ${typeStats.count} Files, ${formatSize(typeStats.size)} (${((typeStats.size / stats.totalSize) * 100).toFixed(1)}%)`
        )
      })

    // The largest JS file
    if (stats.assets.js.length > 0) {
      console.log(chalk.cyan('\nThe largest JS file:'))
      stats.assets.js
        .sort((a, b) => b.size - a.size)
        .slice(0, 5)
        .forEach(file => {
          console.log(`  ${file.path}: ${formatSize(file.size)}`)
        })
    }

    // The largest CSS file
    if (stats.assets.css.length > 0) {
      console.log(chalk.cyan('\nThe largest CSS file:'))
      stats.assets.css
        .sort((a, b) => b.size - a.size)
        .slice(0, 5)
        .forEach(file => {
          console.log(`  ${file.path}: ${formatSize(file.size)}`)
        })
    }

    // Large file warnings are displayed
    if (stats.largeFiles.length > 0) {
      console.log(chalk.yellow('\nLarge file warning:'))
      stats.largeFiles.forEach(file => {
        console.log(`  ${file.path}: ${formatSize(file.size)}`)
      })
    }

    // Save the analysis report
    const report = {
      buildTime,
      pages: stats.pages,
      totalSize: stats.totalSize,
      compressedSize: stats.compressedSize,
      fileTypes: stats.fileTypes,
      largeFiles: stats.largeFiles,
      assets: stats.assets,
      performance: stats.performance,
    }

    fs.writeFileSync(CONFIG.outputReport, JSON.stringify(report, null, 2))
    console.log(
      chalk.green(
        `\nThe analysis report has been saved to: ${path.relative(process.cwd(), CONFIG.outputReport)}`
      )
    )

    // Provide optimization suggestions
    provideOptimizationTips(report)
  } catch (error) {
    console.error(chalk.red('There was an error in the analysis process:'), error)
    process.exit(1)
  }
}

// Calculate the performance score
function calculatePerformanceScore() {
  const metrics = stats.performance.metrics
  let totalScore = 0

  // Total size score
  const totalSize = stats.totalSize
  if (totalSize <= CONFIG.performanceScores.totalSize.excellent) {
    metrics.totalSize = { score: 100, level: 'excellent' }
  } else if (totalSize <= CONFIG.performanceScores.totalSize.good) {
    metrics.totalSize = { score: 80, level: 'good' }
  } else if (totalSize <= CONFIG.performanceScores.totalSize.poor) {
    metrics.totalSize = { score: 60, level: 'poor' }
  } else {
    metrics.totalSize = { score: 40, level: 'critical' }
  }

  // Compression ratio score
  const compressionRatio = stats.compressedSize / stats.totalSize
  if (compressionRatio <= CONFIG.performanceScores.compressionRatio.excellent) {
    metrics.compressionRatio = { score: 100, level: 'excellent' }
  } else if (compressionRatio <= CONFIG.performanceScores.compressionRatio.good) {
    metrics.compressionRatio = { score: 80, level: 'good' }
  } else if (compressionRatio <= CONFIG.performanceScores.compressionRatio.poor) {
    metrics.compressionRatio = { score: 60, level: 'poor' }
  } else {
    metrics.compressionRatio = { score: 40, level: 'critical' }
  }

  // Score the number of JS files
  const jsFiles = stats.assets.js.length
  if (jsFiles <= CONFIG.performanceScores.jsFiles.excellent) {
    metrics.jsFiles = { score: 100, level: 'excellent' }
  } else if (jsFiles <= CONFIG.performanceScores.jsFiles.good) {
    metrics.jsFiles = { score: 80, level: 'good' }
  } else if (jsFiles <= CONFIG.performanceScores.jsFiles.poor) {
    metrics.jsFiles = { score: 60, level: 'poor' }
  } else {
    metrics.jsFiles = { score: 40, level: 'critical' }
  }

  // CSS file count counting
  const cssFiles = stats.assets.css.length
  if (cssFiles <= CONFIG.performanceScores.cssFiles.excellent) {
    metrics.cssFiles = { score: 100, level: 'excellent' }
  } else if (cssFiles <= CONFIG.performanceScores.cssFiles.good) {
    metrics.cssFiles = { score: 80, level: 'good' }
  } else if (cssFiles <= CONFIG.performanceScores.cssFiles.poor) {
    metrics.cssFiles = { score: 60, level: 'poor' }
  } else {
    metrics.cssFiles = { score: 40, level: 'critical' }
  }

  // The total score is calculated
  totalScore =
    metrics.totalSize.score * CONFIG.weights.totalSize +
    metrics.compressionRatio.score * CONFIG.weights.compressionRatio +
    metrics.jsFiles.score * CONFIG.weights.jsFiles +
    metrics.cssFiles.score * CONFIG.weights.cssFiles

  stats.performance.score = Math.round(totalScore)
}

// Traverse the directory
async function walkDir(dir, relativePath = '') {
  try {
    const files = fs.readdirSync(dir)

    for (const file of files) {
      const fullPath = path.join(dir, file)
      const relPath = path.join(relativePath, file)
      const stat = fs.statSync(fullPath)

      if (stat.isDirectory()) {
        await walkDir(fullPath, relPath)
      } else {
        analyzeFile(fullPath, relPath, stat.size)
      }
    }
  } catch (error) {
    console.error(chalk.red(`Error traversing the directory ${dir}:`), error)
    throw error
  }
}

// Analyze individual files
function analyzeFile(fullPath, relativePath, size) {
  try {
    const ext = path.extname(relativePath).toLowerCase().substring(1) || 'unknown'

    // Update the total size
    stats.totalSize += size

    // Calculate the size of the gzip compression
    const content = fs.readFileSync(fullPath)
    const compressedSize = zlib.gzipSync(content).length
    stats.compressedSize += compressedSize

    // Update file type statistics
    if (!stats.fileTypes[ext]) {
      stats.fileTypes[ext] = { count: 0, size: 0 }
    }
    stats.fileTypes[ext].count++
    stats.fileTypes[ext].size += size

    // Statistical HTML pages
    if (ext === 'html') {
      stats.pages++
    }

    // Save asset information
    const fileInfo = { path: relativePath, size, compressedSize }

    if (ext === 'js') {
      stats.assets.js.push(fileInfo)
      if (size > CONFIG.sizeThreshold.js) {
        stats.largeFiles.push(fileInfo)
      }
    } else if (ext === 'css') {
      stats.assets.css.push(fileInfo)
      if (size > CONFIG.sizeThreshold.css) {
        stats.largeFiles.push(fileInfo)
      }
    } else if (['jpg', 'jpeg', 'png', 'gif', 'svg', 'webp'].includes(ext)) {
      stats.assets.images.push(fileInfo)
      if (size > CONFIG.sizeThreshold.image) {
        stats.largeFiles.push(fileInfo)
      }
    } else if (ext === 'html' && size > CONFIG.sizeThreshold.html) {
      stats.largeFiles.push(fileInfo)
    }
  } catch (error) {
    console.error(chalk.red(`There was an error analyzing the file ${fullPath}:`), error)
    throw error
  }
}

// Format the size
function formatSize(bytes) {
  if (bytes < 1024) return bytes + ' B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return (bytes / Math.pow(k, i)).toFixed(2) + ' ' + sizes[i]
}

// Provide optimization suggestions
function provideOptimizationTips(report) {
  console.log(chalk.cyan('\nOptimization suggestions:'))

  // Check the performance score
  if (report.performance.score < 60) {
    console.log(
      chalk.red('\nThe performance score is low, and the following issues need to be focused on:')
    )
  }

  // Check the large JS file
  if (report.assets.js.filter(f => f.size > CONFIG.sizeThreshold.js).length > 0) {
    console.log('- Consider splitting large JS files, using code splitting, or lazy loading')
    console.log('  - Use dynamic imports: import()')
    console.log('  - Configure code splitting at the route level')
    console.log('  - splitChunks optimization using webpack/vite')
  }

  // Check the big picture
  if (report.assets.images.filter(f => f.size > CONFIG.sizeThreshold.image).length > 0) {
    console.log('- Optimize for large images:')
    console.log('  - Use the WebP format instead of JPG/PNG')
    console.log('  - Use an appropriate image compression tool')
    console.log('  - Consider using responsive images')
    console.log('  - Implement lazy loading of images')
  }

  // Check the total resource size
  if (report.totalSize > CONFIG.performanceScores.totalSize.poor) {
    console.log('- The total size of the website is too large:')
    console.log('  - Remove unused dependencies')
    console.log('  - Optimized the introduction of third-party libraries')
    console.log('  - Use tree-shaking to reduce the packing volume')
  }

  // Check the compression ratio
  const compressionRatio = report.compressedSize / report.totalSize
  if (compressionRatio > CONFIG.performanceScores.compressionRatio.poor) {
    console.log('- The compression is not good:')
    console.log('  - Optimize the code structure to make it easier to compress')
    console.log('  - Remove duplicate code')
    console.log('  - Use a more efficient compression algorithm')
  }

  // Check the number of CSS files
  if (report.assets.css.length > CONFIG.performanceScores.cssFiles.poor) {
    console.log('- Too many CSS files:')
    console.log('  - Merge CSS files to reduce HTTP requests')
    console.log('  - Use CSS modularity')
    console.log('  - Remove unused CSS')
  }

  // Check the number of JS files
  if (report.assets.js.length > CONFIG.performanceScores.jsFiles.poor) {
    console.log('- Too many JS files:')
    console.log('  - Merge small JS files')
    console.log('  - Use code splitting')
    console.log('  - Optimized module import')
  }

  // Provide recommendations for performance optimization
  console.log(chalk.cyan('\nRecommendations for performance tuning:'))
  console.log('- Enable HTTP/2')
  console.log('- Configure the appropriate caching policy')
  console.log('- Use a CDN to accelerate static resources')
  console.log('- Implement resource preloading')
  console.log('- Optimize the critical rendering path')
}

// Run the analysis
analyze().catch(error => {
  console.error(chalk.red('There was an error in the analysis:'), error)
  process.exit(1)
})
