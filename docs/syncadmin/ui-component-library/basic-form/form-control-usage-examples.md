---
order: 2
---

# Form Control Usage Examples

> The form has many built-in components, including text boxes, drop-down boxes, multiple-select boxes, radio buttons, etc., and supports custom extensions

## Ant Design Vue comes with controls

### 1\. Input box

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/306af7f5e8e256f627650b8a3e3b5107c5f09e9ce51b11b92b5ebac565468383.dat)

```
const schemas: FormSchema[] = [
  {
    label: '文本框',
    field: 'name',
    component:'Input',
    //属性
    componentProps:{
      //前缀
      prefix:'中文',
      //是否显示字数
      showCount: true
    }
  },
]
```

copy

[Enter more properties](https://www.antdv.com/components/input-cn/#api)

### 2\. InputPassword password input box

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/860c811a4e128787b73106d2cdb99e454f45df81b497d079821d0f528c5881ef.dat)

```
const schemas: FormSchema[] = [
  {
    label: '密码',
    field: 'password',
    component:'InputPassword',
    //属性
    componentProps:{
      //是否显示切换按钮或者控制密码显隐
      visibilityToggle: true
    }
  },
]

```

copy

Except for controlling the password visibility, the rest is the same as [the Input property](https://www.antdv.com/components/input-cn/#api)

### 3\. InputTextArea text field

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/8a80f80510c8561b9da36eab19ef21037d7bec96f6268157ea1e27a0cfa6a785.dat)

```
const schemas: FormSchema[] = [
    {
      label: '文本域',
      field: 'textArea',
      component:'InputTextArea',
      //属性
      componentProps:{
        //可以点击清除图标删除内容
        allowClear: true,
        //是否展示字数
        showCount: true,
        //自适应内容高度，可设置为 true | false 或对象：{ minRows: 2, maxRows: 6 }
        autoSize:{
          //最小显示行数
          minRows: 2,
          //最大显示行数
          maxRows: 3
        },
      }
    },
]
```

copy

[Textarea Attributes](https://www.antdv.com/components/input-cn/#textarea)

### 4\. InputNumber numeric input box

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/e50f54a0f0c93db0c261ed72038abb61f25f65d1855b76534bf364a3f42ad4c5.dat)

```
const schemas: FormSchema[] = [
    {
      label: '数值输入框',
      field: 'number',
      component:'InputNumber',
      componentProps:{
        //带标签的 input，设置后置标签
        addonBefore:'保留两位小数',
        //最大值
        max:100,
        //数值精度
        precision:2,
        //步数
        step: 0.1
      }
    },
]
```

copy

[More properties of inputNumber](https://www.antdv.com/components/input-number-cn/#api)

### 5\. Select drop-down box

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/be84cdbbd575b8a98c0bb2585d6cf95f973b4617eb17f02dd801aa2fa1d518f8.dat)

```
const schemas: FormSchema[] = [
    {
      label: '下拉框',
      field: 'jinputtype',
      component: 'Select',
      componentProps: {
        options: [
          { value: 'like', label: '模糊（like）' },
          { value: 'ne', label: '不等于（ne）' },
          { value: 'ge', label: '大于等于（ge）' },
          { value: 'le', label: '小于等于（le)' },
        ],
        //下拉多选
        mode:'multiple',
        //配置是否可搜索
        showSearch: true
      },
    },
]
```

copy

[Select more properties](https://www.antdv.com/components/select-cn/#api)

### 6.TreeSelect tree drop-down selection

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/2f3d37cd40013a730d95e2d04ab04306a082559533e87abd5f7b2be82efd1819.dat)

```
const schemas: FormSchema[] = [
    {
      field: 'TreeSelect',
      label: '下拉树',
      component: 'TreeSelect',
      componentProps: {
        //是否显示下拉框，默认false
        treeCheckable: true,
        //标题
        title:'下拉树',
        //下拉树
        treeData:[
          {
            label: '洗衣机',
            value: '0',
            children: [
              {
                label: '滚筒洗衣机',
                value: '0-1',
              },
            ],
          },
          {
            label: '电视机',
            value: '1',
            children: [
              {
                label: '平板电视',
                value: '1-1',
                disabled: true,
              },
              {
                label: 'CRT电视机',
                value: '1-2',
              },
              {
                label: '投影电视',
                value: '1-3',
              },
            ],
          },
        ]
      },
    },
]
```

copy

[TreeSelect More Properties](https://www.antdv.com/components/tree-select-cn/#api)

### 7\. RadioGroup

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/11d4e176de55659ea92ba094e2616b0f05ee3d86ef1f2aab51233c62b1ab97e3.dat)

```
const schemas: FormSchema[] = [
    {
      label: '单选框',
      field: 'radioSex',
      component: 'RadioGroup',
      componentProps: {
        //options里面由一个一个的radio组成,支持disabled
        options: [
          { label: '男', value: 1 },
          { label: '女', value: 0 },
        ],
      },
    }
]
```

