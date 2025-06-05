---
title: FAQ
---

# FAQ

This section collects common questions and answers when using VuePress document templates.

## Basic Questions

### Navigation link is inaccessible

**Issue**: Clicking on the links in the navigation bar (such as "Guide", "Configuration", etc.) does not work properly.

**Solution**:

- Make sure there is a `README.md` file in the directory corresponding to each navigation item
- Check if the `sidebar` configuration in the configuration file is correct
- Restart the development server for the changes to take effect

### Component not displayed

**Issue**: Custom components used in Markdown files are not showing up.

**Solution**:

- Make sure the component is in the `.vuepress/components` directory
- Make sure you use the correct component name (case sensitive)
- Check if the `registerComponentsPlugin` is configured correctly in the configuration file
- Restart the development server for the changes to take effect

### The image cannot be displayed

**Issue**: The added image does not appear on the page.

**Solution**:

- Make sure the images are placed in the `.vuepress/public` directory
- Use the correct image path, for example: `/images/example.png`
- When using relative paths, make sure the path is correct, for example: `../images/example.png`

### Plugin not working properly

**Issue**: An installed plugin does not work as expected.

**Solution**:

- Check if the plugin version is compatible with the VuePress version
- Make sure the plugin is registered correctly in the configuration file
- Check the console for any error messages
- Try clearing your cache and restarting your development server

## Configuration Issues

### Sidebar is not displayed

**Issue**: Sidebar is not showing or is showing incorrectly.

**Solution**:

- Check the `sidebar` configuration in the configuration file
- Ensure the directory structure is consistent with the configuration
- Restart the development server

### Style lost after deployment

**Problem**: Local development works fine, but the style is lost after deployment.

**Solution**:

- Make sure the `base` configuration sets the deployment path correctly
- Check that the build output contains all necessary resource files
- Confirm that the deployment server configuration is correct

### Search function not working

**Issue**: Built-in search or Algolia DocSearch not working.

**Solution**:

- For built-in search, make sure `searchPlugin` is configured correctly
- For Algolia DocSearch, confirm that the API key, application ID, and index name are correct
- Check the console for any error messages

## Getting Help

If your problem is not listed here, you can:

1. Check out the VuePress official documentation
2. Search or submit issues in [GitHub Issues](https://github.com/vuepress/core/issues)
3. Refer to [VuePress example project](https://github.com/vuepress/core/tree/main/packages/docs)

## Installation Issues

### Permission Error

**Problem**: EACCES permission error occurs when installing VuePress.

**Solution**: Avoid using sudo to install npm packages and set npm permissions correctly:

```bash
# Fix npm permissions
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

### Dependency package error

**Problem**: Dependency package errors occur during installation.

**Solution**: Try clearing your npm cache or using another package manager:

```bash
# Clear npm cache
npm cache clean --force

# Install using pnpm
pnpm install
```

Development Issues

### Hot Update

**Problem**: The page does not automatically refresh after modifying the file.

**Solution**:

1. Make sure you are using the correct development command `pnpm docs:dev`
2. Check whether it is within the monitoring range
3. Try clearing the cache and restarting

```bash
# Clear cache and start
pnpm docs:dev --clean-cache
```

### Custom Components

**Issue**: Registered custom Vue components are not displayed.

**Solution**: Make sure the component is imported and registered correctly:

```js
// .vuepress/client.js
import { defineClientConfig } from "vuepress/client"
import MyComponent from "./components/MyComponent.vue"

export default defineClientConfig({
  enhance({ app }) {
    app.component("MyComponent", MyComponent)
  },
})
```

## Build Issues

### Build Failure

**Problem**: Error when executing `pnpm docs:build`.

**Solution**:

1. Check for syntax errors
2. Check the configuration file
3. Check dependency version compatibility
4. Try clearing the cache and rebuilding

```bash
# Clear cache and build
pnpm docs:build --clean-cache
```

### Resource Path

**Issue**: Images or other resources do not display correctly after building.

**Solution**:

1. Use relative or absolute paths to reference resources
2. Place the resource files in the `.vuepress/public` directory

```md
<!-- Use resources in the public directory -->

![Logo](/images/logo.png)

<!-- Use absolute path -->

![Logo](/images/logo.png)

<!-- Use relative path -->

![Logo](/images/logo.png)
```

## Deployment Issues

### Blank page

**Problem**: The page is blank or resources are missing after deployment to the server.

**Solution**:

1. Check if `base` is configured correctly
2. Make sure all resource paths use the correct base path
3. Check that the server is configured to handle static files correctly

```js
// Set base correctly
export default {
  base: "/your-repo/", // If deployed to the project page of GitHub Pages
}
```

## More Resources

If you have other questions, you can refer to the following resources:

- [VuePress official documentation](https://v2.vuepress.vuejs.org/zh/)
- [GitHub Issues](https://github.com/vuepress/core/issues)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/vuepress)
- [VuePress Discussion Forum](https://github.com/vuepress/core/discussions)
