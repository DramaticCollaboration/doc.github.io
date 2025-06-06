---
order: 5
---

# How to write a mock interface

## Enable mock

Modify the environment variable file (.env.development .env.production .env.test) VITE_USE_MOCK=true

## Take the system mock sample account management as an example

### Defining mock data

Define the following code in the mock/demo/system.ts file

```
//模拟接口数据
const accountList = (() => {
    const result: any[] = [];
    for (let index = 0; index < 20; index++) {
        result.push({
            id: `${index}`,
            account: '@first',
            email: '@email',
            nickname: '@cname()',
            role: '@first',
            createTime: '@datetime',
            remark: '@cword(10,20)',
            'status|1': ['0', '1'],
        });
    }
    return result;
})();

```

copy

> The value of mock can directly use the syntax of [mockjs](http://mockjs.com/examples.html) .

```
//导出接口定义
export default [
  {
    url: `${baseUrl}/system/getAccountList`,
    timeout: 100,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, accountList);
    },
  }
]
```

copy

### Define the mock address

Define the interface access address in the src/api/demo/system.ts file as follows:  
**Note: The interface address must start with mock (to distinguish it from the official interface. If the mock address and the official address interface name are different, you don’t need to add mock. The mock identifier is defined in baseUrl)**

```
enum Api {
    AccountList = '/mock/system/getAccountList',
    ....
}

export const getAccountList = (params: AccountParams) =>
    defHttp.get<AccountListGetResultModel>({url: Api.AccountList, params});
```

copy

### Using mock interfaces

The system provides a built-in example, the path is as follows  
src/views/demo/system/account/index.vue  
![](https://lfs.k.topthink.com/lfs/296d84d69de40926e515a656e4ae05c8e6ac52623b29abda6552be9100dd58e4.dat)

> baseUrl description: It is the unified parent path of the mock request, defined in the mock/\_util.ts file. In this example, the value is /jeecgboot/mock
