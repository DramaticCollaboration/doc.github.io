---
order: 23
---

# JSelectInput can input drop-down box ✔

Input drop-down selection box

## Component Parameters

| parameter  | type  | Required | default value | illustrate                            |
| ---------- | ----- | -------- | ------------- | ------------------------------------- |
| options    | array |          | \[\]          | Default Options                       |
| disabled   | bool  |          | false         | Disable                               |
| showSearch | bool  |          | true          | Make single selection mode searchable |

> For more parameters, see: [Select selector](https://2x.antdv.com/components/select-cn/#API)

## Show results

![](https://lfs.k.topthink.com/lfs/467a4d44e6223692210823edb76a8d5625fdcca262e48d7e4286432d95956abe.dat)  
![](https://lfs.k.topthink.com/lfs/a6fd3a2fdd8804a5434cc659009d97d96d0467a1c22ae97fd9c7bf102375c63d.dat)

## Usage Examples

```
const schemas: FormSchema[] = [
  {
    field: 'JSelectInput',
    label: 'JSelectInput',
    component: 'JSelectInput',
    componentProps: {
      options: [
        { label: 'Default', value: 'default' },
        { label: 'IFrame', value: 'iframe' },
      ],
    },
  },
]
```

copy
