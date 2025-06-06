import{_ as s,c as i,a,o as l}from"./app-QFoJTndn.js";const e={};function c(p,n){return l(),i("div",null,n[0]||(n[0]=[a(`<h1 id="transition" tabindex="-1"><a class="header-anchor" href="#transition"><span>Transition</span></a></h1><p>Used for page/component switching animation</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;div class=&quot;p-4&quot;&gt;</span>
<span class="line">    &lt;div class=&quot;flex&quot;&gt;</span>
<span class="line">      &lt;Select</span>
<span class="line">        :options=&quot;options&quot;</span>
<span class="line">        v-model:value=&quot;value&quot;</span>
<span class="line">        placeholder=&quot;选择动画&quot;</span>
<span class="line">        :style=&quot;{ width: &#39;150px&#39; }&quot;</span>
<span class="line">      /&gt;</span>
<span class="line">      &lt;a-button type=&quot;primary&quot; class=&quot;ml-4&quot; @click=&quot;start&quot;&gt; start &lt;/a-button&gt;</span>
<span class="line">    &lt;/div&gt;</span>
<span class="line">    &lt;component :is=&quot;\`\${value}Transition\`&quot;&gt;</span>
<span class="line">      &lt;div class=&quot;box&quot; v-show=&quot;show&quot;&gt;&lt;/div&gt;</span>
<span class="line">    &lt;/component&gt;</span>
<span class="line">  &lt;/div&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import { defineComponent, ref } from &#39;vue&#39;;</span>
<span class="line">  import { Select } from &#39;ant-design-vue&#39;;</span>
<span class="line">  import {</span>
<span class="line">    FadeTransition,</span>
<span class="line">    ScaleTransition,</span>
<span class="line">    SlideYTransition,</span>
<span class="line">    ScrollYTransition,</span>
<span class="line">    SlideYReverseTransition,</span>
<span class="line">    ScrollYReverseTransition,</span>
<span class="line">    SlideXTransition,</span>
<span class="line">    ScrollXTransition,</span>
<span class="line">    SlideXReverseTransition,</span>
<span class="line">    ScrollXReverseTransition,</span>
<span class="line">    ScaleRotateTransition,</span>
<span class="line">    ExpandXTransition,</span>
<span class="line">    ExpandTransition,</span>
<span class="line">  } from &#39;/@/components/Transition/index&#39;;</span>
<span class="line"></span>
<span class="line">  const transitionList = [</span>
<span class="line">    &#39;Fade&#39;,</span>
<span class="line">    &#39;Scale&#39;,</span>
<span class="line">    &#39;SlideY&#39;,</span>
<span class="line">    &#39;ScrollY&#39;,</span>
<span class="line">    &#39;SlideYReverse&#39;,</span>
<span class="line">    &#39;ScrollYReverse&#39;,</span>
<span class="line">    &#39;SlideX&#39;,</span>
<span class="line">    &#39;ScrollX&#39;,</span>
<span class="line">    &#39;SlideXReverse&#39;,</span>
<span class="line">    &#39;ScrollXReverse&#39;,</span>
<span class="line">    &#39;ScaleRotate&#39;,</span>
<span class="line">    &#39;ExpandX&#39;,</span>
<span class="line">    &#39;Expand&#39;,</span>
<span class="line">  ];</span>
<span class="line">  const options = transitionList.map((item) =&gt; ({</span>
<span class="line">    label: item,</span>
<span class="line">    value: item,</span>
<span class="line">    key: item,</span>
<span class="line">  }));</span>
<span class="line"></span>
<span class="line">  export default defineComponent({</span>
<span class="line">    components: {</span>
<span class="line">      Select,</span>
<span class="line">      FadeTransition,</span>
<span class="line">      ScaleTransition,</span>
<span class="line">      SlideYTransition,</span>
<span class="line">      ScrollYTransition,</span>
<span class="line">      SlideYReverseTransition,</span>
<span class="line">      ScrollYReverseTransition,</span>
<span class="line">      SlideXTransition,</span>
<span class="line">      ScrollXTransition,</span>
<span class="line">      SlideXReverseTransition,</span>
<span class="line">      ScrollXReverseTransition,</span>
<span class="line">      ScaleRotateTransition,</span>
<span class="line">      ExpandXTransition,</span>
<span class="line">      ExpandTransition,</span>
<span class="line">    },</span>
<span class="line">    setup() {</span>
<span class="line">      const value = ref(&#39;Fade&#39;);</span>
<span class="line">      const show = ref(true);</span>
<span class="line">      function start() {</span>
<span class="line">        show.value = false;</span>
<span class="line">        setTimeout(() =&gt; {</span>
<span class="line">          show.value = true;</span>
<span class="line">        }, 300);</span>
<span class="line">      }</span>
<span class="line">      return { options, value, start, show };</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line">&lt;style lang=&quot;less&quot; scoped&gt;</span>
<span class="line">  .box {</span>
<span class="line">    width: 150px;</span>
<span class="line">    height: 150px;</span>
<span class="line">    margin-top: 20px;</span>
<span class="line">    background: pink;</span>
<span class="line">  }</span>
<span class="line">&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p>`,5)]))}const t=s(e,[["render",c]]),r=JSON.parse('{"path":"/syncadmin/ui-component-library/more-basic-components/transition.html","title":"Transition","lang":"ko-KR","frontmatter":{"order":23},"git":{"updatedTime":1749179241000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"a96cbbf1f6c96d0e9d6bafa4174131f10429b849","time":1749179241000,"email":"poh@empasy.com","author":"poh","message":"sync 제품군 추가"}]},"filePathRelative":"syncadmin/ui-component-library/more-basic-components/transition.md"}');export{t as comp,r as data};
