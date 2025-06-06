---
order: 4
---

# Sentinel current limiting usage

### Start the Sentinel project

```
com.alibaba.csp.sentinel.dashboard.JeecgSentinelDashboardApplication
```

copy

![](https://lfs.k.topthink.com/lfs/8c3eb9ce7390ba1061b74d8f440f09a96ea709065f855bbb8fed26dc5b26d327.dat)  
![](https://lfs.k.topthink.com/lfs/0811b9a7d3e4db970fc0b2272dad24fcceac4bbed690e1ad7670fd5262e0cc25.dat)

Access address:  
[http://localhost:9000](http://localhost:9000)  
Account password: sentinel/sentinel

![](https://lfs.k.topthink.com/lfs/d7b39e4a15712aba0a738b30c68b010f51c2a9258833a2433cc2618763577a9d.dat)  
**Note: The content is empty for the first visit.**  
![](https://lfs.k.topthink.com/lfs/410f04b51e12883485fb9023426b07a084156477c0fcfe8794ec419329fe430a.dat)  
Access any interface and the application will appear  
![](https://upload.jeecg.com/jeecg/help/jeecgback/images/screenshot_1626402987067.png)

### Rule Configuration

#### Flow Control Configuration

##### 1\. Limit the flow of the entire microservice module instance

Limit the interface of the entire service module by RouteID through (route name)  
![](https://lfs.k.topthink.com/lfs/a07178b459e712c1cca17a8a3a963dc5f59d2ccc4278463b063d91d322fa019a.dat)

**Test verification:** Open the interface document for testing and click any interface in the system module

##### 2\. Limit interfaces by API grouping

Limit one or a group of interfaces by API grouping  
![](https://lfs.k.topthink.com/lfs/97ff4cb6f6f389f75029a9d2cd904261ca0e6bf298010726869ff9932671e44f.dat)  
![](https://lfs.k.topthink.com/lfs/27ae883b0a681d8b239d47764f5987b6bff3a0246ec4a5b13a3fb94ba8a40df2.dat)

**The test is the same as above** . For detailed documentation on current limiting, see [the official flow control configuration](https://github.com/alibaba/Sentinel/wiki/%E7%BD%91%E5%85%B3%E9%99%90%E6%B5%81)

#### Circuit breaker configuration

![](https://lfs.k.topthink.com/lfs/5abba272b968a93e0b7cd0d6129868dacc0f264a2dabdebb6312095811fc59df.dat)  
Sentinel provides the following circuit breaker strategies:

- Slow call ratio ( `SLOW_REQUEST_RATIO`): Select the slow call ratio as the threshold. You need to set the allowed slow call RT (i.e. the maximum response time). If the response time of a request is greater than this value, it will be counted as a slow call. When the number `statIntervalMs`of requests within the unit statistical time () is greater than the set minimum number of requests, and the slow call ratio is greater than the threshold, the requests within the next fuse time will be automatically blown. After the fuse time, the fuse will enter the detection recovery state (HALF-OPEN state). If the response time of the next request is less than the set slow call RT, the fuse will end. If it is greater than the set slow call RT, it will be blown again.
- Abnormal ratio ( `ERROR_RATIO`): When `statIntervalMs`the number of requests within the unit statistical time () is greater than the set minimum number of requests, and the abnormal ratio is greater than the threshold, the requests within the next fuse time will be automatically fused. After the fuse time, the fuse will enter the detection recovery state (HALF-OPEN state). If the next request is successfully completed (without error), the fuse will end, otherwise it will be fused again. The threshold range of the abnormal ratio is `[0.0, 1.0]`, representing 0% - 100%.
- Exception number ( `ERROR_COUNT`): When the number of exceptions within the unit statistical time exceeds the threshold, the circuit breaker will automatically break. After the circuit breaker time, the circuit breaker will enter the detection recovery state (HALF-OPEN state). If the next request is successfully completed (without error), the circuit breaker will end. Otherwise, it will be broken again.

Quick click triggers the fuse  
![](https://lfs.k.topthink.com/lfs/716f77813fef67316662bf870bd39a37c032216b69528da46fbe6e587a8fb43e.dat)  
**Note: At the gateway level, only the gateway can be downgraded. It cannot be downgraded for the TES current limit in @SentinelResource(value ="test")** , see [the official documentation for details.](https://github.com/alibaba/Sentinel/wiki/%E7%86%94%E6%96%AD%E9%99%8D%E7%BA%A7)

#### System Rules

[Configuration Description](https://github.com/alibaba/Sentinel/wiki/%E7%B3%BB%E7%BB%9F%E8%87%AA%E9%80%82%E5%BA%94%E9%99%90%E6%B5%81)  
The system protection rule controls the ingress traffic at the application level, monitors application indicators from several dimensions such as the load, CPU usage, average RT, ingress QPS, and number of concurrent threads of a single machine, and allows the system to run at the maximum throughput while ensuring the overall stability of the system.

System protection rules are based on the overall application dimension, not the resource dimension, and **are only effective for ingress traffic** . Ingress traffic refers to the traffic entering the application ( `EntryType.IN`), such as requests received by Web services or Dubbo servers, which are all ingress traffic.

System rules support the following modes:

- **Load Adaptation** (only for Linux/Unix-like machines): The system load1 is used as a heuristic indicator to perform adaptive system protection. System protection (BBR phase) is triggered only when the system load1 exceeds the set heuristic value and the current number of concurrent threads in the system exceeds the estimated system capacity. The system capacity `maxQps * minRt`is derived from the system's estimation. The setting reference value is generally `CPU cores * 2.5`.
- **CPU usage** (version 1.5.0+): When the system CPU usage exceeds the threshold, system protection is triggered (value range 0.0-1.0), which is relatively sensitive.
- **Average RT** : When the average RT of all ingress traffic on a single machine reaches the threshold, system protection is triggered (in milliseconds).
- **Number of concurrent threads** : When the number of concurrent threads of all ingress traffic on a single machine reaches the threshold, system protection is triggered.
- **Ingress QPS** : When the QPS of all ingress traffic on a single machine reaches the threshold, system protection is triggered.

The following configuration means that all global entrances can only pass once per second  
![](https://lfs.k.topthink.com/lfs/2a348573a2c02991265f49d7b8a610639d892c41320301ac47781a8f2143903d.dat)  
The test is as follows  
![](https://lfs.k.topthink.com/lfs/281e2c671953f321f08d997fad2dacb3c644821172a8929705a28116fa26d358.dat)

#### Hotspot rules

What is a hotspot? A hotspot is data that is frequently accessed. Often we want to count the top K data with the highest access frequency in a hotspot and restrict access to it. For example:

- The product ID is used as a parameter to count the most frequently purchased product IDs within a period of time and set restrictions
- User ID is used as a parameter to restrict frequent access to user IDs within a period of time.

Hotspot parameter current limiting will count the hotspot parameters in the incoming parameters, and according to the configured current limiting threshold and mode, it will limit the resource calls containing hotspot parameters. Hotspot parameter current limiting can be regarded as a special flow control, which is only effective for resource calls containing hotspot parameters.  
[Configuration instructions](https://github.com/alibaba/Sentinel/wiki/%E7%83%AD%E7%82%B9%E5%8F%82%E6%95%B0%E9%99%90%E6%B5%81)  
Take the sysetm module position list as an example to explain  
1\. Add the @SentinelResource(value = "position") annotation. The value name is the resource name as shown below  
![](https://lfs.k.topthink.com/lfs/ff3d24febdea7ee17753d27d0d41cbbdd6b2b13d1c93296204652ca47a4cd77b.dat)  
2\. Add hotspot rules  
![](https://lfs.k.topthink.com/lfs/b1006e1345464e625549907ce8e378d72f6f6ca08c0a71033e9250b3a3b697fe.dat)  
Or add it through the hotspot rule menu  
![](https://lfs.k.topthink.com/lfs/62c5017eb6fa776ef7092d4b9c58aa012803645723269122d189cbce1d02b3fd.dat)  
3\. Test hot spot rules. Here, set the parameter index to 0. This is only for testing. The specific scenario needs to be combined with the real business scenario.  
![](https://lfs.k.topthink.com/lfs/cf5d7c05d0b8769dcd6a5ff0bfad8f8d6d4b23183862301f7206808d95696912.dat)  
4\. Write a hotspot rule interceptor. The system built-in rule code is as follows (when the business rules are not met, you need to modify the interception rules yourself)

```
/**
 * sentinel ip授权规则拦截器(黑名单白名单),改规则支持参数和IP拦截模式,当参数为空时走ip拦截模式
 *
 * @author zyf
 */
@Component
public class DefaultRequestOriginParser implements RequestOriginParser {
    @Override
    public String parseOrigin(HttpServletRequest request) {
        //基于请求参数,origin对应授权规则中的流控应用名称,也可通过getHeader传参
        String origin = request.getParameter("origin");
        if (StringUtils.isNotEmpty(origin)) {
            return origin;
        } else {
            //当参数为空使用ip拦截模式
            String ip = IpUtils.getIpAddr(request);
            return ip;
        }
    }
}
```

copy

#### Authorization rules

Often, we need to determine whether a request is allowed based on the source of the call. In this case, we can use Sentinel's source access control (blacklist and whitelist control) function. Source access control `origin`restricts whether a resource is allowed based on the resource's request source ( ). If a whitelist is configured, only requests that are on the whitelist can be allowed; if a blacklist is configured, only requests that are on the blacklist will not be allowed, and the rest of the requests will be allowed.  
Rule configuration  
Source access control rules ( `AuthorityRule`) are very simple, and mainly include the following configuration items:

- `resource`: Resource name, i.e. the object to which the current limiting rule applies.
- `limitApp`: The corresponding blacklist/whitelist, different origins `,`are separated by, such as `appA,appB`.
- `strategy`: Restriction mode, `AUTHORITY_WHITE`Whitelist mode, `AUTHORITY_BLACK`Blacklist mode, Whitelist mode by default.  
  1\. Add authorization rules  
  ![](https://lfs.k.topthink.com/lfs/6c4b2174dc1e517a398a4c79c391e44f42b6de6f03a3c2c175642b9a2063ce94.dat)  
  ![](https://lfs.k.topthink.com/lfs/17bab9b1303f423fc27d5c6d6fd41af05c742b14d9c3f5d4e0b35eda68e0c46d.dat)  
  2\. Test the authorization rules  
  when origin=app1 as shown below  
  ![](https://lfs.k.topthink.com/lfs/adf386094e8df5bfa8c2d53a5e7f5f5744e2a221ad5c45871bcdb986354f57d0.dat)  
  When origin=app2, it is as shown below  
  ![](https://lfs.k.topthink.com/lfs/6bc31f48c3ec32f8fa8789b91425f88ce915e71a8dc3a6dade5329088042e7b5.dat)
