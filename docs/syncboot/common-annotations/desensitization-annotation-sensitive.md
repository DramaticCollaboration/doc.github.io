---
order: 8
---

# Desensitization annotation @Sensitive

> Usage description: Data desensitization is to process some sensitive information through encryption, formatting, etc., and show users a new or formatted information to avoid the exposure of sensitive information.

### 1\. Interface desensitization annotation

> Desensitizing and encrypting interface data is implemented, and only encryption is performed. Generally, this solution is used for data encryption display.

#### 1.1 Annotation Introduction

| annotation | Scope  | describe                                                                                           |
| ---------- | ------ | -------------------------------------------------------------------------------------------------- |
| @Sensitive | entity | `脱敏加密注解`, indicating that the interface returns the value of this entity for desensitization |

#### 1.2 Examples

Just add annotations to the entity, and the returned interface field data will be automatically encrypted  
![](https://lfs.k.topthink.com/lfs/211dde4fed24b23fceb057287bca6223625c49798fdaa64f8c4729205ed9ccc1.dat)

#### 1.3 Desensitization Type

Data processing rules support: encryption, user name formatting, ID number formatting, email and phone number formatting, etc.  
Syntax: Field annotation @Sensitive attribute type, the default is encode (encryption)

The following sensitive types are supported:

```
public enum SensitiveEnum {
    /**
     * 加密
     */
    ENCODE,
    /**
     * 中文名
     */
    CHINESE_NAME,
    /**
     * 身份证号
     */
    ID_CARD,
    /**
     * 座机号
     */
    FIXED_PHONE,
    /**
     * 手机号
     */
    MOBILE_PHONE,
    /**
     * 地址
     */
    ADDRESS,
    /**
     * 电子邮件
     */
    EMAIL,
    /**
     * 银行卡
     */
    BANK_CARD,
    /**
     * 公司开户银行联号
     */
    CNAPS_CODE;
}
```

copy

### 2\. Method Desensitization Annotation

> The service method can be desensitized, encrypted, and decrypted.

#### 2.1 Annotation Introduction

| annotation       | Scope          | describe                                                                                                                                        |
| ---------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| @SensitiveEncode | Service Method | `脱敏加密注解`, indicating that the return value of this method needs to be desensitized                                                        |
| @SensitiveDecode | Service Method | `脱敏解密注解`, indicating that the return value of this method needs to be decrypted (only supports decryption after desensitization encoding) |
| @SensitiveField  | Entity Fields  | Indicates that the field needs to be desensitized                                                                                               |

> Important reminder: Data masking is implemented based on AOP, so do not call methods with the above annotations in the same class, which will cause AOP to fail.

#### 2.2 Usage of desensitization annotation

1.  Add annotations to entity fields: `@SensitiveField`  
    only annotate the fields that need to be desensitized, and do not annotate the fields that do not need to be desensitized

```
public class LoginUser {

   /**
    * 登录人密码
    */
   @SensitiveField
   private String password;
```

copy

2.  Add annotations to the service method`@SensitiveEncode`

```
@Override
@SensitiveEncode
public LoginUser getEncodeUserInfo(String username){
   if(oConvertUtils.isEmpty(username)) {
      return null;
   }
   LoginUser loginUser = new LoginUser();
   SysUser sysUser = userMapper.getUserByName(username);
   if(sysUser==null) {
      return null;
   }
   BeanUtils.copyProperties(sysUser, loginUser);
   return loginUser;
}
```

copy

> Note: Adding an annotation to a method `@SensitiveEncode`means that the return value of the method will be desensitized.  
> Desensitization logic:
>
> - `@SensitiveField`The interceptor will perform desensitization on the annotated fields in the entity LoginUser .
> - Method return value type support `LoginUser`Also supports `List<LoginUser>`

3.  Desensitized data type  
    data processing rules support: `加密处理、用户名称格式化、身份证号码格式化、邮件电话格式化等`  
    Syntax: field annotation @SensitiveField attribute type, the default is encode (encryption processing), such as:

```
/**
 * 登录人密码
 */
@SensitiveField(type = SensitiveEnum.ENCODE)
private String password;

/**
 * 电子邮件
 */
@SensitiveField(type = SensitiveEnum.EMAIL)
private String email;

/**
 * 电话
 */
@SensitiveField(type = SensitiveEnum.MOBILE_PHONE)
private String phone;
```

copy

For more information, see enumeration class: org.jeecg.common.desensitization.enums.SensitiveEnum

#### 2.3 Decryption Annotation Usage

> Note: After desensitizing and encrypting the data, jeecgboot also provides a decryption annotation to restore the real data.  
> Syntax: Adding the annotation @SensitiveDecode to the method means that the return value of the method will be decrypted.

```

@SensitiveDecode
public LoginUser getUserByName(String username) {
   LoginUser user = sysUserService.getEncodeUserInfo(username);
   return user;
}

```

copy
