---
order: 21
---

# JTreeDict classification dictionary tree component✔

Category dictionary tree drop-down component, which can load data asynchronously

## Component Parameters

| parameter      | type   | Required | default value | illustrate                                                                                                            |
| -------------- | ------ | -------- | ------------- | --------------------------------------------------------------------------------------------------------------------- |
| value(v-model) | string |          | ''            |                                                                                                                       |
| field          | string |          | 'id'          | Specify the fields that the current component needs to store. Optional: id (primary key) and code (code)              |
| parentCode     | string |          | ''            | Specify a node code to load all dictionary data under the node. If not specified, all data will be loaded by default. |
| async          | bool   |          | false         | Whether to load asynchronously. For dictionary data with large data volume, it is recommended to set it to true       |
| disabled       | bool   |          | false         | Disable                                                                                                               |

> For more parameters, see: [TreeSelect Tree selection](https://2x.antdv.com/components/tree-select-cn/#API)

## Show results

![](https://lfs.k.topthink.com/lfs/b80fccfa78e43b2e42ba361dd2c6aa3426f5a8e65b3876df30db70fd93535a83.dat)

## Usage Examples

```
const schemas: FormSchema[] = [
    {
        field: 'JTreeDict',
        component: 'JTreeDict',
        label: 'JTreeDict',
    },
    {
        field: 'JTreeDictAsync',
        component: 'JTreeDict',
        label: '异步JTreeDict',
        componentProps: { async: true },
    },
]
```

copy
