---
order: 4
---

# Websocket message push modification

WebSocket supports sending messages to both the app and the PC at the same time

#### (1) WebSocket operation class

> By modifying this type of WebSocket, you can push messages to multiple terminals for the same user

```
@Component
@Slf4j
@ServerEndpoint("/websocket/{userId}")
public class WebSocket {
     //省略部分代码

     //1.增加app端标识
     private String APP_SESSION_SUFFIX = "_app";

    // 2.修改单点消息方法
    public void sendOneMessage(String userId, String message) {
        Session session = sessionPool.get(userId);
        if (session != null&&session.isOpen()) {
            try {
            	log.info("【websocket消息】 单点消息:"+message);
                session.getAsyncRemote().sendText(message);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        //--------3.增加APP端消息推送--------
         Session session_app = sessionPool.get(userId+APP_SESSION_SUFFIX );
        if (session_app != null&&session_app .isOpen()) {
            try {
            	log.info("【websocket移动端消息】 单点消息:"+message);
                session_app .getAsyncRemote().sendText(message);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

       //省略部分代码

      //------其他类似方法修改同上----------
}

```

copy

### Using WebSocket in front-end uniapp

```
<script>
    //引用socket.js
    import socket from '@/common/js-sdk/socket/socket.js'

    export default {
        data() {
            return {
            }
        },
        mounted() {
              //初始化websocket
              this.onSocketOpen()
              this.onSocketReceive()
        },
        destroyed: function () { // 离开页面生命周期函数
              socket.closeSocket()
        },
        methods: {
              onSocketOpen: function () {
                // WebSocket与普通的请求所用协议有所不同，ws等同于http，wss等同于https
                socket.init('websocket'); //对应要连接的socket
              },
              onSocketReceive: function () {
                   var _this=this
                   socket.acceptMessage = function(res){
    					// console.log("页面收到的消息", res);
    					if(res.cmd == "topic"){
    					  //系统通知
    					}else if(res.cmd == "user"){
    					  //用户消息
    					} else if(res.cmd == 'email'){
    					 //邮件消息
    					}
    			}
              }
        }
    }
</script>
```

copy

Modification of the socket.js connection URL code

```
init(socket_type,callback) {
		//省略部分代码
     let url=this.socketUrl.replace("https://","wss://").replace("http://","ws://")
               +"/"+socket_type+"/"+store.state.userid+"_app";
		//省略部分代码
}

//相关参数
socketUrl ：对应api地址
socket_type ：对应你要连接的是哪个websocket
"_app"  ：标识这是移动端
```

copy
