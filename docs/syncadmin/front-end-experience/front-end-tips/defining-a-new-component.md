---
order: 3
---

# Defining a new component

## 1\. Write component code

> Example: Encapsulate an input box control with a customizable prefix, component

```
<template>
  <a-input v-bind="getBindValue" v-model:value="showText" @input="backValue" />
</template>

<script lang="ts">
  import { defineComponent, ref, unref, watch, computed } from 'vue';
  import { useAttrs } from '/@/hooks/core/useAttrs';
  import { propTypes } from '/@/utils/propTypes';
  import { omit } from 'lodash-es';

  export default defineComponent({
    name: 'JPrefixInput',
    props: {
      value: propTypes.string.def(''),
      prefixStr: propTypes.string.def(''),
      placeholder: propTypes.string.def(''),
    },
    emits: ['change', 'update:value'],
    setup(props, { emit }) {
      //属性
      const attrs = useAttrs();
      //表单显示文本值
      const showText = ref('');
      //组件绑定属性
      const getBindValue = computed(() => {
        return omit(Object.assign({}, unref(props), unref(attrs)), ['value']);
      });
      //监听value变化
      watch(
        () => props.value,
        () => {
          initVal();
        },
        { immediate: true }
      );

      /**
       * 初始化文本值
       */
      function initVal() {
        if (!props.value) {
          showText.value = '';
        } else {
          let text = props.value;
          showText.value = text ? text.replace(props.prefixStr, '') : text;
        }
      }

      /**
       * 返回文本值
       */
      function backValue(e) {
        let text = e?.target?.value ?? '';
        if (props.prefixStr && text) {
          text = props.prefixStr + text;
        }
        emit('change', text);
        emit('update:value', text);
      }

      return { showText, attrs, getBindValue, backValue };
    },
  });
</script>

<style scoped></style>
```

copy

## 2\. Define types and register components

### 2.1 Registering Components

> `src/components/Form/src/componentMap.ts`Register the encapsulated JPrefixInput component in

```
import JPrefixInput from './jeecg/components/JPrefixInput.vue';
 //...忽略
componentMap.set('JPrefixInput', JPrefixInput);
```

copy

### 2.2 Defining component types

> Define `src/components/Form/src/types/index.ts` the JPrefixInput component type in order to set it in the form configuration

```
export type ComponentType =
 // ...忽略
 | 'JPrefixInput'；

```

copy

## 3\. Use of test components

### 3.1 Configure and use in the form

```
 //在表单中使用JPrefixInput组件
 {
    field: 'name',
    //2.2类型定义后，这里可以设置，不然会报错
    component: 'JPrefixInput',
    label: '前缀设置组件',
    componentProps: {
    //组件传参，设置前缀为 '姓名: '
      prefixStr: '姓名: ',
    },
    colProps: {
      span: 12,
    },
  },
  {
    field: 'name',
    component: 'JEllipsis',
    label: '输入值',
    colProps: { span: 12 },
  },
```

copy

### 3.1 Page effect:

![](https://lfs.k.topthink.com/lfs/31fa38345187722d238098c8b2705262f6a19edd5143df88899f1fd094a7ac07.dat)
