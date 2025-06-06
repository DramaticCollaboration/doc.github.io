import{_ as n,c as e,a,o as i}from"./app-CJlkTddN.js";const l={};function c(p,s){return i(),e("div",null,s[0]||(s[0]=[a(`<h1 id="websocket-integration" tabindex="-1"><a class="header-anchor" href="#websocket-integration"><span>WebSocket Integration</span></a></h1><blockquote><p>SYNC BOOT adds websocket to enable the server to actively push data to the client, so that the system can push messages to online users, and can send messages to groups or to designated users.</p></blockquote><h4 id="jeecg-boot-integrate-websocket-steps" tabindex="-1"><a class="header-anchor" href="#jeecg-boot-integrate-websocket-steps"><span>jeecg boot integrate websocket steps</span></a></h4><h5 id="_1-maven-dependency" tabindex="-1"><a class="header-anchor" href="#_1-maven-dependency"><span>(1) Maven dependency</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;dependency&gt;</span>
<span class="line">   &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span>
<span class="line">   &lt;artifactId&gt;spring-boot-starter-websocket&lt;/artifactId&gt;</span>
<span class="line">&lt;/dependency&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h4 id="_2-websocket-configuration-class" tabindex="-1"><a class="header-anchor" href="#_2-websocket-configuration-class"><span>(2) WebSocket configuration class</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">package org.jeecg.config;</span>
<span class="line"></span>
<span class="line">import org.springframework.context.annotation.Bean;</span>
<span class="line">import org.springframework.context.annotation.Configuration;</span>
<span class="line">import org.springframework.web.socket.server.standard.ServerEndpointExporter;</span>
<span class="line"></span>
<span class="line">@Configuration</span>
<span class="line">public class WebSocketConfig {</span>
<span class="line">    /**</span>
<span class="line">     * 	注入ServerEndpointExporter，</span>
<span class="line">     * 	这个bean会自动注册使用了@ServerEndpoint注解声明的Websocket endpoint</span>
<span class="line">     */</span>
<span class="line">    @Bean</span>
<span class="line">    public ServerEndpointExporter serverEndpointExporter() {</span>
<span class="line">        return new ServerEndpointExporter();</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h4 id="_3-websocket-operation-class" tabindex="-1"><a class="header-anchor" href="#_3-websocket-operation-class"><span>(3) WebSocket operation class</span></a></h4><blockquote><p>This type of WebSocket can be used for group push and single point push</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">package org.jeecg.modules.message.websocket;</span>
<span class="line"></span>
<span class="line">import java.util.HashMap;</span>
<span class="line">import java.util.Map;</span>
<span class="line">import java.util.concurrent.CopyOnWriteArraySet;</span>
<span class="line"></span>
<span class="line">import javax.websocket.OnClose;</span>
<span class="line">import javax.websocket.OnMessage;</span>
<span class="line">import javax.websocket.OnOpen;</span>
<span class="line">import javax.websocket.Session;</span>
<span class="line">import javax.websocket.server.PathParam;</span>
<span class="line">import javax.websocket.server.ServerEndpoint;</span>
<span class="line"></span>
<span class="line">import org.springframework.stereotype.Component;</span>
<span class="line"></span>
<span class="line">import lombok.extern.slf4j.Slf4j;</span>
<span class="line"></span>
<span class="line">@Component</span>
<span class="line">@Slf4j</span>
<span class="line">@ServerEndpoint(&quot;/websocket/{userId}&quot;)</span>
<span class="line">public class WebSocket {</span>
<span class="line"></span>
<span class="line">    private Session session;</span>
<span class="line"></span>
<span class="line">    private static CopyOnWriteArraySet&lt;WebSocket&gt; webSockets =new CopyOnWriteArraySet&lt;&gt;();</span>
<span class="line">    private static Map&lt;String,Session&gt; sessionPool = new HashMap&lt;String,Session&gt;();</span>
<span class="line"></span>
<span class="line">    @OnOpen</span>
<span class="line">    public void onOpen(Session session, @PathParam(value=&quot;userId&quot;)String userId) {</span>
<span class="line">        try {</span>
<span class="line">			this.session = session;</span>
<span class="line">			webSockets.add(this);</span>
<span class="line">			sessionPool.put(userId, session);</span>
<span class="line">			log.info(&quot;【websocket消息】有新的连接，总数为:&quot;+webSockets.size());</span>
<span class="line">		} catch (Exception e) {</span>
<span class="line">		}</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    @OnClose</span>
<span class="line">    public void onClose() {</span>
<span class="line">        try {</span>
<span class="line">			webSockets.remove(this);</span>
<span class="line">			log.info(&quot;【websocket消息】连接断开，总数为:&quot;+webSockets.size());</span>
<span class="line">		} catch (Exception e) {</span>
<span class="line">		}</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    @OnMessage</span>
<span class="line">    public void onMessage(String message) {</span>
<span class="line">    	log.info(&quot;【websocket消息】收到客户端消息:&quot;+message);</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    // 此为广播消息</span>
<span class="line">    public void sendAllMessage(String message) {</span>
<span class="line">    	log.info(&quot;【websocket消息】广播消息:&quot;+message);</span>
<span class="line">        for(WebSocket webSocket : webSockets) {</span>
<span class="line">            try {</span>
<span class="line">            	if(webSocket.session.isOpen()) {</span>
<span class="line">            		webSocket.session.getAsyncRemote().sendText(message);</span>
<span class="line">            	}</span>
<span class="line">            } catch (Exception e) {</span>
<span class="line">                e.printStackTrace();</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    // 此为单点消息</span>
<span class="line">    public void sendOneMessage(String userId, String message) {</span>
<span class="line">        Session session = sessionPool.get(userId);</span>
<span class="line">        if (session != null&amp;&amp;session.isOpen()) {</span>
<span class="line">            try {</span>
<span class="line">            	log.info(&quot;【websocket消息】 单点消息:&quot;+message);</span>
<span class="line">                session.getAsyncRemote().sendText(message);</span>
<span class="line">            } catch (Exception e) {</span>
<span class="line">                e.printStackTrace();</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    // 此为单点消息(多人)</span>
<span class="line">    public void sendMoreMessage(String[] userIds, String message) {</span>
<span class="line">    	for(String userId:userIds) {</span>
<span class="line">    		Session session = sessionPool.get(userId);</span>
<span class="line">            if (session != null&amp;&amp;session.isOpen()) {</span>
<span class="line">                try {</span>
<span class="line">                	log.info(&quot;【websocket消息】 单点消息:&quot;+message);</span>
<span class="line">                    session.getAsyncRemote().sendText(message);</span>
<span class="line">                } catch (Exception e) {</span>
<span class="line">                    e.printStackTrace();</span>
<span class="line">                }</span>
<span class="line">            }</span>
<span class="line">    	}</span>
<span class="line"></span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="vue-uses-websocket-in-the-front-end" tabindex="-1"><a class="header-anchor" href="#vue-uses-websocket-in-the-front-end"><span>VUE uses WebSocket in the front end</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;script&gt;</span>
<span class="line">    import store from &#39;@/store/&#39;</span>
<span class="line"></span>
<span class="line">    export default {</span>
<span class="line">        data() {</span>
<span class="line">            return {</span>
<span class="line">            }</span>
<span class="line">        },</span>
<span class="line">        mounted() {</span>
<span class="line">              //初始化websocket</span>
<span class="line">              this.initWebSocket()</span>
<span class="line">        },</span>
<span class="line">        destroyed: function () { // 离开页面生命周期函数</span>
<span class="line">              this.websocketclose();</span>
<span class="line">        },</span>
<span class="line">        methods: {</span>
<span class="line">            initWebSocket: function () {</span>
<span class="line">                // WebSocket与普通的请求所用协议有所不同，ws等同于http，wss等同于https</span>
<span class="line">                var userId = store.getters.userInfo.id;</span>
<span class="line">                var url = window._CONFIG[&#39;domianURL&#39;].replace(&quot;https://&quot;,&quot;ws://&quot;).replace(&quot;http://&quot;,&quot;ws://&quot;)+&quot;/websocket/&quot;+userId;</span>
<span class="line">                this.websock = new WebSocket(url);</span>
<span class="line">                this.websock.onopen = this.websocketonopen;</span>
<span class="line">                this.websock.onerror = this.websocketonerror;</span>
<span class="line">                this.websock.onmessage = this.websocketonmessage;</span>
<span class="line">                this.websock.onclose = this.websocketclose;</span>
<span class="line">              },</span>
<span class="line">              websocketonopen: function () {</span>
<span class="line">                console.log(&quot;WebSocket连接成功&quot;);</span>
<span class="line">              },</span>
<span class="line">              websocketonerror: function (e) {</span>
<span class="line">                console.log(&quot;WebSocket连接发生错误&quot;);</span>
<span class="line">              },</span>
<span class="line">              websocketonmessage: function (e) {</span>
<span class="line">                var data = eval(&quot;(&quot; + e.data + &quot;)&quot;);</span>
<span class="line">                 //处理订阅信息</span>
<span class="line">                if(data.cmd == &quot;topic&quot;){</span>
<span class="line">                   //TODO 系统通知</span>
<span class="line"></span>
<span class="line">                }else if(data.cmd == &quot;user&quot;){</span>
<span class="line">                   //TODO 用户消息</span>
<span class="line"></span>
<span class="line">                }</span>
<span class="line">              },</span>
<span class="line">              websocketclose: function (e) {</span>
<span class="line">                console.log(&quot;connection closed (&quot; + e.code + &quot;)&quot;);</span>
<span class="line">              }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p>`,16)]))}const t=n(l,[["render",c]]),r=JSON.parse('{"path":"/syncboot/advanced-features/webSocket-integration.html","title":"WebSocket Integration","lang":"ko-KR","frontmatter":{"order":11},"git":{"updatedTime":1749179241000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"a96cbbf1f6c96d0e9d6bafa4174131f10429b849","time":1749179241000,"email":"poh@empasy.com","author":"poh","message":"sync 제품군 추가"}]},"filePathRelative":"syncboot/advanced-features/webSocket-integration.md"}');export{t as comp,r as data};
