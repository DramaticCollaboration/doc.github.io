import{_ as s,c as n,a,o as i}from"./app-QFoJTndn.js";const t={};function l(r,e){return i(),n("div",null,e[0]||(e[0]=[a(`<h1 id="hand-coded-data-permissions-no-query-filters-used" tabindex="-1"><a class="header-anchor" href="#hand-coded-data-permissions-no-query-filters-used"><span>Hand-coded data permissions (no query filters used)</span></a></h1><blockquote><p>Preface: The existing list data permissions require calling the QueryGenerator.initQueryWrapper method in the backend list request, otherwise the configured permissions cannot take effect. Therefore, this section describes how to manually obtain data permissions, not through the above method, but by processing it externally.</p></blockquote><p>Prepare the case: <code>The details of permission configuration will not be detailed, please refer to the relevant documentation</code>( )</p><ul><li>View the menu Common Cases --&gt; Single Table Model Example. When there is no permission, the data is as follows:</li><li>Configure a data permission rule as shown below and authorize</li><li>The filtered data is as follows:</li></ul><p>Implementation plan:<br> 1. Convert data permission rules into SQL, and the program can get this SQL and splice it into the XML of mybatis</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">    // controller代码</span>
<span class="line">    // 需要将前端将list请求地址改成此地址</span>
<span class="line">	@GetMapping(value = &quot;/sqlList&quot;)</span>
<span class="line">	@PermissionData(pageComponent=&quot;jeecg/JeecgDemoList&quot;)</span>
<span class="line">	public Result&lt;IPage&lt;JeecgDemo&gt;&gt; loadSqlPermissonList(JeecgDemo jeecgDemo, @RequestParam(name = &quot;pageNo&quot;, defaultValue = &quot;1&quot;) Integer pageNo, @RequestParam(name = &quot;pageSize&quot;, defaultValue = &quot;10&quot;) Integer pageSize,</span>
<span class="line">			HttpServletRequest req) {</span>
<span class="line">		Result&lt;IPage&lt;JeecgDemo&gt;&gt; result = new Result&lt;IPage&lt;JeecgDemo&gt;&gt;();</span>
<span class="line">		IPage&lt;JeecgDemo&gt; pageList = jeecgDemoService.queryListWithPermission(pageSize, pageNo);</span>
<span class="line">		result.setSuccess(true);</span>
<span class="line">		result.setResult(pageList);</span>
<span class="line">		return result;</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">//service代码</span>
<span class="line">public IPage&lt;JeecgDemo&gt; queryListWithPermission(int pageSize,int pageNo) {</span>
<span class="line">		Page&lt;JeecgDemo&gt; page = new Page&lt;&gt;(pageNo, pageSize);</span>
<span class="line">        //就是调用这个QueryGenerator.installAuthJdbc方法获取权限sql</span>
<span class="line">		String sql = QueryGenerator.installAuthJdbc(JeecgDemo.class);</span>
<span class="line">		return this.baseMapper.queryListWithPermission(page, sql);</span>
<span class="line">	}</span>
<span class="line"></span>
<span class="line">//mapper接口方法定义</span>
<span class="line">IPage&lt;JeecgDemo&gt; queryListWithPermission(Page&lt;JeecgDemo&gt; page,@Param(&quot;permissionSql&quot;)String permissionSql);</span>
<span class="line"></span>
<span class="line">//xml代码</span>
<span class="line">	&lt;select id=&quot;queryListWithPermission&quot; parameterType=&quot;Object&quot; resultType=&quot;org.jeecg.modules.demo.test.entity.JeecgDemo&quot;&gt;</span>
<span class="line">		select * from demo where 1=1 \${permissionSql}</span>
<span class="line">	&lt;/select&gt;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>2. Still use mybatisplus and set it in queryWrapper externally.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">    //contoller代码</span>
<span class="line">    // 需要将前端将list请求地址改成此地址</span>
<span class="line">	@GetMapping(value = &quot;/mpList&quot;)</span>
<span class="line">	@PermissionData(pageComponent=&quot;jeecg/JeecgDemoList&quot;)</span>
<span class="line">	public Result&lt;IPage&lt;JeecgDemo&gt;&gt; loadMpPermissonList(@RequestParam(name = &quot;pageNo&quot;, defaultValue = &quot;1&quot;) Integer pageNo, @RequestParam(name = &quot;pageSize&quot;, defaultValue = &quot;10&quot;) Integer pageSize,</span>
<span class="line">			HttpServletRequest req) {</span>
<span class="line">		Result&lt;IPage&lt;JeecgDemo&gt;&gt; result = new Result&lt;IPage&lt;JeecgDemo&gt;&gt;();</span>
<span class="line"></span>
<span class="line">        //此处使用的是QueryWrapper，如果你需要用LambdaQueryWrapper，请先new一个QueryWrapper，接着加载数据权限，然后通过queryWrapper.lambda()将其转化成LambdaQueryWrapper，最后你就能使用LambdaQueryWrapper处理自己的逻辑了</span>
<span class="line">		QueryWrapper&lt;JeecgDemo&gt; queryWrapper = new QueryWrapper&lt;JeecgDemo&gt;();</span>
<span class="line">        //调用这个QueryGenerator.installAuthMplus方法加载数据权限</span>
<span class="line">		QueryGenerator.installAuthMplus(queryWrapper, JeecgDemo.class);</span>
<span class="line">		Page&lt;JeecgDemo&gt; page = new Page&lt;JeecgDemo&gt;(pageNo, pageSize);</span>
<span class="line"></span>
<span class="line">		IPage&lt;JeecgDemo&gt; pageList = jeecgDemoService.page(page, queryWrapper);</span>
<span class="line">		result.setSuccess(true);</span>
<span class="line">		result.setResult(pageList);</span>
<span class="line">		return result;</span>
<span class="line">	}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p>`,10)]))}const o=s(t,[["render",l]]),c=JSON.parse('{"path":"/syncboot/permission/data-permission/hand-coded-data-permissions-no-query-filters-used.html","title":"Hand-coded data permissions (no query filters used)","lang":"ko-KR","frontmatter":{"order":9},"git":{"updatedTime":1749180812000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":2,"url":"https://github.com/poh"}],"changelog":[{"hash":"20b98cdb6387988697c03a19f00e0a40c0f2e492","time":1749180812000,"email":"poh@empasy.com","author":"poh","message":"이미지 오류 수정"},{"hash":"a96cbbf1f6c96d0e9d6bafa4174131f10429b849","time":1749179241000,"email":"poh@empasy.com","author":"poh","message":"sync 제품군 추가"}]},"filePathRelative":"syncboot/permission/data-permission/hand-coded-data-permissions-no-query-filters-used.md"}');export{o as comp,c as data};
