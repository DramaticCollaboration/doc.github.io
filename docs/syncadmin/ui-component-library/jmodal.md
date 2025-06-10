---
order: 41
---

# JModal

> JModal: native a-modal encapsulation, supports all features of a-modal

## Parameter configuration

| parameter         | type                    | Required     | illustrate                                                    |
| ----------------- | ----------------------- | ------------ | ------------------------------------------------------------- |
| fullscreen        | boolean                 | Not required | Whether to use full screen by default                         |
| canFullscreen     | boolean                 | Not required | Whether to display the full screen button                     |
| afterClose        | function                | Not required | Modal callback after it is completely closed                  |
| bodyStyle         | object                  | Not required | Modal body style                                              |
| cancelButtonProps | ButtonProps             | Not required | cancel button props                                           |
| centered          | boolean                 | Not required | Display Modal vertically in the center                        |
| closable          | boolean                 | Not required | Whether to display the close button in the upper right corner |
| closeIcon         | slot                    | Not required | Custom close icon                                             |
| confirmLoading    | boolean                 | Not required | Confirm button loading                                        |
| destroyOnClose    | boolean                 | Not required | Destroy the sub-elements in Modal when closing                |
| footer            | string                  | slot         | Not required                                                  |
| forceRender       | boolean                 | Not required | Force rendering Modal                                         |
| getContainer      | (instance): HTMLElement | Not required | Specify the HTML node where the Modal is mounted              |
| keyboard          | boolean                 | Not required | Whether to support keyboard esc close                         |
| mask              | boolean                 | Not required | Whether to display the mask                                   |
| maskClosable      | boolean                 | Not required | Click on the mask to allow closing                            |
| maskStyle         | object                  | Not required | Mask Style                                                    |
| okButtonProps     | ButtonProps             | Not required | ok button props                                               |
| okText            | string                  | slot         | Not required                                                  |
| cancelText        | string                  | slot         | Not required                                                  |
| okType            | string                  | Not required | Confirm button type                                           |
| title             | string                  | Not required | title                                                         |
| open              | boolean                 | Not required | Is the dialog box visible?                                    |
| width             | string                  | number       | Not required                                                  |
| wrapClassName     | string                  | Not required | The class name of the dialog's outer container                |

For more property events, see [Modal](https://www.antdv.com/components/modal-cn#api)

## Show results

![](https://lfs.k.topthink.com/lfs/bb14e97d40c9118845cdad73c8c089ad5183de7c842fafc13f896068c67f1d4c.dat)

## Usage Examples

```
<template>
  <JModal :title="title" :width="width" v-model:open="visible" @ok="handleOk" :okButtonProps="{ class: { 'jee-hidden': disableSubmit } }" @cancel="handleCancel" cancelText="关闭">
  </JModal>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import JModal from '/@/components/Modal/src/JModal/JModal.vue';

  const title = ref<string>('');
  const width = ref<number>(800);
  const visible = ref<boolean>(false);
  const disableSubmit = ref<boolean>(false);

  /**
   * 确定按钮点击事件
   */
  function handleOk() {}

  /**
   * 取消按钮回调事件
   */
  function handleCancel() {
    visible.value = false;
  }
</script>
```

copy