copy

[RadioGroup More Properties](https://www.antdv.com/components/radio-cn/#radiogroup)

### 8\. Checkbox

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/2d9f0bc40546e312b2408b562e9f148fb2ea0332bc77e1e7a434b1e1097b2139.dat)

```
const schemas: FormSchema[] = [
    {
      label: '多选框',
      field: 'checkSex',
      component: 'Checkbox',
      componentProps: {
        //是否禁用,默认false
        disabled: false,
      },
    },
]
```

copy

### 9\. CheckboxGroup

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/6234f505bd2b62436e1c7b13a6a1c49665fbf9dbba7839a79f7c2d2d91ab7caa.dat)

```
const schemas: FormSchema[] = [
    {
      label: '多选框组',
      field: 'checkSex',
      component: 'CheckboxGroup',
      componentProps: {
        //RadioGroup 下所有 input[type="radio"] 的 name 属性
        name:'爱好',
        //options支持disabled禁用
        options: [
          { label: '运动', value: 0, disabled: true },
          { label: '听音乐', value: 1 },
          { label: '看书', value: 2 },
        ],
      },
      defaultValue:[2]
    }
]
```

copy

### 10\. Cascader selection

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/51b2151162a80d1f42e24afe496298331cbfa298b03e62079732a5b0aaaf99ca.dat)

```
const schemas: FormSchema[] = [
    {
      label: '级联选择',
      field: 'cascade',
      component: 'Cascader',
      componentProps: {
        //最多显示多少个tag
        maxTagCount:2,
        //浮层预设位置
        placement: 'bottomRight',
        //在选择框中显示搜索框,默认false
        showSearch: true,
        options: [
          {
            label: '北京',
            value: 'BeiJin',
            children: [
              {
                label: '海淀区',
                value: 'HaiDian',
              },
            ],
          },
          {
            label: '江苏省',
            value: 'JiangSu',
            children: [
              {
                label: '南京',
                value: 'Nanjing',
                children: [
                  {
                    label: '中华门',
                    value: 'ZhongHuaMen',
                  },
                ],
              },
            ],
          },
        ],
      },
    },
]
```

copy

