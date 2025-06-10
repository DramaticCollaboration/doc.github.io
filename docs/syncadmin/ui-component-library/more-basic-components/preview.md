---
order: 28
---

# Preview

Make the image preview component functional. It is convenient to create components through functions.

## Usage

```
<template>
  <div class="p-4">
    <Alert message="有预览图" type="info" />
    <div class="flex justify-center mt-4">
      <img :src="img" v-for="img in imgList" :key="img" class="mr-2" @click="handleClick(img)" />
    </div>
    <Alert message="无预览图" type="info" />
    <a-button @click="handlePreview" type="primary" class="mt-4">预览图片</a-button>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Alert } from 'ant-design-vue';
  import { createImgPreview } from '/@/components/Preview/index';
  const imgList: string[] = [
    'https://picsum.photos/id/66/346/216',
    'https://picsum.photos/id/67/346/216',
    'https://picsum.photos/id/68/346/216',
  ];
  export default defineComponent({
    components: { Alert },
    setup() {
      function handleClick(img: string) {
        createImgPreview({ imageList: [img] });
      }

      function handlePreview() {
        createImgPreview({ imageList: imgList });
      }
      return { imgList, handleClick, handlePreview };
    },
  });
</script>
```

copy

## createImgPreview

### Parameters/Options

| Attributes    | type                                                              | default value | Optional Values | illustrate                                                                                                   |
| ------------- | ----------------------------------------------------------------- | ------------- | --------------- | ------------------------------------------------------------------------------------------------------------ |
| imgList       | `string[]`                                                        | \-            | \-              | Picture list                                                                                                 |
| index         | `number`                                                          | 0             | \-              | Image index for initial preview                                                                              |
| scaleStep     | `number`                                                          | \-            | \-              | The zoom step value (the amount of zoom each time). The default is automatic (10% of the current zoom value) |
| defaultWidth  | `number`                                                          | \-            | \-              | Default width (in px). When this value is provided, all images will be initially scaled to this width        |
| maskClosable  | `boolean`                                                         | false         | `true/false`    | Whether to automatically close the preview when clicking the mask                                            |
| rememberState | `boolean`                                                         | false         | `true/false`    | Whether to remember the zoom status of each image                                                            |
| onImgLoad     | `({ index: number, url: string, dom: HTMLImageElement }) => void` | \-            | \-              | Callback function when the image is loaded successfully                                                      |
| onImgError    | `({ index: number, url: string, dom: HTMLImageElement }) => void` | \-            | \-              | Callback function when image loading fails                                                                   |

### Return value/PreviewActions

Can be used to control the current preview state

```
interface PreviewActions {
  // 重置状态
  resume: () => void;
  // 关闭预览
  close: () => void;
  // 显示前一张
  prev: () => void;
  // 显示后一张
  next: () => void;
  // 设置缩放比例(针对当前图片)
  setScale: (scale: number) => void;
  // 设置旋转角度(针对当前图片)
  setRotate: (rotate: number) => void;
}
```

copy
