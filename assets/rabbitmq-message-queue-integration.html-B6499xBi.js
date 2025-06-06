import{_ as s,c as a,a as n,o as i}from"./app-DeddRHAy.js";const t={};function l(r,e){return i(),a("div",null,e[0]||(e[0]=[n(`<h1 id="rabbitmq-message-queue-integration" tabindex="-1"><a class="header-anchor" href="#rabbitmq-message-queue-integration"><span>RabbitMQ message queue integration</span></a></h1><blockquote><p>RabbitMQ is used to implement message queues. Application scenarios: functional decoupling, traffic peak reduction, asynchronous processing</p></blockquote><p>Sample code:<code>jeecg-cloud-module\\jeecg-cloud-test\\jeecg-cloud-test-rabbitmq</code></p><h2 id="prerequisite-building-rabbitmq-service" tabindex="-1"><a class="header-anchor" href="#prerequisite-building-rabbitmq-service"><span>Prerequisite: Building RabbitMQ service</span></a></h2><ul><li><p>1. Install RabbitMq software</p><p><a href="https://my.oschina.net/jeecg/blog/4729143" target="_blank" rel="noopener noreferrer">Install RabbitMq using docker</a></p></li><li><p>2. Visit RabbitM backend</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">http://localhost:15672</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>copy</p></li></ul><p><img src="https://upload.jeecg.com/jeecg/help/jeecgback/images/screenshot_1649776206000.png" alt=""></p><ul><li><ol start="3"><li>Create two switches</li></ol></li></ul><blockquote><p>If the program does not automatically create these two switches, create them manually.</p></blockquote><table><thead><tr><th>switch</th><th>type</th></tr></thead><tbody><tr><td>jeecg.delayed.exchange</td><td>x-delayed-message</td></tr><tr><td>jeecg.direct.exchange</td><td>direct</td></tr></tbody></table><p>Effect picture:</p><p><img src="https://lfs.k.topthink.com/lfs/990c47c302e2b7ef2c48e19ee4020a5b8efd65787d69e0db7cbbfcbc90a9dd69.dat" alt=""></p><h2 id="integrate-rabbitmq-starter" tabindex="-1"><a class="header-anchor" href="#integrate-rabbitmq-starter"><span>Integrate rabbitmq starter</span></a></h2><h3 id="step-1-integrate-and-introduce-message-queue-starter-dependencies" tabindex="-1"><a class="header-anchor" href="#step-1-integrate-and-introduce-message-queue-starter-dependencies"><span>Step 1: Integrate and introduce message queue starter dependencies</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;!--引入rabbitmq Starter--&gt;</span>
<span class="line">&lt;dependency&gt;</span>
<span class="line">    &lt;groupId&gt;org.jeecgframework.boot&lt;/groupId&gt;</span>
<span class="line">    &lt;artifactId&gt;jeecg-boot-starter-rabbitmq&lt;/artifactId&gt;</span>
<span class="line">&lt;/dependency&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h3 id="step-2-push-mq-message" tabindex="-1"><a class="header-anchor" href="#step-2-push-mq-message"><span>Step 2: Push MQ message</span></a></h3><p>In order to simplify the use of MQ, a package is made to provide a simple tool class for pushing messages</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">@Autowired</span>
<span class="line">private RabbitMqClient  rabbitMqClient;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p><strong>Common methods</strong></p><ul><li>Send immediately<br> void sendMessage(String queueName, Object params)</li><li>Send a delayed message<br> void sendMessage(String queueName, Object params, Integer expiration)</li><li>Send remote message<br> void publishEvent(String handlerName, BaseMap params)</li></ul><p><strong>Unified description of method parameters</strong></p><table><thead><tr><th>parameter name</th><th>Parameter Description</th><th>Parameter Type</th></tr></thead><tbody><tr><td>queueName</td><td>Queue name (the queue is automatically created, no need to do it manually)</td><td>String</td></tr><tr><td>handlerName</td><td>parameter</td><td>Custom message processor beanName</td></tr><tr><td>params</td><td>parameter</td><td>Object</td></tr><tr><td>expiration</td><td>delay</td><td>int (milliseconds)</td></tr></tbody></table><blockquote><p>queueName does not need to be created in MQ, jeecg will automatically create it after encapsulation.</p></blockquote><h3 id="step-3-write-a-complete-example" tabindex="-1"><a class="header-anchor" href="#step-3-write-a-complete-example"><span>Step 3: Write a complete example</span></a></h3><blockquote><p>Send and receive messages in 3 simple steps</p></blockquote><ul><li>1. Introducing RabbitMqClient</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">@Autowired</span>
<span class="line">private RabbitMqClient  rabbitMqClient;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><ul><li>2. Send a message</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">BaseMap map = new BaseMap();</span>
<span class="line">map.put(&quot;orderId&quot;, &quot;12345&quot;);</span>
<span class="line">// test2是队列名字，程序自动创建</span>
<span class="line">rabbitMqClient.sendMessage(&quot;test2&quot;, map);</span>
<span class="line">// 延迟10秒发送</span>
<span class="line">rabbitMqClient.sendMessage(&quot;test2&quot;, map,10000);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><ul><li>3. Accept the message</li></ul><p>Use annotations to <code>@RabbitListener(queues = &quot;test2&quot;)</code>define receivers (you can define N receivers, and messages will be sent evenly to N receivers)</p><p><strong>Monitoring Writing Method 1</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">import com.rabbitmq.client.Channel;</span>
<span class="line">import lombok.extern.slf4j.Slf4j;</span>
<span class="line">import org.jeecg.boot.starter.rabbitmq.core.BaseRabbiMqHandler;</span>
<span class="line">import org.jeecg.boot.starter.rabbitmq.listenter.MqListener;</span>
<span class="line">import org.jeecg.common.annotation.RabbitComponent;</span>
<span class="line">import org.jeecg.common.base.BaseMap;</span>
<span class="line">import org.springframework.amqp.rabbit.annotation.RabbitHandler;</span>
<span class="line">import org.springframework.amqp.rabbit.annotation.RabbitListener;</span>
<span class="line">import org.springframework.amqp.support.AmqpHeaders;</span>
<span class="line">import org.springframework.messaging.handler.annotation.Header;</span>
<span class="line"></span>
<span class="line">@Slf4j</span>
<span class="line">@RabbitListener(queues = &quot;test2&quot;)</span>
<span class="line">@RabbitComponent(value = &quot;testListener2&quot;)</span>
<span class="line">public class DemoRabbitMqListener3 extends BaseRabbiMqHandler&lt;BaseMap&gt; {</span>
<span class="line"></span>
<span class="line">    @RabbitHandler</span>
<span class="line">    public void onMessage(BaseMap baseMap, Channel channel, @Header(AmqpHeaders.DELIVERY_TAG) long deliveryTag) {</span>
<span class="line">        super.onMessage(baseMap, deliveryTag, channel, new MqListener&lt;BaseMap&gt;() {</span>
<span class="line">            @Override</span>
<span class="line">            public void handler(BaseMap map, Channel channel) {</span>
<span class="line">                String orderId = map.get(&quot;orderId&quot;).toString();</span>
<span class="line">                log.info(&quot;业务处理3：orderId:&quot; + orderId);</span>
<span class="line">            }</span>
<span class="line">        });</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>or</p><p><strong>Monitoring Writing Method 2</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">import com.rabbitmq.client.Channel;</span>
<span class="line">import lombok.extern.slf4j.Slf4j;</span>
<span class="line">import org.jeecg.boot.starter.rabbitmq.core.BaseRabbiMqHandler;</span>
<span class="line">import org.jeecg.boot.starter.rabbitmq.listenter.MqListener;</span>
<span class="line">import org.jeecg.common.annotation.RabbitComponent;</span>
<span class="line">import org.jeecg.common.base.BaseMap;</span>
<span class="line">import org.springframework.amqp.rabbit.annotation.RabbitListener;</span>
<span class="line">import org.springframework.amqp.support.AmqpHeaders;</span>
<span class="line">import org.springframework.messaging.handler.annotation.Header;</span>
<span class="line"></span>
<span class="line">@Slf4j</span>
<span class="line">@RabbitComponent(value = &quot;testListener2&quot;)</span>
<span class="line">public class DemoRabbitMqListener2 extends BaseRabbiMqHandler&lt;BaseMap&gt; {</span>
<span class="line"></span>
<span class="line">    @RabbitListener(queues = &quot;test2&quot;)</span>
<span class="line">    public void onMessage(BaseMap baseMap, Channel channel, @Header(AmqpHeaders.DELIVERY_TAG) long deliveryTag) {</span>
<span class="line">        super.onMessage(baseMap, deliveryTag, channel, new MqListener&lt;BaseMap&gt;() {</span>
<span class="line">            @Override</span>
<span class="line">            public void handler(BaseMap map, Channel channel) {</span>
<span class="line">                String orderId = map.get(&quot;orderId&quot;);</span>
<span class="line">                log.info(&quot;业务处理2：orderId:&quot; + orderId);</span>
<span class="line">            }</span>
<span class="line">        });</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>N receivers effect diagram<br><img src="https://upload.jeecg.com/jeecg/help/jeecgback/images/screenshot_1606440639808.png" alt=""></p>`,42)]))}const p=s(t,[["render",l]]),c=JSON.parse('{"path":"/syncboot/microservice/common-starter-integration/rabbitmq-message-queue-integration.html","title":"RabbitMQ message queue integration","lang":"ko-KR","frontmatter":{"order":3},"git":{"updatedTime":1749179241000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"a96cbbf1f6c96d0e9d6bafa4174131f10429b849","time":1749179241000,"email":"poh@empasy.com","author":"poh","message":"sync 제품군 추가"}]},"filePathRelative":"syncboot/microservice/common-starter-integration/rabbitmq-message-queue-integration.md"}');export{p as comp,c as data};
