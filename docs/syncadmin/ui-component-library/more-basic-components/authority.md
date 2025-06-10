---
order: 7
---

# Authority

Components used for project permissions, generally used for fine-grained permission management such as button level

## Usage

```
<template>
  <div>
    <Authority :value="RoleEnum.ADMIN">
      <a-button type="primary" block> 只有admin角色可见 </a-button>
    </Authority>
  </div>
</template>
<script>
  import Authority from '/@/components/Authority';
  import { defineComponent } from 'vue';
  export default defineComponent({
    components: { Authority },
  });
</script>
```

copy

## Props

| Attributes | type                                  | default value | illustrate                                                                                 |
| ---------- | ------------------------------------- | ------------- | ------------------------------------------------------------------------------------------ |
| value      | `RoleEnum,RoleEnum[],string,string[]` | \-            | Role information or permission code. It will automatically distinguish the permission mode |
