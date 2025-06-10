---
order: 2
---

# Based on redis message bus

> This chapter explains the encapsulation of the message bus, also known as the publish-subscribe mechanism, which is used to solve the problem of cross-service or cluster deployment.

## Implementation based on redis

### 1\. Client sends message

```
@Autowired
private JeecgRedisClient jeecgRedisClient;
```

copy

```
BaseMap baseMap = new BaseMap();
baseMap.put("userId", "");
baseMap.put("message", message);
jeecgRedisClient.sendMessage(WebSocket.REDIS_TOPIC_NAME, baseMap);
```

copy

### 2\. Write a message listener

```
@Component(WebSocket.REDIS_TOPIC_NAME)
public class SocketHandler implements JeecgRedisListener {

    @Autowired
    private WebSocket webSocket;

    @Override
    public void onMessage(BaseMap map) {
        log.debug("【Redis发布订阅模式】redis Listener: {}，参数：{}",WebSocket.REDIS_TOPIC_NAME, map.toString());

        String userId = map.get("userId");
        String message = map.get("message");
        if (ObjectUtil.isNotEmpty(userId)) {
            //pc端消息推送具体人
            webSocket.pushMessage(userId, message);
            //app端消息推送具体人
            webSocket.pushMessage(userId+CommonSendStatus.APP_SESSION_SUFFIX, message);
        } else {
            //推送全部
            webSocket.pushMessage(message);
        }

    }
}
```

copy
