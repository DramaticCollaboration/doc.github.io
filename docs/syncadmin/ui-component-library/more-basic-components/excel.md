---
order: 18
---

# Excel

Excel import and export operations

XLSX is used in the project. For specific documents, please refer to [the XLSX document](https://sheetjs.com/)

## Import

### Usage

```
<template>
  <ImpExcel @success="loadDataSuccess">
    <a-button class="m-3">导入Excel</a-button>
  </ImpExcel>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { ImpExcel, ExcelData } from '/@/components/Excel';
  export default defineComponent({
    components: { ImpExcel },
    setup() {
      function loadDataSuccess(excelDataList: ExcelData[]) {
        tableListRef.value = [];
        console.log(excelDataList);
        for (const excelData of excelDataList) {
          const {
            header,
            results,
            meta: { sheetName },
          } = excelData;
          const columns: BasicColumn[] = [];
          for (const title of header) {
            columns.push({ title, dataIndex: title });
          }
          tableListRef.value.push({ title: sheetName, dataSource: results, columns });
        }
      }
      return {
        loadDataSuccess,
      };
    },
  });
</script>
```

copy

### Events

| event   | Callback parameters     | illustrate              |
| ------- | ----------------------- | ----------------------- |
| success | `(res:ExcelData)=>void` | Import success callback |
| error   | `()=>void`              | Export Error            |

### ExcelData

| Attributes | type                   | default value | illustrate   |
| ---------- | ---------------------- | ------------- | ------------ |
| header:    | string\[\];            |               | table header |
| results:   | T\[\];                 |               | Table data   |
| meta:      | { sheetName: string }; |               | table title  |

## Export

For details, please refer to the complete example

```
import { jsonToSheetXlsx, aoaToSheetXlsx } from '/@/components/Excel';
```

copy

### Array format data export

```
import { aoaToSheetXlsx } from '/@/components/Excel';
// 保证data顺序与header一致
aoaToSheetXlsx({
  data: [],
  header: [],
  filename: '二维数组方式导出excel.xlsx',
});
```

copy

### Custom export formats

```
import { jsonToSheetXlsx } from '/@/components/Excel';

jsonToSheetXlsx({
  data,
  filename,
  write2excelOpts: {
    // 可以是 xlsx/html/csv/txt
    bookType,
  },
});
```

copy

### Export in json format

```
import { jsonToSheetXlsx } from '/@/components/Excel';

jsonToSheetXlsx({
  data,
  filename: '使用key作为默认头部.xlsx',
});

jsonToSheetXlsx({
  data,
  header: {
    id: 'ID',
    name: '姓名',
    age: '年龄',
    no: '编号',
    address: '地址',
    beginTime: '开始时间',
    endTime: '结束时间',
  },
  filename: '自定义头部.xlsx',
  json2sheetOpts: {
    // 指定顺序
    header: ['name', 'id'],
  },
});
```

copy

## Function

| method          | Callback parameters     | return value | illustrate                        |
| --------------- | ----------------------- | ------------ | --------------------------------- |
| jsonToSheetXlsx | `Function(JsonToSheet)` |              | json format data, export to excel |
| aoaToSheetXlsx  | `Function(AoAToSheet)`  |              | Array format, export to excel     |

### JsonToSheet Type

| Attributes        | type             | default value          | illustrate                                                                               |
| ----------------- | ---------------- | ---------------------- | ---------------------------------------------------------------------------------------- |
| data              | `T[]`            |                        | Array of JSON objects                                                                    |
| header?:          | `T`;             |                        | If the header is not set, the JSON object is used `key`as`header`                        |
| filename?:        | `string`         | `excel-list.xlsx`      | Exported file name                                                                       |
| json2sheetOpts?:  | `JSON2SheetOpts` |                        | `XLSX.utils.json_to_sheet`Optional parameters for calling                                |
| write2excelOpts?: | `WritingOptions` | `{ bookType: 'xlsx' }` | Optional parameters for calling `XLSX.writeFile`, see the XLSX documentation for details |

### AoAToSheet Type

| Attributes        | type            | default value          | illustrate                                      |
| ----------------- | --------------- | ---------------------- | ----------------------------------------------- |
| data              | T\[\]\[\];      |                        | Two-dimensional array                           |
| header?:          | T;              |                        | Header; no header if not set                    |
| filename?:        | string;         | `excel-list.xlsx`      | Exported file name                              |
| write2excelOpts?: | WritingOptions; | `{ bookType: 'xlsx' }` | `XLSX.writeFile`Optional parameters for calling |