[Cascader More Properties](https://www.antdv.com/components/cascader-cn/#api)

### 11\. DatePicker date selection box

Page Effects

Code Sample

> Not available today

![](https://lfs.k.topthink.com/lfs/c74e7da78c87bfa1615ccb2ce73e11c1125a5589eaa0941748f86415181856fa.dat)

```
import dayjs from "dayjs";

const schemas: FormSchema[] = [
    {
      label: '日期选择',
      field: 'dateSelect',
      component: 'DatePicker',
      componentProps: {
        //日期格式化，页面上显示的值
        format:'YYYY-MM-DD',
        //返回值格式化（绑定值的格式）
        valueFormat:'YYYY-MM-DD',
        //是否显示今天按钮
        showToday:true,
        //不可选择日期
        disabledDate:(currentDate)=>{
          let date = dayjs(currentDate).format('YYYY-MM-DD');
          let nowDate =  dayjs(new Date()).format('YYYY-MM-DD');
          //当天不可选择
          if(date == nowDate){
            return true;
          }
          return false;
        }
      },
    },
]
```

copy

[DatePicker More Properties](https://www.antdv.com/components/date-picker-cn/#api)

### 12\. MonthPicker month selection

Page Effects

Code Sample

> The current month does not allow selection

![](https://lfs.k.topthink.com/lfs/58c14c59140c95b803efb4ad292ca4e4198c0aec91082f5086cce7044a26311d.dat)

```
import dayjs from "dayjs";

const schemas: FormSchema[] = [
    {
      label: '月份选择',
      field: 'monthSelect',
      component: 'MonthPicker',
      componentProps: {
        //不可选择日期
        disabledDate:(currentDate)=>{
          let date = dayjs(currentDate).format('YYYY-MM');
          let nowDate =  dayjs(new Date()).format('YYYY-MM');
          //当天不可选择
          if(date == nowDate){
            return true;
          }
          return false;
        }
      },
    },
]
```

copy

`MonthPicker`The default date format is `YYYY-MM`, and it also supports [DatePicker properties](https://www.antdv.com/components/date-picker-cn#api)

### 13\. WeekPicker week selection

Page Effects

Code Sample

You can only select the week number of the current month, from Monday to Sunday

![](https://lfs.k.topthink.com/lfs/2a44967d8713ff12455e2b49e0d55bd7568fe909a38a2c55b68a3a358771b435.dat)

```
const schemas: FormSchema[] = [
    {
      label: '周选择',
      field: 'monthSelect',
      component: 'weekSelect',
      componentProps: {
        size:'small',
      },
    },
]
```

copy

[Support DatePicker properties](https://www.antdv.com/components/date-picker-cn/#api)

### 14\. TimePicker time selection

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/3596f05a5d03f88607011d9ac732f6aa571662deda937fe3635cf721d6633d14.dat)

```
const schemas: FormSchema[] = [
    {
      label: '时间选择',
      field: 'timeSelect',
      component: 'TimePicker',
      componentProps: {
        size:'default',
        //日期时间或者时间模式下是否显示此刻，不支持日期时间范围和时间范围
        showNow: true
      },
    },
]
```

copy

[Support DatePicker properties](https://www.antdv.com/components/date-picker-cn/#api)

### 15\. RangePicker date and time range selection

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/f781e3287ca8ea28c590aeb38888532ec583016f0ebad02ed9cde126bbbb6b26.dat)

```
const schemas: FormSchema[] = [
    {
      label: '日期时间范围',
      field: 'dateTimeRangeSelect',
      component: 'RangePicker',
      componentProps: {
        //是否显示时间
        showTime: true,
        //日期格式化
        format:'YYYY/MM/DD HH:mm:ss',
        //范围文本描述用集合
        placeholder:['请选择开始日期时间','请选择结束日期时间']
      },
    },
]
```

copy

default value

```
defaultValue: [new Date("2024-03-21"), new Date("2024-03-27")],
```

copy

[Support DatePicker properties](https://www.antdv.com/components/date-picker-cn/#api)

### 16\. RangeDate date range selection

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/a3da5cd45c7beb0fd9e070915d44a5e4d2c916cf3fa6cc007e8a4c5dbd1cf223.dat)

```
const schemas: FormSchema[] = [
    {
      label: '日期范围',
      field: 'dateRangeSelect',
      component: 'RangeDate',
      componentProps: {
        //日期格式化
        format:'YYYY/MM/DD',
        //范围文本描述用集合
        placeholder:['请选择开始日期','请选择结束日期']
      },
    },
]
```

copy

[Support DatePicker properties](https://www.antdv.com/components/date-picker-cn/#api)

### 17\. RangeTime time range selection

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/8d3305ace88263acb0c826e0c14c5d7e1281244a5a43041c3da85cf09449c413.dat)

```
const schemas: FormSchema[] = [
    {
      label: '时间范围',
      field: 'timeRangeSelect',
      component: 'RangeTime',
      componentProps: {
        //日期格式化
        format:'HH/mm/ss',
        //范围文本描述用集合
        placeholder:['请选择开始时间','请选择结束时间'],
      },
    },
]
```

copy

[Support DatePicker properties](https://www.antdv.com/components/date-picker-cn/#api)

### 18\. Switch

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/3c580c5fc20993ffa89df1010962586f51d330fe830ebe62b095c3ca4e2dcd59.dat)

```
const schemas: FormSchema[] = [
    {
      label: '开关',
      field: 'switch',
      component: 'Switch',
      componentProps: {
        //开关大小，可选值：default small
        size:'default',
        //非选中时的内容
        unCheckedChildren:'开启',
        //非选中时的值
        unCheckedValue:'0',
        //选中时的内容
        checkedChildren:'关闭',
        //选中时的值
        checkedValue:'1',
        //是否禁用
        disabled: false
      },
    },
]
```

copy

### 19\. Slider sliding input bar

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/e239eb2a1e7be515eb7a85aaa8f94181c08306b9795f8793083df57a54e6b5e8.dat)

```
const schemas: FormSchema[] = [
    {
      label: '滑动输入条',
      field: 'slider',
      component: 'Slider',
      componentProps: {
        //最小值
        min:-20,
        //最大值
        max:100,
        //是否为双滑块模式
        range: true,
        //刻度标记
        marks:{
          '-20':'-20°C',
          0: '0°C',
          26: '26°C',
          37: '37°C',
          100: {
            style: {
              color: '#f50',
            },
            label: '100°C',
          },
        }
      },
    },
]
```

copy

[More Slider properties](https://www.antdv.com/components/slider-cn/#api)

### 20\. Rate

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/64dfe354408aebc05122f84b780e82d1e08d372cac0bc995eac99ad73f615d77.dat)

```
const schemas: FormSchema[] = [
    {
      label: '评分',
      field: 'rate',
      component: 'Rate',
      componentProps: {
        //是否允许半选
        allowHalf: true,
        //star 总数
        count: 5,
        //tooltip提示，有几颗星写几个
        tooltips:['非常差','较差','正常','很好','非很好']
      },
    },
]
```

copy

[RateMore properties](https://www.antdv.com/components/rate-cn/#api)

### 21\. Divider

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/8e610a87a71c565ec63c9d74b99289c9565e55ac2bd712abb462a7bd9b8c296d.dat)

```
const schemas: FormSchema[] = [
    {
      label: '分割线',
      field: 'divisionLine',
      component: 'Divider',
      componentProps: {
        //是否虚线
        dashed: false,
        //分割线标题的位置（left | right | center）
        orientation: 'center',
        //文字是否显示为普通正文样式
        plain:true,
        //水平还是垂直类型（horizontal | vertical）
        type:'horizontal',
      },
    },
]
```

copy

## SYNC packaged controls

### 1\. JDictSelectTag dictionary

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/4ed14f012819d066df27df4e617237f6c70eb9f16e0610e8e093aee7bd551424.dat)

```
const schemas: FormSchema[] = [
  {
    label: '字典标签',
    field: 'dictTags',
    component: 'JDictSelectTag',
    componentProps: {
      //字典code配置，比如通过性别字典编码：sex，也可以使用demo,name,id 表名,名称,值的方式
      dictCode:'sex',
      //支持radio(单选按钮)、radioButton(单选按钮 btn风格)、select(下拉框)
      type:'radioButton'
    },
  },
]
```

copy

[JDictSelectTag More properties](https://help.jeecg.com/component/JDictSelectTag.html#%E7%BB%84%E4%BB%B6%E5%8F%82%E6%95%B0)

### 2\. JSelectUser user selection

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/a49f916bf1d8c76e1ede0aabc13da32ec5c70c7fd2088e662a709a62d2fb9e0e.dat)

```
const schemas: FormSchema[] = [
  {
    label: '用户选择',
    field: 'user',
    component: 'JSelectUser',
    componentProps: {
      //取值字段配置,一般为主键字段
      rowKey: 'username',
      //显示字段配置
      labelKey: 'realname',
      //是否显示选择按钮
      showButton: false,
      //用户标题
      modalTitle: '用户',
    },
  },
]
```

copy

[JSelectUser More Properties](https://help.jeecg.com/component/JSelectUser.html#%E5%8F%82%E6%95%B0%E5%AE%9A%E4%B9%89)

### 3\. UserSelect

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/ef2e0c411398f3ec31023e150fd105f0a0c7e76cb5518f5d472c41ef189f43fd.dat)

```
const schemas: FormSchema[] = [
  {
    label: '用户选择组件',
    field: 'userCusSelect',
    component: 'UserSelect',
    componentProps: {
      //是否多选
      multi: true,
      //从用户表中选择一列，其值作为该控件的存储值，默认id列
      store: 'id',
      //是否排除我自己(当前登录用户)
      izExcludeMy: false,
      //是否禁用
      disabled: false,
    },
  },
]
```

copy

### 4\. JSelectUserByDept selects users based on departments

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/9df302dd3d3d9057dde1f5c215e2f8da28ec92bfb276a2593d5c9f6c4af3e861.dat)

```
const schemas: FormSchema[] = [
  {
    label: '根据部门选择用户组件',
    field: 'userByDept',
    component: 'JSelectUserByDept',
    componentProps: {
      //是否显示选择按钮
      showButton: true,
      //选择框标题
      modalTitle: '部门用户选择'
    },
  },
]
```

copy

[JSelectUserByDept More Properties](https://help.jeecg.com/component/JSelectUserByDept.html#%E5%8F%82%E6%95%B0%E5%AE%9A%E4%B9%89)

### 5\. JSelectDept selects the department

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/1039c949bd1b9b603b31591191ad0944e3cc527631cf31750a2f4948b2d6fb22.dat)

```
const schemas: FormSchema[] = [
  {
    label: '部门选择',
    field: 'dept',
    component: 'JSelectDept',
    componentProps: {
      //是否开启异步加载
      sync: false,
      //是否显示复选框
      checkable: true,
      //是否显示选择按钮
      showButton: false,
      //父子节点选中状态不再关联
      checkStrictly: true,
      //选择框标题
      modalTitle: '部门选择',
    },
  },
]
```

copy

[JSelectDept More Properties](https://help.jeecg.com/component/JSelectDept.html#%E5%8F%82%E6%95%B0%E5%AE%9A%E4%B9%89)

### 6\. JSelectRole role selection

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/a6f229c444d756070b02763040e1f276bab6da59db76636fa46b6dd11e1dd528.dat)

```
const schemas: FormSchema[] = [
  {
    label: '角色选择',
    field: 'role',
    component: 'JSelectRole',
    componentProps: {
      //请求参数 如params:{"code":"001"}
      params: {},
      //是否单选,默认false
      isRadioSelection: true,
      //角色标题
      modalTitle: '角色',
    },
  },
]
```

copy

[JSelectRole More Properties](https://help.jeecg.com/component/JSelectRole.html#%E5%8F%82%E6%95%B0%E5%AE%9A%E4%B9%89)

### 7\. RoleSelect

Page Effects

Code Sample

> Click the text box to pop up the role selection page

![](https://lfs.k.topthink.com/lfs/24c1194d3c64b2ae3026dd0b3cd74b8212f28df7de4677799b0af83d42e25bcc.dat)

```
const schemas: FormSchema[] = [
  {
    label: '选择角色组件',
    field: 'roleSelect',
    component: 'RoleSelect',
    componentProps: {
      //最大选择数量
      maxSelectCount: 3,
      //是否单选
      isRadioSelection: false
    },
  },
]
```

copy

[roleSelectMore properties](https://help.jeecg.com/component/JSelectRole.html#%E5%8F%82%E6%95%B0%E5%AE%9A%E4%B9%89)

### 8\. JSelectPosition position selection

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/61aebc34ca753abfed39290add55ea66d34cfac90d9e7b1887adf84d79fab1af.dat)

```
const schemas: FormSchema[] = [
  {
    label: '岗位选择',
    field: 'post',
    component: 'JSelectPosition',
    componentProps: {
      //是否右侧显示选中列表
      showSelected: true,
      //最大选择数量
      maxSelectCount: 1,
      //岗位标题
      modalTitle: '岗位',
    },
  },
]
```

copy

[JSelectPosition More Properties](https://help.jeecg.com/component/JSelectPosition.html#%E5%8F%82%E6%95%B0%E5%AE%9A%E4%B9%89)

### 9\. JImageUpload image upload

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/de7692371e851c370d3e62a854c347dcbf54b655bcec2a4d303b874179f8093f.dat)

```
const schemas: FormSchema[] = [
  {
    label: '图片上传',
    field: 'uploadImage',
    component: 'JImageUpload',
    componentProps: {
      //按钮显示文字
      text:'图片上传',
      //支持两种基本样式picture和picture-card
      listType:'picture-card',
      //用于控制文件上传的业务路径,默认temp
      bizPath:'temp',
      //是否禁用
      disabled:false,
      //最大上传数量
      fileMax:1,
    },
  },
]
```

copy

### 10\. JUpload upload component

Page Effects

Code Sample

> Upload up to two files

![](https://lfs.k.topthink.com/lfs/a103f4d8b4fbcb9d994f6ba4371feaeb60de57f8f324e2767876dd2d1d88eec7.dat)

```
const schemas: FormSchema[] = [
  {
    label: '文件上传',
    field: 'uploadFile',
    component: 'JUpload',
    componentProps: {
      //是否显示选择按钮
      text: '文件上传',
      //最大上传数
      maxCount: 2,
      //是否显示下载按钮
      download: true,
    },
  },
]
```

copy

[JUpload More Properties](https://help.jeecg.com/component/JUpload.html#%E7%BB%84%E4%BB%B6%E5%8F%82%E6%95%B0)

### 11\. RadioButtonGroup

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/d6f5bf91fb41de506d4644b337303f2ea6a6c876351dbd1b145cb5f60b8cdf1d.dat)

```
const schemas: FormSchema[] = [
    {
      label: 'RadioButtonGroup组件',
      field: 'status',
      component: 'RadioButtonGroup',
      componentProps: {
        options: [
          { label: '有效', value: 1 },
          { label: '无效', value: 0 },
        ],
      },
    }
]
```

copy

### 12\. ApiRadioGroup Remote Api Radio Box Group

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/644cb72aa670318a402f6555316ca8bbd5b8149c3e2ef6f2c790810e1ad93151.dat)

```
const schemas: FormSchema[] = [
  {
    label: '远程Api单选框组',
    field: 'apiRadioGroup',
    component: 'ApiRadioGroup',
    componentProps:{
      //请求接口返回结果{ result:{ list: [ name: '选项0',id: '1' ] }}
      api:()=> defHttp.get({ url: '/mock/select/getDemoOptions' }),
      //请求参数
      params:{},
      //是否为按钮风格类型，默认false
      isBtn: false,
      //返回集合名称
      resultField: 'list',
      //标题字段名称
      labelField: 'name',
      //值字段名称
      valueField: 'id',
    }
  },
]
```

copy

### 13\. JSelectMultiple drop-down multiple selection

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/accc461019128165dedaac9a7bd93e161f0067a7c86be373946a16c7594acb9a.dat)

```
const schemas: FormSchema[] = [
  {
    label: '下拉多选',
    field: 'selectMultiple',
    component: 'JSelectMultiple',
    componentProps: {
      //字典code配置，比如通过性别字典编码：sex，也可以使用demo,name,id 表名,名称,值的方式
      dictCode:'company_rank',
      //是否只读
      readOnly:false,
    },
  },
]
```

copy

[JSelectMultiple More Properties](https://help.jeecg.com/component/JSelectMultiple.html#%E7%BB%84%E4%BB%B6%E5%8F%82%E6%95%B0)

### 14\. JCheckbox Multiple Selection

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/88fcf5a0a30090d70d1e7ccf3a094fb6a7e1ab65ce387461b86793b1a4e92a03.dat)

```
const schemas: FormSchema[] = [
    {
      label: '多选',
      field: 'multipleChoice',
      component: 'JCheckbox',
      componentProps:{
        //字典code配置，比如通过职位字典编码：company_rank，也可以使用demo,name,id 表名,名称,值的方式
        dictCode:'company_rank',
        //是否禁用
        disabled: false,
        //没有字典code可以使用option来定义
        // options:[
        //   {label:'CE0',value:'1'}
        // ]
      },
]
```

copy

### 15\. ApiSelectApi drop-down box

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/75ccf093cdbf4573e829dee5bf65ab1b547fde10996ee3395457ad7fc29695a6.dat)

```
const schemas: FormSchema[] = [
    {
      label: 'Api下拉选择,
      field: 'apiSelect',
      component: 'ApiSelect',
      componentProps: {
        //multiple: 多选；不填写为单选
        mode: 'multiple',
        //请求api,返回结果{ result: { records: [{'id':'1',name:'scott'},{'id':'2',name:'小张'}] }}
        api: ()=> defHttp.get({ url: '' }),
        //数值转成String
        numberToString: false,
        //标题字段
        labelField: 'name',
        //值字段
        valueField: 'id',
        //请求参数
        params:{},
        //返回结果字段
        resultField:'records'
      },
    },
]
```

copy

### 16\. ApiTreeSelect remote API tree drop-down selection

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/dd57c9450dcfa7fee208e768f1fcc55574ee8ec9ad1680571170196b88e86c1e.dat)

```
const schemas: FormSchema[] = [
    {
      label: 'Api树选择',
      field: 'apiSelect',
      component: 'ApiTreeSelect',
      componentProps: {
        /* 请求api,返回结果,title：树名称，value：树的value值，children：子节点
         { result: { list: [{ title:'选项0',value:'0',key:'0',
           children: [ {"title": "选项0-0","value": "0-0","key": "0-0"},...]
           }, ...]
         }} */
        api: () => defHttp.get({ url: '/mock/tree/getDemoOptions' }),
        //请求参数
        params: {},
        //返回结果字段
        resultField: 'list',
      },
    },
]
```

copy

### 17\. JSelectInput can input drop-down box

Page Effects

Code Sample

You can enter text and select

![](https://lfs.k.topthink.com/lfs/ab94f70bb3fc382d9604ab71dcb930605fbbee679a64fa65631dc11f3c50d8f8.dat)

![](https://lfs.k.topthink.com/lfs/3d8956d7d42bd0f0e5f0a8cfee484cc59b5bf38b2ad272face43324c3237ba10.dat)

```
const schemas: FormSchema[] = [
  {
    label: '可输入下拉框',
    field: 'inputSelect',
    component: 'JSelectInput',
    componentProps: {
      options: [
        { label: 'Default', value: 'default' },
        { label: 'IFrame', value: 'iframe' },
      ],
      //是否为搜索模式
      showSearch: true,
      //是否禁用
      disabled: false
    },
  },
]
```

copy

[For more properties, see Select](https://www.antdv.com/components/select-cn/#api)

### 18\. JSearchSelect dictionary table search

Page Effects

Code Sample

> Search after entering text in the input box

![](https://lfs.k.topthink.com/lfs/32fa7aa9b600b279dace4e4be74cedf3ef640a35b5d39cb099427f5befa0bf5e.dat)

```
const schemas: FormSchema[] = [
  {
    label: '字典表搜索',
    field: 'dictSearchSelect',
    component: 'JSearchSelect',
    componentProps: {
      //字典code配置，通过 demo,name,id 表名,名称,值的方式
      dict: 'demo,name,id',
      //是否异步加载
      async: true,
      //当async设置为true时有效，表示异步查询时，每次获取数据的数量，默认10
      pageSize:3
    },
  },
]
```

copy

[JSearchSelect More Properties](https://help.jeecg.com/component/JSearchSelectTag.html#%E5%8F%82%E6%95%B0%E5%AE%9A%E4%B9%89)

### 19\. JTreeSelect drop-down tree selection

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/af3ce242f8ec97869e6f2f78468aecd791cb5ec2c8463f837733b4281af2f25a.dat)

```
const schemas: FormSchema[] = [
  {
    label: '下拉树选择',
    field: 'treeCusSelect',
    component: 'JTreeSelect',
    componentProps: {
      //字典code配置，比如通过性别字典编码：sex，也可以使用sys_permission,name,id 表名,名称,值的方式
      dict: 'sys_permission,name,id',
      //父级id字段
      pidField: 'parent_id',
    },
  },
]
```

copy

[JTreeSelect More Properties](https://help.jeecg.com/component/JTreeSelect.html#%E7%BB%84%E4%BB%B6%E5%8F%82%E6%95%B0)

### 20\. JCategorySelect classification dictionary tree

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/13b3e45e5150806ccc37e429ce5a36c6829573ac76c10d4796f4f272638f80ec.dat)

```
const schemas: FormSchema[] = [
  {
    label: '分类字典树',
    field: 'dictTree',
    component: 'JCategorySelect',
    componentProps: {
      //占位内容
      placeholder:'请选择分类字典树',
      //查询条件，如“{'name':'笔记本'}”
      condition:"",
      //是否多选
      multiple: false,
      //起始选择code，见配置的分类字典的类型编码
      pcode: 'A04',
      //父级id
      pid:'',
      //返回key
      back:'id',
    },
  },
]
```

copy

### 21\. JTreeDict classification dictionary tree component

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/c60b2c0fdb933f59fa36e296e293220af35de4c02d083774120f786c0ec30f2c.dat)

```
const schemas: FormSchema[] = [
  {
    label: '分类字典树',
    field: 'treeDict',
    component: 'JTreeDict',
    componentProps:{
      //指定当前组件需要存储的字段 可选: id(主键)和code(编码)
      field:'id',
      //是否为异步
      async: true,
      //是否禁用
      disabled: false,
      //指定一个节点的编码,加载该节点下的所有字典数据,若不指定，默认加载所有数据
      parentCode:'A04'
    },
  },
]
```

copy

### 22\. JPopup pop-up selection

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/2f8f0fa8e4dc3fba75a5141cb664e8fb2ee126e4acf25ec9a241d7834dd832f5.dat)

```
const schemas: FormSchema[] = [
  {
    label: 'popup',
    field: 'popup',
    component: 'JPopup',
    componentProps: ({ formActionType }) => {
      const {setFieldsValue} = formActionType;
      return{
        setFieldsValue:setFieldsValue,
        //online报表编码
        code:"demo",
        //是否为多选
        multi:false,
        //字段配置
        fieldConfig: [
          { source: 'name', target: 'popup' },
        ],
      }
    },
  },
]
```

copy

[More properties of popup](https://help.jeecg.com/component/JPopup.html#%E7%BB%84%E4%BB%B6%E5%8F%82%E6%95%B0)

### 23\. JSwitch

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/4cb226133b9bdd0fe4f4149cf91e60056dcf16443dee8ec6805c0e0250e5a269.dat)  
![](https://lfs.k.topthink.com/lfs/96da213f2e74c8f0575602749f0a0a631bb4142f08fe275d3486d4fabc410a7f.dat)

```
const schemas: FormSchema[] = [
  {
    label: '开关自定义',
    field: 'switch',
    component: 'JSwitch',
    componentProps:{
      //取值 options
      options:['Y','N'],
      //文本option
      labelOptions:['是', '否'],
      //是否启用下拉
      query: true,
      //是否禁用
      disabled: false,
    },
  },
]
```

copy

### 24\. InputSearch text search box

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/1ab72a2f7c806984c620affeb117a9435bcc0281b2fc22f0ae84e6da25ed66fa.dat)

```
export const schemas: FormSchema[] = [
    {
      label: '搜索框',
      field: 'searchBox',
      component:'InputSearch',
      componentProps:{
        //搜索之后触发事件
        onSearch:(value:any)=>{
          //搜索之后的逻辑处理
          console.log(value)
        }
      }
    },
]
```

copy

Except for the event being triggered after the search, the rest is the same as [the Input property](https://www.antdv.com/components/input-cn/#api)

### 25\. JEditor Rich Text

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/2dad1b8761fd6785a8c0ea91b7c10f1cad8ec2c4377b7e39cf5e83224c25c275.dat)

```
const schemas: FormSchema[] = [
  {
    label: '富文本',
    field: 'editor',
    component: 'JEditor',
    componentProps: {
      //是否禁用
      disabled: false
    },
  },
]
```

copy

### 26\. JMarkdownEditor

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/79ca1f8ca917bcc0c35484767b2f682f4055cfd177832d8c566c33bf27de89a6.dat)

```
const schemas: FormSchema[] = [
  {
    label: 'markdown',
    field: 'markdown',
    component: 'JMarkdownEditor',
    componentProps: {
      //是否禁用
      disabled: false
    },
  },
]
```

copy

### 27\. JAreaLinkage provincial, municipal and county linkage

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/051aa24fa0b7441874c9c9e855bd1d715590c93956a549554785b46d4e57c174.dat)

```
const schemas: FormSchema[] = [
  {
    label: '省市县联动',
    field: 'pwd',
    component: 'JAreaLinkage',
    componentProps: {
      //是否显示区县，默认true,否则只显示省
      showArea: true,
      //是否显示全部文本，默认false
      showAll: true,
    },
  },
]
```

copy

### 28\. JAreaSelect provincial, municipal and county linkage

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/5c0ac407f6bd5a46e83f84cd2ade7f3f102ab0b7f96131b0c53a6c8bf6144c8c.dat)

```
const schemas: FormSchema[] = [
  {
    label: '省市县级联动',
    field: 'provinceArea',
    component: 'JAreaSelect',
    componentProps: {
      //级别 1 只显示省 2 省市 3 省市区
      level:3
    },
  },
]
```

copy

### 29\. JInputPop multi-line input window

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/283fb3ca82bab1e90558679160d4e7ff83cdb3366074835790b9926a3045237d.dat)

