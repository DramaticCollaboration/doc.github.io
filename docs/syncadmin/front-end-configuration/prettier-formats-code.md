---
order: 4
---

# Prettier formats code

### Webstorm configures Eslint + Prettier to unify team code style

1\. Configure `prettier`and `prettier`format the code when you right-click the file  
![](https://lfs.k.topthink.com/lfs/df4c01bd70bf9623885856a92eed243129d5a56530af031611b93fe7708f2cf2.dat)  
![](https://lfs.k.topthink.com/lfs/0524c62c72c1a5149f03e4540e02956d30295a6325cea545ab7b9df8f31792fe.dat)

2\. When saving, prettier formatting is automatically triggered

![](https://lfs.k.topthink.com/lfs/33ffad211fded0adbe4a24e9f64f07874b48fd68b07a330b254d41e89f298d27.dat)

3\. `prettier.config.js`Configure custom rules in the project

![](https://lfs.k.topthink.com/lfs/4f7319bf897715eff120968ebdcef50d10920ebf4cb6b4a44b7e2ebbfababf0f.dat)

### common problem

1\. Right-click formatting does not work and an error message is displayed`TypeError: prettierApi.getFileInfo.sync is not a function`

> Reason: The webstorm version is too old
