import{_ as e,c as t,a as n,o as s}from"./app-CC5quYyA.js";const l={};function i(r,a){return s(),t("div",null,a[0]||(a[0]=[n(`<h1 id="jar-separate-packaging-deployment" tabindex="-1"><a class="header-anchor" href="#jar-separate-packaging-deployment"><span>JAR separate packaging deployment</span></a></h1><p>Springboot slimming (lib and program are packaged separately)</p><blockquote><p>Version: 3.5+</p></blockquote><h2 id="_1-first-use-mvn-clean-package-to-generate-the-jar-package-normally" tabindex="-1"><a class="header-anchor" href="#_1-first-use-mvn-clean-package-to-generate-the-jar-package-normally"><span>1. First, use mvn clean package to generate the jar package normally.</span></a></h2><p>This jar package may be several hundred megabytes in size, and lib accounts for the vast majority.<br> Unzip the jar package and take out the lib package under BOOT-INF and store it separately.</p><h2 id="_2-modify-the-pom-of-the-jeecg-system-start-project-and-repackage-it" tabindex="-1"><a class="header-anchor" href="#_2-modify-the-pom-of-the-jeecg-system-start-project-and-repackage-it"><span>2. Modify the pom of the jeecg-system-start project and repackage it</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;build&gt;</span>
<span class="line">	&lt;plugins&gt;</span>
<span class="line">		&lt;plugin&gt;</span>
<span class="line">			&lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span>
<span class="line">			&lt;artifactId&gt;spring-boot-maven-plugin&lt;/artifactId&gt;</span>
<span class="line">			&lt;configuration&gt;</span>
<span class="line">				&lt;layout&gt;ZIP&lt;/layout&gt;</span>
<span class="line">				&lt;includes&gt;</span>
<span class="line">					&lt;include&gt;</span>
<span class="line">						&lt;groupId&gt;nothing&lt;/groupId&gt;</span>
<span class="line">						&lt;artifactId&gt;nothing&lt;/artifactId&gt;</span>
<span class="line">					&lt;/include&gt;</span>
<span class="line">				&lt;/includes&gt;</span>
<span class="line">			&lt;/configuration&gt;</span>
<span class="line">			&lt;executions&gt;</span>
<span class="line">				&lt;execution&gt;</span>
<span class="line">					&lt;goals&gt;</span>
<span class="line">						&lt;goal&gt;repackage&lt;/goal&gt;</span>
<span class="line">					&lt;/goals&gt;</span>
<span class="line">				&lt;/execution&gt;</span>
<span class="line">			&lt;/executions&gt;</span>
<span class="line">		&lt;/plugin&gt;</span>
<span class="line">	&lt;/plugins&gt;</span>
<span class="line">&lt;/build&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>Use mvn clean package again to generate a package that does not contain lib.</p><h2 id="_3-run-the-jar-package" tabindex="-1"><a class="header-anchor" href="#_3-run-the-jar-package"><span>3. Run the jar package</span></a></h2><p># <code>C:\\111111\\lib</code>is the lib package path. Execute the following command to start the project.</p><p><code>java -Dloader.path=C:\\111111\\lib -jar jeecg-system-start-3.4.0.jar</code></p><h2 id="_4-directory-structure" tabindex="-1"><a class="header-anchor" href="#_4-directory-structure"><span>4. Directory Structure</span></a></h2><blockquote><p>Note: You must create a config in the same directory as jar and copy the yml file under system to config.</p></blockquote><p>config content screenshot</p>`,15)]))}const p=e(l,[["render",i]]),o=JSON.parse('{"path":"/syncboot/release/jar-separate-packaging-deployment%20.html","title":"JAR separate packaging deployment","lang":"ko-KR","frontmatter":{"order":6},"git":{"updatedTime":1749510202000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"e8d2845a48d72a49b99a62ed0e9511823ff14831","time":1749510202000,"email":"poh@empasy.com","author":"poh","message":"로고 alt text 변경"}]},"filePathRelative":"syncboot/release/jar-separate-packaging-deployment .md"}');export{p as comp,o as data};
