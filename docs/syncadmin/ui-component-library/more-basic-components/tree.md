---
order: 19
---

# Tree

Encapsulate `antv`the tree component

## Usage

```
<template>
  <BasicTree :treeData="treeData" />
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTree } from '/@/components/Tree/index';
  import { treeData } from './data';
  import { CollapseContainer } from '/@/components/Container/index';
  import { TreeItem } from '/@/components/Tree/index';

  export const treeData: TreeItem[] = [
    {
      title: 'parent 1',
      key: '0-0',
      icon: 'home|svg',
      children: [
        { title: 'leaf', key: '0-0-0' },
        {
          title: 'leaf',
          key: '0-0-1',
          children: [
            { title: 'leaf', key: '0-0-0-0' },
            { title: 'leaf', key: '0-0-0-1' },
          ],
        },
      ],
    },
    {
      title: 'parent 2',
      key: '1-1',
      icon: 'home|svg',
      children: [
        { title: 'leaf', key: '1-1-0' },
        { title: 'leaf', key: '1-1-1' },
      ],
    },
    {
      title: 'parent 3',
      key: '2-2',
      icon: 'home|svg',
      children: [
        { title: 'leaf', key: '2-2-0' },
        { title: 'leaf', key: '2-2-1' },
      ],
    },
  ];
  export default defineComponent({
    components: { BasicTree, CollapseContainer },
    setup() {
      return { treeData };
    },
  });
</script>
```

copy

## Props

::: tip Warm reminder

In addition to the following parameters, props in the official documentation are also supported. For details, please refer to [antv tree](https://2x.antdv.com/components/tree-cn/#Tree-props)

:::

| Attributes           | type                               | default value | Optional Values | illustrate                                                                                             | Version |
| -------------------- | ---------------------------------- | ------------- | --------------- | ------------------------------------------------------------------------------------------------------ | ------- |
| treeData             | `TreeItem[]`                       | \-            | \-              | Tree component data                                                                                    |         |
| rightMenuList        | `ContextMenuItem[]`                | \-            | \-              | Right-click menu list                                                                                  |         |
| checkedKeys          | `string[]`                         | \-            | \-              | Selected Nodes                                                                                         |         |
| selectedKeys         | `string[]`                         | \-            | \-              | Selected Node                                                                                          |         |
| expandedKeys         | `string[]`                         | \-            | \-              | Expanded Node                                                                                          |         |
| actionList           | `ActionItem[]`                     | \-            | \-              | Move the mouse to the right to display the operation button list                                       |         |
| title                | `string`                           | \-            | \-              | Custom title string                                                                                    |         |
| toolbar              | `boolean`                          | \-            | \-              | Whether to display the toolbar                                                                         |         |
| search               | `boolean`                          | \-            | \-              | Show search box                                                                                        |         |
| clickRowToExpand     | `boolean`                          | \-            | \-              | Whether to automatically expand the row when clicking it                                               |         |
| beforeRightClick     | `(node, event)=>ContextMenuItem[]` | \-            | \-              | Right-click callback, which can return the right-click menu list data to generate the right-click menu |         |
| rightMenuList        | `ContextMenuItem[]`                | \-            | \-              | Right-click menu list data                                                                             |         |
| defaultExpandLevel   | `string ｜ number`                 | \-            | \-              | The default level to expand after the first render                                                     | 2.4.1   |
| defaultExpandAll     | `boolean`                          | `false`       | `true/false`    | Default all after initial rendering                                                                    | 2.4.1   |
| searchValue(v-model) | `string`                           | \-            | \-              | Current search term                                                                                    | 2.7.1   |

::: tip

`defaultExpandLevel`, `defaultExpandAll`only takes effect during **the first rendering** . If `basicTree`it is set after creation (such as asynchronous data), you need to call the provided , to perform the expansion `treeData`after the update`basicTree``expandAll``filterByLevel`

:::

**ActionItem**

```
{
  // 渲染的图标
  render: (record: any) => any;
  // 是否显示
  show?: boolean | ((record: Recordable) => boolean);
}
```

copy

**ContextMenuItem**

```
{
  // 文本
  label: string;
  // 图标
  icon?: string;
  // 是否禁用
  disabled?: boolean;
  // 事件
  handler?: (...arg) => any;
  // 是否显示分隔线
  divider?: boolean;
  // 子级菜单数据
  children?: ContextMenuItem[];
}
```

copy

## Slots

::: tip Warm reminder

All slots in the official documentation are supported. For details, please refer to [antv tree](https://2x.antdv.com/components/tree-cn/#Tree-props)

:::

## Methods

| name            | Callback parameters                                  | illustrate                                  |
| --------------- | ---------------------------------------------------- | ------------------------------------------- |
| checkAll        | `(checkAll: boolean) => void`                        | Select All                                  |
| expandAll       | `(expandAll: boolean) => void`                       | Expand All                                  |
| setExpandedKeys | `(keys: Keys) => void`                               | Set the expansion node                      |
| getExpandedKeys | `() => Keys`                                         | Get the expanded node                       |
| setSelectedKeys | `(keys: Keys) => void`                               | Set the selected node                       |
| getSelectedKeys | `() => Keys`                                         | Get the selected node                       |
| setCheckedKeys  | `(keys: CheckKeys) => void`                          | Set the check node                          |
| getCheckedKeys  | `() => CheckKeys`                                    | Get the checked node                        |
| filterByLevel   | `(level: number) => void`                            | Display the specified level                 |
| insertNodeByKey | `(opt: InsertNodeParams) => void`                    | Insert a child node into the specified node |
| deleteNodeByKey | `(key: string) => void`                              | Delete a node based on key                  |
| updateNodeByKey | `(key: string, node: Omit<TreeItem, 'key'>) => void` | Update a node based on a key                |
| setSearchValue  | `(value: string) => void`                            | Set current search term (v2.7.1)            |
| getSearchValue  | `() => string`                                       | Get the current search term (v2.7.1)        |
