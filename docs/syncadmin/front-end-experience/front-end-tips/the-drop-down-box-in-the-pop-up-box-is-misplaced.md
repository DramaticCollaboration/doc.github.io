---
order: 4
---

# The drop-down box in the pop-up box is misplaced

How to deal with the misalignment of the drop-down box in the pop-up box, as shown below  
![](https://lfs.k.topthink.com/lfs/5fa2998e93adf83e0f1e551b7845df4386ab27fcc3983c3f54064c5d59164e5e.dat)  
Processing method, use  
getPopupContainer: (node) => document.body  
or  
getPopupContainer: (node) => node.parentNode

```
{
  field: 'ruleConditions',
  label: '条件规则',
  required: true,
  component: 'ApiSelect',
  componentProps: {
    api: ajaxGetDictItems,
    params:{code:'rule_conditions'},
    labelField: 'text',
    valueField: 'value',
    getPopupContainer: (node) => document.body,
  },
},
```

copy

The effect after use is as follows  
![](https://lfs.k.topthink.com/lfs/583ab156fc97f7e54ad359c5b56b2da9616e6588b8645112de418f047a0c8391.dat)
