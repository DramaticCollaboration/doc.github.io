/**
 * Auxiliary script for creating Vue components
 * Usage: node scripts/create-component.js
 */

import fs from 'fs'
import path from 'path'
import readline from 'readline'

import chalk from 'chalk'

// Configuration constants
const CONFIG = {
  docsDir: path.resolve('docs'),
  componentsDir: path.join(path.resolve('docs'), '.vuepress/components'),
  templates: {
    basic: `<template>
  <div class="component-container">
    <h2>{{ title }}</h2>
    <div class="component-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: '$ComponentName',
  props: {
    title: {
      type: String,
      default: 'Component title'
    }
  }
}
</script>

<style scoped>
.component-container {
  border: 1px solid var(--c-border);
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
}

.component-content {
  margin-top: 12px;
}
</style>
`,
    functional: `<template>
  <div class="functional-component">
    <div class="component-header">
      <h3>{{ title }}</h3>
      <span v-if="showClose" class="close-btn" @click="$emit('close')">&times;</span>
    </div>
    <div class="component-body">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" class="component-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: '$ComponentName',
  props: {
    title: {
      type: String,
      required: true
    },
    showClose: {
      type: Boolean,
      default: false
    }
  },
  emits: ['close']
}
</script>

<style scoped>
.functional-component {
  border: 1px solid var(--c-border);
  border-radius: 8px;
  overflow: hidden;
  margin: 16px 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.component-header {
  background-color: var(--c-brand-light);
  color: var(--c-white);
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.component-header h3 {
  margin: 0;
  font-size: 1.1rem;
}

.close-btn {
  cursor: pointer;
  font-size: 1.4rem;
  line-height: 1;
}

.component-body {
  padding: 16px;
}

.component-footer {
  padding: 12px 16px;
  background-color: var(--c-bg-lighter);
  border-top: 1px solid var(--c-border);
}
</style>
`,
    demo: `<template>
  <div class="demo-component">
    <div class="demo-header">
      <h3>{{ title }}</h3>
      <div class="demo-actions">
        <button v-if="showCode" class="toggle-code" @click="codeVisible = !codeVisible">
          {{ codeVisible ? 'Hide code' : 'View code' }}
        </button>
      </div>
    </div>

    <div class="demo-preview">
      <slot></slot>
    </div>

    <div v-if="showCode" class="demo-code" :class="{ 'code-visible': codeVisible }">
      <slot name="code"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: '$ComponentName',
  props: {
    title: {
      type: String,
      default: 'Example'
    },
    showCode: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      codeVisible: false
    }
  }
}
</script>

<style scoped>
.demo-component {
  border: 1px solid var(--c-border);
  border-radius: 8px;
  overflow: hidden;
  margin: 24px 0;
}

.demo-header {
  padding: 12px 16px;
  background-color: var(--c-bg-lighter);
  border-bottom: 1px solid var(--c-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.demo-header h3 {
  margin: 0;
  font-size: 1.1rem;
}

.demo-preview {
  padding: 20px;
  background-color: var(--c-bg);
}

.demo-code {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  background-color: var(--c-bg);
  border-top: 1px solid var(--c-border);
}

.code-visible {
  max-height: 800px;
}

.toggle-code {
  background-color: var(--c-brand);
  color: white;
  border: none;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
}

.toggle-code:hover {
  background-color: var(--c-brand-light);
}
</style>
`,
  },
  componentNameRegex: /^[a-z0-9]+(-[a-z0-9]+)*$/,
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
 * Convert component name format
 * For example: my-component -> MyComponent
 * @param {string} kebabCase - a string in kebab-case format
 * @returns {string} a string in PascalCase format
 */
function toPascalCase(kebabCase) {
  return kebabCase
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
}

/**
 * Verify component name
 * @param {string} name - component name
 * @returns {string} the component name after verification
 * @throws {Error} if the name is invalid
 */
function validateComponentName(name) {
  const trimmedName = name.trim().toLowerCase()
  if (!trimmedName || !CONFIG.componentNameRegex.test(trimmedName)) {
    throw new Error('Invalid component name. Please use kebab-case format (such as info-box)')
  }
  return trimmedName
}

/**
 * Create a new component
 */
async function createNewComponent() {
  try {
    console.log('✨ Create a new Vue component')

    // Make sure the component directory exists
    ensureDirectoryExists(CONFIG.componentsDir)

    // 1. Enter the component name
    const componentName = await new Promise((resolve, reject) => {
      rl.question('Enter component name (use kebab-case, such as info-box): ', answer => {
        try {
          const name = validateComponentName(answer)
          resolve(name)
        } catch (error) {
          reject(error)
        }
      })
    })

    // Convert to PascalCase (standard naming for Vue components)
    const pascalCaseName = toPascalCase(componentName)

    // 2. Select template type
    const templateType = await new Promise((resolve, reject) => {
      const choices = Object.keys(CONFIG.templates)
      rl.question(`Select component template type (${choices.join('/')}): `, answer => {
        try {
          const type = answer.trim().toLowerCase()
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
    const filePath = path.join(CONFIG.componentsDir, `${pascalCaseName}.vue`)

    // Check if the file already exists
    if (fs.existsSync(filePath)) {
      const overwrite = await new Promise(resolve => {
        rl.question('The component already exists, do you want to overwrite it? (y/n): ', answer => {
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
    content = content.replace(/\$ComponentName/g, pascalCaseName)

    // Write to file
    fs.writeFileSync(filePath, content)
    console.log(`✅ Successfully created component: ${filePath}`)

    // Tips on how to register components
    console.log('\nTo use this component, make sure to register it in .vuepress/config.js:')
    console.log(`
Find the plugins configuration in the config.js file and add or update the register-components plugin:

import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from 'vuepress/utils'

const __dirname = getDirname(import.meta.url)

export default {
  // ...other configuration
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
}

Then use it in Markdown:

<${pascalCaseName} title="Custom title">
  Component Contents
</${pascalCaseName}>
`)

    rl.close()
  } catch (error) {
    console.error(chalk.red('Failed to create component:'), error.message)
    rl.close()
    process.exit(1)
  }
}

// Start the process
createNewComponent().catch(error => {
  console.error(chalk.red('Error occurred:'), error)
  process.exit(1)
})
