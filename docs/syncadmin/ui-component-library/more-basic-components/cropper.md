---
order: 26
---

# Cropper

Image cropping component

## CropperImage

Image cropping component

### Usage

```
<template>
  <CropperImage ref="refCropper" :src="img" @cropend="handleCropend" style="width: 40vw" />
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { CropperImage } from '/@/components/Cropper';
  import img from '/@/assets/images/header.jpg';

  export default defineComponent({
    components: {
      CropperImage,
    },
    setup() {
      const info = ref('');
      const cropperImg = ref('');

      function handleCropend({ imgBase64, imgInfo }) {
        info.value = imgInfo;
        cropperImg.value = imgBase64;
      }

      return {
        img,
        info,
        cropperImg,
        handleCropend,
      };
    },
  });
</script>
```

copy

### Props

| Attributes      | type      | default value    | illustrate                    |
| --------------- | --------- | ---------------- | ----------------------------- |
| src             | `string`  | \-               | Image Source                  |
| everything      | `string`  | \-               | Image alt                     |
| circled         | `boolean` | `false`          | Circular cropping frame       |
| realTimePreview | `boolean` | `true`           | Real-time trigger preview     |
| height          | `string`  | `360px`          | high                          |
| crossorigin     | `string`  | \-               | crossorigin                   |
| imageStyle      | `object`  | \`\`             | Picture Style                 |
| options         | `object`  | `DefaultOptions` | corpperjs configuration items |

#### DefaultOptions

```
{
  aspectRatio: 1,
  zoomable: true,
  zoomOnTouch: true,
  zoomOnWheel: true,
  cropBoxMovable: true,
  cropBoxResizable: true,
  toggleDragModeOnDblclick: true,
  autoCrop: true,
  background: true,
  highlight: true,
  center: true,
  responsive: true,
  restore: true,
  checkCrossOrigin: true,
  checkOrientation: true,
  scalable: true,
  modal: true,
  guides: true,
  movable: true,
  rotatable: true,
}
```

copy

## CropperAvatar

Avatar cropping component

### Usage

```
<template>
  <CropperAvatar :uploadApi="uploadApi" />
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { CropperAvatar } from '/@/components/Cropper';
  import { uploadApi } from '/@/api/sys/upload';

  export default defineComponent({
    components: {
      CropperAvatar,
    },
  });
</script>
```

copy

### Props

| Attributes | type                                              | default value | illustrate                       | Version |
| ---------- | ------------------------------------------------- | ------------- | -------------------------------- | ------- |
| width      | `string,number`                                   | `200px`       | Image Source                     |         |
| uploadApi  | `({ file: Blob, name: string }) => Promise<void>` | \-            | Image upload interface           |         |
| value      | `String`                                          | \-            | Current avatar address (v-model) | 2.5.3   |
| showBtn    | `Boolean`                                         | true          | Whether to display the button    | 2.5.3   |
| btnText    | `String`                                          | \-            | Button copy                      | 2.5.3   |
| btnProps   | `ButtonProps`                                     | \-            | Other properties of the button   | 2.5.3   |

### Events

| name   | parameter       | illustrate                                    | Version |
| ------ | --------------- | --------------------------------------------- | ------- |
| change | `value: String` | Triggered when the avatar upload is completed | 2.5.3   |

### Methods

| name       | definition | illustrate         | Version |
| ---------- | ---------- | ------------------ | ------- |
| openModal  | `()=>void` | Open Upload Modal  | 2.5.3   |
| closeModal | `()=>void` | Close Upload Modal | 2.5.3   |
