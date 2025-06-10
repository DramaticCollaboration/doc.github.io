---
order: 8
---

# How to make a table fill the screen

> The table fills the screen: the table changes with the height of the page, and fills the entire page when there is no data or little data.

## Show results

- When there is no data

![](https://lfs.k.topthink.com/lfs/60c7bd40914ca0c04601ace91747c12dc1382dfeeb2a85f6224e1155454aa8f5.dat)

- When there is data

![](https://lfs.k.topthink.com/lfs/c530f405fb1f3e210df64a872b8f6785332b50a2d153c6a6da6dd4c6df31319c.dat)

## Reference Code

```

//注册table数据
const { tableContext } = useListPage({
  tableProps: {
    api: list,
    columns,
    canResize: false,
    useSearchForm: false,
    actionColumn: {
      width: 120,
      fixed: 'right',
    },
  },
});

const [registerTable, { getDataSource }] = tableContext;

/**
 * 监听窗口变化
 */
function eventResize() {
  window.addEventListener('resize', setHeight);
}

/**
 * 设置高度
 */
function setHeight() {
  //因为页面初始化需要时间，所以需要延迟加载
  setTimeout(() => {
    // 获取当前窗口高度
    let windowHeight = window.innerHeight;
    let dataSource = getDataSource();
    //判断有没有数据
    if(!dataSource || dataSource.length == 0) {
      let tableContent = document.querySelector('.ant-table-content');
      if(tableContent){
        tableContent['style'].height = 'unset';
      }
      let tBody = document.querySelector('.ant-table-tbody');
      if (tBody) {
        //动态设置高度
        tBody['style'].height = windowHeight - 260 + 'px';
      }
    //如果不需要有数据时动态修改高度，直接将else删掉即可
    }else{
      let tableContent = document.querySelector('.ant-table-content');
      if (tableContent) {
        //动态设置高度
        tableContent['style'].height = windowHeight - 260 + 'px';
        tableContent['style'].overflow = 'auto';
      }
    }
  }, 500);
}

onMounted(() => {
  eventResize();
  //第一次没有走监听，需要设置一下高度
  setHeight();
});

//页面销毁之前删除监听
onUnmounted(() => {
  window.removeEventListener('resize', setHeight);
});
```

copy

> Note: Because `resize`the monitoring is triggered only when the window height changes, it will not be triggered when the table is added or deleted. You need to trigger `setHeight`the method manually.

![](https://lfs.k.topthink.com/lfs/43fcbf63f0763d3d4a044d354e7dda5234a7e764dce48beab43c34bc2fd2050e.dat)

- When we set the height manually, we need to `canResize(自适应高度)`set it to false, otherwise it will not take effect

![](https://lfs.k.topthink.com/lfs/85b538deb90c7a566cbbd224a60828e37c0297bdf7bc69071fbe0e25bfcd280c.dat)
