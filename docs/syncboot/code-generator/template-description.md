---
order: 5
---

# Template Description

## Vue3 supports two styles of code generation

- `vue3封装表单`Vue3 version vben style packaging writing vue3

- `vue3原生表单` Vue3 version of the native writing is not packaged vue3Native

```
vue3和vue3Native主要区别为：
`vue3`表单数据和查询数据均在`*.data.ts页面`，均以json的格式进行填写，
而`vue3Native`以`Ant Design Vue`原生写法实现，更加灵活
```

copy

Template see screenshot  
![](https://lfs.k.topthink.com/lfs/bd8b5fbbc4f3b86ba3878ae8c42f071605145858bdb079b60ca367cc8166c93a.dat)

## The difference between template vue3 and vue3Native

This chapter introduces the difference between front-end templates `vue`and`vue3Native`

Currently Vue3 supports vue3 and vue3Native through Online code generation.  
SyncBoot provides two styles of vue3 code generation, namely Vue3 native and Vue3 (encapsulated)  
![](https://lfs.k.topthink.com/lfs/2662b1550d59c002760ef5c7128575e1a0f663f13311f17514a640aad0242f83.dat)

## Directory Structure

### vue3 packaging form

- `*list.vue`Such as (TestCustomerList.vue): vue list page
- `*.data.list`For example (TestCustomer.data.ts): The data page contains column rendering data, query area rendering data, and form rendering data, which `json`are configured in the following way
- `*.api.ts`Such as (TestCustomer.api.ts): interface page
- `*.sql`Such as (TestCustomer_menu_insert.sql): executable menu upgrade sql
- `*Modal.vue`For example (TestCustomerModal.vue): Form pop-up rendering page  
  ![](https://lfs.k.topthink.com/lfs/87b4b63a538f728e9402987004d8adb422e2f595204e468c0f954b50efd1fad3.dat)

### vue3 native form

- `*list.vue`Such as (TestCustomerList.vue): vue list page
- `*.api.ts`Such as (TestCustomer.api.ts): interface page
- `*.sql`Such as (TestCustomer_menu_insert.sql): executable menu upgrade sql
- `*Modal.vue`For example (TestCustomerModal.vue): pop-up page
- `*Form.vue`Such as (TestCustomerForm.vue): form rendering page  
  ![](https://lfs.k.topthink.com/lfs/797d12597118b832275c9092276c14742786491d67fd2b4b821bc53f3e3c6f2e.dat)

## The essential difference between vue and vue3Native

> The main difference between vue3 and vue3Native is that `vue3`both form data and query data `*.data.ts页面`are filled in json format, while `vue3Native`native `Ant Design Vue`writing is more flexible. Let's take a look at it together.

> The data rendering pages of vue3 are all written on `*.data.ts`the page, such as

> Query area

- data

![](https://lfs.k.topthink.com/lfs/0f969f02781fa3d832809e3b78817db41dd36ec868f21ac635498ccbde76856d.dat)

- page

![](https://lfs.k.topthink.com/lfs/f2c4a8390b45d73e7f57fad9bfd04e4c52c3a6e18c469c8a7ca6b666ca441559.dat)

> Form area: all written on `*Modal.vue`the page

- data

![](https://lfs.k.topthink.com/lfs/d33e3edf82650c0e7529ff240e031b020181d3dd6a3a929b4777749e76e17e80.dat)

- page

![](https://lfs.k.topthink.com/lfs/d88479d7aeddf08db657b51b3e17e2d330f5d28cd785d030bc56eed31887e277.dat)

> Data rendering of vue3Native

> The query area is written at `*List.vue`the beginning of

![](https://lfs.k.topthink.com/lfs/90ef45d653f95e1806e56ebef7e14a78b0bb27f7920e9685bcec42fa3cec4132.dat)

> Form area: separate `modal`layers `From`for easier maintenance and more flexibility

- `modal`Pop-up layer

![](https://lfs.k.topthink.com/lfs/b4e620f35fce81b8be6391be3b0db3df500e5899095264faa14477389603703f.dat)

- `Form`Data rendering layer

![](https://lfs.k.topthink.com/lfs/a157e4e6930a2c7dd4caf6c07d22c6d7da983e7495af4e14473655e13d5006c0.dat)

### Prepared table to be generated

![](https://lfs.k.topthink.com/lfs/fcd1e15659715c2d07764d70dcd103e3bd400efaed92e8fe319e4503866ff2ad.dat)
