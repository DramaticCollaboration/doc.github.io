---
order: 3
---

# Batch Insert Efficiency Recommendations

@author [ksfBatch](https://blog.csdn.net/sinat_19528249)  
insert test response in four modes:  
inserting 10,000 records, time consuming ms:  
49,271 > 3,824 > 2,477 >818

**\# By default, loop insertion**

```
	/**
	 * ----- testMybatisInsert100000Save method test ------start:1593313133697
	 * ----- testMybatisInsert100000Save method test ------end: 1593313182968
	 * 49,271‬
	 */
	@Test
	public void testMybatisInsert100000Save() {
		List<JeecgDemo> jeecgDemoList = initDemos();
		System.out.println(("----- testMybatisInsert100000Save method test ------start:" + System.currentTimeMillis()));
		jeecgDemoList.forEach(jeecgDemo -> {
			jeecgDemoMapper.insert(jeecgDemo);
		});
		System.out.println(("----- testMybatisInsert100000Save method test ------end: " + System.currentTimeMillis()));
	}
```

copy

**\# Batch save situation**

```

----- testMybatisInsert100000BatchSave method test ------start:1593312989804
----- testMybatisInsert100000BatchSave method test ------end: 1593312992281
2,477‬
@Test
	public void testMybatisInsert100000BatchSave() {
		List<JeecgDemo> jeecgDemoList = initDemos();
		System.out.println(("----- testMybatisInsert100000BatchSave method test ------start:" + System.currentTimeMillis()));
		 jeecgDemoMapper.insertBatch(jeecgDemoList);
		System.out.println(("----- testMybatisInsert100000BatchSave method test ------end: " + System.currentTimeMillis()));
	}

	public Integer insertBatch(List<JeecgDemo> list);

	<insert id="insertBatch">
		INSERT INTO  `demo`(  `id`, `name`,
		`key_word`,
		`punch_time`,
		 `salary_money`,
		 `bonus_money`,
		 `sex`, `age`, `birthday`,
		  `email`, `content`)
		VALUES
		<foreach collection ="list" item="demo" separator =",">
			(  #{demo.id},  #{demo.name}, #{demo.keyWord},
			 #{demo.punchTime},  #{demo.salaryMoney},  #{demo.bonusMoney},
			 #{demo.sex},  #{demo.age},  #{demo.birthday},
			  #{demo.email},  #{demo.content}  )
		</foreach >
	</insert>
```

copy

**\# Mybatis comes with batch saving**

```

	/**
	 * ----- testMybatisInsert100000SqlSessionBatchSave method test ------start:1593313533345
	 * ----- testMybatisInsert100000SqlSessionBatchSave method test ------end: 1593313537169
	 * 3,824‬
	 */
	@Test
	public void testMybatisInsert100000SqlSessionBatchSave() {
		List<JeecgDemo> jeecgDemoList = initDemos();
		System.out.println(("----- testMybatisInsert100000SqlSessionBatchSave method test ------start:" + System.currentTimeMillis()));
		SqlSession sqlSession = sqlSessionTemplate.getSqlSessionFactory().openSession(ExecutorType.BATCH.BATCH, false);
		JeecgDemoMapper jeecgDemoMapper = sqlSession.getMapper(JeecgDemoMapper.class);
		jeecgDemoList.forEach(jeecgDemo -> {
			jeecgDemoMapper.insert(jeecgDemo);
		});
		sqlSession.commit();
		System.out.println(("----- testMybatisInsert100000SqlSessionBatchSave method test ------end: " + System.currentTimeMillis()));
	}
```

copy

**\# SpringJDBC batch save (this method is the fastest)**

```
----- testJdbcInsert100000BatchSave method test ------start:1593315311322
2020-06-28 11:35:11.329 [main] INFO  com.alibaba.druid.pool.DruidDataSource:1003 - {dataSource-2} inited
----- testJdbcInsert100000BatchSave method test ------end: 1593315312140
 818‬
@Test
	public void testJdbcInsert100000BatchSave() {
		List<Object[]> jeecgDemoList = initJDBCDemos();
		DruidDataSource dataSource = DynamicDBUtil.getDbSourceByDbKey("master");
		JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
		System.out.println(("----- testJdbcInsert100000BatchSave method test ------start:" + System.currentTimeMillis()));
		String sql ="INSERT INTO  `demo`(  `id`, `name`,\n" +
				"\t\t`key_word`,\n" +
				"\t\t`punch_time`,\n" +
				"\t\t `salary_money`,\n" +
				"\t\t `bonus_money`,\n" +
				"\t\t `sex`, `age`, `birthday`,\n" +
				"\t\t  `email`, `content`)\n" +
				"\t\tVALUES (?,?,?,?,?,?,?,?,?,?,?)";

		jdbcTemplate.batchUpdate(sql,jeecgDemoList);
		System.out.println(("----- testJdbcInsert100000BatchSave method test ------end: " + System.currentTimeMillis()));
	}
```

copy

```
初始化数据
public List<JeecgDemo> initDemos(){
   	List<JeecgDemo> demos   = new ArrayList<>();
   	for (int i = 0; i < 1000000; i++) {
   		JeecgDemo demo = new JeecgDemo();
   		demo.setSysOrgCode(i+"");
   		demo.setName(i+"name");
   		demo.setKeyWord(i+"keyWord");
   		demo.setPunchTime(new Date());
   		demo.setSalaryMoney(BigDecimal.ONE);
   		demo.setBonusMoney(1d);
   		demo.setSex("1");
   		demo.setAge(10);
   		demo.setBirthday(new Date());
   		demo.setEmail("fad@qq.com");
   		demo.setContent("fad@qq.com");
   		demos.add(demo);
   	}
   	return demos;
   }
   public List<Object[]> initJDBCDemos(){
   	List<Object[]> demos   = new ArrayList<>();
   	for (int i = 0; i < 10000; i++) {
   		Object[] demo = new Object[11];
   		demo[0] =i+""+new Date();
   		demo[1] =i+"name";
   		demo[2] =i+"keyWord";
   		demo[3] =new Date();
   		demo[4] =BigDecimal.ONE;
   		demo[5] =1d;
   		demo[6] ="1";
   		demo[7] =10;
   		demo[8] =new Date();
   		demo[9] ="fad@qq.com";
   		demo[10] ="fad@qq.com";
   		demos.add(demo);
   	}
   	return demos;
   }
```

copy

[Download sample code](https://download.csdn.net/download/zhangdaiscott/12560143)
