---
order: 38
---

# JEasyCron timing expression selection component ✔

JEasyCron is used to build cron expressions

## Component Parameters

| parameter      | type     | Required | default value | illustrate                                                                                                                |
| -------------- | -------- | -------- | ------------- | ------------------------------------------------------------------------------------------------------------------------- |
| value(v-model) | string   |          | ''            |                                                                                                                           |
| hideSecond     | bool     |          | false         | Whether to hide the second and year parameters. If hidden, the second and year parameters will be ignored.                |
| hideYear       | bool     |          | false         | Whether to hide the parameter year setting. If hidden, the parameter year will be ignored.                                |
| remote         | function |          |               | Function to get the preview execution time list, the format is: remote (cron value, time timestamp, cb callback function) |
| disabled       | bool     |          | false         | Disable                                                                                                                   |

## Show results

![](https://lfs.k.topthink.com/lfs/c1697bfecdb1da33a8c64570211bcad9c431a315285daeec07fde63243bc25cf.dat)  
![](https://lfs.k.topthink.com/lfs/b0224b151e4e696010a438277e5e3eac8a9d610e967e37e5c1bc355301727af7.dat)

## Usage Examples

```
import { JCronValidator } from '/@/components/Form'
const schemas: FormSchema[] = [
    {
        field: 'JEasyCron',
        component: 'JEasyCron',
        label: 'JEasyCron',
        defaultValue: '* * * * * ? *',
        // 提供 cron 表达式校验
        rules: [{ validator: JCronValidator }],
    },
]
```

copy
