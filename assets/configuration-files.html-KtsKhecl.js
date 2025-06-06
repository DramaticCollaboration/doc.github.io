import{_ as s,c as a,a as n,o as i}from"./app-CJlkTddN.js";const l={};function c(t,e){return i(),a("div",null,e[0]||(e[0]=[n(`<h1 id="configuration-files" tabindex="-1"><a class="header-anchor" href="#configuration-files"><span>Configuration Files</span></a></h1><h2 id="configuration-files-1" tabindex="-1"><a class="header-anchor" href="#configuration-files-1"><span>Configuration Files</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">jeecg-module-system\\jeecg-system-start\\</span>
<span class="line">src\\main\\resources\\jeecg\\jeecg_config.properties</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="_1-customize-the-code-to-generate-the-root-path" tabindex="-1"><a class="header-anchor" href="#_1-customize-the-code-to-generate-the-root-path"><span>1. Customize the code to generate the root path</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#code_generate_project_path</span>
<span class="line">project_path=E:\\\\workspace\\\\jeecg-boot</span>
<span class="line">#bussi_package[User defined]</span>
<span class="line">bussi_package=org.jeecg.modules.demo</span>
<span class="line"></span>
<span class="line">#default code path</span>
<span class="line">#source_root_package=src</span>
<span class="line">#webroot_package=WebRoot</span>
<span class="line"></span>
<span class="line">#maven code path</span>
<span class="line">source_root_package=src.main.java</span>
<span class="line">webroot_package=src.main.webapp</span>
<span class="line"></span>
<span class="line">#ftl resource url</span>
<span class="line">templatepath=/jeecg/code-template</span>
<span class="line">system_encoding=utf-8</span>
<span class="line"></span>
<span class="line">#db Table id [User defined]</span>
<span class="line">db_table_id=id</span>
<span class="line"></span>
<span class="line">#db convert flag[true/false]</span>
<span class="line">db_filed_convert=true</span>
<span class="line"></span>
<span class="line">#page Search Field num [User defined]</span>
<span class="line">page_search_filed_num=1</span>
<span class="line">#page_filter_fields</span>
<span class="line">page_filter_fields=create_time,create_by,update_time,update_by</span>
<span class="line">exclude_table=act_,ext_act_,design_,onl_,sys_,qrtz_</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="_2-custom-database" tabindex="-1"><a class="header-anchor" href="#_2-custom-database"><span>2. Custom database</span></a></h2><blockquote><p>If you need to configure the database separately, you can configure it as follows</p></blockquote><ol><li>Comment out the class</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">jeecg-module-system\\jeecg-system-biz\\src\\main\\java\\org\\jeecg\\config\\init\\CodeGenerateDbConfig.java</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>copy</p><ol start="2"><li>Modify the configuration file<br> jeecg-boot-module-system/src/main/resources/jeecg/jeecg_database.properties</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">#mysql</span>
<span class="line">diver_name=com.mysql.jdbc.Driver</span>
<span class="line">url=jdbc:mysql://localhost:3306/jeecg-boot?useUnicode=true&amp;characterEncoding=UTF-8</span>
<span class="line">username=root</span>
<span class="line">password=root</span>
<span class="line">database_name=jeecg-boot</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><ol start="3"><li><p>Important configuration notes<br><img src="https://upload.jeecg.com/jeecg/help/jeecgvue3/topwrite/assets/image_1692699409514.png" alt=""></p></li><li><p>PostgreSQL mode configuration<br> in the configuration file jeecg/jeecg_database.properties, add the attribute schemaName, multiple comma separated</p></li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">schemaName=public,test</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>copy</p>`,18)]))}const d=s(l,[["render",c]]),o=JSON.parse('{"path":"/syncboot/code-generator/configuration-files.html","title":"Configuration Files","lang":"ko-KR","frontmatter":{"order":4},"git":{"updatedTime":1749179241000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"a96cbbf1f6c96d0e9d6bafa4174131f10429b849","time":1749179241000,"email":"poh@empasy.com","author":"poh","message":"sync 제품군 추가"}]},"filePathRelative":"syncboot/code-generator/configuration-files.md"}');export{d as comp,o as data};
