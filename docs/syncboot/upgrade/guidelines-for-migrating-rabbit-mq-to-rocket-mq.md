---
order: 7
---

# RabbitMQ를 RocketMQ로 변경

> SyncBoot v3.6.4+  
> currently only supports rocketmq 4.x, not rocketmq 5.x

#### document

[1 rocketmq deployment file](https://dist.apache.org/repos/dist/release/rocketmq/4.9.5)  
[2 rocketmq deployment document](https://rocketmq.apache.org/zh/docs/4.x/introduction/02quickstart)

#### Dependency Reference

```
<dependency>
    <groupId>org.jeecgframework.boot</groupId>
    <artifactId>jeecg-cloud-test-rocketmq</artifactId>
    <version>${jeecgboot.version}</version>
</dependency>
```

copy

#### Add Configuration

```
rocketmq:
  name-server: jeecg-boot-rocketmq:9876
  producer:
    group: jeecg-group
    sendMessageTimeout: 300000
    tls-enable: false
spring:
  cloud:
    stream:
      rocketmq:
        binder:
          name-server: ${rocketmq.name-server} # RocketMQ Namesrv 地址
```

copy

#### Convert rabbitmq to rocketmq

> Considering the amount of code modification required for the migration switch, the client encapsulated in rocketmq-starter has the same name as the original rabbitmq-starter client, RabbitMqClient, and the package structure is also consistent, which minimizes the workload generated during migration.

##### Normal message occurs

原rabbitmq

```
@Autowired
private RabbitMqClient rabbitMqClient;

rabbitMqClient.sendMessage(CloudConstant.MQ_JEECG_PLACE_ORDER, map);
```

copy

Migrate to RocketMQ

```
@Autowired
private RabbitMqClient rabbitMqClient;

rabbitMqClient.sendMessage(CloudConstant.MQ_JEECG_PLACE_ORDER, map);
```

copy

##### Send Delayed Message

原rabbitmq

```
@Autowired
private RabbitMqClient rabbitMqClient;

// 延迟10秒
rabbitMqClient.sendMessage(CloudConstant.MQ_JEECG_PLACE_ORDER_TIME, map,10);
```

copy

Migrate to RocketMQ

```
@Autowired
private RabbitMqClient rabbitMqClient;


    /**
     * 延迟消息， delayLevel取如下列表中的值
     * Level 1: 1s（1秒）
     * Level 2: 5s（5秒）
     * Level 3: 10s（10秒）
     * Level 4: 30s（30秒）
     * Level 5: 1m（1分钟）
     * Level 6: 2m（2分钟）
     * Level 7: 3m（3分钟）
     * Level 8: 4m（4分钟）
     * Level 9: 5m（5分钟）
     * Level 10: 6m（6分钟）
     * Level 11: 7m（7分钟）
     * Level 12: 8m（8分钟）
     * Level 13: 9m（9分钟）
     * Level 14: 10m（10分钟）
     * Level 15: 20m（20分钟）
     * Level 16: 30m（30分钟）
     * Level 17: 1h（1小时）
     * Level 18: 2h（2小时）
     */
rabbitMqClient.sendMessage(CloudConstant.MQ_JEECG_PLACE_ORDER_TIME, map,2);
```

copy

##### Bus message occurs

原rabbitmq

```
@Autowired
private RabbitMqClient rabbitMqClient;

//rabbitmq消息总线测试
BaseMap params = new BaseMap();
params.put("orderId", "123456");
rabbitMqClient.publishEvent(CloudConstant.MQ_DEMO_BUS_EVENT, params);
```

copy

Migrate to RocketMQ

```
@Autowired
private RabbitMqClient rabbitMqClient;

//rocketmq消息总线测试
BaseMap params = new BaseMap();
params.put("orderId", "123456");
rabbitMqClient.publishEvent(CloudConstant.MQ_DEMO_BUS_EVENT, params);
```

copy

##### Normal message monitoring/delayed message monitoring

```
@RabbitListener(queues = CloudConstant.MQ_JEECG_PLACE_ORDER) // 监听队列名称
@RabbitComponent(value = "helloReceiver1")
public class HelloReceiver1 extends BaseRabbiMqHandler<BaseMap> {

    @Autowired
    private  RestTemplate restTemplate;

    @RabbitHandler
    public void onMessage(BaseMap baseMap, Channel channel, @Header(AmqpHeaders.DELIVERY_TAG) long deliveryTag) {
        super.onMessage(baseMap, deliveryTag, channel, new MqListener<BaseMap>() {
            @Override
            public void handler(BaseMap map, Channel channel) {
                //业务处理
                String orderId = map.get("orderId").toString();
                log.info("【我是处理人1】 MQ Receiver1，orderId : " + orderId);
            }
        });
    }

}
```

copy

Migrate to RocketMQ

```
@Component
// 监听topic名称，消费组
@RocketMQMessageListener(topic = CloudConstant.MQ_JEECG_PLACE_ORDER, consumerGroup = "helloReceiver1")
public class HelloReceiver1 implements RocketMQListener<BaseMap> {

    public void onMessage(BaseMap baseMap) {
        log.info("helloReceiver1接收消息：" + baseMap);
    }

}
```

copy

##### Bus message monitoring

```
@Component(CloudConstant.MQ_DEMO_BUS_EVENT)
public class DemoBusEvent implements JeecgBusEventHandler {


    @Override
    public void onMessage(EventObj obj) {
        if (ObjectUtil.isNotEmpty(obj)) {
            BaseMap baseMap = obj.getBaseMap();
            String orderId = baseMap.get("orderId");
            log.info("业务处理----订单ID:" + orderId);
        }
    }
}
```

copy

Migrate to RocketMQ

```
@Component(CloudConstant.MQ_DEMO_BUS_EVENT)
public class DemoBusEvent implements JeecgBusEventHandler {


    @Override
    public void onMessage(EventObj obj) {
        if (ObjectUtil.isNotEmpty(obj)) {
            BaseMap baseMap = obj.getBaseMap();
            String orderId = baseMap.get("orderId");
            log.info("业务处理----订单ID:" + orderId);
        }
    }
}
```

copy

So far, all the content that needs to be migrated has been explained. Except for the monitoring and consumption of normal messages/delayed messages, other operations do not need to be modified.

#### rocketmq consumer group

In the monitoring consumption annotation `@RocketMQMessageListener`, in addition to topic, there is a mandatory parameter consumeGroup, the consumer group name. RocketMQ does not provide consumer group configuration by default, and you need to specify the consumer group name yourself. However, in the monitoring consumption annotation, there is a configuration that meets the common message scenario, so you only need to specify a consumer name. You can also specify `rocketmq.consumer`the configuration of the consumer group to `rocketmq.consumer.group`match the consumerGroup name in the annotation to use the consumption configuration in the configuration file. Configurations with different group names are not shared. The following configuration is the configuration for multiple consumer groups to consume a topic

```
@RocketMQMessageListener(topic = CloudConstant.MQ_JEECG_PLACE_ORDER, consumerGroup = "helloReceiver1")

@RocketMQMessageListener(topic = CloudConstant.MQ_JEECG_PLACE_ORDER, consumerGroup = "helloReceiver2")

@RocketMQMessageListener(topic = CloudConstant.MQ_JEECG_PLACE_ORDER, consumerGroup = "helloReceiver3")
```

copy

#### rocketmq production group

Currently, production configuration only supports `rocketmq.produce`configuration. If multiple production groups are required, the production group names between different applications can be modified.

#### RocketMQ Client API

```
   /**
     * 同步发送
     * @param topic
     * @param payload
     */
    public void sendMessage(String topic, Object payload)

    /**
     * 同步批量发送
     * @param topic
     * @param payload
     * @return
     * @param <T>
     */
    public <T> SendResult sendMessage(String topic, Collection<T> payload)


    /**
     * 异步发送
     * @param topic
     * @param payload
     * @param callback
     */
    public void sendAsyncMessage(String topic, Object payload, SendCallback callback)

    /**
     * 异步批量发送
     * @param topic
     * @param payload
     * @param sendCallback
     * @param <T>
     */
    public <T> void sendAsyncMessage(String topic, Collection<T> payload, SendCallback sendCallback)

    /**
     * 同步发送顺序消息
     * @param topic
     * @param payload
     * @param hashKey
     */
    public void sendOrderlyMessage(String topic, Object payload, String hashKey)

    /**
     * 异步发送顺序消息
     * @param topic
     * @param payload
     * @param hashKey
     * @param callback
     */
    public void sendAsyncOrderlyMessage(String topic, Object payload, String hashKey, SendCallback callback)

    /**
     * Oneway消息
     * @param topic
     * @param payload
     */
    public void sendOneway(String topic, Object payload)

    /**
     * 顺序Oneway消息
     * @param topic
     * @param payload
     * @param hashKey
     */
    public void sendOnewayOrderly(String topic, Object payload, String hashKey)

    /**
     * 事务消息
     * @param topic
     * @param payload
     * @param arg
     */
    public void sendMessageInTransaction(String topic, Object payload, Object arg)

    /**
     * pull模式
     * 拉取消息
     * @param clazz
     * @return
     * @param <T>
     */
    public <T> List<T> receive(Class<T> clazz)

    /**
     * 延迟消息， delayLevel取如下列表中的值，等后续rocket-spring升到2.3.0时，可以设置延迟多少秒，目前适配版本只能设置延迟等级
     * Level 1: 1s（1秒）
     * Level 2: 5s（5秒）
     * Level 3: 10s（10秒）
     * Level 4: 30s（30秒）
     * Level 5: 1m（1分钟）
     * Level 6: 2m（2分钟）
     * Level 7: 3m（3分钟）
     * Level 8: 4m（4分钟）
     * Level 9: 5m（5分钟）
     * Level 10: 6m（6分钟）
     * Level 11: 7m（7分钟）
     * Level 12: 8m（8分钟）
     * Level 13: 9m（9分钟）
     * Level 14: 10m（10分钟）
     * Level 15: 20m（20分钟）
     * Level 16: 30m（30分钟）
     * Level 17: 1h（1小时）
     * Level 18: 2h（2小时）
     * @param topic
     * @param payload
     * @param delayLevel
     * @return
     */
    public SendResult sendMessage(String topic, Object payload, Integer delayLevel)

    /**
     * 发送远程事件
     *
     * @param handlerName
     * @param baseMap
     */
    public void publishEvent(String handlerName, BaseMap baseMap)
```

copy
