import{_ as n,c as s,a,o as i}from"./app-CU20V-HQ.js";const l={};function t(r,e){return i(),s("div",null,e[0]||(e[0]=[a(`<h1 id="front-end-vue3-construction" tabindex="-1"><a class="header-anchor" href="#front-end-vue3-construction"><span>Front-end vue3 construction</span></a></h1><blockquote><p>This document is the simplest and quickest deployment document</p></blockquote><h2 id="_1-configure-the-backend-interface-and-compile-the-project" tabindex="-1"><a class="header-anchor" href="#_1-configure-the-backend-interface-and-compile-the-project"><span>1. Configure the backend interface and compile the project</span></a></h2><ol><li>Configure the background interface address</li></ol><ul><li>Revise<code>.env.production</code></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">VITE_GLOB_API_URL=/jeecgboot</span>
<span class="line">VITE_GLOB_DOMAIN_URL=http://api3.boot.jeecg.com</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><blockquote><p>Important reminder: Please <code>api3.boot.jeecg.com</code>change to your own backend domain name.</p></blockquote><ol start="2"><li>Compile and package the project</li></ol><ul><li>Enter the root directory</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">cd jeecgboot-vue3</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>copy</p><ul><li>Package compilation</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">pnpm install</span>
<span class="line">pnpm run build</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><ul><li>Packaging success</li></ul><h2 id="_2-deploy-the-front-end-through-nginx" tabindex="-1"><a class="header-anchor" href="#_2-deploy-the-front-end-through-nginx"><span>2. Deploy the front end through nginx</span></a></h2><p>Important instructions for forwarding requests to the backend interface through nginx configuration :</p><ul><li><code>boot3.jeecg.com</code>This is the official Vue3 front-end demonstration address. Please <code>boot3.jeecg.com</code>replace all the following with your own front-end domain name.</li><li><code>/jeecgboot/</code>This corresponds to <code>步骤一.1</code>the parameter in <code>VITE_GLOB_API_URL</code>, which can be left unchanged to avoid pitfalls.</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">upstream boot3.jeecg.com {</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="_3-front-end-dist-description" tabindex="-1"><a class="header-anchor" href="#_3-front-end-dist-description"><span>3. Front-end dist description</span></a></h2><p>Put the dist content <code>/srv/www/project</code>in the directory of the server.<br><code>/srv/www/project</code>Customization is allowed, but it needs to be consistent with the configuration in nginx.</p><h2 id="_4-modify-the-background-configuration-after-compilation" tabindex="-1"><a class="header-anchor" href="#_4-modify-the-background-configuration-after-compilation"><span>4. Modify the background configuration after compilation</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">dist\\_app.config.js</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>copy</p><h2 id="_5-other-techniques" tabindex="-1"><a class="header-anchor" href="#_5-other-techniques"><span>5. Other Techniques</span></a></h2><ol><li>The front end does not cache HTML to prevent the cache from continuing to take effect after the program is updated</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">    location / {</span>
<span class="line">         # 不缓存html，防止程序更新后缓存继续生效</span>
<span class="line">          if ($request_filename ~* .*\\.(?:htm|html)$) {</span>
<span class="line">            add_header Cache-Control &quot;private, no-store, no-cache, must-revalidate, proxy-revalidate&quot;;</span>
<span class="line">            access_log on;</span>
<span class="line">          }</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p>`,30)]))}const d=n(l,[["render",t]]),c=JSON.parse('{"path":"/syncboot/release/front-end-vue3-construction.html","title":"Front-end vue3 construction","lang":"ko-KR","frontmatter":{"order":2},"git":{"updatedTime":1749507909000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"b750c3240053572cbcbb08ac1e9cd0bd9974af53","time":1749507909000,"email":"poh@empasy.com","author":"poh","message":"build to docs:build"}]},"filePathRelative":"syncboot/release/front-end-vue3-construction.md"}');export{d as comp,c as data};
