---
order: 2
---

# BasicTable

> Based on `Ant Design Vue`the encapsulated table component BasicTable, it is used to display list data. For ease of use, some hook encapsulation is done internally to simplify the use. If you need to expand, please modify the hook:`/@/hooks/system/useListPage`

## scenes to be used

- Tables are a must-have feature for enterprise projects when there is a large amount of structured data that needs to be presented;
- When complex behaviors such as sorting, searching, paging, and custom operations are required on data.

## 1\. Basic usage

This example demonstrates how to quickly render a static data table. The data source of the specified table `dataSource` is a static array.

Page Effects

Sample Code

![](https://lfs.k.topthink.com/lfs/a7d3db462ee4651db3c4b2d701c77965adaa465ff92c5dbb6afe75b83f963626.dat)

> This table uses a static dataSource and customizes an 'Edit' button to render the user list information.

[Click to view online demo](http://boot3.jeecg.com/login?redirect=/demo/document/index)

```
<template>
  <!--定义表格-->
  <BasicTable @register="registerTable">
    <!--操作栏-->
    <template #action="{ record }">
      <TableAction :actions="getTableAction(record)" />
    </template>
  </BasicTable>
</template>

<script lang="ts" name="basic-table-demo" setup>
  import { ActionItem, BasicColumn, BasicTable, TableAction } from '/@/components/Table';
  import { useListPage } from '/@/hooks/system/useListPage';
  //定义表格列字段
  const columns: BasicColumn[] = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];
   /** useListPage 是整个框架的核心用于表格渲染，里边封装了很多公共方法；
    * 平台通过此封装，简化了代码，支持自定义扩展*/
  // 通过hook useListPage渲染表格（设置dataSource、columns、actionColumn等参数）
  const { tableContext } = useListPage({
    designScope: 'basic-table-demo',
    tableProps: {
      title: '用户列表',
      dataSource: [
        {
          key: '1',
          name: '胡歌',
          age: 32,
          address: '朝阳区林萃路1号',
        },
        {
          key: '2',
          name: '刘诗诗',
          age: 32,
          address: '昌平区白沙路1号',
        },
      ],
      columns: columns,
      size: 'small',
      actionColumn: {
        width: 120,
      },
    },
  });
  // BasicTable绑定注册
  const [registerTable] = tableContext;
  /**
   * 操作栏
   */
  function getTableAction(record): ActionItem[] {
    return [
      {
        label: '编辑',
        onClick: handleEdit.bind(null, record),
      },
    ];
  }

  function handleEdit(record) {
    console.log(record);
  }
</script>
```

复制

## 2\. Load data remotely

This example demonstrates: loading data through ajax api request, reading and displaying data from the server. It also configures functions such as column width dragging and sorting. Developers can integrate other data processing methods.

Page Effects

Sample Code

![](https://lfs.k.topthink.com/lfs/191481bfda0ddec4318567b27bfb330f6c4465e8f8b9ff8f2939bb146b8842f5.dat)  
[Click to view online demo](http://boot3.jeecg.com/login?redirect=/demo/document/index)

> API Definition  
> ![](https://lfs.k.topthink.com/lfs/23b8f8e612dcbf8ce5e7124e4ebdc00ee67d983752da1d4c24279ec13a90e018.dat)  
> Column field drag  
> ![](https://lfs.k.topthink.com/lfs/d52a5b8cd18c4e59ad0e07241bb0d8fc890b3f74ac6dd4fb49e1928d6b6f041b.dat)  
> Column field sorting  
> ![](https://lfs.k.topthink.com/lfs/1583d6e096ca064e20e79e28cec0764fa03826687914a7e52734997b346252ad.dat)

```
<template>
  <!--定义表格-->
  <BasicTable @register="registerTable">
    <!--操作栏-->
    <template #action="{ record }">
      <TableAction :actions="getTableAction(record)" />
    </template>
  </BasicTable>
</template>

<script lang="ts" name="basic-table-demo" setup>
  import { ActionItem, BasicColumn, BasicTable, TableAction } from '/@/components/Table';
  import { useListPage } from '/@/hooks/system/useListPage';
  import { defHttp } from '/@/utils/http/axios';
  //定义表格列
  const columns: BasicColumn[] = [
    {
      title: '姓名',
      dataIndex: 'name',
      width: 170,
      align: 'left',
      resizable: true,
      sorter: {
        multiple: 1,
      },
    },
    {
      title: '关键词',
      dataIndex: 'keyWord',
      width: 130,
      resizable: true,
    },
    {
      title: '打卡时间',
      dataIndex: 'punchTime',
      width: 140,
      resizable: true,
    },
    {
      title: '工资',
      dataIndex: 'salaryMoney',
      width: 140,
      resizable: true,
      sorter: {
        multiple: 2,
      },
    },
    {
      title: '奖金',
      dataIndex: 'bonusMoney',
      width: 140,
      resizable: true,
    },
    {
      title: '性别',
      dataIndex: 'sex',
      sorter: {
        multiple: 3,
      },
      customRender: ({ record }) => {
        return record.sex ? (record.sex == '1' ? '男' : '女') : '';
      },
      width: 120,
      resizable: true,
    },
    {
      title: '生日',
      dataIndex: 'birthday',
      width: 120,
      resizable: true,
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      width: 120,
      resizable: true,
    },
  ];
  //ajax请求api接口
  const demoListApi = (params) => {
    return defHttp.get({ url: '/test/jeecgDemo/list', params });
  };
  // 列表页面公共参数、方法
  const { tableContext } = useListPage({
    designScope: 'basic-table-demo-ajax',
    tableProps: {
      title: '用户列表',
      api: demoListApi,
      columns: columns,
      actionColumn: {
        width: 120,
      },
    },
  });
  //BasicTable绑定注册
  const [registerTable] = tableContext;
  /**
   * 操作栏
   */
  function getTableAction(record): ActionItem[] {
    return [
      {
        label: '编辑',
        onClick: handleEdit.bind(null, record),
      },
    ];
  }

  function handleEdit(record) {
    console.log(record);
  }
</script>
```

复制

## 3\. With border

This example demonstrates: setting the border through the bordered parameter of tableProps of useListPage, adding table border lines, and also defining a custom footer.

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/1db8027f2f68a6d6c72ba8808662f2dcec16172e858fa33a1eff6789a5816d11.dat)  
[Click to view online demo](http://boot3.jeecg.com/login?redirect=/demo/document/index)

> Border settings  
> ![](https://lfs.k.topthink.com/lfs/b262d5336ccda51f764b5b7998c981df802a55515c1179cc6d03fc98a023b40f.dat)  
> Footer Settings  
> ![](https://lfs.k.topthink.com/lfs/d1a12f72cc0f40a98d53d9dcce1ba4385aae515a6c41a92b7b1b8390d1b464d7.dat)

```
  <!--定义表格-->
  <BasicTable @register="registerTable">
      <template #bodyCell="{ column, text }">
          <template v-if="column.dataIndex === 'name'">
              <a>{{ text }}</a>
          </template>
      </template>
      <template #footer>Footer</template>
  </BasicTable>
</template>

<script lang="ts" name="basic-table-demo" setup>
  import { ActionItem, BasicColumn, BasicTable, TableAction } from '/@/components/Table';
  import { useListPage } from '/@/hooks/system/useListPage';
  //定义表格列
  const columns: BasicColumn[] = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  // 列表页面公共参数、方法
  const { tableContext } = useListPage({
    designScope: 'basic-table-demo',
    tableProps: {
      title:'header',
      dataSource: [
        {
          key: '1',
          name: '胡歌',
          age: 32,
          address: '朝阳区林萃路1号',
        },
        {
          key: '2',
          name: '刘诗诗',
          age: 32,
          address: '昌平区白沙路1号',
        },
      ],
      columns: columns,
      bordered: true,//默认是true，可不设置
      showActionColumn: false
    },
  });
  //BasicTable绑定注册
  const [registerTable] = tableContext;
  /**
   * 操作栏
   */
  function getTableAction(record): ActionItem[] {
    return [
      {
        label: '编辑',
        onClick: handleEdit.bind(null, record),
      },
    ];
  }

  function handleEdit(record) {
    console.log(record);
  }
</script>
```

复制

## 4\. Cells are automatically omitted

This example demonstrates: Setting the ellipsis property of a cell column allows the cell content to be automatically omitted according to the width.

Page Effects

Sample Code

![](https://lfs.k.topthink.com/lfs/540c0d949d68a64e40a04febc0a55f926ab3cfdb2c5d8965eeabe316abe2c997.dat)  
[Click to view online demo](http://boot3.jeecg.com/login?redirect=/demo/document/index)

> Automatic Omission  
> ![](https://lfs.k.topthink.com/lfs/f502e78b708f20ebe98477b8d45559f41547c93c73cdf2439a5ce5db5b8ba067.dat)

```
<template>
  <!--定义表格-->
  <BasicTable @register="registerTable">
      <template #bodyCell="{ column, text }">
          <template v-if="column.dataIndex === 'name'">
              <a>{{ text }}</a>
          </template>
      </template>
  </BasicTable>
</template>

<script lang="ts" name="basic-table-demo" setup>
  import { ActionItem, BasicColumn, BasicTable, TableAction } from '/@/components/Table';
  import { useListPage } from '/@/hooks/system/useListPage';
  //定义表格列
  const columns: BasicColumn[] = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      width:300
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      width:300
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
      ellipsis:true
    },
    {
      title: '长内容列',
      dataIndex: 'address',
      key: 'address 2',
      ellipsis: true,
    },
    {
      title: '长内容列',
      dataIndex: 'address',
      key: 'address 3',
      ellipsis: true,
    },
  ];
  // 列表页面公共参数、方法
  const { tableContext } = useListPage({
    designScope: 'basic-table-demo',
    tableProps: {
      title:'长内容省略显示',
      dataSource: [
        {
          key: '1',
          name: '张三',
          age: 32,
          address: '中国北京北京市朝阳区大屯路科学院南里1号楼3单元401',
        },
        {
          key: '2',
          name: '刘思',
          age: 32,
          address: '中国北京北京市昌平区顺沙路尚湖世家2号楼7单元503',
        },
      ],
      columns: columns,
      showActionColumn: false
    },
  });

  //BasicTable绑定注册
  const [registerTable] = tableContext;
  /**
   * 操作栏
   */
  function getTableAction(record): ActionItem[] {
    return [
      {
        label: '编辑',
        onClick: handleEdit.bind(null, record),
      },
    ];
  }

  function handleEdit(record) {
    console.log(record);
  }
</script>
```

复制

## 5\. Merge table rows and columns

This example demonstrates how to use the colSpan/rowSpan attributes of a column to merge rows and columns in a table. When the colSpan or rowSpan attribute of a cell in render is set to 0, the table will not be rendered.

Page Effects

Sample Code

![](https://lfs.k.topthink.com/lfs/28232182f0304364970a34e29d5d9c899a15d1aeaea96a5c1434fb8fd682daa7.dat)  
[Click to view online demo](http://boot3.jeecg.com/login?redirect=/demo/document/index)

> Merge rows/columns  
> ![](https://lfs.k.topthink.com/lfs/a3878bb178a4df6ea73b902c037ab7e3f6f6537891a7cf18720bb5ac54297e1f.dat)

```
<template>
  <!--定义表格-->
  <BasicTable @register="registerTable">
    <!--操作栏-->
    <template #action="{ record }">
      <TableAction :actions="getTableAction(record)" />
    </template>
  </BasicTable>
</template>

<script lang="ts" name="basic-table-demo" setup>
  import { ActionItem, BasicColumn, BasicTable, TableAction } from '/@/components/Table';
  import { useListPage } from '/@/hooks/system/useListPage';
  //定义表格列
  const columns: BasicColumn[] = [
    {
      title: '名称',
      dataIndex: 'name',
      customCell: (record, index, column) => ({
        colSpan: index < 4 ? 1 : 5,
      }),
      customRender: ({ text, record, index, column }) => {
          return index < 4?text:`${record.name}/${record.age}/${record.address}/${record.phone}`
      },
    },
    {
      title: '年龄',
      dataIndex: 'age',
      customCell: (record, index, column) => {
        if (index === 4) {
          return { colSpan: 0 };
        }
      },
    },
    {
      title: '家庭住址',
      dataIndex: 'address',
      customCell: (record, index, column) => {
        if (index === 4) {
          return { colSpan: 0 };
        }
      },
    },
    {
      title: '联系电话',
      colSpan: 2,
      dataIndex: 'tel',
      customCell: (record, index, column) => {
        if (index === 2) {
          return { rowSpan: 2 };
        }
        if (index === 3) {
          return { rowSpan: 0 };
        }
        if (index === 4) {
          return { colSpan: 0 };
        }
      },
    },
    {
      title: 'Phone',
      colSpan: 0,
      dataIndex: 'phone',
      customCell: (record, index, column) => {
        if (index === 4) {
          return { colSpan: 0 };
        }
      },
    },
  ];
  // 列表页面公共参数、方法
  const { tableContext } = useListPage({
    designScope: 'basic-table-demo',
    tableProps: {
      title: '合并行列',
      dataSource: [
        {
          key: '1',
          name: '尹嘉乐',
          age: 32,
          tel: '0319-5972018',
          phone: 17600080009,
          address: '北京市昌平区',
        },
        {
          key: '2',
          name: '龙佳钰',
          tel: '0319-5972018',
          phone: 17600060007,
          age: 42,
          address: '北京市海淀区',
        },
        {
          key: '3',
          name: '贺泽惠',
          age: 32,
          tel: '0319-5972018',
          phone: 17600040005,
          address: '北京市门头沟区',
        },
        {
          key: '4',
          name: '沈勇',
          age: 18,
          tel: '0319-5972018',
          phone: 17600010003,
          address: '北京市朝阳区',
        },
        {
          key: '5',
          name: '白佳毅',
          age: 18,
          tel: '0319-5972018',
          phone: 17600010002,
          address: '北京市丰台区',
        },
      ],
      columns: columns,
      showActionColumn: false,
    },
  });

  //BasicTable绑定注册
  const [registerTable] = tableContext;
  /**
   * 操作栏
   */
  function getTableAction(record): ActionItem[] {
    return [
      {
        label: '编辑',
        onClick: handleEdit.bind(null, record),
      },
    ];
  }

  function handleEdit(record) {
    console.log(record);
  }
</script>


```

复制

## 6\. Editable cells

This example demonstrates how to configure a table with editable cells.

Page Effects

Sample Code

![](https://lfs.k.topthink.com/lfs/d0403a3ce6f46dd22a7d4bc0966379f3a1f04c5013144590a1ac01dd98529561.dat)  
[Click to view online demo](http://boot3.jeecg.com/login?redirect=/demo/document/index)

> Editable configuration, please refer to the api below the document for details  
> ![](https://lfs.k.topthink.com/lfs/5b9fef3b0946896ae0229cb9f598f4d00ec3a8420ca579b9e1dab4db7f4a83c6.dat)  
> Editing Method  
> ![](https://lfs.k.topthink.com/lfs/f24ba6048a62845f443c0968313bf1eca8391a7457c8ce458ff2205bd522f6f9.dat)

```
<template>
  <div class="p-4">
    <BasicTable
        @register="registerTable"
        @edit-end="handleEditEnd"
        @edit-cancel="handleEditCancel"
        :beforeEditSubmit="beforeEditSubmit" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, BasicColumn } from '/@/components/Table';
  import { optionsListApi } from '/@/api/demo/select';

  import { demoListApi } from '/@/api/demo/table';
  import { treeOptionsListApi } from '/@/api/demo/tree';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useListPage } from '/@/hooks/system/useListPage';
  const columns: BasicColumn[] = [
    {
      title: '输入框',
      dataIndex: 'name',
      edit: true,
      editComponentProps: {
        prefix: '$',
      },
      width: 200,
    },
    {
      title: '默认输入状态',
      dataIndex: 'name7',
      edit: true,
      editable: true,
      width: 200,
    },
    {
      title: '输入框校验',
      dataIndex: 'name1',
      edit: true,
      // 默认必填校验
      editRule: true,
      width: 200,
    },
    {
      title: '输入框函数校验',
      dataIndex: 'name2',
      edit: true,
      editRule: async (text) => {
        if (text === '2') {
          return '不能输入该值';
        }
        return '';
      },
      width: 200,
    },
    {
      title: '数字输入框',
      dataIndex: 'id',
      edit: true,
      editRule: true,
      editComponent: 'InputNumber',
      width: 200,
    },
    {
      title: '下拉框',
      dataIndex: 'name3',
      edit: true,
      editComponent: 'Select',
      editComponentProps: {
        options: [
          {
            label: 'Option1',
            value: '1',
          },
          {
            label: 'Option2',
            value: '2',
          },
        ],
      },
      width: 200,
    },
    {
      title: '远程下拉',
      dataIndex: 'name4',
      edit: true,
      editComponent: 'ApiSelect',
      editComponentProps: {
        api: optionsListApi,
        resultField: 'list',
        labelField: 'name',
        valueField: 'id',
      },
      width: 200,
    },
    {
      title: '远程下拉树',
      dataIndex: 'name71',
      edit: true,
      editComponent: 'ApiTreeSelect',
      editRule: false,
      editComponentProps: {
        api: treeOptionsListApi,
        resultField: 'list',
      },
      width: 200,
    },
    {
      title: '日期选择',
      dataIndex: 'date',
      edit: true,
      editComponent: 'DatePicker',
      editComponentProps: {
        valueFormat: 'YYYY-MM-DD',
        format: 'YYYY-MM-DD',
      },
      width: 200,
    },
    {
      title: '时间选择',
      dataIndex: 'time',
      edit: true,
      editComponent: 'TimePicker',
      editComponentProps: {
        valueFormat: 'HH:mm',
        format: 'HH:mm',
      },
      width: 200,
    },
    {
      title: '勾选框',
      dataIndex: 'name5',
      edit: true,
      editComponent: 'Checkbox',
      editValueMap: (value) => {
        return value ? '是' : '否';
      },
      width: 200,
    },
    {
      title: '开关',
      dataIndex: 'name6',
      edit: true,
      editComponent: 'Switch',
      editValueMap: (value) => {
        return value ? '开' : '关';
      },
      width: 200,
    },
  ];
  export default defineComponent({
    components: { BasicTable },
    setup() {
      // 列表页面公共参数、方法
      const { tableContext } = useListPage({
        designScope: 'basic-table-demo',
        tableProps: {
          title: '可编辑单元格示例',
          api: demoListApi,
          columns: columns,
          showIndexColumn: false,
          bordered: true,
          showActionColumn: false,
        },
      });
      //注册table数据
      const [registerTable] = tableContext;
      const { createMessage } = useMessage();

      function handleEditEnd({ record, index, key, value }: Recordable) {
        console.log(record, index, key, value);
        return false;
      }

      // 模拟将指定数据保存
      function feakSave({ value, key, id }) {
        createMessage.loading({
          content: `正在模拟保存${key}`,
          key: '_save_fake_data',
          duration: 0,
        });
        return new Promise((resolve) => {
          setTimeout(() => {
            if (value === '') {
              createMessage.error({
                content: '保存失败：不能为空',
                key: '_save_fake_data',
                duration: 2,
              });
              resolve(false);
            } else {
              createMessage.success({
                content: `记录${id}的${key}已保存`,
                key: '_save_fake_data',
                duration: 2,
              });
              resolve(true);
            }
          }, 2000);
        });
      }

      async function beforeEditSubmit({ record, index, key, value }) {
        console.log('单元格数据正在准备提交', { record, index, key, value });
        return await feakSave({ id: record.id, key, value });
      }

      function handleEditCancel() {
        console.log('cancel');
      }

      return {
        registerTable,
        handleEditEnd,
        handleEditCancel,
        beforeEditSubmit,
      };
    },
  });
</script>

```

复制

## 7\. Editable rows

This example demonstrates: a table with row editing function. By switching the row status, you can edit the fields in the row.

Page Effects

Sample Code

![](https://lfs.k.topthink.com/lfs/7c60caa94ab95f19334d54eead0078c9bac16a960b01f35053974d48cff62348.dat)

[Click to view online demo](http://boot3.jeecg.com/login?redirect=/demo/document/index)

> Edit row configuration  
> ![](https://lfs.k.topthink.com/lfs/214a28b0c472ef1d822067dbd50055683144a32e5a24ed8ef2fce5c810736c87.dat)  
> ![](https://lfs.k.topthink.com/lfs/70fa4d71b95b7b5499720b5cc23f9b792d22476f4e0c46bd55011e5b9a7d82be.dat)

```
<template>
  <div class="p-4">
    <BasicTable @register="registerTable" @edit-change="onEditChange">
      <template #action="{ record, column }">
        <TableAction :actions="createActions(record, column)" />
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicTable, useTable, TableAction, BasicColumn, ActionItem, EditRecordRow } from '/@/components/Table';
  import { optionsListApi } from '/@/api/demo/select';

  import { demoListApi } from '/@/api/demo/table';
  import { treeOptionsListApi } from '/@/api/demo/tree';
  import { cloneDeep } from 'lodash-es';
  import { useMessage } from '/@/hooks/web/useMessage';
  import {useListPage} from "/@/hooks/system/useListPage";

  const columns: BasicColumn[] = [
    {
      title: '输入框',
      dataIndex: 'name',
      editRow: true,
      editComponentProps: {
        prefix: '$',
      },
      width: 150,
    },
    {
      title: '默认输入状态',
      dataIndex: 'name7',
      editRow: true,
      width: 150,
    },
    {
      title: '输入框校验',
      dataIndex: 'name1',
      editRow: true,
      align: 'left',
      // 默认必填校验
      editRule: true,
      width: 150,
    },
    {
      title: '输入框函数校验',
      dataIndex: 'name2',
      editRow: true,
      align: 'right',
      editRule: async (text) => {
        if (text === '2') {
          return '不能输入该值';
        }
        return '';
      },
    },
    {
      title: '数字输入框',
      dataIndex: 'id',
      editRow: true,
      editRule: true,
      editComponent: 'InputNumber',
      width: 150,
    },
    {
      title: '下拉框',
      dataIndex: 'name3',
      editRow: true,
      editComponent: 'Select',
      editComponentProps: {
        options: [
          {
            label: 'Option1',
            value: '1',
          },
          {
            label: 'Option2',
            value: '2',
          },
          {
            label: 'Option3',
            value: '3',
          },
        ],
      },
      width: 200,
    },
    {
      title: '远程下拉',
      dataIndex: 'name4',
      editRow: true,
      editComponent: 'ApiSelect',
      editComponentProps: {
        api: optionsListApi,
        resultField: 'list',
        labelField: 'name',
        valueField: 'id',
      },
      width: 200,
    },
    {
      title: '远程下拉树',
      dataIndex: 'name8',
      editRow: true,
      editComponent: 'ApiTreeSelect',
      editRule: false,
      editComponentProps: {
        api: treeOptionsListApi,
        resultField: 'list',
      },
      width: 200,
    },
    {
      title: '日期选择',
      dataIndex: 'date',
      editRow: true,
      editComponent: 'DatePicker',
      editComponentProps: {
        valueFormat: 'YYYY-MM-DD',
        format: 'YYYY-MM-DD',
      },
      width: 150,
    },
    {
      title: '时间选择',
      dataIndex: 'time',
      editRow: true,
      editComponent: 'TimePicker',
      editComponentProps: {
        valueFormat: 'HH:mm',
        format: 'HH:mm',
      },
      width: 100,
    },
    {
      title: '勾选框',
      dataIndex: 'name5',
      editRow: true,

      editComponent: 'Checkbox',
      editValueMap: (value) => {
        return value ? '是' : '否';
      },
      width: 100,
    },
    {
      title: '开关',
      dataIndex: 'name6',
      editRow: true,
      editComponent: 'Switch',
      editValueMap: (value) => {
        return value ? '开' : '关';
      },
      width: 100,
    },
  ];
  export default defineComponent({
    components: { BasicTable, TableAction },
    setup() {
      const { createMessage: msg } = useMessage();
      const currentEditKeyRef = ref('');

      const { tableContext } = useListPage({
          designScope: 'basic-table-demo',
          tableProps: {
              title: '可编辑行示例',
              api: demoListApi,
              columns: columns,
              showIndexColumn: false,
              showTableSetting: true,
              tableSetting: { fullScreen: true },
              actionColumn: {
                  width: 160,
                  title: 'Action',
                  dataIndex: 'action',
                  slots: { customRender: 'action' },
              },
          },
      });

      //BasicTable绑定注册
      const [registerTable] = tableContext;

      function handleEdit(record: EditRecordRow) {
        currentEditKeyRef.value = record.key;
        record.onEdit?.(true);
      }

      function handleCancel(record: EditRecordRow) {
        currentEditKeyRef.value = '';
        record.onEdit?.(false, false);
      }

      async function handleSave(record: EditRecordRow) {
        // 校验
        msg.loading({ content: '正在保存...', duration: 0, key: 'saving' });
        const valid = await record.onValid?.();
        if (valid) {
          try {
            const data = cloneDeep(record.editValueRefs);
            console.log(data);
            //TODO 此处将数据提交给服务器保存
            // ...
            // 保存之后提交编辑状态
            const pass = await record.onEdit?.(false, true);
            if (pass) {
              currentEditKeyRef.value = '';
            }
            msg.success({ content: '数据已保存', key: 'saving' });
          } catch (error) {
            msg.error({ content: '保存失败', key: 'saving' });
          }
        } else {
          msg.error({ content: '请填写正确的数据', key: 'saving' });
        }
      }

      function createActions(record: EditRecordRow, column: BasicColumn): ActionItem[] {
        if (!record.editable) {
          return [
            {
              label: '编辑',
              disabled: currentEditKeyRef.value ? currentEditKeyRef.value !== record.key : false,
              onClick: handleEdit.bind(null, record),
            },
          ];
        }
        return [
          {
            label: '保存',
            onClick: handleSave.bind(null, record, column),
          },
          {
            label: '取消',
            popConfirm: {
              title: '是否取消编辑',
              confirm: handleCancel.bind(null, record, column),
            },
          },
        ];
      }

      function onEditChange({ column, value, record }) {
        // 本例
        if (column.dataIndex === 'id') {
          record.editValueRefs.name4.value = `${value}`;
        }
        console.log(column, value, record);
      }

      return {
        registerTable,
        handleEdit,
        createActions,
        onEditChange,
      };
    },
  });
</script>
```

复制

## 8\. Tree table

This example demonstrates: the table supports the display of tree data

Page Effects

Sample Code

![](https://lfs.k.topthink.com/lfs/97f8de11d090b9b39757e3976a7b026b66b08b4d4f3cc69ea0e85d2628856bb5.dat)  
[Click to view online demo](http://boot3.jeecg.com/login?redirect=/demo/document/index)

> Tree table property settings  
> ![](https://lfs.k.topthink.com/lfs/fd0235aa992d0464860bd27ff9b07402afee44be8e565e8209d973d3ac725f55.dat)  
> data structure  
> ![](https://lfs.k.topthink.com/lfs/3e24d3a17f22e2e13dd62efb07d9c824492a20f23ce48e166acee41e3ac6b95a.dat)

```
<template>
  <div class="p-4">
    <BasicTable @register="register">
      <template #toolbar>
        <a-button type="primary" @click="expandAll">展开全部</a-button>
        <a-button type="primary" @click="collapseAll">折叠全部</a-button>
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicColumn, BasicTable } from '/@/components/Table';
  import { useListPage } from '/@/hooks/system/useListPage';
  const columns: BasicColumn[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      fixed: 'left',
      width: 200,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      width: 150,
      filters: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
      ],
    },
    {
      title: '地址',
      dataIndex: 'address',
      width: 300,
    },
    {
      title: '编号',
      dataIndex: 'no',
      width: 150,
      sorter: true,
      defaultHidden: true,
    },
    {
      title: '开始时间',
      width: 150,
      sorter: true,
      dataIndex: 'beginTime',
    },
    {
      title: '结束时间',
      width: 150,
      sorter: true,
      dataIndex: 'endTime',
    },
  ];
  export default defineComponent({
    components: { BasicTable },
    setup() {
      const { tableContext } = useListPage({
        tableProps: {
          title: '树形表格',
          isTreeTable: true,
          rowSelection: {
            type: 'checkbox',
            getCheckboxProps(record: Recordable) {
              // Demo: 第一行（id为0）的选择框禁用
              if (record.id === '0') {
                return { disabled: true };
              } else {
                return { disabled: false };
              }
            },
          },
          columns: columns,
          dataSource: getTreeTableData(),
          rowKey: 'id',
        },
      });

     //BasicTable绑定注册
      const [register, { expandAll, collapseAll }] = tableContext;
      function getTreeTableData() {
        const data: any = (() => {
          const arr: any = [];
          for (let index = 0; index < 40; index++) {
            arr.push({
              id: `${index}`,
              name: 'John Brown',
              age: `1${index}`,
              no: `${index + 10}`,
              address: 'New York No. 1 Lake ParkNew York No. 1 Lake Park',
              beginTime: new Date().toLocaleString(),
              endTime: new Date().toLocaleString(),
              children: [
                {
                  id: `l2-${index}`,
                  name: 'John Brown',
                  age: `1${index}`,
                  no: `${index + 10}`,
                  address: 'New York No. 1 Lake ParkNew York No. 1 Lake Park',
                  beginTime: new Date().toLocaleString(),
                  endTime: new Date().toLocaleString(),
                },
                {
                  id: `l3-${index}`,
                  name: 'John Mary',
                  age: `1${index}`,
                  no: `${index + 10}`,
                  address: 'New York No. 1 Lake ParkNew York No. 1 Lake Park',
                  beginTime: new Date().toLocaleString(),
                  endTime: new Date().toLocaleString(),
                },
              ],
            });
          }
          return arr;
        })();

        return data;
      }
      return { register, expandAll, collapseAll };
    },
  });
</script>
```

复制

## 9\. Expandable rows

This example demonstrates: When the table content is too large to be fully displayed at once, you can use expand rows to solve the problem.

Page Effects

Sample Code

![](https://lfs.k.topthink.com/lfs/b7c06ab08ee56ff993c3f6b223e61da90ffb5ac628d8a523e92fc388a84edad0.dat)

[Click to view online demo](http://boot3.jeecg.com/login?redirect=/demo/document/index)

> Row Click Configuration  
> ![](https://lfs.k.topthink.com/lfs/80b9a7d34666cdc2a41ea41025170040df4083bfd02d98d2a434c5c921aba3a6.dat)  
> ![](https://lfs.k.topthink.com/lfs/8c7e24f45659dd7e769d73b93afe987e07993542285456c9f8d1d8455adf20fb.dat)

```
<template>
  <PageWrapper
    title="可展开表格"
    content="不可与scroll共用。TableAction组件可配置stopButtonPropagation来阻止操作按钮的点击事件冒泡，以便配合Table组件的expandRowByClick"
  >
    <BasicTable @register="registerTable">
      <template #expandedRowRender="{ record }">
        <span>No: {{ record.no }} </span>
      </template>
      <template #action="{ record }">
        <TableAction
          stopButtonPropagation
          :actions="[
            {
              label: '删除',
              icon: 'ic:outline-delete-outline',
              onClick: handleDelete.bind(null, record),
            },
          ]"
          :dropDownActions="[
            {
              label: '启用',
              popConfirm: {
                title: '是否启用？',
                confirm: handleOpen.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, TableAction, BasicColumn } from '/@/components/Table';
  import { PageWrapper } from '/@/components/Page';
  import { demoListApi } from '/@/api/demo/table';
  import {useListPage} from "/@/hooks/system/useListPage";
  const columns: BasicColumn[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      fixed: 'left',
      width: 200,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      width: 150,
      filters: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
      ],
    },
    {
      title: '地址',
      dataIndex: 'address',
      width: 300,
    },
    {
      title: '编号',
      dataIndex: 'no',
      width: 150,
      sorter: true,
      defaultHidden: true,
    },
    {
      title: '开始时间',
      width: 150,
      sorter: true,
      dataIndex: 'beginTime',
    },
    {
      title: '结束时间',
      width: 150,
      sorter: true,
      dataIndex: 'endTime',
    },
  ];
  export default defineComponent({
    components: { BasicTable, TableAction, PageWrapper },
    setup() {
      const { tableContext } = useListPage({
        designScope: 'basic-table-demo',
        tableProps: {
          api: demoListApi,
          title: '可展开表格演示',
          titleHelpMessage: ['已启用expandRowByClick', '已启用stopButtonPropagation'],
          columns: columns,
          rowKey: 'id',
          canResize: false,
          expandRowByClick: true,
          actionColumn: {
            width: 160,
            title: 'Action',
            dataIndex: 'action'
          },
        },
      });

     //BasicTable绑定注册
      const [registerTable] = tableContext;

      function handleDelete(record: Recordable) {
        console.log('点击了删除', record);
      }
      function handleOpen(record: Recordable) {
        console.log('点击了启用', record);
      }

      return {
        registerTable,
        handleDelete,
        handleOpen,
      };
    },
  });
</script>

```

复制

## 10\. Fixed header and columns

This example demonstrates how to fix headers and columns, which is suitable for displaying a large amount of data and data columns at the same time.

Page Effects

Sample Code

![](https://lfs.k.topthink.com/lfs/29d814a79ae0d0ce103cea147dfe2e5f0e2f4bd126228db45bba8f9e32f98532.dat)  
[Click to view online demo](http://boot3.jeecg.com/login?redirect=/demo/document/index)

> Fixed Header Settings  
> ![](https://lfs.k.topthink.com/lfs/b2da91804f1a7b351a2e2cfd3467227e98af180c36ac6c037e6888675ed3b0ae.dat)  
> Fixed column settings  
> ![](https://lfs.k.topthink.com/lfs/ac841fabda566fe689c508275c37de1dad9cbd3a842eb96cd7a488585675bbd8.dat)

```
<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              label: '删除',
              icon: 'ic:outline-delete-outline',
              onClick: handleDelete.bind(null, record),
            },
          ]"
          :dropDownActions="[
            {
              label: '启用',
              popConfirm: {
                title: '是否启用？',
                confirm: handleOpen.bind(null, record),
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
  import { useListPage } from '/@/hooks/system/useListPage';
  const columns: BasicColumn[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      fixed: 'left',
      width: 280,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      width: 260,
    },
    {
      title: '地址',
      dataIndex: 'address',
    },
    {
      title: '编号',
      dataIndex: 'no',
      width: 300,
    },
    {
      title: '开始时间',
      width: 200,
      dataIndex: 'beginTime',
    },
    {
      title: '结束时间',
      dataIndex: 'endTime',
      width: 200,
    },
  ];
  export default defineComponent({
    components: { BasicTable, TableAction },
    setup() {
      const { tableContext } = useListPage({
        tableProps: {
          title: '固定头和列示例',
          api: demoListApi,
          columns: columns,
          canResize: false,
          scroll: { y: 200 },
          actionColumn: {
            width: 160,
            title: 'Action',
            dataIndex: 'action',
          },
        },
      });

    //BasicTable绑定注册
      const [registerTable] = tableContext;
      function handleDelete(record: Recordable) {
        console.log('点击了删除', record);
      }
      function handleOpen(record: Recordable) {
        console.log('点击了启用', record);
      }
      return {
        registerTable,
        handleDelete,
        handleOpen,
      };
    },
  });
</script>

```

复制

## 11\. Group header

This example demonstrates: how to customize the rendering of multi-level grouping headers.

Page Effects

Sample Code

![](https://lfs.k.topthink.com/lfs/314029a64c28908e13e7e24b72e087100fa252a5fb911917bcc100406aa290eb.dat)

[Click to view online demo](http://boot3.jeecg.com/login?redirect=/demo/document/index)

> Multi-level grouping configuration of table header  
> ![](https://lfs.k.topthink.com/lfs/73dd77aac921c8de70d4a2cf9f3070a8cabbd2dcace9c2868d286cca4a3b8127.dat)

```
<template>
  <div class="p-4">
    <BasicTable @register="registerTable" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicColumn, BasicTable } from '/@/components/Table';
  import { useListPage } from '/@/hooks/system/useListPage';
  import { demoListApi } from '/@/api/demo/table';

  //计算合并表头
  export default defineComponent({
    components: { BasicTable },
    setup() {

   // 列表页面公共参数、方法
      const { tableContext } = useListPage({
        tableProps: {
           title: '分组表头示例',
            api: demoListApi,
            columns: getMergeHeaderColumns(),
        },
      });

      //BasicTable绑定注册
      const [registerTable] = tableContext;

      function getMergeHeaderColumns(): BasicColumn[] {
        return [
          {
            title: 'ID',
            dataIndex: 'id',
            width: 300,
          },
          {
            title: '姓名',
            dataIndex: 'name',
            width: 300,
          },
          {
            title: '地址',
            width: 120,
            children: [
              {
                title: '地址',
                dataIndex: 'address',
                key: 'address',
                width: 200,
              },
              {
                title: '编号',
                dataIndex: 'no',
                key: 'no',
              },
            ],
          },
          {
            title: '开始时间',
            dataIndex: 'beginTime',
            width: 200,
          },
          {
            title: '结束时间',
            dataIndex: 'endTime',
            width: 200,
          },
        ];
      }
      return {
        registerTable,
      };
    },
  });
</script>

```

复制

## 12\. Nested subtables

This example demonstrates: how to nest sub-table data and display the sub-table information for each row of data.

Page Effects

Sample Code

![](https://lfs.k.topthink.com/lfs/7bc25415a3912cdfdabd36b0b5d7d281af1fe6e390fc5e696de1369cbb382090.dat)

[Click to view online demo](http://boot3.jeecg.com/login?redirect=/demo/document/index)

> Set via the expandedRowRender slot  
> ![](https://lfs.k.topthink.com/lfs/8b806eae5a53f3d81352c90b794df22eb5fbb30f7c83f5749fe3047b4ddde23e.dat)

```
<template>
  <BasicTable @register="registerTable" class="components-table-demo-nested">
    <template #bodyCell="{ column }">
      <template v-if="column.key === 'operation'">
        <a>Publish</a>
      </template>
    </template>
    <template #expandedRowRender>
      <a-table :columns="innerColumns" :data-source="innerData" :pagination="false">
        <template #bodyCell="{ column }">
          <template v-if="column.dataIndex === 'state'">
            <span>
              <a-badge status="success" />
              Finished
            </span>
          </template>
          <template v-if="column.dataIndex === 'operation'">
            <span class="table-operation">
              <a>Pause</a>
              <a>Stop</a>
              <a-dropdown>
                <template #overlay>
                  <a-menu>
                    <a-menu-item>Action 1</a-menu-item>
                    <a-menu-item>Action 2</a-menu-item>
                  </a-menu>
                </template>
                <a> More </a>
              </a-dropdown>
            </span>
          </template>
        </template>
      </a-table>
    </template>
  </BasicTable>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable } from '/@/components/Table';
  import { useListPage } from '/@/hooks/system/useListPage';

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Platform', dataIndex: 'platform', key: 'platform' },
    { title: 'Version', dataIndex: 'version', key: 'version' },
    { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
    { title: 'Creator', dataIndex: 'creator', key: 'creator' },
    { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
    { title: 'Action', key: 'operation' },
  ];

  interface DataItem {
    key: number;
    name: string;
    platform: string;
    version: string;
    upgradeNum: number;
    creator: string;
    createdAt: string;
  }

  const data: DataItem[] = [];
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i,
      name: 'Screem',
      platform: 'iOS',
      version: '10.3.4.5654',
      upgradeNum: 500,
      creator: 'Jack',
      createdAt: '2014-12-24 23:12:00',
    });
  }

  const innerColumns = [
    { title: 'Date', dataIndex: 'date', key: 'date' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Status', dataIndex: 'state', key: 'state' },
    { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
    {
      title: 'Action',
      dataIndex: 'operation',
      key: 'operation',
    },
  ];

  interface innerDataItem {
    key: number;
    date: string;
    name: string;
    upgradeNum: string;
  }

  const innerData: innerDataItem[] = [];
  for (let i = 0; i < 3; ++i) {
    innerData.push({
      key: i,
      date: '2014-12-24 23:12:00',
      name: 'This is production name',
      upgradeNum: 'Upgraded: 56',
    });
  }

  export default defineComponent({
    components: { BasicTable },
    setup() {
      // 列表页面公共参数、方法
      const { tableContext } = useListPage({
        tableProps: {
          title: '内嵌表格',
          dataSource: data,
          columns: columns,
          showActionColumn: false,
          rowKey: 'key',
        },
      });

     //BasicTable绑定注册
      const [registerTable] = tableContext;
      return {
        data,
        columns,
        innerColumns,
        innerData,
        registerTable,
      };
    },
  });
</script>


```

复制

## 13\. Custom Columns

This example demonstrates: how to customize the content of the rendered columns and the display effect of the column content

Page Effects

Sample Code

![](https://lfs.k.topthink.com/lfs/e2e7acb1dbbd9cbf3a6668f3fcaf2177b4d64aaf34bd014bc24da5c506532638.dat)

[Click to view online demo](http://boot3.jeecg.com/login?redirect=/demo/document/index)

> Set the rendering effect of the column content through the slot bodyCell and field key  
> ![](https://lfs.k.topthink.com/lfs/aef34add20572d4a45cab771a919c4f8b8a4c71aff83796bc9f4cca4f71cdbbc.dat)

```
<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #id="{ record }"> ID: {{ record.id }} </template>
      <template #bodyCell="{ column, record }">
        <Avatar v-if="column.key === 'avatar'" :size="60" :src="record.avatar" />
        <Tag v-if="column.key === 'no'" color="green">
          {{ record.no }}
        </Tag>
      </template>
      <template #img="{ text }">
        <TableImg :size="60" :simpleShow="true" :imgList="text" />
      </template>
      <template #imgs="{ text }"> <TableImg :size="60" :imgList="text" /> </template>

      <template #category="{ record }">
        <Tag color="green">
          {{ record.no }}
        </Tag>
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, BasicColumn, TableImg } from '/@/components/Table';
  import { Tag, Avatar } from 'ant-design-vue';
  import { demoListApi } from '/@/api/demo/table';
  import { useListPage } from '/@/hooks/system/useListPage';
  const columns: BasicColumn[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      slots: { customRender: 'id' },
    },
    {
      title: '头像',
      dataIndex: 'avatar',
      width: 100,
    },
    {
      title: '分类',
      dataIndex: 'category',
      width: 80,
      align: 'center',
      defaultHidden: true,
      slots: { customRender: 'category' },
    },
    {
      title: '姓名',
      dataIndex: 'name',
      width: 120,
    },
    {
      title: '图片列表1',
      dataIndex: 'imgArr',
      helpMessage: ['这是简单模式的图片列表', '只会显示一张在表格中', '但点击可预览多张图片'],
      width: 140,
      slots: { customRender: 'img' },
    },
    {
      title: '照片列表2',
      dataIndex: 'imgs',
      width: 160,
      slots: { customRender: 'imgs' },
    },
    {
      title: '地址',
      dataIndex: 'address',
    },
    {
      title: '编号',
      dataIndex: 'no',
    },
    {
      title: '开始时间',
      dataIndex: 'beginTime',
    },
    {
      title: '结束时间',
      dataIndex: 'endTime',
    },
  ];
  export default defineComponent({
    components: { BasicTable, TableImg, Tag, Avatar },
    setup() {
      const { tableContext } = useListPage({
        tableProps: {
          title: '自定义列内容',
          titleHelpMessage: '表格中所有头像、图片均为mock生成，仅用于演示图片占位',
          api: demoListApi,
          columns: columns,
          bordered: true,
          showTableSetting: false,
          showActionColumn: false,
        },
      });
      //注册table数据
      const [registerTable] = tableContext;
      return {
        registerTable,
      };
    },
  });
</script>

```

复制

## 14\. Filter and sort

This example demonstrates: filter a column of data, use the column `filters` properties to specify the column that needs to be filtered, sort a column of data, and `sorter` activate the sort button by specifying the column function.

Page Effects

Sample Code

![](https://lfs.k.topthink.com/lfs/f48c67e7d139eb72a820d9c2877a1acb203569559a99505217354752e1205c03.dat)

[Click to view online demo](http://boot3.jeecg.com/login?redirect=/demo/document/index)

> Sorting Settings  
> ![](https://lfs.k.topthink.com/lfs/de623bed1b230f60d96e19076ca5150be24a169ae87de8c59ce5d4f83ab1ef2b.dat)  
> Filter settings  
> ![](https://lfs.k.topthink.com/lfs/aa4e991bcc23f4253c37defd02cf64805e7d84048b4aac54c34fc8cecff804f8.dat)

```
<template>
  <!--定义表格-->
  <BasicTable @register="registerTable">
    <!--操作栏-->
    <template #action="{ record }">
      <TableAction :actions="getTableAction(record)" />
    </template>
  </BasicTable>
</template>

<script lang="ts" name="basic-table-demo" setup>
  import { ActionItem, BasicColumn, BasicTable, TableAction } from '/@/components/Table';
  import { useListPage } from '/@/hooks/system/useListPage';
  import { defHttp } from '/@/utils/http/axios';
  //定义表格列
  const columns: BasicColumn[] = [
    {
      title: '姓名',
      dataIndex: 'name',
      width: 170,
      align: 'left',
      resizable: true,
      sorter: true,
    },
    {
      title: '关键词',
      dataIndex: 'keyWord',
      width: 130,
      resizable: true,
    },
    {
      title: '打卡时间',
      dataIndex: 'punchTime',
      width: 140,
      resizable: true,
    },
    {
      title: '工资',
      dataIndex: 'salaryMoney',
      width: 140,
      resizable: true,
      sorter: {
        multiple: 2,
      },
    },
    {
      title: '奖金',
      dataIndex: 'bonusMoney',
      width: 140,
      resizable: true,
    },
    {
      title: '性别',
      dataIndex: 'sex',
      sorter: {
        multiple: 3,
      },
      filters: [
          { text: '男', value: '1' },
          { text: '女', value: '2' },
      ],
      customRender: ({ record }) => {
        return record.sex ? (record.sex == '1' ? '男' : '女') : '';
      },
      width: 120,
      resizable: true,
    },
    {
      title: '生日',
      dataIndex: 'birthday',
      width: 120,
      resizable: true,
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      width: 120,
      resizable: true,
    },
  ];
  //ajax请求api接口
  const demoListApi = (params) => {
    return defHttp.get({ url: '/test/jeecgDemo/list', params });
  };
  // 列表页面公共参数、方法
  const { tableContext } = useListPage({
    designScope: 'basic-table-demo-filter',
    tableProps: {
      title: '用户列表',
      api: demoListApi,
      columns: columns,
      showActionColumn:false
    },
  });
  //注册table数据
  const [registerTable] = tableContext;
  /**
   * 操作栏
   */
  function getTableAction(record): ActionItem[] {
    return [
      {
        label: '编辑',
        onClick: handleEdit.bind(null, record),
      },
    ];
  }

  function handleEdit(record) {
    console.log(record);
  }
</script>
```

复制

## 15\. Selection and Operation

This example demonstrates: how to configure the selection column and the operation column. And operate the selected items through `selectedRows`or . Set single selection or multiple selection through configuration`selectedRowKeys` `rowSelection.type`

Page Effects

Sample Code

![](https://lfs.k.topthink.com/lfs/0907c1657395dda25976413530e178df4152388794516a0fed52394fe839be32.dat)

[Click to view online demo](http://boot3.jeecg.com/login?redirect=/demo/document/index)

> Set the operation mode of the selection column, single-select radio or multi-select checkbox  
> ![](https://lfs.k.topthink.com/lfs/da013e4ed0505cd7696fdd7be65dc73cfac00e923b6b4ebf633e71c780f614a3.dat)  
> Set the operation column, `TableAction`which is a built-in component. For specific usage, refer to the following `内置组件`content  
> ![](https://lfs.k.topthink.com/lfs/a28792c6a4647efbdec59d84c9ae2c2298c3cc5a23b0ecd1151de4a3bf174e1e.dat)

```
<template>
  <!--定义表格，绑定rowSelection选择行属性-->
  <BasicTable @register="registerTable" :rowSelection="rowSelection">
    <!--操作栏-->
    <template #action="{ record }">
      <TableAction :actions="getTableAction(record)" />
    </template>
  </BasicTable>
</template>

<script lang="ts" name="basic-table-demo" setup>
  import {  BasicColumn, BasicTable, TableAction } from '/@/components/Table';
  import { useListPage } from '/@/hooks/system/useListPage';
  //定义表格列
  const columns: BasicColumn[] = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      resizable: true,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  // 列表页面公共参数、方法
  const { tableContext } = useListPage({
    designScope: 'basic-table-demo',
    tableProps: {
      title: '可选择表格',
      dataSource: [
        {
          id: '1',
          name: '胡歌',
          age: 32,
          address: '朝阳区林萃路1号',
        },
        {
          id: '2',
          name: '刘诗诗',
          age: 32,
          address: '昌平区白沙路1号',
        },
      ],
      columns: columns,
      rowkey:"id",
    //定义rowSelection的类型，默认是checkbox多选，可以设置成radio单选
      rowSelection: { type: 'checkbox' },
    },
  });


/**BasicTable绑定注册 ，返回reload 刷新方法、rowSelection行选择属性、
selectedRows选中的行信息、selectedRowKeys 选中的行rowkey */
  const [registerTable, { reload }, { rowSelection, selectedRows, selectedRowKeys }] = tableContext;


 /**
   * 操作栏设置，可配置编辑、删除等各种操作方式，其他使用方式参考文档中的 `内置组件`内容
   */
  function getTableAction(record): ActionItem[] {
    return [
      {
        label: '编辑',
        onClick: handleEdit.bind(null, record),
      },
    ];
  }

  function handleEdit(record) {
    console.log(record);
    console.log(selectedRows.value);
    console.log(selectedRowKeys.value);
  }
</script>
```

复制

## 16\. Scalable Columns

This example demonstrates: Set the column to enable dragging with the resizable property, move the mouse to the dividing line behind the column and drag

Page Effects

Sample Code

![](https://lfs.k.topthink.com/lfs/31fe5f8f63f7b21c9fdcb25cea13d9b212850d7584d0a3d3c09f5039ef14930a.dat)

[Click to view online demo](http://boot3.jeecg.com/login?redirect=/demo/document/index)

> Setting column dragging  
> ![](https://lfs.k.topthink.com/lfs/220f0c357fc4921d835de2f689a1528a00067a8d2246c6f5333d08f5f3f06e81.dat)

```
<template>
  <!--定义表格-->
  <BasicTable @register="registerTable">
    <!--操作栏-->
    <template #action="{ record }">
      <TableAction :actions="getTableAction(record)" />
    </template>
  </BasicTable>
</template>

<script lang="ts" name="basic-table-demo" setup>
  import { ActionItem, BasicColumn, BasicTable, TableAction } from '/@/components/Table';
  import { useListPage } from '/@/hooks/system/useListPage';
  //定义表格列
  const columns: BasicColumn[] = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      resizable: true //配置列可伸缩
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',

    },
  ];
  // 列表页面公共参数、方法
  const { tableContext } = useListPage({
    designScope: 'basic-table-demo',
    tableProps: {
      title: '可伸缩列',
      dataSource: [
        {
          key: '1',
          name: '胡歌',
          age: 32,
          address: '朝阳区林萃路1号',
        },
        {
          key: '2',
          name: '刘诗诗',
          age: 32,
          address: '昌平区白沙路1号',
        },
      ],
      columns: columns,
      showActionColumn: false
    },
  });


  //BasicTable绑定注册
  const [registerTable] = tableContext;
  /**
   * 操作栏
   */
  function getTableAction(record): ActionItem[] {
    return [
      {
        label: '编辑',
        onClick: handleEdit.bind(null, record),
      },
    ];
  }

  function handleEdit(record) {
    console.log(record);
  }
</script>

```

复制

## 17\. Compact and Zebra Pattern Tables

This example demonstrates: By `size`setting the size of the table, `striped`you can set whether to display zebra patterns.

[Click to view online demo](http://boot3.jeecg.com/login?redirect=/demo/document/index)

Page Effects

Sample Code

![](https://lfs.k.topthink.com/lfs/cb3bdde40b373d9eb1d62a57896f67afa9e7d1c9615442ff298500094d39e6ab.dat)

> Table size  
> ![](https://lfs.k.topthink.com/lfs/20e89d79387d2a73b89014098d557403caac7b7b57c379e45d420b5ddf207215.dat)  
> Zebra print  
> ![](https://lfs.k.topthink.com/lfs/5a2038f944e7041cb401f99bc2be5bd5a6255805ce139f02aa9ab4d855be22b4.dat)

```
<template>
  <!--引用表格-->
  <BasicTable @register="registerTable">
    <!--操作栏-->
    <template #action="{ record }">
      <TableAction :actions="getTableAction(record)" />
    </template>
  </BasicTable>
</template>

<script lang="ts" name="basic-table-demo" setup>
  import { ActionItem, BasicColumn, BasicTable, TableAction } from '/@/components/Table';
  import { useListPage } from '/@/hooks/system/useListPage';
  //定义表格列
  const columns: BasicColumn[] = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      resizable: true
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',

    },
  ];
  // 列表页面公共参数、方法
  const { tableContext } = useListPage({
    designScope: 'basic-table-demo',
    tableProps: {
      title: '紧凑斑马纹表格',
      dataSource: [
        {
          key: '1',
          name: '胡歌',
          age: 32,
          address: '朝阳区林萃路1号',
        },
        {
          key: '2',
          name: '刘诗诗',
          age: 32,
          address: '昌平区白沙路1号',
        },
      ],
      columns: columns,
      size:'small',//紧凑型表格
      striped:true,//斑马纹设置
      showActionColumn: false
    },
  });
  //注册table数据
  const [registerTable] = tableContext;
  /**
   * 操作栏
   */
  function getTableAction(record): ActionItem[] {
    return [
      {
        label: '编辑',
        onClick: handleEdit.bind(null, record),
      },
    ];
  }

  function handleEdit(record) {
    console.log(record);
  }
</script>
```

复制

## 18\. Enable form search

This example demonstrates: how to configure a table form query, which can display a form search above the table. For specific form configuration, refer to [the Form form component](#!)

Page Effects

Sample Code

![](https://lfs.k.topthink.com/lfs/19423e9dcd12daefed8533ad5aad9267a0e68f49f7cf352946ba5cb955d2ac14.dat)

[Click to view online demo](http://boot3.jeecg.com/login?redirect=/demo/document/index)

> Configure form query formConfig  
> ![](https://lfs.k.topthink.com/lfs/ca1b9849265d474a5195b44e625fcc99717bc8a9594cad0af131f2c607f5fedc.dat)  
> ![](https://lfs.k.topthink.com/lfs/60bef8c22d9b3020d8221df98bdfc0a9dcc6eb5452f5226c2cf7b659ecc8c0da.dat)  
> Set the default value of the query condition  
> ![](https://lfs.k.topthink.com/lfs/48841632177d545890c4bd749b2d315251465f5322d955fc7dd7e3482be4e563.dat)  
> Set query conditions custom slot  
> ![](https://lfs.k.topthink.com/lfs/5f150211c812f15d1651f87733708b7c4dc6b49434cdb22b3a920a5c9460c352.dat)  
> The slots in the table query area must `form-`start with  
> ![](https://lfs.k.topthink.com/lfs/28eb222e8afb3bd82901c92f3cef3e3e5657a482211c69cf9c04284f35d324dc.dat)  
> Get the form data  
> ![](https://lfs.k.topthink.com/lfs/4a1c8e63fe4a68ca183c4743fba8607efbe047bc07df4c7edceb79a728ed4625.dat)

```
<template>
  <div class="p-4">
    <!--定义表格-->
    <BasicTable @register="registerTable">
      <!-- 搜索区域插槽自定义查询 -->
      <template #form-email="{ model, field }">
        <a-input placeholder="请输入邮箱" v-model:value="model[field]" addon-before="邮箱:" addon-after=".com"></a-input>
      </template>
      <!--操作栏-->
      <template #action="{ record }">
        <TableAction :actions="getTableAction(record)" />
      </template>
    </BasicTable>
  </div>
</template>

<script lang="ts" name="basic-table-demo" setup>
  import { ActionItem, BasicColumn, BasicTable, FormSchema, TableAction } from '/@/components/Table';
  import { useListPage } from '/@/hooks/system/useListPage';
  import { defHttp } from '/@/utils/http/axios';
  //定义表格列
  const columns: BasicColumn[] = [
    {
      title: '姓名',
      dataIndex: 'name',
      width: 170,
      align: 'left',
      resizable: true,
      sorter: {
        multiple: 1,
      },
    },
    {
      title: '关键词',
      dataIndex: 'keyWord',
      width: 130,
      resizable: true,
    },
    {
      title: '打卡时间',
      dataIndex: 'punchTime',
      width: 140,
      resizable: true,
    },
    {
      title: '工资',
      dataIndex: 'salaryMoney',
      width: 140,
      resizable: true,
      sorter: {
        multiple: 2,
      },
    },
    {
      title: '奖金',
      dataIndex: 'bonusMoney',
      width: 140,
      resizable: true,
    },
    {
      title: '性别',
      dataIndex: 'sex',
      sorter: {
        multiple: 3,
      },
      filters: [
        { text: '男', value: '1' },
        { text: '女', value: '2' },
      ],
      customRender: ({ record }) => {
        return record.sex ? (record.sex == '1' ? '男' : '女') : '';
      },
      width: 120,
      resizable: true,
    },
    {
      title: '生日',
      dataIndex: 'birthday',
      width: 120,
      resizable: true,
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      width: 120,
      resizable: true,
    },
  ];
  //表单搜索字段
  const searchFormSchema: FormSchema[] = [
    {
      label: '姓名', //显示label
      field: 'name', //查询字段
      component: 'JInput', //渲染的组件
      defaultValue: '苏榕润', //设置默认值
    },
    {
      label: '性别',
      field: 'sex',
      component: 'JDictSelectTag',
      componentProps: {
        //渲染的组件的props
        dictCode: 'sex',
        placeholder: '请选择性别',
      },
    },
    {
      label: '邮箱',
      field: 'email',
      component: 'JInput',
      slot: 'email',
    },
    {
      label: '生日',
      field: 'birthday',
      component: 'DatePicker',
    },
  ];
  //ajax请求api接口
  const demoListApi = (params) => {
    return defHttp.get({ url: '/test/jeecgDemo/list', params });
  };
  // 列表页面公共参数、方法
  const { tableContext } = useListPage({
    designScope: 'basic-table-demo-filter',
    tableProps: {
      title: '表单搜索',
      api: demoListApi,
      columns: columns,
      formConfig: {
        schemas: searchFormSchema,
      }
    },
  });
  //BasicTable绑定注册
  const [registerTable, { getForm }] = tableContext;
  /**
   * 操作栏
   */
  function getTableAction(record): ActionItem[] {
    return [
      {
        label: '编辑',
        onClick: handleEdit.bind(null, record),
      },
    ];
  }

  function handleEdit(record) {
    let { getFieldsValue } = getForm();
    console.log('查询form的数据', getFieldsValue());
    console.log(record);
  }
</script>
```

复制

## 19\. Permissions column

You can configure `auth`or `ifshow`control the visibility of columns

Page Effects

Sample Code

![](https://lfs.k.topthink.com/lfs/cd78f079e4df01fb9e68a7137180b5591d57054f5199f0d6c2b75fefbbb9dff2.dat)

[Click to view online demo](http://boot3.jeecg.com/login?redirect=/demo/document/index)

> Control the visibility of columns or operation buttons through auth or ifShow  
> ![](https://lfs.k.topthink.com/lfs/d4afd37e04f4cb94f12f805fa9f636b115093929f6a4f6a6b0476f7cbbc643ca.dat)

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
              auth: 'demo:field:show', // 根据权限控制是否显示: 无权限，不显示
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
                return true;
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
  import { useListPage } from '/@/hooks/system/useListPage';
  const columns: BasicColumn[] = [
    {
      title: '编号',
      dataIndex: 'no',
      width: 100,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      auth: 'demo:field:show', // 根据权限控制是否显示: 无权限，不显示
    },
    {
      title: '状态',
      dataIndex: 'status',
    },
    {
      title: '地址',
      dataIndex: 'address',
      auth: 'super', // 同时根据权限和业务控制是否显示
      ifShow: (_column) => {
        return true;
      },
    },
    {
      title: '开始时间',
      dataIndex: 'beginTime',
    },
    {
      title: '结束时间',
      dataIndex: 'endTime',
      width: 200,
    },
  ];
  export default defineComponent({
    components: { BasicTable, TableAction },
    setup() {
      const { tableContext } = useListPage({
        tableProps: {
          title: '权限列',
          api: demoListApi,
          columns: columns,
          bordered: true,
          actionColumn: {
            width: 250,
            title: 'Action',
            dataIndex: 'action',
            slots: { customRender: 'action' },
          },
        },
      });

      //BasicTable绑定注册
      const [registerTable] = tableContext;

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

复制

## 20\. Import and export

This example demonstrates: how to configure the import and export of table data, which needs to be implemented in conjunction with the backend interface.

Page Effects

Sample Code

![](https://lfs.k.topthink.com/lfs/7b0e557b12ccc75bad5cf86fb8a35ecab760d9ced300badc26f33264d223089b.dat)

[Click to view online demo](http://boot3.jeecg.com/login?redirect=/demo/document/index)

> 1\. Configure button display  
> ![](https://lfs.k.topthink.com/lfs/dac015a1ae76976d2d9a250c7a4b81ca1f568d61f548fdedeb858373f40916a4.dat)  
> 2\. Configure the interface address  
> ![](https://lfs.k.topthink.com/lfs/8d99c2e3d4df836580ef41d98fbf133fe31b14ef8c6c8b551d372f0454ceaa38.dat)

```
<template>
  <!--定义表格-->
  <BasicTable @register="registerTable" :rowSelection="rowSelection">
    <template #tableTitle>
      <a-button type="primary" preIcon="ant-design:export-outlined" @click="onExportXls"> 导出</a-button>
      <j-upload-button type="primary" preIcon="ant-design:import-outlined" @click="onImportXls">导入</j-upload-button>
    </template>
    <!--操作栏-->
    <template #action="{ record }">
      <TableAction :actions="getTableAction(record)" />
    </template>
  </BasicTable>
</template>

<script lang="ts" name="basic-table-demo" setup>
  import { ActionItem, BasicColumn, BasicTable, TableAction } from '/@/components/Table';
  import { useListPage } from '/@/hooks/system/useListPage';
  import { defHttp } from '/@/utils/http/axios';
  //定义表格列
  const columns: BasicColumn[] = [
    {
      title: '姓名',
      dataIndex: 'name',
      width: 170,
      align: 'left',
      resizable: true,
      sorter: {
        multiple: 1,
      },
    },
    {
      title: '关键词',
      dataIndex: 'keyWord',
      width: 130,
      resizable: true,
    },
    {
      title: '打卡时间',
      dataIndex: 'punchTime',
      width: 140,
      resizable: true,
    },
    {
      title: '工资',
      dataIndex: 'salaryMoney',
      width: 140,
      resizable: true,
      sorter: {
        multiple: 2,
      },
    },
    {
      title: '奖金',
      dataIndex: 'bonusMoney',
      width: 140,
      resizable: true,
    },
    {
      title: '性别',
      dataIndex: 'sex',
      sorter: {
        multiple: 3,
      },
      filters: [
        { text: '男', value: '1' },
        { text: '女', value: '2' },
      ],
      customRender: ({ record }) => {
        return record.sex ? (record.sex == '1' ? '男' : '女') : '';
      },
      width: 120,
      resizable: true,
    },
    {
      title: '生日',
      dataIndex: 'birthday',
      width: 120,
      resizable: true,
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      width: 120,
      resizable: true,
    },
  ];

  //ajax请求api接口
  const demoListApi = (params) => {
    return defHttp.get({ url: '/test/jeecgDemo/list', params });
  };
  // 列表页面公共参数、方法
  const { tableContext, onExportXls, onImportXls } = useListPage({
    designScope: 'basic-table-demo-filter',
    tableProps: {
      title: '表单搜索',
      api: demoListApi,
      columns: columns,
      showActionColumn: false,
    },
    exportConfig: {
      name: '示例列表',
      url: '/test/jeecgDemo/exportXls',
    },
    importConfig: {
      url: '/test/jeecgDemo/importExcel',
    },
  });

//BasicTable绑定注册
  const [registerTable, { reload }, { rowSelection, selectedRows, selectedRowKeys }] = tableContext;
  /**
   * 操作栏
   */
  function getTableAction(record): ActionItem[] {
    return [
      {
        label: '编辑',
        onClick: handleEdit.bind(null, record),
      },
    ];
  }

  function handleEdit(record) {
    console.log(record);
  }
</script>
```

复制

## 21\. Table Total

This example demonstrates how to configure the calculations that display total rows and total columns.

Page Effects

Sample Code

![](https://lfs.k.topthink.com/lfs/cf8662b0786ef957f9db45dac9c292172a13e49db0eb7229d02cccde1d589dbb.dat)

[Click to view online demo](http://boot3.jeecg.com/login?redirect=/demo/document/index)

> 1\. Whether to display the summary row showSummary  
> ![](https://lfs.k.topthink.com/lfs/bfa3bcd81865e8833d8a632c42da27b0489d82f755a08dbba8b3f93954819483.dat)  
> 2\. Calculate the total row summaryFunc  
> ![](https://lfs.k.topthink.com/lfs/4f3567fa4634da28ee09c6ef37c7f252ee8642108420eb032acb92705a2fcb22.dat)

```
<template>
  <!--定义表格-->
  <div class="p-4">
    <BasicTable @register="registerTable" />
  </div>
</template>

<script lang="ts" setup>
  import { BasicTable } from '/@/components/Table';
  import { mapTableTotalSummary } from '/@/utils/common/compUtils';
  import { useListPage } from '/@/hooks/system/useListPage';
  // 列表页面公共参数、方法
  const { tableContext } = useListPage({
    designScope: 'basic-table-demo',
    tableProps: {
      title: '合计表格',
      rowKey: 'id',
      bordered: true,
      canResize: false,
      useSearchForm: false,
      showActionColumn: false,
      showIndexColumn: true,
      columns: [
        { title: '姓名', dataIndex: 'name' },
        { title: '贡献点', dataIndex: 'point' },
        { title: '等级', dataIndex: 'level' },
        { title: '更新时间', dataIndex: 'updateTime' },
      ],
      dataSource: [
        { id: 0, name: '张三', point: 23, level: 3, updateTime: '2019-8-14' },
        { id: 1, name: '小鹿', point: 33, level: 9, updateTime: '2019-8-10' },
        { id: 2, name: '小王', point: 6, level: 1, updateTime: '2019-8-13' },
        { id: 3, name: '李四', point: 53, level: 8, updateTime: '2019-8-12' },
        { id: 4, name: '小红', point: 44, level: 5, updateTime: '2019-8-11' },
        { id: 5, name: '王五', point: 97, level: 10, updateTime: '2019-8-10' },
        { id: 6, name: '小明', point: 33, level: 2, updateTime: '2019-8-10' },
        { id: 7, name: '小张', point: 33, level: 4, updateTime: '2019-8-10' },
        { id: 8, name: '小六', point: 33, level: 2, updateTime: '2019-8-10' },
        { id: 9, name: '小五', point: 33, level: 7, updateTime: '2019-8-10' },
        { id: 10, name: '小赵', point: 33, level: 2, updateTime: '2019-8-10' },
        { id: 11, name: '李华', point: 33, level: 8, updateTime: '2019-8-10' },
        { id: 12, name: '小康', point: 33, level: 5, updateTime: '2019-8-10' },
      ],
      // 显示底部合计
      showSummary: true,
      // 底部合计计算方法
      summaryFunc: onSummary,
    },
  });


 // BasicTable绑定注册
  const [registerTable] = tableContext;
 /**
   * 计算合计
   * @param tableData
   */
  function onSummary(tableData: Recordable[]) {
    // 可用工具方法自动计算合计
    const totals = mapTableTotalSummary(tableData, ['point', 'level']);
    console.log('onSummary****totals>>>', totals);
    return [
      totals,
      {
        _row: '平均',
        _index: '平均',
        // 计算平均值
        point: (totals.point / tableData.length).toFixed(2),
        level: (totals.level / tableData.length).toFixed(0),
      },
    ];
  }
</script>

```

复制

## API

### TableProps

> Warm reminder:  
> In addition to the following configuration parameters, TableProps `Ant Design Vue`also supports table props in the official document. For details, please refer to [antv table](https://3x.antdv.com/components/table-cn#API)

| parameter               | type                                                                             | default value | illustrate                                                                                                                                                                    |
| ----------------------- | -------------------------------------------------------------------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| autoCreateKey           | `boolean`                                                                        | `true`        | Whether to automatically generate a key                                                                                                                                       |
| api                     | (...arg: any) => Promise                                                         | \-            | Request interface, you can directly pass the function in src/api, for specific usage and return data, refer to **2\. Remote data loading example**                            |
| afterFetch              | `(T)=>T`                                                                         | \-            | Process the return value after the request                                                                                                                                    |
| actionColumn            | `any`                                                                            | \-            | Configure BasicColumn in the operation column on the right side of the table                                                                                                  |
| bordered                | `boolean`                                                                        | `false`       | Whether to display the table border                                                                                                                                           |
| beforeFetch             | `(T)=>T`                                                                         | \-            | Process parameters before requesting                                                                                                                                          |
| beforeEditSubmit        | ({record: Recordable,index: number,key: string \| number,value: any}) => Promise | \-            | The cell editing state submission callback, returning false will prevent the cell from submitting data to the table. This callback is invalid in row editing mode.            |
| columns                 | `any`                                                                            | \-            | Table column information BasicColumn\[\]                                                                                                                                      |
| canResize               | `boolean`                                                                        | `true`        | Whether the height can be adaptive (if placed in a PageWrapper component, do not enable the fixedHeight property of PageWrapper, and the two cannot be used at the same time) |
| clearSelectOnPageChange | `boolean`                                                                        | false         | Toggle whether to reset the page number                                                                                                                                       |
| clickToRowSelect        | `boolean`                                                                        | `true`        | Click on the row to check whether the checkbox or radio is selected. Need to be turned on                                                                                     |
| dataSource              | `any[]`                                                                          | \-            | Table data, non-api loading status                                                                                                                                            |
| defSort                 | `Recordable`                                                                     | \-            | Default sort parameters                                                                                                                                                       |
| ellipsis                | `boolean`                                                                        | `true`        | Should text be displayed if it exceeds the width?                                                                                                                             |
| emptyDataIsShowTable    | `boolean`                                                                        | `true`        | When the search form is enabled, whether to display the table when there is no data in the table                                                                              |
| fetchSetting            | `FetchSetting`                                                                   | \-            | Interface request configuration, you can configure the request fields and response field names, see the global configuration instructions below                               |
| filterFn                | (sortInfo: Partial<Recordable<string\[\]>>) => any                               | \-            | Custom filtering method. See global configuration instructions below                                                                                                          |
| formConfig              | `any`                                                                            | \-            | For form configuration, [refer to Props of form component](https://help.jeecg.com/basicForm/useForm.html#useform-api%E5%B1%9E%E6%80%A7)                                       |
| handleSearchInfoFn      | `(T)=>T`                                                                         | \-            | After opening the form, process the search criteria parameters before the request                                                                                             |
| inset                   | `boolean`                                                                        | `false`       | Cancel the default padding of the table                                                                                                                                       |
| isTreeTable             | `boolean`                                                                        | `false`       | Is tree table                                                                                                                                                                 |
| immediate               | `boolean`                                                                        | `true`        | Whether to request the interface immediately after the component is loaded. If it is false, you need to use reload to load the table data.                                    |
| indexColumnProps        | `any`                                                                            | \-            | Sequence column configuration BasicColumn                                                                                                                                     |
| loading                 | `boolean`                                                                        | `false`       | Table loading status                                                                                                                                                          |
| minHeight               | `number`                                                                         | \-            | Minimum table height                                                                                                                                                          |
| maxHeight               | `number`                                                                         | \-            | The maximum height of the table. If it exceeds the maximum height, a scroll bar will be displayed.                                                                            |
| maxColumnWidth          | `number`                                                                         | \-            | Uniformly set the maximum width of the column                                                                                                                                 |
| pagination              | `any`                                                                            | \-            | Paging information configuration, to `false` not display paging                                                                                                               |
| rowKey                  | string \| ((record: Recordable) => string)                                       | \-            | The value of the table row key, which can be a string or a function                                                                                                           |
| resizeHeightOffset      | `number`                                                                         | 0             | The table's adaptive height calculation result will subtract this value                                                                                                       |
| rowSelection            | `any` -                                                                          |               | Select Column Configuration                                                                                                                                                   |
| sortFn                  | (sortInfo: SorterResult) => any                                                  | \-            | Custom sorting method. See global configuration instructions below                                                                                                            |
| showTableSetting        | `boolean`                                                                        | `false`       | Display table settings tool                                                                                                                                                   |
| striped                 | `boolean`                                                                        | `true`        | Zebra print                                                                                                                                                                   |
| showSummary             | `boolean`                                                                        | `false`       | Whether to display the total row                                                                                                                                              |
| summaryData             | `any[]`                                                                          | \-            | Custom total data. If available, display the data                                                                                                                             |
| summaryFunc             | `(...arg) => any[]`                                                              | \-            | How to calculate total rows                                                                                                                                                   |
| searchInfo              | `any`                                                                            | \-            | Additional request parameters                                                                                                                                                 |
| showIndexColumn         | `boolean`                                                                        | true          | Whether to display the serial number column                                                                                                                                   |
| showActionColumn        | `boolean`                                                                        | \-            | Whether to display the action bar                                                                                                                                             |
| scroll                  | `any`                                                                            | \-            | 参考官方文档 scroll                                                                                                                                                           |
| tableSetting            | `TableSetting`                                                                   | \-            | 表格设置工具配置，见下方 TableSetting                                                                                                                                         |
| title                   | `string` -                                                                       |               | 表格标题                                                                                                                                                                      |
| titleHelpMessage        | `string ｜ string[]`                                                             | \-            | 表格标题右侧温馨提醒                                                                                                                                                          |
| useSearchForm           | `boolean`                                                                        | false         | 使用搜索表单                                                                                                                                                                  |

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

复制

### 事件

> 温馨提醒  
> 除以下事件外，`Ant Design Vue` 官方文档内的 event 也都支持，具体可以参考 [antv table](https://3x.antdv.com/components/table-cn/#API)，事件的绑定和使用请参考 **示例6.可编辑单元格**

| 事件             | 回调参数                              | 说明                                  |
| ---------------- | ------------------------------------- | ------------------------------------- |
| edit-end         | Function({record, index, key, value}) | 单元格编辑完成触发                    |
| edit-cancel      | Function({record, index, key, value}) | 单元格取消编辑触发                    |
| edit-row-end     | Function()                            | 行编辑结束触发                        |
| edit-change      | Function({column,value,record})       | 单元格编辑组件的 value 发生变化时触发 |
| fetch-success    | Function({items,total})               | 接口请求成功后触发                    |
| fetch-error      | Function(error)                       | 错误信息                              |
| row-click        | Function(record, index, event)        | 行点击触发                            |
| row-dbClick      | Function(record, index, event)        | 行双击触发                            |
| row-contextmenu  | Function(record, index, event)        | 行右键触发                            |
| row-mouseenter   | Function(record, index, event)        | 行移入触发                            |
| row-mouseleave   | Function(record, index, event)        | 行移出触发                            |
| selection-change | Function({keys，rows})                | 勾选事件触发                          |

## BasicColumn

> 除 参考官方 [Column 配置](https://3x.antdv.com/components/table-cn/#Column)外，扩展以下参数

| 属性               | 类型                                             | 默认值  | 可选值 | 说明                             |
| ------------------ | ------------------------------------------------ | ------- | ------ | -------------------------------- |
| auth               | `RoleEnum`｜`RoleEnum[]`｜`string`｜`string[]`   | \-      | \-     | 根据权限编码来控制当前列是否显示 |
| defaultHidden      | `boolean`                                        | false   | \-     | 默认隐藏，可在列配置显示         |
| edit               | `boolean`                                        | \-      | \-     | 是否开启单元格编辑               |
| editRow            | `boolean`                                        | \-      | \-     | 是否开启行编辑                   |
| editable           | `boolean`                                        | false   | \-     | 是否处于编辑状态                 |
| editComponent      | `ComponentType`                                  | `Input` | \-     | 编辑组件                         |
| editComponentProps | `any`                                            | \-      | \-     | 对应编辑组件的 props             |
| editRule           | ((text: string, record: Recordable) => Promise)  | \-      | \-     | 对应编辑组件的表单校验           |
| editValueMap       | (value: any) => string                           | \-      | \-     | 对应单元格值枚举                 |
| format             | `CellFormat`                                     | \-      | \-     | 单元格格式化                     |
| helpMessage        | `string｜string[]`                               | \-      | \-     | 列头右侧帮助文本                 |
| ifShow             | `boolean` ｜ ((action: ActionItem) => boolean)\` | \-      | \-     | 根据业务状态来控制当前列是否显示 |
| onEditRow          | `（）=>void`                                     | \-      | \-     | 触发行编辑                       |

参数 editComponent 的typescript类型是 **EditComponentType**

```
export type ComponentType =
  | 'ApiSelect'
  | 'Checkbox'
  | 'DatePicker'
  | 'Input'
  | 'InputNumber'
  | 'Select'
  | 'Switch'
  | 'TimePicker';

```

复制

参数format 的typescript类型是 **CellFormat**

```
export type CellFormat =
  | string
  | ((text: string, record: Recordable, index: number) => string | number)
  | Map<string | number, any>;

```

复制

### Slots

> 温馨提醒  
> 除以下参数外，官方文档内的 slot 也都支持，具体可以参考 [antv table](https://www.antdv.com/components/table-cn#API)

| 名称              | 说明                     | 版本  |
| ----------------- | ------------------------ | ----- |
| expandedRowRender | 展开行区域               |       |
| headerTop         | 表格顶部区域（标题上方） | 2.6.1 |
| tableTitle        | 表格顶部左侧区域         |       |
| toolbar           | 表格顶部右侧区域         |       |

**Form-Slots**

当开启 form 表单后。以`form-xxxx`为前缀的 slot 会被视为 form 的 slot

xxxx 为 form 组件的 slot。具体参考 [form 组件文档](#!)

e.g

```
form-submitBefore
```

复制

## 内置组件（只能用于表格内部）

### TableAction

> 用于表格右侧操作列渲染

**Props**

| 属性                  | 类型           | 默认值  | 说明                            | 版本  |
| --------------------- | -------------- | ------- | ------------------------------- | ----- |
| actions               | `ActionItem[]` | \-      | 右侧操作列按钮列表              |       |
| dropDownActions       | `ActionItem[]` | \-      | 右侧操作列更多下拉按钮列表      |       |
| stopButtonPropagation | `boolean`      | `false` | 是否阻止操作按钮的click事件冒泡 | 2.5.0 |

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

复制

有关TooltipProps的说明，请参考[tooltip](https://3x.antdv.com/components/tooltip-cn#API)

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

复制

### TableImg

> 用于渲染单元格图片,支持图片预览

**Props**

| 属性       | 类型       | 默认值  | 可选值       | 说明                             | 版本  |
| ---------- | ---------- | ------- | ------------ | -------------------------------- | ----- |
| imgList    | `string[]` | \-      | \-           | 图片地址列表                     |       |
| margin     | `number`   | 4       | \-           | 常规模式下的图片间距             | 2.5.0 |
| size       | `number`   | \-      | \-           | 图片大小                         |       |
| simpleShow | `boolean`  | `false` | `true/false` | 简单显示模式（只显示第一张图片） | 2.5.0 |
| showBadge  | `boolean`  | `true`  | `true/false` | 简单模式下是否显示计数Badge      | 2.5.0 |
| srcPrefix  | `string`   | \-      | \-           | 在每一个图片src前插入的内容      | 2.5.0 |

## Usage

用于调用 Table 内部方法及 table 参数配置

```
// 表格的props也可以直接注册到useTable内部
const [register, methods] = useTable(props);

或者

const { tableContext } = useListPage({
    tableProps: props
  });
//注册table数据
const [register,methods] = tableContext;
```

复制

### register

register 用于注册 useTable，如果需要使用`useTable`提供的 api，必须将 register 传入组件的 onRegister

```
<template>
  <BasicTable @register="register" />
</template>
<script>
  export default defineComponent({
    components: { BasicForm },
    setup() {
       const { tableContext } = useListPage({
        tableProps: {
          title: '普通表格',
          api: api ,//请求接口
          columns: columns,//表格列
          showActionColumn: false，//隐藏操作列
         ...其他tableProps配置
        },
      });

      //BasicTable绑定注册，methods包含的方法参考下方Methods的api
      const [register,methods] = tableContext;
      return { register };
    },
  });
</script>
```

复制

### Methods

```
| Method name                | Type                                                        | description                                                                                                                                                                                                                                             |
| --------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| setProps              | (props: Partial<BasicTableProps>) => void                   | Used to set table parameters                                                                                                                                                                                                                                 |
| reload                | (opt?: FetchParams) => Promise<void>                        | 刷新表格                                                                                                                                                                                                                                         |
| redoHeight            | () => void                                                  | 重新计算表格高度                                                                                                                                                                                                                                 |
| setLoading            | (loading: boolean) => void                                  | 设置表格 loading 状态                                                                                                                                                                                                                            |
| getDataSource         | <T = Recordable>() => T\[\]                                 | 获取表格数据                                                                                                                                                                                                                                     |
| getRawDataSource      | <T = Recordable>() => T\[\]                                 | 获取后端接口原始数据                                                                                                                                                                                                                             |
| getColumns            | (opt?: GetColumnsParams) => BasicColumn\[\]                 | 获取表头数据                                                                                                                                                                                                                                     |
| setColumns            | (columns: BasicColumn\[\]\|string\[\]) => void              | 设置表头数据                                                                                                                                                                                                                                     |
| setTableData          | <T = Recordable>(values: T\[\]) => void                     | 设置表格数据                                                                                                                                                                                                                                     |
| setPagination         | (info: Partial<PaginationProps>) => void                    | 设置分页信息                                                                                                                                                                                                                                     |
| deleteSelectRowByKey  | (key: string) => void                                       | 根据 key 删除取消选中行                                                                                                                                                                                                                          |
| getSelectRowKeys      | () => string\[\]                                            | 获取选中的keys                                                                                                                                                                                                                                   |
| getSelectRows         | <T = Recordable>() => T\[\]                                 | 获取选中的rows                                                                                                                                                                                                                                   |
| setSelectedRowKeys    | (rowKeys: string\[\]\|number\[\]) => void                   | 设置选中行                                                                                                                                                                                                                                       |
| getPaginationRef      | () =>PaginationProps\|boolean                               | 获取当前分页信息                                                                                                                                                                                                                                 |
| getShowPagination     | () => boolean                                               | 获取当前是否显示分页                                                                                                                                                                                                                             |
| setShowPagination     | (show: boolean) => Promise<void>                            | 设置当前是否显示分页                                                                                                                                                                                                                             |
| getRowSelection       | () => TableRowSelection                                     | Get check box information                                                                                                                                                                                                                        |
| updateTableData       | (index: number, key: string, value: any)=>void              | Update table data                                                                                                                                                                                                                                |
| updateTableDataRecord | (rowKey: string\| number, record: Recordable) => Recordable | void                                                                                                                                                                                                                                             |
| deleteTableDataRecord | (rowKey: string\| number\| string\[\]\| number\[\]) => void | Dynamically delete the data of the specified row based on the unique rowKey. It can be used to update data locally without refreshing the entire table.                                                                                          |
| insertTableDataRecord | (record: Recordable, index?: number) => Recordable\| void   | The position of the inserted data row can be determined according to the passed index value. If no index value is passed, the data row will be inserted sequentially. It can be used to update data locally without refreshing the entire table. |
| **getForm**           | () => FormActionType                                        | If the search area is enabled, you can use this function to get the form object function to operate                                                                                                                                              |
| expandAll             | () => void                                                  | Expand the tree table                                                                                                                                                                                                                            |
| collapseAll           | () => void                                                  | Collapse Tree Table                                                                                                                                                                                                                              |
```

## Global Configuration

In [componentsSettings,](https://github.com/jeecgboot/jeecgboot-vue3/blob/master/src/settings/componentSetting.ts) you can configure global parameters. Used to unify the style of the entire project. You can pass values ​​through props to override
