import{_ as s,c as n,a as i,o as a}from"./app-CU20V-HQ.js";const l={};function t(c,e){return a(),n("div",null,e[0]||(e[0]=[i(`<h1 id="writing-a-microservice-interface" tabindex="-1"><a class="header-anchor" href="#writing-a-microservice-interface"><span>Writing a microservice interface</span></a></h1><blockquote><p>Version: 2.5+</p></blockquote><p>This example uses the service <code>jeecg-system</code>call service <code>jeecg-demo</code>as an example to explain the feign call</p><h2 id="_1-writing-service-interface-in-jeecg-demo" tabindex="-1"><a class="header-anchor" href="#_1-writing-service-interface-in-jeecg-demo"><span>1. Writing service interface in jeecg-demo</span></a></h2><p>Writing an interface</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">public interface JeecgDemoService {</span>
<span class="line">    Result&lt;String&gt; getMessage(String name);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>Writing the implementation class</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">@Service</span>
<span class="line">public class JeecgDemoServiceImpl implements JeecgDemoService {</span>
<span class="line">    @Override</span>
<span class="line">    public Result&lt;String&gt; getMessage(String name) {</span>
<span class="line">        return Result.OK(&quot;Hello&quot; + name);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>Writing service interfaces</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">@RestController</span>
<span class="line">@RequestMapping(&quot;/test&quot;)</span>
<span class="line">public class JeecgDemoProvider {</span>
<span class="line"></span>
<span class="line">    @Resource</span>
<span class="line">    private JeecgDemoService jeecgDemoService;</span>
<span class="line"></span>
<span class="line">    @GetMapping(&quot;/getMessage&quot;)</span>
<span class="line">    public Result&lt;String&gt; getMessage(@RequestParam String name) {</span>
<span class="line">        return jeecgDemoService.getMessage(name);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="_2-write-feign-client-interface-in-jeecg-system" tabindex="-1"><a class="header-anchor" href="#_2-write-feign-client-interface-in-jeecg-system"><span>2. Write feign client interface in jeecg-system</span></a></h2><ol><li><p>Add annotations to the startup class <code>@EnableFeignClients</code> .<br><img src="https://lfs.k.topthink.com/lfs/5cde8df5dd45758ca88da87fdf24b762f2f4cf2138e8c85fc20afaaa2fef2740.dat" alt=""></p></li><li><p>Writing a feign client</p></li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">//jeecg-boot-module-demo模块的服务名是 jeecg-demo</span>
<span class="line">@FeignClient(value = CloudConstant.SERVER_NAME_JEECGDEMO, configuration = FeignConfig.class,fallbackFactory = JeecgTestClientFactory.class)</span>
<span class="line">@Component</span>
<span class="line">public interface JeecgTestClient {</span>
<span class="line">    @GetMapping(value = &quot;/test/getMessage&quot;)</span>
<span class="line">    Result&lt;String&gt; getMessage(@RequestParam(value = &quot;name&quot;,required = false) String name);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><ol start="3"><li>Writing Test Methods</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">@RestController</span>
<span class="line">@RequestMapping(&quot;/sys/test&quot;)</span>
<span class="line">@Api(tags = &quot;feign测试&quot;)</span>
<span class="line">public class JeecgTestFeignTest {</span>
<span class="line"></span>
<span class="line">   //注入feign客户端</span>
<span class="line">   @Autowired</span>
<span class="line">   private JeecgTestClient jeecgTestClient;</span>
<span class="line"></span>
<span class="line">    @GetMapping(&quot;getMessage&quot;)</span>
<span class="line">    @ApiOperation(value = &quot;测试feign&quot;, notes = &quot;测试feign&quot;)</span>
<span class="line">    public Result&lt;String&gt; getMessage() {</span>
<span class="line">        return jeecgTestClient.getMessage(&quot;jeecg-boot&quot;);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p>`,20)]))}const p=s(l,[["render",t]]),d=JSON.parse('{"path":"/syncboot/microservice/practical-skills/writing-a-microservice-interface.html","title":"Writing a microservice interface","lang":"ko-KR","frontmatter":{"order":2},"git":{"updatedTime":1749507909000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"b750c3240053572cbcbb08ac1e9cd0bd9974af53","time":1749507909000,"email":"poh@empasy.com","author":"poh","message":"build to docs:build"}]},"filePathRelative":"syncboot/microservice/practical-skills/writing-a-microservice-interface.md"}');export{p as comp,d as data};
