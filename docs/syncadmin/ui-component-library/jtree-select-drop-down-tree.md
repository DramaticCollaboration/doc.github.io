---
order: 39
---

# JTreeSelect drop-down tree✔

Category dictionary tree drop-down component, which can load data asynchronously

## Component Parameters

| parameter         | type                | default value   | illustrate                                                                                                                                    |
| ----------------- | ------------------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| value(v-model)    | string              | ''              |                                                                                                                                               |
| placeholder       | string              | 'please choose' | Current text description                                                                                                                      |
| dict              | string              | 'id'            | Dictionary code configuration, for example, through the gender dictionary code: sex, you can directly render the component                    |
| parentCode        | string              | ''              | Specify a node code to load all dictionary data under the node. If not specified, all data will be loaded by default.                         |
| pidField          | string              | 'pid'           | Specifies the field of the parent node                                                                                                        |
| pidValue          | string              | ''              | Specifies the id value of the parent node                                                                                                     |
| hasChildField     | string              | ''              | Specifies whether to include a field containing child nodes.                                                                                  |
| treeCheckAble     | bool                | false           | Whether there is a checkbox                                                                                                                   |
| multiple          | bool                | false           | Multiple selection                                                                                                                            |
| condition         | string(json string) | ''              | Supports custom query conditions to filter data. Please assign values ​​according to this standard example: condition='{"create_by":"admin"}' |
| url               | string              | ''              | Request address                                                                                                                               |
| loadTriggleChange | he was              | false           | Whether to trigger `change`the event. It will only be triggered when a single selection is made.                                              |
| params            | string              | ''              | Request parameters, such as { name:'张三' }                                                                                                   |
| converIsLeafVal   | number              | 0               | Whether the system needs to convert the value of the leaf node (0 means no conversion, 1 means the system automatically converts)             |
| hiddenNodeKey     | string              | ''              | Filter out the specified nodes in the data (including descendant nodes)`v3.6.4+`                                                              |

## Show results

![](https://lfs.k.topthink.com/lfs/12346f95f836524515f1759496a8cbd2376701d467932f2153bbbb563a04ec07.dat)

## Usage Examples

```
export const schema: FormSchema[] = [
    {
      field: 'ts',
      component: 'JTreeSelect',
      label: '下拉树选择',
      helpMessage: ['component模式'],
      componentProps: {
        dict: 'sys_permission,name,id',
        pidField: 'parent_id',
        hasChildField: 'is_leaf',
      },
      colProps: {
        span: 12,
      },
    },
]
```

copy
