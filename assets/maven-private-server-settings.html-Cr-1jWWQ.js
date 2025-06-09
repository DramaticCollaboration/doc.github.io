import{_ as s,c as n,a,o as i}from"./app-CGhJnnYK.js";const l={};function t(r,e){return i(),n("div",null,e[0]||(e[0]=[a(`<h1 id="maven-private-서버-설정" tabindex="-1"><a class="header-anchor" href="#maven-private-서버-설정"><span>Maven Private 서버 설정</span></a></h1><blockquote><p>SYNC has a custom JAR package, which is placed on its own Maven private server, so sometimes download failures may occur.</p></blockquote><p>Generally, if you encounter a download failure, it is because the user has set up a local mirror, which makes it impossible to download resources from the SYNC private server.<br> Please refer to the following method to configure the mirror exclusion.</p><h3 id="_1-find-maven-s-home-conf-settings-xml" tabindex="-1"><a class="header-anchor" href="#_1-find-maven-s-home-conf-settings-xml"><span>1. Find Maven&#39;s home conf/settings.xml,</span></a></h3><p>Add the following Alibaba Cloud Maven image to the tag (delete your own image configuration). The final result is as follows :</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;mirrors&gt;</span>
<span class="line">       &lt;mirror&gt;</span>
<span class="line">            &lt;id&gt;nexus-aliyun&lt;/id&gt;</span>
<span class="line">            &lt;mirrorOf&gt;*,!jeecg,!jeecg-snapshots,!getui-nexus&lt;/mirrorOf&gt;</span>
<span class="line">            &lt;name&gt;Nexus aliyun&lt;/name&gt;</span>
<span class="line">            &lt;url&gt;http://maven.aliyun.com/nexus/content/groups/public&lt;/url&gt;</span>
<span class="line">        &lt;/mirror&gt;</span>
<span class="line"> &lt;/mirrors&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><ul><li>The key point of this configuration is this sentence. <code>&lt;mirrorOf&gt;*,!jeecg,!jeecg-snapshots&lt;/mirrorOf&gt;</code><br> If you do not add this sentence, all dependencies will be downloaded from the Alibaba Cloud warehouse by default. After adding it, the jeecg dependency package can be downloaded from the jeecg private server.</li></ul><h3 id="_2-add-the-mirror-addresses-of-aliyun-and-jeecg-to-the-project" tabindex="-1"><a class="header-anchor" href="#_2-add-the-mirror-addresses-of-aliyun-and-jeecg-to-the-project"><span>2. Add the mirror addresses of aliyun and jeecg to the project</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;repositories&gt;</span>
<span class="line">   &lt;repository&gt;</span>
<span class="line">           &lt;id&gt;aliyun&lt;/id&gt;</span>
<span class="line">           &lt;name&gt;aliyun Repository&lt;/name&gt;</span>
<span class="line">           &lt;url&gt;https://maven.aliyun.com/repository/public&lt;/url&gt;</span>
<span class="line">           &lt;snapshots&gt;</span>
<span class="line">         &lt;enabled&gt;false&lt;/enabled&gt;</span>
<span class="line">      &lt;/snapshots&gt;</span>
<span class="line">       &lt;/repository&gt;</span>
<span class="line">   &lt;repository&gt;</span>
<span class="line">           &lt;id&gt;jeecg&lt;/id&gt;</span>
<span class="line">           &lt;name&gt;jeecg Repository&lt;/name&gt;</span>
<span class="line">           &lt;url&gt;https://maven.jeecg.org/nexus/content/repositories/jeecg&lt;/url&gt;</span>
<span class="line">           &lt;snapshots&gt;</span>
<span class="line">         &lt;enabled&gt;false&lt;/enabled&gt;</span>
<span class="line">      &lt;/snapshots&gt;</span>
<span class="line">   &lt;/repository&gt;</span>
<span class="line">&lt;/repositories&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p>`,11)]))}const d=s(l,[["render",t]]),c=JSON.parse('{"path":"/syncboot/setup/maven-private-server-settings.html","title":"Maven Private 서버 설정","lang":"ko-KR","frontmatter":{"order":5},"git":{"updatedTime":1749510018000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"b5c965c32dfeaa81de62133194782387bf36abfc","time":1749510018000,"email":"poh@empasy.com","author":"poh","message":"로고 표시 오류 수정"}]},"filePathRelative":"syncboot/setup/maven-private-server-settings.md"}');export{d as comp,c as data};
