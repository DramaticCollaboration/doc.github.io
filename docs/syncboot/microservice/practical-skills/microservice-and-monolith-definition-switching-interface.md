---
order: 9
---

# Microservice and Monolith Definition Switching Interface

> The purpose of this document is to implement the automatic switching mechanism between the single interface and the microservice interface. Because SyncBoot officially supports the free switching between single and microservice by default, this mechanism is added. If you are completely developing microservices and do not consider free switching, you can ignore this article and go directly to [#Practical Microservice Module Structure 2.4](https://help.jeecg.com/java/springcloud/dev/fengceng.html)

There is often such a scenario in microservices, where service A needs to call the method in service B. Then we can use openfeign to define the interface in service A and declare the method to remotely call the address exposed in service B (generally pointing to the method defined in the controller). Then when C, D, E... and more services appear, and these services may call service B, it is obviously unreasonable to let other services re-declare the interface for calling service B in their own code every time, so these interfaces need to be extracted and made into an independent interface module. For example, the interface of the system service that has been implemented in the project  
![](https://lfs.k.topthink.com/lfs/95c39bcc7e91778dbf9bcc6d2c11c0c66c9d932efd8f2ea9bd77f3c6e358c551.dat)

Notice:

- The names of interface projects should all end with -api
- cloud-api means this is for cloud projects
- local-api means it is used in a single unit
- Declare two service interfaces to support switching between monolithic and microservices. You can decide which one to use based on your needs.

## accomplish:

1\. Define the interface in loca-api (this project inherits CommonAPI. It is not necessary to customize a new interface if you do not need to use the methods in CommonAPI):

```
//单体
public interface ISysBaseAPI extends CommonAPI {
    LoginUser getUserById(String id);
}

```

copy

2\. Define the implementation class in the specific module. The corresponding system module here implements all methods corresponding to the interface in step 1.

```
@Slf4j
@Service
public class SysBaseApiImpl implements ISysBaseAPI {
    @Override
	public LoginUser getUserById(String id) {
		if(oConvertUtils.isEmpty(id)) {
			return null;
		}
		LoginUser loginUser = new LoginUser();
		SysUser sysUser = userMapper.selectById(id);
		if(sysUser==null) {
			return null;
		}
		BeanUtils.copyProperties(sysUser, loginUser);
		return loginUser;
	}

}
```

copy

3\. Define the interface in cloud-api, the FeignClient annotation value is the service name to be called, and the method annotation GetMapping points to the request interface defined in system

```
//微服务
@Component
@FeignClient(contextId = "sysBaseRemoteApi", value = ServiceNameConstants.SYSTEM_SERVICE, fallbackFactory = SysBaseAPIFallbackFactory.class)
public interface ISysBaseAPI extends CommonAPI {
    @GetMapping("/sys/api/getUserById")
    LoginUser getUserById(@RequestParam("id") String id);
}
```

copy

4\. Define the controller in the specific module. The corresponding system module here is used to call the microservice interface

```
@RestController
@RequestMapping("/sys/api")
public class SystemAPIController {

    @Autowired
    private ISysBaseAPI sysBaseAPI;

    @GetMapping("/getUserById")
    LoginUser getUserById(@RequestParam("id") String id){
        return sysBaseAPI.getUserById(id);
    }

}
```

copy

**Notice** :

- The interface injected into this controller is the singleton interface declared in step 1.
- The method request address should be consistent with the GetMapping of the microservice interface method in step 3.

#### _At this point, both single and microservices can call the API under the system_

---

## use:

Add dependencies to pom in a single file:

```
<dependency>
    <groupId>org.jeecgframework.boot</groupId>
    <artifactId>jeecg-system-local-api</artifactId>
</dependency>
```

copy

Microservices add dependencies in pom

```
<dependency>
    <groupId>org.jeecgframework.boot</groupId>
    <artifactId>jeecg-system-cloud-api</artifactId>
</dependency>
```

copy

## Summarize:

The above description is about the implementation and use of the system module API. If you need to write an API for your own new module, you can refer to its rules.  
1\. Add two new API projects  
2\. Name them ending with local-api/cloud-api  
3\. Define interfaces in the two projects respectively  
4\. Define implementation classes in your own modules to implement the interfaces in local-api  
5\. Define controllers in your own modules, inject the interfaces in local-api, and keep the method request addresses consistent with cloud-api  
6\. For other module calls, you only need to switch specific dependencies according to the needs of single or microservices.
