---
order: 9
---

# Custom chart components

## Bar Chart

![](https://lfs.k.topthink.com/lfs/fb10ba89638d862267b0c13c4fc77008b7cd58aa2e580302b83988959e7bda6f.dat)

##### Citation

```
import Bar from '/@/components/chart/Bar.vue';
```

copy

##### parameter list

| parameter name | type   | Required | illustrate                     |
| -------------- | ------ | -------- | ------------------------------ |
| chartData      | array  | ✔️       | Chart data source              |
| option         | object |          | Configuration items for charts |
| width          | string |          | Chart Width                    |
| height         | string |          | Chart Height                   |

##### chartData Example

```
[
    {
        "name": "1月",
        "value": 320
    },
    {
        "name": "2月",
        "value": 457
    },
    {
        "name": "3月",
        "value": 182
    }
]
```

copy

##### Code Sample

```
<template>
     <Bar :chartData="chartData"></Bar>
</template>

<script lang="ts" setup>
    import Bar from '/@/components/chart/Bar.vue';
    const chartData = [
         {
             "name": "1月",
             "value": 320
         },
         {
             "name": "2月",
             "value": 457
         },
         {
             "name": "3月",
             "value": 182
         }
     ]
</script>

<style></style>
```

copy

## Multi-column bar chart

![](https://lfs.k.topthink.com/lfs/fdc126e252a71f5bd9cfea9fb55a6ac1bbeef1d4bd913b53a475914617929cbb.dat)

##### Citation

```
import BarMulti from '/@/components/chart/BarMulti.vue';
```

copy

##### parameter list

| parameter name | type   | Required | illustrate                     |
| -------------- | ------ | -------- | ------------------------------ |
| chartData      | array  | ✔️       | Chart data source              |
| option         | object |          | Configuration items for charts |
| width          | string |          | Chart Width                    |
| height         | string |          | Chart Height                   |

##### chartData Example

```
[
     {
         "name": "1月",
         "value": 320,
         "type": "2021"
     },
     {
         "name": "2月",
         "value": 457,
         "type": "2021"
     },
     {
         "name": "3月",
         "value": 182,
         "type": "2021"
     },
     {
          "name": "1月",
          "value": 240,
          "type": "2022"
      },
      {
          "name": "2月",
          "value": 357,
          "type": "2022"
      },
      {
          "name": "3月",
          "value": 456,
          "type": "2022"
      }
 ]
```

copy

## Mini Bar Chart

Same as column chart, just modify the configuration

## Area chart

![](https://lfs.k.topthink.com/lfs/8931527e74d00e51b7ffe24a7975cd88b4aa3a71c537005b93a02783ae4b37ac.dat)

##### Citation

```
import Line from '/@/components/chart/Line.vue';
```

copy

##### parameter list

| parameter name | type   | Required | illustrate                     |
| -------------- | ------ | -------- | ------------------------------ |
| chartData      | array  | ✔️       | Chart data source              |
| option         | object |          | Configuration items for charts |
| width          | string |          | Chart Width                    |
| height         | string |          | Chart Height                   |

##### chartData Example

```
[
    {
     "name": "1月",
     "value": 320
     },
    {
     "name": "2月",
     "value": 457
    },
    {
     "name": "3月",
     "value": 182
    }
]
```

copy

## Multi-line line chart

![](https://lfs.k.topthink.com/lfs/489dc83de838fbe2c4b70b0ecfdee83a747aa5bb570742d9f405117f4ddd23d6.dat)

##### Citation

```
import LineMulti from '/@/components/chart/LineMulti.vue';
```

copy

##### parameter list

| parameter name | type   | Required | illustrate                     |
| -------------- | ------ | -------- | ------------------------------ |
| chartData      | array  | ✔️       | Chart data source              |
| option         | object |          | Configuration items for charts |
| width          | string |          | Chart Width                    |
| height         | string |          | Chart Height                   |

##### chartData Example

Same column chart

## pie chart

![](https://lfs.k.topthink.com/lfs/b14cd91673104d1491f121ee95b864c1f121073a950d144392599860c0754f1c.dat)

##### Citation

```
import Pie from '/@/components/chart/Pie'
```

copy

##### parameter list

| parameter name | type   | Required | illustrate                     |
| -------------- | ------ | -------- | ------------------------------ |
| chartData      | array  | ✔️       | Chart data source              |
| option         | object |          | Configuration items for charts |
| width          | string |          | Chart Width                    |
| height         | string |          | Chart Height                   |

##### chartData Example

```
[
    { "name": "一月", "value": 40 },
    { "name": "二月", "value": 21 },
    { "name": "三月", "value": 17 },
    { "name": "四月", "value": 13 },
    { "name": "五月", "value": 9 }
]
```

copy

## Radar chart

![](https://lfs.k.topthink.com/lfs/c3d98e9be83fd9621f3cc89d19e9d18b435c6d7048b61079a777d821be7fced7.dat)

##### Citation

```
import Radar from '/@/components/chart/Radar'
```

copy

##### parameter list

| parameter name | type   | Required | illustrate          |
| -------------- | ------ | -------- | ------------------- |
| chartData      | array  | ✔️       | Chart data source   |
| width          | number |          | Chart Width         |
| height         | number |          | Chart Height        |
| option         | object |          | Configuration items |

##### chartData Example

```
[
{ value: 75, name: '政治',type:'文综',max:100 },
{ value: 65, name: '历史',type:'文综',max:100 },
{ value: 55, name: '地理',type:'文综',max:100 },
{ value: 74, name: '化学',type:'文综',max:100 },
{ value: 38, name: '物理',type:'文综',max:100 },
{ value: 88, name: '生物',type:'文综',max:100 },
]
```

copy

## dash board

![](https://lfs.k.topthink.com/lfs/869edcb74196b578f565dc43689019a83a8454a01c98127823ff827a577c345e.dat)

##### Citation

```
import Gauge from '/@/components/chart/Gauge'
```

copy

##### parameter list

| parameter name | type   | Required | illustrate                     |
| -------------- | ------ | -------- | ------------------------------ |
| chartData      | array  | ✔️       | Chart data source              |
| option         | object |          | Configuration items for charts |
| width          | string |          | Chart Width                    |
| height         | string |          | Chart Height                   |

##### chartData Example

```
{
name:'出勤率',
value:70
}
```

copy

## Ranking List

![](https://lfs.k.topthink.com/lfs/da9636a03894f4cf3956b0e68bbe6212e5496d9e4acce0b333af2fb2eda0ab7d.dat)

##### Citation

```
import RankList from '@/components/chart/RankList'
```

copy

##### parameter list

| parameter name | type   | Required | illustrate                            |
| -------------- | ------ | -------- | ------------------------------------- |
| title          | string |          | Chart title                           |
| list           | array  |          | Ranking list data                     |
| height         | number |          | Chart height, default adaptive height |

##### list example

```
[
    { "name": "北京朝阳 1 号店", "total": 1981 },
    { "name": "北京朝阳 2 号店", "total": 1359 },
    { "name": "北京朝阳 3 号店", "total": 1354 },
    { "name": "北京朝阳 4 号店", "total": 263 },
    { "name": "北京朝阳 5 号店", "total": 446 },
    { "name": "北京朝阳 6 号店", "total": 796 }
]
```

copy
