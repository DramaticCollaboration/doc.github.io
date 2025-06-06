---
order: 16
---

# Upload

File upload component

## Usage

```
<template>
  <BasicUpload :maxSize="20" :maxNumber="10" @change="handleChange" :api="uploadApi" />
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicUpload } from '/@/components/Upload';
  import { uploadApi } from '/@/api/sys/upload';

  export default defineComponent({
    components: { BasicUpload },
    setup() {
      return {
        uploadApi,
        handleChange: (list: string[]) => {
          createMessage.info(`已上传文件${JSON.stringify(list)}`);
        },
      };
    },
  });
</script>
```

copy

## Config

`.env.development`and `.env.production`configure the file upload address for development and production

```
# .env.development

VITE_PROXY=[["/upload","http://localhost:3001/upload"]]

# 如果没有跨域问题，则直接使用真实上传地址
VITE_GLOB_UPLOAD_URL=/upload

# .env.production
VITE_GLOB_UPLOAD_URL=/upload

```

copy

## Props

| Attributes        | type       | default value | Optional Values | illustrate                                                                                                                                                        |
| ----------------- | ---------- | ------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value             | `string[]` | \-            | \-              | List of uploaded files, supports v-model                                                                                                                          |
| showPreviewNumber | `boolean`  | true          | \-              | Whether to display the preview quantity                                                                                                                           |
| emptyHidePreview  | `boolean`  | false         | \-              | Whether to hide the preview when no file is uploaded                                                                                                              |
| helpText          | `string`   | \-            | \-              | Help Text                                                                                                                                                         |
| maxSize           | `number`   | 2             | \-              | Maximum size of a single file, in M                                                                                                                               |
| maxNumber         | `number`   | Infinity      | \-              | Maximum number of uploads, Infinity has no limit                                                                                                                  |
| accept            | `string[]` | \-            | \-              | To restrict the upload format, you can use the file extension (with optional period) or MIME string. For example`['.doc,','docx','application/msword','image/*']` |
| multiple          | `boolean`  | \-            | \-              | Enable multiple file uploads                                                                                                                                      |
| uploadParams      | `any`      | \-            | \-              | Upload parameters                                                                                                                                                 |
| api               | `Fn`       | \-            | \-              | Upload interface, which is the interface configured above                                                                                                         |

## Events

| event          | Callback parameters  | return value | illustrate                                   | Version |
| -------------- | -------------------- | ------------ | -------------------------------------------- | ------- |
| change         | `(fileList)=>void`   |              | File list content change trigger event       |         |
| delete         | `(record)=>void`     |              | Event for deleting a file in the upload list |         |
| preview-delete | `(url:string)=>void` |              | Event of deleting a file in the preview list | 2.5.3   |
