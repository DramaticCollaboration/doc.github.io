import{_ as l,c as d,a as s,b as a,e as n,d as t,w as r,r as c,o as p}from"./app-CU20V-HQ.js";const o={};function v(m,e){const i=c("RouteLink");return p(),d("div",null,[e[2]||(e[2]=s(`<h1 id="데이타베이스-변경" tabindex="-1"><a class="header-anchor" href="#데이타베이스-변경"><span>데이타베이스 변경</span></a></h1><blockquote><p>Provides Oracle, SqlServer, and Postgresql switching configuration documents</p></blockquote><h2 id="important-prerequisites" tabindex="-1"><a class="header-anchor" href="#important-prerequisites"><span>Important Prerequisites</span></a></h2><p><code>3.6.2+</code>The automatic database upgrade mechanism is added in the version. By default , it only supports MySQL 5.7 and MySQL 8. Therefore <code>flyway</code>, you must turn off the flyway configuration when switching to other databases.<br><code>application-dev.yml\`\`spring.flyway.enabled=false</code></p><p>If you don&#39;t change it, you will get an error.</p><h2 id="_1-oracle-data" tabindex="-1"><a class="header-anchor" href="#_1-oracle-data"><span>1. Oracle Data</span></a></h2><h3 id="_1-1-add-oracle-driver-and-modify-pom-xml" tabindex="-1"><a class="header-anchor" href="#_1-1-add-oracle-driver-and-modify-pom-xml"><span>1.1 Add oracle driver and modify pom.xml</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;!-- oracle驱动 --&gt;</span>
<span class="line">&lt;dependency&gt;</span>
<span class="line">	&lt;groupId&gt;com.oracle&lt;/groupId&gt;</span>
<span class="line">	&lt;artifactId&gt;ojdbc6&lt;/artifactId&gt;</span>
<span class="line">	&lt;version&gt;11.2.0.3&lt;/version&gt;</span>
<span class="line">&lt;/dependency&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="_1-2-modify-database-connection" tabindex="-1"><a class="header-anchor" href="#_1-2-modify-database-connection"><span>1.2 Modify database connection</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">修改druid配置</span>
<span class="line">validationQuery: SELECT 1 FROM DUAL</span>
<span class="line"></span>
<span class="line">driver-class-name: oracle.jdbc.OracleDriver</span>
<span class="line">url: jdbc:oracle:thin:@192.168.1.200:1521:ORCL</span>
<span class="line">username: jeecgboot</span>
<span class="line">password: jeecgboot</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="_2-sql-server-data" tabindex="-1"><a class="header-anchor" href="#_2-sql-server-data"><span>2. SQL server data</span></a></h2><h3 id="_2-1-add-sql-server-driver-and-modify-pom-xml" tabindex="-1"><a class="header-anchor" href="#_2-1-add-sql-server-driver-and-modify-pom-xml"><span>2.1 Add SQL server driver and modify pom.xml</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;!--  sqlserver--&gt;</span>
<span class="line">&lt;dependency&gt;</span>
<span class="line">	&lt;groupId&gt;com.microsoft.sqlserver&lt;/groupId&gt;</span>
<span class="line">	&lt;artifactId&gt;sqljdbc4&lt;/artifactId&gt;</span>
<span class="line">	&lt;version&gt;4.0&lt;/version&gt;</span>
<span class="line">	&lt;scope&gt;runtime&lt;/scope&gt;</span>
<span class="line">&lt;/dependency&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="_2-2-modify-database-connection" tabindex="-1"><a class="header-anchor" href="#_2-2-modify-database-connection"><span>2.2 Modify database connection</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">修改druid配置</span>
<span class="line">validationQuery: SELECT 1</span>
<span class="line">filters: stat,slf4j</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">driver-class-name: com.microsoft.sqlserver.jdbc.SQLServerDriver</span>
<span class="line">url: jdbc:sqlserver://192.168.1.200:1433;SelectMethod=cursor;DatabaseName=jeecg-boot</span>
<span class="line">username: sa</span>
<span class="line">password: SA</span>
<span class="line"></span>
<span class="line">修改JPA加上database-platform参数</span>
<span class="line">jpa:</span>
<span class="line">  open-in-view: false</span>
<span class="line">  database-platform: org.hibernate.dialect.SQLServerDialect</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="_2-3-error-handling-of-scheduled-tasks-under-sqlserver" tabindex="-1"><a class="header-anchor" href="#_2-3-error-handling-of-scheduled-tasks-under-sqlserver"><span>2.3 Error handling of scheduled tasks under sqlserver</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">报错信息org.quartz.impl.jdbcjobstore.LockException: Failure obtaining db row lock: sql injection violation, syntax error: syntax error, not support option : UPDATE, pos 86, line 1, column 80, token UPDATE</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>copy</p><p>Modify the configuration as follows: Configure selectWithLockSQL: SELECT* FROM {0}LOCKS UPDLOCK WHERE LOCK_NAME = ? under jobStore</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">quartz:</span>
<span class="line">  .....省略其他配置.....</span>
<span class="line">  properties:</span>
<span class="line">     org:</span>
<span class="line">       quartz:</span>
<span class="line">          jobStore:</span>
<span class="line">            selectWithLockSQL: SELECT* FROM {0}LOCKS UPDLOCK WHERE LOCK_NAME = ?</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="_2-4-after-starting-sqlserver-if-the-console-keeps-scrolling-as-shown-below" tabindex="-1"><a class="header-anchor" href="#_2-4-after-starting-sqlserver-if-the-console-keeps-scrolling-as-shown-below"><span>2.4 After starting sqlserver, if the console keeps scrolling as shown below</span></a></h3><p>Modifiable configuration files</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">web-stat-filter:</span>
<span class="line">       enabled:false</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="_2-5-sql-server-failed-to-start-reporting-an-error-variant-data-type-is-not-supported" tabindex="-1"><a class="header-anchor" href="#_2-5-sql-server-failed-to-start-reporting-an-error-variant-data-type-is-not-supported"><span>2.5 SQL Server failed to start, reporting an error: &quot;variant&quot; data type is not supported</span></a></h3><p>The problem can be solved by changing the sqlserver version, replacing sqljdbc4 with mssql-jdbc</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;dependency&gt;</span>
<span class="line">   &lt;groupId&gt;com.microsoft.sqlserver&lt;/groupId&gt;</span>
<span class="line">   &lt;artifactId&gt;mssql-jdbc&lt;/artifactId&gt;</span>
<span class="line">   &lt;version&gt;8.2.2.jre8&lt;/version&gt;</span>
<span class="line">&lt;/dependency&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>Error message:</p><p>Modify the dependent jar package:</p><h2 id="_3-postgresql-database" tabindex="-1"><a class="header-anchor" href="#_3-postgresql-database"><span>3. postgresql database</span></a></h2><h3 id="_3-1-add-postgresql-driver-and-modify-pom-xml" tabindex="-1"><a class="header-anchor" href="#_3-1-add-postgresql-driver-and-modify-pom-xml"><span>3.1 Add postgresql driver and modify pom.xml</span></a></h3><p>(Introduce the corresponding version of the driver according to the different versions of the database, download address: <a href="https://jdbc.postgresql.org/download.html" target="_blank" rel="noopener noreferrer">https://jdbc.postgresql.org/download.html</a> )</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;!--  postgresql--&gt;</span>
<span class="line">&lt;dependency&gt;</span>
<span class="line">   &lt;groupId&gt;org.postgresql&lt;/groupId&gt;</span>
<span class="line">   &lt;artifactId&gt;postgresql&lt;/artifactId&gt;</span>
<span class="line">   &lt;version&gt;42.2.6&lt;/version&gt;</span>
<span class="line">&lt;/dependency&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="_3-2-modify-database-connection" tabindex="-1"><a class="header-anchor" href="#_3-2-modify-database-connection"><span>3.2 Modify database connection</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">增加spring下的配置</span>
<span class="line"></span>
<span class="line">spring:</span>
<span class="line">  #postgresql 报错问题</span>
<span class="line">  jpa:</span>
<span class="line">    database-platform: org.hibernate.dialect.PostgreSQLDialect</span>
<span class="line">    properties:</span>
<span class="line">      hibernate:</span>
<span class="line">        temp:</span>
<span class="line">          use_jdbc_metadata_defaults: false</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">修改druid配置</span>
<span class="line">validationQuery: SELECT 1</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">url: jdbc:postgresql://localhost:5432/postgres?stringtype=unspecified</span>
<span class="line">username: postgres</span>
<span class="line">password: root</span>
<span class="line">driver-class-name: org.postgresql.Driver</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>Modify the quartz configuration</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">spring.quartz.properties.org.quartz.jobStore.driverDelegateClass=org.quartz.impl.jdbcjobstore.PostgreSQLDelegate</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>copy</p><h3 id="_3-3-pgsql-custom-scheme" tabindex="-1"><a class="header-anchor" href="#_3-3-pgsql-custom-scheme"><span>3.3 pgsql custom scheme</span></a></h3><p>The url is specified by the scheme, for example:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">jdbc:postgresql://localhost:5432/jeecgboot?currentSchema=demo&amp;stringtype=unspecified</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>copy</p><h2 id="_4-damo-database" tabindex="-1"><a class="header-anchor" href="#_4-damo-database"><span>4. DAMO Database</span></a></h2><h3 id="_4-1-add-the-damo-database-driver-and-modify-pom-xml" tabindex="-1"><a class="header-anchor" href="#_4-1-add-the-damo-database-driver-and-modify-pom-xml"><span>4.1 Add the DAMO database driver and modify pom.xml</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;!--达梦数据库 --&gt;</span>
<span class="line">&lt;dependency&gt;</span>
<span class="line">    &lt;groupId&gt;com.dameng&lt;/groupId&gt;</span>
<span class="line">    &lt;artifactId&gt;Dm8JdbcDriver18&lt;/artifactId&gt;</span>
<span class="line">    &lt;version&gt;8.1.1.49&lt;/version&gt;</span>
<span class="line">&lt;/dependency&gt;</span>
<span class="line">&lt;dependency&gt;</span>
<span class="line">    &lt;groupId&gt;com.dameng&lt;/groupId&gt;</span>
<span class="line">    &lt;artifactId&gt;DmDialect-for-hibernate5.0&lt;/artifactId&gt;</span>
<span class="line">    &lt;version&gt;8.1.1.49&lt;/version&gt;</span>
<span class="line">&lt;/dependency&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="_4-2-modify-database-connection" tabindex="-1"><a class="header-anchor" href="#_4-2-modify-database-connection"><span>4.2 Modify database connection</span></a></h3><ul><li>Modify <code>jpa</code>dialect</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">jpa:</span>
<span class="line">  open-in-view: false</span>
<span class="line">  properties:</span>
<span class="line">    hibernate:</span>
<span class="line">      dialect: org.hibernate.dialect.DmDialect</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><ul><li>If springboot is upgraded to 2.6+, you also need to modify the quartz configuration</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">spring.quartz.jdbc.initialize-schema=never</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>copy</p><ul><li>Add DAMO data source</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">url: jdbc:dm://192.168.1.188:30236/?schema=SYSDBA&amp;compatibleMode=oracle&amp;zeroDateTimeBehavior=convertToNull&amp;useUnicode=true&amp;characterEncoding=utf-8</span>
<span class="line">username: SYSDBA</span>
<span class="line">password: SYSDBA001</span>
<span class="line">driverClassName: dm.jdbc.driver.DmDriver</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="_5-renmin-university-of-china-jincang-database" tabindex="-1"><a class="header-anchor" href="#_5-renmin-university-of-china-jincang-database"><span>5. Renmin University of China Jincang Database</span></a></h2><h3 id="_5-1-add-the-renmin-university-of-china-jincang-database-driver-and-modify-the-pom-file" tabindex="-1"><a class="header-anchor" href="#_5-1-add-the-renmin-university-of-china-jincang-database-driver-and-modify-the-pom-file"><span>5.1 Add the Renmin University of China Jincang database driver and modify the pom file</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;!--    人大金仓驱动    --&gt;</span>
<span class="line">&lt;dependency&gt;</span>
<span class="line">   &lt;groupId&gt;kingbase&lt;/groupId&gt;</span>
<span class="line">   &lt;artifactId&gt;kingbase8&lt;/artifactId&gt;</span>
<span class="line">   &lt;version&gt;8&lt;/version&gt;</span>
<span class="line">   &lt;scope&gt;runtime&lt;/scope&gt;</span>
<span class="line">&lt;/dependency&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="_5-2-modify-database-connection" tabindex="-1"><a class="header-anchor" href="#_5-2-modify-database-connection"><span>5.2 Modify database connection</span></a></h3><ul><li>Modify <code>jpa</code>dialect</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">jpa:</span>
<span class="line">  open-in-view: false</span>
<span class="line">  properties:</span>
<span class="line">    hibernate:</span>
<span class="line">      dialect: org.hibernate.dialect.PostgreSQLDialect</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><ul><li>If springboot is upgraded to 2.6+, you also need to modify the quartz configuration</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">spring.quartz.jdbc.initialize-schema=never</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>copy</p><ul><li>Remove the wall firewall in filters</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">dynamic:</span>
<span class="line">  druid:</span>
<span class="line">    filters: stat,slf4j</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><ul><li>Add Renda Jincang data source</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">url: jdbc:kingbase8://192.168.1.188:4321/test</span>
<span class="line">username: system</span>
<span class="line">password: system</span>
<span class="line">driver-class-name: com.kingbase8.Driver</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="_6-tidb-database" tabindex="-1"><a class="header-anchor" href="#_6-tidb-database"><span>6. TIDB Database</span></a></h2><h3 id="_6-1-add-tidb-driver-and-modify-pom-xml" tabindex="-1"><a class="header-anchor" href="#_6-1-add-tidb-driver-and-modify-pom-xml"><span>6.1 Add TIDB driver and modify pom.xml</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;dependency&gt;</span>
<span class="line">   &lt;groupId&gt;mysql&lt;/groupId&gt;</span>
<span class="line">   &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;</span>
<span class="line">   &lt;version&gt;8.0.27&lt;/version&gt;</span>
<span class="line">   &lt;scope&gt;runtime&lt;/scope&gt;</span>
<span class="line">&lt;/dependency&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="_6-2-modify-database-connection" tabindex="-1"><a class="header-anchor" href="#_6-2-modify-database-connection"><span>6.2 Modify database connection</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">url: jdbc:mysql://127.0.0.1:3306/jeecgboot?characterEncoding=UTF-8&amp;useUnicode=true&amp;useSSL=false&amp;tinyInt1isBit=false&amp;allowPublicKeyRetrieval=true&amp;serverTimezone=Asia/Seoul</span>
<span class="line">username: root</span>
<span class="line">password: root</span>
<span class="line">driver-class-name: com.mysql.cj.jdbc.Driver</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p>`,88)),a("blockquote",null,[a("p",null,[e[1]||(e[1]=n("For more information, see ")),t(i,{to:"/syncboot/SyncBoot-Use-TiDB.html"},{default:r(()=>e[0]||(e[0]=[n("Integrate TiDB with SyncBoot.")])),_:1})])]),e[3]||(e[3]=s('<h2 id="_7-what-databases-does-syncboot-support" tabindex="-1"><a class="header-anchor" href="#_7-what-databases-does-syncboot-support"><span>7. What databases does SyncBoot support?</span></a></h2><table><thead><tr><th>database</th><th>support</th></tr></thead><tbody><tr><td>MySQL</td><td>√</td></tr><tr><td>Oracle11g</td><td>√</td></tr><tr><td>Sqlserver2017</td><td>√</td></tr><tr><td>PostgreSQL</td><td>√</td></tr><tr><td>DB2、Informix</td><td>√</td></tr><tr><td>MariaDB</td><td>√</td></tr><tr><td>SQLite、Hsqldb、Derby、H2</td><td>√</td></tr><tr><td>DAMO, Renda Jincang, Shentong</td><td>√</td></tr><tr><td>Huawei Gauss, Xugu, and Hangao databases</td><td>√</td></tr><tr><td>Alibaba Cloud PolarDB, PPAS, HerdDB</td><td>√</td></tr><tr><td>Hive、HBase、CouchBase</td><td>√</td></tr></tbody></table><blockquote><p>Oracle and DAMO databases do not support Blob type queries</p></blockquote>',3))])}const b=l(o,[["render",v]]),h=JSON.parse('{"path":"/syncboot/setup/switch-to-another-database.html","title":"데이타베이스 변경","lang":"ko-KR","frontmatter":{"order":4},"git":{"updatedTime":1749507909000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"b750c3240053572cbcbb08ac1e9cd0bd9974af53","time":1749507909000,"email":"poh@empasy.com","author":"poh","message":"build to docs:build"}]},"filePathRelative":"syncboot/setup/switch-to-another-database.md"}');export{b as comp,h as data};
