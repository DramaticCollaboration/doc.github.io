import{_ as e,c as s,a,o as i}from"./app-CGhJnnYK.js";const l={};function o(t,n){return i(),s("div",null,n[0]||(n[0]=[a(`<h1 id="jar-deployment-solution" tabindex="-1"><a class="header-anchor" href="#jar-deployment-solution"><span>JAR deployment solution</span></a></h1><blockquote><p>Version: 3.5+</p></blockquote><h2 id="server-recommendations" tabindex="-1"><a class="header-anchor" href="#server-recommendations"><span>Server Recommendations</span></a></h2><blockquote><p>Recommended general server configuration: 4 cores + 8G memory + 50G hard disk. Of course, the higher the configuration, the better, and you <code>2核/4GB</code>can also run it to save costs;</p></blockquote><h2 id="formal-environment-deployment" tabindex="-1"><a class="header-anchor" href="#formal-environment-deployment"><span>Formal environment deployment</span></a></h2><blockquote><ul><li>Backend services run as JAR</li><li>Dist of front-end project build is deployed to nginx</li></ul></blockquote><h3 id="_1-jar-package-of-jeecg-boot-project" tabindex="-1"><a class="header-anchor" href="#_1-jar-package-of-jeecg-boot-project"><span>1. JAR package of jeecg-boot project</span></a></h3><ul><li>1. Modify the configuration file application-prod.yml</li></ul><blockquote><p>Modify database connection, cache redis, upload attachments and other configurations</p></blockquote><ul><li><p>2. Switch Maven to production mode</p></li><li><p>3. Packaging through jeecg-boot-parent</p></li><li><p>4. Get <code>jeecg-system-start-{版本号}.jar</code>the package</p></li></ul><h3 id="_2-start-the-backend-through-jar" tabindex="-1"><a class="header-anchor" href="#_2-start-the-backend-through-jar"><span>2. Start the backend through JAR</span></a></h3><p>Start the project by command</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">Window启动命令：</span>
<span class="line">java -jar jeecg-system-start-3.5.0.jar</span>
<span class="line"></span>
<span class="line">Linux下后台进程启动命令：</span>
<span class="line">nohup java -jar jeecg-system-start-3.5.0.jar &gt;catalina.out 2&gt;&amp;1 &amp;</span>
<span class="line"></span>
<span class="line">关掉项目：</span>
<span class="line">ps -ef|grep java</span>
<span class="line">kill 进程号</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="_3-deploy-vue3-front-end-through-nginx" tabindex="-1"><a class="header-anchor" href="#_3-deploy-vue3-front-end-through-nginx"><span>3. Deploy Vue3 front-end through nginx</span></a></h3><h4 id="_3-1-nginx-configuration-front-end" tabindex="-1"><a class="header-anchor" href="#_3-1-nginx-configuration-front-end"><span>3.1 nginx configuration front end</span></a></h4><p>Configuration instructions:</p><ul><li><code>boot3.jeecg.com</code>This is the official Vue3 front-end demo address. Please <code>boot3.jeecg.com</code>replace all the following with your own front-end domain name.</li><li><code>/jeecgboot/</code>The following <code>proxy_pass</code>corresponds to <code>通过 nginx 配置请求转发到后台接口</code></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">upstream boot3.jeecg.com {</span>
<span class="line">  server 127.0.0.1:80;</span>
<span class="line"> }</span>
<span class="line">server {</span>
<span class="line">    listen       80;</span>
<span class="line">    server_name  boot3.jeecg.com;</span>
<span class="line">    #前端打的dist资源存放目录</span>
<span class="line">    root		 /srv/www/project;</span>
<span class="line"></span>
<span class="line">    location / {</span>
<span class="line">         # 用于配合 browserHistory使用</span>
<span class="line">		 try_files $uri $uri/ /index.html;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">	location  /jeecgboot/ {</span>
<span class="line">		#后台接口地址(我们部署去掉了/jeecg-boot项目名，如果你有请加上）</span>
<span class="line">		proxy_pass         http://127.0.0.1:8080/;</span>
<span class="line">		proxy_redirect off;</span>
<span class="line">		#真实IP获取</span>
<span class="line">		proxy_set_header  Host             $host;</span>
<span class="line">		proxy_set_header  X-Real-IP        $remote_addr;</span>
<span class="line">		set $my_proxy_add_x_forwarded_for $proxy_add_x_forwarded_for;</span>
<span class="line">		if ($proxy_add_x_forwarded_for ~* &quot;127.0.0.1&quot;){</span>
<span class="line">		   set $my_proxy_add_x_forwarded_for $remote_addr;</span>
<span class="line">		}</span>
<span class="line">		proxy_set_header   X-Forwarded-For $my_proxy_add_x_forwarded_for;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    error_page   500 502 503 504  /50x.html;</span>
<span class="line">    location = /50x.html {</span>
<span class="line">        root   html;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h4 id="_3-2-front-end-dist-location-description" tabindex="-1"><a class="header-anchor" href="#_3-2-front-end-dist-location-description"><span>3.2 Front-end dist location description</span></a></h4><p>Put the dist content <code>/srv/www/project</code>in the directory of the server.<br><code>/srv/www/project</code>Customization is allowed, but it needs to be consistent with the configuration in nginx.</p><h3 id="_4-access-the-application" tabindex="-1"><a class="header-anchor" href="#_4-access-the-application"><span>4. Access the application</span></a></h3><p>Access the project via: <a href="#!">http://your domain name</a> , the following page will appear, use the account/password: admin/123456 to log in successfully</p><h3 id="_5-backend-configuration-of-independent-api-domain-name-nginx-mapping" tabindex="-1"><a class="header-anchor" href="#_5-backend-configuration-of-independent-api-domain-name-nginx-mapping"><span>5. Backend configuration of independent API domain name (nginx mapping)</span></a></h3><ul><li>nginx listens on port 80</li><li>Bind domain name (example): api3.boot.jeecg.com</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">    upstream api3.boot.jeecg.com {</span>
<span class="line">      server 127.0.0.1:8080;</span>
<span class="line">     }</span>
<span class="line"></span>
<span class="line">    server {</span>
<span class="line">        listen       80;</span>
<span class="line">        server_name  api3.boot.jeecg.com;</span>
<span class="line">        location / {</span>
<span class="line">            root   html;</span>
<span class="line">            index  index.html index.htm;</span>
<span class="line">			proxy_pass  http://api3.boot.jeecg.com;</span>
<span class="line"></span>
<span class="line">			#ip remote_addr</span>
<span class="line">			proxy_set_header X-Forwarded-Scheme  $scheme;</span>
<span class="line">			proxy_redirect    off;</span>
<span class="line">			proxy_set_header  Host             $host;</span>
<span class="line">			proxy_set_header  X-Real-IP        $remote_addr;</span>
<span class="line">			proxy_set_header  X-Forwarded-For  $proxy_add_x_forwarded_for;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="_6-websocket-configuration" tabindex="-1"><a class="header-anchor" href="#_6-websocket-configuration"><span>6. Websocket Configuration</span></a></h3><blockquote><p>Reminder: Some versions of nginx configuration require the addition of Upgrade and Connection protocol headers, otherwise WebSocket will fail with 404.</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line"> #支持websocket得这么写，不然CentOS上可能失败</span>
<span class="line"> # proxy_http_version 1.1;</span>
<span class="line"> proxy_set_header Upgrade $http_upgrade;</span>
<span class="line"> proxy_set_header Connection &quot;upgrade&quot;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p>`,32)]))}const d=e(l,[["render",o]]),c=JSON.parse('{"path":"/syncboot/release/jar-deployment-solution.html","title":"JAR deployment solution","lang":"ko-KR","frontmatter":{"order":3},"git":{"updatedTime":1749510018000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"b5c965c32dfeaa81de62133194782387bf36abfc","time":1749510018000,"email":"poh@empasy.com","author":"poh","message":"로고 표시 오류 수정"}]},"filePathRelative":"syncboot/release/jar-deployment-solution.md"}');export{d as comp,c as data};
