---
order: 4
---

# Startup project

## 1\. Download source code & start

```
# 拉取前后端代码
git clone https://github.com/jeecgboot/SyncBoot.git

# 进入前端代码
cd SyncBoot/jeecgboot-vue3

# 安装依赖
pnpm install

# 运行项目
pnpm dev
```

copy

## 2\. Configure the interface address

> Configuration Files:`.env.development`

Please `http://localhost:8080/jeecg-boot`replace the two places with your own address, and leave the rest unchanged.

```
#后台接口父地址(必填)
VITE_GLOB_API_URL=/jeecgboot
# 跨域代理，您可以配置多个 ,请注意，没有换行符
VITE_PROXY = [["/jeecgboot","http://localhost:8080/jeecg-boot"],["/upload","http://localhost:3300/upload"]]
#后台接口全路径地址(必填)
VITE_GLOB_DOMAIN_URL=http://localhost:8080/jeecg-boot
```

copy

### 3\. Visit the login page

![](https://lfs.k.topthink.com/lfs/03cec7c7285c1c611ad991e3d1d238a93856a59891513069a46ac122feb5e2d5.dat)

## 4\. Start the background

- [Background launch document](https://help.jeecg.com/java/setup/idea/startup.html)

## 5\. Enter the backend system

![](https://lfs.k.topthink.com/lfs/fa56325672eba8b5ae68b938c925beed7771850102d2f09a6b8bd39af99dde07.dat)
