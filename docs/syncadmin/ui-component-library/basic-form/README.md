---
order: 1
dir:
  order: 3
---

# BasicForm

Based on `Ant Design Vue`the encapsulated form component `BasicForm`, it is used to quickly render important components of the form. In order to simplify the use, deep hook encapsulation is done. If you need to expand, please modify the hook `/@/hooks/useForm.ts`

> The BasicForm form control encapsulated by jeecg can render the form quickly without writing too much native code. (Of course, each has its pros and cons. This form component is encapsulated very intelligently, but it may also cause inflexibility, so for particularly complex forms, you can consider using native writing)

## scenes to be used

- Quickly create a form and submit form data.
- It is necessary to perform input validation on the control fields of the form.

## BasicForm's schema configuration introduction

### 1\. Basic usage

> Helllo World first entry example

---

Quickly render a form field, which can be an input control, label, drop-down menu, text field, etc.  
This example: Create a login form to allow users to enter their username and password to log in

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/093a2ac99e6ef317941cff855545763f9f80e3e3dfb060fcfa6e32f10016523d.dat)

> By customizing `FormSchema`the fields and binding them to `useForm`the `schemas`parameters, a simple login form is rendered.

The mapping relationship of field definitions is as follows:

---

![](https://lfs.k.topthink.com/lfs/5caf78bb8f956f1afc3c821ce216ae6311466ae4eb65e7aa734de7552274cd74.dat)

---

```
<!-- 基本用法 -->
<template>
  <!-- 自定表单 -->
  <BasicForm @register="registerForm" @submit="handleSubmit" style="margin-top: 50px; margin-left: 50px" />
</template>

<script lang="ts" setup>
  //引入依赖
  import { useForm, BasicForm, FormSchema } from '/@/components/Form';

  //自定义表单字段
  const formSchemas: FormSchema[] = [
    {
      //标题名称
      label: '用户名(后面根据labelLength定义的长度隐藏)',
      //字段
      field: 'username',
      //组件 支持组件详见 components/Form/src/types/index.ts 中的 ComponentType
      component: 'Input',
      //标题宽度,支持数字和字符串
      labelWidth: 150,
      //标题长度，超过位数隐藏
      labelLength: 3,
      //一列占比总共24，比如一行显示2列
      colProps: { span: 12 },
    },
    {
      label: '密码',
      field: 'password',
      //子标题名称（在主标题后面）
      subLabel: '(数字和字母组成)',
      component: 'InputPassword',
      labelWidth: '150px',
      //一列占比总共24，比如一行显示2列
      colProps: { span: 12 },
    },
  ];

  /**
   * BasicForm绑定注册;
   * useForm 是整个框架的核心用于表单渲染，里边封装了很多公共方法;
   * 支持（schemas: 渲染表单列，autoSubmitOnEnter：回车提交,submitButtonOptions：自定义按钮文本和图标等方法）；
   * 平台通过此封装，简化了代码，支持自定义扩展;
   */
  const [registerForm] = useForm({
    //注册表单列
    schemas: formSchemas,
    //回车提交
    autoSubmitOnEnter: true,
    //不显示重置按钮
    showResetButton: false,
    //自定义提交按钮文本和图标
    submitButtonOptions: { text: '提交', preIcon: '' },
    //查询列占比 24代表一行 取值范围 0-24
    actionColOptions: { span: 17 },
  });

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

### 2\. Demonstrate the use of dictionary control

#### Page effect and code display

For example, the "Gender" field is used `下拉框控件`, a drop-down item is set, and the default value is set to "Unknown";  
BasicForm encapsulates many control types, see`3. 表单控件清单`

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/7c8e2b1364ed8afca2544e16045e809d52610bd0d94589b47d19d6ee65706c46.dat)

> By `component`setting the control type;  
> by `componentProps`defining `options`the drop-down items;  
> by `defaultValue`defining the default value;

![](https://lfs.k.topthink.com/lfs/e8a6b8d72f00a37f2b159955692ac47a28db1e1d01227e2e1bf38ea11a69193d.dat)

```
<!-- 控件属性 -->
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
      label: '员工姓名',
      field: 'name',
      component: 'Input',
      componentProps:{
        disabled: true
      },
      defaultValue:'张三'
    },
    {
      label: '性别',
      field: 'sex',
      component: 'Select',
      //填写组件Select的属性
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
      field: 'entryTime',
      component: 'TimePicker',
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
  });
</script>

<style scoped></style>
```

copy

### 3 Overview of the form control list

#### 3.1 Use of componentProps basic placeholders

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/63f045020926280e7cd150cdb5088fb840a5edbe0239f7b7a1c3b3ce9067b31e.dat)

> ① `componentProps`: Used to define component properties  
> ② `placeholder`: Define `input`property placeholders

![](https://lfs.k.topthink.com/lfs/0b49b9b7a6a7c1e360185dae00213a98033370184ffb503ee2a5db5e0f18756f.dat)

```
<!-- 操作按钮 -->
<template>
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
      field: 'name',
      label: '姓名',
      component: 'Input',
      //组件的属性（所有组件的属性都要写在componentProps里面）
      componentProps: {
        //占位符
        placeholder:'请输入真实姓名'
      },
    },
  ];

  /**
   * BasicForm绑定注册;
   * setProps方法可以动态设置useForm中的属性
   */
  const [registerForm, { setProps }] = useForm({
    schemas: formSchemas,
    //显示操作按钮
    showActionButtonGroup: false,
  });
</script>

