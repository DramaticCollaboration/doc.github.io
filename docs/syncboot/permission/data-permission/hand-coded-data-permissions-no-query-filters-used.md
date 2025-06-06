---
order: 9
---

# Hand-coded data permissions (no query filters used)

> Preface: The existing list data permissions require calling the QueryGenerator.initQueryWrapper method in the backend list request, otherwise the configured permissions cannot take effect. Therefore, this section describes how to manually obtain data permissions, not through the above method, but by processing it externally.

Prepare the case: `权限配置细节不作赘述，请查看相关文档`( )

- View the menu Common Cases --> Single Table Model Example. When there is no permission, the data is as follows:  
  ![](/images/screenshot_1568888100896.png)
- Configure a data permission rule as shown below and authorize  
  ![](/images/6260ab26294158e76d85c27ec2aacb27dcc2e8f75c2c5615fba1f821f5949904.png)
- The filtered data is as follows:  
  ![](/images/a16561405d0325cd3e4527e319b7f59e568ec936bad08e13b45340f5ea34b5e4.png)

Implementation plan:  
1\. Convert data permission rules into SQL, and the program can get this SQL and splice it into the XML of mybatis

```
    // controller代码
    // 需要将前端将list请求地址改成此地址
	@GetMapping(value = "/sqlList")
	@PermissionData(pageComponent="jeecg/JeecgDemoList")
	public Result<IPage<JeecgDemo>> loadSqlPermissonList(JeecgDemo jeecgDemo, @RequestParam(name = "pageNo", defaultValue = "1") Integer pageNo, @RequestParam(name = "pageSize", defaultValue = "10") Integer pageSize,
			HttpServletRequest req) {
		Result<IPage<JeecgDemo>> result = new Result<IPage<JeecgDemo>>();
		IPage<JeecgDemo> pageList = jeecgDemoService.queryListWithPermission(pageSize, pageNo);
		result.setSuccess(true);
		result.setResult(pageList);
		return result;
	}

//service代码
public IPage<JeecgDemo> queryListWithPermission(int pageSize,int pageNo) {
		Page<JeecgDemo> page = new Page<>(pageNo, pageSize);
        //就是调用这个QueryGenerator.installAuthJdbc方法获取权限sql
		String sql = QueryGenerator.installAuthJdbc(JeecgDemo.class);
		return this.baseMapper.queryListWithPermission(page, sql);
	}

//mapper接口方法定义
IPage<JeecgDemo> queryListWithPermission(Page<JeecgDemo> page,@Param("permissionSql")String permissionSql);

//xml代码
	<select id="queryListWithPermission" parameterType="Object" resultType="org.jeecg.modules.demo.test.entity.JeecgDemo">
		select * from demo where 1=1 ${permissionSql}
	</select>

```

copy

2\. Still use mybatisplus and set it in queryWrapper externally.

```
    //contoller代码
    // 需要将前端将list请求地址改成此地址
	@GetMapping(value = "/mpList")
	@PermissionData(pageComponent="jeecg/JeecgDemoList")
	public Result<IPage<JeecgDemo>> loadMpPermissonList(@RequestParam(name = "pageNo", defaultValue = "1") Integer pageNo, @RequestParam(name = "pageSize", defaultValue = "10") Integer pageSize,
			HttpServletRequest req) {
		Result<IPage<JeecgDemo>> result = new Result<IPage<JeecgDemo>>();

        //此处使用的是QueryWrapper，如果你需要用LambdaQueryWrapper，请先new一个QueryWrapper，接着加载数据权限，然后通过queryWrapper.lambda()将其转化成LambdaQueryWrapper，最后你就能使用LambdaQueryWrapper处理自己的逻辑了
		QueryWrapper<JeecgDemo> queryWrapper = new QueryWrapper<JeecgDemo>();
        //调用这个QueryGenerator.installAuthMplus方法加载数据权限
		QueryGenerator.installAuthMplus(queryWrapper, JeecgDemo.class);
		Page<JeecgDemo> page = new Page<JeecgDemo>(pageNo, pageSize);

		IPage<JeecgDemo> pageList = jeecgDemoService.page(page, queryWrapper);
		result.setSuccess(true);
		result.setResult(pageList);
		return result;
	}
```

copy
