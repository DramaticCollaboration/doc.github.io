import{_ as s,c as e,a,o as i}from"./app-CGhJnnYK.js";const l={};function d(p,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="rabbitmq를-rocketmq로-변경" tabindex="-1"><a class="header-anchor" href="#rabbitmq를-rocketmq로-변경"><span>RabbitMQ를 RocketMQ로 변경</span></a></h1><blockquote><p>SyncBoot v3.6.4+<br> currently only supports rocketmq 4.x, not rocketmq 5.x</p></blockquote><h4 id="document" tabindex="-1"><a class="header-anchor" href="#document"><span>document</span></a></h4><p><a href="https://dist.apache.org/repos/dist/release/rocketmq/4.9.5" target="_blank" rel="noopener noreferrer">1 rocketmq deployment file</a><br><a href="https://rocketmq.apache.org/zh/docs/4.x/introduction/02quickstart" target="_blank" rel="noopener noreferrer">2 rocketmq deployment document</a></p><h4 id="dependency-reference" tabindex="-1"><a class="header-anchor" href="#dependency-reference"><span>Dependency Reference</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">&lt;dependency&gt;</span>
<span class="line">    &lt;groupId&gt;org.jeecgframework.boot&lt;/groupId&gt;</span>
<span class="line">    &lt;artifactId&gt;jeecg-cloud-test-rocketmq&lt;/artifactId&gt;</span>
<span class="line">    &lt;version&gt;\${jeecgboot.version}&lt;/version&gt;</span>
<span class="line">&lt;/dependency&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h4 id="add-configuration" tabindex="-1"><a class="header-anchor" href="#add-configuration"><span>Add Configuration</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">rocketmq:</span>
<span class="line">  name-server: jeecg-boot-rocketmq:9876</span>
<span class="line">  producer:</span>
<span class="line">    group: jeecg-group</span>
<span class="line">    sendMessageTimeout: 300000</span>
<span class="line">    tls-enable: false</span>
<span class="line">spring:</span>
<span class="line">  cloud:</span>
<span class="line">    stream:</span>
<span class="line">      rocketmq:</span>
<span class="line">        binder:</span>
<span class="line">          name-server: \${rocketmq.name-server} # RocketMQ Namesrv 地址</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h4 id="convert-rabbitmq-to-rocketmq" tabindex="-1"><a class="header-anchor" href="#convert-rabbitmq-to-rocketmq"><span>Convert rabbitmq to rocketmq</span></a></h4><blockquote><p>Considering the amount of code modification required for the migration switch, the client encapsulated in rocketmq-starter has the same name as the original rabbitmq-starter client, RabbitMqClient, and the package structure is also consistent, which minimizes the workload generated during migration.</p></blockquote><h5 id="normal-message-occurs" tabindex="-1"><a class="header-anchor" href="#normal-message-occurs"><span>Normal message occurs</span></a></h5><p>原rabbitmq</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">@Autowired</span>
<span class="line">private RabbitMqClient rabbitMqClient;</span>
<span class="line"></span>
<span class="line">rabbitMqClient.sendMessage(CloudConstant.MQ_JEECG_PLACE_ORDER, map);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>Migrate to RocketMQ</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">@Autowired</span>
<span class="line">private RabbitMqClient rabbitMqClient;</span>
<span class="line"></span>
<span class="line">rabbitMqClient.sendMessage(CloudConstant.MQ_JEECG_PLACE_ORDER, map);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h5 id="send-delayed-message" tabindex="-1"><a class="header-anchor" href="#send-delayed-message"><span>Send Delayed Message</span></a></h5><p>原rabbitmq</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">@Autowired</span>
<span class="line">private RabbitMqClient rabbitMqClient;</span>
<span class="line"></span>
<span class="line">// 延迟10秒</span>
<span class="line">rabbitMqClient.sendMessage(CloudConstant.MQ_JEECG_PLACE_ORDER_TIME, map,10);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>Migrate to RocketMQ</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">@Autowired</span>
<span class="line">private RabbitMqClient rabbitMqClient;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    /**</span>
<span class="line">     * 延迟消息， delayLevel取如下列表中的值</span>
<span class="line">     * Level 1: 1s（1秒）</span>
<span class="line">     * Level 2: 5s（5秒）</span>
<span class="line">     * Level 3: 10s（10秒）</span>
<span class="line">     * Level 4: 30s（30秒）</span>
<span class="line">     * Level 5: 1m（1分钟）</span>
<span class="line">     * Level 6: 2m（2分钟）</span>
<span class="line">     * Level 7: 3m（3分钟）</span>
<span class="line">     * Level 8: 4m（4分钟）</span>
<span class="line">     * Level 9: 5m（5分钟）</span>
<span class="line">     * Level 10: 6m（6分钟）</span>
<span class="line">     * Level 11: 7m（7分钟）</span>
<span class="line">     * Level 12: 8m（8分钟）</span>
<span class="line">     * Level 13: 9m（9分钟）</span>
<span class="line">     * Level 14: 10m（10分钟）</span>
<span class="line">     * Level 15: 20m（20分钟）</span>
<span class="line">     * Level 16: 30m（30分钟）</span>
<span class="line">     * Level 17: 1h（1小时）</span>
<span class="line">     * Level 18: 2h（2小时）</span>
<span class="line">     */</span>
<span class="line">rabbitMqClient.sendMessage(CloudConstant.MQ_JEECG_PLACE_ORDER_TIME, map,2);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h5 id="bus-message-occurs" tabindex="-1"><a class="header-anchor" href="#bus-message-occurs"><span>Bus message occurs</span></a></h5><p>原rabbitmq</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">@Autowired</span>
<span class="line">private RabbitMqClient rabbitMqClient;</span>
<span class="line"></span>
<span class="line">//rabbitmq消息总线测试</span>
<span class="line">BaseMap params = new BaseMap();</span>
<span class="line">params.put(&quot;orderId&quot;, &quot;123456&quot;);</span>
<span class="line">rabbitMqClient.publishEvent(CloudConstant.MQ_DEMO_BUS_EVENT, params);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>Migrate to RocketMQ</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">@Autowired</span>
<span class="line">private RabbitMqClient rabbitMqClient;</span>
<span class="line"></span>
<span class="line">//rocketmq消息总线测试</span>
<span class="line">BaseMap params = new BaseMap();</span>
<span class="line">params.put(&quot;orderId&quot;, &quot;123456&quot;);</span>
<span class="line">rabbitMqClient.publishEvent(CloudConstant.MQ_DEMO_BUS_EVENT, params);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h5 id="normal-message-monitoring-delayed-message-monitoring" tabindex="-1"><a class="header-anchor" href="#normal-message-monitoring-delayed-message-monitoring"><span>Normal message monitoring/delayed message monitoring</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">@RabbitListener(queues = CloudConstant.MQ_JEECG_PLACE_ORDER) // 监听队列名称</span>
<span class="line">@RabbitComponent(value = &quot;helloReceiver1&quot;)</span>
<span class="line">public class HelloReceiver1 extends BaseRabbiMqHandler&lt;BaseMap&gt; {</span>
<span class="line"></span>
<span class="line">    @Autowired</span>
<span class="line">    private  RestTemplate restTemplate;</span>
<span class="line"></span>
<span class="line">    @RabbitHandler</span>
<span class="line">    public void onMessage(BaseMap baseMap, Channel channel, @Header(AmqpHeaders.DELIVERY_TAG) long deliveryTag) {</span>
<span class="line">        super.onMessage(baseMap, deliveryTag, channel, new MqListener&lt;BaseMap&gt;() {</span>
<span class="line">            @Override</span>
<span class="line">            public void handler(BaseMap map, Channel channel) {</span>
<span class="line">                //业务处理</span>
<span class="line">                String orderId = map.get(&quot;orderId&quot;).toString();</span>
<span class="line">                log.info(&quot;【我是处理人1】 MQ Receiver1，orderId : &quot; + orderId);</span>
<span class="line">            }</span>
<span class="line">        });</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>Migrate to RocketMQ</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">@Component</span>
<span class="line">// 监听topic名称，消费组</span>
<span class="line">@RocketMQMessageListener(topic = CloudConstant.MQ_JEECG_PLACE_ORDER, consumerGroup = &quot;helloReceiver1&quot;)</span>
<span class="line">public class HelloReceiver1 implements RocketMQListener&lt;BaseMap&gt; {</span>
<span class="line"></span>
<span class="line">    public void onMessage(BaseMap baseMap) {</span>
<span class="line">        log.info(&quot;helloReceiver1接收消息：&quot; + baseMap);</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h5 id="bus-message-monitoring" tabindex="-1"><a class="header-anchor" href="#bus-message-monitoring"><span>Bus message monitoring</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">@Component(CloudConstant.MQ_DEMO_BUS_EVENT)</span>
<span class="line">public class DemoBusEvent implements JeecgBusEventHandler {</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    @Override</span>
<span class="line">    public void onMessage(EventObj obj) {</span>
<span class="line">        if (ObjectUtil.isNotEmpty(obj)) {</span>
<span class="line">            BaseMap baseMap = obj.getBaseMap();</span>
<span class="line">            String orderId = baseMap.get(&quot;orderId&quot;);</span>
<span class="line">            log.info(&quot;业务处理----订单ID:&quot; + orderId);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>Migrate to RocketMQ</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">@Component(CloudConstant.MQ_DEMO_BUS_EVENT)</span>
<span class="line">public class DemoBusEvent implements JeecgBusEventHandler {</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    @Override</span>
<span class="line">    public void onMessage(EventObj obj) {</span>
<span class="line">        if (ObjectUtil.isNotEmpty(obj)) {</span>
<span class="line">            BaseMap baseMap = obj.getBaseMap();</span>
<span class="line">            String orderId = baseMap.get(&quot;orderId&quot;);</span>
<span class="line">            log.info(&quot;业务处理----订单ID:&quot; + orderId);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><p>So far, all the content that needs to be migrated has been explained. Except for the monitoring and consumption of normal messages/delayed messages, other operations do not need to be modified.</p><h4 id="rocketmq-consumer-group" tabindex="-1"><a class="header-anchor" href="#rocketmq-consumer-group"><span>rocketmq consumer group</span></a></h4><p>In the monitoring consumption annotation <code>@RocketMQMessageListener</code>, in addition to topic, there is a mandatory parameter consumeGroup, the consumer group name. RocketMQ does not provide consumer group configuration by default, and you need to specify the consumer group name yourself. However, in the monitoring consumption annotation, there is a configuration that meets the common message scenario, so you only need to specify a consumer name. You can also specify <code>rocketmq.consumer</code>the configuration of the consumer group to <code>rocketmq.consumer.group</code>match the consumerGroup name in the annotation to use the consumption configuration in the configuration file. Configurations with different group names are not shared. The following configuration is the configuration for multiple consumer groups to consume a topic</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">@RocketMQMessageListener(topic = CloudConstant.MQ_JEECG_PLACE_ORDER, consumerGroup = &quot;helloReceiver1&quot;)</span>
<span class="line"></span>
<span class="line">@RocketMQMessageListener(topic = CloudConstant.MQ_JEECG_PLACE_ORDER, consumerGroup = &quot;helloReceiver2&quot;)</span>
<span class="line"></span>
<span class="line">@RocketMQMessageListener(topic = CloudConstant.MQ_JEECG_PLACE_ORDER, consumerGroup = &quot;helloReceiver3&quot;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p><h4 id="rocketmq-production-group" tabindex="-1"><a class="header-anchor" href="#rocketmq-production-group"><span>rocketmq production group</span></a></h4><p>Currently, production configuration only supports <code>rocketmq.produce</code>configuration. If multiple production groups are required, the production group names between different applications can be modified.</p><h4 id="rocketmq-client-api" tabindex="-1"><a class="header-anchor" href="#rocketmq-client-api"><span>RocketMQ Client API</span></a></h4><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code><span class="line">   /**</span>
<span class="line">     * 同步发送</span>
<span class="line">     * @param topic</span>
<span class="line">     * @param payload</span>
<span class="line">     */</span>
<span class="line">    public void sendMessage(String topic, Object payload)</span>
<span class="line"></span>
<span class="line">    /**</span>
<span class="line">     * 同步批量发送</span>
<span class="line">     * @param topic</span>
<span class="line">     * @param payload</span>
<span class="line">     * @return</span>
<span class="line">     * @param &lt;T&gt;</span>
<span class="line">     */</span>
<span class="line">    public &lt;T&gt; SendResult sendMessage(String topic, Collection&lt;T&gt; payload)</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    /**</span>
<span class="line">     * 异步发送</span>
<span class="line">     * @param topic</span>
<span class="line">     * @param payload</span>
<span class="line">     * @param callback</span>
<span class="line">     */</span>
<span class="line">    public void sendAsyncMessage(String topic, Object payload, SendCallback callback)</span>
<span class="line"></span>
<span class="line">    /**</span>
<span class="line">     * 异步批量发送</span>
<span class="line">     * @param topic</span>
<span class="line">     * @param payload</span>
<span class="line">     * @param sendCallback</span>
<span class="line">     * @param &lt;T&gt;</span>
<span class="line">     */</span>
<span class="line">    public &lt;T&gt; void sendAsyncMessage(String topic, Collection&lt;T&gt; payload, SendCallback sendCallback)</span>
<span class="line"></span>
<span class="line">    /**</span>
<span class="line">     * 同步发送顺序消息</span>
<span class="line">     * @param topic</span>
<span class="line">     * @param payload</span>
<span class="line">     * @param hashKey</span>
<span class="line">     */</span>
<span class="line">    public void sendOrderlyMessage(String topic, Object payload, String hashKey)</span>
<span class="line"></span>
<span class="line">    /**</span>
<span class="line">     * 异步发送顺序消息</span>
<span class="line">     * @param topic</span>
<span class="line">     * @param payload</span>
<span class="line">     * @param hashKey</span>
<span class="line">     * @param callback</span>
<span class="line">     */</span>
<span class="line">    public void sendAsyncOrderlyMessage(String topic, Object payload, String hashKey, SendCallback callback)</span>
<span class="line"></span>
<span class="line">    /**</span>
<span class="line">     * Oneway消息</span>
<span class="line">     * @param topic</span>
<span class="line">     * @param payload</span>
<span class="line">     */</span>
<span class="line">    public void sendOneway(String topic, Object payload)</span>
<span class="line"></span>
<span class="line">    /**</span>
<span class="line">     * 顺序Oneway消息</span>
<span class="line">     * @param topic</span>
<span class="line">     * @param payload</span>
<span class="line">     * @param hashKey</span>
<span class="line">     */</span>
<span class="line">    public void sendOnewayOrderly(String topic, Object payload, String hashKey)</span>
<span class="line"></span>
<span class="line">    /**</span>
<span class="line">     * 事务消息</span>
<span class="line">     * @param topic</span>
<span class="line">     * @param payload</span>
<span class="line">     * @param arg</span>
<span class="line">     */</span>
<span class="line">    public void sendMessageInTransaction(String topic, Object payload, Object arg)</span>
<span class="line"></span>
<span class="line">    /**</span>
<span class="line">     * pull模式</span>
<span class="line">     * 拉取消息</span>
<span class="line">     * @param clazz</span>
<span class="line">     * @return</span>
<span class="line">     * @param &lt;T&gt;</span>
<span class="line">     */</span>
<span class="line">    public &lt;T&gt; List&lt;T&gt; receive(Class&lt;T&gt; clazz)</span>
<span class="line"></span>
<span class="line">    /**</span>
<span class="line">     * 延迟消息， delayLevel取如下列表中的值，等后续rocket-spring升到2.3.0时，可以设置延迟多少秒，目前适配版本只能设置延迟等级</span>
<span class="line">     * Level 1: 1s（1秒）</span>
<span class="line">     * Level 2: 5s（5秒）</span>
<span class="line">     * Level 3: 10s（10秒）</span>
<span class="line">     * Level 4: 30s（30秒）</span>
<span class="line">     * Level 5: 1m（1分钟）</span>
<span class="line">     * Level 6: 2m（2分钟）</span>
<span class="line">     * Level 7: 3m（3分钟）</span>
<span class="line">     * Level 8: 4m（4分钟）</span>
<span class="line">     * Level 9: 5m（5分钟）</span>
<span class="line">     * Level 10: 6m（6分钟）</span>
<span class="line">     * Level 11: 7m（7分钟）</span>
<span class="line">     * Level 12: 8m（8分钟）</span>
<span class="line">     * Level 13: 9m（9分钟）</span>
<span class="line">     * Level 14: 10m（10分钟）</span>
<span class="line">     * Level 15: 20m（20分钟）</span>
<span class="line">     * Level 16: 30m（30分钟）</span>
<span class="line">     * Level 17: 1h（1小时）</span>
<span class="line">     * Level 18: 2h（2小时）</span>
<span class="line">     * @param topic</span>
<span class="line">     * @param payload</span>
<span class="line">     * @param delayLevel</span>
<span class="line">     * @return</span>
<span class="line">     */</span>
<span class="line">    public SendResult sendMessage(String topic, Object payload, Integer delayLevel)</span>
<span class="line"></span>
<span class="line">    /**</span>
<span class="line">     * 发送远程事件</span>
<span class="line">     *</span>
<span class="line">     * @param handlerName</span>
<span class="line">     * @param baseMap</span>
<span class="line">     */</span>
<span class="line">    public void publishEvent(String handlerName, BaseMap baseMap)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>copy</p>`,55)]))}const r=s(l,[["render",d]]),t=JSON.parse('{"path":"/syncboot/upgrade/guidelines-for-migrating-rabbit-mq-to-rocket-mq.html","title":"RabbitMQ를 RocketMQ로 변경","lang":"ko-KR","frontmatter":{"order":7},"git":{"updatedTime":1749510018000,"contributors":[{"name":"poh","username":"poh","email":"poh@empasy.com","commits":1,"url":"https://github.com/poh"}],"changelog":[{"hash":"b5c965c32dfeaa81de62133194782387bf36abfc","time":1749510018000,"email":"poh@empasy.com","author":"poh","message":"로고 표시 오류 수정"}]},"filePathRelative":"syncboot/upgrade/guidelines-for-migrating-rabbit-mq-to-rocket-mq.md"}');export{r as comp,t as data};
