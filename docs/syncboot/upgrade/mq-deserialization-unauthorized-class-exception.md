---
order: 6
---

# MQ deserialization unauthorized class exception

Spring AMQP deserialization unauthorized class exception solution

## Problem Description:

In October 2023, Spring officially disclosed the CVE-2023-34050 Spring AMQP deserialization vulnerability. Since SimpleMessageConverter or SerializerMessageConverter does not have a whitelist configured by default, any class can be deserialized. In the new version, deserialization of any class is not allowed without a whitelist configured.  
After fixing the vulnerability, you need to use the allowed serialization class when using `SimpleMessageConverter`or . Otherwise, an exception is thrown:`SerializerMessageConverter``addAllowedListPatterns``java.lang.SecurityException`

## solution

Method 1: Set **the system environment variable** : SPRING_AMQP_DESERIALIZATION_TRUST_ALL (trust all message senders)

**IntelliJ IDEA:**

1.  Edit Run Settings
2.  Click More Options, check Environment Variables, and fill in`SPRING_AMQP_DESERIALIZATION_TRUST_ALL=true`

Method 2 (recommended): Use `Jackson2JsonMessageConverter`message conversion classes instead `simple`.

1.  Make sure the following dependencies have been imported:

```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-amqp</artifactId>
</dependency>
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
</dependency>
```

copy

2.  Custom message converter, injected into the container:

```
@Configuration
public class RabbitMqConfig {
    //....
    @Bean
    public MessageConverter messageConverter(){
        return new Jackson2JsonMessageConverter();
    }
    //....
}
```

copy
