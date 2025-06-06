---
order: 7
---

# Subtable data permissions

### 1\. Demand

**After the code is generated** for the main and sub-tables , the sub-table data can be viewed through the form. Now you need to control the viewing permissions of the sub-table data.

ERP style:

### 2\. Operation steps

#### 1\. Add permission menu:

Find the request method for loading sub-table data in the controller, generally `queryxxxListByMainId`, get its **request path** and add a menu

You only need to fill in the first four items, and fill in **the request path for the menu path**

#### 2\. Add data rules

Add data rules to the menu added in step 1:

#### 3\. Role authorization

Go to \[System Management\]-->\[Role Management\] to authorize the menu/data rules added in steps 1 and 2 to the required roles.

#### 4\. Code modification

- controller, add annotations to the method in step 1`@PermissionData`
- mapper, modify the mapper method and add a parameter to the method
- mapper.xml, modify the query statement,
- serviceImpl, obtain permission sql before querying data and pass it to mapper

```
String sql = QueryGenerator.installAuthJdbc(xxx.class);
```

copy

> For ERP-style forms, only the controller method in step 1 needs to be annotated `@PermissionData`, and other files do not need to be modified.