```
const schemas: FormSchema[] = [
  {
    label: '分类字典树',
    field: 'treeDict',
    component: 'JTreeDict',
    componentProps:{
      //指定当前组件需要存储的字段 可选: id(主键)和code(编码)
      field:'id',
      //是否为异步
      async: true,
      //是否禁用
      disabled: false,
      //指定一个节点的编码,加载该节点下的所有字典数据,若不指定，默认加载所有数据
      parentCode:'A04'
    },
  },
]
```

copy

[JInputPop More Properties](https://help.jeecg.com/component/JInputPopup.html#%E7%BB%84%E4%BB%B6%E5%8F%82%E6%95%B0)

### 30\. StrengthMeter to check password strength

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/f67c700f0bbdb3f92ec6b8448ffd09d1b86a6a5b88cebbb92be578a1a0752c56.dat)

```
const schemas: FormSchema[] = [
    {
      label: '校验密码强度',
      field: 'pwd',
      component: 'StrengthMeter',
      componentProps: {
        //是否显示密码文本框
        showInput: true,
        //是否禁用
        disabled: false,
      },
    },
]
```

copy

### 31\. JCodeEditor

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/598d93074a5a1e14d0b01a524b050e7d534b8e8acc5b1b134500eaa4e78c35cc.dat)

