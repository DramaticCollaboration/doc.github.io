---
order: 31
---

# BasicTable table bak

Encapsulate `antv`the table component

> If it is not in the documentation, try looking for it in the online examples.

## Upgrade Instructions

### 2023-6-30 `v3.5.3+生效`

In order to solve the problem of the built-in selection column being stuck, we have encapsulated a new selection column.  
If you use a tree table or expandable rows, you need to make the following changes:

> Add the parameter `Table`to `expandIconColumnIndex: 1`the view, otherwise the expand button will not display as expected. This parameter can also be adjusted to other subscript numbers according to actual conditions.  
> ![](https://lfs.k.topthink.com/lfs/16df0efb6929527b99ec762afac75dbedef0dfe10a20ea1e65d4a351a59a50be.dat)

## Usage

### Table default properties

```
 const defaultTableProps: TableProps = {
    rowKey: 'id',
    // 使用查询条件区域
    useSearchForm: true,
    // 查询条件区域配置
    formConfig: {
      // 紧凑模式
      compact: true,
      // label默认宽度
      // labelWidth: 120,
      // 按下回车后自动提交
      autoSubmitOnEnter: true,
      // 默认 row 配置
      rowProps: { gutter: 8 },
      // 默认 col 配置
      baseColProps: {
        ...adaptiveColProps,
      },
      labelCol: {
        xs: 24,
        sm: 8,
        md: 6,
        lg: 8,
        xl: 6,
        xxl: 6,
      },
      wrapperCol: {},
      // 是否显示 展开/收起 按钮
      showAdvancedButton: true,
      // 超过指定列数默认折叠
      autoAdvancedCol: 3,
      // 操作按钮配置
      actionColOptions: {
        ...adaptiveColProps,
        style: { textAlign: 'left' },
      },
    },
    // 斑马纹
    striped: false,
    // 是否可以自适应高度
    canResize: true,
    // 表格最小高度
    minHeight: 500,
    // 点击行选中
    clickToRowSelect: false,
    // 是否显示边框
    bordered: true,
    // 是否显示序号列
    showIndexColumn: false,
    // 显示表格设置
    showTableSetting: true,
    // 表格全屏设置
    tableSetting: {
      fullScreen: false,
    },
    // 是否显示操作列
    showActionColumn: true,
    // 操作列
    actionColumn: {
      width: 120,
      title: '操作',
      //是否锁定操作列取值 right ,left,false
      fixed: false,
      dataIndex: 'action',
      slots: { customRender: 'action' },
    },
  };
```

copy

### Example

```
<template>
  <div class="p-4">
    <BasicTable
      title="基础示例"
      titleHelpMessage="温馨提醒"
      :columns="columns"
      :dataSource="data"
      :canResize="canResize"
      :loading="loading"
      :striped="striped"
      :bordered="border"
      :pagination="{ pageSize: 20 }"
    >
      <template #toolbar>
        <a-button type="primary"> 操作按钮 </a-button>
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicTable } from '/@/components/Table';
  import { getBasicColumns, getBasicData } from './tableData';

  export default defineComponent({
    components: { BasicTable },
    setup() {
      return {
        columns: getBasicColumns(),
        data: getBasicData(),
      };
    },
  });
</script>

```

copy

### template example

All callable functions are `Methods`described below.

```
<template>
  <div class="p-4">
    <BasicTable
      :canResize="false"
      title="RefTable示例"
      titleHelpMessage="使用Ref调用表格内方法"
      ref="tableRef"
      :api="api"
      :columns="columns"
      rowKey="id"
      :rowSelection="{ type: 'checkbox' }"
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { BasicTable, TableActionType } from '/@/components/Table';
  import { getBasicColumns, getBasicShortColumns } from './tableData';
  import { demoListApi } from '/@/api/demo/table';
  export default defineComponent({
    components: { BasicTable },
    setup() {
      const tableRef = ref<Nullable<TableActionType>>(null);

      function getTableAction() {
        const tableAction = unref(tableRef);
        if (!tableAction) {
          throw new Error('tableAction is null');
        }
        return tableAction;
      }
      function changeLoading() {
        getTableAction().setLoading(true);
        setTimeout(() => {
          getTableAction().setLoading(false);
        }, 1000);
      }
      return {
        tableRef,
        api: demoListApi,
        columns: getBasicColumns(),
        changeLoading,
      };
    },
  });
</script>

```

copy

### BasicColumn and tableAction show and hide examples through permissions and business control

```
<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              label: '编辑',
              onClick: handleEdit.bind(null, record),
              auth: 'other', // 根据权限控制是否显示: 无权限，不显示
            },
            {
              label: '删除',
              icon: 'ic:outline-delete-outline',
              onClick: handleDelete.bind(null, record),
              auth: 'super', // 根据权限控制是否显示: 有权限，会显示
            },
          ]"
          :dropDownActions="[
            {
              label: '启用',
              popConfirm: {
                title: '是否启用？',
                confirm: handleOpen.bind(null, record),
              },
              ifShow: (_action) => {
                return record.status !== 'enable'; // 根据业务控制是否显示: 非enable状态的不显示启用按钮
              },
            },
            {
              label: '禁用',
              popConfirm: {
                title: '是否禁用？',
                confirm: handleOpen.bind(null, record),
              },
              ifShow: () => {
                return record.status === 'enable'; // 根据业务控制是否显示: enable状态的显示禁用按钮
              },
            },
            {
              label: '同时控制',
              popConfirm: {
                title: '是否动态显示？',
                confirm: handleOpen.bind(null, record),
              },
              auth: 'super', // 同时根据权限和业务控制是否显示
              ifShow: () => {
                return true; // 根据业务控制是否显示
              },
            },
          ]"
        />
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, BasicColumn, TableAction } from '/@/components/Table';

  import { demoListApi } from '/@/api/demo/table';
  const columns: BasicColumn[] = [
    {
      title: '姓名',
      dataIndex: 'name',
      auth: 'test', // 根据权限控制是否显示: 无权限，不显示
    },
    {
      title: '地址',
      dataIndex: 'address',
      auth: 'super', // 同时根据权限控制是否显示
      ifShow: (_column) => {
        return true; // 根据业务控制是否显示
      },
    },
  ];
  export default defineComponent({
    components: { BasicTable, TableAction },
    setup() {
      const [registerTable] = useTable({
        title: 'TableAction组件及固定列示例',
        api: demoListApi,
        columns: columns,
        bordered: true,
        actionColumn: {
          width: 250,
          title: 'Action',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });
      function handleEdit(record: Recordable) {
        console.log('点击了编辑', record);
      }
      function handleDelete(record: Recordable) {
        console.log('点击了删除', record);
      }
      function handleOpen(record: Recordable) {
        console.log('点击了启用', record);
      }
      return {
        registerTable,
        handleEdit,
        handleDelete,
        handleOpen,
      };
    },
  });
</script>

```

copy

## useTable

Use the component's own **useTable** to facilitate the use of forms

Here is an example using a simple table,

```
<template>
  <BasicTable @register="registerTable" />
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getBasicColumns, getBasicShortColumns } from './tableData';
  import { demoListApi } from '/@/api/demo/table';
  export default defineComponent({
    components: { BasicTable },
    setup() {
      const [
        registerTable,
        {
          setLoading,
        },
      ] = useTable({
        api: demoListApi,
        columns: getBasicColumns(),
      });

      function changeLoading() {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
      }
      return {
        registerTable,
        changeLoading,
      };
    },
  });
</script>

```

copy

### Usage

Used to call Table internal methods and table parameter configuration

```
// 表格的props也可以直接注册到useTable内部
const [register, methods] = useTable(props);

```

copy

**register**

register is used to register useTable. If you need to use `useTable`the provided API, you must pass register to the component's onRegister

```
<template>
  <BasicTable @register="register" />
</template>
<script>
  export default defineComponent({
    components: { BasicForm },
    setup() {
      const [register] = useTable();
      return { register };
    },
  });
</script>

```

copy

### Methods

**setProps**

type:`(props: Partial<BasicTableProps>) => void`

Description: Used to set table parameters

**reload**

type:`(opt?: FetchParams) => Promise<void>`

Description: Refresh the table

**redoHeight**

type:`() => void`

Description: Recalculate the table height

**setLoading**

type:`(loading: boolean) => void`

Description: Set the table loading status

**getDataSource**

Get table data

type:`<T = Recordable>() => T[]`

Description: Get table data

**getRawDataSource**

Get the original data of the backend interface

type:`<T = Recordable>() => T`

Description: Get the original data of the backend interface

**getColumns**

type:`(opt?: GetColumnsParams) => BasicColumn[]`

Description: Get table data

**setColumns**

type:`(columns: BasicColumn[] | string[]) => void`

Description: Set the header data

**setTableData**

type:`<T = Recordable>(values: T[]) => void`

Description: Set table data

**setPagination**

type:`(info: Partial<PaginationProps>) => void`

Description: Set paging information

**deleteSelectRowByKey**

type:`(key: string) => void`

Description: Delete or unselect rows based on key

**getSelectRowKeys**

type:`() => string[]`

Description: Get the keys of the selected row

**getSelectRows**

type:`<T = Recordable>() => T[]`

Description: Get the rows of the selected row

**clearSelectedRowKeys**

type:`() => void`

Description: Clear the selected row

**setSelectedRowKeys**

type:`(rowKeys: string[] | number[]) => void`

Description: Set the selected row

**getPaginationRef**

type:`() => PaginationProps | boolean`

Description: Get the current page information

**getShowPagination**

type:`() => boolean`

Description: Get whether the current page is displayed

**setShowPagination**

type:`(show: boolean) => Promise<void>`

Description: Set whether to display the current page

**getRowSelection**

type:`() => TableRowSelection<Recordable>`

Description: Get check box information

**updateTableData**

type:`(index: number, key: string, value: any)=>void`

Description: Update table data

**updateTableDataRecord**

type:`(rowKey: string | number, record: Recordable) => Recordable | void`

Description: Updates the data of the specified row based on the uniqueness `rowKey`. It can be used to partially update data without refreshing the entire table.

**deleteTableDataRecord**

type:`(rowKey: string | number | string[] | number[]) => void`

Description: `rowKey`Dynamically delete the data in the specified row based on the uniqueness. It can be used to update data locally without refreshing the entire table.

**insertTableDataRecord**

type:`(record: Recordable, index?: number) => Recordable | void`

Note: The position of the inserted data row can be determined according to the value passed in. `index`If no value is passed, the data row will be inserted sequentially. This can be used to update data locally without refreshing the entire table.

**getForm**

type:`() => FormActionType`

Description: If the search area is enabled, you can use this function to obtain the form object function for operation

**expandAll**

type:`() => void`

Description: Expand the tree table

**collapseAll**

type:`() => void`

Description: Collapse tree table

## Props

Reminder

- In addition to the following parameters, props in the official documentation are also supported. For details, please refer to [the antv table](https://www.antdv.com/components/table-cn#API)
- Note: The `defaultExpandAllRows`, `defaultExpandedRowKeys`attributes are not supported in basicTable and `antv table`are removed after v2.2.0.

| Attributes              | type                                               | default value                    | Optional Values | illustrate                                                                                                                                                                    | Version                                                                                                                                                            |
| ----------------------- | -------------------------------------------------- | -------------------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| clickToRowSelect        | `boolean`                                          | `true`                           | \-              | Click on the row to check whether the checkbox or radio is selected. Need to be turned on                                                                                     |                                                                                                                                                                    |
| sortFn                  | `(sortInfo: SorterResult<any>) => any`             | \-                               | \-              | Custom sorting method. See global configuration instructions below                                                                                                            |                                                                                                                                                                    |
| filterFn                | `(sortInfo: Partial<Recordable<string[]>>) => any` | \-                               | \-              | Custom filtering method. See global configuration instructions below                                                                                                          |                                                                                                                                                                    |
| showTableSetting        | `boolean`                                          | `false`                          | \-              | Display table settings tool                                                                                                                                                   |                                                                                                                                                                    |
| tableSetting            | `TableSetting`                                     | \-                               | \-              | Table Setting Tool Configuration, see TableSetting below                                                                                                                      |                                                                                                                                                                    |
| striped                 | `boolean`                                          | `true`                           | \-              | Zebra print                                                                                                                                                                   |                                                                                                                                                                    |
| inset                   | `boolean`                                          | `false`                          | \-              | Cancel the default padding of the table                                                                                                                                       |                                                                                                                                                                    |
| autoCreateKey           | `boolean`                                          | `true`                           | \-              | Whether to automatically generate a key                                                                                                                                       |                                                                                                                                                                    |
| showSummary             | `boolean`                                          | `false`                          | \-              | Whether to display the total row                                                                                                                                              |                                                                                                                                                                    |
| summaryData             | `any[]`                                            | \-                               | \-              | Custom total data. If available, display the data                                                                                                                             |                                                                                                                                                                    |
| emptyDataIsShowTable    | `boolean`                                          | `true`                           | \-              | When the search form is enabled, whether to display the table when there is no data in the table                                                                              |                                                                                                                                                                    |
| summaryFunc             | `(...arg) => any[]`                                | \-                               | \-              | How to calculate total rows                                                                                                                                                   |                                                                                                                                                                    |
| ~canRowDrag~            | ~`boolean`~                                        | ~`false`~                        | \-              | ~Whether to drag and drop rows for sorting~                                                                                                                                   |                                                                                                                                                                    |
| ~canColDrag~            | ~`boolean`~                                        | ~`false`~                        | \-              | ~Whether the column can be dragged~                                                                                                                                           |                                                                                                                                                                    |
| isTreeTable             | `boolean`                                          | `false`                          | \-              | Is tree table                                                                                                                                                                 |                                                                                                                                                                    |
| api                     | `(...arg: any) => Promise<any>`                    | \-                               | \-              | Request interface, you can directly`src/api内的函数直接传入`                                                                                                                  |                                                                                                                                                                    |
| beforeFetch             | `(T)=>T`                                           | \-                               | \-              | Process parameters before requesting                                                                                                                                          |                                                                                                                                                                    |
| afterFetch              | `(T)=>T`                                           | \-                               | \-              | Process the return value after the request                                                                                                                                    |                                                                                                                                                                    |
| handleSearchInfoFn      | `(T)=>T`                                           | \-                               | \-              | After opening the form, process the search criteria parameters before the request                                                                                             |                                                                                                                                                                    |
| fetchSetting            | `FetchSetting`                                     | \-                               | \-              | Interface request configuration, you can configure the request fields and response field names, see the global configuration instructions below                               |                                                                                                                                                                    |
| immediate               | `boolean`                                          | `true`                           | \-              | Whether to request the interface immediately after the component is loaded. If it is false, you need to use reload to load the table data.                                    |                                                                                                                                                                    |
| searchInfo              | `any`                                              | \-                               | \-              | Additional request parameters                                                                                                                                                 |                                                                                                                                                                    |
| useSearchForm           | `boolean`                                          | false                            | \-              | Using the search form                                                                                                                                                         |                                                                                                                                                                    |
| formConfig              | `any`                                              | \-                               | \-              | For form configuration, refer to Props of form component                                                                                                                      |                                                                                                                                                                    |
| columns                 | `any`                                              | \-                               | \-              | Table column information BasicColumn\[\]                                                                                                                                      |                                                                                                                                                                    |
| showIndexColumn         | `boolean`                                          | law                              | \-              | Whether to display the serial number column                                                                                                                                   |                                                                                                                                                                    |
| indexColumnProps        | `any`                                              | \-                               | \-              | Sequence column configuration BasicColumn                                                                                                                                     |                                                                                                                                                                    |
| actionColumn            | `any`                                              | \-                               | \-              | Configure BasicColumn in the operation column on the right side of the table                                                                                                  |                                                                                                                                                                    |
| ellipsis                | `boolean`                                          | `true`                           | \-              | Should text be displayed if it exceeds the width?                                                                                                                             |                                                                                                                                                                    |
| canResize               | `boolean`                                          | `true`                           | \-              | Whether the height can be adaptive (if placed in a PageWrapper component, do not enable the fixedHeight property of PageWrapper, and the two cannot be used at the same time) |                                                                                                                                                                    |
| clearSelectOnPageChange | `boolean`                                          | false                            | \-              | Toggle whether to reset the page number                                                                                                                                       |                                                                                                                                                                    |
| resizeHeightOffset      | `number`                                           | 0                                | \-              | The table's adaptive height calculation result will subtract this value                                                                                                       |                                                                                                                                                                    |
| rowSelection            | `any`                                              | \-                               | \-              | Select Column Configuration                                                                                                                                                   |                                                                                                                                                                    |
| title                   | `string`                                           | \-                               | \-              | Table Title                                                                                                                                                                   |                                                                                                                                                                    |
| titleHelpMessage        | `string ｜ string[]`                               | \-                               | \-              | Warm reminder on the right side of the table title                                                                                                                            |                                                                                                                                                                    |
| maxHeight               | `number`                                           | \-                               | \-              | The maximum height of the table. If it exceeds the maximum height, a scroll bar will be displayed.                                                                            |                                                                                                                                                                    |
| dataSource              | `any[]`                                            | \-                               | \-              | Table data, non-api loading status                                                                                                                                            |                                                                                                                                                                    |
| bordered                | `boolean`                                          | `false`                          | \-              | Whether to display the table border                                                                                                                                           |                                                                                                                                                                    |
| pagination              | `any`                                              | \-                               | \-              | Paging information configuration, to `false`not display paging                                                                                                                |                                                                                                                                                                    |
| loading                 | `boolean`                                          | `false`                          | \-              | Table loading status                                                                                                                                                          |                                                                                                                                                                    |
| scroll                  | `any`                                              | \-                               | \-              | Refer to the official document scroll                                                                                                                                         |                                                                                                                                                                    |
| beforeEditSubmit        | \`({record: Recordable,index: number,key: string   | number,value: any}) => Promise\` | \-              | \-                                                                                                                                                                            | The cell editing state submission callback, returning false will prevent the cell from submitting data to the table. This callback is invalid in row editing mode. |

### TableSetting

```
{
  // 是否显示刷新按钮
  redo?: boolean;
  // 是否显示尺寸调整按钮
  size?: boolean;
  // 是否显示字段调整按钮
  setting?: boolean;
  // 是否显示全屏按钮
  fullScreen?: boolean;
}

```

copy

## BasicColumn

In addition to referring to the official [Column configuration](https://www.antdv.com/components/table-cn#API) , the following parameters are extended

| Attributes         | type                                                      | default value | Optional Values | illustrate                                                                       |
| ------------------ | --------------------------------------------------------- | ------------- | --------------- | -------------------------------------------------------------------------------- |
| defaultHidden      | `boolean`                                                 | false         | \-              | Hidden by default, can be displayed in column configuration                      |
| helpMessage        | `string｜string[]`                                        | \-            | \-              | Help text on the right side of the column header                                 |
| edit               | `boolean`                                                 | \-            | \-              | Whether to enable cell editing                                                   |
| editRow            | `boolean`                                                 | \-            | \-              | Whether to enable line editing                                                   |
| editable           | `boolean`                                                 | false         | \-              | Is it in editing state?                                                          |
| editComponent      | `ComponentType`                                           | `Input`       | \-              | Edit Component                                                                   |
| editComponentProps | `any`                                                     | \-            | \-              | Corresponding to the props of the editing component                              |
| editRule           | `((text: string, record: Recordable) => Promise<string>)` | \-            | \-              | Corresponding to the form validation of the editing component                    |
| editValueMap       | `(value: any) => string`                                  | \-            | \-              | Corresponding cell value enumeration                                             |
| onEditRow          | `（）=>void`                                              | \-            | \-              | Trigger line editing                                                             |
| format             | `CellFormat`                                              | \-            | \-              | Cell formatting                                                                  |
| auth               | `RoleEnum`｜`RoleEnum[]`｜`string`｜`string[]`            | \-            | \-              | Control whether the current column is displayed according to the permission code |
| ifShow             | `boolean ｜ ((action: ActionItem) => boolean)`            | \-            | \-              | Control whether the current column is displayed according to the business status |

### EditComponentType

```
export type ComponentType =
  | 'Input'
  | 'InputNumber'
  | 'Select'
  | 'ApiSelect'
  | 'Checkbox'
  | 'Switch'
  | 'DatePicker'  // v2.5.0 以上
  | 'TimePicker'; // v2.5.0 以上

```

copy

### CellFormat

```
export type CellFormat =
  | string
  | ((text: string, record: Recordable, index: number) => string | number)
  | Map<string | number, any>;

```

copy

## event

Reminder

In addition to the following events, the events in the official documentation are also supported. For details, please refer to [the antv table](https://www.antdv.com/components/table-cn#API)

| event            | Callback parameters                     | illustrate                                                     |
| ---------------- | --------------------------------------- | -------------------------------------------------------------- |
| fetch-success    | `Function({items,total})`               | Triggered after the interface request is successful            |
| fetch-error      | `Function(error)`                       | error message                                                  |
| selection-change | `Function({keys，rows})`                | Check event trigger                                            |
| row-click        | `Function(record, index, event)`        | Row click trigger                                              |
| row-dbClick      | `Function(record, index, event)`        | Row double click trigger                                       |
| row-contextmenu  | `Function(record, index, event)`        | Trigger by right clicking on a row                             |
| row-mouseenter   | `Function(record, index, event)`        | Row move trigger                                               |
| row-mouseleave   | `Function(record, index, event)`        | Row out trigger                                                |
| edit-end         | `Function({record, index, key, value})` | Cell editing completed trigger                                 |
| edit-cancel      | `Function({record, index, key, value})` | Cell cancel editing trigger                                    |
| edit-row-end     | `Function()`                            | Line editing end trigger                                       |
| edit-change      | `Function({column,value,record})`       | Triggered when the value of the cell editing component changes |

edit-change Description

Starting from version `2.4.2`1.0, for `edit-change`events, an object containing the values ​​of all edit components of the current row (if any) can be used to handle the linkage of edit components in the same row. See the following example`record``editValueRefs``ref`

```
      function onEditChange({ column, record }) {
        // 当同一行的单价或者数量发生变化时，更新合计金额（三个数据均为当前行编辑组件的值）
        if (column.dataIndex === 'qty' || column.dataIndex === 'price') {
          const { editValueRefs: { total, qty, price } } = record;
          total.value = unref(qty) * unref(price);
        }
      }

```

copy

## Slots

Reminder

In addition to the following parameters, the slots in the official documentation are also supported. For details, please refer to [the antv table](https://www.antdv.com/components/table-cn#API)

| name              | illustrate                                | Version |
| ----------------- | ----------------------------------------- | ------- |
| tableTitle        | Top left area of ​​the table              |         |
| toolbar           | Top right area of ​​the table             |         |
| expandedRowRender | Expand Row Area                           |         |
| headerTop         | Top area of ​​the table (above the title) | 2.6.1   |

## Form-Slots

When the form is opened `form-xxxx`, the slot with the prefix will be regarded as the slot of the form.

xxxx is the slot of the form component. For details, refer to [the form component documentation](https://vvbin.cn/doc-next/components/form.html#Slots)

e.g

```
form-submitBefore

```

copy

## Built-in components (can only be used inside tables)

### TableAction

Used for rendering the operation column on the right side of the table

#### Props

| Attributes            | type           | default value | Optional Values | illustrate                                                            | Version |
| --------------------- | -------------- | ------------- | --------------- | --------------------------------------------------------------------- | ------- |
| actions               | `ActionItem[]` | \-            | \-              | Button list on the right side of the operation column                 |         |
| dropDownActions       | `ActionItem[]` | \-            | \-              | More drop-down button list in the right operation column              |         |
| stopButtonPropagation | `boolean`      | `false`       | `true/false`    | Whether to prevent the click event of the action button from bubbling | 2.5.0   |

**ActionItem**

```
export interface ActionItem {
  // 按钮文本
  label: string;
  // 是否禁用
  disabled?: boolean;
  // 按钮颜色
  color?: 'success' | 'error' | 'warning';
  // 按钮类型
  type?: string;
  // button组件props
  props?: any;
  // 按钮图标
  icon?: string;
  // 气泡确认框
  popConfirm?: PopConfirm;
  // 是否显示分隔线，v2.0.0+
  divider?: boolean;
  // 根据权限编码来控制当前列是否显示，v2.4.0+
  auth?: RoleEnum | RoleEnum[] | string | string[];
  // 根据业务状态来控制当前列是否显示，v2.4.0+
  ifShow?: boolean | ((action: ActionItem) => boolean);
  // 点击回调
  onClick?: Fn;
  // Tooltip配置，2.5.3以上版本支持，可以配置为string，或者完整的tooltip属性
  tooltip?: string | TooltipProps
}

```

copy

For a description of TooltipProps, see [tooltip](https://www.antdv.com/components/tooltip-cn#API)

**PopConfirm**

```
export interface PopConfirm {
  title: string;
  okText?: string;
  cancelText?: string;
  confirm: Fn;
  cancel?: Fn;
  icon?: string;
}

```

copy

### TableImg

Used to render cell images and support image preview

#### Props

| Attributes | type       | default value | Optional Values | illustrate                                              | Version |
| ---------- | ---------- | ------------- | --------------- | ------------------------------------------------------- | ------- |
| imgList    | `string[]` | \-            | \-              | Image URL List                                          |         |
| size       | `number`   | \-            | \-              | Image size                                              |         |
| simpleShow | `boolean`  | `false`       | `true/false`    | Simple display mode (only the first image is displayed) | 2.5.0   |
| showBadge  | `boolean`  | `true`        | `true/false`    | Whether to display the count badge in simple mode       | 2.5.0   |
| margin     | `number`   | 4             | \-              | Image spacing in normal mode                            | 2.5.0   |
| srcPrefix  | `string`   | \-            | \-              | Content inserted before each image src                  | 2.5.0   |

## Global Configuration

In [componentsSettings,](https://github.com/jeecgboot/jeecgboot-vue3/blob/master/src/settings/componentSetting.ts) you can configure global parameters. Used to unify the style of the entire project. You can pass values ​​through props to override
