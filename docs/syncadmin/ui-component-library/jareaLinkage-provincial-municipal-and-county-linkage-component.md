---
order: 36
---

# JAreaLinkage provincial, municipal and county linkage component✔

## Parameter Definition

| parameter name | type   | default value | Required | illustrate     |
| -------------- | ------ | ------------- | -------- | -------------- |
| value(v-modal) | String |               | yes      | Binding Values |
| showArea       | bool   | true          |          | Show County    |
| showAll        | bool   | false         |          | display all    |

## Show results

![](https://lfs.k.topthink.com/lfs/ccdea9b332f190b79b7e165e9623b1c1dc96a8c64fb4904acb61bd39ae00e292.dat)

## Usage Examples

```
const schemas: FormSchema[] = [
    {
        field: 'jal',
        component: 'JAreaLinkage',
        label: '省市区选择',
        helpMessage: ['component模式']
    }
]
```

copy
