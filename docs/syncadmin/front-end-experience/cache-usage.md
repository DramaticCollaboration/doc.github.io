---
order: 4
---

# Cache Usage

Store temporary cache

> Features: need to be defined, with initial value, responsive, global use, refresh reset  
> Pinia official documentation [https://pinia.vuejs.org](https://pinia.vuejs.org)

### Create a store cache

Sample Code

```
import {defineStore} from 'pinia'
import {store} from '/@/store'

export const useMyStore = defineStore({
  // 定义缓存id
  id: 'my-store',
  // 在这里写当前缓存里储存的变量
  state() {
    return {
      msg: 'hello world!!',
    }
  },
  // 定义当前缓存公开的 getters，相当于vue的计算属性
  getters: {
    getMsg(): string {
      return this.msg
    },
  },
  // 定义当前缓存公开的方法，可以直接调用并传参
  actions: {
    setMsg(msg: string) {
      this.msg = msg
    },
  },
})

// 在vue3的setup方法之外使用时，需要调用此方法
export function useUseMyStoreWithOut() {
  return useMyStore(store)
}
```

copy

### Using store cache

Sample Code

```
<template>
  {{ myStore.getMsg }}
</template>

<script lang="ts">
import {useMyStore} from '/@/store/modules/myStore'

export default {
  name: '',
  setup() {
    const myStore = useMyStore()
    console.log(myStore.getMsg)

    return {
      myStore,
    }
  },
}
</script>
```

copy

## LocalStorage long-term cache

> Features: no definition required, no initial value, non-responsive, global use, refresh without reset, multi-page universal, expiration time can be set

### Call Cache

The following is a sample code for calling LocalStorage

```
<template>
  {{ myStoreKey }}
</template>

<script lang="ts">
import {createLocalStorage} from '/@/utils/cache'

export default {
  name: '',
  setup() {
    const ls = createLocalStorage()
    let myStoreKey = ls.get('myStoreKey')
    console.log(myStoreKey)

    function set(value) {
      ls.set('myStoreKey', value)
    }

    return {
      myStoreKey,
      set,
    }
  },
}
</script>
```

copy
