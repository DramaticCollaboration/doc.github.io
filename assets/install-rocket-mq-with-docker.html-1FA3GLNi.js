import{_ as e,c as n,a,o as i}from"./app-CGhJnnYK.js";const l={};function c(r,s){return i(),n("div",null,s[0]||(s[0]=[a(`<h1 id="install-rocketmq-with-docker" tabindex="-1"><a class="header-anchor" href="#install-rocketmq-with-docker"><span>Install RocketMQ with Docker</span></a></h1><blockquote><p>Docker Compose deploys RocketMQ</p></blockquote><h4 id="_1-write-docker-compose" tabindex="-1"><a class="header-anchor" href="#_1-write-docker-compose"><span>1. Write docker-compose</span></a></h4><p>Copy the following content and create <code>docker-compose.yml</code>a file</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">version: &#39;3.8&#39;</span>
<span class="line"></span>
<span class="line">services:</span>
<span class="line">  namesrv:</span>
<span class="line">    image: registry.cn-hangzhou.aliyuncs.com/jeecgdocker/rocketmq:4.9.6</span>
<span class="line">    container_name: rmqnamesrv</span>
<span class="line">    ports:</span>
<span class="line">      - 9876:9876</span>
<span class="line">    networks:</span>
<span class="line">      - rocketmq</span>
<span class="line">    command: sh mqnamesrv</span>
<span class="line"></span>
<span class="line">  broker:</span>
<span class="line">    image: registry.cn-hangzhou.aliyuncs.com/jeecgdocker/rocketmq:4.9.6</span>
<span class="line">    container_name: rmqbroker</span>
<span class="line">    ports:</span>
<span class="line">      - 10909:10909</span>
<span class="line">      - 10911:10911</span>
<span class="line">      - 10912:10912</span>
<span class="line">    environment:</span>
<span class="line">      - NAMESRV_ADDR=namesrv:9876</span>
<span class="line">    depends_on:</span>
<span class="line">      - namesrv</span>
<span class="line">    networks:</span>
<span class="line">      - rocketmq</span>
<span class="line">    command: sh mqbroker</span>
<span class="line"></span>
<span class="line">  dashboard:</span>
<span class="line">    image: registry.cn-hangzhou.aliyuncs.com/jeecgdocker/rocketmq-dashboard:latest</span>
<span class="line">    container_name: rmqdashboard</span>
<span class="line">    ports:</span>
<span class="line">      - 8080:8080</span>
<span class="line">    environment:</span>
<span class="line">      - JAVA_OPTS=-Drocketmq.namesrv.addr=namesrv:9876</span>
<span class="line">    depends_on:</span>
<span class="line">      - namesrv</span>
<span class="line">    networks:</span>
<span class="line">      - rocketmq</span>
<span class="line"></span>
<span class="line">networks:</span>
<span class="line">  rocketmq:</span>
<span class="line">    driver: bridge</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h4 id="_2-start-the-rocketmq-cluster" tabindex="-1"><a class="header-anchor" href="#_2-start-the-rocketmq-cluster"><span>2. Start the RocketMQ cluster</span></a></h4><p>Execute the following command to create a RockerMQ cluster according to docker-compose.yml</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">docker-compose up -d</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>copy</p><h4 id="_3-shut-down-the-rocketmq-cluster" tabindex="-1"><a class="header-anchor" href="#_3-shut-down-the-rocketmq-cluster"><span>3. Shut down the RocketMQ cluster</span></a></h4><p>Shut down all services according to the docker-compose.yml file.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">docker-compose down</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>copy</p><h4 id="_4-access-the-rocketmq-management-interface" tabindex="-1"><a class="header-anchor" href="#_4-access-the-rocketmq-management-interface"><span>4. Access the RocketMQ management interface</span></a></h4>`,15)]))}const t=e(l,[["render",c]]),o=JSON.parse('{"path":"/syncboot/docker/install-rocket-mq-with-docker.html","title":"Install RocketMQ with Docker","lang":"ko-KR","frontmatter":{"order":10},"git":{"updatedTime":1749510018000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"b5c965c32dfeaa81de62133194782387bf36abfc","time":1749510018000,"email":"poh@empasy.com","author":"poh","message":"로고 표시 오류 수정"}]},"filePathRelative":"syncboot/docker/install-rocket-mq-with-docker.md"}');export{t as comp,o as data};
