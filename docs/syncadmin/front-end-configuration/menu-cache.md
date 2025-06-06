---
order: 3
---

# Menu Cache

## Enable caching in the routing menu

There are 2 conditions to enable menu caching

1.  Menu routing settings `name`, and **cannot be repeated**
2.  Add the components corresponding to the route , which should be consistent `name`with the route settings`name`  
    ![](https://lfs.k.topthink.com/lfs/aac82bf968c7a8720b0b1231ccaf2049fdceb19f79bed50ba6a15d206ee1b05a.dat)

## How to define the page name

1\. Define name method without using setup syntax sugar

```
export default defineComponent({
  name: 'system-user',
});
```

copy

2\. Use setup syntax sugar, you need to add `name`attributes

After defining a component with setup syntax sugar, the component does not have a name attribute by default. At this time, the component cannot be registered globally. If you need to define a name, you need to define it in the following way

```
<script lang="ts" setup name="system-user">

</script>
```

copy
