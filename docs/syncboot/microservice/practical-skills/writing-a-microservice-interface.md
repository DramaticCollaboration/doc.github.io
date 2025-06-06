---
order: 2
---

# Writing a microservice interface

> Version: 2.5+

This example uses the service `jeecg-system`call service `jeecg-demo`as an example to explain the feign call

## 1\. Writing service interface in jeecg-demo

Writing an interface

```
public interface JeecgDemoService {
    Result<String> getMessage(String name);
}
```

copy

Writing the implementation class

```
@Service
public class JeecgDemoServiceImpl implements JeecgDemoService {
    @Override
    public Result<String> getMessage(String name) {
        return Result.OK("Hello" + name);
    }
}
```

copy

Writing service interfaces

```
@RestController
@RequestMapping("/test")
public class JeecgDemoProvider {

    @Resource
    private JeecgDemoService jeecgDemoService;

    @GetMapping("/getMessage")
    public Result<String> getMessage(@RequestParam String name) {
        return jeecgDemoService.getMessage(name);
    }
}
```

copy

## 2\. Write feign client interface in jeecg-system

1.  Add annotations to the startup class `@EnableFeignClients` .  
    ![](https://lfs.k.topthink.com/lfs/5cde8df5dd45758ca88da87fdf24b762f2f4cf2138e8c85fc20afaaa2fef2740.dat)

2.  Writing a feign client

```
//jeecg-boot-module-demo模块的服务名是 jeecg-demo
@FeignClient(value = CloudConstant.SERVER_NAME_JEECGDEMO, configuration = FeignConfig.class,fallbackFactory = JeecgTestClientFactory.class)
@Component
public interface JeecgTestClient {
    @GetMapping(value = "/test/getMessage")
    Result<String> getMessage(@RequestParam(value = "name",required = false) String name);
}
```

copy

3.  Writing Test Methods

```
@RestController
@RequestMapping("/sys/test")
@Api(tags = "feign测试")
public class JeecgTestFeignTest {

   //注入feign客户端
   @Autowired
   private JeecgTestClient jeecgTestClient;

    @GetMapping("getMessage")
    @ApiOperation(value = "测试feign", notes = "测试feign")
    public Result<String> getMessage() {
        return jeecgTestClient.getMessage("jeecg-boot");
    }
}
```

copy
