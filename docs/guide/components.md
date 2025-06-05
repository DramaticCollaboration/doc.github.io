---
title: Component
---

# Components

VuePress provides a powerful component system that allows you to use Vue components directly in your Markdown files. This guide will show you how to use and create components.

## Using Components

In VuePress, you can use Vue components directly in Markdown files. This allows you to easily create interactive documentation interfaces.

### Basic usage

To use components in Markdown, just use them as you would in a Vue template:

```view
<InfoCard>
  This is an information card component
</InfoCard>
```

### Component properties

You can pass properties just like in Vue:

```view
<InfoCard type="warning" title="注意">
  This is a warning message
</InfoCard>
```

## Create Components

You can create your own component by following these steps:

### Using component creation script

We provide a convenience script to create new components:

```bash
pnpm create:component MyComponent
```

This will create a new component file in the `components` directory.

### Component Types

When creating a component, you can choose from the following types:

1. Basic components
2. Functional Components
3. Presentation Components

Each type has its own specific purpose and template.

### Component Example

Here is an example of a basic component:

```view
<template>
  <div class="my-component">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  data() {
    return {
      message: "Hello from MyComponent!",
    }
  },
}
</script>

<style scoped>
.my-component {
  /* Style */
}
</style>
```

## Best Practices

### Naming Conventions

- Use PascalCase for component names
- The file name should be consistent with the component name
- UI components use the `UI` prefix

### document

Add appropriate documentation for your component:

```view
<template>
  <div class="my-demo-component">
    <!-- Component content -->
  </div>
</template>

<script>
/**
 * @description Demonstration component
 * @example
 * <MyDemoComponent />
 */
export default {
  name: "MyDemoComponent",
}
</script>
```

### Component Registration

Components are automatically registered and you can use them directly in Markdown.

## Related Resources

- [Vue.js component documentation](https://cn.vuejs.org/guide/components/registration.html)
- [VuePress Component Guide](https://v2.vuepress.vuejs.org/zh/guide/page.html#Component)

## Frequently Asked Questions

### URL path issues

Make sure all URL paths used in components are correct. For static resources, use relative or absolute paths.

### Style Isolation

Use `scoped` styles to ensure component styles don't affect other components:

```view
<style scoped>
/* Component style */
</style>
```
