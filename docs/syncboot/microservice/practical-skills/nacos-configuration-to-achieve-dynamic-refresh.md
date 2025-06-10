---
order: 8
---

# nacos configuration to achieve dynamic refresh

The following are examples of usage:

```
@RefreshScope
@Slf4j
@Component
@DependsOn({"gatewayRoutersConfiguration"})
public class DynamicRouteLoader implements ApplicationEventPublisherAware {
    /**
     * 路由配置方式：database，yml，nacos
     */
    @Value("${jeecg.route.config.data-type:database}")
    public  String DATA_TYPE;
}
```

copy

The core is to add the @RefreshScope annotation to the class that needs to be dynamically refreshed, so that when I modify the data-type in nacos, I  
can dynamically switch the routing loading mode to achieve the purpose of not restarting the service
