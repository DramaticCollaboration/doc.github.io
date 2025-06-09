import{_ as s,c as e,a,o as i}from"./app-CU20V-HQ.js";const l={};function p(c,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="defining-a-new-component" tabindex="-1"><a class="header-anchor" href="#defining-a-new-component"><span>Defining a new component</span></a></h1><h2 id="_1-write-component-code" tabindex="-1"><a class="header-anchor" href="#_1-write-component-code"><span>1. Write component code</span></a></h2><blockquote><p>Example: Encapsulate an input box control with a customizable prefix, component</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  &lt;a-input v-bind=&quot;getBindValue&quot; v-model:value=&quot;showText&quot; @input=&quot;backValue&quot; /&gt;</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">  import { defineComponent, ref, unref, watch, computed } from &#39;vue&#39;;</span>
<span class="line">  import { useAttrs } from &#39;/@/hooks/core/useAttrs&#39;;</span>
<span class="line">  import { propTypes } from &#39;/@/utils/propTypes&#39;;</span>
<span class="line">  import { omit } from &#39;lodash-es&#39;;</span>
<span class="line"></span>
<span class="line">  export default defineComponent({</span>
<span class="line">    name: &#39;JPrefixInput&#39;,</span>
<span class="line">    props: {</span>
<span class="line">      value: propTypes.string.def(&#39;&#39;),</span>
<span class="line">      prefixStr: propTypes.string.def(&#39;&#39;),</span>
<span class="line">      placeholder: propTypes.string.def(&#39;&#39;),</span>
<span class="line">    },</span>
<span class="line">    emits: [&#39;change&#39;, &#39;update:value&#39;],</span>
<span class="line">    setup(props, { emit }) {</span>
<span class="line">      //属性</span>
<span class="line">      const attrs = useAttrs();</span>
<span class="line">      //表单显示文本值</span>
<span class="line">      const showText = ref(&#39;&#39;);</span>
<span class="line">      //组件绑定属性</span>
<span class="line">      const getBindValue = computed(() =&gt; {</span>
<span class="line">        return omit(Object.assign({}, unref(props), unref(attrs)), [&#39;value&#39;]);</span>
<span class="line">      });</span>
<span class="line">      //监听value变化</span>
<span class="line">      watch(</span>
<span class="line">        () =&gt; props.value,</span>
<span class="line">        () =&gt; {</span>
<span class="line">          initVal();</span>
<span class="line">        },</span>
<span class="line">        { immediate: true }</span>
<span class="line">      );</span>
<span class="line"></span>
<span class="line">      /**</span>
<span class="line">       * 初始化文本值</span>
<span class="line">       */</span>
<span class="line">      function initVal() {</span>
<span class="line">        if (!props.value) {</span>
<span class="line">          showText.value = &#39;&#39;;</span>
<span class="line">        } else {</span>
<span class="line">          let text = props.value;</span>
<span class="line">          showText.value = text ? text.replace(props.prefixStr, &#39;&#39;) : text;</span>
<span class="line">        }</span>
<span class="line">      }</span>
<span class="line"></span>
<span class="line">      /**</span>
<span class="line">       * 返回文本值</span>
<span class="line">       */</span>
<span class="line">      function backValue(e) {</span>
<span class="line">        let text = e?.target?.value ?? &#39;&#39;;</span>
<span class="line">        if (props.prefixStr &amp;&amp; text) {</span>
<span class="line">          text = props.prefixStr + text;</span>
<span class="line">        }</span>
<span class="line">        emit(&#39;change&#39;, text);</span>
<span class="line">        emit(&#39;update:value&#39;, text);</span>
<span class="line">      }</span>
<span class="line"></span>
<span class="line">      return { showText, attrs, getBindValue, backValue };</span>
<span class="line">    },</span>
<span class="line">  });</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span>
<span class="line">&lt;style scoped&gt;&lt;/style&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="_2-define-types-and-register-components" tabindex="-1"><a class="header-anchor" href="#_2-define-types-and-register-components"><span>2. Define types and register components</span></a></h2><h3 id="_2-1-registering-components" tabindex="-1"><a class="header-anchor" href="#_2-1-registering-components"><span>2.1 Registering Components</span></a></h3><blockquote><p><code>src/components/Form/src/componentMap.ts</code>Register the encapsulated JPrefixInput component in</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">import JPrefixInput from &#39;./jeecg/components/JPrefixInput.vue&#39;;</span>
<span class="line"> //...忽略</span>
<span class="line">componentMap.set(&#39;JPrefixInput&#39;, JPrefixInput);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="_2-2-defining-component-types" tabindex="-1"><a class="header-anchor" href="#_2-2-defining-component-types"><span>2.2 Defining component types</span></a></h3><blockquote><p>Define <code>src/components/Form/src/types/index.ts</code> the JPrefixInput component type in order to set it in the form configuration</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">export type ComponentType =</span>
<span class="line"> // ...忽略</span>
<span class="line"> | &#39;JPrefixInput&#39;；</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="_3-use-of-test-components" tabindex="-1"><a class="header-anchor" href="#_3-use-of-test-components"><span>3. Use of test components</span></a></h2><h3 id="_3-1-configure-and-use-in-the-form" tabindex="-1"><a class="header-anchor" href="#_3-1-configure-and-use-in-the-form"><span>3.1 Configure and use in the form</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line"> //在表单中使用JPrefixInput组件</span>
<span class="line"> {</span>
<span class="line">    field: &#39;name&#39;,</span>
<span class="line">    //2.2类型定义后，这里可以设置，不然会报错</span>
<span class="line">    component: &#39;JPrefixInput&#39;,</span>
<span class="line">    label: &#39;前缀设置组件&#39;,</span>
<span class="line">    componentProps: {</span>
<span class="line">    //组件传参，设置前缀为 &#39;姓名: &#39;</span>
<span class="line">      prefixStr: &#39;姓名: &#39;,</span>
<span class="line">    },</span>
<span class="line">    colProps: {</span>
<span class="line">      span: 12,</span>
<span class="line">    },</span>
<span class="line">  },</span>
<span class="line">  {</span>
<span class="line">    field: &#39;name&#39;,</span>
<span class="line">    component: &#39;JEllipsis&#39;,</span>
<span class="line">    label: &#39;输入值&#39;,</span>
<span class="line">    colProps: { span: 12 },</span>
<span class="line">  },</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="_3-1-page-effect" tabindex="-1"><a class="header-anchor" href="#_3-1-page-effect"><span>3.1 Page effect:</span></a></h3><p><img src="https://lfs.k.topthink.com/lfs/31fa38345187722d238098c8b2705262f6a19edd5143df88899f1fd094a7ac07.dat" alt=""></p>`,20)]))}const t=s(l,[["render",p]]),r=JSON.parse('{"path":"/syncadmin/front-end-experience/front-end-tips/defining-a-new-component.html","title":"Defining a new component","lang":"ko-KR","frontmatter":{"order":3},"git":{"updatedTime":1749507909000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"b750c3240053572cbcbb08ac1e9cd0bd9974af53","time":1749507909000,"email":"poh@empasy.com","author":"poh","message":"build to docs:build"}]},"filePathRelative":"syncadmin/front-end-experience/front-end-tips/defining-a-new-component.md"}');export{t as comp,r as data};
