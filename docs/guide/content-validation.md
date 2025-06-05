---
title: Content Verification
---

# Document content verification

This project provides powerful document content verification capabilities to help you maintain the quality and consistency of your documents.

## Functional Overview

The content validation script `validate-content.js` can check the following:

- **Link Verification**: Check the validity of internal and external links
- **Image Check**: Make sure all images are present and have appropriate alternative text
- **Frontmatter validation**: Check required metadata fields
- **Title structure check**: Make sure the title hierarchy is reasonable and there is no duplication
- **Spell Check**: Verify correct spelling and capitalization of common terms
- **Anchor validation**: Ensure that the references inside the document are valid

## Usage

You can run content verification with the following command:

```bash
# Validate all documents
npm run docs:validate

# Or use shorthand
npm run validate
```

## Configuration options

The validation script provides a variety of configuration options that can be customized according to project needs. The main configurations include:

### Spell check dictionary

The script has built-in correction lists for common English and Chinese terms. You can add or modify correction rules by editing the `SPELLING_CORRECTIONS` and `CHINESE_SPELLING_CORRECTIONS` objects in `scripts/validate-content.js`.

```js
// Example: Add a new spelling rule
const SPELLING_CORRECTIONS = {
  // Existing rules
  javascript: "JavaScript",
  // Add custom rules
  react: "React",
  nextjs: "Next.js",
}
```

### Link Verification Options

External link validation supports the following configurations:

- **Number of concurrent requests**: Control the number of connections that can be verified simultaneously through `MAX_CONCURRENT_REQUESTS`
- **Request timeout**: Set the timeout (in milliseconds) for the connection check via `REQUEST_TIMEOUT`

```js
// Example: Modify link verification configuration
const MAX_CONCURRENT_REQUESTS = 10 // Default is 5
const REQUEST_TIMEOUT = 10000 // Default is 5000ms
```

## Output description

The validation script will output two types of messages:

- **Errors**: Serious problems that must be fixed, such as broken links or missing images
- **Warnings**: issues that are suggested to be fixed but will not cause the build to fail, such as spelling suggestions or possible improvements

Sample output:

```
=== Verification Result===

Error (1):
- docs/guide/getting-started.md: Link broken: ../api/missing-page.md

Warning(2):
- docs/guide/introduction.md:15: Possible typo: "javascript" should be "JavaScript"
- docs/config/options.md: Image missing alt text: ./images/config-diagram.png
```

## Best Practices

To maintain documentation quality, we recommend the following best practices:

1. **Run validation before submit**: Make sure all changes pass validation before submitting
2. **Periodically validate the entire document**: prevent external links from becoming invalid over time
3. **Pay attention to warning messages**: Even warnings should be resolved as much as possible to improve the quality of the document
4. **Add alt text to all images**: Improve accessibility and SEO

## Extended validation rules

You can extend the validation rules according to your project needs. For example, to add validation for a specific format:

```js
// Example: Adding custom validation rules
function validateCustomFormat(content, filePath) {
  // Implement custom validation logic
  const customRegex = /specific format/g
  if (customRegex.test(content)) {
    warnings.push(`${filePath}: custom format problem found`)
  }
}

// Then call in the main verification function
validateCustomFormat(content, relativePath)
```

## Common Problems Troubleshooting

If you have problems running validation, check:

1. Is the Node.js version compatible?
2. Are all necessary dependencies installed?
3. Network connection status (network connection is required for external link verification)
4. Is there a firewall or proxy restricting external requests?
