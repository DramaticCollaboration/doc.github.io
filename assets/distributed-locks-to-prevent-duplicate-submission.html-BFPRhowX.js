import{_ as s,c as e,a,o as i}from"./app-CGhJnnYK.js";const l={};function t(d,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="distributed-locks-to-prevent-duplicate-submission" tabindex="-1"><a class="header-anchor" href="#distributed-locks-to-prevent-duplicate-submission"><span>Distributed locks to prevent duplicate submission</span></a></h1><h2 id="introducing-distributed-lock-dependency" tabindex="-1"><a class="header-anchor" href="#introducing-distributed-lock-dependency"><span>Introducing distributed lock dependency</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;!-- 引入分布式锁依赖 --&gt;</span>
<span class="line">&lt;dependency&gt;</span>
<span class="line">    &lt;groupId&gt;org.jeecgframework.boot&lt;/groupId&gt;</span>
<span class="line">    &lt;artifactId&gt;jeecg-boot-starter-lock&lt;/artifactId&gt;</span>
<span class="line">&lt;/dependency&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="instructions" tabindex="-1"><a class="header-anchor" href="#instructions"><span>Instructions</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">/**</span>
<span class="line"> * 测试重复提交</span>
<span class="line"> */</span>
<span class="line">@JRepeat(lockKey = &quot;#name&quot;, lockTime = 5)</span>
<span class="line">public void reSubmit(String name) {</span>
<span class="line">    try {</span>
<span class="line">        Thread.sleep(1500);</span>
<span class="line">    } catch (InterruptedException e) {</span>
<span class="line">        e.printStackTrace();</span>
<span class="line">    }</span>
<span class="line">    System.out.println(&quot;提交成功&quot; + name);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="jrepeat-annotation-usage-instructions" tabindex="-1"><a class="header-anchor" href="#jrepeat-annotation-usage-instructions"><span>JRepeat Annotation Usage Instructions</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">    /**</span>
<span class="line">     * 超时时间</span>
<span class="line">     *</span>
<span class="line">     * @return</span>
<span class="line">     */</span>
<span class="line">    int lockTime();</span>
<span class="line">    /**</span>
<span class="line">     * redis 锁key的</span>
<span class="line">     *</span>
<span class="line">     * @return redis 锁key</span>
<span class="line">     */</span>
<span class="line">    String lockKey() default &quot;&quot;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p>`,10)]))}const r=s(l,[["render",t]]),p=JSON.parse('{"path":"/syncboot/common-annotations/distributed-locks-to-prevent-duplicate-submission.html","title":"Distributed locks to prevent duplicate submission","lang":"ko-KR","frontmatter":{"order":10},"git":{"updatedTime":1749510018000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"b5c965c32dfeaa81de62133194782387bf36abfc","time":1749510018000,"email":"poh@empasy.com","author":"poh","message":"로고 표시 오류 수정"}]},"filePathRelative":"syncboot/common-annotations/distributed-locks-to-prevent-duplicate-submission.md"}');export{r as comp,p as data};
