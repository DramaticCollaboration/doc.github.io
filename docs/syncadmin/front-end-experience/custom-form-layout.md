---
order: 8
---

# Custom form layout

When the project cannot meet the actual business needs, you can use antd vue native layout. For specific usage, refer to [Grid usage.](https://2x.antdv.com/components/grid-cn)

1\. Form layout, one row and two columns

```
<template>
    <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" :width="1000" @ok="handleSubmit">
        <a-form ref="formEl" :model="planModel" :label-col="{xs: {span: 24}, sm: {span: 6}}" :wrapper-col="{xs: {span: 24}, sm: {span: 18}}" :rules="validatorRules">
            <a-row>
                <a-col :span="12">
                    <a-form-item label="日程标题" name="title">
                        <a-input placeholder="请输入标题" v-model:value="planModel.title"/>
                    </a-form-item>
                </a-col>
                <a-col :span="12">
                    <a-form-item label="日程类型">
                        <JDictSelectTag placeholder="请选择类型" type="select" v-model:value="planModel.type" dictCode="eoa_plan_type"/>
                    </a-form-item>
                </a-col>
                <a-col :span="12">
                    <a-form-item label="提醒类型" name="remindType">
                        <a-select placeholder="请选择提醒类型" mode="multiple"  v-model:value="planModel.remindType">
                            <a-select-option value="1">邮件</a-select-option>
                            <a-select-option value="2">短信</a-select-option>
                            <a-select-option value="4">系统消息</a-select-option>
                        </a-select>
                    </a-form-item>
                </a-col>
                <a-col :span="12">
                    <a-form-item label="紧急程度" name="urgentLevel">
                        <JDictSelectTag placeholder="请选择紧急程度" type="select" v-model:value="planModel.urgentLevel" dictCode="urgent_level"/>
                    </a-form-item>
                </a-col>
                <a-col :span="12">
                    <a-form-item label="提醒时间" name="remind">
                        <JDictSelectTag placeholder="请选择提醒时间" type="select" v-model:value="planModel.remind" dictCode="remindTime"/>
                    </a-form-item>
                </a-col>
                <a-col :span="12">
                    <a-form-item label="重复提醒" name="reminders">
                        <JDictSelectTag placeholder="请选择重复提醒" type="select" v-model:value="planModel.reminders" dictCode="reminders"/>
                    </a-form-item>
                </a-col>
                <a-col :span="12">
                    <a-form-item label="日程时间" name="rangeTime">
                        <a-range-picker v-bind="dateRangePickerProps" v-model:value="planModel.rangeTime" />
                    </a-form-item>
                </a-col>
            </a-row>
        </a-form>
    </BasicModal>
</template>
<script lang="ts" setup>
     省略....
    const formEl = ref();
    const isUpdate = ref(true);
    //表单modal
    const planModel = reactive({ });
    //表单赋值
    const [registerModal, {setModalProps, closeModal}] = useModalInner(async (data) => {
        setModalProps({confirmLoading: false});
        isUpdate.value = !!data?.isUpdate;
        if (unref(isUpdate)) {
            const record = await queryById({id:data?.record?.id});
            Object.assign(planModel, record);
        }
    });
    //标题
    const getTitle = computed(() => (!unref(isUpdate) ? '新增' : '编辑'));

    /**
     * 表单提交事件
     * */
    async function handleSubmit() {
        formEl.value.validate().then(async() => {
            try {
                setModalProps({confirmLoading: true});
                let formData = Object.assign({}, planModel)
                await saveOrUpdate(formData,unref(isUpdate));
               closeModal();
               emit('success');
            } finally {
                setModalProps({confirmLoading: false});
            }
        }).catch((error: ValidateErrorEntity<any>) => {
            console.log('error', error);
        })
    }
</script>

<style lang="less" scoped>

</style>

```

copy
