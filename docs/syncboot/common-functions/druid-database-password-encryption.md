---
order: 13
---

# Druid database password encryption

#### Step 1: Execute the following command

```
 java -cp [druid-1.1.17.jar仓库路径] [com.alibaba.druid.filter.config.ConfigTools] [密码]
```

copy

#Command examples

```
java -cp D:\druid\druid-1.1.21.jar com.alibaba.druid.filter.config.ConfigTools 123456

执行结果：
privateKey:MIIBVQIBADANBgkqhkiG9w0BAQEFAASCAT8wggE7AgEAAkEAoHbP26qwf/yK3ylc0gDT4V3fVDtttamHuVoAuEGQqX27gnKpQ/oQm6q0yKd1M3TVAftFwiibUQYOYgXemlGUmQIDAQABAkAa6dKTFV3lGYZxR4656kmfUw9SIWWVQonxHJdiUBzjUF9DJG87Y9A0LH2vINg5ElzyqbHO8oYjBqmx/qeq0EABAiEA1EVnjxY3sF1oYq3Yyf+SiJIcNBg7jeNSn46YZP/UnBkCIQDBhT+WpI8OE9sOwobzoq68HD8ax0NiofG9QArf24PMgQIgd1HYJ4deoGWxMp70WH+v99LhxarFdzmMDSKTqVphQakCIQCU5OjgBwzqT+yjlpgurGS05ybGe7olEWTlr3iudD8cAQIhAKUiw4GkHtb52wPFodIJ0CqsDZx8ArIhkr7HlCkH4laJ
publicKey:MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKB2z9uqsH/8it8pXNIA0+Fd31Q7bbWph7laALhBkKl9u4JyqUP6EJuqtMindTN01QH7RcIom1EGDmIF3ppRlJkCAwEAAQ==
password:ii07X7Je3wdc6EP6c8NfrTqZ3fEi/JIxCFSjCwj1I4VzwJ2KYJNf5lDcbxUhIghklBtigy6JbEq9aU2WxN5Spw==
```

copy

#Screenshot Example  
![](https://lfs.k.topthink.com/lfs/58be31f7b0a37ca9d8719a5beae8a7a8bc2cd695bb2ce253a0dc29b3800bb6a4.dat)

#### Step 2: Modify the configuration and fill in the publicKey and password in the corresponding position of application-dev.xml

![](https://lfs.k.topthink.com/lfs/dc04f4a0a7a97732d0aa6fa074d91b8b3e2ea50e8021c624499dfe18425373f1.dat)