<style scoped></style>
```

copy

#### 3.2 Detailed usage of control types

> For detailed usage of form control types, please refer to [Form Control Usage Examples](../basicForm/componentType.html)

| name              | describe                                            | componentProps                                                                                                                                                                                                                                                                                                                                                                                 |
| ----------------- | --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Input             | Text Input Box                                      | [Input Properties](https://www.antdv.com/components/input-cn/#api)                                                                                                                                                                                                                                                                                                                             |
| InputGroup        | Grouping text input boxes                           | Use [slots](https://help.jeecg.com/component/basicForm.html#7-%E5%AD%97%E6%AE%B5%E6%8F%92%E6%A7%BDslot) to customize group text, which is consistent with input attributes and [unique to InputGroup](https://www.antdv.com/components/input-cn/#input-group)                                                                                                                                  |
| InputPassword     | Password input box                                  | Same as input attribute, [InputPassword unique attribute](https://www.antdv.com/components/input-cn/#input-password-1-14-0-%E4%B8%AD%E6%96%B0%E5%A2%9E)                                                                                                                                                                                                                                        |
| InputSearch       | Text search box                                     | [InputSearch Unique Properties](https://www.antdv.com/components/input-cn/#input-search)                                                                                                                                                                                                                                                                                                       |
| InputTextArea     | Text Field                                          | Same as Input property                                                                                                                                                                                                                                                                                                                                                                         |
| InputNumber       | Numeric input box                                   | [InputNumber Property](https://www.antdv.com/components/input-number-cn/#api)                                                                                                                                                                                                                                                                                                                  |
| InputCountDown    | Verification Code Component                         | [InputCountDown Property](https://help.jeecg.com/component/CountDown.html#countdowninput)                                                                                                                                                                                                                                                                                                      |
| Select            | Drop-down box component                             | [Select Property](https://www.antdv.com/components/select-cn/#api)                                                                                                                                                                                                                                                                                                                             |
| ApiSelect         | Api drop-down box component                         | `numberToString`: Whether to convert to numerical value, the default is false; `api:()=>promise`: Request interface; `params：{}`: Request parameter; `resultField`: Return collection name; `labelField`: Title field name; `valueField`: Value field name; `immediate`: Whether to initialize loading, the default is true                                                                   |
| TreeSelect        | Tree drop-down selection component                  | [TreeSelect Properties](https://www.antdv.com/components/tree-select-cn/#api)                                                                                                                                                                                                                                                                                                                  |
| ApiTreeSelect     | Remote API tree drop-down selection component       | `TreeSelect`The return value must be consistent with `api:()=>promise`: request interface; `params：{}`request parameters; `resultField`return collection name; `immediate`whether to initialize loading, default is true                                                                                                                                                                      |
| ApiRadioGroup     | Remote API radio button group component             | `api:()=>promise`: Request interface; `params：{}`: Request parameters; `isBtn`: Whether it is a button style type, the default is false; `numberToString`: Whether to convert to a numeric value, the default is false; `resultField`: Return collection name `labelField`: title field name; `valueField`: Value field name; `immediate`: Whether to initialize loading, the default is true |
| RadioButtonGroup  | Radio Button Group Component                        | `options`: Custom title and value                                                                                                                                                                                                                                                                                                                                                              |
| RadioGroup        | Radio button group component                        | [RadioGroup Properties](https://www.antdv.com/components/radio-cn/#radiogroup)                                                                                                                                                                                                                                                                                                                 |
| Checkbox          | Checkbox component                                  | [Checkbox Properties](https://www.antdv.com/components/checkbox-cn/#api)                                                                                                                                                                                                                                                                                                                       |
| CheckboxGroup     | Checkbox Group Component                            | [CheckboxGroup Properties](https://www.antdv.com/components/checkbox-cn/#checkbox-group)                                                                                                                                                                                                                                                                                                       |
| AutoComplete      | Autocomplete component                              | [AutoComplete Property](https://www.antdv.com/components/auto-complete-cn/#api)                                                                                                                                                                                                                                                                                                                |
| Cascader          | Cascading Selection Component                       | [Cascader Properties](https://www.antdv.com/components/cascader-cn/#api)                                                                                                                                                                                                                                                                                                                       |
| DatePicker        | Date Selection Box Component                        | [DatePicker Properties](https://www.antdv.com/components/date-picker-cn/#datepicker)                                                                                                                                                                                                                                                                                                           |
| MonthPicker       | Month selection component                           | \-                                                                                                                                                                                                                                                                                                                                                                                             |
| WeekPicker        | Date Selection Component                            | \-                                                                                                                                                                                                                                                                                                                                                                                             |
| TimePicker        | Time Selection Component                            | \-                                                                                                                                                                                                                                                                                                                                                                                             |
| RangePicker       | Date time range selection component                 | [RangePicker Properties](https://www.antdv.com/components/date-picker-cn/#rangepicker)                                                                                                                                                                                                                                                                                                         |
| RangeDate         | Date Range Selection Component                      | \-                                                                                                                                                                                                                                                                                                                                                                                             |
| RangeTime         | Time Range Selection Component                      | \-                                                                                                                                                                                                                                                                                                                                                                                             |
| Switch            | Switch components                                   | [Switch Properties](https://www.antdv.com/components/switch-cn/#api)                                                                                                                                                                                                                                                                                                                           |
| StrengthMeter     | Password Components                                 | `showInput`: Whether to display the password input box, the default is true; disabled: whether to disable, the default is false                                                                                                                                                                                                                                                                |
| Slider            | Sliding scroll bar component                        | [Slider Properties](https://www.antdv.com/components/slider-cn/#api)                                                                                                                                                                                                                                                                                                                           |
| Rate              | Scoring Components                                  | [Rate Property](https://www.antdv.com/components/rate-cn/#api)                                                                                                                                                                                                                                                                                                                                 |
| Divider           | Dividing line component                             | [Divider Properties](https://www.antdv.com/components/divider-cn/#api)                                                                                                                                                                                                                                                                                                                         |
| JAreaLinkage      | Provincial, municipal and county linkage components | [JAreaLinkage Properties](https://help.jeecg.com/component/JAreaLinkage.html#%E5%8F%82%E6%95%B0%E5%AE%9A%E4%B9%89)                                                                                                                                                                                                                                                                             |
| JSelectPosition   | Position selection component                        | [JSelectPosition Property](https://help.jeecg.com/component/JSelectPosition.html#%E5%8F%82%E6%95%B0%E5%AE%9A%E4%B9%89)                                                                                                                                                                                                                                                                         |
| JSelectRole       | Character selection component                       | [JSelectRole Properties](https://help.jeecg.com/component/JSelectRole.html#%E5%8F%82%E6%95%B0%E5%AE%9A%E4%B9%89)                                                                                                                                                                                                                                                                               |
| JSelectUser       | User selection component                            | [JSelectUser Properties](https://help.jeecg.com/component/JSelectUser.html#%E5%8F%82%E6%95%B0%E5%AE%9A%E4%B9%89)                                                                                                                                                                                                                                                                               |
| JImageUpload      | Image upload component                              | [JImageUpload Properties](https://help.jeecg.com/component/JImageUpload.html#%E7%BB%84%E4%BB%B6%E5%8F%82%E6%95%B0)                                                                                                                                                                                                                                                                             |
| JDictSelectTag    | Custom label component                              | [JDictSelectTag Properties](https://help.jeecg.com/component/JDictSelectTag.html#%E7%BB%84%E4%BB%B6%E5%8F%82%E6%95%B0)                                                                                                                                                                                                                                                                         |
| JSelectDept       | Select department components                        | [JSelectDept Property](https://help.jeecg.com/component/JSelectDept.html#%E5%8F%82%E6%95%B0%E5%AE%9A%E4%B9%89)                                                                                                                                                                                                                                                                                 |
| JAreaSelect       | Provincial and municipal linkage components         | [JAreaSelect Properties](https://help.jeecg.com/component/JAreaSelect.html#%E5%8F%82%E6%95%B0%E5%AE%9A%E4%B9%89)                                                                                                                                                                                                                                                                               |
| JEditor           | Rich Text Component                                 | [JEditor Properties](https://help.jeecg.com/component/JEditor.html#%E7%BB%84%E4%BB%B6%E5%8F%82%E6%95%B0)                                                                                                                                                                                                                                                                                       |
| JMarkdownEditor   | Markdown component                                  | [JMarkdownEditor Properties](https://help.jeecg.com/component/JMarkdownEditor.html#%E7%BB%84%E4%BB%B6%E5%8F%82%E6%95%B0)                                                                                                                                                                                                                                                                       |
| JSelectInput      | Input drop-down box component                       | [JSelectInput Properties](https://help.jeecg.com/component/JSelectInput.html#%E7%BB%84%E4%BB%B6%E5%8F%82%E6%95%B0)                                                                                                                                                                                                                                                                             |
| JCodeEditor       | Code Editor Components                              | `height`: height, string type, default value `auto`; `disabled`: whether to disable, default false; `fullScreen`: whether to full screen, default false; `zIndex`: index after full screen; `theme`: code theme, such as `html`; `language`: language; `keywords`: code hint                                                                                                                   |
| JCategorySelect   | Classification dictionary tree component            | [JCategorySelect Properties](https://help.jeecg.com/component/JCategorySelect.html#%E7%BB%84%E4%BB%B6%E5%8F%82%E6%95%B0)                                                                                                                                                                                                                                                                       |
| JSelectMultiple   | Drop-down multiple-select component                 | [JSelectMultiple Properties](https://help.jeecg.com/component/JSelectMultiple.html#%E7%BB%84%E4%BB%B6%E5%8F%82%E6%95%B0)                                                                                                                                                                                                                                                                       |
| JPopup            | Pop-up window selection component                   | [JPopup Properties](https://help.jeecg.com/component/JPopup.html#%E7%BB%84%E4%BB%B6%E5%8F%82%E6%95%B0)                                                                                                                                                                                                                                                                                         |
| JSwitch           | Switch components                                   | [JSwitch Properties](https://help.jeecg.com/component/JSwitch.html#%E7%BB%84%E4%BB%B6%E5%8F%82%E6%95%B0)                                                                                                                                                                                                                                                                                       |
| JEasyCron         | Timing Expression Selection Component               | [JEasyCron Properties](https://help.jeecg.com/component/JEasyCron.html#%E7%BB%84%E4%BB%B6%E5%8F%82%E6%95%B0)                                                                                                                                                                                                                                                                                   |
| JTreeDict         | Classification dictionary tree component            | [JTreeDict Properties](https://help.jeecg.com/component/JTreeDict.html#%E7%BB%84%E4%BB%B6%E5%8F%82%E6%95%B0)                                                                                                                                                                                                                                                                                   |
| JInputPop         | Multi-line input window component                   | [JInputPop Properties](https://help.jeecg.com/component/JInputPopup.html#%E7%BB%84%E4%BB%B6%E5%8F%82%E6%95%B0)                                                                                                                                                                                                                                                                                 |
| JCheckbox         | Multi-select component                              | [JCheckbox Properties](https://help.jeecg.com/component/JCheckbox.html#%E5%8F%82%E6%95%B0%E9%85%8D%E7%BD%AE)                                                                                                                                                                                                                                                                                   |
| JInput            | Special query components                            | [JInput Properties](https://help.jeecg.com/component/JInput.html#%E5%8F%82%E6%95%B0%E5%AE%9A%E4%B9%89)                                                                                                                                                                                                                                                                                         |
| JTreeSelect       | Drop-down tree selection component                  | [JTreeSelect Properties](https://help.jeecg.com/component/JTreeSelect.html#%E7%BB%84%E4%BB%B6%E5%8F%82%E6%95%B0)                                                                                                                                                                                                                                                                               |
| JSelectUserByDept | Select user components by department                | [JSelectUserByDept Properties](https://help.jeecg.com/component/JSelectUserByDept.html#%E5%8F%82%E6%95%B0%E5%AE%9A%E4%B9%89)                                                                                                                                                                                                                                                                   |
| JUpload           | Upload component                                    | [JUpload Properties](https://help.jeecg.com/component/JUpload.html#%E7%BB%84%E4%BB%B6%E5%8F%82%E6%95%B0)                                                                                                                                                                                                                                                                                       |
| JSearchSelect     | Search component of dictionary table                | [JSearchSelect Properties](https://help.jeecg.com/component/JSearchSelectTag.html#%E5%8F%82%E6%95%B0%E5%AE%9A%E4%B9%89)                                                                                                                                                                                                                                                                        |
| JAddInput         | Dynamically create input box                        | `value`: The bound value; `min`: The delete button will be displayed only when there are several data in the list, numeric type, the default value is 1                                                                                                                                                                                                                                        |
| UserSelect        | User selection component                            | [UserSelect Property](https://help.jeecg.com/component/UserSelect.html#%E9%85%8D%E7%BD%AE%E9%A1%B9)                                                                                                                                                                                                                                                                                            |
| RoleSelect        | Selecting Character Components                      | [RoleSelect Attributes](https://help.jeecg.com/component/JSelectRole.html#%E5%8F%82%E6%95%B0%E5%AE%9A%E4%B9%89)                                                                                                                                                                                                                                                                                |
| JRangeNumber      | Numeric range input box                             | \-                                                                                                                                                                                                                                                                                                                                                                                             |

### 4\. Display, hide and dynamically disable components

Scenario 1: We can hide the id so that it is not displayed on the page, but use it programmatically.  
Scenario 2: When the radio button "Overall evaluation of the company"

- When you choose satisfaction, hide the dissatisfaction statement;
- When you choose "unsatisfied", you need to fill in the reason for dissatisfaction and disable the satisfaction level.

Page Effects

Code Sample

> By default, the id is hidden statically. You can drag it when you are satisfied.

![](https://lfs.k.topthink.com/lfs/2f7472e26071f284f4bcffb89a95861dd5fd8fb5611dbc34519cb8a8dd4ffd41.dat)

> When you select "dissatisfied" in "Overall evaluation of the company", you need to fill in the reason for dissatisfaction, and the satisfaction level cannot be dragged

![](https://lfs.k.topthink.com/lfs/7a1bac0178afd36e572d50b9e05c50e748841696c3a148caa4ddb8f99e2f653d.dat)

> Use the `show`or `ifShow`attributes to control the display and hiding of form components

![](https://lfs.k.topthink.com/lfs/17be5b1eb7619c6f1af1e0fb49456ca3100d8b42bdcb631b4caa669b0664b683.dat)

> Disable using `dynamicDisabled`dynamic control form components

![](https://lfs.k.topthink.com/lfs/7ec5198fa1da6b912d8670c040dea372ff37bd6de7a81252e9902d43c5c91d9e.dat)

```
<!-- 字段显示与隐藏 -->
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
      field: 'id',
      label: '编号',
      component: 'Input',
      //隐藏id，css 控制，不会删除 dom（支持布尔类型 true和false。支持动态值判断，详情请见ifShow）
      show: false,
    },
    {
      field: 'evaluate',
      label: '对公司整体评价',
      component: 'RadioGroup',
      componentProps: {
        options: [
          { label: '满意', value: '0' },
          { label: '不满意', value: '1' },
        ],
      },
      defaultValue: '0',
    },
    {
      field: 'describe',
      label: '不满意原因说明',
      component: 'InputTextArea',
      //ifShow和show属性一致，values代表当前表单的值，js 控制，会删除 dom
      ifShow: ({ values }) => {
        return values.evaluate == '1';
      },
    },
    {
      field: 'satisfiedLevel',
      label: '满意度',
      component: 'Slider',
      componentProps: {
        tipFormatter: (value) => {
          return value + '%';
        },
      },
      //动态禁用，values代表当前表单的值，返回 true或false
      dynamicDisabled: ({ values }) => {
        return values.evaluate == '1';
      },
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
  });
