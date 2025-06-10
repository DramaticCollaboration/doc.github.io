---
order: 14
---

# Defining validation rules

Validation rules can be used to validate the codes in the form, for example, to validate complex codes.

## Create a rule

![](https://lfs.k.topthink.com/lfs/c53fa8092fbc07d72ed9037a5ab663dbbd36e1429066dba288b154da044aad7f.dat)

### Local rules

Local rules check in order according to the number of digits you input.  
You can add multiple lines of local rules and judge them line by line in the order they are added .  
For example, if the number of digits in the first line is 3, the number of digits in the second line is 2, and the number of digits in the third line is 4, then in actual verification, the first line checks `1-3`the bit string, the second line starts from the end of the previous line and moves back 2 bits, that is, `4-5`bits, and the third line and so on, it can be concluded that it is `6-9`bits.

![](https://lfs.k.topthink.com/lfs/78661356cbdfd6c4f1f38020ee99e8e6e428d1b82149dde144c1ab8a77160dcc.dat)

### Global Rules

The difference between global rules and local rules is that global rules judge the entire string input by the user, rather than just the first few digits.  
Global rules have running priorities, which are:  
\* `优先运行`will be run before local rules  
\* `最后运行`will be run after all local rules have been verified

![](https://lfs.k.topthink.com/lfs/b54ae0503b4820261d47d72535ada71848760f68e636e21e7e3daccef7214109.dat)

## Instructions

### Step 1: Create a new Form

![](https://upload.jeecg.com/jeecg/help/jeecgback/topwrite/assets/image_1692948882347.png)

### Step 2: Introduce tool classes

```
import { validateCheckRule } from '/@/views/system/checkRule/check.rule.api';
```

copy

### Step 3: Use tool classes to implement validation rules

![](https://upload.jeecg.com/jeecg/help/jeecgback/topwrite/assets/image_1692948720340.png)

### Step 4: Check the effect

Failed Effect:  
![](https://lfs.k.topthink.com/lfs/adf6f491c8251516bf3476c01bd33876a9ae317fb5764a686456812963bc07e2.dat)  
![](https://lfs.k.topthink.com/lfs/a8a8a852de48590d9e32b64ff92bccbcb939a1da036461e506bb09a507c279c0.dat)  
![](https://lfs.k.topthink.com/lfs/1c0b380c76933baa36b0e607cb61df4ef01de1151b94410c4610c5517b5db4b1.dat)  
![](https://lfs.k.topthink.com/lfs/e859c57ce146507232a7df24ab7b3d4752be3d10110ca0daf777c4828aea177f.dat)  
By effect:  
![](https://lfs.k.topthink.com/lfs/fdd859531aa8c348caa9c4a59c29be73499e1fc57766c4c9b16b463569cae53e.dat)

## Complete front-end code

```
<template>
    <a-form style="padding: 40px" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-item label="编码" v-bind="validateInfos.code">
            <a-input v-model:value="modelRef.code" />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: wrapperCol.span, offset: labelCol.span }">
            <a-button type="primary" @click.prevent="onSubmit">提交</a-button>
            <a-button style="margin-left: 20px" @click="resetFields">重置</a-button>
        </a-form-item>
    </a-form>
</template>
<script setup>
import { defineComponent, reactive, toRaw } from 'vue';
import { Form } from 'ant-design-vue';
import { validateCheckRule } from '/@/views/system/checkRule/check.rule.api';
const useForm = Form.useForm;
const labelCol = {
    span: 4,
};
const wrapperCol = {
    span: 14,
};
const modelRef = reactive({
    code: '',
});
const rulesRef = reactive({
    code: [
        {
            required: true,
            validator: (rule, value) => {
                 return new Promise((resolve, reject) => {
                     if (!value) reject('请输入编码');
                        validateCheckRule('common', value)
                            .then((res) => {
                                if (res.success) {
                                    resolve();
                                } else {
                                    reject(res.message);
                                }
                    })
                    .catch((err) => {
                        reject('网络环境差，请重试~');
                    });
                });
            },
        },
    ],
});
const { resetFields, validate, validateInfos } = useForm(modelRef, rulesRef);
const onSubmit = () => {
    validate()
    .then(() => {
        console.log(toRaw(modelRef));
    })
    .catch((err) => {
        console.log('error', err);
    });
};
</script>


```

copy

### How to call the generated validation rule code in the JS enhancement of the online form?

You can use `getAction`methods to call the interface to verify the fields

```
beforeSubmit(row){
	return new Promise((resolve, reject)=>{
        getAction('/sys/checkRule/checkByCode', { ruleCode:'test',value: row.name}).then(res => {
          console.log("校验结果res",res)
           if(!res.success){
            reject(res.message)
          }else{
            resolve()
         }
   })
  })
}
```

copy

![](https://lfs.k.topthink.com/lfs/2f9d2e64d5ef0ebb2a96c18ddcb5db1e0bf2ff90debcf072b89fe357f8ac24fd.dat)

![](https://lfs.k.topthink.com/lfs/2b54479a854ba7f3a8bc53d149f8e0b941be8b67db1980b801935be28bd09e6e.dat)
