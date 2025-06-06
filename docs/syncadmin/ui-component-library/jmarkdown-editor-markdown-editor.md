---
order: 35
---

# JMarkdownEditor Markdown editor ✔

Markdown Editor

## Component Parameters

| parameter      | type   | Required | default value | illustrate |
| -------------- | ------ | -------- | ------------- | ---------- |
| value(v-model) | string |          | ''            |            |
| disabled       | bool   |          | false         | Disable    |

> For more parameters and configurations, please refer to `Vditor`the official documentation: [https://b3log.org/vditor/](https://b3log.org/vditor/)

## Show results

![](https://lfs.k.topthink.com/lfs/0db9019cbc52c00f101d3705d7a637612b763e92dffc037165c949ed196b4fe5.dat)

## Usage Examples

```
const schemas: FormSchema[] = [
  {
    field: 'markdown',
    component: 'JMarkdownEditor',
    label: 'Markdown',
    defaultValue: '# 张三',
    componentProps: {
      height: 300,
    },
  },
]
```

copy
