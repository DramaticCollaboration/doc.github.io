import{_ as s,c as a,a as n,o as t}from"./app-DGEuurYf.js";const i={};function l(r,e){return t(),a("div",null,e[0]||(e[0]=[n(`<h1 id="distributed-transaction-seata-integration" tabindex="-1"><a class="header-anchor" href="#distributed-transaction-seata-integration"><span>Distributed transaction Seata integration</span></a></h1><h2 id="prepare-the-environment" tabindex="-1"><a class="header-anchor" href="#prepare-the-environment"><span><strong>Prepare the environment</strong></span></a></h2><ol><li>Create four databases as follows</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">jeecg_order（订单数据库）</span>
<span class="line">jeecg_account（账户数据库）</span>
<span class="line">jeecg_product（商品数据库）</span>
<span class="line">seata（seata数据库）</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>The above database script has been stored in the jeecg-cloud-test-seata example. The file location is shown in the figure below.<br><img src="https://lfs.k.topthink.com/lfs/47dc02c3fac2edc3629c96cdbafab9a832dde7c37f922b59dd22ec6bff1d743e.dat" alt=""><br><img src="https://lfs.k.topthink.com/lfs/42da72534145eed89667a172bc283bdda60d17f4667ce3409f1c42ae713b3de7.dat" alt=""><br><img src="https://lfs.k.topthink.com/lfs/3e1d8b6e34ff5949d41f81449c60396cd714bb20a00fdc0867f5601875e09830.dat" alt=""><br><img src="https://lfs.k.topthink.com/lfs/f2ef165c8690d16a8bf81eb9795613ec449d2890896d7ada70a78516fe2f79ee.dat" alt=""></p><ol start="2"><li><p>Sample code:<br> jeecg-cloud-test-seata-order (order service)<br> jeecg-cloud-test-seata-product (inventory service)<br> jeecg-cloud-test-seata-account (account service)<br> This sample scenario is used to check whether the inventory is sufficient and the balance is sufficient when placing an order. If one of the conditions is not met, the transaction is rolled back.</p></li><li><p>Seata server: The version of Seata used in this practice is v1.4.2. Download it from <a href="http://seata.io/zh-cn/blog/download.html" target="_blank" rel="noopener noreferrer">http://seata.io/zh-cn/blog/download.html.</a><br> Install the server,<br> download it and unzip it. The directory structure is as follows:<br><img src="https://lfs.k.topthink.com/lfs/c96e87c7cba2a64f731a3a40d3fca403a53ad426123dc3361299fa1b03e10f26.dat" alt=""></p></li></ol><p>Enter the bin directory and start seata. The default port of seata is 8091.<br><img src="https://lfs.k.topthink.com/lfs/cc7e1cce2499681678e9065627460f0bfcd1a0d805a26793a74a5965fb00bb50.dat" alt=""></p><p>Run under Windows <code>seata-server.bat</code><br> Run under Linux<code>seata-server.sh</code></p><h2 id="testing-distributed-transactions" tabindex="-1"><a class="header-anchor" href="#testing-distributed-transactions"><span><strong>Testing distributed transactions</strong></span></a></h2><ol><li><p>Modify the file.conf file (if you need to use nacos, modify type=nacos), as shown below<br><img src="https://lfs.k.topthink.com/lfs/4b6c08ab02021d9404770e39198d7e1e214dab7e885623bfd05e77f827654eb3.dat" alt=""></p></li><li><p>Modify registry.conf (if you need to use nacos, modify type=nacos), as shown below<br><img src="https://lfs.k.topthink.com/lfs/0c3e7ec98282b80db79ecefa8f785f463ca31eedb33b158258e9b9f7c438adbe.dat" alt=""><br><img src="https://lfs.k.topthink.com/lfs/4260840ab08b826679ee162373f204b68f27a7601dcf55d3de65bbf5d81c0801.dat" alt=""></p></li><li><p>Start seata, as shown below<br><img src="https://lfs.k.topthink.com/lfs/2b242ac069a7b1e05fc55d383a7886a0bb82968cd57b62a9010e4afe7f941d4b.dat" alt=""><br> Enter the following information to indicate successful startup<br><img src="https://lfs.k.topthink.com/lfs/6ed0ea5c8f6f3c535f3ddbc239277e1d7abb690cf45b0096bbfed290165d4cfd.dat" alt=""></p></li></ol><p>4. Add dependencies to the microservice module. Please refer to the sample code for details.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;dependency&gt;</span>
<span class="line">    &lt;groupId&gt;org.jeecgframework.boot&lt;/groupId&gt;</span>
<span class="line">    &lt;artifactId&gt;jeecg-boot-starter-cloud&lt;/artifactId&gt;</span>
<span class="line">    &lt;version&gt;3.1.0&lt;/version&gt;</span>
<span class="line">&lt;/dependency&gt;</span>
<span class="line">&lt;dependency&gt;</span>
<span class="line">    &lt;groupId&gt;org.jeecgframework.boot&lt;/groupId&gt;</span>
<span class="line">    &lt;artifactId&gt;jeecg-boot-starter-seata&lt;/artifactId&gt;</span>
<span class="line">    &lt;version&gt;3.1.0&lt;/version&gt;</span>
<span class="line">&lt;/dependency&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>5. Add configuration to the microservice module, refer to the sample code for details</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">seata:</span>
<span class="line">  enable-auto-data-source-proxy: false</span>
<span class="line">  service:</span>
<span class="line">    grouplist:</span>
<span class="line">      default: 127.0.0.1:8091</span>
<span class="line">    vgroup-mapping:</span>
<span class="line">      springboot-seata-group: default</span>
<span class="line">  # seata 事务组编号 用于TC集群名</span>
<span class="line">  tx-service-group: springboot-seata-group</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>6. Start the test<br> and start<br> jeecg-cloud-test-seata-order (order service),<br> jeecg-cloud-test-seata-product (inventory service), and<br> jeecg-cloud-test-seata-account (account service)<br> in sequence. The startup is completed as shown below<br><img src="https://lfs.k.topthink.com/lfs/1fae147807c9c6f6cd97053c5306c3e115c03da21b7bc82ebda19b73d45c36fd.dat" alt=""><br><a href="http://localhost:5001" target="_blank" rel="noopener noreferrer">Enter http://localhost:5001</a> in the browser to test. As shown in the figure below,<br> the test is normal. See the screenshot for parameters<br><img src="https://lfs.k.topthink.com/lfs/8e52624c0117257a1347a4bbbf361a5359aa00cf4f662841c7757fe10e3d10a0.dat" alt=""><br> Test insufficient balance, test insufficient inventory, and then observe whether the inserted data in the database order table is rolled back</p><p>Note: This example does not go through the gateway, so you need to exclude authentication permissions. Add the following code to ShiroConfig.java</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">//测试模块排除</span>
<span class="line">filterChainDefinitionMap.put(&quot;/test/seata/**&quot;, &quot;anon&quot;);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>You can use nacos as the configuration center of seata<br> to create a new seataServer.properties configuration file with the following content</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line"># 数据存储方式，db代表数据库</span>
<span class="line">store.mode=db</span>
<span class="line">store.db.datasource=druid</span>
<span class="line">store.db.dbType=mysql</span>
<span class="line">store.db.driverClassName=com.mysql.cj.jdbc.Driver</span>
<span class="line">store.db.url=jdbc:mysql://localhost:3300/seata?useUnicode=true&amp;rewriteBatchedStatements=true&amp;serverTimezone=Asia/Seoul</span>
<span class="line">store.db.user=root</span>
<span class="line">store.db.password=root</span>
<span class="line">store.db.minConn=5</span>
<span class="line">store.db.maxConn=30</span>
<span class="line">store.db.globalTable=global_table</span>
<span class="line">store.db.branchTable=branch_table</span>
<span class="line">store.db.queryLimit=100</span>
<span class="line">store.db.lockTable=lock_table</span>
<span class="line">store.db.maxWait=5000</span>
<span class="line"># 事务、日志等配置</span>
<span class="line">server.recovery.committingRetryPeriod=1000</span>
<span class="line">server.recovery.asynCommittingRetryPeriod=1000</span>
<span class="line">server.recovery.rollbackingRetryPeriod=1000</span>
<span class="line">server.recovery.timeoutRetryPeriod=1000</span>
<span class="line">server.maxCommitRetryTimeout=-1</span>
<span class="line">server.maxRollbackRetryTimeout=-1</span>
<span class="line">server.rollbackRetryTimeoutUnlockEnable=false</span>
<span class="line">server.undo.logSaveDays=7</span>
<span class="line">server.undo.logDeletePeriod=86400000</span>
<span class="line"></span>
<span class="line"># 客户端与服务端传输方式</span>
<span class="line">transport.serialization=seata</span>
<span class="line">transport.compressor=none</span>
<span class="line"># 关闭metrics功能，提高性能</span>
<span class="line">metrics.enabled=false</span>
<span class="line">metrics.registryType=compact</span>
<span class="line">metrics.exporterList=prometheus</span>
<span class="line">metrics.exporterPrometheusPort=9898</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p>`,24)]))}const d=s(i,[["render",l]]),o=JSON.parse('{"path":"/syncboot/microservice/common-starter-integration/distributed-transaction-seata-integration.html","title":"Distributed transaction Seata integration","lang":"ko-KR","frontmatter":{"order":7},"git":{"updatedTime":1749179241000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"a96cbbf1f6c96d0e9d6bafa4174131f10429b849","time":1749179241000,"email":"poh@empasy.com","author":"poh","message":"sync 제품군 추가"}]},"filePathRelative":"syncboot/microservice/common-starter-integration/distributed-transaction-seata-integration.md"}');export{d as comp,o as data};
