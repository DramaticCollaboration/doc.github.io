import{_ as s,c as n,a,o as t}from"./app-CC5quYyA.js";const l={};function i(o,e){return t(),n("div",null,e[0]||(e[0]=[a(`<h1 id="how-to-develop-scheduled-tasks" tabindex="-1"><a class="header-anchor" href="#how-to-develop-scheduled-tasks"><span>How to develop scheduled tasks?</span></a></h1><blockquote><p>Adopt Quartz distributed cluster scheduling and support online configuration of scheduled tasks</p></blockquote><p>How to use it?<br> Step 1: Customize the job (implementation class org.quartz.Job)</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">/**</span>
<span class="line"> * 示例不带参定时任务</span>
<span class="line"> *</span>
<span class="line"> * @author Scott</span>
<span class="line"> */</span>
<span class="line">@Slf4j</span>
<span class="line">public class SampleJob implements Job {</span>
<span class="line"></span>
<span class="line">	@Override</span>
<span class="line">	public void execute(JobExecutionContext jobExecutionContext) throws JobExecutionException {</span>
<span class="line">	   log.info(String.format(&quot; Jeecg-Boot 普通定时任务 SampleJob !  时间:&quot; + DateUtils.getTimestamp()));</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>Step 2: Configure scheduled tasks online<br><img src="https://lfs.k.topthink.com/lfs/edee834b91e16ed2e75b209c38a1941ced1fec3e7d28e2dafdad94a0df810677.dat" alt=""></p><p>Step 3: Support online management, start and stop<br><img src="https://upload.jeecg.com/jeecg/help/jeecgback/topwrite/assets/image_1687781150621.png" alt=""></p>`,7)]))}const d=s(l,[["render",i]]),p=JSON.parse('{"path":"/syncboot/common-functions/how-to-develop-scheduled-tasks.html","title":"How to develop scheduled tasks?","lang":"ko-KR","frontmatter":{"order":8},"git":{"updatedTime":1749510202000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"e8d2845a48d72a49b99a62ed0e9511823ff14831","time":1749510202000,"email":"poh@empasy.com","author":"poh","message":"로고 alt text 변경"}]},"filePathRelative":"syncboot/common-functions/how-to-develop-scheduled-tasks.md"}');export{d as comp,p as data};
