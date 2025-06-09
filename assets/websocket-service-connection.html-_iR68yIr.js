import{_ as s,c as n,a,o as i}from"./app-CGhJnnYK.js";const t={};function c(l,e){return i(),n("div",null,e[0]||(e[0]=[a(`<h1 id="websocket-service-connection" tabindex="-1"><a class="header-anchor" href="#websocket-service-connection"><span>Websocket service connection</span></a></h1><blockquote><p>After the project is connected to Websocket, business connection is realized. Through the background business connection, the corresponding business message is pushed to the client, and the client processes the corresponding business message</p></blockquote><h3 id="system-notification-business-connection-example" tabindex="-1"><a class="header-anchor" href="#system-notification-business-connection-example"><span>System Notification Business Connection Example</span></a></h3><p>In system notification management, administrators can send two types of messages: all users and specified users.</p><p>The message sent is a json string</p><h4 id="_1-calling-the-websocket-service" tabindex="-1"><a class="header-anchor" href="#_1-calling-the-websocket-service"><span>(1) Calling the WebSocket service</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">@Resource</span>
<span class="line">private WebSocket webSocket;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h4 id="_2-calling-in-method" tabindex="-1"><a class="header-anchor" href="#_2-calling-in-method"><span>(2) Calling in method</span></a></h4><blockquote><p>cmd is the service type. For example, topic indicates system messages, and user indicates user messages. You can customize the cmd type. The client processes different service responses based on the returned cmd type.</p></blockquote><p><strong>Send to all</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">//创建业务消息信息</span>
<span class="line">JSONObject obj = new JSONObject();</span>
<span class="line">obj.put(&quot;cmd&quot;, &quot;topic&quot;);//业务类型</span>
<span class="line">obj.put(&quot;msgId&quot;, sysAnnouncement.getId());//消息id</span>
<span class="line">obj.put(&quot;msgTxt&quot;, sysAnnouncement.getTitile());//消息内容</span>
<span class="line">//全体发送</span>
<span class="line">webSocket.sendAllMessage(obj.toJSONString());</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p><strong>Send by a single user</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">//创建业务消息信息</span>
<span class="line">JSONObject obj = new JSONObject();</span>
<span class="line">obj.put(&quot;cmd&quot;, &quot;user&quot;);//业务类型</span>
<span class="line">obj.put(&quot;msgId&quot;, sysAnnouncement.getId());//消息id</span>
<span class="line">obj.put(&quot;msgTxt&quot;, sysAnnouncement.getTitile());//消息内容</span>
<span class="line">//单个用户发送 (userId为用户id)</span>
<span class="line">webSocket.sendOneMessage(userId, obj.toJSONString());</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p><strong>Multiple users send</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">//创建业务消息信息</span>
<span class="line">JSONObject obj = new JSONObject();</span>
<span class="line">obj.put(&quot;cmd&quot;, &quot;user&quot;);//业务类型</span>
<span class="line">obj.put(&quot;msgId&quot;, sysAnnouncement.getId());//消息id</span>
<span class="line">obj.put(&quot;msgTxt&quot;, sysAnnouncement.getTitile());//消息内容</span>
<span class="line">//多个用户发送 (userIds为多个用户id，逗号‘,’分隔)</span>
<span class="line">webSocket.sendMoreMessage(userIds, obj.toJSONString());</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h4 id="_3-the-vue-client-processes-different-business-responses-according-to-the-returned-cmd-type" tabindex="-1"><a class="header-anchor" href="#_3-the-vue-client-processes-different-business-responses-according-to-the-returned-cmd-type"><span>(3) The Vue client processes different business responses according to the returned cmd type</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">websocketonmessage: function (e) {</span>
<span class="line">        console.log(&quot;-----接收消息-------&quot;,e.data);</span>
<span class="line">        var data = eval(&quot;(&quot; + e.data + &quot;)&quot;); //解析json对象</span>
<span class="line">        if(data.cmd == &quot;topic&quot;){</span>
<span class="line">          //TODO 系统通知</span>
<span class="line"></span>
<span class="line">        }else if(data.cmd == &quot;user&quot;){</span>
<span class="line">          //TODO 用户消息</span>
<span class="line"></span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">},</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p>`,22)]))}const d=s(t,[["render",c]]),r=JSON.parse('{"path":"/syncboot/advanced-features/websocket-service-connection.html","title":"Websocket service connection","lang":"ko-KR","frontmatter":{"order":12},"git":{"updatedTime":1749510018000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"b5c965c32dfeaa81de62133194782387bf36abfc","time":1749510018000,"email":"poh@empasy.com","author":"poh","message":"로고 표시 오류 수정"}]},"filePathRelative":"syncboot/advanced-features/websocket-service-connection.md"}');export{d as comp,r as data};
