---
order: 17
---

# JPopup pop-up selection component✔

## Component Parameters

| parameter          | type     | Required | illustrate                                                                                                                                                                                                                                                                                               |
| ------------------ | -------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| placeholder        | string   |          | placeholder                                                                                                                                                                                                                                                                                              |
| code               | string   | yes      | Online report coding                                                                                                                                                                                                                                                                                     |
| sorter             | String   | no       | Default sort column, usage: column name = desc \| asc. Example:`age=asc`                                                                                                                                                                                                                                 |
| width              | number   | no       | width                                                                                                                                                                                                                                                                                                    |
| multi              | Boolean  | no       | Whether to support multiple selection, the default value is false                                                                                                                                                                                                                                        |
| param              | object   | no       | Dynamic parameter object, manually add a record in the online report parameter, and then pass the parameter with the same name in your own page as a data query condition. If it is a string type, it needs to be set **to** the format of double quotes inside single quotes, such as {name: "'admin'"} |
| splitter           | string   | no       | Delimiter, by default `,`, is only `,`useful for values ​​that are not separated by the database. The final database save is still`,`                                                                                                                                                                    |
| groupId            | string   | no       | Group id                                                                                                                                                                                                                                                                                                 |
| setFieldValue      | function | no       | Method to set form value, used in form mode                                                                                                                                                                                                                                                              |
| formElRef          | object   | no       | Form component instance, used in v-model mode                                                                                                                                                                                                                                                            |
| fieldConfig        | array    | no       | Popup callback parameter value configuration, see below for details                                                                                                                                                                                                                                      |
| showAdvancedButton | Boolean  | no       | Whether popup is displayed expanded and closed, default true expand()                                                                                                                                                                                                                                    |

fieldConfig configuration:

| parameter | type   | illustrate                                                           |
| --------- | ------ | -------------------------------------------------------------------- |
| source    | string | Value parameters in the pop-up list                                  |
| target    | string | Returns the target parameters in the form, multiple commas separated |

## Show results

![](https://lfs.k.topthink.com/lfs/c7a0fea49903f56df5f77e0a421e9ac97f13ca066733ec9ac8fa2c48e7791102.dat)

## Usage Examples

```
<template>
    <BasicForm :labelWidth="200" :schemas="schemas" :actionColOptions="{ span: 24 }" @submit="handleSubmit" />
</template>
<script lang="ts">
    import { defineComponent } from 'vue';
    import { BasicForm, FormSchema,JPopup, FormActionType} from '/@/components/Form'
    import { useMessage } from '/@/hooks/web/useMessage';

    const schemas: FormSchema[] = [
        {
            field: 'pop',
            component: 'JPopup',
            label: 'JPopup示例',
            helpMessage: ['component模式'],
            colProps: {
                span: 8,
            },
            componentProps: ({ formActionType }) => {
                let { setFieldsValue } = formActionType
                return {
                    setFieldsValue,
                    placeholder: '请选择',
                    code: 'report_user',
                    fieldConfig: [{ source: 'username', target: 'pop' }, { source: 'realname', target: 'popback' }],
                    multi: true,
                }
            },
        },
        {
            field: 'pop',
            component: 'Input',
            label: 'popup回调值',
            colProps: {
                span: 8,
            },
        },
        {
            field: 'popback',
            component: 'Input',
            label: 'popback回调值',
            colProps: {
                span: 8,
            },
        }]

    export default defineComponent({
        components: { BasicForm,JPopup },
        setup() {
            const { createMessage } = useMessage();
            return {
                schemas,
                handleSubmit: (values: any) => {
                createMessage.success('click search,values:' + JSON.stringify(values));
                }
           };
        }
    });
</script>


```

copy
