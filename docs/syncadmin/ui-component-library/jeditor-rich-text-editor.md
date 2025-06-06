---
order: 34
---

# JEditor Rich Text Editor✔

Rich text editor

## Component Parameters

| parameter      | type   | Required | default value | illustrate |
| -------------- | ------ | -------- | ------------- | ---------- |
| value(v-model) | string |          | ''            |            |
| disabled       | bool   |          | false         | Disable    |

> For more parameters and configurations, please refer to `TinyMCE`the official documentation: [https://www.tiny.cloud/docs/](https://www.tiny.cloud/docs/)  
> Chinese documentation: [http://tinymce.ax-z.cn/](http://tinymce.ax-z.cn/)

## Show results

![](https://lfs.k.topthink.com/lfs/8946a1b6a12e4c975cf3c80b2cbe3535532006f9929137447b381638d5806e80.dat)

## Usage Examples

```
const schemas: FormSchema[] = [
  {
    field: 'tinymce',
    component: 'JEditor',
    label: '富文本',
    defaultValue: 'defaultValue',
  },
]
```

copy
