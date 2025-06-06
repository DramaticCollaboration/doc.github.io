---
order: 4
---

# Redis cache annotation usage

> jeecg-boot integrates redis by default. The integration class is in [RedisConfig.java](https://github.com/jeecgboot/jeecg-boot-starter/blob/master/jeecg-boot-common/src/main/java/org/jeecg/common/modules/redis/config/RedisConfig.java) . The cache validity period is also set here. For specific usage of cache, refer to the following document

# Three usages

## 1\. Cache annotation @Cacheable

### 1.1 Add cache via @Cacheable

```
   //key的定义参考官方文档
  @Cacheable(cacheNames="jeecgDemo", key="#id")
```

copy

Example:

```
    /**
	 * 缓存注解测试： redis
	 */
	@Cacheable(cacheNames="jeecgDemo", key="#id")
	public JeecgDemo getByIdCacheable(String id) {
		JeecgDemo t = jeecgDemoMapper.selectById(id);
		System.err.println(t);
		return t;
	}
```

copy

For specific usage, please refer to: [https://jeecg.blog.csdn.net/article/details/130499908](https://jeecg.blog.csdn.net/article/details/130499908)

### 1.2 Clear the cache through @CacheEvict

> @CacheEvict is used to annotate methods or classes that need to clear cache elements  
> :

```
@CacheEvict(value="dictCache", allEntries=true)
public Result<SysDict> delete(@RequestParam(name="id",required=true) String id) {
```

copy

For specific usage, please refer to: [https://jeecg.blog.csdn.net/article/details/130499908](https://jeecg.blog.csdn.net/article/details/130499908)

## 2\. Encapsulate tool classes through Jeecg

```
   //封装了redis操作各种方法
   @Autowired
   private RedisUtil redisUtil;
```

copy

## 3\. Through the native tool class redisTemplate

```
  @Autowired
  private RedisTemplate<String, Object> redisTemplate;
  @Autowired
  private StringRedisTemplate stringRedisTemplate;
```

copy

## 4\. RedisConfig.java screenshot display

![](https://upload.jeecg.com/jeecg/help/jeecgback/topwrite/assets/image_1683251491868.png)
