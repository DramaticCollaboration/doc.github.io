---
order: 12
---

# Websocket service connection

> After the project is connected to Websocket, business connection is realized. Through the background business connection, the corresponding business message is pushed to the client, and the client processes the corresponding business message

### System Notification Business Connection Example

In system notification management, administrators can send two types of messages: all users and specified users.

The message sent is a json string

#### (1) Calling the WebSocket service

```
@Resource
private WebSocket webSocket;
```

copy

#### (2) Calling in method

> cmd is the service type. For example, topic indicates system messages, and user indicates user messages. You can customize the cmd type. The client processes different service responses based on the returned cmd type.

**Send to all**

```
//创建业务消息信息
JSONObject obj = new JSONObject();
obj.put("cmd", "topic");//业务类型
obj.put("msgId", sysAnnouncement.getId());//消息id
obj.put("msgTxt", sysAnnouncement.getTitile());//消息内容
//全体发送
webSocket.sendAllMessage(obj.toJSONString());

```

copy

**Send by a single user**

```
//创建业务消息信息
JSONObject obj = new JSONObject();
obj.put("cmd", "user");//业务类型
obj.put("msgId", sysAnnouncement.getId());//消息id
obj.put("msgTxt", sysAnnouncement.getTitile());//消息内容
//单个用户发送 (userId为用户id)
webSocket.sendOneMessage(userId, obj.toJSONString());

```

copy

**Multiple users send**

```
//创建业务消息信息
JSONObject obj = new JSONObject();
obj.put("cmd", "user");//业务类型
obj.put("msgId", sysAnnouncement.getId());//消息id
obj.put("msgTxt", sysAnnouncement.getTitile());//消息内容
//多个用户发送 (userIds为多个用户id，逗号‘,’分隔)
webSocket.sendMoreMessage(userIds, obj.toJSONString());

```

copy

#### (3) The Vue client processes different business responses according to the returned cmd type

```
websocketonmessage: function (e) {
        console.log("-----接收消息-------",e.data);
        var data = eval("(" + e.data + ")"); //解析json对象
        if(data.cmd == "topic"){
          //TODO 系统通知

        }else if(data.cmd == "user"){
          //TODO 用户消息

        }

},
```

copy
