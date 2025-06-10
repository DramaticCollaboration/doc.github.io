---
order: 32
---

# BasicForm form back

Encapsulate `antv`the form component and expand some common functions

> If it is not in the documentation, try looking for it in the online examples.

## Usage

### The useForm method

Here is an example using a simple form with only one input box

```
<template>
  <div class="m-4">
    <BasicForm
      :labelWidth="100"
      :schemas="schemas"
      :actionColOptions="{ span: 24 }"
      @submit="handleSubmit"
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicForm, FormSchema } from '/@/components/Form';
  import { CollapseContainer } from '/@/components/Container';
  import { useMessage } from '/@/hooks/web/useMessage';
  const schemas: FormSchema[] = [
    {
      field: 'field',
      component: 'Input',
      label: '字段1',
      colProps: {
        span: 8,
      },
      defaultValue: '1',
      componentProps: {
        placeholder: '自定义placeholder',
        onChange: (e) => {
          console.log(e);
        },
      },
    },
  ];

  export default defineComponent({
    components: { BasicForm, CollapseContainer },
    setup() {
      const { createMessage } = useMessage();
      return {
        schemas,
        handleSubmit: (values: any) => {
          createMessage.success('click search,values:' + JSON.stringify(values));
        },
      };
    },
  });
</script>
```

copy

### Template method

All callable functions are `Methods`described below.

```
<template>
  <div class="m-4">
      <BasicForm
        :schemas="schemas"
        ref="formElRef"
        :labelWidth="100"
        @submit="handleSubmit"
        :actionColOptions="{ span: 24 }"
      />
  <div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicForm, FormSchema, FormActionType, FormProps } from '/@/components/Form';
  import { CollapseContainer } from '/@/components/Container';
  const schemas: FormSchema[] = [
  ];

  export default defineComponent({
    components: { BasicForm, CollapseContainer },
    setup() {
      const formElRef = ref<Nullable<FormActionType>>(null);
      return {
        formElRef,
        schemas,
        setProps(props: FormProps) {
          const formEl = formElRef.value;
          if (!formEl) return;
          formEl.setProps(props);
        },
      };
    },
  });
</script>
```

copy

## useForm

The form component also provides `useForm`a convenient way to call internal methods of functions

### Example

```
<template>
  <BasicForm @register="register" @submit="handleSubmit" />
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { CollapseContainer } from '/@/components/Container/index';
  import { useMessage } from '/@/hooks/web/useMessage';
  const schemas: FormSchema[] = [
    {
      field: 'field1',
      component: 'Input',
      label: '字段1',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '自定义placeholder',
        onChange: (e: any) => {
          console.log(e);
        },
      },
    },
  ];

  export default defineComponent({
    components: { BasicForm, CollapseContainer },
    setup() {
      const { createMessage } = useMessage();
      const [register, { setProps }] = useForm({
        labelWidth: 120,
        schemas,
        actionColOptions: {
          span: 24,
        },
      });
      return {
        register,
        schemas,
        handleSubmit: (values: any) => {
          createMessage.success('click search,values:' + JSON.stringify(values));
        },
        setProps,
      };
    },
  });
</script>
```

copy

### Parameter Introduction

```
const [register, methods] = useForm(props);

```

copy

**The value in the parameter props can be computed or ref type**

**register**

register is used for registration `useForm`. If you need to use `useForm`the provided api, you must pass register to the component's`onRegister`

```
<template>
  <BasicForm @register="register" @submit="handleSubmit" />
</template>
<script>
  export default defineComponent({
    components: { BasicForm },
    setup() {
      const [register] = useForm();
      return {
        register,
      };
    },
  });
</script>
```

copy

`Methods`See description below

### Methods

**getFieldsValue**

type:`() => Recordable;`

Description: Get form value

**setFieldsValue**

type:`<T>(values: T) => Promise<void>`

Description: Set the form field value

**resetFields**

type:`()=> Promise<any>`

Description: Reset form values

**validateFields**

type:`(nameList?: NamePath[]) => Promise<any>`

Description: Check the specified form item

**validate**

type:`(nameList?: NamePath[]) => Promise<any>`

Description: Validate the entire form

**submit**

type:`() => Promise<void>`

Description: Submit the form

**scrollToField**

type:`(name: NamePath, options?: ScrollOptions) => Promise<void>`

