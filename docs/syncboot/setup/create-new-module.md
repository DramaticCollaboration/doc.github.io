---
order: 7
---

# 새로운 모듈 생성

> Create a new single module and introduce it into the system for use

## Use the archetype command to create a new module

- Please `包名规则 org.jeecg.modules.*` initialize as follows, otherwise the bean cannot be scanned!
- Execute the mvn command to generate the erp module, IDEA can be used directly graphically

```
// 注意： windows下可直接复制执行， Linux/Macos下  ^ 修改成  \

mvn archetype:generate ^
   -DgroupId=org.jeecgframework.boot ^
   -DartifactId=jeecg-module-erp ^
   -Dversion=3.7.0 ^
   -DarchetypeGroupId=org.jeecgframework.archetype ^
   -DarchetypeArtifactId=jeecg-boot-gen ^
   -DarchetypeVersion=2.0
```

copy

Note: `-DarchetypeVersion=2.0`The version number is fixed and does not need to be modified. `3.7.0`Adjust it according to the version number of your own project.

Generated POM structure

## Use IDEA to create a module

<video src="/online8.mp4" width="100%"  controls></video>
