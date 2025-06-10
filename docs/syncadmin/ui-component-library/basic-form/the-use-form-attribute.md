---
order: 3
---

# The useForm attribute

> `useForm`There are some methods and properties in it, such as "fix title length", "get form value", "clear form validation", etc.

## `userForm`Other attributes

### 1\. Fixed the width of the label title

`labelCol`Control `labelWidth`the width of the title by

Page Effects

Code Sample

> The distance to the left of "Name, Age" is the width of the title.

![](https://lfs.k.topthink.com/lfs/6d2c5b1dcf169687ff7effd228991b7f7ce30337c826573bb91d9c1c4badd9d0.dat)

> `labelCol`, `labelWidth`the effect is the same, only one method is needed

![](https://lfs.k.topthink.com/lfs/213935cfb7726ebc1c9346aeaed28ec573844ce147b56417d2d20b2ac13dbcc6.dat)

```
<template>
  <!-- 自定表单 -->
  <BasicForm @register="registerForm" @submit="handleSubmit" style="margin-top: 50px" />
</template>

<script lang="ts" setup>
  //引入依赖
  import { useForm, BasicForm, FormSchema } from '/@/components/Form';

  //自定义表单字段
  const formSchemas: FormSchema[] = [
    {
      label: '姓名',
      field: 'name',
      component: 'Input',
    },
    {
      label: '年龄',
      field: 'password',
      component: 'InputNumber',
    },
    {
      label: '生日',
      field: 'birthday',
      component: 'DatePicker',
    },
    {
      label: '头像',
      field: 'avatar',
      component: 'JImageUpload',
    },
  ];

  /**
   * BasicForm绑定注册;
   */
  const [registerForm] = useForm({
    //注册表单列
    schemas: formSchemas,
    showResetButton: false,
    submitButtonOptions: { text: '提交', preIcon: '' },
    actionColOptions: { span: 17 },
    //使用labelCol的样式参数来控制标题宽度
    labelCol: { style: { width: '150px' } },
    //字体对齐方式（left:左对齐，right：右对齐），默认右对齐
    labelAlign:'right'
  });

  /**
   * 点击提交按钮的value值
   * @param values
   */
  function handleSubmit(values: any) {
    console.log('提交按钮数据::::', values);
  }
</script>

<style scoped>
  /** 时间和数字输入框样式 */
  :deep(.ant-input-number) {
    width: 100%;
  }

  :deep(.ant-picker) {
    width: 100%;
  }
</style>
```

copy

### 2\. Title and field layout

Adaptive width can be achieved through `userForm`the parameters `labelCol`and`wrapperCol`

#### 2.1 Effect and code display

Page Effects

Code Sample

> `1200px`Display effect when the page width is greater than

![](https://lfs.k.topthink.com/lfs/03443c8652f97644f7ff45d971036269e350c45ca2fe795c6633965381c673b8.dat)

> `576px`Display effect when the page is smaller than

![](https://lfs.k.topthink.com/lfs/b6ec398a6ee927e197988be6aca20c49f6f495598c80c235f06aeb955c7e18c7.dat)

> Responsive layout usage, please refer to other parameters`2.2 labelCol和wrapperCol参数`

![](https://lfs.k.topthink.com/lfs/2f9ce4d29edb386bd982394dca7dec3fe794669d92a2448ddd42dc7605a1d407.dat)

```
<!-- 标题与字段布局 -->
<template>
  <!-- 自定表单 -->
  <BasicForm @register="registerForm" style="margin: 50px 50px 0 50px" />
</template>

<script lang="ts" setup>
  //引入依赖
  import { useForm, BasicForm, FormSchema } from '/@/components/Form';

  //自定义表单字段
  const formSchemas: FormSchema[] = [
    {
      label: '姓名',
      field: 'name',
      component: 'Input',
    },
    {
      label: '年龄',
      field: 'password',
      component: 'InputNumber',
    },
    {
      label: '生日',
      field: 'birthday',
      component: 'DatePicker',
    },
    {
      label: '头像',
      field: 'avatar',
      component: 'JImageUpload',
    },
  ];

  /**
   * BasicForm绑定注册;
   */
  const [registerForm] = useForm({
    //注册表单列
    schemas: formSchemas,
    showActionButtonGroup: false,
    actionColOptions: { span: 12 },
    //控制标题宽度占比
    labelCol: {
      xs: 2,
      sm: 2,
      md: 2,
      lg: 9,
      xl: 3,
      xxl: 2,
    },
    //控制组件宽度占比
    wrapperCol: {
      xs: 15,
      sm: 14,
      md: 16,
      lg: 17,
      xl: 19,
      xxl: 20,
    },
  });
</script>

<style scoped>
  /** 时间和数字输入框样式 */
  :deep(.ant-input-number) {
    width: 100%;
  }

  :deep(.ant-picker) {
    width: 100%;
  }
</style>
```

copy

#### 2.2 `labelCol`and `wrapperCol`Properties

| member | illustrate                                                                     | type   |
| ------ | ------------------------------------------------------------------------------ | ------ |
| flex   | Flex layout padding                                                            | string |
| offset | The number of grid cells on the left side of the grid. The default value is 0. | number |
| order  | Grid order, `flex` valid in layout mode, the default value is 0                | number |
| pull   | The number of grid cells to the left. The default value is 0.                  | number |
| push   | The grid moves right by a certain number of grids. The default value is 0.     | number |
| span   | The number of grid places. When it is 0, it is equivalent to `display: none`   | number |
| xs     | `<576px` Responsive Grid                                                       | number |
| sm     | `≥576px` Responsive Grid                                                       | number |
| md     | `≥768px` Responsive Grid                                                       | number |
| lg     | `≥992px` Responsive Grid                                                       | number |
| xl     | `≥1200px` Responsive Grid                                                      | number |
| xxl    | `≥1600px` Responsive Grid                                                      | number |

### 3\. Form layout

- The form has two different layout modes, and we can `layout`change the form layout through parameters.

Page Effects

Code Sample

> `layout`Attribute support `vertical`(title on top, components on bottom), `horizontal`(title on the left, components on the right)

- `vertical`The effect of layout

![](https://lfs.k.topthink.com/lfs/7e3ab51c3c5ac423cd3f8908db8f5f842a414aafbaa5bd302c2bd57764de702a.dat)

- `horizontal`The effect of layout

![](https://lfs.k.topthink.com/lfs/8fa086fccc8e411592b45b69c10a25df21c3dc2719807361323b7d555845f2c7.dat)

- Code Sample

![](https://lfs.k.topthink.com/lfs/658798655a7824573a2344b4c235f3d936d3c9984609e36bfc2ee690ebe75df3.dat)

```
<!-- 表单布局 -->
<template>
  <!-- 自定义表单 -->
  <BasicForm @register="registerForm" style="margin: 50px 50px 0 50px" />
</template>

<script lang="ts" setup>
  //引入依赖
  import { useForm, BasicForm, FormSchema } from '/@/components/Form';

  //自定义表单字段
  const formSchemas: FormSchema[] = [
    {
      label: '会议名称',
      field: 'name',
      component: 'Input',
    },
    {
      label: '参会地点',
      field: 'meetingLocation',
      component: 'Input',
    },
    {
      label: '参与人数',
      field: 'numberOfPart',
      component: 'InputNumber',
    },
    {
      label: '会议纪要',
      field: 'meetingMinutes',
      component: 'JUpload',
    },
  ];

  /**
   * BasicForm绑定注册;
   */
  const [registerForm] = useForm({
    //注册表单列
    schemas: formSchemas,
    //不显示查询和重置按钮
    showActionButtonGroup: false,
    //默认row行配置,当 layout 为 horizontal 生效
    rowProps: { gutter: 24, justify: 'center', align: 'middle' },
    //全局col列占比(每列显示多少位)，和schemas中的colProps属性一致
    baseColProps: { span: 12 },
    //row行的样式
    baseRowStyle: { width: '100%' },
    //表单布局属性，支持（vertical,horizontal），默认为horizontal
    layout: 'horizontal',
  });
</script>

<style scoped>
  /** 时间和数字输入框样式 */
  :deep(.ant-input-number) {
    width: 100%;
  }

  :deep(.ant-picker) {
    width: 100%;
  }
</style>
```

copy

### 4\. Action Buttons

- Scenario 1: Hide the button when it is not needed.
- Scenario 2: Customize the action button and handle your own logic

Page Effects

Code Sample

- Hide the button when it is not needed.

> Both the query button and the reset button exist

![](https://lfs.k.topthink.com/lfs/d37d4544b6a5a39ff31a9b370b304d8ee39308ad7991c24c5e1fa1c731d5c793.dat)

> Hide query button

![](https://lfs.k.topthink.com/lfs/533a79b86b9efe1fae1ceb47fc305e1a1c575db090258cc4d212c64b235fb550.dat)

> Hide reset button

![](https://lfs.k.topthink.com/lfs/e0f17f2b0e7123a2ae0e2538c9f43dfee86d3db12a5c53c28b3d9f6b813dbac2.dat)

> Dynamically changeable properties through `useForm`hooks`setProps`

![](https://lfs.k.topthink.com/lfs/348785025c1373dbc7e41a88c6120b036dec901f9011902560cd4bb892ee669b.dat)

- Customize the action button and handle your own logic

> Query button, reset button custom events

![](https://lfs.k.topthink.com/lfs/9def425e7ac8e3a3fc6496361dc7615f836b30617158b93a6008c6df0d811432.dat)

> Use `submitFunc`to `resetFunc`customize the logic after clicking the operation button

![](https://lfs.k.topthink.com/lfs/aefceb37fd245e20421230ebafe5291bf0357c5bdbe69080e775da70233b7ca3.dat)

```
<!-- 操作按钮 -->
<template>
  <div style="margin: 20px auto; text-align: center">
    <!-- 通过setProps 可以设置 userForm 中的属性 -->
    <!--  showActionButtonGroup 显示或者隐藏查询、重置按钮  -->
    <a-button @click="setProps({ showActionButtonGroup: false })" class="mr-2"> 隐藏操作按钮 </a-button>
    <a-button @click="setProps({ showActionButtonGroup: true })" class="mr-2"> 显示操作按钮 </a-button>
    <!--  showActionButtonGroup 显示或者隐藏重置按钮  -->
    <a-button @click="setProps({ showResetButton: false })" class="mr-2"> 隐藏重置按钮 </a-button>
    <a-button @click="setProps({ showResetButton: true })" class="mr-2"> 显示重置按钮 </a-button>
    <!--  showActionButtonGroup 显示或者隐藏查询按钮  -->
    <a-button @click="setProps({ showSubmitButton: false })" class="mr-2"> 隐藏查询按钮 </a-button>
    <a-button @click="setProps({ showSubmitButton: true })" class="mr-2"> 显示查询按钮 </a-button>
  </div>
  <!-- 自定义表单 -->
  <BasicForm @register="registerForm" @submit="handleSubmit" style="margin-top: 50px; margin-left: 50px" />
</template>

<script lang="ts" setup>
  //引入依赖
  import { useForm, BasicForm, FormSchema } from '/@/components/Form';
  import { CollapseContainer } from '/@/components/Container';

  /**
   * BasicForm绑定注册;
   * setProps方法可以动态设置useForm中的属性
   */
  const [registerForm, { setProps }] = useForm({
    //自定义查询按钮的文本和图标
    submitButtonOptions: { text: '查询', preIcon: '' },
    //自定义重置按钮的文本和图标
    resetButtonOptions: { text: '重置', preIcon: '' },
    //操作按钮的位置
    actionColOptions: { span: 17 },
    //提交按钮的自定义事件
    submitFunc: customSubmitFunc,
    //重置按钮的自定义时间
    resetFunc: customResetFunc,
    //显示操作按钮
    showActionButtonGroup: true,
  });

  /**
   * 重置按钮点击事件
   */
  async function customResetFunc() {
    console.log('重置按钮点击事件，此处处理重置按钮的逻辑');
  }

  /**
   * 查询按钮点击事件
   */
  async function customSubmitFunc() {
    console.log('查询按钮点击事件，此处处理查询按钮的逻辑');
  }

  /**
   * 点击提交按钮的value值
   * @param values
   */
  function handleSubmit(values: any) {
    console.log('提交按钮数据::::', values);
  }
</script>

<style scoped></style>
```

copy

### 5\. Form size, shrink, text focus, disable

Page Effects

Code Sample

> By default, the focus is on "Visitors" and the input box is blue.

![](https://lfs.k.topthink.com/lfs/c45dffe268edccb252c708edcedfd21bf63c75d32a28536eb9ecd8b958806e34.dat)

> Maximum display effect of the form

![](https://lfs.k.topthink.com/lfs/e897b2516cfa04a2e3442ccc5d3bb6edff72b8981b7bee674238ac1960c53cc1.dat)

> Form disabled effect

![](https://lfs.k.topthink.com/lfs/2d45ceb2e73d3de1b5c6b245669c864532c952a9df3df3392442440f4d1b1267.dat)

> Compact form display effect

![](https://lfs.k.topthink.com/lfs/7f9c693e1c990860b133dbdb9720047a7a3efbeb6fd86cc82e0f6ee3419d7ec4.dat)

> Dynamically changeable properties through `useForm`hooks`setProps`

![](https://lfs.k.topthink.com/lfs/31072a672f24a97874c8f4eb53b032495600a0497e9219a31cdb89984c303e19.dat)

```
<!-- 操作禁用表单 -->
<template>
  <div style="margin: 20px auto; text-align: center">
    <!-- 通过setProps 可以设置 userForm 中的属性 -->
    <!-- 表单大小，默认为 default   -->
    <a-button @click="setProps({ size: 'large' })" class="mr-2"> 更改大小为最大 </a-button>
    <a-button @click="setProps({ size: 'default' })" class="mr-2"> 还原大小 </a-button>
    <a-button @click="setProps({ size: 'small' })" class="mr-2"> 更改大小为最小 </a-button>
    <!--  disabled表单禁用  -->
    <a-button @click="setProps({ disabled: true })" class="mr-2"> 禁用表单 </a-button>
    <a-button @click="setProps({ disabled: false })" class="mr-2"> 解除禁用 </a-button>
    <!--  compact 是否为紧凑表单  -->
    <a-button @click="setProps({ compact: true })" class="mr-2"> 紧凑表单 </a-button>
    <a-button @click="setProps({ compact: false })" class="mr-2"> 还原正常间距 </a-button>
  </div>
  <!-- 自定义表单 -->
  <BasicForm @register="registerForm" @submit="handleSubmit" style="margin-top: 50px; margin-left: 50px" />
</template>

<script lang="ts" setup>
  //引入依赖
  import { useForm, BasicForm, FormSchema } from '/@/components/Form';
  import { CollapseContainer } from '/@/components/Container';

  //自定义表单字段
  const formSchemas: FormSchema[] = [
    {
      field: 'visitor',
      label: '来访人员',
      component: 'Input',
    },
    {
      field: 'accessed',
      label: '来访日期',
      component: 'DatePicker',
    },
    {
      field: 'phone',
      label: '来访人手机号',
      component: 'Input',
    },
  ];

  /**
   * BasicForm绑定注册;
   * setProps方法可以动态设置useForm中的属性
   */
  const [registerForm, { setProps }] = useForm({
    schemas: formSchemas,
    //隐藏操作按钮
    showActionButtonGroup: false,
    //默认聚焦第一个，只支持input
    autoFocusFirstItem: true,
  });
</script>

<style scoped></style>
```

copy

### 6\. Form Validation and Clear Validation

Page Effects

Code Sample

> Triggering form validation

![](https://lfs.k.topthink.com/lfs/94a9480bd81376b4d404187c736aaca21336e881cf2a837f682dfd4405f027ee.dat)

> Clear form validation

![](https://lfs.k.topthink.com/lfs/b849e4108341445366db40410fa5a9828e66e392e9e142bd4ccfdd5c55015608.dat)

> Only verify visitors

![](https://lfs.k.topthink.com/lfs/d79f9ac1b62be37cfa2174c68d5ca15699d28c51c6936990add0d981a309b8ee.dat)

> Clear only visitor verification

![](https://lfs.k.topthink.com/lfs/5b5ae751018ac57b495aa0b7fa7043b32b38f49628a43218ff43a99181e8471c.dat)

> Through `useForm`the methods in the hook, you can verify all or cancel the verification of all unsatisfied components.

![](https://lfs.k.topthink.com/lfs/bc5be7acd69abdca7f98ec6570e0615092c5edf3864eba53b92507c931d483ab.dat)

```
<!-- 操作禁用表单 -->
<template>
  <div style="margin: 20px auto; text-align: center">
    <!-- all 触发或清空所有验证，visitor 只触发或者清空来访人员验证 -->
    <a-button @click="triggerFormRule('all')" class="mr-2"> 触发表单验证 </a-button>
    <a-button @click="cancelFormRule('all')" class="mr-2"> 清空表单验证 </a-button>
    <a-button @click="triggerFormRule('visitor')" class="mr-2"> 只验证来访人员 </a-button>
    <a-button @click="cancelFormRule('visitor')" class="mr-2"> 只清空来访人员验证 </a-button>
  </div>
  <!-- 自定义表单 -->
  <BasicForm @register="registerForm" @submit="handleSubmit" style="margin-top: 50px; margin-left: 50px" />
</template>

<script lang="ts" setup>
  //引入依赖
  import { useForm, BasicForm, FormSchema } from '/@/components/Form';

  //自定义表单字段
  const formSchemas: FormSchema[] = [
    {
      field: 'visitor',
      label: '来访人员',
      component: 'Input',
      required: true,
    },
    {
      field: 'accessed',
      label: '来访日期',
      component: 'DatePicker',
      required: true,
    },
    {
      field: 'phone',
      label: '来访人手机号',
      component: 'Input',
      required: true,
    },
  ];

  /**
   * BasicForm绑定注册;
   * setProps方法可以动态设置useForm中的属性
   * clearValidate 清除所有验证，支持取消验证其中几个字段 如 clearValidate(['visitor',...])
   * validate 验证所有
   * validateFields 验证其中几个字段，如validateFields(['visitor',...])
   */
  const [registerForm, { clearValidate, validateFields, validate }] = useForm({
    schemas: formSchemas,
    //隐藏操作按钮
    showActionButtonGroup: false,
    //默认聚焦第一个，只支持input
    autoFocusFirstItem: true,
  });

  /**
   * 触发表单验证
   * @param type all 所有验证 visitor 只验证来访人员
   */
  async function triggerFormRule(type) {
    if (type == 'all') {
      //触发所有验证
      await validate();
    } else {
      //触发来访人员验证
      //visitor 来访人员的对应formSchemas field字段
      await validateFields(['visitor']);
    }
  }

  /**
   * 触发表单验证
   * @param type all 所有验证 visitor 只验证来访人员
   */
  async function cancelFormRule(type) {
    if (type == 'all') {
      //取消全部验证
      await clearValidate();
    } else {
      //只取消来访人员的验证
      //visitor 来访人员的对应formSchemas field字段
      await clearValidate(['visitor']);
    }
  }
</script>

<style scoped>
  /** 时间和数字输入框样式 */
  :deep(.ant-input-number) {
    width: 100%;
  }

  :deep(.ant-picker) {
    width: 100%;
  }
</style>
```

copy

### 7\. Form Value Operation

Page Effects

Code Sample

- ① Get all field values
- ② Get all field values ​​after form validation
- ③ `visitor来访人员`The value obtained after the form is verified

![](https://lfs.k.topthink.com/lfs/8b1a73cb15243a87d4fef45f8f80cd99ab516c553bc1a67f67b16870bd955a38.dat)

> Clear form values

![](https://lfs.k.topthink.com/lfs/1f66673290b537f471be43e9ccfcbe11550a240ea3339175545af61c8a137f12.dat)

> Update form values

![](https://lfs.k.topthink.com/lfs/b5791d655c4ee4e8483ef9a10f562695efd311d4f4657ca9b9dcea915a0e8b7d.dat)

> Through `useForm`the methods in the hook, you can get, update, and clear value operations

![](https://lfs.k.topthink.com/lfs/a819ded61f0b74b2fd1a5236e293b78fbd7e8a8db877a2d39cd65eb8fc14c55a.dat)

```
<!-- 操作表单值 -->
<template>
  <div style="margin: 20px auto; text-align: center">
    <a-button @click="getFormValue" class="mr-2"> 获取表单值 </a-button>
    <a-button @click="clearFormValue" class="mr-2"> 清空表单值 </a-button>
    <a-button @click="updateFormValue" class="mr-2"> 更新表单值 </a-button>
  </div>
  <!-- 自定义表单 -->
  <BasicForm @register="registerForm" @submit="handleSubmit" style="margin-top: 50px; margin-left: 50px" />
</template>

<script lang="ts" setup>
  //引入依赖
  import { useForm, BasicForm, FormSchema } from '/@/components/Form';

  //自定义表单字段
  const formSchemas: FormSchema[] = [
    {
      field: 'visitor',
      label: '来访人员',
      component: 'Input',
      required: true,
    },
    {
      field: 'accessed',
      label: '来访日期',
      component: 'DatePicker',
      required: true,
    },
    {
      field: 'phone',
      label: '来访人手机号',
      component: 'Input',
      required: true,
    },
  ];

  /**
   * BasicForm绑定注册;
   * getFieldsValue 获取所有表单值
   * validate 验证通过之后的表单值,支持验证其中几个字段，validate(['visitor',...])
   * setFieldsValue 更新表单值，如 setFieldsValue({'visitor':'李四',...})
   * resetFields 清除所有表单值
   */
  const [registerForm, { getFieldsValue, setFieldsValue, resetFields, validate }] = useForm({
    schemas: formSchemas,
    //隐藏操作按钮
    showActionButtonGroup: false,
    //默认聚焦第一个，只支持input
    autoFocusFirstItem: true,
  });

  /**
   * 获取表单值
   */
  async function getFormValue() {
    //获取所有值
    let fieldsValue = await getFieldsValue();
    console.log('fieldsValue:::', fieldsValue);
    //表单验证通过后获取所有字段值
    fieldsValue = await validate();
    console.log('fieldsValue:::', fieldsValue);
    //表单验`visitor来访人员`通过后获取的值
    fieldsValue = await validate(['visitor']);
    console.log('fieldsValue:::', fieldsValue);
  }

  /**
   * 清空表单值
   */
  async function clearFormValue() {
    await resetFields();
  }

  /**
   * 更新表单值
   */
  async function updateFormValue() {
    await setFieldsValue({ visitor: '李四' });
  }
</script>

<style scoped>
  /** 时间和数字输入框样式 */
  :deep(.ant-input-number) {
    width: 100%;
  }

  :deep(.ant-picker) {
    width: 100%;
  }
</style>
```

copy

### 8\. Dynamically update/reset field properties

Page Effects

Code Sample

> normal

![](https://lfs.k.topthink.com/lfs/205943f78d219e1e90bc693fb1e7a64cdfd813325656d8908a67f2d080433076.dat)

> Triggering the update of field properties

![](https://lfs.k.topthink.com/lfs/0d825cece324729e4a381343054b922a8bc20e9880b5b59997df3cc31cb0ce83.dat)

> Trigger the reset of field properties. Note that resetting field properties will `schemas`delete all corresponding fields. Add the field properties you configured.

![](https://lfs.k.topthink.com/lfs/27b173530cffc04c2f27de84f63662240d7f5e77ce5f5bc67c8e7e8a7fe0a117.dat)

> Through `useForm`the methods in the hook, you can dynamically update and reset the field value

![](https://lfs.k.topthink.com/lfs/04958473cde62374b149873bdf96cc8904f948422a1d1ae9a0ec292e921d355a.dat)

```
<!-- 操作表单schemas配置 -->
<template>
  <div style="margin: 20px auto; text-align: center">
    <a-button @click="updateFormSchemas" class="mr-2"> 更新字段属性 </a-button>
    <a-button @click="resetFormSchemas" class="mr-2"> 重置字段属性 </a-button>
  </div>
  <!-- 自定义表单 -->
  <BasicForm @register="registerForm" @submit="handleSubmit" style="margin-top: 50px; margin-left: 50px" />
</template>

<script lang="ts" setup>
  //引入依赖
  import { useForm, BasicForm, FormSchema } from '/@/components/Form';

  //自定义表单字段
  const formSchemas: FormSchema[] = [
    {
      field: 'visitor',
      label: '来访人员',
      component: 'Input',
      componentProps: {
        disabled: true,
      },
    },
    {
      field: 'accessed',
      label: '来访日期',
      component: 'DatePicker',
      ifShow: false,
    },
    {
      field: 'phone',
      label: '来访人手机号',
      component: 'Input',
      required: true,
    },
  ];

  /**
   * BasicForm绑定注册;
   * updateSchema 更新字段属性，支持schemas里面所有的配置
   * updateSchema([{ field: 'visitor', componentProps: { disabled: false },}, ... ]);
   * resetSchema 重置字段属性，支持schemas里面所有的配置
   * resetSchema([{  field: 'visitor',label: '来访人员',component: 'Input',},... ]);
   */
  const [registerForm, { updateSchema, resetSchema }] = useForm({
    schemas: formSchemas,
    //隐藏操作按钮
    showActionButtonGroup: false,
    //默认聚焦第一个，只支持input
    autoFocusFirstItem: true,
  });

  /**
   * 清除表单配置
   */
  async function resetFormSchemas() {
    await resetSchema([
      {
        //字段必填
        field: 'visitor',
        label: '来访人员',
        component: 'Input',
      },
    ]);
  }

  /**
   * 更新表单配置
   */
  async function updateFormSchemas() {
    //支持更新schemas里面所有的配置
    await updateSchema([
      {
        //字段必填
        field: 'visitor',
        componentProps: {
          disabled: false,
        },
      },
      {
        field: 'accessed',
        ifShow: true,
      },
    ]);
  }
</script>

<style scoped>
  /** 时间和数字输入框样式 */
  :deep(.ant-input-number) {
    width: 100%;
  }

  :deep(.ant-picker) {
    width: 100%;
  }
</style>
```

copy

### 9\. Dynamically increase or decrease form items

Dynamically increase or decrease form items.

Page Effects

Code Sample

> Effect 1

![](https://lfs.k.topthink.com/lfs/ddb59ea552ad89cb4df0aa88e60d7381aad56ae38cfbac38e5d55c454a2e0e92.dat)

> Effect 2

![](https://lfs.k.topthink.com/lfs/b64ab4c2e9bf9e46c1be762b4a2286dd2a1e7ba032197de7d5153ed0f522bff0.dat)

> Through `useForm` the methods in the hook, you can dynamically increase and decrease form items

![](https://lfs.k.topthink.com/lfs/f9de6aaf6d307f84c6c561e1bde7c6c3cd135ef37f4ab3ddf6bf59dd7f9ca5c3.dat)

```
<!-- 动态增减表单 -->
<template>
  <!-- 自定义表单 -->
  <BasicForm @register="registerForm" style="margin-top: 50px; margin-left: 50px" @submit="handleSubmit">
    <!--  添加input的插槽  -->
    <template #addForm="{ field }">
      <a-button v-if="Number(field) === 0" @click="addField" style="width: 50px">+</a-button>
      <a-button v-if="Number(field) > 0" @click="delField(field)" style="width: 50px">-</a-button>
    </template>
  </BasicForm>
  <!--  <div style="margin: 20px auto; text-align: center">
    <a-button @click="addField">添加表单项</a-button>
  </div>-->
</template>

<script lang="ts" setup>
  //引入依赖
  import { useForm, BasicForm, FormSchema } from '/@/components/Form';
  import { CollapseContainer } from '/@/components/Container';
  import { ref } from '@vue/runtime-core';

  //自定义表单字段
  const formSchemas: FormSchema[] = [
    {
      field: 'name1',
      label: '姓名1',
      component: 'Input',
      // ifShow:false,
      colProps: {
        span: 8,
      },
    },
    {
      field: 'age1',
      label: '年龄1',
      component: 'InputNumber',
      // ifShow:false,
      colProps: {
        span: 8,
      },
    },
    {
      field: '0',
      component: 'Input',
      // ifShow:false,
      label: ' ',
      colProps: {
        span: 8,
      },
      slot: 'addForm',
    },
  ];

  /**
   * BasicForm绑定注册;
   * appendSchemaByField:增加表单项（字段）
   *
   * removeSchemaByFiled:减少表单项（字段）
   */
  const [registerForm, { appendSchemaByField, removeSchemaByFiled }] = useForm({
    schemas: formSchemas,
    showResetButton: false,
    // showSubmitButton:false
    submitButtonOptions: { text: '提交', preIcon: '' },
    actionColOptions: { span: 17 },
  });

  //组件个数
  let n = ref<number>(2);

  /**
   * 添加字段
   * appendSchemaByField类型: ( schema: FormSchema, prefixField: string | undefined, first?: boolean | undefined ) => Promise<void>
   * 说明: 插入到指定 filed 后面，如果没传指定 field，则插入到最后,当 first = true 时插入到第一个位置
   */
  async function addField() {
    //添加表单字段，里面为schemas对应的属性，可自行配置
    await appendSchemaByField(
      {
        field: `name${n.value}`,
        component: 'Input',
        label: '字段' + n.value,
        colProps: {
          span: 8,
        },
      },
      ''
    );
    await appendSchemaByField(
      {
        field: `sex${n.value}`,
        component: 'InputNumber',
        label: '字段' + n.value,
        colProps: {
          span: 8,
        },
      },
      ''
    );

    await appendSchemaByField(
      {
        field: `${n.value}`,
        component: 'Input',
        label: ' ',
        colProps: {
          span: 8,
        },
        slot: 'addForm',
      },
      ''
    );
    n.value++;
  }

  /**
   * 删除字段
   * 类型: (field: string | string[]) => Promise<void>
   * 说明: 根据 field 删除 Schema
   * @param field 当前字段名称
   */
  function delField(field) {
    //移除指定字段
    removeSchemaByFiled([`name${field}`, `sex${field}`, `${field}`]);
    n.value--;
  }

  /**
   * 点击提交按钮的value值
   * @param values
   */
  function handleSubmit(values: any) {
    console.log('提交按钮数据::::', values);
  }
</script>

<style scoped>
  /** 数字输入框样式 */
  :deep(.ant-input-number) {
    width: 100%;
  }
</style>
```

copy

### 10\. Customize the top and bottom areas of the form

- When the bottom buttons do not meet your needs, you can customize the bottom area.
- Example: In the employee file, we have Save, Save Draft, Reset

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/fa59600ea74434d364b43a5210752e1fa41cca05ab414889b8427355d1552f6e.dat)

> Use slots `formHeader`(custom form header area), `formFooter`(custom form bottom area)

![](https://lfs.k.topthink.com/lfs/c1696333f861c2ab93bef1ed1a361701dec67cff51da4ecc52465120a2b80eb2.dat)

```
<!-- 自定义页脚 -->
<template>
  <!-- 自定义表单 -->
  <BasicForm @register="registerForm" @submit="handleSubmit" style="margin-top: 50px; margin-left: 50px">
    <template #formHeader>
      <div style="margin: 0 auto 20px">
        <span>我是自定义按钮</span>
      </div>
    </template>
    <template #formFooter>
      <div style="margin: 0 auto">
        <a-button type="primary" @click="save" class="mr-2"> 保存 </a-button>
        <a-button type="primary" @click="saveDraft" class="mr-2"> 保存草稿 </a-button>
        <a-button type="error" @click="reset" class="mr-2"> 重置 </a-button>
      </div>
    </template>
  </BasicForm>
</template>

<script lang="ts" setup>
  //引入依赖
  import { useForm, BasicForm, FormSchema } from '/@/components/Form';

  //自定义表单字段
  const formSchemas: FormSchema[] = [
    {
      label: '员工姓名',
      field: 'name',
      component: 'Input',
    },
    {
      label: '性别',
      field: 'sex',
      component: 'Select',
      //填写组件的属性
      componentProps: {
        options: [
          { label: '男', value: 1 },
          { label: '女', value: 2 },
          { label: '未知', value: 3 },
        ],
      },
      //默认值
      defaultValue: 3,
    },
    {
      label: '年龄',
      field: 'age',
      component: 'Input',
    },
    {
      label: '入职时间',
      subLabel: '( 选填 )',
      field: 'entryTime',
      component: 'TimePicker',
    },
  ];

  /**
   * BasicForm绑定注册;
   */
  const [registerForm, { validate, resetFields }] = useForm({
    schemas: formSchemas,
    //隐藏操作按钮
    showActionButtonGroup: false,
  });

  /**
   * 保存
   */
  async function save() {
    //使用useForm方法获取表单值
    let values = await validate();
    console.log(values);
  }

  /**
   * 保存草稿
   */
  async function saveDraft() {
    //使用useForm方法validate获取表单值
    let values = await validate();
    console.log(values);
  }

  /**
   * 重置
   */
  async function reset() {
    //使用useForm方法resetFields清空值
    await resetFields();
  }
</script>

<style scoped>
  /** 时间和数字输入框样式 */
  :deep(.ant-input-number) {
    width: 100%;
  }

  :deep(.ant-picker) {
    width: 100%;
  }
</style>
```

copy

### 11\. Form in popup

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/2deda42048cf96c5925971466e1cb470306d9ccf648ad8298be570fbac8476a3.dat)

> Used in components`BasicModal`

[BasicModal popup](../component/Model.html)

```
<!-- 弹出层表单 -->
<template>
  <div style="margin: 20px auto">
    <a-button type="primary" @click="openPopup" class="mr-2"> 打开弹窗 </a-button>
  </div>
  <!-- 自定义弹窗组件 -->
  <BasicModal @register="registerModal" title="弹出层表单">
    <!-- 自定义表单 -->
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>

<script lang="ts" setup>
  //引入依赖
  import { useForm, BasicForm, FormSchema } from '/@/components/Form';
  import { BasicModal } from '/@/components/Modal';
  import { useModal } from '/@/components/Modal';

  //自定义表单字段
  const formSchemas: FormSchema[] = [
    {
      label: '员工姓名',
      field: 'name',
      component: 'Input',
    },
    {
      label: '性别',
      field: 'sex',
      component: 'Select',
      //填写组件的属性
      componentProps: {
        options: [
          { label: '男', value: 1 },
          { label: '女', value: 2 },
          { label: '未知', value: 3 },
        ],
      },
      //默认值
      defaultValue: 3,
    },
    {
      label: '年龄',
      field: 'age',
      component: 'Input',
    },
    {
      label: '入职时间',
      subLabel: '( 选填 )',
      field: 'entryTime',
      component: 'TimePicker',
    },
  ];

  //BasicModal绑定注册;
  const [registerModal, { openModal }] = useModal();

  /**
   * BasicForm绑定注册;
   */
  const [registerForm, { validate, resetFields }] = useForm({
    schemas: formSchemas,
    //隐藏操作按钮
    showActionButtonGroup: false,
  });

  /**
   * 打开弹窗
   */
  async function openPopup() {
    //详见 BasicModal模块
    openModal(true, {});
  }
</script>

<style scoped>
  /** 时间和数字输入框样式 */
  :deep(.ant-input-number) {
    width: 100%;
  }

  :deep(.ant-picker) {
    width: 100%;
  }
</style>
```

copy

### 12\. Query area

Page Effects

Code Sample

> By default, two lines are displayed. If more than two lines are displayed, they will be folded and the expand and collapse buttons will be displayed.

![](https://lfs.k.topthink.com/lfs/d3b4a6acc9a542a4e233e37496e88b586dbac59ef55efb3167f3feb0e26cd2ee.dat)

> `fieldMapToTime`: Map the value of the time zone in the form into 2 fields

![](https://lfs.k.topthink.com/lfs/6bf5e385346db65eb0ca532242f62ddd883b27c94da73ffe21bf236be5e388d2.dat)

![](https://lfs.k.topthink.com/lfs/2ae0069ee126e0d4b7c3eb943595e129940a0be9e54d9c2086c3ef718196e14b.dat)

> `fieldMapToNumber`Consistent with `fieldMapToTime`the usage, map the value of the numeric type area in the form into 2 fields

![](https://lfs.k.topthink.com/lfs/87b38565b9d2f8e8dcba0cc1c1e22c827f105c80412666c93ebaca8a99cadd52.dat)

![](https://lfs.k.topthink.com/lfs/1f2165d0a770184371697cc4781830c9f6b18969a5552b687692e92bcd0eb24e.dat)

```
<!-- 查询区域 -->
<template>
  <!-- 自定义表单 -->
  <BasicForm @register="registerForm" @submit="handleSubmit" style="margin-top: 50px" />
</template>

<script lang="ts" setup>
  //引入依赖
  import { useForm, BasicForm, FormSchema } from '/@/components/Form';

  //自定义表单字段
  const formSchemas: FormSchema[] = [
    {
      field: 'name',
      label: '姓名',
      component: 'Input',
    },
    {
      field: 'hobby',
      label: '爱好',
      component: 'Input',
    },
    {
      field: 'birthday',
      label: '生日',
      component: 'DatePicker',
    },
    {
      field: 'joinTime',
      label: '入职时间',
      component: 'RangePicker',
      componentProps: {
        valueType: 'Date',
      },
    },
    {
      field: 'workYears',
      label: '工作年份',
      component: 'JRangeNumber',
    },
    {
      field: 'sex',
      label: '性别',
      component: 'Select',
      componentProps: {
        options: [
          {
            label: '男',
            value: '1',
          },
          {
            label: '女',
            value: '2',
          },
        ],
      },
    },
    {
      field: 'marital',
      label: '婚姻状况',
      component: 'RadioGroup',
      componentProps: {
        options: [
          {
            label: '未婚',
            value: '1',
          },
          {
            label: '已婚',
            value: '2',
          },
        ],
      },
    },
  ];

  /**
   * BasicForm绑定注册;
   */
  const [registerForm] = useForm({
    //注册表单列
    schemas: formSchemas,
    //是否显示展开收起按钮，默认false
    showAdvancedButton: true,
    //超过指定行数折叠，默认3行
    autoAdvancedCol: 3,
    //折叠时默认显示行数，默认1行
    alwaysShowLines: 2,
    //将表单内时间区域的值映射成 2个字段, 'YYYY-MM-DD'日期格式化
    fieldMapToTime: [['joinTime', ['joinTime_begin', 'joinTime_end'], 'YYYY-MM-DD']],
    //将表单内数值类型区域的值映射成 2个字段
    fieldMapToNumber: [['workYears', ['workYears_begin', 'workYears_end']]],
    //每列占比，默认一行为24
    baseColProps: { span: 12 },
  });

  /**
   * 点击提交按钮的value值
   * @param values
   */
  function handleSubmit(values: any) {
    console.log('提交按钮数据::::', values);
  }
</script>

<style scoped>
  /** 时间和数字输入框样式 */
  :deep(.ant-input-number) {
    width: 100%;
  }

  :deep(.ant-picker) {
    width: 100%;
  }
</style>
```

copy

## `useForm`API attributes

| Attributes            | type                                        | default value | Optional Values                     | illustrate                                                                                                                                                                                                         | Version |
| --------------------- | ------------------------------------------- | ------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| schemas               | `Schema[]`                                  | \-            | \-                                  | Form configuration, see the introduction `BasicForm`in`schemas`                                                                                                                                                    |         |
| submitOnReset         | `boolean`                                   | `false`       | \-                                  | Whether to submit the form when resetting                                                                                                                                                                          |         |
| labelCol              | Partial`<ColEx>`                            | \-            | \-                                  | Common LabelCol configuration for the entire form                                                                                                                                                                  |         |
| wrapperCol            | Partial `<ColEx>`                           | \-            | \-                                  | Common wrapperCol configuration for the entire form                                                                                                                                                                |         |
| baseColProps          | Partial`<ColEx>`                            | \-            | \-                                  | Configure ColProps for all selected items. You don't need to configure them one by one. You can also configure the priority and global of each item separately.                                                    |         |
| labelWidth            | `number` , `string`                         | \-            | \-                                  | Expand the form component and increase the label width. This applies to all components in the form and can be overridden or disabled for a single item.                                                            |         |
| labelAlign            | `string`                                    | \-            | `left`,`right`                      | Label layout                                                                                                                                                                                                       |         |
| mergeDynamicData      | `object`                                    | \-            | \-                                  | Additional parameter values ​​passed to child components                                                                                                                                                           |         |
| autoFocusFirstItem    | `boolean`                                   | `false`       | \-                                  | Whether to focus on the first input box. This only works when the first form item is input.                                                                                                                        |         |
| compact               | `boolean`                                   | `false`       | `true/false`                        | Compact type form, reduce margin-bottom                                                                                                                                                                            |         |
| size                  | `string`                                    | `default`     | `'default'` , `'small'` , `'large'` | Pass the size parameter to all components in the form. Custom components need to implement size reception themselves.                                                                                              |         |
| disabled              | `boolean`                                   | `false`       | `true/false`                        | Pass the disabled attribute to all components in the form. Custom components need to implement disabled reception themselves.                                                                                      |         |
| autoSetPlaceHolder    | `boolean`                                   | `true`        | `true/false`                        | Automatically set the placeholder of the component in the form. Custom components need to be implemented by themselves.                                                                                            |         |
| autoSubmitOnEnter     | `boolean`                                   | `false`       | `true/false`                        | Press Enter to submit automatically when typing in input                                                                                                                                                           |         |
| rulesMessageJoinLabel | `boolean`                                   | `false`       | `true/false`                        | If the form item has validation, validation information will be automatically generated. This parameter controls whether the Chinese name of the field is concatenated to the automatically generated information. |         |
| showAdvancedButton    | `boolean`                                   | `false`       | `true/false`                        | Whether to display the collapse and expand button                                                                                                                                                                  |         |
| emptySpan             | `number` , Partial`<ColEx>`                 | 0             | \-                                  | Blank rows, can be a value or col object                                                                                                                                                                           |         |
| autoAdvancedLine      | `number`                                    | 3             | \-                                  | If showAdvancedButton is true, rows exceeding the specified number of rows will be collapsed by default                                                                                                            |         |
| alwaysShowLines       | `number`                                    | 1             | \-                                  | Always keep the number of rows displayed when collapsed                                                                                                                                                            |         |
| showActionButtonGroup | `boolean`                                   | `true`        | `true/false`                        | Whether to display the action button group (query/reset/expand/close)                                                                                                                                              |         |
| actionColOptions      | Partial`<ColEx>`                            | \-            | \-                                  | Col component configuration for the outer layer of the action button. If showAdvancedButton is enabled, no setting is required. For details, see actionColOptions below                                            |         |
| showResetButton       | `boolean`                                   | `true`        | \-                                  | Whether to display the reset button                                                                                                                                                                                |         |
| resetButtonOptions    | `object`                                    |               | \-                                  | Reset button configuration ActionButtonOption                                                                                                                                                                      |         |
| showSubmitButton      | `boolean`                                   | `true`        | \-                                  | Whether to display the submit button                                                                                                                                                                               |         |
| submitButtonOptions   | `object`                                    |               | \-                                  | Confirm button configuration ActionButtonOption                                                                                                                                                                    |         |
| resetFunc             | () => Promise`<void>`                       |               | \-                                  | Custom reset button logic() => Promise`<void>;`                                                                                                                                                                    |         |
| submitFunc            | () => Promise`<void>`                       |               | \-                                  | Custom submit button logic() => Promise`<void>;`                                                                                                                                                                   |         |
| fieldMapToTime        | \[string, \[string, string\], string?\]\[\] |               | \-                                  | Used to set the time area in the form to 2 fields, see the instructions below                                                                                                                                      |         |
