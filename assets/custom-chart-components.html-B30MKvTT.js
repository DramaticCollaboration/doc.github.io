import{_ as t,c as e,a as n,o as s}from"./app-CGhJnnYK.js";const i={};function d(l,a){return s(),e("div",null,a[0]||(a[0]=[n(`<h1 id="custom-chart-components" tabindex="-1"><a class="header-anchor" href="#custom-chart-components"><span>Custom chart components</span></a></h1><h2 id="bar-chart" tabindex="-1"><a class="header-anchor" href="#bar-chart"><span>Bar Chart</span></a></h2><p><img src="https://lfs.k.topthink.com/lfs/fb10ba89638d862267b0c13c4fc77008b7cd58aa2e580302b83988959e7bda6f.dat" alt=""></p><h5 id="citation" tabindex="-1"><a class="header-anchor" href="#citation"><span>Citation</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">import Bar from &#39;/@/components/chart/Bar.vue&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>copy</p><h5 id="parameter-list" tabindex="-1"><a class="header-anchor" href="#parameter-list"><span>parameter list</span></a></h5><table><thead><tr><th>parameter name</th><th>type</th><th>Required</th><th>illustrate</th></tr></thead><tbody><tr><td>chartData</td><td>array</td><td>✔️</td><td>Chart data source</td></tr><tr><td>option</td><td>object</td><td></td><td>Configuration items for charts</td></tr><tr><td>width</td><td>string</td><td></td><td>Chart Width</td></tr><tr><td>height</td><td>string</td><td></td><td>Chart Height</td></tr></tbody></table><h5 id="chartdata-example" tabindex="-1"><a class="header-anchor" href="#chartdata-example"><span>chartData Example</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">[</span>
<span class="line">    {</span>
<span class="line">        &quot;name&quot;: &quot;1月&quot;,</span>
<span class="line">        &quot;value&quot;: 320</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">        &quot;name&quot;: &quot;2月&quot;,</span>
<span class="line">        &quot;value&quot;: 457</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">        &quot;name&quot;: &quot;3月&quot;,</span>
<span class="line">        &quot;value&quot;: 182</span>
<span class="line">    }</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h5 id="code-sample" tabindex="-1"><a class="header-anchor" href="#code-sample"><span>Code Sample</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">     &lt;Bar :chartData=&quot;chartData&quot;&gt;&lt;/Bar&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot; setup&gt;</span>
<span class="line">    import Bar from &#39;/@/components/chart/Bar.vue&#39;;</span>
<span class="line">    const chartData = [</span>
<span class="line">         {</span>
<span class="line">             &quot;name&quot;: &quot;1月&quot;,</span>
<span class="line">             &quot;value&quot;: 320</span>
<span class="line">         },</span>
<span class="line">         {</span>
<span class="line">             &quot;name&quot;: &quot;2月&quot;,</span>
<span class="line">             &quot;value&quot;: 457</span>
<span class="line">         },</span>
<span class="line">         {</span>
<span class="line">             &quot;name&quot;: &quot;3月&quot;,</span>
<span class="line">             &quot;value&quot;: 182</span>
<span class="line">         }</span>
<span class="line">     ]</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;style&gt;&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="multi-column-bar-chart" tabindex="-1"><a class="header-anchor" href="#multi-column-bar-chart"><span>Multi-column bar chart</span></a></h2><p><img src="https://lfs.k.topthink.com/lfs/fdc126e252a71f5bd9cfea9fb55a6ac1bbeef1d4bd913b53a475914617929cbb.dat" alt=""></p><h5 id="citation-1" tabindex="-1"><a class="header-anchor" href="#citation-1"><span>Citation</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">import BarMulti from &#39;/@/components/chart/BarMulti.vue&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>copy</p><h5 id="parameter-list-1" tabindex="-1"><a class="header-anchor" href="#parameter-list-1"><span>parameter list</span></a></h5><table><thead><tr><th>parameter name</th><th>type</th><th>Required</th><th>illustrate</th></tr></thead><tbody><tr><td>chartData</td><td>array</td><td>✔️</td><td>Chart data source</td></tr><tr><td>option</td><td>object</td><td></td><td>Configuration items for charts</td></tr><tr><td>width</td><td>string</td><td></td><td>Chart Width</td></tr><tr><td>height</td><td>string</td><td></td><td>Chart Height</td></tr></tbody></table><h5 id="chartdata-example-1" tabindex="-1"><a class="header-anchor" href="#chartdata-example-1"><span>chartData Example</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">[</span>
<span class="line">     {</span>
<span class="line">         &quot;name&quot;: &quot;1月&quot;,</span>
<span class="line">         &quot;value&quot;: 320,</span>
<span class="line">         &quot;type&quot;: &quot;2021&quot;</span>
<span class="line">     },</span>
<span class="line">     {</span>
<span class="line">         &quot;name&quot;: &quot;2月&quot;,</span>
<span class="line">         &quot;value&quot;: 457,</span>
<span class="line">         &quot;type&quot;: &quot;2021&quot;</span>
<span class="line">     },</span>
<span class="line">     {</span>
<span class="line">         &quot;name&quot;: &quot;3月&quot;,</span>
<span class="line">         &quot;value&quot;: 182,</span>
<span class="line">         &quot;type&quot;: &quot;2021&quot;</span>
<span class="line">     },</span>
<span class="line">     {</span>
<span class="line">          &quot;name&quot;: &quot;1月&quot;,</span>
<span class="line">          &quot;value&quot;: 240,</span>
<span class="line">          &quot;type&quot;: &quot;2022&quot;</span>
<span class="line">      },</span>
<span class="line">      {</span>
<span class="line">          &quot;name&quot;: &quot;2月&quot;,</span>
<span class="line">          &quot;value&quot;: 357,</span>
<span class="line">          &quot;type&quot;: &quot;2022&quot;</span>
<span class="line">      },</span>
<span class="line">      {</span>
<span class="line">          &quot;name&quot;: &quot;3月&quot;,</span>
<span class="line">          &quot;value&quot;: 456,</span>
<span class="line">          &quot;type&quot;: &quot;2022&quot;</span>
<span class="line">      }</span>
<span class="line"> ]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="mini-bar-chart" tabindex="-1"><a class="header-anchor" href="#mini-bar-chart"><span>Mini Bar Chart</span></a></h2><p>Same as column chart, just modify the configuration</p><h2 id="area-chart" tabindex="-1"><a class="header-anchor" href="#area-chart"><span>Area chart</span></a></h2><p><img src="https://lfs.k.topthink.com/lfs/8931527e74d00e51b7ffe24a7975cd88b4aa3a71c537005b93a02783ae4b37ac.dat" alt=""></p><h5 id="citation-2" tabindex="-1"><a class="header-anchor" href="#citation-2"><span>Citation</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">import Line from &#39;/@/components/chart/Line.vue&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>copy</p><h5 id="parameter-list-2" tabindex="-1"><a class="header-anchor" href="#parameter-list-2"><span>parameter list</span></a></h5><table><thead><tr><th>parameter name</th><th>type</th><th>Required</th><th>illustrate</th></tr></thead><tbody><tr><td>chartData</td><td>array</td><td>✔️</td><td>Chart data source</td></tr><tr><td>option</td><td>object</td><td></td><td>Configuration items for charts</td></tr><tr><td>width</td><td>string</td><td></td><td>Chart Width</td></tr><tr><td>height</td><td>string</td><td></td><td>Chart Height</td></tr></tbody></table><h5 id="chartdata-example-2" tabindex="-1"><a class="header-anchor" href="#chartdata-example-2"><span>chartData Example</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">[</span>
<span class="line">    {</span>
<span class="line">     &quot;name&quot;: &quot;1月&quot;,</span>
<span class="line">     &quot;value&quot;: 320</span>
<span class="line">     },</span>
<span class="line">    {</span>
<span class="line">     &quot;name&quot;: &quot;2月&quot;,</span>
<span class="line">     &quot;value&quot;: 457</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">     &quot;name&quot;: &quot;3月&quot;,</span>
<span class="line">     &quot;value&quot;: 182</span>
<span class="line">    }</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="multi-line-line-chart" tabindex="-1"><a class="header-anchor" href="#multi-line-line-chart"><span>Multi-line line chart</span></a></h2><p><img src="https://lfs.k.topthink.com/lfs/489dc83de838fbe2c4b70b0ecfdee83a747aa5bb570742d9f405117f4ddd23d6.dat" alt=""></p><h5 id="citation-3" tabindex="-1"><a class="header-anchor" href="#citation-3"><span>Citation</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">import LineMulti from &#39;/@/components/chart/LineMulti.vue&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>copy</p><h5 id="parameter-list-3" tabindex="-1"><a class="header-anchor" href="#parameter-list-3"><span>parameter list</span></a></h5><table><thead><tr><th>parameter name</th><th>type</th><th>Required</th><th>illustrate</th></tr></thead><tbody><tr><td>chartData</td><td>array</td><td>✔️</td><td>Chart data source</td></tr><tr><td>option</td><td>object</td><td></td><td>Configuration items for charts</td></tr><tr><td>width</td><td>string</td><td></td><td>Chart Width</td></tr><tr><td>height</td><td>string</td><td></td><td>Chart Height</td></tr></tbody></table><h5 id="chartdata-example-3" tabindex="-1"><a class="header-anchor" href="#chartdata-example-3"><span>chartData Example</span></a></h5><p>Same column chart</p><h2 id="pie-chart" tabindex="-1"><a class="header-anchor" href="#pie-chart"><span>pie chart</span></a></h2><p><img src="https://lfs.k.topthink.com/lfs/b14cd91673104d1491f121ee95b864c1f121073a950d144392599860c0754f1c.dat" alt=""></p><h5 id="citation-4" tabindex="-1"><a class="header-anchor" href="#citation-4"><span>Citation</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">import Pie from &#39;/@/components/chart/Pie&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>copy</p><h5 id="parameter-list-4" tabindex="-1"><a class="header-anchor" href="#parameter-list-4"><span>parameter list</span></a></h5><table><thead><tr><th>parameter name</th><th>type</th><th>Required</th><th>illustrate</th></tr></thead><tbody><tr><td>chartData</td><td>array</td><td>✔️</td><td>Chart data source</td></tr><tr><td>option</td><td>object</td><td></td><td>Configuration items for charts</td></tr><tr><td>width</td><td>string</td><td></td><td>Chart Width</td></tr><tr><td>height</td><td>string</td><td></td><td>Chart Height</td></tr></tbody></table><h5 id="chartdata-example-4" tabindex="-1"><a class="header-anchor" href="#chartdata-example-4"><span>chartData Example</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">[</span>
<span class="line">    { &quot;name&quot;: &quot;一月&quot;, &quot;value&quot;: 40 },</span>
<span class="line">    { &quot;name&quot;: &quot;二月&quot;, &quot;value&quot;: 21 },</span>
<span class="line">    { &quot;name&quot;: &quot;三月&quot;, &quot;value&quot;: 17 },</span>
<span class="line">    { &quot;name&quot;: &quot;四月&quot;, &quot;value&quot;: 13 },</span>
<span class="line">    { &quot;name&quot;: &quot;五月&quot;, &quot;value&quot;: 9 }</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="radar-chart" tabindex="-1"><a class="header-anchor" href="#radar-chart"><span>Radar chart</span></a></h2><p><img src="https://lfs.k.topthink.com/lfs/c3d98e9be83fd9621f3cc89d19e9d18b435c6d7048b61079a777d821be7fced7.dat" alt=""></p><h5 id="citation-5" tabindex="-1"><a class="header-anchor" href="#citation-5"><span>Citation</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">import Radar from &#39;/@/components/chart/Radar&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>copy</p><h5 id="parameter-list-5" tabindex="-1"><a class="header-anchor" href="#parameter-list-5"><span>parameter list</span></a></h5><table><thead><tr><th>parameter name</th><th>type</th><th>Required</th><th>illustrate</th></tr></thead><tbody><tr><td>chartData</td><td>array</td><td>✔️</td><td>Chart data source</td></tr><tr><td>width</td><td>number</td><td></td><td>Chart Width</td></tr><tr><td>height</td><td>number</td><td></td><td>Chart Height</td></tr><tr><td>option</td><td>object</td><td></td><td>Configuration items</td></tr></tbody></table><h5 id="chartdata-example-5" tabindex="-1"><a class="header-anchor" href="#chartdata-example-5"><span>chartData Example</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">[</span>
<span class="line">{ value: 75, name: &#39;政治&#39;,type:&#39;文综&#39;,max:100 },</span>
<span class="line">{ value: 65, name: &#39;历史&#39;,type:&#39;文综&#39;,max:100 },</span>
<span class="line">{ value: 55, name: &#39;地理&#39;,type:&#39;文综&#39;,max:100 },</span>
<span class="line">{ value: 74, name: &#39;化学&#39;,type:&#39;文综&#39;,max:100 },</span>
<span class="line">{ value: 38, name: &#39;物理&#39;,type:&#39;文综&#39;,max:100 },</span>
<span class="line">{ value: 88, name: &#39;生物&#39;,type:&#39;文综&#39;,max:100 },</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="dash-board" tabindex="-1"><a class="header-anchor" href="#dash-board"><span>dash board</span></a></h2><p><img src="https://lfs.k.topthink.com/lfs/869edcb74196b578f565dc43689019a83a8454a01c98127823ff827a577c345e.dat" alt=""></p><h5 id="citation-6" tabindex="-1"><a class="header-anchor" href="#citation-6"><span>Citation</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">import Gauge from &#39;/@/components/chart/Gauge&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>copy</p><h5 id="parameter-list-6" tabindex="-1"><a class="header-anchor" href="#parameter-list-6"><span>parameter list</span></a></h5><table><thead><tr><th>parameter name</th><th>type</th><th>Required</th><th>illustrate</th></tr></thead><tbody><tr><td>chartData</td><td>array</td><td>✔️</td><td>Chart data source</td></tr><tr><td>option</td><td>object</td><td></td><td>Configuration items for charts</td></tr><tr><td>width</td><td>string</td><td></td><td>Chart Width</td></tr><tr><td>height</td><td>string</td><td></td><td>Chart Height</td></tr></tbody></table><h5 id="chartdata-example-6" tabindex="-1"><a class="header-anchor" href="#chartdata-example-6"><span>chartData Example</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">{</span>
<span class="line">name:&#39;出勤率&#39;,</span>
<span class="line">value:70</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="ranking-list" tabindex="-1"><a class="header-anchor" href="#ranking-list"><span>Ranking List</span></a></h2><p><img src="https://lfs.k.topthink.com/lfs/da9636a03894f4cf3956b0e68bbe6212e5496d9e4acce0b333af2fb2eda0ab7d.dat" alt=""></p><h5 id="citation-7" tabindex="-1"><a class="header-anchor" href="#citation-7"><span>Citation</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">import RankList from &#39;@/components/chart/RankList&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>copy</p><h5 id="parameter-list-7" tabindex="-1"><a class="header-anchor" href="#parameter-list-7"><span>parameter list</span></a></h5><table><thead><tr><th>parameter name</th><th>type</th><th>Required</th><th>illustrate</th></tr></thead><tbody><tr><td>title</td><td>string</td><td></td><td>Chart title</td></tr><tr><td>list</td><td>array</td><td></td><td>Ranking list data</td></tr><tr><td>height</td><td>number</td><td></td><td>Chart height, default adaptive height</td></tr></tbody></table><h5 id="list-example" tabindex="-1"><a class="header-anchor" href="#list-example"><span>list example</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">[</span>
<span class="line">    { &quot;name&quot;: &quot;北京朝阳 1 号店&quot;, &quot;total&quot;: 1981 },</span>
<span class="line">    { &quot;name&quot;: &quot;北京朝阳 2 号店&quot;, &quot;total&quot;: 1359 },</span>
<span class="line">    { &quot;name&quot;: &quot;北京朝阳 3 号店&quot;, &quot;total&quot;: 1354 },</span>
<span class="line">    { &quot;name&quot;: &quot;北京朝阳 4 号店&quot;, &quot;total&quot;: 263 },</span>
<span class="line">    { &quot;name&quot;: &quot;北京朝阳 5 号店&quot;, &quot;total&quot;: 446 },</span>
<span class="line">    { &quot;name&quot;: &quot;北京朝阳 6 号店&quot;, &quot;total&quot;: 796 }</span>
<span class="line">]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p>`,85)]))}const c=t(i,[["render",d]]),p=JSON.parse('{"path":"/syncadmin/front-end-experience/custom-chart-components.html","title":"Custom chart components","lang":"ko-KR","frontmatter":{"order":9},"git":{"updatedTime":1749510018000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"b5c965c32dfeaa81de62133194782387bf36abfc","time":1749510018000,"email":"poh@empasy.com","author":"poh","message":"로고 표시 오류 수정"}]},"filePathRelative":"syncadmin/front-end-experience/custom-chart-components.md"}');export{c as comp,p as data};
