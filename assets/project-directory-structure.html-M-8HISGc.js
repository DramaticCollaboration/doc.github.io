import{_ as s,c as n,a,o as i}from"./app-CGhJnnYK.js";const t={};function l(c,e){return i(),n("div",null,e[0]||(e[0]=[a(`<h1 id="디렉토리-구조" tabindex="-1"><a class="header-anchor" href="#디렉토리-구조"><span>디렉토리 구조</span></a></h1><h3 id="jeecg-boot-directory-structure" tabindex="-1"><a class="header-anchor" href="#jeecg-boot-directory-structure"><span>jeecg-boot directory structure</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">├─jeecg-boot-parent（父POM： 项目依赖、modules组织）</span>
<span class="line">│  ├─jeecg-boot-base-core（共通模块： 工具类、config、权限、查询过滤器、注解、接口等）</span>
<span class="line">│  ├─jeecg-module-demo    示例代码</span>
<span class="line">│  ├─jeecg-module-system  System系统管理目录</span>
<span class="line">│  │  ├─jeecg-system-biz    System系统管理权限</span>
<span class="line">│  │  ├─jeecg-system-start   单体启动项目(8080)</span>
<span class="line">│  │  ├─jeecg-system-api   System系统管理模块对外api</span>
<span class="line">│  │  │  ├─jeecg-system-cloud-api   System模块对外提供的微服务接口</span>
<span class="line">│  │  │  ├─jeecg-system-local-api   System模块对外提供的单体接口</span>
<span class="line">│  ├─jeecg-server-cloud           --微服务模块</span>
<span class="line">     ├─jeecg-cloud-gateway       --微服务网关模块(9999)</span>
<span class="line">     ├─jeecg-cloud-nacos       --Nacos服务模块(8848)</span>
<span class="line">     ├─jeecg-system-cloud-start  --System微服务启动项目(7001)</span>
<span class="line">     ├─jeecg-demo-cloud-start    --Demo微服务启动项目(7002)</span>
<span class="line">     ├─jeecg-visual</span>
<span class="line">        ├─jeecg-cloud-monitor       --微服务监控模块 (9111)</span>
<span class="line">        ├─jeecg-cloud-xxljob        --微服务xxljob定时任务服务端 (9080)</span>
<span class="line">        ├─jeecg-cloud-sentinel     --sentinel服务端 (9000)</span>
<span class="line">        ├─jeecg-cloud-test           -- 微服务测试示例（各种例子）</span>
<span class="line">           ├─jeecg-cloud-test-more         -- 微服务测试示例（feign、熔断降级、xxljob、分布式锁）</span>
<span class="line">           ├─jeecg-cloud-test-rabbitmq     -- 微服务测试示例（rabbitmq）</span>
<span class="line">           ├─jeecg-cloud-test-seata          -- 微服务测试示例（seata分布式事务）</span>
<span class="line">           ├─jeecg-cloud-test-shardingsphere    -- 微服务测试示例（分库分表）</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="jeecg-boot-starter-directory-structure" tabindex="-1"><a class="header-anchor" href="#jeecg-boot-starter-directory-structure"><span>jeecg-boot-starter directory structure</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">├── jeecg-boot-starter              -- starter父模块</span>
<span class="line">    ├── jeecg-boot-common             -- 底层常量、redis等基础依赖</span>
<span class="line">    ├── jeecg-boot-starter-cloud       -- 微服务启动starter</span>
<span class="line">    ├── jeecg-boot-starter-job           -- xxl-job定时任务starter</span>
<span class="line">    ├── jeecg-boot-starter-lock          -- 分布式锁starter</span>
<span class="line">    ├── jeecg-boot-starter-rabbitmq       -- 消息中间件starter</span>
<span class="line">    ├── jeecg-boot-starter-seata           --分布式事务starter</span>
<span class="line">    ├── jeecg-boot-starter-shardingsphere  -- 分库分表starter</span>
<span class="line">    ├── jeecg-boot-starter-mongon          -- mongon集成starter</span>
<span class="line">    ├──jeecg-boot-starter-chatgpt               -- chatGpt集成start</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p>`,7)]))}const d=s(t,[["render",l]]),o=JSON.parse('{"path":"/syncboot/setup/project-directory-structure.html","title":"디렉토리 구조","lang":"ko-KR","frontmatter":{"order":6},"git":{"updatedTime":1749510018000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"b5c965c32dfeaa81de62133194782387bf36abfc","time":1749510018000,"email":"poh@empasy.com","author":"poh","message":"로고 표시 오류 수정"}]},"filePathRelative":"syncboot/setup/project-directory-structure.md"}');export{d as comp,o as data};
