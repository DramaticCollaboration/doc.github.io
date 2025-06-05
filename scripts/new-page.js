/**
 * Helper script for creating new documentation pages
 * Usage: npm run docs:new
 */

import fs from 'fs'
import path from 'path'
import readline from 'readline'

import chalk from 'chalk'

// Configuration constants
const CONFIG = {
  docsDir: path.resolve('docs'),
  sections: ['guide', 'config', 'api', 'faq', 'advanced'],
  templates: {
    normal: `# Page title

This is a normal page.

## Subtitle

content...
`,
    api: `# API name

## describe

A brief description of the API.

## Usage

\`\`\`js
// Example code
\`\`\`

## Parameters

| Parameter Name | Type | Default Value | Description |
| ----- | --- | ----- | ---- |
| param1 | String | - | Description of parameter 1 |

## Return value

Description of the return value.

## Example

\`\`\`js
// Example
\`\`\`
`,
    config: `# Configuration items

## describe

A brief description of the configuration item.

## type

\`\`\`ts
// Type definition
interface Config {
  // Attribute definition
}
\`\`\`

## default value

\`\`\`js
// Default configuration
\`\`\`

## Example

\`\`\`js
// Example
\`\`\`
`,
    guide: `# Guide title

## introduce

A brief description of this feature.

## Basic Usage

Description of basic usage.

\`\`\`js
// Basic usage example
\`\`\`

## Advanced usage

Description of more advanced usage.

## Best Practices

Best practices for using this feature.

## Frequently Asked Questions

Common problems and solutions.
`,
  },
}

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

/**
 * Make sure the directory exists
 * @param {string} dir - directory path
 */
function ensureDirectoryExists(dir) {
  try {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
  } catch (error) {
    console.error(chalk.red(`Failed to create directory ${dir}:`), error)
    throw error
  }
}

/**
 * Validate user input
 * @param {string} input - user input
 * @param {string} type - input type
 * @returns {string} validated input
 */
function validateInput(input, type) {
  const value = input.trim()
  if (!value) {
    throw new Error(`${type} cannot be empty`)
  }
  return value
}

/**
 * Create a new page
 */
async function createNewPage() {
  try {
    console.log('✨ Create a new documentation page')

    // 1. Select document type/directory
    const section = await new Promise((resolve, reject) => {
      rl.question(`Select document type (${CONFIG.sections.join('/')}): `, answer => {
        try {
          const section = validateInput(answer, 'document type').toLowerCase()
          if (!CONFIG.sections.includes(section)) {
            throw new Error(`Invalid document type. Please choose: ${CONFIG.sections.join(', ')}`)
          }
          resolve(section)
        } catch (error) {
          reject(error)
        }
      })
    })

    // 2. Enter the page name
    const pageName = await new Promise((resolve, reject) => {
      rl.question('Enter the page name (such as getting-started): ', answer => {
        try {
          const name = validateInput(answer, 'Page name').toLowerCase()
          resolve(name)
        } catch (error) {
          reject(error)
        }
      })
    })

    // 3. Enter the page title
    const pageTitle = await new Promise((resolve, reject) => {
      rl.question('Enter page title (such as Quick Start): ', answer => {
        try {
          const title = validateInput(answer, 'Page title')
          resolve(title)
        } catch (error) {
          reject(error)
        }
      })
    })

    // 4. Select template
    const templateType = await new Promise((resolve, reject) => {
      const choices = Object.keys(CONFIG.templates)
      rl.question(`Select template type (${choices.join('/')}): `, answer => {
        try {
          const type = validateInput(answer, 'Template type').toLowerCase()
          if (!choices.includes(type)) {
            throw new Error(`Invalid template type. Please choose: ${choices.join(', ')}`)
          }
          resolve(type)
        } catch (error) {
          reject(error)
        }
      })
    })

    // Build the file path
    const sectionDir = path.join(CONFIG.docsDir, section)
    ensureDirectoryExists(sectionDir)

    const filePath = path.join(sectionDir, `${pageName}.md`)

    // Check if the file already exists
    if (fs.existsSync(filePath)) {
      const overwrite = await new Promise(resolve => {
        rl.question('The file already exists, do you want to overwrite it? (y/n): ', answer => {
          resolve(answer.trim().toLowerCase() === 'y')
        })
      })

      if (!overwrite) {
        console.log('Operation canceled')
        rl.close()
        return
      }
    }

    // Process template content
    let content = CONFIG.templates[templateType]
    content = content.replace(/^# .*$/m, `# ${pageTitle}`)

    // Write to file
    fs.writeFileSync(filePath, content)
    console.log(`✅ Successfully created page: ${filePath}`)

    rl.close()
  } catch (error) {
    console.error(chalk.red('Failed to create page:'), error.message)
    rl.close()
    process.exit(1)
  }
}

// Start the process
createNewPage().catch(error => {
  console.error(chalk.red('Error occurred:'), error)
  process.exit(1)
})
