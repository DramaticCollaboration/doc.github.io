import{_ as n,c as e,a,o as i}from"./app-DGEuurYf.js";const l={};function c(r,s){return i(),e("div",null,s[0]||(s[0]=[a(`<h1 id="cache-usage" tabindex="-1"><a class="header-anchor" href="#cache-usage"><span>Cache Usage</span></a></h1><p>Store temporary cache</p><blockquote><p>Features: need to be defined, with initial value, responsive, global use, refresh reset<br> Pinia official documentation <a href="https://pinia.vuejs.org" target="_blank" rel="noopener noreferrer">https://pinia.vuejs.org</a></p></blockquote><h3 id="create-a-store-cache" tabindex="-1"><a class="header-anchor" href="#create-a-store-cache"><span>Create a store cache</span></a></h3><p>Sample Code</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">import {defineStore} from &#39;pinia&#39;</span>
<span class="line">import {store} from &#39;/@/store&#39;</span>
<span class="line"></span>
<span class="line">export const useMyStore = defineStore({</span>
<span class="line">  // 定义缓存id</span>
<span class="line">  id: &#39;my-store&#39;,</span>
<span class="line">  // 在这里写当前缓存里储存的变量</span>
<span class="line">  state() {</span>
<span class="line">    return {</span>
<span class="line">      msg: &#39;hello world!!&#39;,</span>
<span class="line">    }</span>
<span class="line">  },</span>
<span class="line">  // 定义当前缓存公开的 getters，相当于vue的计算属性</span>
<span class="line">  getters: {</span>
<span class="line">    getMsg(): string {</span>
<span class="line">      return this.msg</span>
<span class="line">    },</span>
<span class="line">  },</span>
<span class="line">  // 定义当前缓存公开的方法，可以直接调用并传参</span>
<span class="line">  actions: {</span>
<span class="line">    setMsg(msg: string) {</span>
<span class="line">      this.msg = msg</span>
<span class="line">    },</span>
<span class="line">  },</span>
<span class="line">})</span>
<span class="line"></span>
<span class="line">// 在vue3的setup方法之外使用时，需要调用此方法</span>
<span class="line">export function useUseMyStoreWithOut() {</span>
<span class="line">  return useMyStore(store)</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="using-store-cache" tabindex="-1"><a class="header-anchor" href="#using-store-cache"><span>Using store cache</span></a></h3><p>Sample Code</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  {{ myStore.getMsg }}</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">import {useMyStore} from &#39;/@/store/modules/myStore&#39;</span>
<span class="line"></span>
<span class="line">export default {</span>
<span class="line">  name: &#39;&#39;,</span>
<span class="line">  setup() {</span>
<span class="line">    const myStore = useMyStore()</span>
<span class="line">    console.log(myStore.getMsg)</span>
<span class="line"></span>
<span class="line">    return {</span>
<span class="line">      myStore,</span>
<span class="line">    }</span>
<span class="line">  },</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h2 id="localstorage-long-term-cache" tabindex="-1"><a class="header-anchor" href="#localstorage-long-term-cache"><span>LocalStorage long-term cache</span></a></h2><blockquote><p>Features: no definition required, no initial value, non-responsive, global use, refresh without reset, multi-page universal, expiration time can be set</p></blockquote><h3 id="call-cache" tabindex="-1"><a class="header-anchor" href="#call-cache"><span>Call Cache</span></a></h3><p>The following is a sample code for calling LocalStorage</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;template&gt;</span>
<span class="line">  {{ myStoreKey }}</span>
<span class="line">&lt;/template&gt;</span>
<span class="line"></span>
<span class="line">&lt;script lang=&quot;ts&quot;&gt;</span>
<span class="line">import {createLocalStorage} from &#39;/@/utils/cache&#39;</span>
<span class="line"></span>
<span class="line">export default {</span>
<span class="line">  name: &#39;&#39;,</span>
<span class="line">  setup() {</span>
<span class="line">    const ls = createLocalStorage()</span>
<span class="line">    let myStoreKey = ls.get(&#39;myStoreKey&#39;)</span>
<span class="line">    console.log(myStoreKey)</span>
<span class="line"></span>
<span class="line">    function set(value) {</span>
<span class="line">      ls.set(&#39;myStoreKey&#39;, value)</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    return {</span>
<span class="line">      myStoreKey,</span>
<span class="line">      set,</span>
<span class="line">    }</span>
<span class="line">  },</span>
<span class="line">}</span>
<span class="line">&lt;/script&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p>`,17)]))}const t=n(l,[["render",c]]),d=JSON.parse('{"path":"/syncadmin/front-end-experience/cache-usage.html","title":"Cache Usage","lang":"ko-KR","frontmatter":{"order":4},"git":{"updatedTime":1749179241000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"a96cbbf1f6c96d0e9d6bafa4174131f10429b849","time":1749179241000,"email":"poh@empasy.com","author":"poh","message":"sync 제품군 추가"}]},"filePathRelative":"syncadmin/front-end-experience/cache-usage.md"}');export{t as comp,d as data};
