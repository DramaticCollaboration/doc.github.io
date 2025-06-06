import{_ as e,c as n,a as i,o as a}from"./app-DeddRHAy.js";const l={};function t(r,s){return a(),n("div",null,s[0]||(s[0]=[i(`<h1 id="column-field-export-permissions" tabindex="-1"><a class="header-anchor" href="#column-field-export-permissions"><span>Column field export permissions</span></a></h1><blockquote><p>After the permission control is performed on the columns of the data list,<br> the permission control based on the column field of the list is completed when the list exports data and corresponds to the column permission.</p></blockquote><p><strong>For example:</strong> The punch-in time field has been permission-controlled and is hidden in the list. It will not be exported when exporting.<br><img src="https://lfs.k.topthink.com/lfs/97f0db27eb20a1dbdd8106f9637f0859050663b24531b545f1732b245392ae54.dat" alt=""><br><img src="https://lfs.k.topthink.com/lfs/88fba78c91559493ac1b1d926d5252d2fac6e5030f3e566d4409e3b204edec54.dat" alt=""><br><img src="https://lfs.k.topthink.com/lfs/b3b08cf77843871f53745e73626c97d3689a8107f062dea00b8f0fe18322f335.dat" alt=""></p><h3 id="permission-control-steps" tabindex="-1"><a class="header-anchor" href="#permission-control-steps"><span>Permission control steps</span></a></h3><h4 id="add-permission-logic-to-the-background-export-method-obtain-the-fields-to-be-exported-separate-all-the-fields-to-be-exported-with-commas-and-concatenate-the-strings" tabindex="-1"><a class="header-anchor" href="#add-permission-logic-to-the-background-export-method-obtain-the-fields-to-be-exported-separate-all-the-fields-to-be-exported-with-commas-and-concatenate-the-strings"><span>Add permission logic to the background export method, obtain the fields to be exported, separate all the fields to be exported with commas, and concatenate the strings</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">@RequestMapping(value = &quot;/exportXls&quot;)</span>
<span class="line">@PermissionData(pageComponent = &quot;jeecg/JeecgDemoList&quot;)</span>
<span class="line">public ModelAndView exportXls(HttpServletRequest request, JeecgDemo jeecgDemo) {</span>
<span class="line">    //获取导出表格字段</span>
<span class="line">    String exportFields = jeecgDemoService.getExportFields();</span>
<span class="line">    return super.exportXls(request, jeecgDemo, JeecgDemo.class, &quot;单表模型&quot;,exportFields);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">public String getExportFields() {</span>
<span class="line">   //获取当前登录人</span>
<span class="line">   LoginUser sysUser = (LoginUser) SecurityUtils.getSubject().getPrincipal();</span>
<span class="line">   //权限配置列导出示例</span>
<span class="line">   List&lt;String&gt; noAuthList = new ArrayList&lt;&gt;();</span>
<span class="line">   List&lt;String&gt; exportFieldsList = new ArrayList&lt;&gt;();</span>
<span class="line">   //1.此前缀必须与列表字段权限控制前缀一致</span>
<span class="line">   String permsPrefix = &quot;testdemo:&quot;;</span>
<span class="line">   //查询配置菜单有效字段</span>
<span class="line">   List&lt;String&gt; allAuth = this.baseMapper.queryAllAuth(permsPrefix);</span>
<span class="line">   //查询已授权字段</span>
<span class="line">   List&lt;String&gt; userAuth = this.baseMapper.queryUserAuth(sysUser.getId(),permsPrefix);</span>
<span class="line">   //列出未授权字段</span>
<span class="line">   for(String perms : allAuth){</span>
<span class="line">      if(!userAuth.contains(perms)){</span>
<span class="line">         noAuthList.add(perms.substring(permsPrefix.length()));</span>
<span class="line">      }</span>
<span class="line">   }</span>
<span class="line">   //实体类中字段与未授权字段比较，列出需导出字段</span>
<span class="line">   Field[] fileds = JeecgDemo.class.getDeclaredFields();</span>
<span class="line">   List&lt;Field&gt; list = new ArrayList(Arrays.asList(fileds));</span>
<span class="line">   for(Field field : list){</span>
<span class="line">      if(!noAuthList.contains(field.getName())){</span>
<span class="line">         exportFieldsList.add(field.getName());</span>
<span class="line">      }</span>
<span class="line">   }</span>
<span class="line">   return exportFieldsList != null &amp;&amp; exportFieldsList.size()&gt;0 ? String.join(&quot;,&quot;, exportFieldsList) : &quot;&quot;;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p><code>JeecgDemoMapper.xml</code>Reference for query fields in:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;!-- 查询所有符合前缀且有效字段 --&gt;</span>
<span class="line">&lt;select id=&quot;queryAllAuth&quot; resultType=&quot;java.lang.String&quot;&gt;</span>
<span class="line">       select perms from sys_permission</span>
<span class="line">       where perms</span>
<span class="line">       like concat(concat(&#39;%&#39;,#{permsPrefix}),&#39;%&#39;)</span>
<span class="line">       and del_flag=0</span>
<span class="line">       and status=&#39;1&#39;</span>
<span class="line">   &lt;/select&gt;</span>
<span class="line"></span>
<span class="line">&lt;!-- 查询用户已授权字段 --&gt;</span>
<span class="line">&lt;select id=&quot;queryUserAuth&quot; resultType=&quot;java.lang.String&quot;&gt;</span>
<span class="line">       select DISTINCT perms from sys_user_role sur,</span>
<span class="line">       sys_role_permission srp,</span>
<span class="line">       sys_permission sp</span>
<span class="line">       where sur.role_id = srp.role_id</span>
<span class="line">       and sp.id = srp.permission_id</span>
<span class="line">       and sur.user_id = #{userId}</span>
<span class="line">       and sp.perms like concat(concat(&#39;%&#39;,#{permsPrefix}),&#39;%&#39;)</span>
<span class="line">   &lt;/select&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p>`,12)]))}const d=e(l,[["render",t]]),c=JSON.parse('{"path":"/syncboot/permission/column-field-export-permissions.html","title":"Column field export permissions","lang":"ko-KR","frontmatter":{"order":11},"git":{"updatedTime":1749179241000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"a96cbbf1f6c96d0e9d6bafa4174131f10429b849","time":1749179241000,"email":"poh@empasy.com","author":"poh","message":"sync 제품군 추가"}]},"filePathRelative":"syncboot/permission/column-field-export-permissions.md"}');export{d as comp,c as data};
