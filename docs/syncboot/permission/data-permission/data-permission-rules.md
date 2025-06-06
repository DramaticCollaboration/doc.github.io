---
order: 4
---

# Data Permission Rules

Data permissions refer to controlling row data through data permissions, allowing different people to view different data;  
for example: sales staff can only view their own data; sales managers can view the data of subordinate sales staff; finance can only view data with an amount greater than 5,000, etc.;  
This chapter: explains the coding method (that is, the generated code) and how to implement data permissions.

### Data permission configuration instructions

- ①The rule field is written in camel case, corresponding to the field of mybatis entity
- ②Conditional rules: greater than/greater than or equal to/less than/less than or equal to/equal to/contains/fuzzy/not equal to
- ③Rule value: specified value (fixed value/system context variable)  
  Date default value format: 2020-04-10Time  
  default value format: 2020-04-13 12:00:00
- ④Conditional rules include: Rule values ​​are separated by commas

### Data Permission Rules

#### 1\. Current user context variables

Note: For data permission configuration, the rule value can be filled in with the system context variable (current login user information), so as to perform permission control based on the current login user information.

| coding             | describe                                                                          |
| ------------------ | --------------------------------------------------------------------------------- |
| sys_user_code      | Current logged in user account                                                    |
| sys_user_name      | The real name of the currently logged in user                                     |
| sys_date           | Current system date                                                               |
| sys_time           | Current system time                                                               |
| sys_org_code       | Department number of the currently logged in user                                 |
| sys_multi_org_code | All organization codes owned by the currently logged in user, separated by commas |
| tenant_id          | The tenant ID of the currently logged in user                                     |

Rule value, the configuration is as follows: #{sys_user_code}

#### 2\. Table creation specifications (system standard fields)

If you need to control data permissions by the current login user or login department, the business table must have the following system standard fields;  
for example: creator, creation time, and creator's department. With these standard fields, you can perform data isolation control by the current login user.

> When adding and editing data, jeecg will automatically inject the operator's information through the interceptor.

| Field English name | Field Chinese name       |
| ------------------ | ------------------------ |
| create_by          | Creator Account          |
| create_time        | Creation time            |
| sys_org_code       | Creator Login Department |

#### 3\. Organization postal code rules

SYNC organization supports unlimited levels, and the superior-subordinate relationship is realized through organization coding. The organization coding rule is similar to the postal code method, see the figure below;  
Postal code rule advantages: Postal code rule, fixed rules for superior-subordinate coding, easy to locate subordinates and superiors;
