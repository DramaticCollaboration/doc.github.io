---
order: 5
---

# Transaction Annotation

> jeecg-boot uses annotation transactions, and transactions are controlled at the service level.  
> Annotation: @Transactional

How to add a transaction? => Just add the @Transactional annotation to the corresponding method of the service. For details, refer to the following code:

```
    /**
	 * 事务控制在service层面
	 * 加上注解：@Transactional，声明的方法就是一个独立的事务（有异常DB操作全部回滚）
	 */
	@Transactional
	public void testTran() {
		JeecgDemo pp = new JeecgDemo();
		pp.setAge(1111);
		pp.setName("测试事务  小白兔 1");
		jeecgDemoMapper.insert(pp);

		JeecgDemo pp2 = new JeecgDemo();
		pp2.setAge(2222);
		pp2.setName("测试事务  小白兔 2");
		jeecgDemoMapper.insert(pp2);

		Integer.parseInt("hello");//自定义异常

		JeecgDemo pp3 = new JeecgDemo();
		pp3.setAge(3333);
		pp3.setName("测试事务  小白兔 3");
		jeecgDemoMapper.insert(pp3);
		return ;
	}
```

copy
