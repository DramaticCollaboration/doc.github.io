---
order: 37
---

# UserSelect user selection component

---

_Same functionality, but different style from JSelectUser component_

## Configuration items

| parameter      | type     | Required | default value | illustrate                                                                                                               |
| -------------- | -------- | -------- | ------------- | ------------------------------------------------------------------------------------------------------------------------ |
| multi          | Boolean  | no       | false         | Multiple selection                                                                                                       |
| getContainer   | Function | no       | null          | The user selects the parent node of the popup.                                                                           |
| store          | String   | no       | id            | Select a column from the user table and use its value as the storage value of the control. The default is the ID column. |
| value(v-model) | String   | no       | Empty string  | Used to record control values                                                                                            |

## Usage Examples

![](https://lfs.k.topthink.com/lfs/7acdb44fd3a5afeb220bb5110857106d5e2f38e9bb0eb7a05cdb875f11b1a67b.dat)  
![](https://lfs.k.topthink.com/lfs/bfe4a0ef7255fcf37c29460989fb8934eb032018e4e9a3a0e95641563a5c35db.dat)  
![](https://lfs.k.topthink.com/lfs/24fde1dccfb4887a71ca1a9c897b85a11116dd76b6328a55b5df2b609840d2b7.dat)

### Use in BaseForm

```

{
  field: 'userSelect2',
  component: 'UserSelect',
  label: '用户选择2',
  helpMessage: ['component模式'],
  colProps: { span: 12 },
}

```

copy

### Use as component

```
<template>
    <UserSelect v-model:value="testUser" :multi="true" store="username"/>
</template>

<script>
    import { ref, defineComponent } from 'vue';
    import UserSelect from '/@/components/Form/src/jeecg/components/userSelect/index.vue'

    export default defineComponent({
        name: "JeecgComponents",
        components: {
            UserSelect,
        },
        setup() {
            const testUser = ref('');
            return {
                testUser
            }
        }
    })
</script>
```

copy
