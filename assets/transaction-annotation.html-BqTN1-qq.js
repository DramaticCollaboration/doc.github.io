import{_ as s,c as e,a,o as t}from"./app-CC5quYyA.js";const i={};function l(o,n){return t(),e("div",null,n[0]||(n[0]=[a(`<h1 id="transaction-annotation" tabindex="-1"><a class="header-anchor" href="#transaction-annotation"><span>Transaction Annotation</span></a></h1><blockquote><p>jeecg-boot uses annotation transactions, and transactions are controlled at the service level.<br> Annotation: @Transactional</p></blockquote><p>How to add a transaction? =&gt; Just add the @Transactional annotation to the corresponding method of the service. For details, refer to the following code:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">    /**</span>
<span class="line">	 * 事务控制在service层面</span>
<span class="line">	 * 加上注解：@Transactional，声明的方法就是一个独立的事务（有异常DB操作全部回滚）</span>
<span class="line">	 */</span>
<span class="line">	@Transactional</span>
<span class="line">	public void testTran() {</span>
<span class="line">		JeecgDemo pp = new JeecgDemo();</span>
<span class="line">		pp.setAge(1111);</span>
<span class="line">		pp.setName(&quot;测试事务  小白兔 1&quot;);</span>
<span class="line">		jeecgDemoMapper.insert(pp);</span>
<span class="line"></span>
<span class="line">		JeecgDemo pp2 = new JeecgDemo();</span>
<span class="line">		pp2.setAge(2222);</span>
<span class="line">		pp2.setName(&quot;测试事务  小白兔 2&quot;);</span>
<span class="line">		jeecgDemoMapper.insert(pp2);</span>
<span class="line"></span>
<span class="line">		Integer.parseInt(&quot;hello&quot;);//自定义异常</span>
<span class="line"></span>
<span class="line">		JeecgDemo pp3 = new JeecgDemo();</span>
<span class="line">		pp3.setAge(3333);</span>
<span class="line">		pp3.setName(&quot;测试事务  小白兔 3&quot;);</span>
<span class="line">		jeecgDemoMapper.insert(pp3);</span>
<span class="line">		return ;</span>
<span class="line">	}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p>`,5)]))}const p=s(i,[["render",l]]),r=JSON.parse('{"path":"/syncboot/common-annotations/transaction-annotation.html","title":"Transaction Annotation","lang":"ko-KR","frontmatter":{"order":5},"git":{"updatedTime":1749510202000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"e8d2845a48d72a49b99a62ed0e9511823ff14831","time":1749510202000,"email":"poh@empasy.com","author":"poh","message":"로고 alt text 변경"}]},"filePathRelative":"syncboot/common-annotations/transaction-annotation.md"}');export{p as comp,r as data};
