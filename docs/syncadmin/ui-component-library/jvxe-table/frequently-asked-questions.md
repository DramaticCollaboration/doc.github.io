---
order: 6
---

# Frequently Asked Questions

# FAQ

## How to use ${...} variables?

In the two properties of `placeholder`and , you can use variables to replace text. In [\[Usage Example 2\]](#!) , a column of is configured, and it is configured as , then the final display effect is . This is how to use variables . The variables that can be used in are , , and the values ​​of these three properties.`message``${...}`  
[](#!)`title``名称``placeholder``请输入${title}``请输入名称`  
`${...}``${}``title``key``defaultValue`

## How to call the method?

In [\[Usage Example 4\]](#!) , a property is set `ref="tableRef"`and defined in the setup method `const tableRef = ref<JVxeTableInstance>()`(this property must be returned),  
then in Vue, you can use it `tableRef.value`to get the instance of the table and call the method in it.  
If I want to call `add`the method, I can write it like this:`tableRef.value.add()`

## How to get the value of the form?

Use `getTableData()`the method to obtain, see [\[Usage Example 3\] for details.](#!)

## How to perform form validation?

When getting a value, form validation will be performed by default. When the user enters the value, the form being entered will also be validated. Just configure the rules. If you want to actively perform form validation, please see [\[Usage Example 3\]](#!)

## How do I add or delete a row?

This function has been encapsulated into the component. You only need to `toolbar`set it to `true`. Of course, you can also actively call the add or delete method in the code. See the method introduction for details.

## Why does the screen go blank or the scroll bar reset to zero sometimes?

It is very likely that you are using ATabs or other similar components.  
In ATabs, the scroll bar position will indeed be reset to zero, and `onscroll`the method will not be triggered, so the row cannot be loaded dynamically, resulting in a white screen problem.  
This problem has been automatically handled by internal monitoring. If the problem still occurs, it may be caused by other components. You can call the method when changing `resetScrollTop()`.
