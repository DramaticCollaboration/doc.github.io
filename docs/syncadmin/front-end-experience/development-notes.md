---
order: 14
---

# Development Notes

- [Form Documentation](https://doc.vvbin.cn/components/form.html#%E6%96%B9%E5%BC%8F-1)
- [Table](https://doc.vvbin.cn/components/table.html)
- [vue3 devtools plugin](https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg)

## Special modification records

- Top selection area style

```
src/components/Table/src/BasicTable.vue
```

copy

- Home page loading delay 500

```
src/views/dashboard/workbench/index.vue
src/views/dashboard/analysis/index.vue
```

copy

- Login logic (Token/user information cache)

```
src/store/modules/user.ts

全局搜 TOKEN_KEY、USER_INFO_KEY

```

copy

- Common underlying API configuration

```
src/api/common/api.ts
```

copy

- Routing goes to the backend

```
src/api/sys/menu.ts
```

copy

axios headers settings

```
requestInterceptors
src/utils/http/axios/index.ts
```

copy

Routing background assembly logic

```
src/store/modules/permission.ts
```

copy

log in page

```
src/views/sys/login/LoginForm.vue
```

copy
