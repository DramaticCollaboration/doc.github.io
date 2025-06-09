import{_ as n,c as e,a,o as i}from"./app-CGhJnnYK.js";const l={};function c(p,s){return i(),e("div",null,s[0]||(s[0]=[a(`<h1 id="websocket-message-push-modification" tabindex="-1"><a class="header-anchor" href="#websocket-message-push-modification"><span>Websocket message push modification</span></a></h1><p>WebSocket supports sending messages to both the app and the PC at the same time</p><h4 id="_1-websocket-operation-class" tabindex="-1"><a class="header-anchor" href="#_1-websocket-operation-class"><span>(1) WebSocket operation class</span></a></h4><blockquote><p>By modifying this type of WebSocket, you can push messages to multiple terminals for the same user</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">@Component</span>
<span class="line">@Slf4j</span>
<span class="line">@ServerEndpoint(&quot;/websocket/{userId}&quot;)</span>
<span class="line">public class WebSocket {</span>
<span class="line">     //省略部分代码</span>
<span class="line"></span>
<span class="line">     //1.增加app端标识</span>
<span class="line">     private String APP_SESSION_SUFFIX = &quot;_app&quot;;</span>
<span class="line"></span>
<span class="line">    // 2.修改单点消息方法</span>
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
<span class="line">        //--------3.增加APP端消息推送--------</span>
<span class="line">         Session session_app = sessionPool.get(userId+APP_SESSION_SUFFIX );</span>
<span class="line">        if (session_app != null&amp;&amp;session_app .isOpen()) {</span>
<span class="line">            try {</span>
<span class="line">            	log.info(&quot;【websocket移动端消息】 单点消息:&quot;+message);</span>
<span class="line">                session_app .getAsyncRemote().sendText(message);</span>
<span class="line">            } catch (Exception e) {</span>
<span class="line">                e.printStackTrace();</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">       //省略部分代码</span>
<span class="line"></span>
<span class="line">      //------其他类似方法修改同上----------</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="using-websocket-in-front-end-uniapp" tabindex="-1"><a class="header-anchor" href="#using-websocket-in-front-end-uniapp"><span>Using WebSocket in front-end uniapp</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;script&gt;</span>
<span class="line">    //引用socket.js</span>
<span class="line">    import socket from &#39;@/common/js-sdk/socket/socket.js&#39;</span>
<span class="line"></span>
<span class="line">    export default {</span>
<span class="line">        data() {</span>
<span class="line">            return {</span>
<span class="line">            }</span>
<span class="line">        },</span>
<span class="line">        mounted() {</span>
<span class="line">              //初始化websocket</span>
<span class="line">              this.onSocketOpen()</span>
<span class="line">              this.onSocketReceive()</span>
<span class="line">        },</span>
<span class="line">        destroyed: function () { // 离开页面生命周期函数</span>
<span class="line">              socket.closeSocket()</span>
<span class="line">        },</span>
<span class="line">        methods: {</span>
<span class="line">              onSocketOpen: function () {</span>
<span class="line">                // WebSocket与普通的请求所用协议有所不同，ws等同于http，wss等同于https</span>
<span class="line">                socket.init(&#39;websocket&#39;); //对应要连接的socket</span>
<span class="line">              },</span>
<span class="line">              onSocketReceive: function () {</span>
<span class="line">                   var _this=this</span>
<span class="line">                   socket.acceptMessage = function(res){</span>
<span class="line">    					// console.log(&quot;页面收到的消息&quot;, res);</span>
<span class="line">    					if(res.cmd == &quot;topic&quot;){</span>
<span class="line">    					  //系统通知</span>
<span class="line">    					}else if(res.cmd == &quot;user&quot;){</span>
<span class="line">    					  //用户消息</span>
<span class="line">    					} else if(res.cmd == &#39;email&#39;){</span>
<span class="line">    					 //邮件消息</span>
<span class="line">    					}</span>
<span class="line">    			}</span>
<span class="line">              }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>Modification of the socket.js connection URL code</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">init(socket_type,callback) {</span>
<span class="line">		//省略部分代码</span>
<span class="line">     let url=this.socketUrl.replace(&quot;https://&quot;,&quot;wss://&quot;).replace(&quot;http://&quot;,&quot;ws://&quot;)</span>
<span class="line">               +&quot;/&quot;+socket_type+&quot;/&quot;+store.state.userid+&quot;_app&quot;;</span>
<span class="line">		//省略部分代码</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">//相关参数</span>
<span class="line">socketUrl ：对应api地址</span>
<span class="line">socket_type ：对应你要连接的是哪个websocket</span>
<span class="line">&quot;_app&quot;  ：标识这是移动端</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p>`,12)]))}const d=n(l,[["render",c]]),o=JSON.parse('{"path":"/syncboot/app-development/practical-functions/websocket-message-push-modification.html","title":"Websocket message push modification","lang":"ko-KR","frontmatter":{"order":4},"git":{"updatedTime":1749510018000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"b5c965c32dfeaa81de62133194782387bf36abfc","time":1749510018000,"email":"poh@empasy.com","author":"poh","message":"로고 표시 오류 수정"}]},"filePathRelative":"syncboot/app-development/practical-functions/websocket-message-push-modification.md"}');export{d as comp,o as data};
