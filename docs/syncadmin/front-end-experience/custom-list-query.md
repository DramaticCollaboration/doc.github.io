---
order: 7
---

# Custom list query

When the encapsulated BaseForm search cannot meet the actual business needs, you can use the antd vue native form object for page layout. For specific usage, refer to [Form usage](https://2x.antdv.com/components/form-cn)

1\. Example of using BasicTable

```
<div>
    <!--自定义查询区域-->
    <div class="jeecg-basic-table-form-container" @keyup.enter="searchQuery">
        <a-form :model="queryParam" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-row :gutter="24">
                <a-col :lg="8">
                    <a-form-item label="用户名">
                        <a-input placeholder="请输入名称模糊查询" v-model:value="queryParam.name"></a-input>
                    </a-form-item>
                </a-col>
                 <a-col :lg="8">
                     <a-form-item label="年龄">
                         <a-input placeholder="最小年龄" type="ge" v-model:value="queryParam.age_begin" style="width:calc(50% - 15px);"></a-input>
                         <span>~</span>
                         <a-input placeholder="最大年龄" type="le" v-model:value="queryParam.age_end" style="width:calc(50% - 15px);"></a-input>
                     </a-form-item>
                 </a-col>
                <template v-if="toggleSearchStatus">
                    <a-col :lg="8">
                        <a-form-item label="性别">
                            <JDictSelectTag v-model:value="queryParam.sex" placeholder="请选择性别" dictCode="sex"/>
                        </a-form-item>
                    </a-col>
                    <a-col :lg="8">
                        <a-form-item label="选择用户">
                            <JDictSelectTag v-model:value="queryParam.id" placeholder="请选择用户" dictCode="demo,name,id"/>
                        </a-form-item>
                    </a-col>
                </template>
                <span style="float: left;overflow: hidden;" class="table-page-search-submitButtons">
                    <a-col :lg="6">
                      <a-button type="primary" preIcon="ant-design:search-outlined" @click="searchQuery">查询</a-button>
                      <a-button type="primary" preIcon="ant-design:reload-outlined" @click="searchReset" style="margin-left: 8px">重置</a-button>
                      <a @click="toggleSearchStatus = !toggleSearchStatus" style="margin-left: 8px">
                        {{ toggleSearchStatus ? '收起' : '展开' }}
                        <Icon :icon="toggleSearchStatus ? 'ant-design:up-outlined' : 'ant-design:down-outlined'"/>
                      </a>
                    </a-col>
              </span>
            </a-row>
        </a-form>
    </div>
    <BasicTable @register="registerTable" :rowSelection="rowSelection">
      省略 ......
    </BasicTable>


<script lang="ts" setup>
省略.......
//-----自定义查询----begin--------
const labelCol = reactive({
    xs: {span: 24},
    sm: {span: 7},
})
const wrapperCol = reactive({
    xs: {span: 24},
    sm: {span: 16},
})
const toggleSearchStatus = ref(false);
const queryParam = reactive({
    name: '',
    age_begin: '',
    age_end: '',
    sex: '',
    id: '',
});

function searchQuery(){
    setProps({searchInfo:toRaw(queryParam)});
    reload()
}
function searchReset(){
    Object.assign(queryParam,{ name: '',age_begin: '',age_end: '',sex: '',id: ''});
    reload();
}
//自定义查询----end---------
</script>
```

copy
