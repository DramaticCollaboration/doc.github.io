---
order: 5
---

# Usage Examples

## Example 1

> This example demonstrates `JVxeTable`the basic usage of

```
<JVxeTable
  ref="tableRef"
  stripe
  toolbar
  rowNumber
  rowSelection
  rowExpand
  resizable
  :maxHeight="480"
  :loading="loading"
  :columns="columns"
  :dataSource="dataSource"
/>
```

copy

## Example 2

> This example demonstrates `columns`the basic usage of

```
import { JVxeTypes, JVxeColumn} from '/@/components/jeecg/JVxeTable/types'

const columns = ref<JVxeColumn[]>([
    {
        title: '单行文本',
        key: 'input',
        type: JVxeTypes.input,
        width: 180,
        defaultValue: '',
        placeholder: '请输入${title}',
        validateRules: [
          {
            required: true, // 必填
            message: '请输入${title}', // 显示的文本
          },
          {
            pattern: /^[a-z|A-Z][a-z|A-Z\d_-]*$/, // 正则
            message: '必须以字母开头，可包含数字、下划线、横杠',
          },
          {
            unique: true,
            message: '${title}不能重复',
          },
          {
            handler({ cellValue, row, column }, callback, target) {
              // cellValue 当前校验的值
              // callback(flag, message) 方法必须执行且只能执行一次
              //          flag = 是否通过了校验，不填写或者填写 null 代表不进行任何操作
              //          message = 提示的类型，默认使用配置的 message
              // target 行编辑的实例对象
              if (cellValue === 'abc') {
                callback(false, '${title}不能是abc')  // false = 未通过校验
              } else {
                callback(true) // true = 通过验证
              }
            },
            message: '${title}默认提示',
          },
        ],
      },
]
```

copy

## Example 3

> This example demonstrates how to `表单验证`and`获取数据`

```
/** 表单验证 */
function handleTableCheck() {
  tableRef.value!.validateTable().then(errMap => {
    if (errMap) {
      console.log('表单验证未通过：', { errMap })
      createMessage.error('验证未通过，请在控制台查看详细')
    } else {
      createMessage.success('验证通过')
    }
  })
}

/** 获取值，忽略表单验证 */
function onGetData() {
  const values = tableRef.value!.getTableData()
  console.log('获取值:', { values })
  createMessage.success('获取值成功，请看控制台输出')
}
```

copy

## Example 4

> This example demonstrates how to use `插槽(slot)`and slot parameter introduction

```
<template>
  <JVxeTable ref="tableRef" toolbar :columns="columns" :dataSource="dataSource">
    <!-- 定义插槽 -->
    <template #action="props">
      <a @click="handleView(props)">查看</a>
      <a-divider type="vertical"/>
      <a-popconfirm title="确定删除吗？" @confirm="handleDelete(props)">
        <a>删除</a>
      </a-popconfirm>
    </template>
  </JVxeTable>
</template>
<script lang="ts">
import {ref, defineComponent} from 'vue'
import {JVxeTypes, JVxeColumn, JVxeTableInstance} from '/@/components/jeecg/JVxeTable/types'

export default defineComponent({
  setup() {
    const tableRef = ref<JVxeTableInstance>()
    const columns = ref<JVxeColumn[]>([
      // ...
      {
        title: '操作',
        key: 'action',
        width: '100px',
        // 固定在右侧
        fixed: 'right',
        // 对齐方式为居中
        align: 'center',
        // 组件类型定义为【插槽】
        type: JVxeTypes.slot,
        // slot 的名称，对应 v-slot 冒号后面和等号前面的内容
        slotName: 'action',
      },
    ])
    const dataSource = ref([])

    function handleView(props) {
      // 参数介绍：
      // props.value          当前单元格的值
      // props.row            当前行的数据
      // props.rowId          当前行ID
      // props.rowIndex       当前行下标
      // props.column         当前列的配置
      // props.columnIndex    当前列下标
      // props.$table         vxe-table实例，可以调用vxe-table内置方法
      // props.scrolling      是否正在滚动
      // props.reloadEffect   是否开启了数据刷新特效
      // props.triggerChange  触发change事件，用于更改slot的值
      console.log('props: ', props)
    }

    function handleDelete({row}) {
      // 使用实例：删除当前操作的行
      tableRef.value?.removeRows(row)
    }

    return {tableRef, columns, dataSource, handleView, handleDelete}
  },
})
</script>
```

copy

## Example 5

> This example demonstrates how to`自定义函数校验`

```
columns: [
  {
    title: '单行文本',
    key: 'input',
    type: JVxeTypes.input,
    width: 180,
    defaultValue: '',
    placeholder: '请输入${title}',
    validateRules: [
    {
        handler({ cellValue, row, column }, callback, target) {
          // cellValue 当前校验的值
          // callback(flag, message) 方法必须执行且只能执行一次
          //          flag = 是否通过了校验，不填写或者填写 null 代表不进行任何操作
          //          message = 提示的类型，默认使用配置的 message
          // target 行编辑的实例对象
          if (cellValue === 'abc') {
            callback(false, '${title}不能是abc')  // false = 未通过校验
          } else {
            callback(true) // true = 通过验证
          }
        },
        message: '${title}默认提示',
      },
    ],
  },
]
```

copy
