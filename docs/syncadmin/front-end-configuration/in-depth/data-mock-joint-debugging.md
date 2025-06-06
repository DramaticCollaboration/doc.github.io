---
order: 7
---

# Data mock & joint debugging

## Development Environment

If the front-end application and the back-end API server are not running on the same host, you need to proxy the API requests to the API server in the development environment.

If it is the same host, you can directly request the specific interface address.

### Configuration

In the development environment, the interface address is in the project root directory

[.env.development](https://github.com/vbenjs/vue-vben-admin/tree/main/.env.development) file configuration

```
# vite 本地跨域代理
VITE_PROXY=[["/basic-api","http://localhost:3000"]]
# 接口地址
VITE_GLOB_API_URL=/api
```

copy

::: tip

- If the fields in the .env file are strings, there is no need to add quotes. By default, all fields are strings.
- VITE_PROXY cannot wrap

:::

### Cross-domain processing

If `src/api/`the interface below is the code below and the **.env.development** file is configured with the following comments, the address you see in the console is `http://localhost:3100/basic-api/login`.

Since `/basic-api`it matches the settings `VITE_PROXY`, the above actually requests [http://localhost:3000/login](http://localhost:3000/login) , which also solves the cross-domain problem. ( **3100** is the project port number, and [http://localhost:3000](http://localhost:3000) is the target address of the PROXY proxy)

```
// .env.development
// VITE_PROXY=[["/basic-api","http://localhost:3000"]]
// VITE_GLOB_API_URL=/basic-api

enum Api {
  Login = '/login',
}

/**
 * @description: 用户登陆
 */
export function loginApi(params: LoginParams) {
  return http.request<LoginResultModel>({
    url: Api.Login,
    method: 'POST',
    params,
  });
}
```

copy

### No cross-domain configuration

If there is no cross-domain problem, you can ignore the **VITE_PROXY** configuration and directly set the interface address to **VITE_GLOB_API_URL**

```
# 例如接口地址为 http://localhost:3000 则
VITE_GLOB_API_URL=http://localhost:3000
```

copy

If there is a cross-domain problem, just set **VITE_GLOB_API_URL** to a value that matches the first item in one of the arrays in **VITE_PROXY .**

The interface address below is set to `/basic-api`, when the request is sent, it will pass through Vite's proxy, match the **VITE_PROXY** rule we set, and `/basic-api`convert it to `http://localhost:3000`make a request

```
# 例如接口地址为 http://localhost:3000 则
VITE_PROXY=[["/basic-api","http://localhost:3000"]]
# 接口地址
VITE_GLOB_API_URL=/basic-api
```

copy

### Analysis of cross-domain principles

In `vite.config.ts`the configuration file, the server's proxy function is provided to proxy API requests.

```
server: {
  proxy: {
    "/basic-api":{
      target: 'http://localhost:3000',
      changeOrigin: true,
      ws: true,
      rewrite: (path) => path.replace(new RegExp(`^/basic-api`), ''),
    }
  },
},
```

copy

::: tip

From the browser console's Network, the request is `http://localhost:3000/basic-api/xxx`, this is because the proxy configuration will not change the URL of the local request.

:::

## Production Environment

[The production environment interface address is configured in the .env.production](https://github.com/vbenjs/vue-vben-admin/tree/main/.env.production) file in the project root directory .

The production environment interface address value needs to be modified **VITE_GLOB_API_URL** . If cross-domain problems occur, you can use nginx or enable cors in the background to handle it.

::: tip How to modify the address after packaging?

**Variables starting with VITE_GLOB\_\* will be injected into the** **\_app.config.js** file during packaging .

After modifying the corresponding interface address in **dist/\_app.config.js, just refresh the page. There is no need to package multiple times according to different environments. One package can be used for deployment in multiple different interface environments.**

:::

## Interface Request

In vue-vben-admin:

1.  Page interaction operations;
2.  Call the unified management API request function;
3.  Use the encapsulated axios.ts to send the request;
4.  Get the data returned by the server
5.  Update data;

The interfaces are uniformly stored in [src/api/](https://github.com/vbenjs/vue-vben-admin/tree/main/src/api) and managed below

Take the login interface as an example:

Create a new module file in **src/api/** , where it is best to define the types of parameters and return values ​​for easy verification. Although it is troublesome, it is very convenient to maintain the fields later.

::: tip

Type definition files can be extracted and managed in a unified manner. For details, refer to the project

:::

```
import { defHttp } from '/@/utils/http/axios';
import { LoginParams, LoginResultModel } from './model/userModel';

enum Api {
  Login = '/login',
}

export function loginApi(params: LoginParams) {
  return defHttp.request<LoginResultModel>({
    url: Api.Login,
    method: 'POST',
    params,
  });
}
```

copy

## axios configuration

**Axios** request encapsulation is stored in [the src/utils/http/axios](https://github.com/vbenjs/vue-vben-admin/tree/main/src/utils/http/axios) folder

Except for `index.ts`the file content, which needs to be modified according to the project, the rest of the files do not need to be modified.

```

├── Axios.ts // axios实例
├── axiosCancel.ts // axiosCancel实例，取消重复请求
├── axiosTransform.ts // 数据转换类
├── checkStatus.ts // 返回状态值校验
├── index.ts // 接口返回统一处理

```

copy

### index.ts configuration instructions

```
const axios = new VAxios({
  // 认证方案，例如: Bearer
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#authentication_schemes
  authenticationScheme: '',
  // 接口超时时间 单位毫秒
  timeout: 10 * 1000,
  // 接口可能会有通用的地址部分，可以统一抽取出来
  prefixUrl: prefix,
  headers: { 'Content-Type': ContentTypeEnum.JSON },
  // 数据处理方式，见下方说明
  transform,
  // 配置项，下面的选项都可以在独立的接口请求中覆盖
  requestOptions: {
    // 默认将prefix 添加到url
    joinPrefix: true,
    // 是否返回原生响应头 比如：需要获取响应头时使用该属性
    isReturnNativeResponse: false,
    // 需要对返回数据进行处理
    isTransformRequestResult: true,
    // post请求的时候添加参数到url
    joinParamsToUrl: false,
    // 格式化提交参数时间
    formatDate: true,
    // 消息提示类型
    errorMessageMode: 'message',
    // 接口地址
    apiUrl: globSetting.apiUrl,
    //  是否加入时间戳
    joinTime: true,
    // 忽略重复请求
    ignoreCancelToken: true,
  },
});
```

copy

**Transform data processing instructions**

For type definition, see **the axiosTransform.ts** file

```
export abstract class AxiosTransform {
  /**
   * @description: 请求之前处理配置
   */
  beforeRequestHook?: (config: AxiosRequestConfig, options: RequestOptions) => AxiosRequestConfig;

  /**
   * @description: 请求成功处理
   */
  transformRequestData?: (res: AxiosResponse<Result>, options: RequestOptions) => any;

  /**
   * @description: 请求失败处理
   */
  requestCatch?: (e: Error) => Promise<any>;

  /**
   * @description: 请求之前的拦截器
   */
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;

  /**
   * @description: 请求之后的拦截器
   */
  responseInterceptors?: (res: AxiosResponse<any>) => AxiosResponse<any>;

  /**
   * @description: 请求之前的拦截器错误处理
   */
  requestInterceptorsCatch?: (error: Error) => void;

  /**
   * @description: 请求之后的拦截器错误处理
   */
  responseInterceptorsCatch?: (error: Error) => void;
}


```

copy

The project default transform processing logic can be processed according to the respective project. The part that generally needs to be changed is the code below, see the code comment description

```
/**
 * @description: 数据处理，方便区分多种处理方式
 */
const transform: AxiosTransform = {
  /**
   * @description: 处理请求数据。如果数据不是预期格式，可直接抛出错误
   */
  transformRequestHook: (res: AxiosResponse<Result>, options: RequestOptions) => {
    const { t } = useI18n();
    const { isTransformResponse, isReturnNativeResponse } = options;
    // 是否返回原生响应头 比如：需要获取响应头时使用该属性
    if (isReturnNativeResponse) {
      return res;
    }
    // 不进行任何处理，直接返回
    // 用于页面代码可能需要直接获取code，data，message这些信息时开启
    if (!isTransformResponse) {
      return res.data;
    }
    // 错误的时候返回

    const { data } = res;
    if (!data) {
      // return '[HTTP] Request has no return value';
      throw new Error(t('sys.api.apiRequestFailed'));
    }
    //  这里 code，result，message为 后台统一的字段，需要在 types.ts内修改为项目自己的接口返回格式
    const { code, result, message } = data;

    // 这里逻辑可以根据项目进行修改
    const hasSuccess = data && Reflect.has(data, 'code') && code === ResultEnum.SUCCESS;
    if (hasSuccess) {
      return result;
    }

    // 在此处根据自己项目的实际情况对不同的code执行不同的操作
    // 如果不希望中断当前请求，请return数据，否则直接抛出异常即可
    let timeoutMsg = '';
    switch (code) {
      case ResultEnum.TIMEOUT:
        timeoutMsg = t('sys.api.timeoutMessage');
      default:
        if (message) {
          timeoutMsg = message;
        }
    }

    // errorMessageMode=‘modal’的时候会显示modal错误弹窗，而不是消息提示，用于一些比较重要的错误
    // errorMessageMode='none' 一般是调用时明确表示不希望自动弹出错误提示
    if (options.errorMessageMode === 'modal') {
      createErrorModal({ title: t('sys.api.errorTip'), content: timeoutMsg });
    } else if (options.errorMessageMode === 'message') {
      createMessage.error(timeoutMsg);
    }

    throw new Error(timeoutMsg || t('sys.api.apiRequestFailed'));
  },

  // 请求之前处理config
  beforeRequestHook: (config, options) => {
    const { apiUrl, joinPrefix, joinParamsToUrl, formatDate, joinTime = true } = options;

    if (joinPrefix) {
      config.url = `${urlPrefix}${config.url}`;
    }

    if (apiUrl && isString(apiUrl)) {
      config.url = `${apiUrl}${config.url}`;
    }
    const params = config.params || {};
    if (config.method?.toUpperCase() === RequestEnum.GET) {
      if (!isString(params)) {
        // 给 get 请求加上时间戳参数，避免从缓存中拿数据。
        config.params = Object.assign(params || {}, joinTimestamp(joinTime, false));
      } else {
        // 兼容restful风格
        config.url = config.url + params + `${joinTimestamp(joinTime, true)}`;
        config.params = undefined;
      }
    } else {
      if (!isString(params)) {
        formatDate && formatRequestDate(params);
        config.data = params;
        config.params = undefined;
        if (joinParamsToUrl) {
          config.url = setObjToUrlParams(config.url as string, config.data);
        }
      } else {
        // 兼容restful风格
        config.url = config.url + params;
        config.params = undefined;
      }
    }
    return config;
  },

  /**
   * @description: 请求拦截器处理
   */
  requestInterceptors: (config, options) => {
    // 请求之前处理config
    const token = getToken();
    if (token) {
      // jwt token
      config.headers.Authorization = options.authenticationScheme
        ? `${options.authenticationScheme} ${token}`
        : token;
    }
    return config;
  },

  /**
   * @description: 响应拦截器处理
   */
  responseInterceptors: (res: AxiosResponse<any>) => {
    return res;
  },

  /**
   * @description: 响应错误处理
   */
  responseInterceptorsCatch: (error: any) => {
    const { t } = useI18n();
    const errorLogStore = useErrorLogStoreWithOut();
    errorLogStore.addAjaxErrorInfo(error);
    const { response, code, message, config } = error || {};
    const errorMessageMode = config?.requestOptions?.errorMessageMode || 'none';
    const msg: string = response?.data?.error?.message ?? '';
    const err: string = error?.toString?.() ?? '';
    let errMessage = '';

    try {
      if (code === 'ECONNABORTED' && message.indexOf('timeout') !== -1) {
        errMessage = t('sys.api.apiTimeoutMessage');
      }
      if (err?.includes('Network Error')) {
        errMessage = t('sys.api.networkExceptionMsg');
      }

      if (errMessage) {
        if (errorMessageMode === 'modal') {
          createErrorModal({ title: t('sys.api.errorTip'), content: errMessage });
        } else if (errorMessageMode === 'message') {
          createMessage.error(errMessage);
        }
        return Promise.reject(error);
      }
    } catch (error) {
      throw new Error(error);
    }

    checkStatus(error?.response?.status, msg, errorMessageMode);
    return Promise.reject(error);
  },
};
```

copy

### Changing parameter format

The project interface defaults to the Json parameter format, that is `headers: { 'Content-Type': ContentTypeEnum.JSON }`,

If you need to change to the format, just `form-data`change the headers `'Content-Type`to`ContentTypeEnum.FORM_URLENCODED`

### Multiple interface addresses

When multiple interface addresses are needed in the project, you can export multiple axios instances in [src/utils/http/axios/index.ts](https://github.com/vbenjs/vue-vben-admin/tree/main/src/utils/http/axios/index.ts)

```
// 目前只导出一个默认实例，接口地址对应的是环境变量中的 VITE_GLOB_API_URL 接口地址
export const defHttp = createAxios();

// 需要有其他接口地址的可以在后面添加

// other api url
export const otherHttp = createAxios({
  requestOptions: {
    apiUrl: 'xxx',
  },
});
```

copy

### Delete the timestamp parameter carried in the request URL

If you do not need the default timestamp parameter on the URL`?_t=xxx`

```
const axios = new VAxios({
  requestOptions: {
    // 是否加入时间戳
    joinTime: false,
  },
});
```

copy

## Mock Service

Mock data is an essential part of the front-end development process and a key link in separating front-end and back-end development. By simulating request data and even logic through pre-agreed interfaces with the server, front-end development can be independent and will not be blocked by the server's development process.

This project uses [vite-plugin-mock](https://github.com/vbenjs/vite-plugin-mock) to perform mock data processing. **The mock services in the project are divided into local and online** .

### Local Mock

The local mock uses Node.js middleware to intercept parameters (the reason for not using mock.js is that local development cannot see request parameters and response results).

#### How to add a mock interface

If you want to add mock data, just find the mock file in the root directory, add the corresponding interface, intercept it and simulate the data.

Create a new file in the mock folder

::: tip

The file will be automatically updated after it is added, without manual restart. You can view the log information in the code console. The mock folder will be automatically registered, excluding folders and files starting with \_

:::

example:

```
import { MockMethod } from 'vite-plugin-mock';
import { resultPageSuccess } from '../_util';

const demoList = (() => {
  const result: any[] = [];
  for (let index = 0; index < 60; index++) {
    result.push({
      id: `${index}`,
      beginTime: '@datetime',
      endTime: '@datetime',
      address: '@city()',
      name: '@cname()',
      'no|100000-10000000': 100000,
      'status|1': ['正常', '启用', '停用'],
    });
  }
  return result;
})();

export default [
  {
    url: '/api/table/getDemoList',
    timeout: 1000,
    method: 'get',
    response: ({ query }) => {
      const { page = 1, pageSize = 20 } = query;
      return resultPageSuccess(page, pageSize, demoList);
    },
  },
] as MockMethod[];
```

copy

::: tip

The value of mock can directly use the syntax of [mockjs](https://github.com/nuysoft/Mock/wiki) .

:::

#### Interface format

```
{
  url: string; // mock 接口地址
  method?: MethodType; // 请求方式
  timeout?: number; // 延时时间
  statusCode: number; // 响应状态码
  response: ((opt: { // 响应结果
      body: any;
      query: any;
  }) => any) | object;
}
```

copy

#### Parameter acquisition

**GET interface:** `({ query }) => { }`

**POST interface:** `({ body }) => { }`

#### util Description

You can see it in [the code](https://github.com/vbenjs/vue-vben-admin/tree/main/mock/_util.ts)

::: tip

util is only used as service processing result data. It is not necessary. If you need to use it, you can encapsulate it yourself and change the corresponding fields to the return structure of the interface.

:::

#### match

In `src/api`the following, if the interface matches the mock, the mock will be used first to respond.

```
import { defHttp } from '/@/utils/http/axios';
import { LoginParams, LoginResultModel } from './model/userModel';

enum Api {
  Login = '/login',
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams) {
  return defHttp.request<LoginResultModel>(
    {
      url: Api.Login,
      method: 'POST',
      params,
    },
    {
      errorMessageMode: 'modal',
    }
  );
}
// 会匹配到上方的
export default [
  {
    url: '/api/login',
    timeout: 1000,
    method: 'POST',
    response: ({ body }) => {
      return resultPageSuccess({});
    },
  },
] as MockMethod[];
```

copy

#### Now that we have an interface, how do we remove the mock?

When the backend interface has been developed, you only need to remove the corresponding mock function.

Taking the above interface as an example, if the backend interface login has been developed, you only need to delete/comment out the following code

```
export default [
  {
    url: '/api/login',
    timeout: 1000,
    method: 'POST',
    response: ({ body }) => {
      return resultPageSuccess({});
    },
  },
] as MockMethod[];
```

copy

### Online mock

Since this project is a demonstration project, mock data is also used online, so mocks are also integrated after packaging. Usually, the online project is generally a formal interface.

The online mock of the project uses [mockjs](https://github.com/nuysoft/Mock/wiki) to simulate mock data.

#### How to start mock online

::: warning

Enabling mock online is only suitable for some simple sample websites and preview websites. **Do not enable it in a formal production environment!!!**

:::

1.  `VITE_USE_MOCK`Modify the value of true in the .env.production file

```
VITE_USE_MOCK = true;
```

copy

2.  Introduce the required mock files in the mock [/\_createProductionServer.ts file](https://github.com/vbenjs/vue-vben-admin/tree/main/mock/_createProductionServer.ts)

```
import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';

const modules = import.meta.globEager('./**/*.ts');

const mockModules: any[] = [];
Object.keys(modules).forEach((key) => {
  if (key.includes('/_')) {
    return;
  }
  mockModules.push(...modules[key].default);
});

export function setupProdMockServer() {
  createProdMockServer(mockModules);
}
```

copy

3.  Introduce in build [/vite/plugin/mock.ts](https://github.com/vbenjs/vue-vben-admin/tree/main/build/vite/plugin/mock.ts)

```
import { viteMockServe } from 'vite-plugin-mock';

export function configMockPlugin(isBuild: boolean) {
  return viteMockServe({
    injectCode: `
      import { setupProdMockServer } from '../mock/_createProductionServer';

      setupProdMockServer();
      `,
  });
}
```

copy

::: tip Why inject code through plugins instead of directly inserting it in main.ts

By inserting code in the plugin `injectCode`, it is convenient to control whether mockjs is packaged into the final code. If you judge in main.ts, if the mock function is turned off, mockjs will also be packaged into the build file, which will increase the package size.

:::

At this point, the online mock configuration is complete. There is little difference between online and local. The biggest difference is that you cannot see the interface request log in the online console.
