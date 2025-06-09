import{_ as e,c as s,a as i,o as a}from"./app-CC5quYyA.js";const l={};function c(r,n){return a(),s("div",null,n[0]||(n[0]=[i(`<h1 id="no-token-required-between-microservices" tabindex="-1"><a class="header-anchor" href="#no-token-required-between-microservices"><span>No token required between microservices</span></a></h1><h2 id="common-requirements" tabindex="-1"><a class="header-anchor" href="#common-requirements"><span>Common requirements</span></a></h2><ol><li>Microservice scheduled tasks, calling other services through openfeign, reporting an error token invalid</li><li>How to avoid login when calling Feign between microservices without exposing the gateway</li></ol><h2 id="solution" tabindex="-1"><a class="header-anchor" href="#solution"><span>solution</span></a></h2><blockquote><p>The problem of calling between services without TOEKN can be solved by the following three steps.</p></blockquote><h3 id="_1-generate-a-temporary-token-token" tabindex="-1"><a class="header-anchor" href="#_1-generate-a-temporary-token-token"><span>1. Generate a temporary token TOKEN</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">/**</span>
<span class="line"> * 获取临时令牌</span>
<span class="line"> *</span>
<span class="line"> * 模拟登陆接口，获取模拟 Token</span>
<span class="line"> * @return</span>
<span class="line"> */</span>
<span class="line">public static String getTemporaryToken() {</span>
<span class="line">    RedisUtil redisUtil = SpringContextUtils.getBean(RedisUtil.class);</span>
<span class="line">    //模拟登录生成临时Token</span>
<span class="line">    //参数说明：第一个参数是用户名、第二个参数是密码的加密串</span>
<span class="line">    String token = JwtUtil.sign(&quot;??&quot;, &quot;??&quot;);</span>
<span class="line">    // 设置Token缓存有效时间为 5 分钟</span>
<span class="line">    redisUtil.set(CommonConstant.PREFIX_USER_TOKEN + token, token);</span>
<span class="line">    redisUtil.expire(CommonConstant.PREFIX_USER_TOKEN + token, 5 * 60 * 1000);</span>
<span class="line">    return token;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="_2-add-the-following-code-before-calling-the-feign-interface" tabindex="-1"><a class="header-anchor" href="#_2-add-the-following-code-before-calling-the-feign-interface"><span>2. Add the following code before calling the feign interface</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">//1.设置线程会话Token</span>
<span class="line">UserTokenContext.setToken(getTemporaryToken());</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="_3-after-the-feign-interface-call-is-completed-call-the-method-to-delete-the-temporary-token" tabindex="-1"><a class="header-anchor" href="#_3-after-the-feign-interface-call-is-completed-call-the-method-to-delete-the-temporary-token"><span>3. After the feign interface call is completed, call the method to delete the temporary token</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">//2.使用完删除Token，避免性能（这一步可以不做，但是为了性能建议执行）</span>
<span class="line">UserTokenContext.remove();</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><blockquote><p>Sample code screenshot:</p></blockquote><p><img src="https://lfs.k.topthink.com/lfs/3a6e15b40fabca4f66642db74e9e804a3ef2514be3aa616b3ea8b5fe4dd16156.dat" alt=""></p><h3 id="_4-xxljob-complete-code" tabindex="-1"><a class="header-anchor" href="#_4-xxljob-complete-code"><span>4.xxljob complete code</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line"></span>
<span class="line">package org.jeecg.modules.demo.xxljob;</span>
<span class="line"></span>
<span class="line">import com.xxl.job.core.biz.model.ReturnT;</span>
<span class="line">import com.xxl.job.core.handler.annotation.XxlJob;</span>
<span class="line">import lombok.extern.slf4j.Slf4j;</span>
<span class="line">import org.jeecg.common.config.mqtoken.UserTokenContext;</span>
<span class="line">import org.jeecg.common.constant.CommonConstant;</span>
<span class="line">import org.jeecg.common.system.api.ISysBaseAPI;</span>
<span class="line">import org.jeecg.common.system.util.JwtUtil;</span>
<span class="line">import org.jeecg.common.util.RedisUtil;</span>
<span class="line">import org.jeecg.common.util.SpringContextUtils;</span>
<span class="line">import org.springframework.beans.factory.annotation.Autowired;</span>
<span class="line">import org.springframework.stereotype.Component;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">/**</span>
<span class="line"> * xxl-job定时任务测试</span>
<span class="line"> */</span>
<span class="line">@Component</span>
<span class="line">@Slf4j</span>
<span class="line">public class TestJobHandler {</span>
<span class="line">    @Autowired</span>
<span class="line">    ISysBaseAPI sysBaseApi;</span>
<span class="line"></span>
<span class="line">    /**</span>
<span class="line">     * 简单任务</span>
<span class="line">     *</span>
<span class="line">     * @param params</span>
<span class="line">     * @return</span>
<span class="line">     */</span>
<span class="line"></span>
<span class="line">    @XxlJob(value = &quot;testJob&quot;)</span>
<span class="line">    public ReturnT&lt;String&gt; demoJobHandler(String params) {</span>
<span class="line">        //1.设置线程会话Token</span>
<span class="line">        UserTokenContext.setToken(getTemporaryToken());</span>
<span class="line"></span>
<span class="line">        log.info(&quot;我是 jeecg-demo 服务里的定时任务 testJob , 我执行了...............................&quot;);</span>
<span class="line">        log.info(&quot;我调用 jeecg-system 服务的字典接口：{}&quot;,sysBaseApi.queryAllDict());</span>
<span class="line"></span>
<span class="line">        //2.使用完删除Token，避免性能</span>
<span class="line">        UserTokenContext.remove();</span>
<span class="line">        return ReturnT.SUCCESS;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    public void init() {</span>
<span class="line">        log.info(&quot;init&quot;);</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    public void destroy() {</span>
<span class="line">        log.info(&quot;destory&quot;);</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    /**</span>
<span class="line">     * 获取临时令牌</span>
<span class="line">     *</span>
<span class="line">     * 模拟登陆接口，获取模拟 Token</span>
<span class="line">     * @return</span>
<span class="line">     */</span>
<span class="line">    public static String getTemporaryToken() {</span>
<span class="line">        RedisUtil redisUtil = SpringContextUtils.getBean(RedisUtil.class);</span>
<span class="line">        // 模拟登录生成Token</span>
<span class="line">        String token = JwtUtil.sign(&quot;??&quot;, &quot;??&quot;);</span>
<span class="line">        // 设置Token缓存有效时间为 5 分钟</span>
<span class="line">        redisUtil.set(CommonConstant.PREFIX_USER_TOKEN + token, token);</span>
<span class="line">        redisUtil.expire(CommonConstant.PREFIX_USER_TOKEN + token, 5 * 60 * 1000);</span>
<span class="line">        return token;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p>`,19)]))}const o=e(l,[["render",c]]),d=JSON.parse('{"path":"/syncboot/microservice/practical-skills/no-token-required-between-microservices.html","title":"No token required between microservices","lang":"ko-KR","frontmatter":{"order":5},"git":{"updatedTime":1749510202000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"e8d2845a48d72a49b99a62ed0e9511823ff14831","time":1749510202000,"email":"poh@empasy.com","author":"poh","message":"로고 alt text 변경"}]},"filePathRelative":"syncboot/microservice/practical-skills/no-token-required-between-microservices.md"}');export{o as comp,d as data};