```
const schemas: FormSchema[] = [
  {
    label: '代码编辑器组件',
    field: 'jCode',
    component: 'JCodeEditor',
    componentProps: {
      //高度，默认auto
      height:'150px',
      //是否禁用
      disabled:false,
      //是否全屏
      fullScreen:false,
      //全屏之后的坐标
      zIndex: 999,
      //代码主题，目前只支持idea,可在组件自行扩展
      theme:'idea',
      //代码提示
      keywords:['console'],
      //语言如（javascript,vue,markdown）可在组件自行扩展
      language:'javascript'
    },
  },
]
```

copy

### 32\. JEasyCron timing expression selection

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/e965d9a0168d08403e028fb2abe5919e8847d4efadc690dc85077192ae0e0459.dat)

```
const schemas: FormSchema[] = [
  {
    label: '定时表达式选择',
    field: 'timing',
    component: 'JEasyCron',
    componentProps:{
      //是否隐藏参数秒和年设置，如果隐藏，那么参数秒和年将会全部忽略掉。
      hideSecond: false,
      //是否隐藏参数年设置，如果隐藏，那么参数年将会全部忽略掉
      hideYear: false,
      //是否禁用
      disabled: false,
      //获取预览执行时间列表的函数，格式为：remote (cron值, time时间戳, cb回调函数)
      remote:(cron,time,cb)=>{}
    },
  },
]
```