</script>

<style scoped></style>
```

copy

### 5\. Content hints and component suffixes

- Scenario 1: Add the suffix month to the current month
- Scenario 2: Display the number of late arrivals and the amount of fines

#### 5.1 Page effects and code display

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/0c375f30bb830bf78bc23e2e959f1fe35597369843e43c872ac21d8d8991b7ca.dat)  
![](https://lfs.k.topthink.com/lfs/2fa5119c10f093e6fb3225c1a3384179fddd0c28f9bfbd4607c62abf390c6220.dat)

> Use `suffix`attributes to complete the component suffix prompt

![](https://lfs.k.topthink.com/lfs/2c650033e1737cd90987dbe7bfbda9fbe66959fb01c784549a690deb092fb175.dat)

> Use `helpMessage`hints help information

![](https://lfs.k.topthink.com/lfs/9e324e9b1dfd22c374a139fcf5a7714d3e4ef3f6be3f60bf668958b059823bb2.dat)

> You can use `helpComponentProps`the style of the modified prompt information

![](https://lfs.k.topthink.com/lfs/9dc0caa9407d09b46935a6f173cc8851f8f55c18e902bf79bed0b7c3c8ceca7a.dat)

```

<!-- 字段标题提示及前缀 -->
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
      field: 'month',
      label: '当前月份',
      component: 'Input',
      suffix: '月',
    },
    {
      field: 'lateNumber',
      label: '迟到次数',
      component: 'InputNumber',
      //帮助信息：可以直接返回String(helpMessage:"迟到次数")，也可以获取表单值，动态填写
      helpMessage: ({ values }) => {
        return '当前迟到次数' + values.lateNumber + ', 扣款' + values.lateNumber * 50 + '元';
      },
      defaultValue: 0,
    },
    {
      field: 'lateReason',
      label: '迟到原因',
      component: 'Input',
      helpMessage: '什么原因耽误上班迟到',
      //自定义提示属性，需要结合helpMessage一起使用
      helpComponentProps: {
        maxWidth: '200px',
        color: '#66CCFF',
      },
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
  });
