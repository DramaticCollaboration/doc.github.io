import{_ as n,c as e,a as i,o as t}from"./app-CU20V-HQ.js";const a={};function l(c,s){return t(),e("div",null,s[0]||(s[0]=[i(`<h1 id="batch-insert-efficiency-recommendations" tabindex="-1"><a class="header-anchor" href="#batch-insert-efficiency-recommendations"><span>Batch Insert Efficiency Recommendations</span></a></h1><p>@author <a href="https://blog.csdn.net/sinat_19528249" target="_blank" rel="noopener noreferrer">ksfBatch</a><br> insert test response in four modes:<br> inserting 10,000 records, time consuming ms:<br> 49,271 &gt; 3,824 &gt; 2,477 &gt;818</p><p><strong># By default, loop insertion</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">	/**</span>
<span class="line">	 * ----- testMybatisInsert100000Save method test ------start:1593313133697</span>
<span class="line">	 * ----- testMybatisInsert100000Save method test ------end: 1593313182968</span>
<span class="line">	 * 49,271‬</span>
<span class="line">	 */</span>
<span class="line">	@Test</span>
<span class="line">	public void testMybatisInsert100000Save() {</span>
<span class="line">		List&lt;JeecgDemo&gt; jeecgDemoList = initDemos();</span>
<span class="line">		System.out.println((&quot;----- testMybatisInsert100000Save method test ------start:&quot; + System.currentTimeMillis()));</span>
<span class="line">		jeecgDemoList.forEach(jeecgDemo -&gt; {</span>
<span class="line">			jeecgDemoMapper.insert(jeecgDemo);</span>
<span class="line">		});</span>
<span class="line">		System.out.println((&quot;----- testMybatisInsert100000Save method test ------end: &quot; + System.currentTimeMillis()));</span>
<span class="line">	}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p><strong># Batch save situation</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line"></span>
<span class="line">----- testMybatisInsert100000BatchSave method test ------start:1593312989804</span>
<span class="line">----- testMybatisInsert100000BatchSave method test ------end: 1593312992281</span>
<span class="line">2,477‬</span>
<span class="line">@Test</span>
<span class="line">	public void testMybatisInsert100000BatchSave() {</span>
<span class="line">		List&lt;JeecgDemo&gt; jeecgDemoList = initDemos();</span>
<span class="line">		System.out.println((&quot;----- testMybatisInsert100000BatchSave method test ------start:&quot; + System.currentTimeMillis()));</span>
<span class="line">		 jeecgDemoMapper.insertBatch(jeecgDemoList);</span>
<span class="line">		System.out.println((&quot;----- testMybatisInsert100000BatchSave method test ------end: &quot; + System.currentTimeMillis()));</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">	public Integer insertBatch(List&lt;JeecgDemo&gt; list);</span>
<span class="line"></span>
<span class="line">	&lt;insert id=&quot;insertBatch&quot;&gt;</span>
<span class="line">		INSERT INTO  \`demo\`(  \`id\`, \`name\`,</span>
<span class="line">		\`key_word\`,</span>
<span class="line">		\`punch_time\`,</span>
<span class="line">		 \`salary_money\`,</span>
<span class="line">		 \`bonus_money\`,</span>
<span class="line">		 \`sex\`, \`age\`, \`birthday\`,</span>
<span class="line">		  \`email\`, \`content\`)</span>
<span class="line">		VALUES</span>
<span class="line">		&lt;foreach collection =&quot;list&quot; item=&quot;demo&quot; separator =&quot;,&quot;&gt;</span>
<span class="line">			(  #{demo.id},  #{demo.name}, #{demo.keyWord},</span>
<span class="line">			 #{demo.punchTime},  #{demo.salaryMoney},  #{demo.bonusMoney},</span>
<span class="line">			 #{demo.sex},  #{demo.age},  #{demo.birthday},</span>
<span class="line">			  #{demo.email},  #{demo.content}  )</span>
<span class="line">		&lt;/foreach &gt;</span>
<span class="line">	&lt;/insert&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p><strong># Mybatis comes with batch saving</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line"></span>
<span class="line">	/**</span>
<span class="line">	 * ----- testMybatisInsert100000SqlSessionBatchSave method test ------start:1593313533345</span>
<span class="line">	 * ----- testMybatisInsert100000SqlSessionBatchSave method test ------end: 1593313537169</span>
<span class="line">	 * 3,824‬</span>
<span class="line">	 */</span>
<span class="line">	@Test</span>
<span class="line">	public void testMybatisInsert100000SqlSessionBatchSave() {</span>
<span class="line">		List&lt;JeecgDemo&gt; jeecgDemoList = initDemos();</span>
<span class="line">		System.out.println((&quot;----- testMybatisInsert100000SqlSessionBatchSave method test ------start:&quot; + System.currentTimeMillis()));</span>
<span class="line">		SqlSession sqlSession = sqlSessionTemplate.getSqlSessionFactory().openSession(ExecutorType.BATCH.BATCH, false);</span>
<span class="line">		JeecgDemoMapper jeecgDemoMapper = sqlSession.getMapper(JeecgDemoMapper.class);</span>
<span class="line">		jeecgDemoList.forEach(jeecgDemo -&gt; {</span>
<span class="line">			jeecgDemoMapper.insert(jeecgDemo);</span>
<span class="line">		});</span>
<span class="line">		sqlSession.commit();</span>
<span class="line">		System.out.println((&quot;----- testMybatisInsert100000SqlSessionBatchSave method test ------end: &quot; + System.currentTimeMillis()));</span>
<span class="line">	}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p><strong># SpringJDBC batch save (this method is the fastest)</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">----- testJdbcInsert100000BatchSave method test ------start:1593315311322</span>
<span class="line">2020-06-28 11:35:11.329 [main] INFO  com.alibaba.druid.pool.DruidDataSource:1003 - {dataSource-2} inited</span>
<span class="line">----- testJdbcInsert100000BatchSave method test ------end: 1593315312140</span>
<span class="line"> 818‬</span>
<span class="line">@Test</span>
<span class="line">	public void testJdbcInsert100000BatchSave() {</span>
<span class="line">		List&lt;Object[]&gt; jeecgDemoList = initJDBCDemos();</span>
<span class="line">		DruidDataSource dataSource = DynamicDBUtil.getDbSourceByDbKey(&quot;master&quot;);</span>
<span class="line">		JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);</span>
<span class="line">		System.out.println((&quot;----- testJdbcInsert100000BatchSave method test ------start:&quot; + System.currentTimeMillis()));</span>
<span class="line">		String sql =&quot;INSERT INTO  \`demo\`(  \`id\`, \`name\`,\\n&quot; +</span>
<span class="line">				&quot;\\t\\t\`key_word\`,\\n&quot; +</span>
<span class="line">				&quot;\\t\\t\`punch_time\`,\\n&quot; +</span>
<span class="line">				&quot;\\t\\t \`salary_money\`,\\n&quot; +</span>
<span class="line">				&quot;\\t\\t \`bonus_money\`,\\n&quot; +</span>
<span class="line">				&quot;\\t\\t \`sex\`, \`age\`, \`birthday\`,\\n&quot; +</span>
<span class="line">				&quot;\\t\\t  \`email\`, \`content\`)\\n&quot; +</span>
<span class="line">				&quot;\\t\\tVALUES (?,?,?,?,?,?,?,?,?,?,?)&quot;;</span>
<span class="line"></span>
<span class="line">		jdbcTemplate.batchUpdate(sql,jeecgDemoList);</span>
<span class="line">		System.out.println((&quot;----- testJdbcInsert100000BatchSave method test ------end: &quot; + System.currentTimeMillis()));</span>
<span class="line">	}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">初始化数据</span>
<span class="line">public List&lt;JeecgDemo&gt; initDemos(){</span>
<span class="line">   	List&lt;JeecgDemo&gt; demos   = new ArrayList&lt;&gt;();</span>
<span class="line">   	for (int i = 0; i &lt; 1000000; i++) {</span>
<span class="line">   		JeecgDemo demo = new JeecgDemo();</span>
<span class="line">   		demo.setSysOrgCode(i+&quot;&quot;);</span>
<span class="line">   		demo.setName(i+&quot;name&quot;);</span>
<span class="line">   		demo.setKeyWord(i+&quot;keyWord&quot;);</span>
<span class="line">   		demo.setPunchTime(new Date());</span>
<span class="line">   		demo.setSalaryMoney(BigDecimal.ONE);</span>
<span class="line">   		demo.setBonusMoney(1d);</span>
<span class="line">   		demo.setSex(&quot;1&quot;);</span>
<span class="line">   		demo.setAge(10);</span>
<span class="line">   		demo.setBirthday(new Date());</span>
<span class="line">   		demo.setEmail(&quot;fad@qq.com&quot;);</span>
<span class="line">   		demo.setContent(&quot;fad@qq.com&quot;);</span>
<span class="line">   		demos.add(demo);</span>
<span class="line">   	}</span>
<span class="line">   	return demos;</span>
<span class="line">   }</span>
<span class="line">   public List&lt;Object[]&gt; initJDBCDemos(){</span>
<span class="line">   	List&lt;Object[]&gt; demos   = new ArrayList&lt;&gt;();</span>
<span class="line">   	for (int i = 0; i &lt; 10000; i++) {</span>
<span class="line">   		Object[] demo = new Object[11];</span>
<span class="line">   		demo[0] =i+&quot;&quot;+new Date();</span>
<span class="line">   		demo[1] =i+&quot;name&quot;;</span>
<span class="line">   		demo[2] =i+&quot;keyWord&quot;;</span>
<span class="line">   		demo[3] =new Date();</span>
<span class="line">   		demo[4] =BigDecimal.ONE;</span>
<span class="line">   		demo[5] =1d;</span>
<span class="line">   		demo[6] =&quot;1&quot;;</span>
<span class="line">   		demo[7] =10;</span>
<span class="line">   		demo[8] =new Date();</span>
<span class="line">   		demo[9] =&quot;fad@qq.com&quot;;</span>
<span class="line">   		demo[10] =&quot;fad@qq.com&quot;;</span>
<span class="line">   		demos.add(demo);</span>
<span class="line">   	}</span>
<span class="line">   	return demos;</span>
<span class="line">   }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p><a href="https://download.csdn.net/download/zhangdaiscott/12560143" target="_blank" rel="noopener noreferrer">Download sample code</a></p>`,17)]))}const p=n(a,[["render",l]]),r=JSON.parse('{"path":"/syncboot/common-functions/batch-insert-efficiency-recommendations.html","title":"Batch Insert Efficiency Recommendations","lang":"ko-KR","frontmatter":{"order":3},"git":{"updatedTime":1749507909000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"b750c3240053572cbcbb08ac1e9cd0bd9974af53","time":1749507909000,"email":"poh@empasy.com","author":"poh","message":"build to docs:build"}]},"filePathRelative":"syncboot/common-functions/batch-insert-efficiency-recommendations.md"}');export{p as comp,r as data};
