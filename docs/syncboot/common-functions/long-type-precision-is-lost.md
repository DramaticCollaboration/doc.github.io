---
order: 7
---

# Long type precision is lost

> When the field in the entity class is of `Long`type and the value exceeds `js`the length range displayed by the front end, an error will be displayed on the front end.

### Method 1: Automatically convert Long to String when using @JsonSerialize annotation

```
@JsonSerialize(using = ToStringSerializer.class)
private Long id;

```

copy

### Method 2: Automatically convert Long to String when using @JsonFormat annotation

```
@JsonFormat(shape = JsonFormat.Shape.STRING)
private Long id;

```

copy

### Method 3 Add the following code to the global configuration org.jeecg.config.WebMvcConfiguration

```
   builder.serializerByType(Long.class, ToStringSerializer.instance);
   builder.serializerByType(Long.TYPE, ToStringSerializer.instance);
```

copy

The specific configuration is as follows

```
@Bean
public Jackson2ObjectMapperBuilderCustomizer jackson2ObjectMapperBuilderCustomizer() {
    return builder -> {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        //返回时间数据序列化
        builder.serializerByType(LocalDateTime.class, new LocalDateTimeSerializer(formatter));
        //接收时间数据反序列化
        builder.deserializerByType(LocalDateTime.class, new LocalDateTimeDeserializer(formatter));
        //序列化Long
        builder.serializerByType(Long.class, ToStringSerializer.instance);
        builder.serializerByType(Long.TYPE, ToStringSerializer.instance);
    };
}
```

copy