</script>

<style scoped></style>
```

copy

#### 5.2 `helpComponentProps`Attribute Introduction

```
//最大宽度
maxWidth: string;
//是否显示序号
showIndex: boolean;
//文本列表,会覆盖helpMessage定义的文本
text: any;
//颜色
color: string;
//字体大小
fontSize: string;
//气泡框位置
placement: string;
```

copy

### 6\. Form validation

Only forms that pass the test are allowed to be saved. Example: Test the visitor form

Page Effects

Code Sample

> Trigger form validation effects

![](https://lfs.k.topthink.com/lfs/b62ea199a1661916f6f11af98110c70829dc51f14a3f8cc958a4a29d97471e22.dat)

- ① Fill in the form `required`to complete the automatic form check and check `rulesMessageJoinLabel`whether to add a title  
  ![](https://lfs.k.topthink.com/lfs/0cdd5bc1a4086e8d61626dec85c7323b58cfd2fd85a482cedecf5da7ac42e891.dat)
- ②Supports `required`obtaining the current value to judge the trigger values ​​representing the value of the current form  
  ![](https://lfs.k.topthink.com/lfs/99cc39fbb4503e2ccd9c5bfa3d22464adf9a65c4f212e6476f646e593697baad.dat)
- ③ Support regular expression pattern and custom prompt message, `rules`just use attributes  
  ![](https://lfs.k.topthink.com/lfs/3aa95723f43444bef7f2e13bf3ae3c266fb83c64b67784827f9b4f0f65bd874a.dat)

```

