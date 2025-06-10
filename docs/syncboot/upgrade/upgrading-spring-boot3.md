---
order: 2
---

# SpringBoot 3로 업그레이드

> SyncBoot framework upgrade Spring Boot 3.1.5 steps

Officially released SpringBoot3 version: [https://github.com/jeecgboot/jeecg-boot/tree/springboot3](https://github.com/jeecgboot/jeecg-boot/tree/springboot3)

This update is a destructive update. Several ecological components will be gradually supported. The following is a list of functions

- Building block report function (supported)
- Online function (supported)
- Dashboard function (supported)
- Spring cloud gateway's SentinelFilterContextConfig filter

## #Spring Boot 3 dependency upgrade

> There are several points to note when upgrading from 2.7.10 to 3.1.5.

- JDK version supports JDK 17-19
- **javax.servlet switched to jakarta.servlet**
- Switch spring.redis configuration to spring.data.redis
- Spring Cloud 2022.0.4
- Spring Cloud Alibaba 2022.0.0.0

Except for the above three points, the others are smooth upgrades, but this is only for users who use Spring Boot. However, the second point is a destructive upgrade, and the javax.servlet referenced in the project needs to be replaced with jakarta.servlet.

---

Spring Boot 3 upgrade reference documentation:

- [Spring boot upgrade reference](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-3.0-Migration-Guide)
- [Spring Cloud Upgrade Reference](https://docs.spring.io/spring-cloud/docs/current/reference/html/)
- [spring cloud alibaba upgrade reference](https://sca.aliyun.com/zh-cn/docs/2022.0.0.0/overview/version-explain)

## #Shiro Upgrade Instructions

> As mentioned earlier, since the servlet package inside Spring Boot has been replaced, the jeecg framework uses shiro and spring boot integration, so shiro needs to be upgraded. Fortunately, shiro officially provides support. The following is the upgrade and replacement of shiro.

It should be noted that spring boot 3.1.5 has upgraded the version of jedis, which is not compatible with shiro, so the only way is to downgrade the version in the project.

- Shiro upgrade reference document  
  [https://blog.csdn.net/weixin_43492211/article/details/131217344](https://blog.csdn.net/weixin_43492211/article/details/131217344)

```
<!--shiro-->
		<dependency>
			<groupId>org.apache.shiro</groupId>
			<artifactId>shiro-spring-boot-starter</artifactId>
			<version>${shiro.version}</version>
			<exclusions>
				<exclusion>
					<groupId>org.apache.shiro</groupId>
					<artifactId>shiro-spring</artifactId>
				</exclusion>
			</exclusions>
		</dependency>
		<!-- shiro-redis -->
		<dependency>
			<groupId>org.crazycake</groupId>
			<artifactId>shiro-redis</artifactId>
			<version>${shiro-redis.version}</version>
			<exclusions>
				<exclusion>
					<groupId>org.apache.shiro</groupId>
					<artifactId>shiro-core</artifactId>
				</exclusion>
				<exclusion>
					<artifactId>checkstyle</artifactId>
					<groupId>com.puppycrawl.tools</groupId>
				</exclusion>
			</exclusions>
		</dependency>
		<!-- shiro 无法使用 spring boot 3.X 自带的jedis，降版本处理 -->
		<dependency>
			<groupId>redis.clients</groupId>
			<artifactId>jedis</artifactId>
			<version>2.9.0</version>
		</dependency>

		<dependency>
			<groupId>org.apache.shiro</groupId>
			<artifactId>shiro-spring</artifactId>
			<classifier>jakarta</classifier>
			<version>${shiro.version}</version>
			<!-- 排除仍使用了javax.servlet的依赖 -->
			<exclusions>
				<exclusion>
					<groupId>org.apache.shiro</groupId>
					<artifactId>shiro-core</artifactId>
				</exclusion>
				<exclusion>
					<groupId>org.apache.shiro</groupId>
					<artifactId>shiro-web</artifactId>
				</exclusion>
			</exclusions>
		</dependency>
		<!-- 引入适配jakarta的依赖包 -->
		<dependency>
			<groupId>org.apache.shiro</groupId>
			<artifactId>shiro-core</artifactId>
			<classifier>jakarta</classifier>
			<version>${shiro.version}</version>
		</dependency>
		<dependency>
			<groupId>org.apache.shiro</groupId>
			<artifactId>shiro-web</artifactId>
			<classifier>jakarta</classifier>
			<version>${shiro.version}</version>
			<exclusions>
				<exclusion>
					<groupId>org.apache.shiro</groupId>
					<artifactId>shiro-core</artifactId>
				</exclusion>
			</exclusions>
		</dependency>
```

copy

## #knife4j upgrade instructions

> knife4j provides support for spring boot 3.X version, but the difference is quite large compared to spring boot 2.X version, from springfox to springdoc, it cannot be smoothly upgraded. The following is a list of annotations that need to be replaced.

Knife4j upgrade reference documentation:

[https://doc.xiaominfo.com/docs/quick-start/start-knife4j-version#22-spring-boot-3x](https://doc.xiaominfo.com/docs/quick-start/start-knife4j-version#22-spring-boot-3x)

[https://springdoc.org/#migrating-from-springfox](https://springdoc.org/#migrating-from-springfox)

- `@Api`→`@Tag`
- `@ApiIgnore` → `@Parameter(hidden = true)` or `@Operation(hidden = true)` or `@Hidden`
- `@ApiImplicitParam`→`@Parameter`
- `@ApiImplicitParams`→`@Parameters`
- `@ApiModel`→`@Schema`
- `@ApiModelProperty(hidden = true)`→`@Schema(accessMode = READ_ONLY)`
- `@ApiModelProperty`→`@Schema`
- `@ApiOperation(value = "foo", notes = "bar")`→`@Operation(summary = "foo", description = "bar")`
- `@ApiParam`→`@Parameter`
- `@ApiResponse(code = 404, message = "foo")`→`@ApiResponse(responseCode = "404", description = "foo")`

There are also differences in initializing the document object. Replace the following before and after

```
[@Bean](https://my.oschina.net/bean)
    public GroupedOpenApi swaggerOpenApi() {
        return GroupedOpenApi.builder()
                .group("default")
                .packagesToScan("org.jeecg")
                .build();
    }

    [@Bean](https://my.oschina.net/bean)
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("SyncBoot 后台服务API接口文档")
                        .version("1.0")
                        .contact(new Contact().name("北京国炬信息技术有限公司").url("www.jeccg.com").email("jeecgos@163.com"))
                        .description( "后台API接口")
                        .termsOfService("NO terms of service")
                        .license(new License().name("Apache 2.0").url("http://www.apache.org/licenses/LICENSE-2.0.html"))
                );
    }


// ---------------------------替换后---------------------

    [@Bean](https://my.oschina.net/bean)
    public GroupedOpenApi swaggerOpenApi() {
        return GroupedOpenApi.builder()
                .group("default")
                .packagesToScan("org.jeecg")
                .build();
    }

    [@Bean](https://my.oschina.net/bean)
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("SyncBoot 后台服务API接口文档")
                        .version("1.0")
                        .contact(new Contact().name("北京国炬信息技术有限公司").url("www.jeccg.com").email("jeecgos@163.com"))
                        .description( "后台API接口")
                        .termsOfService("NO terms of service")
                        .license(new License().name("Apache 2.0").url("http://www.apache.org/licenses/LICENSE-2.0.html"))
                );
    }
```

copy

Upgraded Maven address:

```
		<dependency>
			<groupId>com.github.xiaoymin</groupId>
			<artifactId>knife4j-openapi3-jakarta-spring-boot-starter</artifactId>
			<version>4.3.0</version>
		</dependency>
```

copy

In knife4j 4.X version, swagger document and spring cloud gateway are integrated for the first time to provide a complete solution that can be used out of the box. The following is an application case, which has also been upgraded in jeecg.

```
        <dependency>
            <groupId>com.github.xiaoymin</groupId>
            <artifactId>knife4j-gateway-spring-boot-starter</artifactId>
            <version>4.3.0</version>
        </dependency>
```

copy

## #spring boot 3.x ecosystem smooth upgrade

The following is a smooth upgrade, that is, just change the version, no adjustment is required, the jeecg framework is adjusted as follows

```
		<!-- druid -->
		<dependency>
			<groupId>com.alibaba</groupId>
			<artifactId>druid-spring-boot-3-starter</artifactId>
			<version>1.2.20</version>
		</dependency>

		<!-- 动态数据源 -->
		<dependency>
			<groupId>com.baomidou</groupId>
			<artifactId>dynamic-datasource-spring-boot3-starter</artifactId>
			<version>4.1.3</version>
		</dependency>

		<!-- spring boot-admin -->
		<dependency>
            <groupId>de.codecentric</groupId>
            <artifactId>spring-boot-admin-starter-server</artifactId>
            <version>3.0.4</version>
        </dependency>
```

copy

## #META-INF upgrade spring.factories

Create a new file org.springframework.boot.autoconfigure.AutoConfiguration.imports  
and  
replace the original spring.factories with one line of fully qualified name of the startup class that needs to be automatically loaded

## Upgrade Tips

> Module rapid upgrade springboot3 transformation process

```
第一步：切换项目JDK和Maven的JDK为17
第二步：替换过时类

搜索javax.servlet.http.HttpServletRequest 替换为jakarta.servlet.http.HttpServletRequest
搜索javax.servlet.http.HttpServletResponse 替换为jakarta.servlet.http.HttpServletRequest
搜索javax.websocket 替换为jakarta.websocket

搜索@Api替换为//@Api
搜索@AutoLowApp替换为//@AutoLowApp
搜索io.swagger.annotations.ApiModel删掉
搜索io.swagger.annotations.Api删掉
搜索javax.annotation.Resource删掉
```

copy

Open Source Deletion Class

```
搜索org.jeecg.common.constant.enums.LowAppAopEnum删掉
搜索org.jeecg.common.aspect.annotation.AutoLowApp删掉
搜索org.jeecg.common.bpm.api.IBpmBaseExtApi删掉
```

copy
