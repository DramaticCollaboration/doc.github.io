---
title: CLI Commands
---

Command Line Interface

VuePress provides a command line interface (CLI) that can be used to develop and build documentation sites.

## Basic usage

### Global Installation

If you have VuePress installed globally, you can use the `vuepress` command:

```bash
# Install
npm install -g vuepress

# Display help information
vuepress --help

# Display version information
vuepress --version
```

### Local Installation

The more recommended way is to install VuePress locally in your project and then use it through npm scripts:

```bash
# Install
npm install -D vuepress

# Add scripts to package.json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}

# Start the development server
npm run docs:dev

# Build static files
npm run docs:build
```

## Order

VuePress CLI provides several commands:

### Development Commands

Start a development server for local development.

```bash
# Basic usage
vuepress dev [sourceDir]

# Example
vuepress dev docs
```

#### Development command options

- `-c, --config <config>` - set the configuration file path
- `-p, --port <port>` - set the port number
- `-t, --temp <temp>` - set temporary file directory
- `-c, --cache <cache>` - set cache directory
- `--host <host>` - set the hostname
- `--open` - open the browser after starting the server
- `--debug` - Enable debug mode
- `--no-cache` - disable caching
- `--clean-cache` - clear the cache before starting

### Build Commands

Build a static site.

```bash
# Basic usage
vuepress build [sourceDir]

# Example
vuepress build docs
```

#### Build command options

- `-c, --config <config>` - set the configuration file path
- `-d, --dest <dest>` - set output directory
- `-t, --temp <temp>` - set temporary file directory
- `-c, --cache <cache>` - set cache directory
- `--debug` - Enable debug mode
- `--no-cache` - disable caching
- `--clean-cache` - clear the cache before building

### Information Commands

Displays environment information.

```bash
vuepress info
```

## Example

Development Mode

Start the development server and specify the source directory:

```bash
# Start the development server
vuepress dev docs

# Specify the port number
vuepress dev docs --port 8080

# Clear the cache before development
vuepress dev docs --clean-cache

# Automatically open the browser after startup
vuepress dev docs --open
```

### Build Mode

Build a static site:

```bash
# Basic build
vuepress build docs

# Specify the output directory
vuepress build docs --dest dist

# Clear cache before building
vuepress build docs --clean-cache
```

### Configuration File

To specify a custom configuration file:

```bash
# Using a custom configuration file
vuepress dev docs --config my-config.js

# Using a custom configuration file when building
vuepress build docs --config my-config.js
```

## Configuration

In addition to passing command line arguments, you can also set CLI options via configuration files or environment variables:

### Configuration File

Set in the VuePress configuration file:

```js
export default {
  // Site configuration
  port: 8080,
  open: true,

  // Other configuration
}
```

### Environment variables

Setting via environment variables:

```bash
# Set the port number
VUEPRESS_PORT=8080 vuepress dev docs

# Set the output directory
VUEPRESS_DEST=dist vuepress build docs
```

## Reference Links

- [VuePress Official CLI Reference](https://v2.vuepress.vuejs.org/reference/cli.html)
