import{_ as e,c as s,a,o as l}from"./app-CU20V-HQ.js";const i={};function t(c,n){return l(),s("div",null,n[0]||(n[0]=[a(`<h1 id="how-to-make-a-table-fill-the-screen" tabindex="-1"><a class="header-anchor" href="#how-to-make-a-table-fill-the-screen"><span>How to make a table fill the screen</span></a></h1><blockquote><p>The table fills the screen: the table changes with the height of the page, and fills the entire page when there is no data or little data.</p></blockquote><h2 id="show-results" tabindex="-1"><a class="header-anchor" href="#show-results"><span>Show results</span></a></h2><ul><li>When there is no data</li></ul><p><img src="https://lfs.k.topthink.com/lfs/60c7bd40914ca0c04601ace91747c12dc1382dfeeb2a85f6224e1155454aa8f5.dat" alt=""></p><ul><li>When there is data</li></ul><p><img src="https://lfs.k.topthink.com/lfs/c530f405fb1f3e210df64a872b8f6785332b50a2d153c6a6da6dd4c6df31319c.dat" alt=""></p><h2 id="reference-code" tabindex="-1"><a class="header-anchor" href="#reference-code"><span>Reference Code</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line"></span>
<span class="line">//注册table数据</span>
<span class="line">const { tableContext } = useListPage({</span>
<span class="line">  tableProps: {</span>
<span class="line">    api: list,</span>
<span class="line">    columns,</span>
<span class="line">    canResize: false,</span>
<span class="line">    useSearchForm: false,</span>
<span class="line">    actionColumn: {</span>
<span class="line">      width: 120,</span>
<span class="line">      fixed: &#39;right&#39;,</span>
<span class="line">    },</span>
<span class="line">  },</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">const [registerTable, { getDataSource }] = tableContext;</span>
<span class="line"></span>
<span class="line">/**</span>
<span class="line"> * 监听窗口变化</span>
<span class="line"> */</span>
<span class="line">function eventResize() {</span>
<span class="line">  window.addEventListener(&#39;resize&#39;, setHeight);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">/**</span>
<span class="line"> * 设置高度</span>
<span class="line"> */</span>
<span class="line">function setHeight() {</span>
<span class="line">  //因为页面初始化需要时间，所以需要延迟加载</span>
<span class="line">  setTimeout(() =&gt; {</span>
<span class="line">    // 获取当前窗口高度</span>
<span class="line">    let windowHeight = window.innerHeight;</span>
<span class="line">    let dataSource = getDataSource();</span>
<span class="line">    //判断有没有数据</span>
<span class="line">    if(!dataSource || dataSource.length == 0) {</span>
<span class="line">      let tableContent = document.querySelector(&#39;.ant-table-content&#39;);</span>
<span class="line">      if(tableContent){</span>
<span class="line">        tableContent[&#39;style&#39;].height = &#39;unset&#39;;</span>
<span class="line">      }</span>
<span class="line">      let tBody = document.querySelector(&#39;.ant-table-tbody&#39;);</span>
<span class="line">      if (tBody) {</span>
<span class="line">        //动态设置高度</span>
<span class="line">        tBody[&#39;style&#39;].height = windowHeight - 260 + &#39;px&#39;;</span>
<span class="line">      }</span>
<span class="line">    //如果不需要有数据时动态修改高度，直接将else删掉即可</span>
<span class="line">    }else{</span>
<span class="line">      let tableContent = document.querySelector(&#39;.ant-table-content&#39;);</span>
<span class="line">      if (tableContent) {</span>
<span class="line">        //动态设置高度</span>
<span class="line">        tableContent[&#39;style&#39;].height = windowHeight - 260 + &#39;px&#39;;</span>
<span class="line">        tableContent[&#39;style&#39;].overflow = &#39;auto&#39;;</span>
<span class="line">      }</span>
<span class="line">    }</span>
<span class="line">  }, 500);</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">onMounted(() =&gt; {</span>
<span class="line">  eventResize();</span>
<span class="line">  //第一次没有走监听，需要设置一下高度</span>
<span class="line">  setHeight();</span>
<span class="line">});</span>
<span class="line"></span>
<span class="line">//页面销毁之前删除监听</span>
<span class="line">onUnmounted(() =&gt; {</span>
<span class="line">  window.removeEventListener(&#39;resize&#39;, setHeight);</span>
<span class="line">});</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><blockquote><p>Note: Because <code>resize</code>the monitoring is triggered only when the window height changes, it will not be triggered when the table is added or deleted. You need to trigger <code>setHeight</code>the method manually.</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/43fcbf63f0763d3d4a044d354e7dda5234a7e764dce48beab43c34bc2fd2050e.dat" alt=""></p><ul><li>When we set the height manually, we need to <code>canResize(自适应高度)</code>set it to false, otherwise it will not take effect</li></ul><p><img src="https://lfs.k.topthink.com/lfs/85b538deb90c7a566cbbd224a60828e37c0297bdf7bc69071fbe0e25bfcd280c.dat" alt=""></p>`,14)]))}const p=e(i,[["render",t]]),r=JSON.parse('{"path":"/syncadmin/front-end-experience/front-end-tips/how-to-make-a-table-fill-the-screen.html","title":"How to make a table fill the screen","lang":"ko-KR","frontmatter":{"order":8},"git":{"updatedTime":1749507909000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"b750c3240053572cbcbb08ac1e9cd0bd9974af53","time":1749507909000,"email":"poh@empasy.com","author":"poh","message":"build to docs:build"}]},"filePathRelative":"syncadmin/front-end-experience/front-end-tips/how-to-make-a-table-fill-the-screen.md"}');export{p as comp,r as data};