Description: Scroll to the corresponding field position

**clearValidate**

type:`(name?: string | string[]) => Promise<void>`

Description: Clear verification

**setProps**

TIP

To set the props of the form, you can pass it directly on the tag, use setProps, or initialize it by writing useForm(props)

type:`(formProps: Partial<FormProps>) => Promise<void>`

Description: Set form Props

**removeSchemaByFiled**

type:`(field: string | string[]) => Promise<void>`

Description: Delete Schema based on field

**appendSchemaByField**

type:`( schema: FormSchema, prefixField: string | undefined, first?: boolean | undefined ) => Promise<void>`

Description: Insert after the specified field. If no field is specified, insert at the end. When first = true, insert at the first position.

**updateSchema**

type:`(data: Partial<FormSchema> | Partial<FormSchema>[]) => Promise<void>`

Description: Update the form's schema, only update the parameters passed by the function

e.g

```
updateSchema({ field: 'filed', componentProps: { disabled: true } });
updateSchema([
  { field: 'filed', componentProps: { disabled: true } },
  { field: 'filed1', componentProps: { disabled: false } },
]);
```

copy

## Props

Reminder

In addition to the following parameters, props in the official documentation are also supported. For details, please refer to [antv form](https://www.antdv.com/components/form-cn)

| Attributes            | type                                        | default value | Optional Values                 | illustrate                                                                                                                                                                                                         | Version |
| --------------------- | ------------------------------------------- | ------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| schemas               | `Schema[]`                                  | \-            | \-                              | Form configuration, see `FormSchema`the configuration below                                                                                                                                                        |         |
| submitOnReset         | `boolean`                                   | `false`       | \-                              | Whether to submit the form when resetting                                                                                                                                                                          |         |
| labelCol              | Partial                                     | \-            | \-                              | Common LabelCol configuration for the entire form                                                                                                                                                                  |         |
| wrapperCol            | Partial                                     | \-            | \-                              | Common wrapperCol configuration for the entire form                                                                                                                                                                |         |
| baseColProps          | Partial                                     | \-            | \-                              | Configure ColProps for all selected items. You don't need to configure them one by one. You can also configure the priority and global of each item separately.                                                    |         |
| baseRowStyle          | `object`                                    | \-            | \-                              | Configure the style of all Rows                                                                                                                                                                                    |         |
| labelWidth            | number , string                             | \-            | \-                              | Expand the form component and increase the label width. This applies to all components in the form and can be overridden or disabled for a single item.                                                            |         |
| labelAlign            | `string`                                    | \-            | `left`,`right`                  | Label layout                                                                                                                                                                                                       |         |
| mergeDynamicData      | `object`                                    | \-            | \-                              | Additional parameter values ​​passed to child components                                                                                                                                                           |         |
| autoFocusFirstItem    | `boolean`                                   | `false`       | \-                              | Whether to focus on the first input box. This only works when the first form item is input.                                                                                                                        |         |
| compact               | `boolean`                                   | `false`       | `true/false`                    | Compact type form, reduce margin-bottom                                                                                                                                                                            |         |
| size                  | `string`                                    | `default`     | `'default' , 'small' , 'large'` | Pass the size parameter to all components in the form. Custom components need to implement size reception themselves.                                                                                              |         |
| disabled              | `boolean`                                   | `false`       | `true/false`                    | Pass the disabled attribute to all components in the form. Custom components need to implement disabled reception themselves.                                                                                      |         |
| autoSetPlaceHolder    | `boolean`                                   | `true`        | `true/false`                    | Automatically set the placeholder of the component in the form. Custom components need to be implemented by themselves.                                                                                            |         |
| autoSubmitOnEnter     | `boolean`                                   | `false`       | `true/false`                    | Press Enter to submit automatically when typing in input                                                                                                                                                           | 2.4.0   |
| rulesMessageJoinLabel | `boolean`                                   | `false`       | `true/false`                    | If the form item has validation, validation information will be automatically generated. This parameter controls whether the Chinese name of the field is concatenated to the automatically generated information. |         |
| showAdvancedButton    | `boolean`                                   | `false`       | `true/false`                    | Whether to display the collapse and expand button                                                                                                                                                                  |         |
| emptySpan             | number , Partial                            | 0             | \-                              | Blank rows, can be a value or col object                                                                                                                                                                           |         |
| autoAdvancedLine      | `number`                                    | 3             | \-                              | If showAdvancedButton is true, rows exceeding the specified number of rows will be collapsed by default                                                                                                            |         |
| alwaysShowLines       | `number`                                    | 1             | \-                              | Always keep the number of rows displayed when collapsed                                                                                                                                                            | 2.7.1   |
| showActionButtonGroup | `boolean`                                   | `true`        | `true/false`                    | Whether to display the action button (reset/submit)                                                                                                                                                                |         |
| actionColOptions      | `Partial<ColEx>`                            | \-            | \-                              | Col component configuration for the outer layer of the action button. If showAdvancedButton is enabled, no setting is required. For details, see actionColOptions below                                            |         |
| showResetButton       | `boolean`                                   | `true`        | \-                              | Whether to display the reset button                                                                                                                                                                                |         |
| resetButtonOptions    | `object`                                    |               | \-                              | For reset button configuration, see ActionButtonOption below                                                                                                                                                       |         |
| showSubmitButton      | `boolean`                                   | `true`        | \-                              | Whether to display the submit button                                                                                                                                                                               |         |
| submitButtonOptions   | `object`                                    |               | \-                              | Confirm button configuration see ActionButtonOption below                                                                                                                                                          |         |
| resetFunc             | () => Promise                               |               | \-                              | Custom reset button logic`() => Promise<void>;`                                                                                                                                                                    |         |
| submitFunc            | () => Promise                               |               | \-                              | Custom submit button logic`() => Promise<void>;`                                                                                                                                                                   |         |
| fieldMapToTime        | \[string, \[string, string\], string?\]\[\] |               | \-                              | Used to set the time area in the form to 2 fields, see the instructions below                                                                                                                                      |         |

### ColEx

见 [src/components/Form/src/types/index.ts](https://github.com/jeecgboot/jeecgboot-vue3/tree/master/src/components/Form/src/types/index.ts)

### ActionButtonOption

[BasicButtonProps](https://github.com/jeecgboot/jeecgboot-vue3/tree/master/src/components/Button/types.ts)

```
export interface ButtonProps extends BasicButtonProps {
  text?: string;
}

```

copy

### fieldMapToTime

Map the value of the time zone in the form into 2 fields

If there is a time interval component in the form, the value obtained is an array, but we often need to pass it to the backend as 2 fields

```
useForm({
  fieldMapToTime: [
    // data为时间组件在表单内的字段，startTime，endTime为转化后的开始时间于结束时间
    // 'YYYY-MM-DD'为时间格式，参考moment
    ['datetime', ['startTime', 'endTime'], 'YYYY-MM-DD'],
    // 支持多个字段
    ['datetime1', ['startTime1', 'endTime1'], 'YYYY-MM-DD HH:mm:ss'],
  ],
});

// fieldMapToTime没写的时候表单获取到的值
{
  datetime: [Date(),Date()]
}
//  ['datetime', ['startTime', 'endTime'], 'YYYY-MM-DD'],之后
{
    datetime: [Date(),Date()],
    startTime: '2020-08-12',
    endTime: '2020-08-15',
}

```

copy

### FormSchema

| Attributes             | type                                                                       | default value | Optional Values | illustrate                                                                                                               |
| ---------------------- | -------------------------------------------------------------------------- | ------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------ |
| field                  | `string`                                                                   | \-            | \-              | Field Name                                                                                                               |
| label                  | `string`                                                                   | \-            | \-              | Tag Name                                                                                                                 |
| subLabel               | `string`                                                                   | \-            | \-              | Secondary label name gray                                                                                                |
| suffix                 | string , number , ((values: RenderCallbackParams) => string / number);     | \-            | \-              | Content behind the component                                                                                             |
| changeEvent            | `string`                                                                   | \-            | \-              | Form update event name                                                                                                   |
| helpMessage            | `string , string[]`                                                        | \-            | \-              | Friendly reminder on the right side of the label name                                                                    |
| helpComponentProps     | `HelpComponentProps`                                                       | \-            | \-              | The right side of the tag name shows the component props, see HelpComponentProps below                                   |
| labelWidth             | `string , number`                                                          | \-            | \-              | Override the uniformly set labelWidth                                                                                    |
| disabledLabelWidth     | `boolean`                                                                  | false         | true/false      | Disable the labelWidth setting of the form globally, and manually set labelCol and wrapperCol                            |
| component              | `string`                                                                   | \-            | \-              | Component type, see ComponentType below                                                                                  |
| componentProps         | `any,()=>{}`                                                               | \-            | \-              | The props of the rendered component                                                                                      |
| rules                  | `ValidationRule[]`                                                         | \-            | \-              | Validation rules, see ValidationRule below                                                                               |
| required               | `boolean`                                                                  | \-            | \-              | Simplify rules configuration, convert to \[{required}\] if true . `2.4.0`Previous versions only supported string values. |
| rulesMessageJoinLabel  | `boolean`                                                                  | false         | \-              | Check whether the information is added to the label                                                                      |
| itemProps              | `any`                                                                      | \-            | \-              | Refer to the FormItem below                                                                                              |
| colProps               | `ColEx`                                                                    | \-            | \-              | Refer to actionColOptions above                                                                                          |
| defaultValue           | `object`                                                                   | \-            | \-              | The initial value of the rendered component                                                                              |
| render                 | (renderCallbackParams: RenderCallbackParams) => VNode / VNode\[\] / string | \-            | \-              | Custom rendering components                                                                                              |
| renderColContent       | (renderCallbackParams: RenderCallbackParams) => VNode / VNode\[\] / string | \-            | \-              | Custom rendering component (need to include formItem)                                                                    |
| renderComponentContent | (renderCallbackParams: RenderCallbackParams) => any / string               | \-            | \-              | Slots inside custom rendering groups                                                                                     |
| slot                   | `string`                                                                   | \-            | \-              | Custom slot, rendering component                                                                                         |
| colSlot                | `string`                                                                   | \-            | \-              | Custom slot, rendering component (need to include formItem)                                                              |
| show                   | boolean / ((renderCallbackParams: RenderCallbackParams) => boolean)        | \-            | \-              | Dynamically determine whether the current component is displayed, controlled by CSS, and will not delete the DOM         |
| ifShow                 | boolean / ((renderCallbackParams: RenderCallbackParams) => boolean)        | \-            | \-              | Dynamically determine whether the current component is displayed, js control, dom will be deleted                        |
| dynamicDisabled        | boolean / ((renderCallbackParams: RenderCallbackParams) => boolean)        | \-            | \-              | Dynamically determine whether the current component is disabled                                                          |
| dynamicRules           | boolean / ((renderCallbackParams: RenderCallbackParams) => boolean)        | \-            | \-              | Dynamically return the current component's validation rules                                                              |

**RenderCallbackParams**

```
export interface RenderCallbackParams {
  schema: FormSchema;
  values: any;
  model: any;
  field: string;
}

```

copy

**componentProps**

- When the value is an object type, the object will `component`be passed into the component as props of the corresponding component.

- When the value is a function

There are 4 parameters

`schema`: The entire schema of the form

`formActionType`: The function that operates the form. It is consistent with the operation function returned by useForm

`formModel`: The two-way binding object of the form, this value is responsive. So it can easily handle many operations

`tableAction`: The function to operate the table, which is the same as the function returned by useTable. Note that this parameter only has a value when the search form is opened in the table. In other cases `null`,

```
{
  // 简单例子，值改变的时候操作表格或者修改表单内其他元素的值
  component:'Input',
  componentProps: ({ schema, tableAction, formActionType, formModel }) => {
    return {
      // xxxx props
      onChange:e=>{
        const {reload}=tableAction
        reload()
        // or
        formModel.xxx='123'
      }
    };
  };
}

```

copy

**HelpComponentProps**

```
export interface HelpComponentProps {
  maxWidth: string;
  // 是否显示序号
  showIndex: boolean;
  // 文本列表
  text: any;
  // 颜色
  color: string;
  // 字体大小
  fontSize: string;
  icon: string;
  absolute: boolean;
  // 定位
  position: any;
}

```

copy

**ComponentType**

Optional types for components in schema

```
export type ComponentType =
  | 'Input'
  | 'InputGroup'
  | 'InputPassword'
  | 'InputSearch'
  | 'InputTextArea'
  | 'InputNumber'
  | 'InputCountDown'
  | 'Select'
  | 'ApiSelect'
  | 'TreeSelect'
  | 'RadioButtonGroup'
  | 'RadioGroup'
  | 'Checkbox'
  | 'CheckboxGroup'
  | 'AutoComplete'
  | 'Cascader'
  | 'DatePicker'
  | 'MonthPicker'
  | 'RangePicker'
  | 'WeekPicker'
  | 'TimePicker'
  | 'Switch'
  | 'StrengthMeter'
  | 'Upload'
  | 'IconPicker'
  | 'Render'
  | 'Slider'
  | 'Rate'
  | 'Divider';  // v2.7.2新增

```

copy

### Divider schema description

`Divider`The Divider type is used as `schemas`a placeholder in the form. It will be rendered as a divider (always takes up a full line of layout), which can be used to separate the layout of a longer form. Please only treat the Divider type schema as a divider, not a regular form field.

- **`Divider`Will only `showAdvancedButton`be shown if false**`Divider` (i.e. it will not be shown if form collapse and expand are enabled )
- `Divider`Use `schema`and `label`to `helpMessage`render the prompt content in the dividing line
- `Divider`You can use it `componentProps`to set `type`props other than
- `Divider`It will not be rendered `AFormItem`, so the properties other `schema`than `label`, `componentProps`, `helpMessage`, `helpComponentProps`will not be used.

## Add the required component types yourself

Add`src/components/Form/src/componentMap.ts` the required components and add the corresponding type key in **the ComponentType above**

### Method 1

This writing method is suitable for components with higher application frequency

```
componentMap.set('componentName', 组件);

// ComponentType
export type ComponentType = xxxx | 'componentName';

```

copy

### Method 2

Register using **useComponentRegister**

This writing method can only be used in the current page. After the page is destroyed, the corresponding component will be deleted from componentMap

```
import { useComponentRegister } from '@/components/form/index';

import { StrengthMeter } from '@/components/strength-meter/index';

useComponentRegister('StrengthMeter', StrengthMeter);

```

copy

hint

The reason for method 2 is to reduce the package size. If a component is large, using method 1 may increase the size of the first screen.

### render

Custom rendering content

```
<template>
  <div class="m-4">
    <BasicForm @register="register" @submit="handleSubmit" />
  </div>
</template>
<script lang="ts">
  import { defineComponent, h } from 'vue';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { Input } from 'ant-design-vue';
  const schemas: FormSchema[] = [
    {
      field: 'field1',
      component: 'Input',
      label: '字段1',
      colProps: {
        span: 8,
      },
      rules: [{ required: true }],
      render: ({ model, field }) => {
        return h(Input, {
          placeholder: '请输入',
          value: model[field],
          onChange: (e: ChangeEvent) => {
            model[field] = e.target.value;
          },
        });
      },
    },
    {
      field: 'field2',
      component: 'Input',
      label: '字段2',
      colProps: {
        span: 8,
      },
      rules: [{ required: true }],
      renderComponentContent: () => {
        return {
          suffix: () => 'suffix',
        };
      },
    },
  ];
  export default defineComponent({
    components: { BasicForm },
    setup() {
      const { createMessage } = useMessage();
      const [register, { setProps }] = useForm({
        labelWidth: 120,
        schemas,
        actionColOptions: {
          span: 24,
        },
      });
      return {
        register,
        schemas,
        handleSubmit: (values: any) => {
          createMessage.success('click search,values:' + JSON.stringify(values));
        },
        setProps,
      };
    },
  });
</script>

```

copy

### slot

Custom rendering content

hint

When using slots to customize form fields, please pay attention to antdv's [instructions](https://www.antdv.com/components/form-cn/#API) on FormItem .

```
<template>
  <div class="m-4">
    <BasicForm @register="register">
      <template #customSlot="{ model, field }">
        <a-input v-model:value="model[field]" />
      </template>
    </BasicForm>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'compatible-vue';
  import { BasicForm, useForm } from '@/components/Form/index';
  import { BasicModal } from '@/components/modal/index';
  export default defineComponent({
    name: 'FormDemo',
    setup(props) {
      const [register] = useForm({
        labelWidth: 100,
        actionColOptions: {
          span: 24,
        },
        schemas: [
          {
            field: 'field1',
            label: '字段1',
            slot: 'customSlot',
          },
        ],
      });
      return {
        register,
      };
    },
  });
</script>

```

copy

### ifShow/show/dynamicDisabled

Custom display/disable

```
<template>
  <div class="m-4">
    <BasicForm @register="register" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  const schemas: FormSchema[] = [
    {
      field: 'field1',
      component: 'Input',
      label: '字段1',
      colProps: {
        span: 8,
      },
      show: ({ values }) => {
        return !!values.field5;
      },
    },
    {
      field: 'field2',
      component: 'Input',
      label: '字段2',
      colProps: {
        span: 8,
      },
      ifShow: ({ values }) => {
        return !!values.field6;
      },
    },
    {
      field: 'field3',
      component: 'DatePicker',
      label: '字段3',
      colProps: {
        span: 8,
      },
      dynamicDisabled: ({ values }) => {
        return !!values.field7;
      },
    },
  ];

  export default defineComponent({
    components: { BasicForm },
    setup() {
      const [register, { setProps }] = useForm({
        labelWidth: 120,
        schemas,
        actionColOptions: {
          span: 24,
        },
      });
      return {
        register,
        schemas,
        setProps,
      };
    },
  });
</script>

```

copy

---

See [antv form](https://www.antdv.com/components/form-cn)

## Slots

| name          | illustrate                 |
| ------------- | -------------------------- |
| formFooter    | Bottom area of ​​the form  |
| formHeader    | Top area of ​​the form     |
| resetBefore   | Before reset button        |
| submitBefore  | Before submit button       |
| advanceBefore | Before Expand Button       |
| advanceAfter  | After expanding the button |

## ApiSelect

Remote pull-down loading component, which can be used to learn how to integrate custom components into Form components and let Form manage custom components

### Usage

```
const schemas: FormSchema[] = [
  {
    field: 'field',
    component: 'ApiSelect',
    label: '字段',
  },
];

```

copy

### Props

| Attributes     | type                                                                  | default value | illustrate                                                                                                                  |
| -------------- | --------------------------------------------------------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------- |
| numberToString | `boolean`                                                             | `false`       | Whether to `number`convert the value to`string`                                                                             |
| api            | ()=>Promise<{ label: string; value: string; disabled?: boolean }\[\]> | \-            | Data interface, accepts a Promise object                                                                                    |
| params         | `object`                                                              | \-            | Interface parameters. When this property changes, the interface data will be automatically reloaded.                        |
| resultField    | `string`                                                              | \-            | Fields returned by the interface. If the interface returns an array, this field can be left blank. Supported `x.x.x`formats |
| labelField     | `string`                                                              | `label`       | `label`The field that displays text in the drop-down array item , supporting `x.x.x`formats                                 |
| valueField     | `string`                                                              | `value`       | The field of the actual value in the drop-down array item `value`, supporting `x.x.x`formats                                |
| immediate      | `boolean`                                                             | `true`        | Whether to request the interface immediately, otherwise the request will be triggered at the first click                    |

## ApiTreeSelect

Remote drop-down tree loading component, and `ApiSelect`similar, version 2.6.1 or above

### Props

| Attributes  | type                                                                  | default value | illustrate                                                                                                                  |
| ----------- | --------------------------------------------------------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------- |
| api         | ()=>Promise<{ label: string; value: string; children?: any\[\] }\[\]> | \-            | Data interface, accepts a Promise object                                                                                    |
| params      | `object`                                                              | \-            | Interface parameters. When this property changes, the interface data will be automatically reloaded.                        |
| resultField | `string`                                                              | \-            | Fields returned by the interface. If the interface returns an array, this field can be left blank. Supported `x.x.x`formats |
| immediate   | `boolean`                                                             | `true`        | Whether to request the interface immediately.                                                                               |

## RadioButtonGroup

Radio Button style selection button

### Usage

```
const schemas: FormSchema[] = [
  {
    field: 'field',
    component: 'RadioButtonGroup',
    label: '字段',
  },
];

```

copy

### Props

| Attributes | type                                                     | default value | illustrate  |
| ---------- | -------------------------------------------------------- | ------------- | ----------- |
| options    | { label: string; value: string; disabled?: boolean }\[\] | \-            | Data Fields |

### dynamicRules

Required validation example

```
dynamicRules: ({ model, schema }) => {
  return [{ required: true, message: '请输入角色!' }];
},
```

copy
