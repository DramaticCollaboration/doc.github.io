---
order: 3
---

# Log annotation @AutoLog

> jeecg-boot provides online log management function, which can view all system login and update operations in real time online.  
> jeecg-boot provides two ways to write system logs

**Method 1: Custom annotation @AutoLog**  
Add annotation @AutoLog("operation content description") to the Control method  
. Reference:

```
     /**
	 *   添加
	 * @param jeecgDemo
	 * @return
	 */
	@RequestMapping(value = "/add", method = RequestMethod.POST)
	@AutoLog(value = "添加测试DEMO")
	public Result<JeecgDemo> add(@RequestBody JeecgDemo jeecgDemo) {
		Result<JeecgDemo> result = new Result<JeecgDemo>();
		try {
			jeecgDemoService.save(jeecgDemo);
			result.success("添加成功！");
		} catch (Exception e) {
			e.printStackTrace();
			log.info(e.getMessage());
			result.error500("操作失败");
		}
		return result;
	}
```

copy

**Method 2: Call the common API to insert logs (new version)**

a. Introducing common services

```
@Autowired
private BaseCommonService  baseCommonService  ;
```

copy

b. Call the insert log method

```
baseCommonService.addLog("登录失败，用户名:"+username+"不存在！", CommonConstant.LOG_TYPE_1, null);
```

copy
