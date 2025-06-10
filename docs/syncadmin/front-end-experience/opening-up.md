---
order: 3
---

# Opening up

**Tip:** Here we will explain some commonly used code snippets to help you get started quickly.

- There is a big difference between vue3 and vue2, and the design concepts are completely different. vue2 is based on template thinking, while vue3 focuses on JS (Reactivity API+TS).
- For people who are familiar with HTML, Vue2 will be easy to use; but for Vue3, if you don’t have a certain foundation in ES6, it will be very difficult.

### 1\. Execution of deconstructed functions

![](https://lfs.k.topthink.com/lfs/58fbd3c405356ce0b2dd4c29d9971c74475cb04a9cc4e475e65b014c5031dc09.dat)  
Code interpretation:

> The meaning of this code is `goPage`a `useMessageHref`function defined in a function (that is, a function in a function).  
> The sub-function defined in a function is just a definition and will not run. If it runs, the sub-function needs to be called manually to execute.  
> ![](https://lfs.k.topthink.com/lfs/7113597c6e3fea69d97e84d7d73ac01815840cb0b91eda5a79d436220b00c2dc.dat)

Note: This writing method is the basic usage in the vue3 project. It is very important to understand the usage principle of this function.

### 2\. ES6 deconstruction principle knowledge points

```
//数组解构（[]）
const [registerModal, { openModal }] = useModal();
//对象解构（{}）
const { goPage, registerHistoryModal, registerTaskModal, registerDesignFormModal, isDesignFormComment  } = useMessageHref(emit, props);
```

copy

![](https://lfs.k.topthink.com/lfs/68ef64131542485eea8bc788d7f00d6233a795a3e04f21be0dd0d5a7f7a35ce9.dat)

### 3\. UseModal() in the project uses array deconstruction

```
//弹窗modal为什么采用数组解构呢？
 const [registerModal, { openModal }] = useModal();
```

copy

Let's take a look at the definition of the useModal() function and find that the return value type is an array  
![](https://lfs.k.topthink.com/lfs/82aaf6e24cd6441136874ab9e82ec419c5d5b83e33fcb67a7ec208ee5b06173b.dat)

### 4\. BasicForm encapsulation is too harsh

##### Solution 1: Customize non-existent controls through slots

Reference code: src/views/demo/form/index.vue  
Reference route: [http://localhost:3100/comp/form/basic](http://localhost:3100/comp/form/basic)

Field customization

```
    {
      field: 'selectA',
      component: 'Select',
      label: '互斥SelectA',
      slot: 'selectA',
      defaultValue: [],
      colProps: {
        span: 8,
      },
    },
```

copy

Slot Code

```
<template #selectA="{ model, field }">
  <a-select :options="optionsA" mode="multiple" v-model:value="model[field]" @change="valueSelectA = model[field]" allowClear />
</template>
```

copy

##### Solution 2: Use native writing a-form

> The project supports BasicForm without encapsulation, and provides examples and corresponding code generation.

Reference example: src/views/demo/jeecg/Native/one/components/OneNativeForm.vue  
Reference route: [http://localhost:3100/one/OneNativeList](http://localhost:3100/one/OneNativeList)  
Quick tip: Select when generating code`Vue3原生`  
![](https://lfs.k.topthink.com/lfs/4fb32831825925b043b946a52d79ead300415a723bbdacd031afa4acf9f22b5b.dat)

### 5\. How to customize pop-up windows

### 6\. Table list custom rendering slot
