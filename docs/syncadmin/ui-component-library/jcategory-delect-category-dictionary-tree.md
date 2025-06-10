---
order: 22
---

# JCategorySelect Category dictionary tree✔

JCategorySelect component category dictionary drop-down tree component.

## Component Parameters

| parameter      | type           | Required | default value   | illustrate                                                                             |
| -------------- | -------------- | -------- | --------------- | -------------------------------------------------------------------------------------- |
| value(v-model) | string / array |          | ''              |                                                                                        |
| placeholder    | string         |          | 'please choose' | Placeholder content                                                                    |
| condition      | string         |          | ''              | Query conditions, pass a JSON string                                                   |
| multiple       | bool /string   |          | false           | Whether to support multiple selection                                                  |
| disabled       | bool           |          | false           | Disable                                                                                |
| pid            | string         |          |                 | Parent id                                                                              |
| pcode          | string         |          |                 | Starting selection code, see the type code of the configured classification dictionary |
| back           | string         |          |                 | Return key                                                                             |

## Show results

![](https://lfs.k.topthink.com/lfs/efce8f744e26bf668abfa8c5508ee894a4bd3a5edf0436aa58edf2dba0689a0e.dat)

## Usage Examples

```
const schemas: FormSchema[] = [
  {
    field: 'category',
    component: 'JCategorySelect',
    label: '分类字典树',
    componentProps: {
      pcode: 'B01'
    }
  },
  {
    field: 'category1',
    component: 'JCategorySelect',
    label: '分类字典树(多选)',
    componentProps: {
        pcode: 'B01',
        multiple: true
    }
  }
]
```

copy