<!-- 表单验证 -->
<template>
  <!-- 自定义表单 -->
  <BasicForm @register="registerForm" style="margin: 50px 50px 0 50px" @submit="handleSubmit" />
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
      //自动触发检验，布尔类型
      required: true,
      //检验的时候不加上标题
      rulesMessageJoinLabel: false,
    },
    {
      field: 'accessed',
      label: '来访日期',
      component: 'DatePicker',
      //支持获取当前值判断触发 values代表当前表单的值
      required: ({ values }) => {
        return !values.accessed;
      },
    },
    {
      field: 'phone',
      label: '来访人手机号',
      component: 'Input',
      //支持正则表达式pattern 和 自定义提示信息 message
      rules: [{ required: false, message: '请输入正确的手机号', pattern: /^1[3456789]\d{9}$/ }],
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
  });

  /**
   * 提交事件
   */
  function handleSubmit(values: any) {}
</script>

<style scoped></style>
```

copy

### 7\. Custom dynamic form validation

- If you have not filled in the "Visiting mobile phone number", please enter your mobile phone number.
- The mobile phone number is incorrect. Please enter the correct mobile phone number.

Page Effects

Code Sample

> Mobile phone number has no value

![](https://lfs.k.topthink.com/lfs/bde060a3795386808bb3f4f0bcf449d3b0f93ec9a844d4818e7a626ec7a2e640.dat)

> The phone number has a value, but the phone number is incorrect

![](https://lfs.k.topthink.com/lfs/1e0cd8a23ef026519ad3461f04f9f5a824673d659b0eb50dedc28d4d94640e41.dat)

> Mobile phone number verification passed

![](https://lfs.k.topthink.com/lfs/1a5b54bc1539614d40679d9487d538f480e05b1a78a1710929e2ebb1b32e8ace.dat)

> Mainly based on `schemas`attribute dynamic inspection`dynamicRules`

![](https://lfs.k.topthink.com/lfs/642aca079925a30c51cb546f6e7605bcf9f1abf0a3dd797ade64ab4c7ee0d643.dat)

```
<!-- 动态表单验证 -->
<template>
  <!-- 自定义表单 -->
  <BasicForm @register="registerForm" style="margin: 50px 50px 0 50px" @submit="handleSubmit" />
</template>

