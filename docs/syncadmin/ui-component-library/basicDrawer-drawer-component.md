---
order: 6
---

# BasicDrawer drawer component

Encapsulate `antv`the drawer component and expand functions such as drag, full screen, and adaptive height.

## Usage

**Since the internal code of the drawer is usually separated into separate files, it is recommended to develop it as a separate component, so the examples are explained in separate files.**

**Independent component code, used to write the content inside the component**

```
<template>
  <BasicDrawer v-bind="$attrs" title="Drawer Title" width="50%"> Drawer Info. </BasicDrawer>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicDrawer } from '/@/components/Drawer';
  export default defineComponent({
    components: { BasicDrawer },
  });
</script>

```

copy

**Page reference popup**

```
<template>
  <div>
    <Drawer @register="register" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Alert } from 'ant-design-vue';
  import { useDrawer } from '/@/components/Drawer';
  import Drawer from './Drawer.vue';

  export default defineComponent({
    components: { Drawer },
    setup() {
      const [register, { openDrawer }] = useDrawer();
      return {
        register,
        openDrawer,
      };
    },
  });
</script>

```

copy

## useDrawer

**useDrawer** is used to manipulate components

```
const [register, { openDrawer, setDrawerProps }] = useDrawer();

```

copy

**register**

Register is used for registration `useDrawer`. If you need to use `useDrawer`the provided API, you must `register`pass it into the component `onRegister`.

The principle is actually very simple, that is, the Vue components communicate from child to parent, and `emit("register"，instance)`it is implemented internally.

At the same time, the independent components need to `attrs`be bound to the Drawer.

```
<BasicDrawer v-bind="$attrs"> Drawer Info. </BasicDrawer>

```

copy

**openDrawer**

Used to open/close pop-up window

```
// true/false: 打开关闭弹窗
// data: 传递到子组件的数据
openDrawer(true, data);

```

copy

**closeDrawer**

To close the pop-up window

```
closeDrawer();

```

copy

**setDrawerProps**

Used to change the props parameters of the drawer. Because the drawer content is an independent component, it may be troublesome to change the props on the external page, so **setDrawerProps** is provided to facilitate changing the props of the internal drawer.

[Props](https://vvbin.cn/doc-next/components/drawer.html#Props) content can be seen below

```
setDrawerProps(props);

```

copy

## useDrawerInner

Used for independent Drawer internal calls

```
<template>
  <BasicDrawer v-bind="$attrs" @register="register" title="Drawer Title" width="50%">
    Drawer Info.
    <a-button type="primary" @click="closeDrawer">内部关闭drawer</a-button>
  </BasicDrawer>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
  export default defineComponent({
    components: { BasicDrawer },
    setup() {
      const [register, { closeDrawer }] = useDrawerInner();
      return { register, closeDrawer };
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

The callback function is used to receive the value passed by the second parameter of openDrawer

```
openDrawer((data: any) => {
  console.log(data);
});

```

copy

**closeDrawer**

For closing drawers

```
closeDrawer();

```

copy

**changeOkLoading**

Used to modify the loading state of the confirmation button

```
// true or false
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

**setDrawerProps**

Used to change the props parameter of the drawer. Because the modal content is an independent component, it may be troublesome to change the props on the external page, so **setDrawerProps** is provided to facilitate changing the props of the internal drawer.

[Props](https://vvbin.cn/doc-next/components/drawer.html#Props) content can be seen below

## Props

Reminder

In addition to the following parameters, props in the official documentation are also supported. For details, please refer to [antv drawer](https://www.antdv.com/components/drawer-cn)

| Attributes     | type                     | default value | Optional Values | illustrate                                                                  |
| -------------- | ------------------------ | ------------- | --------------- | --------------------------------------------------------------------------- |
| isDetail       | `boolean`                | `false`       | \-              | Whether it is details mode                                                  |
| loading        | `boolean`                | `false`       | \-              | Loading state                                                               |
| loadingText    | `string`                 | \`\`          | \-              | loading text                                                                |
| showDetailBack | `boolean`                | `true`        | \-              | IsDetail=true to display the back button?                                   |
| closeFunc      | `() => Promise<boolean>` | \-            | \-              | Customize the closing function, return `true`closed, otherwise do not close |
| showFooter     | `boolean`                | \-            | \-              | Whether to display the bottom                                               |
| footerHeight   | `number`                 | `60`          | \-              | Bottom area height                                                          |

## Events

| event          | Callback parameters       | illustrate                                           |
| -------------- | ------------------------- | ---------------------------------------------------- |
| close          | `(e)=>void`               | Click to close callback                              |
| visible-change | `(visible:boolean)=>void` | Triggered when the pop-up window is opened or closed |
| ok             | `(e)=>void`               | Click OK callback                                    |
