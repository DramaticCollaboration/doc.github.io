---
order: 11
---

# Column field export permissions

> After the permission control is performed on the columns of the data list,  
> the permission control based on the column field of the list is completed when the list exports data and corresponds to the column permission.

**For example:** The punch-in time field has been permission-controlled and is hidden in the list. It will not be exported when exporting.  
![](https://lfs.k.topthink.com/lfs/97f0db27eb20a1dbdd8106f9637f0859050663b24531b545f1732b245392ae54.dat)  
![](https://lfs.k.topthink.com/lfs/88fba78c91559493ac1b1d926d5252d2fac6e5030f3e566d4409e3b204edec54.dat)  
![](https://lfs.k.topthink.com/lfs/b3b08cf77843871f53745e73626c97d3689a8107f062dea00b8f0fe18322f335.dat)

### Permission control steps

#### Add permission logic to the background export method, obtain the fields to be exported, separate all the fields to be exported with commas, and concatenate the strings

```
@RequestMapping(value = "/exportXls")
@PermissionData(pageComponent = "jeecg/JeecgDemoList")
public ModelAndView exportXls(HttpServletRequest request, JeecgDemo jeecgDemo) {
    //获取导出表格字段
    String exportFields = jeecgDemoService.getExportFields();
    return super.exportXls(request, jeecgDemo, JeecgDemo.class, "单表模型",exportFields);
}
```

copy

```
public String getExportFields() {
   //获取当前登录人
   LoginUser sysUser = (LoginUser) SecurityUtils.getSubject().getPrincipal();
   //权限配置列导出示例
   List<String> noAuthList = new ArrayList<>();
   List<String> exportFieldsList = new ArrayList<>();
   //1.此前缀必须与列表字段权限控制前缀一致
   String permsPrefix = "testdemo:";
   //查询配置菜单有效字段
   List<String> allAuth = this.baseMapper.queryAllAuth(permsPrefix);
   //查询已授权字段
   List<String> userAuth = this.baseMapper.queryUserAuth(sysUser.getId(),permsPrefix);
   //列出未授权字段
   for(String perms : allAuth){
      if(!userAuth.contains(perms)){
         noAuthList.add(perms.substring(permsPrefix.length()));
      }
   }
   //实体类中字段与未授权字段比较，列出需导出字段
   Field[] fileds = JeecgDemo.class.getDeclaredFields();
   List<Field> list = new ArrayList(Arrays.asList(fileds));
   for(Field field : list){
      if(!noAuthList.contains(field.getName())){
         exportFieldsList.add(field.getName());
      }
   }
   return exportFieldsList != null && exportFieldsList.size()>0 ? String.join(",", exportFieldsList) : "";
}
```

copy

`JeecgDemoMapper.xml`Reference for query fields in:

```
<!-- 查询所有符合前缀且有效字段 -->
<select id="queryAllAuth" resultType="java.lang.String">
       select perms from sys_permission
       where perms
       like concat(concat('%',#{permsPrefix}),'%')
       and del_flag=0
       and status='1'
   </select>

<!-- 查询用户已授权字段 -->
<select id="queryUserAuth" resultType="java.lang.String">
       select DISTINCT perms from sys_user_role sur,
       sys_role_permission srp,
       sys_permission sp
       where sur.role_id = srp.role_id
       and sp.id = srp.permission_id
       and sur.user_id = #{userId}
       and sp.perms like concat(concat('%',#{permsPrefix}),'%')
   </select>
```

copy
