---
order: 32
---

# JInput special query component ✔

> The main special query component supports fuzzy query, greater than or equal to query, less than or equal to query, and mismatch query.

## Parameter Definition

| parameter   | type    | Required | illustrate                                                                                                                                                                                                           |
| ----------- | ------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| placeholder | string  |          | placeholder                                                                                                                                                                                                          |
| trim        | boolean |          | Whether to automatically remove spaces. Default is false                                                                                                                                                             |
| type        | string  |          | Query types \['like', 'ne', 'ge', 'le'\] are fuzzy, not equal, greater than, less than, and default to like. If you don't want to add any rules, set type="", which means you can perform equal query (default like) |
| disabled    | Boolean | no       | Whether to disable, default value is false                                                                                                                                                                           |

## Show results

![](https://lfs.k.topthink.com/lfs/c8c1a136774b5289467d72e48a59835b3841b5f78fae76d8816f71e9c0d98833.dat)

## Usage Examples

Transform user management, support fuzzy query for accounts, configure JInput component (in user.data.ts file)

```
//省略其他代码
{
  label: '账号',
  field: 'username',
  component: 'JInput',
  colProps: {span: 6},
},
//省略其他代码
```

copy

![](https://lfs.k.topthink.com/lfs/7fa517836c7820fbc04430b611e22f4b854f30ab6048cf5e5bb1350939efbd8e.dat)