<script lang="ts" setup>
  //引入依赖
  import { useForm, BasicForm, FormSchema } from '/@/components/Form';
  import { duplicateCheck } from '/@/views/system/user/user.api';

  //自定义表单字段
  const formSchemas: FormSchema[] = [
    {
      field: 'visitor',
      label: '来访人员',
      component: 'Input',
      //自动触发检验，布尔类型
      required: true,
    },
    {
      field: 'accessed',
      label: '来访日期',
      component: 'DatePicker',
      //支持获取当前值判断触发 values代表当前表单的值
      required: ({ values }) => {
        return !values.accessed;
      },
    },
    {
      field: 'phone',
      label: '来访人手机号',
      component: 'Input',
      //动态自定义正则，values: 当前表单的所有值
      dynamicRules: ({ values }) => {
        console.log('values:', values);
        //需要return
        return [
          {
            //默认开启表单检验
            required: true,
            // value 当前手机号输入的值
            validator: (_, value) => {
              //需要return 一个Promise对象
              return new Promise((resolve, reject) => {
                if (!value) {
                  reject('请输入手机号！');
                }
                //验证手机号是否正确
                let reg = /^1[3456789]\d{9}$/;
                if (!reg.test(value)) {
                  reject('请输入正确手机号！');
                }
                resolve();
              });
            },
          },
        ];
      },
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
  });

  /**
   * 提交事件
   */
  function handleSubmit(values: any) {}
</script>

<style scoped></style>
```

copy

### 8\. `slot`Simple use of field slots

Example: When collecting user feedback, the following text message is provided so that users can understand and fill in the form.

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/79166449eb5afd1af62adc3960e4f0a599148fd4c8f291a66ca5b6a308ad16c8.dat)

> In `shemes`we can `slot`bind by `BasicForm`filling in the name of the corresponding slot in

![](https://lfs.k.topthink.com/lfs/1ea5c2e5c72ab8834fb0bc817ace5367b13b482ebcbbe6cf5f2223d4c4426934.dat)

```

<!-- 插槽 -->
<template>
  <!-- 自定义表单 -->
  <BasicForm @register="registerForm" style="margin: 50px 50px 0 50px">
    <!--  #phone对应的是formSchemas对应slot(phone)插槽    -->
    <template #phone="{ model, field }">
      <!-- 如果是组件需要进行双向绑定，model当前表单对象，field当前字段名称  -->
      <a-input v-model:value="model[field]" placeholder="请输入手机号" />
      <span class="font-color">请输入您的手机号，方便我们联系您</span>
    </template>
    <template #feedback="{ model, field }">
      <JEditor v-model:value="model[field]" placeholder="请输入问题反馈" />
      <span class="font-color">请您图文并茂，方便我们了解问题并及时反馈</span>
    </template>
  </BasicForm>
</template>

<script lang="ts" setup>
  //引入依赖
  import { useForm, BasicForm, FormSchema } from '/@/components/Form';
  import JEditor from '/@/components/Form/src/jeecg/components/JEditor.vue';

  //自定义表单字段
  const formSchemas: FormSchema[] = [
    {
      field: 'name',
      label: '姓名',
      component: 'Input',
    },
    {
      field: 'phone',
      label: '联系方式',
      component: 'Input',
      slot: 'phone',
    },
    {
      field: 'feedback',
      label: '问题反馈',
      component: 'InputTextArea',
      slot: 'feedback',
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
  });
</script>

<style scoped>
  .font-color {
    font-size: 13px;
    color: #a1a1a1;
    margin-bottom: 5px;
  }
</style>
```

copy

### 9\. Custom Components

Custom components are divided into two ways

- `slot`Slot Mode
- `component`Way

#### 9.1 Slot Mode

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/dc10d1ed3076b9a590fe47503341d4151d79416a085417858f7d77e132eeb3e0.dat)

> In `shemes`we can `slot`bind by `BasicForm`filling in the name of the corresponding slot in

![](https://lfs.k.topthink.com/lfs/f896866cebfb9095be33add0f75f2ccdbe00b28ae171c05a0aeae08bbf8b3a1e.dat)

> Generally we put it `src/components/Form/src/jeecg`in a directory. The name of the custom component in this example is`CustomDemo`

![](https://lfs.k.topthink.com/lfs/06eda0569a95017738765857b6c82bc72cda32cf5b9efaaa8d58c9c47cbd09a4.dat)

```
<template>
  <a-input v-model:value="innerValue" @change="handleChange">
    <template #addonAfter>
      <a-icon type="setting" @click="handleIconClick" style="cursor: pointer"></a-icon>
    </template>
  </a-input>
</template>

<script lang="ts">
  import { defineComponent, watch, ref } from 'vue';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { propTypes } from '/@/utils/propTypes';

  export default defineComponent({
    name: 'CustomDemo',
    props: {
      value: propTypes.string.def(''),
    },
    emits: ['change', 'update:value'],
    setup(props, { emit }) {
      const { createMessage } = useMessage();

      const innerValue = ref<any>('');
      //监听value变化
      watch(
        () => props.value,
        (val) => {
          innerValue.value = val;
        },
        { immediate: true }
      );

      /**
       * 设置按钮点击事件
       */
      function handleIconClick() {
        createMessage.success('当前值:' + innerValue.value);
      }

      /**
       * change事件
       * @param e
       */
      function handleChange(e) {
        let value = e.target.value;
        emit('update:value', value);
        emit('change', value);
      }

      return {
        innerValue,
        handleIconClick,
        handleChange,
      };
    },
  });
</script>

<style scoped></style>
```

copy

> Component reference

```
<!-- 插槽 -->
<template>
  <!-- 自定义表单 -->
  <BasicForm @register="registerForm" style="margin: 50px 50px 0 50px" @submit="handleSubmit">
      <!--  #name对应的是formSchemas对应slot(name)插槽    -->
      <template #name="{ model, field }">
        <CustomDemo v-model:value="model[field]" />
      </template>
  </BasicForm>
</template>

