---
order: 5
---

# No token required between microservices

## Common requirements

1.  Microservice scheduled tasks, calling other services through openfeign, reporting an error token invalid
2.  How to avoid login when calling Feign between microservices without exposing the gateway

## solution

> The problem of calling between services without TOEKN can be solved by the following three steps.

### 1\. Generate a temporary token TOKEN

```
/**
 * 获取临时令牌
 *
 * 模拟登陆接口，获取模拟 Token
 * @return
 */
public static String getTemporaryToken() {
    RedisUtil redisUtil = SpringContextUtils.getBean(RedisUtil.class);
    //模拟登录生成临时Token
    //参数说明：第一个参数是用户名、第二个参数是密码的加密串
    String token = JwtUtil.sign("??", "??");
    // 设置Token缓存有效时间为 5 分钟
    redisUtil.set(CommonConstant.PREFIX_USER_TOKEN + token, token);
    redisUtil.expire(CommonConstant.PREFIX_USER_TOKEN + token, 5 * 60 * 1000);
    return token;
}
```

copy

### 2\. Add the following code before calling the feign interface

```
//1.设置线程会话Token
UserTokenContext.setToken(getTemporaryToken());
```

copy

### 3\. After the feign interface call is completed, call the method to delete the temporary token

```
//2.使用完删除Token，避免性能（这一步可以不做，但是为了性能建议执行）
UserTokenContext.remove();
```

copy

> Sample code screenshot:

![](https://lfs.k.topthink.com/lfs/3a6e15b40fabca4f66642db74e9e804a3ef2514be3aa616b3ea8b5fe4dd16156.dat)

### 4.xxljob complete code

```

package org.jeecg.modules.demo.xxljob;

import com.xxl.job.core.biz.model.ReturnT;
import com.xxl.job.core.handler.annotation.XxlJob;
import lombok.extern.slf4j.Slf4j;
import org.jeecg.common.config.mqtoken.UserTokenContext;
import org.jeecg.common.constant.CommonConstant;
import org.jeecg.common.system.api.ISysBaseAPI;
import org.jeecg.common.system.util.JwtUtil;
import org.jeecg.common.util.RedisUtil;
import org.jeecg.common.util.SpringContextUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


/**
 * xxl-job定时任务测试
 */
@Component
@Slf4j
public class TestJobHandler {
    @Autowired
    ISysBaseAPI sysBaseApi;

    /**
     * 简单任务
     *
     * @param params
     * @return
     */

    @XxlJob(value = "testJob")
    public ReturnT<String> demoJobHandler(String params) {
        //1.设置线程会话Token
        UserTokenContext.setToken(getTemporaryToken());

        log.info("我是 jeecg-demo 服务里的定时任务 testJob , 我执行了...............................");
        log.info("我调用 jeecg-system 服务的字典接口：{}",sysBaseApi.queryAllDict());

        //2.使用完删除Token，避免性能
        UserTokenContext.remove();
        return ReturnT.SUCCESS;
    }

    public void init() {
        log.info("init");
    }

    public void destroy() {
        log.info("destory");
    }

    /**
     * 获取临时令牌
     *
     * 模拟登陆接口，获取模拟 Token
     * @return
     */
    public static String getTemporaryToken() {
        RedisUtil redisUtil = SpringContextUtils.getBean(RedisUtil.class);
        // 模拟登录生成Token
        String token = JwtUtil.sign("??", "??");
        // 设置Token缓存有效时间为 5 分钟
        redisUtil.set(CommonConstant.PREFIX_USER_TOKEN + token, token);
        redisUtil.expire(CommonConstant.PREFIX_USER_TOKEN + token, 5 * 60 * 1000);
        return token;
    }

}
```

copy
