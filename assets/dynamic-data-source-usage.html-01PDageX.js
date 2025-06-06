import{_ as e,c as s,a as n,o as i}from"./app-CJlkTddN.js";const t={};function l(c,a){return i(),s("div",null,a[0]||(a[0]=[n(`<h1 id="dynamic-data-source-usage" tabindex="-1"><a class="header-anchor" href="#dynamic-data-source-usage"><span>Dynamic data source usage</span></a></h1><p>Druid dynamic data source</p><h3 id="_1-dynamic-data-source-configuration" tabindex="-1"><a class="header-anchor" href="#_1-dynamic-data-source-configuration"><span>1. Dynamic data source configuration</span></a></h3><p>/src/main/resources/application.yml</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">datasource:</span>
<span class="line">   datasource:</span>
<span class="line">          master:</span>
<span class="line">            url: jdbc:mysql://127.0.0.1:3306/jeecg-boot?characterEncoding=UTF-8&amp;useUnicode=true&amp;useSSL=false</span>
<span class="line">            username: root</span>
<span class="line">            password: root</span>
<span class="line">            driver-class-name: com.mysql.jdbc.Driver</span>
<span class="line">          multi-datasource1:</span>
<span class="line">            url: jdbc:mysql://localhost:3306/jeecg-boot2?useUnicode=true&amp;characterEncoding=utf8&amp;autoReconnect=true&amp;zeroDateTimeBehavior=convertToNull&amp;transformedBitIsBoolean=true</span>
<span class="line">            username: root</span>
<span class="line">            password: root</span>
<span class="line">            driver-class-name: com.mysql.jdbc.Driver</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>master is the main data source, the system default data source<br> multi-datasource1: a custom third-party data source, the name of multi-datasource1 can be defined at will</p><h3 id="_2-use-of-dynamic-data-sources" tabindex="-1"><a class="header-anchor" href="#_2-use-of-dynamic-data-sources"><span>2. Use of dynamic data sources</span></a></h3><p>Use @DS to switch data sources.<br> @DS can be annotated on methods and classes, and method annotations take precedence over class annotations.</p><p>Annotate on the service implementation or mapper interface method, but it is strongly not recommended to annotate both the service and mapper at the same time. (It may cause problems)</p><table><thead><tr><th>annotation</th><th>result</th></tr></thead><tbody><tr><td>No @DS</td><td>Default Data Source</td></tr><tr><td>@DS(&quot;dsName&quot;)</td><td>dsName can be a group name or a specific library name.</td></tr></tbody></table><p>Code example:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">@Service</span>
<span class="line">@DS(&quot;multi-datasource1&quot;)</span>
<span class="line">public class JeecgDemoServiceImpl implements JeecgDemoService {</span>
<span class="line"></span>
<span class="line">  @Autowired</span>
<span class="line">  private JdbcTemplate jdbcTemplate;</span>
<span class="line"></span>
<span class="line">  public List&lt;Map&lt;String, Object&gt;&gt; selectAll() {</span>
<span class="line">    return  jdbcTemplate.queryForList(&quot;select * from user&quot;);</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  @Override</span>
<span class="line">  @DS(&quot;multi-datasource2&quot;)</span>
<span class="line">  public List&lt;Map&lt;String, Object&gt;&gt; selectByCondition() {</span>
<span class="line">    return  jdbcTemplate.queryForList(&quot;select * from user where age &gt;10&quot;);</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p>`,14)]))}const d=e(t,[["render",l]]),o=JSON.parse('{"path":"/syncboot/common-annotations/dynamic-data-source-usage.html","title":"Dynamic data source usage","lang":"ko-KR","frontmatter":{"order":7},"git":{"updatedTime":1749179241000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"a96cbbf1f6c96d0e9d6bafa4174131f10429b849","time":1749179241000,"email":"poh@empasy.com","author":"poh","message":"sync 제품군 추가"}]},"filePathRelative":"syncboot/common-annotations/dynamic-data-source-usage.md"}');export{d as comp,o as data};
