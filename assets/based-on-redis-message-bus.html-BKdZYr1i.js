import{_ as s,c as n,a,o as i}from"./app-CGhJnnYK.js";const l={};function d(t,e){return i(),n("div",null,e[0]||(e[0]=[a(`<h1 id="based-on-redis-message-bus" tabindex="-1"><a class="header-anchor" href="#based-on-redis-message-bus"><span>Based on redis message bus</span></a></h1><blockquote><p>This chapter explains the encapsulation of the message bus, also known as the publish-subscribe mechanism, which is used to solve the problem of cross-service or cluster deployment.</p></blockquote><h2 id="implementation-based-on-redis" tabindex="-1"><a class="header-anchor" href="#implementation-based-on-redis"><span>Implementation based on redis</span></a></h2><h3 id="_1-client-sends-message" tabindex="-1"><a class="header-anchor" href="#_1-client-sends-message"><span>1. Client sends message</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">@Autowired</span>
<span class="line">private JeecgRedisClient jeecgRedisClient;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">BaseMap baseMap = new BaseMap();</span>
<span class="line">baseMap.put(&quot;userId&quot;, &quot;&quot;);</span>
<span class="line">baseMap.put(&quot;message&quot;, message);</span>
<span class="line">jeecgRedisClient.sendMessage(WebSocket.REDIS_TOPIC_NAME, baseMap);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="_2-write-a-message-listener" tabindex="-1"><a class="header-anchor" href="#_2-write-a-message-listener"><span>2. Write a message listener</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">@Component(WebSocket.REDIS_TOPIC_NAME)</span>
<span class="line">public class SocketHandler implements JeecgRedisListener {</span>
<span class="line"></span>
<span class="line">    @Autowired</span>
<span class="line">    private WebSocket webSocket;</span>
<span class="line"></span>
<span class="line">    @Override</span>
<span class="line">    public void onMessage(BaseMap map) {</span>
<span class="line">        log.debug(&quot;【Redis发布订阅模式】redis Listener: {}，参数：{}&quot;,WebSocket.REDIS_TOPIC_NAME, map.toString());</span>
<span class="line"></span>
<span class="line">        String userId = map.get(&quot;userId&quot;);</span>
<span class="line">        String message = map.get(&quot;message&quot;);</span>
<span class="line">        if (ObjectUtil.isNotEmpty(userId)) {</span>
<span class="line">            //pc端消息推送具体人</span>
<span class="line">            webSocket.pushMessage(userId, message);</span>
<span class="line">            //app端消息推送具体人</span>
<span class="line">            webSocket.pushMessage(userId+CommonSendStatus.APP_SESSION_SUFFIX, message);</span>
<span class="line">        } else {</span>
<span class="line">            //推送全部</span>
<span class="line">            webSocket.pushMessage(message);</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p>`,11)]))}const r=s(l,[["render",d]]),p=JSON.parse('{"path":"/syncboot/microservice/common-starter-integration/based-on-redis-message-bus.html","title":"Based on redis message bus","lang":"ko-KR","frontmatter":{"order":2},"git":{"updatedTime":1749510018000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"b5c965c32dfeaa81de62133194782387bf36abfc","time":1749510018000,"email":"poh@empasy.com","author":"poh","message":"로고 표시 오류 수정"}]},"filePathRelative":"syncboot/microservice/common-starter-integration/based-on-redis-message-bus.md"}');export{r as comp,p as data};
