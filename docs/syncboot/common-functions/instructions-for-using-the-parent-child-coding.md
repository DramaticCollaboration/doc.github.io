---
order: 12
---

# Instructions for using the parent-child coding

jeecg-boot provides an interface for automatically generating code. You can generate code by calling the interface.

## 1\. Generate parent code

There is only one parameter code when generating the parent code. When there is no data at the same level, it is null and the generated code is A01.  
When there is data at the same level, the code passed in is the largest data at the same level, such as A04, the generated code is A05 .  
Note: When the code is Z99, the next code generated is Z99A01  
. When generating a child code, the parent code Z99A01 needs to be passed in, and the generated child code is Z99A01A01.

### Example:

1.  YouBianCodeUtil.getNextYouBianCode(null) //Generate code: A01
2.  YouBianCodeUtil.getNextYouBianCode("A04") //Generate code: A05

## 2\. Generate sub-level code

There are two parameters when generating child codes. The first parameter is the parent code (parentCode), which needs to be passed in.  
The second parameter is localCode. When the child has no peer data, localCode is null, and A05A01 is generated.  
When the child has peer data, the maximum peer data is passed in, and the generated code is A05A02.

### Example:

1.  YouBianCodeUtil.getSubYouBianCode("A05",null); //The generated code is A05A01
2.  YouBianCodeUtil.getSubYouBianCode("A05","A05A01"); //The generated code is A05A02
