---
order: 6
---

# Define a new Form component

1.  How to customize form components  
    Write component implementation src/components/Form/src/jeecg/modal/RoleSelectModal.vue  
    Define form component type src/components/Form/src/types/index.ts  
    Register component src/components/Form/src/componentMap.ts  
    Inject form src/components/Form/src/jeecg/components/JSelectRole.vue

2\. How to use components separately

```
<JAreaLinkage v-model:value="model[field]" :showArea="true" :showAll="false" />
```

copy

### New component code

- src/assets/less/JAreaLinkage.less （+）
- src/components/Form/src/components/JAreaLinkage.vue（+）

### Registration Configuration

- src/components/Form/src/componentMap.ts
- src/components/Form/src/types/index.ts
- src/components/Form/index.ts

### Sample Code

- src/views/demo/form/index.vue
