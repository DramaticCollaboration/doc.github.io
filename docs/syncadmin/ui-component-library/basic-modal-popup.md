---
order: 4
---

# BasicModal popup

Encapsulate antv's modal component, expand drag, full screen, adaptive height and other functions

Code path [src/components/Modal](https://github.com/jeecgboot/jeecgboot-vue3/tree/master/src/components/Modal)

## Usage

**Since the code in the pop-up window is generally stored as a single-file component, it is also recommended to do so, so the examples are all in the form of single-file components.**

TIP

Remember `v-bind="$attrs"`to write the component used to pass the pop-up component `attribute`into `BasicModal`the component

```
// Modal.vue
<template>
  <BasicModal v-bind="$attrs" title="Modal Title" :helpMessage="['提示1', '提示2']">
    Modal Info.
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicModal } from '/@/components/Modal';
  export default defineComponent({
    components: { BasicModal },
    setup() {
      return {};
    },
  });
</script>

```

copy

**Page reference popup**

```
// Page.vue
<template>
  <div class="px-10">
    <Modal @register="register" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { useModal } from '/@/components/Modal';
  import Modal from './Modal.vue';
  export default defineComponent({
    components: { Modal },
    setup() {
      const [register, { openModal }] = useModal();
      return {
        register,
        openModal,
      };
    },
  });
</script>

```

copy

## useModal

For external component calls

**useModal** is used to operate components

```
const [register, { openModal, setModalProps }] = useModal();

```

copy

**register**

Register is used for registration `useModal`. If you need to use `useModal`the provided API, you must `register`pass it into the component `onRegister`.

The principle is actually very simple, that is, the Vue components communicate from child to parent, and `emit("register"，instance)`it is implemented internally.

At the same time, independent components need to `attrs`be bound to `BasicModal`it.

```
<template>
  <BasicModal v-bind="$attrs"></BasicModal>
</template>

```

copy

**openModal**

Used to open/close pop-up window

```
// true/false: 打开关闭弹窗
// data: 传递到子组件的数据
openModal(true, data);

```

copy

**closeModal**

To close the pop-up window

```
closeModal();

```

copy

**setModalProps**

Used to change the props parameters of the modal. Because the modal content is an independent component, it may be troublesome to change the props on the external page, so **setModalProps** is provided to facilitate changing the props of the internal modal.

[Props](https://vvbin.cn/doc-next/components/modal.html#Props) content can be seen below

```
setModalProps(props);

```

copy

## useModalInner

Used for independent Modal internal calls

### Usage

```
<template>
  <BasicModal
    v-bind="$attrs"
    @register="register"
    title="Modal Title"
    :helpMessage="['提示1', '提示2']"
  >
    <a-button type="primary" @click="closeModal" class="mr-2">从内部关闭弹窗</a-button>

    <a-button type="primary" @click="setModalProps">从内部修改title</a-button>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  export default defineComponent({
    components: { BasicModal },
    setup() {
      const [register, { closeModal, setModalProps }] = useModalInner();
      return {
        register,
        closeModal,
        setModalProps: () => {
          setModalProps({ title: 'Modal New Title' });
        },
      };
    },
  });
</script>

```

copy

**useModalInner** is used to operate independent components

```
const [register, { closeModal, setModalProps }] = useModalInner(callback);

```

copy

**callback**

type:`(data:any)=>void`

The callback function is used to receive the value passed by the second parameter of openModal

```
useModal((data: any) => {
  console.log(data);
});

```

copy

**closeModal**

To close the pop-up window

```
closeModal();

```

copy

**changeOkLoading**

Used to modify the loading state of the confirmation button

```
changeOkLoading(true);

```

copy

**changeLoading**

Used to modify the loading state of the modal

```
// true or false
changeLoading(true);

```

copy

**setModalProps**

Used to change the props parameters of the modal. Because the modal content is an independent component, it may be troublesome to change the props on the external page, so **setModalProps** is provided to facilitate changing the props of the internal modal.

[Props](https://vvbin.cn/doc-next/components/modal.html#Props) content can be seen below

## Props

TIP

In addition to the following parameters, props in the component library document are also supported. For details, please refer to [antv modal](https://2x.antdv.com/components/modal-cn/#API)

| Attributes          | type                | default value  | Optional Values | illustrate                                                                                                                                                                                                                                                                  |
| ------------------- | ------------------- | -------------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| title               | `string`            | \-             | \-              | modal title                                                                                                                                                                                                                                                                 |
| height              | `number`            | \-             | \-              | Fixed modal height (refers to the height of the content area, excluding the head and footer. If height and minHeight exist at the same time, only height takes effect. If the value of minHeight is greater than height, the final height will take the value of minHeight) |
| minHeight           | `number`            | \-             | \-              | Set the minimum height of the modal                                                                                                                                                                                                                                         |
| draggable           | `boolean`           | true           | true/false      | Whether to enable drag                                                                                                                                                                                                                                                      |
| useWrapper          | `boolean`           | true           | true/false      | Whether to enable adaptive height. When enabled, the content will adapt to the screen changes and a scroll bar will appear.                                                                                                                                                 |
| wrapperFooterOffset | `number`            | 0              | \-              | When it is turned on, if the height exceeds the screen height, the bottom and top will keep the same spacing. This parameter can be used to reduce the bottom spacing.                                                                                                      |
| canFullscreen       | `boolean`           | true           | true/false      | Is it possible to go full screen?                                                                                                                                                                                                                                           |
| defaultFullscreen   | `boolean`           | false          | true/false      | Default full screen                                                                                                                                                                                                                                                         |
| loading             | `boolean`           | false          | true/false      | Loading state                                                                                                                                                                                                                                                               |
| loadingTip          | `string`            | \-             | \-              | loading text                                                                                                                                                                                                                                                                |
| showCancelBtn       | `boolean`           | true           | true/false      | Show Close Button                                                                                                                                                                                                                                                           |
| showOkBtn           | `boolean`           | true           | true/false      | Show Confirm Button                                                                                                                                                                                                                                                         |
| helpMessage         | `string , string[]` | \-             | \-              | Tip text on the right side of the title                                                                                                                                                                                                                                     |
| centered            | `boolean`           | false          | true/false      | Whether to center the popup window                                                                                                                                                                                                                                          |
| cancelText          | `string`            | 'closure'      | \-              | Close button text                                                                                                                                                                                                                                                           |
| okText              | `string`            | 'keep'         | \-              | Confirm button text                                                                                                                                                                                                                                                         |
| closeFunc           | () => Promise       | Close Function | \-              | Execute before closing, if it returns true, it will be closed, otherwise it will not be closed                                                                                                                                                                              |

## Events

| event          | Callback parameters                  | illustrate                             |
| -------------- | ------------------------------------ | -------------------------------------- |
| ok             | `function(e)`                        | Click OK callback                      |
| cancel         | `function(e)`                        | Click to cancel the callback           |
| visible-change | `(visible:boolean)=>{}`              | Turn trigger on or off                 |
| comment-open   | `(visible:boolean, span:number)=>{}` | Comments open or close trigger`+3.6.4` |

## Slots

| name         | illustrate                                                                               |
| ------------ | ---------------------------------------------------------------------------------------- |
| default      | Default Region                                                                           |
| footer       | Bottom area (will replace the default button)                                            |
| insertFooter | The left side of the close button (valid when not using the footer slot)                 |
| centerFooter | Between the close button and the confirm button (valid when the footer slot is not used) |
| appendFooter | The right side of the confirmation button (valid when not using the footer slot)         |
