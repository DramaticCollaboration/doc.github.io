---
order: 2
---

# Component Configuration Document

```
import { JVxeTypes } from '/@/components/jeecg/JVxeTable/types'
```

copy

> All component parameter configurations are inherited `columns 参数配置`, and components with specially marked parameters are properties exclusive to that component.

## Normal text

Do not display any components, just normal text

- `类型`：`JVxeTypes.normal`

## Single line text

- `类型`：`JVxeTypes.input`

## Multi-line text

- `类型`：`JVxeTypes.textarea`
- `参数`：
  - `defaultOpen`: boolean, whether to pop up the side input box by default, the default is false

![](https://lfs.k.topthink.com/lfs/e3473513a290d016bb27c75ec69edd712254ee5104000f48396491d4724cb67a.dat)

## Number input box

- `类型`：`JVxeTypes.inputNumber`
- `参数`：
  - `statistics`: array, statistical column configuration, after setting, all data in the current column will be automatically counted and displayed at the bottom
    - sum
    - average

### Statistics column configuration example

![](https://lfs.k.topthink.com/lfs/50f5b25a7beaabdc38b90f355ad47a6d174e7641d6a6ee319d5e595b8155e908.dat)

## Checkbox (switch)

- `类型`：`JVxeTypes.checkbox`
- `参数`：
  - `defaultChecked`: boolean, whether the default value is selected
  - `customValue`: array, custom value, checkbox requires a boolean value.  
    If the data is other values ​​(for example `'Y' or 'N'`), it will cause an error, so this property is provided for conversion.  
    Example: `customValue: ['Y','N']`, will be `true`converted to `'Y'`, `false`converted to`'N'`

## Single box

- `类型`：`JVxeTypes.radio`
- `参数`：
  - `options`:array, options  
    Note: If there are too many options and they exceed the width of the column, they may be truncated,  
    so it is recommended not to use too many options, or to use a drop-down box component instead.
  - `allowClear`boolean, default false, whether the selection can be cleared.  
    If set to true, clicking on a selected option will deselect it.

## Drop-down box

- `类型`：`JVxeTypes.select`
- `参数`：
  - `options`：**\[Required\]** array, drop-down list of options, see the table below for details
  - `allowInput`: Whether to allow users to enter content and create new content
  - `allowSearch`: Whether to allow users to search for content (only search, not create)
  - `dictCode`: Data dictionary Code. If options also have values, they are concatenated after options.

> Precautions
>
> 1.  `allowInput`and `allowSearch`cannot be used at the same time. If used at the same time, `allowSearch`the priority of
> 2.  `options`If an item is set `disabled:true`, it cannot be searched.

### options Required parameters

| parameter | type    | Required | illustrate                            |
| --------- | ------- | -------- | ------------------------------------- |
| text      | string  | ✔️       | Show Title                            |
| value     | string  | ✔️       | actual value                          |
| disabled  | boolean |          | Whether to disable the current option |

## Drop-down checkbox

- `类型`：`JVxeTypes.selectMultiple`
- `参数`: `下拉框`All parameters inherited

## Drop-down search box

- `类型`：`JVxeTypes.selectSearch`
- `参数`: `下拉框`All inherited parameters  
  are just automatically `allowSearch`set to true, which is equivalent to a syntactic sugar

## Drop-down dictionary search box

- `类型`：`JVxeTypes.selectDictSearch`
- `参数`：
  - `async`: Whether to search asynchronously
  - `dict`: Only valid when async=true, dictionary code (database table name, display field name, storage field name)  
    example:`"sys_user,realname,username"`
  - `options`: Only valid when async=false, search options
  - `tipsContent`: Prompt content, default: Please enter the search content

## Date Picker

- `类型`：`JVxeTypes.date`
- `参数`：
  - `format`: Format display, default value:`YYYY-MM-DD`
  - `picker`: Set the selector type, default value: -. Optional: week, month, quarter, year

## Time Picker

- `类型`：`JVxeTypes.time`
- `参数`：
  - `format`: Format display, default value:`HH:mm:ss`

## Date time picker

- `类型`：`JVxeTypes.datetime`
- `参数`：
  - `format`: Format display, default value:`YYYY-MM-DD HH:mm:ss`

## progress bar

The progress will be displayed according to the given value, the minimum value is 0 and the maximum value is 100

- `类型`：`JVxeTypes.progress`  
  ![](https://img.kancloud.cn/6d/7e/6d7ecf11f8e925f1d822893587306e15_314x88.png)

## File upload (single)

- `类型`：`JVxeTypes.upload`
- `参数`：
  - `action`：\*\*【Required】\*\*Upload file path
  - `token`: boolean, default false, whether to pass token when uploading
  - `responseName`：\*【Required】\*\* If you want to retrieve the returned file name from the response after a successful upload, then fill in the field name containing the file name returned by the backend
  - `btnText`: string, default "Click to upload", the display text of the button
  - `allowDownload`: boolean, default true, whether to allow downloading
  - `allowRemove`: boolean, default true, whether to allow deletion

## File upload (batch)

- `类型`：`JVxeTypes.file`
- `参数`: `文件上传（单个）`All parameters inherited
  - `action`: Not required, default`"/sys/common/upload"`
  - `responseName`: Not required, default`"message"`
  - `btnText`: Default "Upload file"

## Image upload (batch)

- `类型`：`JVxeTypes.image`
- `参数`: `文件上传（批量）`All parameters inherited
  - `btnText`: Default "Upload picture"

## Popup

- `类型`：`JVxeTypes.popup`
- `参数`：
  - `popupCode`：\*\*【Required】\*\*Online report code
  - `orgFields`：\*\*【Required】\*\*Column names from online report query, multiple columns separated by commas
  - `destFields`：\*\*【Required】\*\* The column names to be filled in the form. Multiple columns are separated by commas. If there are multiple columns, the order must correspond to orgFields one by one, and the number must be consistent.
  - `field`：\*\*【Required】\*\*Select a property value from destFields and return it to the current component
  - `param`：**Object type** dynamic parameter object, manually add a record in the online report parameters, and then pass the parameter with the same name in your own page as a data query condition. If it is a string type, it needs to be set to the format of double quotes enclosed in single quotes, such as {name: "'admin'"}
  - `sorter`: Default sort column, usage: column name = desc | asc. Example:`age=asc`
    - `v_3.4.5`Start supporting

## Department selection box

- `类型`：`JVxeTypes.departSelect`

## User selection box

- `类型`：`JVxeTypes.userSelect`

## slot

- `类型`：`JVxeTypes.slot`
- `参数`：
  - `slotName`：\*\*【Required】\*\*For details on how to use the slot name,  
    see:【Usage Example 4】

## Hide Column

After setting, the column will not be displayed, but values ​​can be assigned and retrieved normally.

- `类型`：`JVxeTypes.hidden`
