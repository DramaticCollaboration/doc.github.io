---
order: 2
---

# Table creation specifications

## Table design specifications

- 1\. The primary key must be: ID, type \[Long(19)\] unique index, for historical reasons, use String(32) type temporarily
- 2\. Foreign key field naming: {\[related table name\] without the business prefix} + "\_" + {related field name}, for example: order_main_id
- 3\. Distinguishing bit: iz\_\* \[String(1)\] 1 means yes, 0 means no. (Disabling is\_ will cause problems with code generation entities)
- 4\. Status bit: \*\_status \[String(1-2)\] The status field must be annotated to explain what each value represents
- 5\. Field naming, multiple words are separated by underscores, for example: school_id
- 6\. Index naming: The primary key index is named: pk_table name abbreviation_field name (the index must be unique in the entire database to be compatible with multiple databases); the  
  unique index is named: `uniq_表名缩写_字段名`or `uk_表名缩写_字段名`;  
  the common index command is: `idx_表名缩写_字段名`(table name abbreviation: underscores separate the first letters of the words)
- 7\. For the fields of distinction, status, and type, try to use the String type to avoid some problems with numeric types; if performance is a concern, it is recommended to use the int type  
  (disable the tinyint type, which needs to be compatible with other databases);
- 8\. Field default value (try not to set a default value for the field, use encoding to add the default value) `因为在转库的过程中，不同数据库会有丢失默认值的情况`

## Table business prefix and table creation standard fields

- 1\. Table names must have a business prefix: for example, starting with sys\_ (system table prefix)
- 2\. All tables plus fields: department to which they belong, used for department data permissions
- 3\. Add fields to all tables: creation time, creator, last updated time, updater
- 4\. Logical deletion field, del_flag \[int(1)\], 1 means deletion, 0 means non-deletion, optional
- 5\. Optimistic lock field, update_count\[Integer\], optional, for optimistic lock usage, [refer to the documentation](https://www.baomidou.com/pages/0d93c0/#optimisticlockerinnerinterceptor)
- 6\. String type fields, varchar type length is not allowed to exceed 1000 (if it is too long, the type will change when transferring to the database)
- 7\. Use large text as little as possible, use text and longtext as field types, and disable blob series types (must be confirmed)

## Helper Scripts

```
ALTER TABLE `表名`
ADD COLUMN `create_by`  varchar(32) NULL COMMENT '创建人',
ADD COLUMN `create_time`  datetime NULL COMMENT '创建时间' AFTER `create_by`,
ADD COLUMN `update_by`  varchar(32) NULL COMMENT '修改人' AFTER `create_time`,
ADD COLUMN `update_time`  datetime NULL COMMENT '修改时间' AFTER `update_by`,
ADD COLUMN `del_flag`  int(1) NULL COMMENT '0表示未删除,1表示删除' AFTER `update_time`;
```

copy

other instructions:

- Table field comments, each field must have a comment description;
- Table field annotations, status type fields must specify the value rules (such as gender sex value rules),  
  such as: 'Gender 0 male, 1 female'
- Indexes: add indexes to fields with high query frequency (single field index, combined index, unique index);
- For status and type fields, try to use string varchar type with a length of 1-2, and use int type less to avoid unnecessary problems.

## Encoding SQL compliant

> Database compatibility is an issue that platform-level products must adapt to. When writing SQL, you need to pay attention to the compatibility of different databases to ensure compatibility.

Refer to internal documentation:`JEECG公司内部文档>>国产数据库适配>>编码SQL兼容注意规范`