<script lang="ts" setup>
  //引入依赖
  import { useForm, BasicForm, FormSchema } from '/@/components/Form';
  //引入CustomDemo自定义组件
  import CustomDemo from '/@/components/Form/src/jeecg/demo/CustomDemo.vue'

  //自定义表单字段
  const formSchemas: FormSchema[] = [
    {
      field: 'name',
      label: '姓名',
      component: 'Input',
      slot:'name'
    },
    {
      field: 'phone',
      label: '联系方式',
      component: 'Input',
    },
    {
      field: 'feedback',
      label: '问题反馈',
      component: 'InputTextArea',
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
  });

  /**
   * 提交信息
   */
  function handleSubmit(values) {
    console.log("values::",values);
  }
</script>

<style scoped>
  .font-color {
    font-size: 13px;
    color: #a1a1a1;
    margin-bottom: 5px;
  }
</style>
```

copy

#### 9.2 Component Method

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/879f765d1ebf3fa0566c0698cbf15220850f2f0d9935210a51e3ad5301eb44bf.dat)

> Generally we put it `src/components/Form/src/jeecg`in a directory. The name of the custom component in this example is`CustomDemo`

![](https://lfs.k.topthink.com/lfs/06eda0569a95017738765857b6c82bc72cda32cf5b9efaaa8d58c9c47cbd09a4.dat)

```
<template>
  <a-input v-model:value="innerValue" @change="handleChange">
    <template #addonAfter>
      <a-icon type="setting" @click="handleIconClick" style="cursor: pointer"></a-icon>
    </template>
  </a-input>
</template>

<script lang="ts">
  import { defineComponent, watch, ref } from 'vue';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { propTypes } from '/@/utils/propTypes';

  export default defineComponent({
    name: 'CustomDemo',
    props: {
      value: propTypes.string.def(''),
    },
    emits: ['change', 'update:value'],
    setup(props, { emit }) {
      const { createMessage } = useMessage();

      const innerValue = ref<any>('');
      //监听value变化
      watch(
        () => props.value,
        (val) => {
          innerValue.value = val;
        },
        { immediate: true }
      );

      /**
       * 设置按钮点击事件
       */
      function handleIconClick() {
        createMessage.success('当前值:' + innerValue.value);
      }

      /**
       * change事件
       * @param e
       */
      function handleChange(e) {
        let value = e.target.value;
        emit('update:value', value);
        emit('change', value);
      }

      return {
        innerValue,
        handleIconClick,
        handleChange,
      };
    },
  });
</script>

<style scoped></style>
```

copy

> Global import: path`src/components/Form/src/componentMap.ts`

![](https://lfs.k.topthink.com/lfs/3455fb4a8432f63321555b92a5b09b676f7142d9488eb269bcab6837882b78cb.dat)

```
import CustomDemo from './jeecg/demo/CustomDemo.vue';
componentMap.set('CustomDemo',CustomDemo);
```

copy

> `ComponentType`Introduce custom components in the path`src/components/Form/src/types/index.ts`

![](https://lfs.k.topthink.com/lfs/43d0415a4939f5376a26afdfb925c1c3edb14f410a92ad76981a33c8c0135fbb.dat)

```
| 'CustomDemo'
```

copy

> Import into component

![](https://lfs.k.topthink.com/lfs/140aca751ab92bd86a20ce546903ef2f5ff5574a1fa294fd9f2a6eb694fa3f18.dat)

```
<!-- 自定义组件 -->
<template>
  <!-- 自定义表单 -->
  <BasicForm @register="registerForm" style="margin-top: 50px; margin-left: 50px" />
</template>

<script lang="ts" setup>
  //引入依赖
  import { useForm, BasicForm, FormSchema } from '/@/components/Form';

  //自定义表单字段
  const formSchemas: FormSchema[] = [
    {
      field: 'custom',
      label: '自定义组件',
      //引入自定义组件
      component: 'CustomDemo',
    },
  ];

  /**
   * BasicForm绑定注册;
   */
  const [registerForm] = useForm({
    //注册表单列
    schemas: formSchemas,
    showActionButtonGroup: false,
  });

</script>

<style scoped></style>
```

copy

### 10\. Custom Rendering

Example: Product description requires product name plus price times quantity

Page Effects

Code Sample

- ① Custom component input box
- ② Product name plus price multiplied by price

![](https://lfs.k.topthink.com/lfs/e36a3f58f7b34c230af0115dea21f0230990182ac438203aa9093277094bff01.dat)

> ① Custom rendering components

![](https://lfs.k.topthink.com/lfs/f9b6080de271224b756374b7aad2bc54ebe6d3c231a7d841cc742304f86d61bb.dat)

> ② Custom text rendering

![](https://lfs.k.topthink.com/lfs/c624b38f5ba8b9cd077b2fed8c916dbd5627ff0c29c0ff9cab14d63ee6c49447.dat)

```
<!-- 自定义渲染 -->
<template>
  <!-- 自定义表单 -->
  <BasicForm @register="registerForm" style="margin: 50px 50px 0 50px">
    <!--  #phone对应的是formSchemas对应slot(phone)插槽    -->
    <template #phone="{ model, field }">
      <!-- 如果是组件需要进行双向绑定，model当前表单对象，field当前字段名称  -->
      <a-input v-model:value="model[field]" placeholder="请输入手机号" />
      <span class="font-color">请输入您的手机号，方便我们联系您</span>
    </template>
    <template #feedback="{ model, field }">
      <JEditor v-model:value="model[field]" placeholder="请输入问题反馈" />
      <span class="font-color">请您图文并茂，方便我们了解问题并及时反馈</span>
    </template>
  </BasicForm>
</template>

