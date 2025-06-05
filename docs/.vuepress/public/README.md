# Static Resources

This directory is used to store static resources, such as images, fonts, style sheets, etc.

## Directory Structure

- `images/` - Image resources
- `fonts/` - font resources
- `styles/` - additional CSS files
- `js/` - additional JavaScript files

## Usage

When referencing static resources in a Markdown file, the path should start with `/`, indicating that it is relative to the `public` directory.

For example:

```markdown
![Logo](.vuepress/public/images/logo-light.png)
```

instead of:

```markdown
![Logo](../public/images/logo.png)
```
