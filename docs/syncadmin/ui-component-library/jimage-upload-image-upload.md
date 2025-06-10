---
order: 20
---

# JImageUpload Image upload✔

The JImageUpload component can upload images.

## Component Parameters

| parameter      | type           | Required | default value  | illustrate                                                                                   |
| -------------- | -------------- | -------- | -------------- | -------------------------------------------------------------------------------------------- |
| value(v-model) | string / array |          | ''             |                                                                                              |
| text           | string         |          | 'Upload'       | Button display text                                                                          |
| listType       | string         |          | 'picture-card' | The built-in styles of the upload list support three basic styles `picture`and`picture-card` |
| bizPath        | string         |          | 'temp'         | Used to control the business path of file upload                                             |
| disabled       | bool           |          | false          | Disable                                                                                      |
| fileMax        | number         |          | 1              | Maximum upload quantity                                                                      |

## Show results

![](https://lfs.k.topthink.com/lfs/49342387d27e38150ee850a4ccb6c00d63e8ee4f4378089b4198b90ae472524d.dat)

## Usage Examples

```
const schemas: FormSchema[] = [
    {
      field: 'images',
      component: 'JImageUpload',
      label: '上传图片（1）',
      helpMessage: '最多上传1张图片',
      componentProps: {
        fileMax : 1,
      },
    },
    {
      field: 'images2',
      component: 'JImageUpload',
      label: '上传图片（picture）',
      helpMessage: '最多上传3张图片',
      componentProps: {
        listType : 'picture',
        fileMax : 3,
      }
    }
]
```

copy
