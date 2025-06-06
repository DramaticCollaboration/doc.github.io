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

![](/images/9e3c9d0ec1da0591c6167390238846e6f42d22a16c7cb5f08694b8ff1835eaeb.png)

### 2\. Annotate JAVA methods

Add annotations to the request method. `@PermissionData(pageComponent="system/UserList")`The value of the parameter pageComponent should be consistent with the front-end component value of the menu.  
![](/images/719f86eb0751950165c2e26ddca8d9719cb38abba66a30d08dbd1d1b4a31ce96.png)

### 3\. Configure data permissions for the menu

Find the page menu where you need to configure permissions. This is the user management menu. Configure data rules directly on this menu.  
![](/images/3a746e1c127f3eb82a10cb5b6c794c3ca5de7dad96f19d1820379549e8537f36.png)

Data permission configuration (only view users with male gender)  
![](/images/bb91e8f51de95b17356455b5de823f96333db0da8261191a98fd187de36ca329.png)

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

![](/images/7ca69aa95b078b18223562140253c774bb6223b8a48384c63ef802f3d48a63c3.png)

### 5\. Test permissions

Log out and log in again, access the user management interface and find that the data has been filtered. Only male data is seen, indicating that the permission is effective!  
![](/images/a998820b413a79e7ff72ab2628f2db003bc15406d65de34187e92373eae3c8c5.png)

If you want to isolate data based on the login person or the login person's department, [refer to the Data Permission Rules section.](readme.html)

### Other configuration methods

You need to configure data permissions through URL and [control data permissions through requests](userequest.html)
