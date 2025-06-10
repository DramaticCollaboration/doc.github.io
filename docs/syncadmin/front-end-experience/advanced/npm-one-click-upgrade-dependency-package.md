---
order: 2
---

# npm one-click upgrade dependency package

Use npm to upgrade all dependent packages \[One-click upgrade method\]

```
// 第一步：全局安装插件
npm install -g npm-check-updates

// 第二步在需更新的package.json默认下执行-u的命令更新package.json文件中的版本
ncu -u

// 第三步：执行npm install  自动安装最新的包
npm install
```

copy

[https://blog.csdn.net/weixin_43343144/article/details/107440660](https://blog.csdn.net/weixin_43343144/article/details/107440660)

[https://blog.csdn.net/iotjin/article/details/128420492](https://blog.csdn.net/iotjin/article/details/128420492)
