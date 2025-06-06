---
order: 10
---

# Custom rendering function

Render Function

```
import {render} from "/@/utils/common/renderUtils";


/**
 * 根据字典编码 渲染
 * @param v 值
 * @param code 字典编码
 */
render.renderDict(record.sex, 'sex')
/**
 * 渲染列表头像
 * @param record
 */
render.renderAvatar
/**
 * 渲染图片
 * @param text
 */
render.renderImage(text)
/**
 * 渲染Tooltip
 * @param text
 *   @param length
 */
render.renderTip(text,30)
/**
 * 渲染a标签
 * @param text
 * @param length
 */
render.renderHref(text)
/**
 *根据字典options渲染
 * @param text
 * @param array 字典数组
 * @param renderTag 是否渲染成Tag标签
 */
render.renderDictNative(text, [{ label: '未读', value: '0',color:'red' }, { label: '已读', value: '1' }],true);
/**
 * 渲染a标签
 * @param model 表单model
 * @param field 字段
 */
render.renderTinymce(model,field)
```

copy
