---
order: 6
---

# Using Antd Vue native Form

When the encapsulated BaseForm cannot meet the actual business needs, you can use the antd vue native form object for page layout. For specific usage, refer to [Form usage](https://2x.antdv.com/components/form-cn)  
1\. Use BasicDrawer usage example

```
<BasicDrawer v-bind="$attrs" @register="registerDrawer" title="添加用户" width="500px" @ok="handleSubmit" destroyOnClose showFooter>
        <a-form ref="formRef"  :model="formModel">
            <a-form-item label="用户名" name="routerId">
                <a-input v-model:value="router.routerId" placeholder="请输入用户名"/>
            </a-form-item>
        </a-form>
</BasicDrawer>

<script lang="ts" setup>
    const formRef = ref();
    let formModel= reactive({});

    const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
      isUpdate.value = !!data?.isUpdate;
      setDrawerProps({ confirmLoading: false });
      if (unref(isUpdate)) {
        formModel= Object.assign(formModel, data.record);
      }
    });
    /**
     * 提交表单
     */
    async function handleSubmit() {
      await formRef.value.validate().then(() => {
        try {
           setDrawerProps({ confirmLoading: true })；
           //提交表单
          saveOrUpdateRoute({ formModel: formModel}).then(() => {
               //刷新列表
               emit('success');
               closeDrawer();
          });
        } finally {
            setDrawerProps({ confirmLoading: false });
        }
      });
    }
</script>
```

copy

2\. Example of using BasicModal

```
<BasicModal v-bind="$attrs" @register="registerModal" title="添加用户" @ok="handleSubmit" width="70%">
        <a-form ref="formRef"  :model="formModel">
            <a-form-item label="用户名" name="routerId">
                <a-input v-model:value="router.routerId" placeholder="请输入用户名"/>
            </a-form-item>
        </a-form>
</BasicModal >

<script lang="ts" setup>
    const formRef = ref();
    let formModel= reactive({});

    const [registerModal, {setModalProps, closeModal}] = useModalInner(async (data) => {
        setModalProps({confirmLoading: false});
        reset()
        isUpdate.value = !!data?.isUpdate;
        if (unref(isUpdate)) {
            formModel= Object.assign(formModel, data.record);
        }
    });

    /**
     * 提交表单
     */
    async function handleSubmit() {
      await formRef.value.validate().then(() => {
        try {
         setModalProps({ confirmLoading: true })；
           //提交表单
          saveOrUpdateRoute({ formModel: formModel}).then(() => {
               //刷新列表
               emit('success');
               closeModal();
          });
        } finally {
            setModalProps({ confirmLoading: false });
        }
      });
    }
</script>
```

copy
