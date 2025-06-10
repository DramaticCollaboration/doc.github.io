---
order: 3
---

# RabbitMQ message queue integration

> RabbitMQ is used to implement message queues. Application scenarios: functional decoupling, traffic peak reduction, asynchronous processing

Sample code:`jeecg-cloud-module\jeecg-cloud-test\jeecg-cloud-test-rabbitmq`

## Prerequisite: Building RabbitMQ service

- 1\. Install RabbitMq software

  [Install RabbitMq using docker](https://my.oschina.net/jeecg/blog/4729143)

- 2\. Visit RabbitM backend

  ```
  http://localhost:15672
  ```

  copy

![](https://upload.jeecg.com/jeecg/help/jeecgback/images/screenshot_1649776206000.png)

- 3.  Create two switches

> If the program does not automatically create these two switches, create them manually.

| switch                 | type              |
| ---------------------- | ----------------- |
| jeecg.delayed.exchange | x-delayed-message |
| jeecg.direct.exchange  | direct            |

Effect picture:

![](https://lfs.k.topthink.com/lfs/990c47c302e2b7ef2c48e19ee4020a5b8efd65787d69e0db7cbbfcbc90a9dd69.dat)

## Integrate rabbitmq starter

### Step 1: Integrate and introduce message queue starter dependencies

```
<!--引入rabbitmq Starter-->
<dependency>
    <groupId>org.jeecgframework.boot</groupId>
    <artifactId>jeecg-boot-starter-rabbitmq</artifactId>
</dependency>
```

copy

### Step 2: Push MQ message

In order to simplify the use of MQ, a package is made to provide a simple tool class for pushing messages

```
@Autowired
private RabbitMqClient  rabbitMqClient;
```

copy

**Common methods**

- Send immediately  
  void sendMessage(String queueName, Object params)
- Send a delayed message  
  void sendMessage(String queueName, Object params, Integer expiration)
- Send remote message  
  void publishEvent(String handlerName, BaseMap params)

**Unified description of method parameters**

| parameter name | Parameter Description                                                      | Parameter Type                    |
| -------------- | -------------------------------------------------------------------------- | --------------------------------- |
| queueName      | Queue name (the queue is automatically created, no need to do it manually) | String                            |
| handlerName    | parameter                                                                  | Custom message processor beanName |
| params         | parameter                                                                  | Object                            |
| expiration     | delay                                                                      | int (milliseconds)                |

> queueName does not need to be created in MQ, jeecg will automatically create it after encapsulation.

### Step 3: Write a complete example

> Send and receive messages in 3 simple steps

- 1\. Introducing RabbitMqClient

```
@Autowired
private RabbitMqClient  rabbitMqClient;
```

copy

- 2\. Send a message

```
BaseMap map = new BaseMap();
map.put("orderId", "12345");
// test2是队列名字，程序自动创建
rabbitMqClient.sendMessage("test2", map);
// 延迟10秒发送
rabbitMqClient.sendMessage("test2", map,10000);
```

copy

- 3\. Accept the message

Use annotations to `@RabbitListener(queues = "test2")`define receivers (you can define N receivers, and messages will be sent evenly to N receivers)

**Monitoring Writing Method 1**

```
import com.rabbitmq.client.Channel;
import lombok.extern.slf4j.Slf4j;
import org.jeecg.boot.starter.rabbitmq.core.BaseRabbiMqHandler;
import org.jeecg.boot.starter.rabbitmq.listenter.MqListener;
import org.jeecg.common.annotation.RabbitComponent;
import org.jeecg.common.base.BaseMap;
import org.springframework.amqp.rabbit.annotation.RabbitHandler;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.support.AmqpHeaders;
import org.springframework.messaging.handler.annotation.Header;

@Slf4j
@RabbitListener(queues = "test2")
@RabbitComponent(value = "testListener2")
public class DemoRabbitMqListener3 extends BaseRabbiMqHandler<BaseMap> {

    @RabbitHandler
    public void onMessage(BaseMap baseMap, Channel channel, @Header(AmqpHeaders.DELIVERY_TAG) long deliveryTag) {
        super.onMessage(baseMap, deliveryTag, channel, new MqListener<BaseMap>() {
            @Override
            public void handler(BaseMap map, Channel channel) {
                String orderId = map.get("orderId").toString();
                log.info("业务处理3：orderId:" + orderId);
            }
        });
    }
}

```

copy

or

**Monitoring Writing Method 2**

```
import com.rabbitmq.client.Channel;
import lombok.extern.slf4j.Slf4j;
import org.jeecg.boot.starter.rabbitmq.core.BaseRabbiMqHandler;
import org.jeecg.boot.starter.rabbitmq.listenter.MqListener;
import org.jeecg.common.annotation.RabbitComponent;
import org.jeecg.common.base.BaseMap;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.support.AmqpHeaders;
import org.springframework.messaging.handler.annotation.Header;

@Slf4j
@RabbitComponent(value = "testListener2")
public class DemoRabbitMqListener2 extends BaseRabbiMqHandler<BaseMap> {

    @RabbitListener(queues = "test2")
    public void onMessage(BaseMap baseMap, Channel channel, @Header(AmqpHeaders.DELIVERY_TAG) long deliveryTag) {
        super.onMessage(baseMap, deliveryTag, channel, new MqListener<BaseMap>() {
            @Override
            public void handler(BaseMap map, Channel channel) {
                String orderId = map.get("orderId");
                log.info("业务处理2：orderId:" + orderId);
            }
        });
    }

}

```

copy

N receivers effect diagram  
![](https://upload.jeecg.com/jeecg/help/jeecgback/images/screenshot_1606440639808.png)