<script lang="ts" setup>
  //引入依赖
  import { useForm, BasicForm, FormSchema } from '/@/components/Form';
  import JEditor from '/@/components/Form/src/jeecg/components/JEditor.vue';
  import { h } from 'vue';
  import { Input } from 'ant-design-vue';

  //自定义表单字段
  const formSchemas: FormSchema[] = [
    {
      field: 'productName',
      label: '商品名称',
      component: 'Input',
    },
    {
      field: 'price',
      label: '价格',
      component: 'InputNumber',
    },
    {
      field: 'buyNums',
      label: '购买个数',
      component: 'InputNumber',
      //model 单签表单对象，field 当前字段
      render: ({ model, field }) => {
        //渲染自定义组件，以Input为例
        return h(Input, {
          placeholder: '请输入购买个数',
          value: model[field],
          style: { width: '100%' },
          type: 'number',
          onChange: (e: ChangeEvent) => {
            model[field] = e.target.value;
          },
        });
      },
    },
    {
      field: 'describe',
      label: '描述',
      component: 'Input',
      componentProps: {
        disabled: true,
      },
      //渲染 values当前表单所有值
      render: ({ values }) => {
        let productName = values.productName;
        let price = values.price ? values.price : 0;
        let buyNums = values.buyNums ? values.buyNums : 0;
        return '购买商品名称：' + productName + ', 总价格: ' + price * buyNums + '元';
      },
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
  });
</script>

<style scoped>
  /** 数字输入框样式 */
  :deep(.ant-input-number) {
    width: 100%;
  }
</style>
```

copy

## `schemas`API attributes

| Attributes             | type                                                                         | default value | Optional Values | illustrate                                                                                                       |
| ---------------------- | ---------------------------------------------------------------------------- | ------------- | --------------- | ---------------------------------------------------------------------------------------------------------------- |
| field                  | string                                                                       | \-            | \-              | Field Name                                                                                                       |
| label                  | string                                                                       | \-            | \-              | Tag Name                                                                                                         |
| subLabel               | string                                                                       | \-            | \-              | Secondary label name gray                                                                                        |
| suffix                 | string , number , ((values: RenderCallbackParams) => string / number);       | \-            | \-              | Content behind the component                                                                                     |
| changeEvent            | string                                                                       | \-            | \-              | Form update event name                                                                                           |
| helpMessage            | string , string\[\]                                                          | \-            | \-              | Tips on the right side of the tag name, see 4. Content Tips and Component Suffixes                               |
| helpComponentProps     | HelpComponentProps                                                           | \-            | \-              | The friendly reminder component on the right side of the tag name, see 4. Content prompts and component suffixes |
| labelWidth             | string , number                                                              | \-            | \-              | Override the uniformly set labelWidth                                                                            |
| disabledLabelWidth     | boolean                                                                      | false         | true/false      | Disable the labelWidth setting of the form globally, and manually set labelCol and wrapperCol                    |
| component              | string                                                                       | \-            | \-              | Component type, see 1. Basic usage                                                                               |
| componentProps         | any,()=>{}                                                                   | \-            | \-              | The props of the rendered component                                                                              |
| rules                  | ValidationRule\[\]                                                           | \-            | \-              | Verification rules, see 5. Form verification                                                                     |
| required               | boolean                                                                      | \-            | \-              | Enable form validation                                                                                           |
| rulesMessageJoinLabel  | boolean                                                                      | false         | \-              | Check whether the information is added to the label                                                              |
| itemProps              | any                                                                          | \-            | \-              | Injected into FormItem's properties                                                                              |
| colProps               | ColEx                                                                        | \-            | \-              | Component occupancy ratio, such as colProps: { span: 18 }                                                        |
| defaultValue           | object                                                                       | \-            | \-              | The initial value of the rendered component                                                                      |
| render                 | (renderCallbackParams: RenderCallbackParams) => VNode / VNode\[\] / string\` | \-            | \-              | Custom rendering components                                                                                      |
| renderColContent       | (renderCallbackParams: RenderCallbackParams) => VNode / VNode\[\] / string   | \-            | \-              | Custom rendering component (need to include formItem)                                                            |
| renderComponentContent | (renderCallbackParams: RenderCallbackParams) => any / string                 | \-            | \-              | Slots inside custom rendering groups                                                                             |
| slot                   | string                                                                       | \-            | \-              | Custom slot, rendering component                                                                                 |
| colSlot                | string                                                                       | \-            | \-              | Custom slot, rendering component (need to include formItem                                                       |
| show                   | boolean / ((renderCallbackParams: RenderCallbackParams) => boolean)          | \-            | \-              | Dynamically determine whether the current component is displayed, controlled by CSS, and will not delete the DOM |
| ifShow                 | boolean / ((renderCallbackParams: RenderCallbackParams) => boolean)          | \-            | \-              | Dynamically determine whether the current component is displayed, js control, dom will be deleted                |
| dynamicDisabled        | boolean / ((renderCallbackParams: RenderCallbackParams) => boolean)          | \-            | \-              | Dynamically determine whether the current component is disabled                                                  |
| dynamicRules           | boolean / ((renderCallbackParams: RenderCallbackParams) => boolean)          | \-            | \-              | Dynamically return the current component's validation rules                                                      |
| dynamicPropskey        | string                                                                       | \-            | \-              | Set the key corresponding to the value that needs to be dynamically updated (must be used with dynamicPropsVal)  |
| dynamicPropsVal        | ((renderCallbackParams: RenderCallbackParams) => any)                        | \-            | \-              | Dynamically update the current component props (must be used with dynamicPropskey)                               |
