---
order: 18
---

# JSwitch switch component ✔

## Component Parameters

| parameter      | type            | Required | default value | illustrate               |
| -------------- | --------------- | -------- | ------------- | ------------------------ |
| value(v-model) | string / number |          | ''            |                          |
| options        | array           |          | \['Y', 'N'\]  | Options                  |
| labelOptions   | array           |          | \['whether'\] | Text options             |
| query          | bool            |          | false         | Whether to use drop-down |
| disabled       | bool            |          | false         | Disable                  |

> For more parameters, see: [Switch](https://2x.antdv.com/components/switch-cn/#API) or [Select](https://2x.antdv.com/components/select-cn/#API)

## Show results

![](https://lfs.k.topthink.com/lfs/37b756ec778f4b76daa61d652360dacbdeed6d54e55803ec5186e6c7c811dc93.dat)

## Usage Examples

```
const schemas: FormSchema[] = [
    {
        field: 'JSwitch',
        component: 'JSwitch',
        label: 'JSwitch',
    },
    {
        field: 'JSwitchSelect',
        component: 'JSwitch',
        label: 'JSwitchSelect',
        componentProps: { query: true },
    },
]
```

copy
