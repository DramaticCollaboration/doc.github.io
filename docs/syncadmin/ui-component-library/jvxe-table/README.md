---
order: 1
dir:
  order: 5
---

# JVxeTable

> `JVXETable`High-performance tables developed based on `vxe-table`components, supporting big data and various ERP-style complex operations. For examples, see: [JVxeTable Demo](http://boot3.jeecg.com/jeecg/j-vxe-table-demo/normal)

## Screenshot effect

![](https://lfs.k.topthink.com/lfs/808034c9748e6e177c9a5e77774148a2717fda11000c886e86d298b9793894bc.dat)

## Parameter configuration

### Basic parameter configuration

| parameter            | type           | default value                                                              | illustrate                                                                                                                                                                                                                                                                                                                                                                          |
| -------------------- | -------------- | -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| columns              | array          | \[\]                                                                       | **\[Required\]** Configuration description of table columns, see \[columns parameter configuration\] for details                                                                                                                                                                                                                                                                    |
| dataSource           | array          | \[\]                                                                       | **【Required】** Form data                                                                                                                                                                                                                                                                                                                                                          |
| size                 | string         | 'medium'                                                                   | Table size, optional values ​​are: 'medium', 'small', 'mini'                                                                                                                                                                                                                                                                                                                        |
| loading              | boolean        | false                                                                      | Is loading?                                                                                                                                                                                                                                                                                                                                                                         |
| height               | number, string | 'auto'                                                                     | The fixed height of the table. If it is a string, you can only fill in 'auto', which means adaptive height                                                                                                                                                                                                                                                                          |
| maxHeight            | number         | null                                                                       | Set the maximum height (px), the default is null and does not limit the maximum height                                                                                                                                                                                                                                                                                              |
| disabled             | boolean        | false                                                                      | Whether to disable all components                                                                                                                                                                                                                                                                                                                                                   |
| bordered             | boolean        | false                                                                      | Whether to display the vertical border line of the cell                                                                                                                                                                                                                                                                                                                             |
| toolbar              | boolean        | false                                                                      | Whether to display the toolbar                                                                                                                                                                                                                                                                                                                                                      |
| toolbarConfig        | object         | {slot: \['prefix', 'suffix'\], btn: \['add', 'remove', 'clearSelection'\]} | Toolbar Configuration                                                                                                                                                                                                                                                                                                                                                               |
| rowNumber            | boolean        | false                                                                      | Whether to display line numbers                                                                                                                                                                                                                                                                                                                                                     |
| rowSelection         | boolean        | false                                                                      | Is the row selectable?                                                                                                                                                                                                                                                                                                                                                              |
| rowSelectionType     | string         | 'checkbox'                                                                 | Select the row type, optional values: 'checkbox', 'radio'                                                                                                                                                                                                                                                                                                                           |
| rowExpand            | boolean        | false                                                                      | Is the row expandable?                                                                                                                                                                                                                                                                                                                                                              |
| expandConfig         | object         | {}                                                                         | Expand Row Configuration                                                                                                                                                                                                                                                                                                                                                            |
| disabledRows         | object         | {}                                                                         | Disable row configuration                                                                                                                                                                                                                                                                                                                                                           |
| dragBlack            | boolean        | false                                                                      | Whether drag-and-drop sorting is possible (if there are fixed columns, drag-and-drop sorting is not possible, only up-down sorting is possible)                                                                                                                                                                                                                                     |
| sortKey              | string         | 'orderNum'                                                                 | Key stored in the sort field                                                                                                                                                                                                                                                                                                                                                        |
| sortBegin            | number         | 0                                                                          | Sorting sequence start value                                                                                                                                                                                                                                                                                                                                                        |
| pagination           | object         | {}                                                                         | Pagination parameters, set to display the pagination, see ( [APagination paging](https://antdv.com/components/pagination-cn/#API) )                                                                                                                                                                                                                                                 |
| clickRowShowSubForm  | boolean        | false                                                                      | Whether to show the subform when clicking a row                                                                                                                                                                                                                                                                                                                                     |
| clickRowShowMainForm | boolean        | false                                                                      | Whether to show the main form when a row is clicked                                                                                                                                                                                                                                                                                                                                 |
| clickSelectRow       | boolean        | false                                                                      | Whether to click on the selected row, the lowest priority                                                                                                                                                                                                                                                                                                                           |
| reloadEffect         | boolean        | false                                                                      | Whether to enable reload data effect                                                                                                                                                                                                                                                                                                                                                |
| editRules            | object         | {}                                                                         | Verification rules                                                                                                                                                                                                                                                                                                                                                                  |
| asyncRemove          | boolean        | false                                                                      | Whether to delete rows asynchronously. If you want to implement asynchronous deletion, you need to turn on this option; calling the confirmRemove method in the remove event will actually delete the rows (unless all the rows to be deleted are new rows)                                                                                                                         |
| authPre              | string         | ''                                                                         | Configure button/column permissions. The usual rule is \[prefix:column code\] or \[prefix:btn:button code\], such as `vxe:btn:add`(set permissions for adding a new button); `vxe:name`(set permissions for the name column). If you need to control permissions on the table, you need to configure this property as the prefix of the permission code. In this example,`jvxeauth` |
| linkageConfig        | array          | \[\]                                                                       | For multi-level linkage configuration, please refer to [\[Multi-level linkage configuration\]](#!)                                                                                                                                                                                                                                                                                  |
| socketReload         | boolean        | false                                                                      | Whether to enable seamless refresh using webSocket                                                                                                                                                                                                                                                                                                                                  |
| socketKey            | string         | 'vxe-default'                                                              | When the same socketKey is changed, it will refresh each other                                                                                                                                                                                                                                                                                                                      |
| addSetActive         | boolean        | true                                                                       | Toggle row activation when adding a row                                                                                                                                                                                                                                                                                                                                             |
| cacheColumnsKey      | string         | ""                                                                         | Column settings cache key (the default route is used as the key. When there are multiple JVXETables in a page, you need to set it to prevent column settings cache conflicts)                                                                                                                                                                                                       |
| custom               | boolean        | false                                                                      | Whether custom column configuration appears`v3.6.4+`                                                                                                                                                                                                                                                                                                                                |
| dragSortFixed        | string         | 'left'                                                                     | Whether the drag button is fixed to the left side, optional values: 'none', 'left'. (If there are many fields and a horizontal scroll bar is sure to appear, and the drag sorting function is required, it should be set to 'none')`v3.6.4+`                                                                                                                                        |
| rowSelectionFixed    | string         | 'left'                                                                     | Whether the chekbox or radio is fixed to the left side, optional values: 'none', 'left' `v3.6.4+`                                                                                                                                                                                                                                                                                   |

> [For more configuration details, see VXETable documentation](https://vxetable.cn/#/table/api)

### Columns parameter configuration

| parameter     | type                               | illustrate                                                                                                                                                                                                              |
| ------------- | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| key           | string                             | **\[Required\]**`key` The column data must be **unique** in the corresponding data item .                                                                                                                               |
| title         | string                             | The title displayed in the table column header                                                                                                                                                                          |
| type          | string                             | The type of the form can be `JVxeTypes`assigned a value (see: [\[Component Configuration Document\]](#!) for details )                                                                                                  |
| fixed         | string                             | left (fixed left), right (fixed right)                                                                                                                                                                                  |
| width         | string                             | The width of the column `px`,`%`                                                                                                                                                                                        |
| minWidth      |                                    | Minimum column width, `px`, `%`; will automatically distribute the remaining space proportionally                                                                                                                       |
| align         | string                             | Column alignment: left (left alignment), center (center alignment), right (right alignment)                                                                                                                             |
| placeholder   | string                             | The prompt information of the expected value of the form can use `${...}`variables to replace the text (see \[FAQ_How to use ${...} variables\] for details)                                                            |
| defaultValue  | string                             | Default value, effective when a new row is added                                                                                                                                                                        |
| props         | object                             | Set custom attributes added to form elements, for example:`props:{title: 'show title'}`                                                                                                                                 |
| disabled      | boolean                            | Whether to disable the current column, the default is false                                                                                                                                                             |
| validateRules | array                              | Form validation rules, for configuration, see \[validateRules configuration rules\]                                                                                                                                     |
| formatter     | Function({cellValue, row, column}) | Format the displayed content and return the processed value. Note: It only affects the displayed value and does not modify the actual value. In other words, it will not be affected when getting and clicking to edit. |

### validateRules configuration rules

`validateRules`What is needed is an array, each item in the array is a rule, the rule is of object type, and the parameters of the rule are as follows

- `required`Is it required? The optional value is `true`or`false`
- `unique`Unique check, non-repeatable, optional value is `true`or`false`
- `pattern`Regular expression verification, only the value that successfully matches the regular expression can pass the verification successfully
- `handler`Custom function verification, please see \[Usage Example 5\] for usage)
- `message`The prompt text displayed when the verification fails. You can use `${...}`variables to replace the text (see \[FAQ_How to use ${...} variables\] for details)
- For configuration examples, please see \[Usage Example 2\]

## event

### save

- `触发时机`: `保存`It will only be triggered when the button is clicked

### added

- `触发时机`: It will be triggered when clicking `新增`a button or calling a method`addRows`
- `携带参数`：
  - `row`: Add the completed line
  - `rows`: If multiple rows are added, this parameter will be returned

> If `addRows`the method is called to add multiple rows, the event will be triggered once for each row added.

### inserted

- `触发时机`: `insertRows`Triggered when the method is called
- `携带参数`：
  - `row`: The row after inserting
  - `rows`: If multiple rows are inserted, this parameter will be returned
  - `insertIndex`: Insert subscript

> If `insertRows`the method is called to add multiple rows, the event will be triggered once for each row added.

### removed

- `触发时机`: It will be triggered when clicking `删除`a button or calling a method`removeRows`
- `携带参数`：
  - `deleteRows`: The row to be deleted
  - `confirmRemove`: The confirmation deletion method will  
    only return when `删除`the button is clicked and the asyncRemove attribute is turned on

> If `asyncRemove`the parameter is set to true, the method will be passed `confirmRemove`, otherwise it will not be passed, and the deletion will only be done after the method is called (unless all the rows deleted are new rows) .  
> If `asyncRemove`the parameter is set to false, the rows will be deleted directly without calling `confirmRemove`.

### dragged

- `触发时机`: Triggered after dragging and sorting, or moving up and down
- `携带参数`：
  - `oldIndex`: index before sorting
  - `newIndex`: sorted index

### selectRowChange

- `触发时机`: Fired when a row is selected or unselected
- `携带参数`：
  - `type`: Selected type
    - `radio`: Single choice
    - `checkbox`: Multiple selection
  - `action`: Select operation
    - `selected`: Selected
    - `unselected`: Uncheck
    - `selected-all`:select all
  - `row`: The row currently being operated on (this parameter is not available when selecting all)
  - `selectedRows`: All selected rows
  - `selectedRowIds`: IDs of all selected rows
  - `$event`: Native events

### pageChange

- `触发时机`: Triggered when the paging parameters are changed
- `携带参数`：
  - `current`: Current page number
  - `pageSize`: Current page size

### valueChange

- `触发时机`: Event triggered when data changes
- `携带参数`：
  - `type`: Component type (type defined in JVXETypes)
  - `value`: New value
  - `oldValue`: Old value
  - `row`: Current line
  - `col`: Current column
  - `column`: Current column configuration
  - `rowIndex`: Current row subscript
  - `columnIndex`: Current column subscript
  - `cellTarget`: Current component instance
  - `isSetValues`：`true`represents `setValues`an event triggered by a method

> **Special note:** If `setValues`the event is triggered by a method, the parameters `row`, `rowIndex`, `columnIndex`, and will not be passed.`cellTarget`

## method

### getXTable

Get a vxe-table instance to call vxe-table's native methods. For details, see: [VxeTable Documentation](https://vxetable.cn/#/grid/api?filterName=methods)

### addRows

- `说明`: Add one or more temporary rows of data, fill in default values, and always activate the edit mode of the last row added
- `参数`：
  - `rows`:\[object | array\] The rows to add
  - `options`:object option parameter
    - `setActive`: Whether to activate the editing mode of the last row added, inherited from props.addSetActive by default
- `返回值`：Promise

### pushRows

- `说明`: Add one or more rows of temporary data. No default values ​​will be filled. Whatever is passed will be added.
- `参数`：
  - `rows`:\[object | array\] The rows to add
  - `options`:object option parameter
    - `index`: Default is -1, insertion position, -1 is the last line
    - `setActive`: Default is false, whether to activate the edit mode of the last row added
- `返回值`：Promise

### resetScrollTop

- `说明`: Reset the scroll bar Top position
- `参数`：
  - `top`:number The new top position. If left blank, scroll to the last recorded position. This is used to solve the problem of a white screen and automatically scrolling the scroll bar to the top when switching tabs.
- `返回值`:none

### validateTable

- `说明`: Check table, return errMap if failed, return null if successful
- `参数`:none
- `返回值`：Promise

### setValues

- `说明`: Set the value of a row or column
- `参数`：
  - `values`：array
- `返回值`：void

### getValues

- `说明`: Get the value of the table
- `参数`：
  - `callback`: callback after successful acquisition
  - `rowIds`: Specify the row ID to query, not all rows returned
- `返回值`：void

### getTableData

- `说明`： Get table data
- `参数`：
  - `options`:object option parameter
    - `rowIds`: string\[\] row ID, if passed, only the passed row will be returned
- `返回值`：row\[\]

### getSelectionData

- `说明`： Get selected data
- `参数`：
  - `isFull`: If true, get the selected data of the entire table
- `返回值`：row\[\]

### getNewData

- `说明`: Get only newly added temporary data
- `参数`:none
- `返回值`：row\[\]

### getNewDataWithId

- `说明`: Get only newly added temporary data with a temporary ID
- `参数`:none
- `返回值`：row\[\]

### getIfRowById

- `说明`: Get the row by ID, and the newly added temporary row can also be found
- `参数`：id
- `返回值`：{row, isNew}
  - `row`: The rows obtained
  - `isNew`: Whether the current row is a newly added temporary row

### getNewRowById

- `说明`: Get the newly added temporary row by temporary ID
- `参数`：id
- `返回值`：row

### getDeleteData

- `说明`: Only get the deleted data (the newly added and deleted data will not be obtained)
- `参数`:none
- `返回值`：row\[\]

### clearSelection

- `说明`: Clear selection
- `参数`:none
- `返回值`：void

### removeRows

- `说明`: Delete one or more rows of data
- `参数`：
  - `rows`: \[object | array\] The rows to delete
- `返回值`：Promise

### removeRowsById

- `说明`: Delete one or more rows according to id
- `参数`：
  - `rowId`: \[string | array\] IDs of the rows to be deleted
- `返回值`：Promise

### removeSelection

- `说明`: Delete the selected data
- `参数`:none
- `返回值`：Promise

### isDisabledRow

- `说明`: Determine whether it is a disabled row
- `参数`：
  - `rowId`: Row data
  - `force`: boolean whether to force refresh, default = true
- `返回值`：boolean

### recalcDisableRows

- `说明`: Recalculate disabled rows, required when the props.disabledRows parameter is modified
- `参数`:none
- `返回值`：void

### socketSendUpdateRow

- `说明`: Send a socket message to update the row, which will be used in WebSocket seamless refresh
- `参数`：
  - `row`: The row to update
- `返回值`：void

## Built-in slot

| Slot Name     | illustrate                                                                                                                                       |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| toolbarPrefix | **Insert a slot in front of** the action button , in the same row as the built-in button, affected by the `toolbar`and `toolbarConfig`properties |
| toolbarSuffix | **Insert a slot behind** the action button , in the same row as the built-in button, affected by the `toolbar`and `toolbarConfig`properties      |
| toolbarAfter  | **Inserts a slot below** the toolbar , unaffected `toolbar`by `toolbarConfig`the properties                                                      |
| subForm       | Click to expand the contents of the subtable                                                                                                     |
| mainForm      | Pop up the contents of the main table                                                                                                            |
