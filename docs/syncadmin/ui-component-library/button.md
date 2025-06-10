---
order: 8
---

# Button

Secondarily encapsulate the button component and use the same component name to replace the global `a-button`component

TIP

- The button does not need to be imported, it has been globally registered, and you `a-button`can use the label directly
- If it is a Tsx file, you need to import it manually

## Usage

```
<template>
  <a-button color="success">成功按钮</a-button>
  <a-button color="error">错误按钮</a-button>
  <a-button color="warning">警告按钮</a-button>
</template>

```

复制

## Props

**hint:**

Keep **the original functions of** [the anv design button component](https://www.antdv.com/components/button-cn) and extend the following properties

| Attributes | type                           | default value | illustrate                                                  |
| ---------- | ------------------------------ | ------------- | ----------------------------------------------------------- |
| color      | `'error','warning', 'success'` | \-            | The color of the button scene state color,                  |
| preIcon    | `string`                       | \-            | The icon before the button text, refer to Icon component    |
| postIcon   | `string`                       | \-            | The icon after the button text, refer to the Icon component |
| iconSize   | `number`                       | `14`          | Button icon size                                            |
