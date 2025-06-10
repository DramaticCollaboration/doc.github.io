---
order: 19
---

# JUpload upload component ✔

The JUpload component can upload files and images.

## Component Parameters

| parameter      | type           | Required | default value | illustrate                                                                                                                                                                             |
| -------------- | -------------- | -------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value(v-model) | string / array |          | ''            |                                                                                                                                                                                        |
| text           | string         |          | 'Upload'      | Button display text                                                                                                                                                                    |
| fileType       | string         |          | 'all'         | Define the type of uploaded file. Optional values: all, image. If image is passed, only images can be uploaded.                                                                        |
| bizPath        | string         |          | 'temp'        | Used to control the business path of file upload                                                                                                                                       |
| returnUrl      | bool           |          | true          | Whether to return the file URL. true: only return the file URL, multiple URLs are separated by commas; false: return json type. {fileName:"1.doc",filePath:"/temp/1.doc",fileSize:200} |
| multiple       | bool           |          | true          | Is it possible to select multiple items?                                                                                                                                               |
| maxCount       | int            |          | 0             | Maximum number of uploads, set to 0 for unlimited                                                                                                                                      |
| buttonVisible  | bool           |          | true          | Whether to display the upload button (only valid in all mode)                                                                                                                          |
| mover          | bool           |          | true          | Whether to display left and right movement buttons                                                                                                                                     |
| download       | bool           |          | true          | Whether to display the download button                                                                                                                                                 |
| removeConfirm  | bool           |          | false         | Whether to confirm twice when deleting                                                                                                                                                 |
| disabled       | bool           |          | false         | Disable                                                                                                                                                                                |
| beforeUpload   | function       |          |               | Pre-upload method, returns a promise object                                                                                                                                            |

> For more parameters, see: [Upload](https://2x.antdv.com/components/upload-cn/#API)

![](https://lfs.k.topthink.com/lfs/9c03ddca3b9b03e7f3840a70b3f548064f9c45a299b91c11019450dcb2068526.dat)

## Show results

![](https://lfs.k.topthink.com/lfs/44587abad32bcfc8329c137074fb24598243b57bc8de962908f9b64e632f2f46.dat)

## Usage Examples

```
const schemas: FormSchema[] = [
  {
    field: 'uploadFile',
    component: 'JUpload',
    helpMessage: '无限制上传',
    label: '上传文件',
  },
  {
    field: 'uploadFileMax',
    component: 'JUpload',
    helpMessage: '最多上传3个文件',
    label: '上传文件（3）',
    componentProps: { maxCount: 3 },
  },
  {
    field: 'uploadImage',
    component: 'JUpload',
    label: '上传图片',
    helpMessage: '无限制上传',
    componentProps: {
      fileType: UploadTypeEnum.image,
    },
  },
  {
    field: 'uploadImageMax',
    component: 'JUpload',
    label: '上传图片（1）',
    helpMessage: '最多上传1张图片',
    componentProps: {
      fileType: UploadTypeEnum.image,
      maxCount: 1,
    },
  },
]
```

copy
