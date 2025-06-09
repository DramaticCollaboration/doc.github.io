import{_ as n,c as s,a,o as t}from"./app-CC5quYyA.js";const o={};function i(l,e){return t(),s("div",null,e[0]||(e[0]=[a(`<h1 id="log-annotation-autolog" tabindex="-1"><a class="header-anchor" href="#log-annotation-autolog"><span>Log annotation @AutoLog</span></a></h1><blockquote><p>jeecg-boot provides online log management function, which can view all system login and update operations in real time online.<br> jeecg-boot provides two ways to write system logs</p></blockquote><p><strong>Method 1: Custom annotation @AutoLog</strong><br> Add annotation @AutoLog(&quot;operation content description&quot;) to the Control method<br> . Reference:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">     /**</span>
<span class="line">	 *   添加</span>
<span class="line">	 * @param jeecgDemo</span>
<span class="line">	 * @return</span>
<span class="line">	 */</span>
<span class="line">	@RequestMapping(value = &quot;/add&quot;, method = RequestMethod.POST)</span>
<span class="line">	@AutoLog(value = &quot;添加测试DEMO&quot;)</span>
<span class="line">	public Result&lt;JeecgDemo&gt; add(@RequestBody JeecgDemo jeecgDemo) {</span>
<span class="line">		Result&lt;JeecgDemo&gt; result = new Result&lt;JeecgDemo&gt;();</span>
<span class="line">		try {</span>
<span class="line">			jeecgDemoService.save(jeecgDemo);</span>
<span class="line">			result.success(&quot;添加成功！&quot;);</span>
<span class="line">		} catch (Exception e) {</span>
<span class="line">			e.printStackTrace();</span>
<span class="line">			log.info(e.getMessage());</span>
<span class="line">			result.error500(&quot;操作失败&quot;);</span>
<span class="line">		}</span>
<span class="line">		return result;</span>
<span class="line">	}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p><strong>Method 2: Call the common API to insert logs (new version)</strong></p><p>a. Introducing common services</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">@Autowired</span>
<span class="line">private BaseCommonService  baseCommonService  ;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>b. Call the insert log method</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">baseCommonService.addLog(&quot;登录失败，用户名:&quot;+username+&quot;不存在！&quot;, CommonConstant.LOG_TYPE_1, null);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>copy</p>`,12)]))}const r=n(o,[["render",i]]),d=JSON.parse('{"path":"/syncboot/common-annotations/log-annotation-autoLog.html","title":"Log annotation @AutoLog","lang":"ko-KR","frontmatter":{"order":3},"git":{"updatedTime":1749510202000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"e8d2845a48d72a49b99a62ed0e9511823ff14831","time":1749510202000,"email":"poh@empasy.com","author":"poh","message":"로고 alt text 변경"}]},"filePathRelative":"syncboot/common-annotations/log-annotation-autoLog.md"}');export{r as comp,d as data};
