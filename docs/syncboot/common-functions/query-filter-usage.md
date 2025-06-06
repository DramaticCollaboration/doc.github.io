---
order: 5
---

# Query filter usage

**Directory Index** :

- Functional Description
- Query rules
  1.  Full match query
  2.  Fuzzy query
  3.  Range Query
  4.  Contains query
  5.  etc...
- How query filters are integrated
- More query rule references

# Query Filters

## 1\. Functional Description

Query filters can help quickly generate query conditions without coding and can be implemented through configuration. They support fuzzy query, match query, range query, non-match query and other rules.

## 2\. Query Rules

\*\*Note: \*\*The page query field must correspond to the field of the Page in the background Controller. The background does not need to write code to automatically generate the query condition SQL;  
the default query condition is full match. If you want to implement fuzzy query requirements, add: \* before and after the query value;

**Query matching rules** :  
\[1\]. Full match query: The query data has no special format, and the default is full match query  
\[2\]. Fuzzy query: The query data format needs to be added with an asterisk: { \* }  
For example:

```
     格式一： 张*    （后模糊匹配）
     格式二： *张    （前模糊匹配）
     格式三： *张*   （全模糊匹配）
     格式四： *张*三* （更高级匹配）
```

copy

\[3\]. Include query: The query data format is comma-separated: { , }  
For example:

```
格式：  张三,李四
       (含义：In('张三','李四'))
```

copy

\[4\]. Unmatched query: The query data format needs to be prefixed with an exclamation mark: { ! }  
For example:

```
格式： !张三
     (含义：不等于'张三')
    特殊说明：查询不为Null的语法：!null(大小写没关系);
             查询不为空字符串的方法：!(只有一个叹号);
```

copy

\[5\]. Range query, supports range query of numbers and time. Two query controls will be generated for the range query page.

```
1. 如果是单一匹配方式，则页面查询控件的name， 跟实体字段命名一样
2. 如果是范围匹配方式，则页面查询控件需要变成两个分别名 {*}_begin，{*}_end
{*}_begin： 表示查询范围开始值
{*}_end:    表示查询范围结束值

举例：
字段名称 orderDate
查询开始时间 : orderDate_begin
查询结束时间 : orderDate_end
```

copy

## 3\. How to integrate query filters

**Step 1: Implement**  
the query area of ​​the online list of query conditions on the page and add the required query fields, as shown in the figure below.  
![](https://upload.jeecg.com/jeecg/help/jeecgback/topwrite/assets/image_1687781084063.png)

Effect:  
![](https://upload.jeecg.com/jeecg/help/jeecgback/topwrite/assets/image_1687781101965.png)

Step 2: Add the following code to the corresponding processing logic in the **controller layer :**

```
QueryWrapper<?> queryWrapper = QueryGenerator.initQueryWrapper(?, req.getParameterMap());
```

copy

Code example:

```

	@GetMapping(value = "/list")
	public Result<IPage<JeecgDemo>> list(JeecgDemo jeecgDemo, @RequestParam(name = "pageNo", defaultValue = "1") Integer pageNo,
	                                     @RequestParam(name = "pageSize", defaultValue = "10") Integer pageSize,
			HttpServletRequest req) {
		Result<IPage<JeecgDemo>> result = new Result<IPage<JeecgDemo>>();

		//调用QueryGenerator的initQueryWrapper
		QueryWrapper<JeecgDemo> queryWrapper = QueryGenerator.initQueryWrapper(jeecgDemo, req.getParameterMap());

		Page<JeecgDemo> page = new Page<JeecgDemo>(pageNo, pageSize);
		IPage<JeecgDemo> pageList = jeecgDemoService.page(page, queryWrapper);
		result.setSuccess(true);
		result.setResult(pageList);
		return result;
	}

```

copy

## 4\. More query rule references

| Query Mode                        | usage                                                                                                                                     | illustrate                                                                                                                                                                                                                                                                                                 |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Fuzzy query                       | Support left and right fuzzy and full fuzzy. You need to put \* before or after the query input box or put \* before and after.           |                                                                                                                                                                                                                                                                                                            |
| Negative query                    | Enter ! before the query input box to query the data that is not equal to the input value in this field                                   | (Numeric types do not support this type of query, you can define the numeric field as a string type)                                                                                                                                                                                                       |
| in query                          | If the incoming data contains , (comma), it means that the query is an in query                                                           |                                                                                                                                                                                                                                                                                                            |
| in query                          | To query multiple values ​​of numeric fields, you need to add the suffix "\_MultiString" to the field. Other rules are the same as above. | For example, the entity field , the page accepts the parameter field tableType_MultiString                                                                                                                                                                                                                 |
| Multiple-select field fuzzy query | For example, if the name input value is a, b, c, then the result sql is name like '%a%' or name like '%b%' or name like '%c%'             | There is a special case in the above 4. If a query field is preceded and followed by commas, it will be considered as this query method. This query method is to separate the query conditions with commas and then traverse the array to query each element as a like query and concatenate them with or. |

- Advanced value rule usage (query content, with query rule symbol )

| Query Mode | usage                                                                          | Example               |
| ---------- | ------------------------------------------------------------------------------ | --------------------- |
| <          | Less than query. Query content value rule: "lt+ space+ content"                | Input value: "lt 100" |
| <=         | Less than or equal to query. Query content value rule: "le+ space+ content"    | Input value: "le 100" |
| \>         | Greater than query. Query content value rule: "gt+ space+ content"             | Input value: "gt 100" |
| \>=        | Greater than or equal to query. Query content value rule: "ge+ space+ content" | Input value: "ge 100" |

1.  Range matching mode, the page query control needs to be changed into two names {}\_ _begin_ , {}\_end  
    {}\_ _begin: indicates the start value of the query range_  
    {}\_end: indicates the end value of the query range

Example:  
![](https://lfs.k.topthink.com/lfs/82a898025369b7671d505c2ba6d8372d28192a258a21fdd83cec810c71db7eb6.dat)  
Field name costTime  
Query start: costTime_begin  
Query end: costTime_end  
this.queryParam.costTime_begin = costTime_begin;  
this.queryParam.costTime_end = costTime_end;

## 5\. Back-end custom field query rules.

> Version support: 3.6.4+

For some special cases, when querying, regardless of whether the parameter contains a value rule, the query rule will be executed according to our requirements. You can customize the query rule of the field when calling the query filter. The specific usage is as follows:

```
    // 自定义查询规则
    Map<String, QueryRuleEnum> customeRuleMap = new HashMap<>();
    // 自定义duoXuan字段的查询规则为：LIKE_WITH_OR
    customeRuleMap.put("duoXuan", QueryRuleEnum.LIKE_WITH_OR);
    // 将自定义查询规则传入QueryGenerator
    QueryWrapper<Entity> queryWrapper = QueryGenerator.initQueryWrapper(entity, request.getParameterMap(), customeRuleMap);
```

copy
