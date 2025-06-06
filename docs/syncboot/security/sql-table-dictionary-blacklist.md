---
order: 3
---

# SQL table dictionary blacklist

### Preface:

There are many places in the jeecg system that allow users to define their own SQL statements, such as **online report configuration SQL** , **dictionary component configuration query fields** , etc. These defined SQL statements or configured query field names may cause some sensitive data leakage. Therefore, a configuration is required to declare that specific tables or fields are prohibited from being queried.

### Configuration class:

`org.jeecg.common.util.security.AbstractQueryBlackListHandler`

### Configuration instructions:

1\. Configure key-value pairs in ruleMap, where key is the table name and value is the field. Multiple fields are separated by commas.  
2\. `ruleMap.put("sys_user", "*")`Indicates that all fields in sys_user do not support query .  
3\. `ruleMap.put("sys_user", "username,password")`Indicates that username and password in sys_user do not support query.

### Test the online report effect

Define sql: `select password from sys_user`Parsing error:
