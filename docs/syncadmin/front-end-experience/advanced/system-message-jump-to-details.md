---
order: 4
---

# System message Jump to details

In the new version of vue3, click the message icon at the top to display my message list in a pop-up window. Click the details _**to jump to the relevant form page**_ .  
`@Date 2022-08-31`  
![](https://lfs.k.topthink.com/lfs/5d01b946281121752c73d3c6d1166a6185a688a1d4f1e1d10f1d9d305dcef640.dat)

The system currently supports 4 ways to jump:

- 1\. Process expediting-->jump to the task handling list and pop up the task handling form
- 2\. Node message notification-->jump to the task handling page
- 3\. Internal mailbox-->Jump to the internal mailbox list and pop up the email details form
- 4\. Ordinary system messages/announcements-->Jump to my message list and pop up the message details form (default mode)

**If expansion is required, the enumeration class needs to be modified to add corresponding records of busType and path.**

```
package org.jeecg.modules.message.enums;

import org.jeecg.common.system.annotation.EnumDict;
import org.jeecg.common.system.vo.DictModel;

import java.util.ArrayList;
import java.util.List;

/**
 * 消息跳转【vue3】
 **/
public enum Vue3MessageHrefEnum {

    /**
     * 流程催办
     */
    BPM("bpm", "/task/myHandleTaskInfo"),

    /**
     * 节点通知
     */
    BPM_TASK("bpm_task", "/task/handle/{DETAIL_ID}"),

    /**
     * 邮件消息
     */
    EMAIL("email", "/eoa/email");

    String busType;

    String path;

    Vue3MessageHrefEnum(String busType, String path) {
        this.busType = busType;
        this.path = path;
    }

    public String getBusType() {
        return busType;
    }

    public String getPath() {
        return path;
    }
}

```

copy

**When saving a message to `sys_announcement`a table, two special attributes need to be set: busType, busId**

> Remark:
>
> 1.  If busType is not set, the fourth jump mentioned above will be executed by default
> 2.  busType is used to identify enumeration and find the specific routing address path
> 3.  busId is the unique identifier of the details page data. The entire details page data can be queried through this identifier.

The front-end sample code is as follows:

```

import { getOne } from './mynews.api';
import { useAppStore } from '/@/store/modules/app';
const appStore = useAppStore();

onMounted(()=>{
  initHrefModal();
});
function initHrefModal(){
    // 从appStore中获取参数
    let params = appStore.getMessageHrefParams;
    let detailId = params.detailId;
    if(detailId){
      // getOne这个查询代码未提供，就是根据ID从数据库查询数据
      getOne(detailId).then(data=>{
        openDetail(true, {
          record: data,
          isUpdate: true,
        });
        // 弹窗详情后，清除历史参数
        appStore.setMessageHrefParams('')
      })
    }
  }
}

```

copy
