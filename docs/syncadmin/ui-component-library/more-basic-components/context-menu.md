---
order: 22
---

# ContextMenu

Create a right-click menu component in a functional way. As long as you can get the dom `event`object, you can create a right-click menu for it.

## Usage

```
<template>
  <div>
    <a-button type="primary" @contextmenu="handleContext">Right Click on me</a-button>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { useContextMenu } from '/@/hooks/web/useContextMenu';
  import { CollapseContainer } from '/@/components/Container';
  import { useMessage } from '/@/hooks/web/useMessage';
  export default defineComponent({
    components: { CollapseContainer },
    setup() {
      const [createContextMenu] = useContextMenu();
      const { createMessage } = useMessage();
      function handleContext(e: MouseEvent) {
        createContextMenu({
          event: e,
          items: [
            {
              label: 'New',
              icon: 'ant-design:plus-outlined',
              handler: () => {
                createMessage.success('click new');
              },
            },
            {
              label: 'Open',
              icon: 'ant-design:folder-open-filled',
              handler: () => {
                createMessage.success('click open');
              },
            },
          ],
        });
      }
      return { handleContext };
    },
  });
</script>
```

copy

## createContextMenu

**Options**

| Attributes | type                | default value | Optional Values | illustrate                                                        |
| ---------- | ------------------- | ------------- | --------------- | ----------------------------------------------------------------- |
| event      | `Event`             | \-            | \-              | The DOM `Event`object that needs to be created                    |
| items      | `ContextMenuItem[]` | \-            | \-              | Right-click menu list, `ContextMenuItem`see the description below |

**ContextMenuItem**

| Attributes | type       | illustrate                |
| ---------- | ---------- | ------------------------- |
| label      | `string`   | text                      |
| icon       | `string`   | Icon, see Icon component  |
| disabled   | `boolean`  | Disable                   |
| handler    | `()=>void` | Click to trigger function |