copy

### 34\. JRangeNumber numerical range input box

Page Effects

Code Sample

![](https://lfs.k.topthink.com/lfs/9894c515915f922fbfc58947384ea707a84c33f5f4dd4e83ba1077f6f499cad2.dat)

```
const schemas: FormSchema[] = [
  {
    label: '数值范围输入框',
    field: 'rangeNumber',
    component: 'JRangeNumber',
  },
]
```

copy

### 35\. InputCountDown verification code component

Page Effects

Code Sample

> Effect when SMS verification code is not sent

![](https://lfs.k.topthink.com/lfs/b2298831f4e7e9e85428555c3c396e09cbe2f553b932ee3f43fbaaf9c2a68a99.dat)

> Effect of sending SMS verification code

![](https://lfs.k.topthink.com/lfs/89ff90d95c3addade45f4f1d4aa90c40e979d3eda36c9fb0fc3843ef18af558f.dat)

```
export const schemas: FormSchema[] = [
  {
    label: '验证码',
    field: 'code',
    component: 'InputCountDown',
    componentProps: {
      //'default': 默认, 'large': 最大, 'small': 最小
      size:'default',
      //倒计时
      count: 120,
    },
  },
```

copy

## Precautions

### 1\. Invalid properties

> `componentProps`The corresponding `value`attributes and `defaultValue`properties in are not effective

`defaultValue`Need to be filled in with `componentProps`the same level

```
const schemas: FormSchema[] = [
  {
    label: '姓名',
    field: 'name',
    component:'Input',
    componentProps:{
      prefix:'中文',
      showCount: true
    },
    defaultValue:'张三'
  },
]
```

copy
