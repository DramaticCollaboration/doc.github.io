import{_ as e,c as s,a as i,o as a}from"./app-CU20V-HQ.js";const t={};function l(d,n){return a(),s("div",null,n[0]||(n[0]=[i(`<h1 id="desensitization-annotation-sensitive" tabindex="-1"><a class="header-anchor" href="#desensitization-annotation-sensitive"><span>Desensitization annotation @Sensitive</span></a></h1><blockquote><p>Usage description: Data desensitization is to process some sensitive information through encryption, formatting, etc., and show users a new or formatted information to avoid the exposure of sensitive information.</p></blockquote><h3 id="_1-interface-desensitization-annotation" tabindex="-1"><a class="header-anchor" href="#_1-interface-desensitization-annotation"><span>1. Interface desensitization annotation</span></a></h3><blockquote><p>Desensitizing and encrypting interface data is implemented, and only encryption is performed. Generally, this solution is used for data encryption display.</p></blockquote><h4 id="_1-1-annotation-introduction" tabindex="-1"><a class="header-anchor" href="#_1-1-annotation-introduction"><span>1.1 Annotation Introduction</span></a></h4><table><thead><tr><th>annotation</th><th>Scope</th><th>describe</th></tr></thead><tbody><tr><td>@Sensitive</td><td>entity</td><td><code>脱敏加密注解</code>, indicating that the interface returns the value of this entity for desensitization</td></tr></tbody></table><h4 id="_1-2-examples" tabindex="-1"><a class="header-anchor" href="#_1-2-examples"><span>1.2 Examples</span></a></h4><p>Just add annotations to the entity, and the returned interface field data will be automatically encrypted<br><img src="https://lfs.k.topthink.com/lfs/211dde4fed24b23fceb057287bca6223625c49798fdaa64f8c4729205ed9ccc1.dat" alt=""></p><h4 id="_1-3-desensitization-type" tabindex="-1"><a class="header-anchor" href="#_1-3-desensitization-type"><span>1.3 Desensitization Type</span></a></h4><p>Data processing rules support: encryption, user name formatting, ID number formatting, email and phone number formatting, etc.<br> Syntax: Field annotation @Sensitive attribute type, the default is encode (encryption)</p><p>The following sensitive types are supported:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">public enum SensitiveEnum {</span>
<span class="line">    /**</span>
<span class="line">     * 加密</span>
<span class="line">     */</span>
<span class="line">    ENCODE,</span>
<span class="line">    /**</span>
<span class="line">     * 中文名</span>
<span class="line">     */</span>
<span class="line">    CHINESE_NAME,</span>
<span class="line">    /**</span>
<span class="line">     * 身份证号</span>
<span class="line">     */</span>
<span class="line">    ID_CARD,</span>
<span class="line">    /**</span>
<span class="line">     * 座机号</span>
<span class="line">     */</span>
<span class="line">    FIXED_PHONE,</span>
<span class="line">    /**</span>
<span class="line">     * 手机号</span>
<span class="line">     */</span>
<span class="line">    MOBILE_PHONE,</span>
<span class="line">    /**</span>
<span class="line">     * 地址</span>
<span class="line">     */</span>
<span class="line">    ADDRESS,</span>
<span class="line">    /**</span>
<span class="line">     * 电子邮件</span>
<span class="line">     */</span>
<span class="line">    EMAIL,</span>
<span class="line">    /**</span>
<span class="line">     * 银行卡</span>
<span class="line">     */</span>
<span class="line">    BANK_CARD,</span>
<span class="line">    /**</span>
<span class="line">     * 公司开户银行联号</span>
<span class="line">     */</span>
<span class="line">    CNAPS_CODE;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="_2-method-desensitization-annotation" tabindex="-1"><a class="header-anchor" href="#_2-method-desensitization-annotation"><span>2. Method Desensitization Annotation</span></a></h3><blockquote><p>The service method can be desensitized, encrypted, and decrypted.</p></blockquote><h4 id="_2-1-annotation-introduction" tabindex="-1"><a class="header-anchor" href="#_2-1-annotation-introduction"><span>2.1 Annotation Introduction</span></a></h4><table><thead><tr><th>annotation</th><th>Scope</th><th>describe</th></tr></thead><tbody><tr><td>@SensitiveEncode</td><td>Service Method</td><td><code>脱敏加密注解</code>, indicating that the return value of this method needs to be desensitized</td></tr><tr><td>@SensitiveDecode</td><td>Service Method</td><td><code>脱敏解密注解</code>, indicating that the return value of this method needs to be decrypted (only supports decryption after desensitization encoding)</td></tr><tr><td>@SensitiveField</td><td>Entity Fields</td><td>Indicates that the field needs to be desensitized</td></tr></tbody></table><blockquote><p>Important reminder: Data masking is implemented based on AOP, so do not call methods with the above annotations in the same class, which will cause AOP to fail.</p></blockquote><h4 id="_2-2-usage-of-desensitization-annotation" tabindex="-1"><a class="header-anchor" href="#_2-2-usage-of-desensitization-annotation"><span>2.2 Usage of desensitization annotation</span></a></h4><ol><li>Add annotations to entity fields: <code>@SensitiveField</code><br> only annotate the fields that need to be desensitized, and do not annotate the fields that do not need to be desensitized</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">public class LoginUser {</span>
<span class="line"></span>
<span class="line">   /**</span>
<span class="line">    * 登录人密码</span>
<span class="line">    */</span>
<span class="line">   @SensitiveField</span>
<span class="line">   private String password;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><ol start="2"><li>Add annotations to the service method<code>@SensitiveEncode</code></li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">@Override</span>
<span class="line">@SensitiveEncode</span>
<span class="line">public LoginUser getEncodeUserInfo(String username){</span>
<span class="line">   if(oConvertUtils.isEmpty(username)) {</span>
<span class="line">      return null;</span>
<span class="line">   }</span>
<span class="line">   LoginUser loginUser = new LoginUser();</span>
<span class="line">   SysUser sysUser = userMapper.getUserByName(username);</span>
<span class="line">   if(sysUser==null) {</span>
<span class="line">      return null;</span>
<span class="line">   }</span>
<span class="line">   BeanUtils.copyProperties(sysUser, loginUser);</span>
<span class="line">   return loginUser;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><blockquote><p>Note: Adding an annotation to a method <code>@SensitiveEncode</code>means that the return value of the method will be desensitized.<br> Desensitization logic:</p><ul><li><code>@SensitiveField</code>The interceptor will perform desensitization on the annotated fields in the entity LoginUser .</li><li>Method return value type support <code>LoginUser</code>Also supports <code>List&lt;LoginUser&gt;</code></li></ul></blockquote><ol start="3"><li>Desensitized data type<br> data processing rules support: <code>加密处理、用户名称格式化、身份证号码格式化、邮件电话格式化等</code><br> Syntax: field annotation @SensitiveField attribute type, the default is encode (encryption processing), such as:</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">/**</span>
<span class="line"> * 登录人密码</span>
<span class="line"> */</span>
<span class="line">@SensitiveField(type = SensitiveEnum.ENCODE)</span>
<span class="line">private String password;</span>
<span class="line"></span>
<span class="line">/**</span>
<span class="line"> * 电子邮件</span>
<span class="line"> */</span>
<span class="line">@SensitiveField(type = SensitiveEnum.EMAIL)</span>
<span class="line">private String email;</span>
<span class="line"></span>
<span class="line">/**</span>
<span class="line"> * 电话</span>
<span class="line"> */</span>
<span class="line">@SensitiveField(type = SensitiveEnum.MOBILE_PHONE)</span>
<span class="line">private String phone;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>For more information, see enumeration class: org.jeecg.common.desensitization.enums.SensitiveEnum</p><h4 id="_2-3-decryption-annotation-usage" tabindex="-1"><a class="header-anchor" href="#_2-3-decryption-annotation-usage"><span>2.3 Decryption Annotation Usage</span></a></h4><blockquote><p>Note: After desensitizing and encrypting the data, jeecgboot also provides a decryption annotation to restore the real data.<br> Syntax: Adding the annotation @SensitiveDecode to the method means that the return value of the method will be decrypted.</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line"></span>
<span class="line">@SensitiveDecode</span>
<span class="line">public LoginUser getUserByName(String username) {</span>
<span class="line">   LoginUser user = sysUserService.getEncodeUserInfo(username);</span>
<span class="line">   return user;</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p>`,34)]))}const c=e(t,[["render",l]]),r=JSON.parse('{"path":"/syncboot/common-annotations/desensitization-annotation-sensitive.html","title":"Desensitization annotation @Sensitive","lang":"ko-KR","frontmatter":{"order":8},"git":{"updatedTime":1749507909000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"b750c3240053572cbcbb08ac1e9cd0bd9974af53","time":1749507909000,"email":"poh@empasy.com","author":"poh","message":"build to docs:build"}]},"filePathRelative":"syncboot/common-annotations/desensitization-annotation-sensitive.md"}');export{c as comp,r as data};
