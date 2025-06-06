---
order: 5
---

# Data permission usage

## Permissions Introduction

> Data permissions control the display of row data through data permissions, allowing different people to see different data;  
> for example: sales staff can only see their own data; sales managers can see the data of all subordinate sales staff; finance can only see data with an amount greater than 5,000, etc.

> Example: Taking the user management list as an example, only query users with user accounts containing 1

There are two ways to use data permissions

- Method A: Match data permissions by front-end component name
- Method B: Match data permissions by requesting URL

## Method A: Implementing permissions through front-end components

The specific steps based on annotations `@PermissionData(pageComponent="system/UserList")`are as follows:

### 1\. Configure page menu

### 2\. Annotate JAVA methods

Add annotations to the request method. `@PermissionData(pageComponent="system/UserList")`The value of the parameter pageComponent should be consistent with the front-end component value of the menu.

### 3\. Configure data permissions for the menu

Find the page menu where you need to configure permissions. This is the user management menu. Configure data rules directly on this menu.

Data permission configuration (only view users with male gender)

#### Rule field configuration instructions

Rule field description  
This corresponds to the entity field name, which is generally written in camel case, for example: the creator configures it `createBy`instead of`create_by`

**Pay special attention** **to the database field name**  
**when using`自定义SQL``create_by`**

Reference document: [Permission configuration custom SQL](dessql.html)

> Detailed description of rule field configuration (very important)  
> ①Rule field: use entity field name (if it is online, you need to configure the database field name)  
> ②Rule value: specify value (fixed value/system context variable)  
> ③Condition rule: greater than/greater than or equal to/less than/less than or equal to/equal to/contains/fuzzy/not equal to/custom SQL

### 4\. Role Authorization

### 5\. Test permissions

Log out and log in again, access the user management interface and find that the data has been filtered. Only male data is seen, indicating that the permission is effective!

If you want to isolate data based on the login person or the login person's department, [refer to the Data Permission Rules section.](readme.html)

### Other configuration methods

You need to configure data permissions through URL and [control data permissions through requests](userequest.html)
