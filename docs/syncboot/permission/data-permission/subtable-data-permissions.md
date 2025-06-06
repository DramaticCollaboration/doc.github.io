---
order: 7
---

# Subtable data permissions

### 1\. Demand

**After the code is generated** for the main and sub-tables , the sub-table data can be viewed through the form. Now you need to control the viewing permissions of the sub-table data.  
![](/images/6b400a652c291b41142d5901cc9953d685bad107ba37e6a2aba14bc73c5900af.png)

ERP style:  
![](/images/975d24ffa6b8aee87e488a50cf7d9f5d99f03230d4f7334c32a0507a52b86b58.png)

### 2\. Operation steps

#### 1\. Add permission menu:

Find the request method for loading sub-table data in the controller, generally `queryxxxListByMainId`, get its **request path** and add a menu  
![](/images/9beaa2434fd2a21ce2dc75666087960e1712fd5cd896b424ca1b480fdfedb7a7.png)  
You only need to fill in the first four items, and fill in **the request path for the menu path**

#### 2\. Add data rules

Add data rules to the menu added in step 1:  
![](/images/9725b38eaaed598da5d05c30d99bce34c59c8d11a5f8eee26be0aece811b8089.png)

#### 3\. Role authorization

Go to \[System Management\]-->\[Role Management\] to authorize the menu/data rules added in steps 1 and 2 to the required roles.

#### 4\. Code modification

- controller, add annotations to the method in step 1`@PermissionData`
- mapper, modify the mapper method and add a parameter to the method  
  ![](/images/017dfab45becea5c1ff8c634182b3ec0cbe3aec18fa3aa452e79df3fa63a3a0d.png)
- mapper.xml, modify the query statement,  
  ![](/images/efb9a1de45a12f5bbecb8dfe7bdd43fa37a9efa4c5bcc50cb65b32613ed9ace3.png)
- serviceImpl, obtain permission sql before querying data and pass it to mapper  
  ![](/images/007ac2eb6fc7b972048b846be49b82a0bc07cc210477b58b4b07762792d387dd.png)

```
String sql = QueryGenerator.installAuthJdbc(xxx.class);
```

copy

> For ERP-style forms, only the controller method in step 1 needs to be annotated `@PermissionData`, and other files do not need to be modified.
