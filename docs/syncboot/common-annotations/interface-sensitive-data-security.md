---
order: 9
---

# Interface sensitive data security

> Sensitive data is not allowed to be passed to the front end and is displayed in the interface JSON result =>  
> For example: The password and encryption salt of the user table are sensitive information and cannot be displayed in the JSON result of querying the user list. However, the platform uses Mybatis-plus, and paging will directly query all fields. How to exclude sensitive fields?

plan:

```
实体字段加注解
@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
```

copy
