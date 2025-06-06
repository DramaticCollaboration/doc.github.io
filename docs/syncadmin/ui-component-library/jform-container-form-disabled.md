---
order: 30
---

# JFormContainer form disabled ✔

> JFormContainer: a-form container, whether to disable globally

## Parameter Definition

| parameter | type    | Is it optional? | default value | illustrate |
| --------- | ------- | --------------- | ------------- | ---------- |
| disabled  | Boolean | no              | false         | Disable    |

## Slot Definition

| name   | illustrate                       |
| ------ | -------------------------------- |
| detail | Can be used to customize details |
| edit   | Available for custom editing     |

## Demonstration effect

- Details Disable

![](https://lfs.k.topthink.com/lfs/22ab65e15dcaec4143080d4bf0088de5ff1f3e30681be437ef8ead534993d931.dat)

## Usage Examples

---

```
<!-- 页面中直接写这个组件，设置disabled，并配置插槽detail，则详细页面禁用 -->
<JFormContainer disabled>
  <template #detail>
    <a-form layout="inline" >
      <!-- 表单内容省略..... -->
    </a-form>
  </template>
</JFormContainer>

<script lang="ts" setup>
  <!-- 引入JFormContainer -->
  import JFormContainer from '/@/components/Form/src/container/JFormContainer.vue';
</script>
```

copy
