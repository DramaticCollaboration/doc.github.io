---
order: 15
---

# JSelectMultiple drop-down multiple selections ✔

JSelectMultiple dictionary drop-down multiple selection.

## Component Parameters

| parameter      | type           | Required | default value   | illustrate                                                                                                                                                                                                 |
| -------------- | -------------- | -------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value(v-model) | string / array |          | ''              |                                                                                                                                                                                                            |
| placeholder    | string         |          | 'please choose' | Placeholder echo                                                                                                                                                                                           |
| readOnly       | bool           |          | false           | Read-only                                                                                                                                                                                                  |
| options        | array          |          |                 | Multiple options. If the dictCode parameter is not provided, you can set this parameter to load multiple options.                                                                                          |
| splitter       | string         |          | ','             | Option separator, comma by default                                                                                                                                                                         |
| popContainer   | string         |          |                 | The CSS selector corresponding to the parent node, used internally to `document.querySelector`select the parent node. If set `.pnode`, it will find the node with class pnode and render the drop-down box |
| dictCode       | string         |          |                 | Dictionary encoding                                                                                                                                                                                        |
| disabled       | bool           |          |                 | Disable                                                                                                                                                                                                    |
| triggerChange  | Boolean        | true     | Loading changes |                                                                                                                                                                                                            |

## Show results

![](https://lfs.k.topthink.com/lfs/7bdf77f66339aee874fc3950d03e602e4e0b919152685434d45f83cda9d2f4ff.dat)

## Usage Examples

```
const schemas: FormSchema[] = [
    {
        field: 'jsm',
        component: 'JSelectMultiple',
        label: '字典下拉多选',
        helpMessage: ['component模式'],、
        componentProps: {
            dictCode: 'sex',
            triggerChange:true
        },
    },
    {
        field: 'jsm1',
        component: 'JSelectMultiple',
        label: '字典下拉多选',
        helpMessage: ['component模式'],
        componentProps: {
            options: [
                {label:'一年级',value:'1'},
                {label:'二年级',value:'2'},
                {label:'三年级',value:'3'}
            ]
        }
    }
]
```

copy
