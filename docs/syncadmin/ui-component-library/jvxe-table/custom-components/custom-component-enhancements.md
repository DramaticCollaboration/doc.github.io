---
order: 3
---

# Custom component enhancements

> Here we only introduce a few commonly used enhancements.  
> For other enhancements, see:`src/components/jeecg/JVxeTable/src/types/JVxeComponent.ts`

![](https://lfs.k.topthink.com/lfs/923662c0fe7397c4b2c8fbe3c300be66fc226f7545ae84562d402b11f304a71b.dat)

## setValue(value)

The enhancement is called when passing a value into a component.  
It is generally used for special data processing. For example, a multi-select drop-down component requires an array, but the user passes a string separated by commas, which causes the component to be unable to recognize it normally. At this time, you can write adaptation code in this enhancement to split the string into an array and then return it.  
![](https://lfs.k.topthink.com/lfs/62e3fc70c1b6778bb6359bb9a60ae6033a2d0f0f660ba782c575549e6beda7c1.dat)

## getValue(value)

The enhancement called when the component passes values ​​to the outside.  
When the user obtains data through `getTableData()`the method, the data is processed. For example, in the multi-select drop-down component, the actual data is an array, but the database saves comma-separated strings, so it needs to be processed in this method.  
![](https://lfs.k.topthink.com/lfs/b48d697f486941c3b3d9b4fb765fa5c7283cad518577ea98563bb2743fa8068e.dat)

## createValue(defaultValue: any, ctx?: EnhancedCtx)

Parameter introduction:  
![](https://lfs.k.topthink.com/lfs/667a194fdb5d8c7ecfe9a63a85c8130cb2f254da8b2cb38c49b8f40cb2e6bfb2.dat)  
It is triggered when the user clicks Add. The returned value is the default value of the new row. The default behavior is to return `defaultValue`the field, which can be overridden.
