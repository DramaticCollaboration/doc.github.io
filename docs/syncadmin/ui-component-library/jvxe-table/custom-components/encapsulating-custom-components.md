---
order: 2
---

# Encapsulating custom components

> This article will guide you to write custom components for line editing to achieve more advanced functions.

## 1\. Preparation

It is recommended that all custom components be placed `components/JVxeCustom`in the directory for easy management.  
If you need to classify, you can create a new directory under the directory. For example, in this example, create a new `demo`folder  
![](https://lfs.k.topthink.com/lfs/d036d74f2d24829f8c4fec387af9260458f69fdf98b6ade79fb1e37256d2cf2e.dat)  
Then create a `.vue`new file, which is the actual function of the custom component.  
![](https://lfs.k.topthink.com/lfs/b8725dcd87f971f8f08ecfc7d40a03ae2c3cf52de574fd3ddb9e299ea5e0ee56.dat)  
As shown in the figure above, I have created a new `JVxeDemoCell.vue` file. Next, I need to write the actual functional code of the component in this file.

## 2\. Encapsulation Function

Open the component file and import the public method **(important)** .

```
import { useJVxeComponent, useJVxeCompProps } from '/@/components/jeecg/JVxeTable/src/hooks/useJVxeComponent';
```

copy

Each custom component **must** be referenced because it encapsulates the necessary parameters, variables, and methods of the component.

### 1\. Detailed explanation of JVxeCellMixins

#### 1.1 Mixin parameters (props)

| parameter name | type   | explain                                                      |
| -------------- | ------ | ------------------------------------------------------------ |
| value          | any    | Binding value                                                |
| row            | object | The data of the current row                                  |
| column         | object | Current column configuration                                 |
| params         | object | Component public parameters                                  |
| renderOptions  | object | Rendering Options                                            |
| renderType     | string | Rendering type (func, bool, string, number, object, integer) |

#### 1.2 Mixin variables (data)

| variable name | type | explain                                                                                                     |
| ------------- | ---- | ----------------------------------------------------------------------------------------------------------- |
| innerValue    | any  | `value`The value after `setValue()`enhancement (see the "Custom Component Enhancement" section for details) |

#### 1.3 Mixing in computed properties

| Property name | type   | explain                                                                                                                                                                          |
| ------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| caseId        | string | Unique ID of the JVXETable instance                                                                                                                                              |
| type          | string | Component type, corresponding `JVXETypes`to the one filled in during registration `type`, used to distinguish between multiple different types but when using the same component |
| originColumn  | object | Original column configuration (user-written configuration column, where you can get custom parameters)                                                                           |
| cellProps     | object | The props bound to the current component                                                                                                                                         |

#### 1.4 Mixin methods

- `trigger(name, event = {}, args = [])`  
  trigger event
- `handleBlurCommon(value)`  
  Public processing blur event
- `handleChangeCommon(value)`  
  Public processing change event

### 2\. Example: Simple Encapsulation

Simple encapsulation is to encapsulate only `可编辑`the components in mode. In actual use, the components are not displayed. The components will only be displayed when the cell is clicked. The advantage is that it can greatly improve the performance.  
Therefore, simple encapsulation only requires one vue component to complete.  
Complete example:  
![](https://lfs.k.topthink.com/lfs/81d32eaf0f80bee445d5b6668adca4d41a38240fb96173962b3bcf2aae489b9b.dat)  
![](https://lfs.k.topthink.com/lfs/ac2a97bb516aebff600195275c2943f5d65ad561d4e6fdd2d6e17f9d6b159b3b.dat)  
Register and view the results (registration method see: 3. Final registration)  
![](https://lfs.k.topthink.com/lfs/922ee79518713b00e30d96d99e943542526151e4bccdfa0677f870f8edd7377c.dat)

## 3\. Final Registration

It is recommended `src/components/JVxeCustom/index.ts`to complete the registration in the file so that it can be used out of the box.  
Registration only requires calling `registerAsyncComponent`the asynchronous method to complete the registration.

Example:  
![](https://lfs.k.topthink.com/lfs/ce517fa016afbdee86f61708eac36233d70491313dbfc97d43634f71d72f4946.dat)

- You can `JVxeTypes.ts`add constants to the file for calling elsewhere

![](https://lfs.k.topthink.com/lfs/21e1cb9a241be18db1cc5c77ae6184f57bc80f07a8069045e4641a9ce2c268a9.dat)

## 4\. Usage Examples

![](https://lfs.k.topthink.com/lfs/1cf87628b3e1b1e51d88d4847e295dc892e2cd11aec13defd2bb517e5d39db03.dat)

## 5\. Reference Examples

Simple example: `src/components/jeecg/JVxeTable/src/components/cells/JVxeCheckboxCell.vue`;  
Complex example:`src/components/jeecg/JVxeTable/src/components/cells/JVxeSelectCell.vue`
