---
order: 4
---

# 권한관리 SpringSAS로 변경

## Spring Authorization Server Replaces Shiro Guide

## background

- The Spring team officially announced that **Spring Security OAuth will no longer be maintained** and the project will not be iterated any further.

![](/images/52ef49bfad5e54855339b606a598bdcc362667b424487e22daf883fba0375443.png)

- Currently, the OAuth2 authorization server in the Spring ecosystem is **Spring Authorization Server** , which is now available **for production use.**
- As the latest permission scheme for SpringBoot 3.0, the SyncBoot springboot3_sas branch has completed the work of replacing Shiro with Spring Authorization Server.

## SyncBoot SAS branch

> Date: 2024-01-17  
> Technology stack: SpringBoot3+ Spring Authorization Server+jdk18  
> **Important note: Currently `beta阶段`, it is not recommended for official projects**

Source code download:

- Backend: [https://github.com/jeecgboot/jeecg-boot/tree/springboot3_sas](https://github.com/jeecgboot/jeecg-boot/tree/springboot3_sas)
- Front-end: [https://github.com/jeecgboot/jeecgboot-vue3/tree/springboot3_sas](https://github.com/jeecgboot/jeecgboot-vue3/tree/springboot3_sas)

### Login connection

> jeecg extends four login implementations based on Spring Authorization Server. Together with the four default ones, there are a total of 8 login methods, and there is also an OpenID Connect mode. This article does not explain the authorization code mode, client mode, refresh code mode, device code mode, and OpenID Connect mode, but only explains the four extended modes that jeecg actually applies. For other modes, please refer to the official text of Spring Authorization Server.
>
> [https://docs.spring.io/spring-authorization-server/reference/overview.html](https://docs.spring.io/spring-authorization-server/reference/overview.html)
>
> Note: OpenID Connect should only be used during the authentication phase and not during the permission verification phase.

#### Password mode and APP mode

> The password mode is abandoned in the Oauth2.1 protocol. Spring Authorization Server does not provide an implementation for this mode. This implementation is based on the extended entry provided by Spring Authorization Server.
>
> Password mode implementation source code: package org.jeecg.config.security.password;
>
> APP mode implementation source code: package org.jeecg.config.security.app;
>
> The password mode is implemented exactly the same as the APP mode, but to prevent additional demand deviations, they are implemented separately.

Request URL: {baseUrl}/oauth2/token

Request method: POST

Request header:

| Request header name | Request header value                                                 |
| ------------------- | -------------------------------------------------------------------- |
| Authorization       | Basic base64(clientId:clientSecret)(You need to replace it yourself) |
| Content-Type        | application/x-www-form-urlencoded                                    |

Request parameters:

| parameter name | Parameter Value                                      |
| -------------- | ---------------------------------------------------- |
| grant_type     | password/app (password is for PC, app is for mobile) |
| username       | username                                             |
| password       | password                                             |

Response content:

| parameter name | Parameter meaning                                                                        |
| -------------- | ---------------------------------------------------------------------------------------- |
| access_token   | Access token, add Authorization: Bearer access_token to the restricted interface request |
| refersh_token  | Refresh token, used to obtain a new access_token in refresh code mode                    |
| userInfo       | Current logged in user information                                                       |
| ...            | Other contents are not explained in detail, please check the source code                 |

#### Phone Mode

> Phone mode is used for mobile phone + verification code login scenarios.
>
> Phone mode implementation source code: package org.jeecg.config.security.phone;

Request URL: {baseUrl}/oauth2/token

Request method: POST

Request header:

| Request header name | Request header value                                                 |
| ------------------- | -------------------------------------------------------------------- |
| Authorization       | Basic base64(clientId:clientSecret)(You need to replace it yourself) |
| Content-Type        | application/x-www-form-urlencoded                                    |

Request parameters:

| parameter name | Parameter Value   |
| -------------- | ----------------- |
| grant_type     | Fixed to phone    |
| mobile         | Phone number      |
| captcha        | Verification Code |

Response content:

| parameter name | Parameter meaning                                                                        |
| -------------- | ---------------------------------------------------------------------------------------- |
| access_token   | Access token, add Authorization: Bearer access_token to the restricted interface request |
| refersh_token  | Refresh token, used to obtain a new access_token in refresh code mode                    |
| userInfo       | Current logged in user information                                                       |
| ...            | Other contents are not explained in detail, please check the source code                 |

#### social mode

> The connection methods provided by any user center (such as WeChat, Weibo, GitHub, and Gitee) are authorization code mode and OpenID Connect mode, and ultimately a piece of user information (such as user name, avatar address, and email address) is obtained. However, there is actually no way to use this information to access restricted resources in the current system. In the past, tokens were manually rubbed or other means were used to obtain restricted access permissions. This method is unreliable, unsafe, and difficult to maintain.
>
> In view of the above scenarios, jeecg extends the social mode based on Spring Authorization Server to obtain the access credentials of the current system after obtaining the third-party user information.
>
> Social mode implementation source code: package org.jeecg.config.security.social;
>
> Tip: This document only explains the application of the social mode, not the entire process from three-party login to the application of the social mode. Both the front-end and back-end of jeecg have been implemented. Please check the source code for details.

Request URL: {baseUrl}/oauth2/token

Request method: POST

Request header:

| Request header name | Request header value                                                 |
| ------------------- | -------------------------------------------------------------------- |
| Authorization       | Basic base64(clientId:clientSecret)(You need to replace it yourself) |
| Content-Type        | application/x-www-form-urlencoded                                    |

Request parameters:

| parameter name | Parameter Value                              |
| -------------- | -------------------------------------------- |
| grant_type     | Fixed to social                              |
| token          | Credentials that can obtain user information |
| thirdType      | Third-party sources                          |

Response content:

| parameter name | Parameter meaning                                                                        |
| -------------- | ---------------------------------------------------------------------------------------- |
| access_token   | Access token, add Authorization: Bearer access_token to the restricted interface request |
| refersh_token  | Refresh token, used to obtain a new access_token in refresh code mode                    |
| userInfo       | Current logged in user information                                                       |
| ...            | Other contents are not explained in detail, please check the source code                 |

#### Customize new login rules

> You can directly refer to the password directory or phone directory to write,  
> `jeecg-boot-base-core/org/jeecg/config/security/password`  
> `jeecg-boot-base-core/org/jeecg/config/security/phone`  
> create casConvert, casToken, and casProvider, and copy the passwordProvider in the provider. The only difference is the conditions for obtaining user information.  
> For example, password is to find user information based on the username, and then match whether the password is correct.  
> Phone is based on the mobile phone number + verification number, and then the ticket looks at what information is in it. If there is only a username, you can also use the username alone to obtain user information, and then the subsequent operations are the same, just move it over.  
> However, in this case, it is equivalent to assuming that the ticket is legal. As long as the username is obtained from the ticket, we consider it legal. At this time, we need to verify the ticket to verify that the ticket is legal.

Front-end token acquisition interface

```
统一接口: '/oauth2/token',
参数：grant_type = 'password';
# 通过grant_type 区分不同登录规则
```

copy

### Permission verification

It can be used on methods or classes to intercept permissions based on the annotated permission code and process the method or all interfaces of the current class in a targeted manner.

#### Role-based

```
// shiro用法
@RequiresRoles("admin")

// 可替换为 spring authorization server 用法
@PreAuthorize("jps.requiresRoles('admin')")
```

copy

#### Based on permissions

```
// shiro用法
@RequiresPermissions("sys:role")

// 可替换为 spring authorization server 用法
@PreAuthorize("jps.requiresPermissions('sys:role')")
```

copy

Combining roles and permissions

```
- @PreAuthorize("@jps.requiresPermissions('system:quartzJob:add') or @jps.requiresRoles('admin')")
```

copy

#### Login-free configuration

```
jeecg:
  shiro:
    excludeUrls: /test/jeecgDemo/demo3,/test/jeecgDemo/redisDemo/**,/jmreport/bigscreen2/**


# 替换为
security:
  oauth2:
    client:
      ignore-urls:
        - /test/jeecgDemo/demo3
        - /test/jeecgDemo/redisDemo/**
        - /jmreport/bigscreen2/**
```

copy

### Upgrade Tips

| search                                                | Replace with                                             |
| ----------------------------------------------------- | -------------------------------------------------------- |
| org.apache.shiro.SecurityUtils                        | org.jeecg.config.security.utils.SecureUtil               |
| (LoginUser) SecurityUtils.getSubject().getPrincipal() | SecureUtil.currentUser()                                 |
| org.apache.shiro.authz.annotation.RequiresRoles       | org.springframework.security.access.prepost.PreAuthorize |
| org.apache.shiro.authz.annotation.RequiresPermissions | org.springframework.security.access.prepost.PreAuthorize |
| @RequiresPermissions                                  | @PreAuthorize("jps.requiresPermissions('xxx')")          |
| @RequiresRoles                                        | @PreAuthorize("@jps.requiresRoles('xxx')")               |

### Upgrading SQL

Switch to the Spring Authorization Server of the springboot3_sas branch and execute the upgrade sql

```
CREATE TABLE `oauth2_registered_client` (
  `id` varchar(100) NOT NULL,
  `client_id` varchar(100) NOT NULL,
  `client_id_issued_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `client_secret` varchar(200) DEFAULT NULL,
  `client_secret_expires_at` timestamp NULL DEFAULT NULL,
  `client_name` varchar(200) NOT NULL,
  `client_authentication_methods` varchar(1000) NOT NULL,
  `authorization_grant_types` varchar(1000) NOT NULL,
  `redirect_uris` varchar(1000) DEFAULT NULL,
  `post_logout_redirect_uris` varchar(1000) DEFAULT NULL,
  `scopes` varchar(1000) NOT NULL,
  `client_settings` varchar(2000) NOT NULL,
  `token_settings` varchar(2000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `oauth2_registered_client`
(`id`,
`client_id`,
`client_id_issued_at`,
`client_secret`,
`client_secret_expires_at`,
`client_name`,
`client_authentication_methods`,
`authorization_grant_types`,
`redirect_uris`,
`post_logout_redirect_uris`,
`scopes`,
`client_settings`,
`token_settings`)
VALUES
('3eacac0e-0de9-4727-9a64-6bdd4be2ee1f',
'jeecg-client',
now(),
'secret',
null,
'3eacac0e-0de9-4727-9a64-6bdd4be2ee1f',
'client_secret_basic',
'refresh_token,authorization_code,password,app,phone,social',
'http://127.0.0.1:8080/jeecg-',
'http://127.0.0.1:8080/',
'*',
'{"@class":"java.util.Collections$UnmodifiableMap","settings.client.require-proof-key":false,"settings.client.require-authorization-consent":true}',
'{"@class":"java.util.Collections$UnmodifiableMap","settings.token.reuse-refresh-tokens":true,"settings.token.id-token-signature-algorithm":["org.springframework.security.oauth2.jose.jws.SignatureAlgorithm","RS256"],"settings.token.access-token-time-to-live":["java.time.Duration",300000.000000000],"settings.token.access-token-format":{"@class":"org.springframework.security.oauth2.server.authorization.settings.OAuth2TokenFormat","value":"self-contained"},"settings.token.refresh-token-time-to-live":["java.time.Duration",3600.000000000],"settings.token.authorization-code-time-to-live":["java.time.Duration",300000.000000000],"settings.token.device-code-time-to-live":["java.time.Duration",300000.000000000]}');
```

copy

### Common APIs

#### 1\. Get the logged-in user information

LoginUser sysUser = SecureUtil.currentUser();

#### 2\. Differences in login processing between Shiro and Spring Authorization Server (sas)

| Login Mode                     | Shiro                                                                                                                                                                       |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Username Password              | Request path: /sys/loginRequest method: POSTRequest header: Content-Type: application/jsonRequest parameters: {“username”:"", "password":"", captcha: "", checkKey: xxxxxx} |
| Mobile phone verification code | Request path: /sys/phoneLoginRequest method: POSTRequest header: Content-Type: application/jsonRequest parameters: {“mobile”:"", captcha: ""}                               |
| Three-party login callback     | Request path: /sys/thirdLogin/getLoginUser/{token}/{thirdType}/{tenantId} Request method: GET Request header: None Request parameters: Path parameters                      |
| Mobile login                   | Request path: /sys/mlogin Request method: POST Request header: Content-Type: application/json Request parameters: {“username”:"", "password":""}                            |

| Login Mode                     | Spring Authorization Server                                                                                                                                                                                                                  |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Username Password              | Request path: /oauth2/tokenRequest method: POSTRequest header: Content-Type: application/x-www-form-urlencoded Authorization: Basic base64(clientId ) Request parameters: username: "" password:"" grant_type:"password" captcha:"" checkKey |
| Mobile phone verification code | Request path: /oauth2/token Request method: POST Request header: Content-Type: application/x-www-form-urlencoded Authorization: Basic base64(clientId ) Request parameters: mobile: "" captcha:"" grant_type:"phone"                         |
| Three-party login callback     | Request path: /oauth2/tokenRequest method: POSTRequest header: Content-Type: application/x-www-form-urlencoded Authorization: Basic base64(clientId ) Request parameters: token: "" thirdType:""(optional) grant_type:"social"               |
| Mobile login                   | Request path: /oauth2/token Request method: POST Request header: Content-Type: application/x-www-form-urlencoded Authorization: Basic base64(clientId ) Request parameters: username: "" password:"" grant_type:"app"                        |

> **Apache Shiro:**
>
> 1.  Shiro is a comprehensive security framework designed to handle authentication, authorization, session management, encryption and other functions. It is suitable for various types of applications, including web, command line, mobile and Swing applications, not limited to web environments.
> 2.  Shiro is lightweight, does not rely on any specific framework or container, and can run independently. This makes it very useful in non-Spring ecosystems.
> 3.  Shiro provides an easy-to-understand API that enables developers to quickly implement security features. Its configuration and use are generally considered to be simpler and more direct, and it is especially friendly to small to medium-sized projects.
> 4.  Despite providing a wide range of security features, Shiro may not be as rich as Spring Security in advanced security features such as OAuth support, which may require developers to implement them themselves or integrate other libraries.
>
> **Spring Authorization Server:**
>
> 1.  Spring Authorization Server is a framework that focuses on implementing OAuth 2.1 authorization server functions. It is part of the Spring Security project and is specifically designed to build authentication servers that comply with the OAuth 2.1 specification. This means that its main focus is on handling authorization, token management, and OAuth-related security protocols.
> 2.  As a member of the Spring family, Spring Authorization Server has a natural and tight integration with Spring Security and Spring Boot. For projects using the Spring technology stack, integration and configuration are more convenient and can take advantage of Spring's powerful functions and existing infrastructure.
> 3.  Spring Authorization Server closely follows the OAuth 2.1 Authorization Framework and other related specifications, ensuring compliance and security of the implementation.
> 4.  Compared with the wide applicability of Shiro, Spring Authorization Server provides a more professional OAuth solution, including support for advanced security features such as OpenID Connect, JWT, JOSE (Javascript Object Signing and Encryption), which is suitable for complex application scenarios that need to implement OAuth services.
>
> If you need a comprehensive security framework to handle basic security requirements such as application authentication and authorization, Shiro may be a good choice, especially for projects that do not rely on Spring or require a lightweight solution.
>
> If your application needs to implement OAuth 2.1 authorization server functionality, then Spring Authorization Server will be a more professional choice, as it provides deeper OAuth support and better Spring ecosystem integration experience.
