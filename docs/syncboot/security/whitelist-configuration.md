---
order: 2
---

# Whitelist configuration

## Preface

In our system, we provide many functions that allow users to customize SQL statements, such as **configuring SQL for online reports** and **configuring query fields for dictionary components** .  
These customized SQL or configured query fields may lead to sensitive data leakage.  
Although this problem can be avoided by configuring a blacklist, it cannot ensure that all sensitive tables or fields are included.  
Therefore, we recommend that you configure a whitelist to limit the tables and fields that can be queried.

> Note: This whitelist configuration applies to `online报表`, `online图表`and other table dictionary query components.

## Configuration

### 1\. Automatic Configuration

In the development environment, you can `lowCodeMode`set to `dev`. In this way, if there are tables or fields that are not included in the whitelist when you execute a query statement, the system will automatically add them to the database and configure them as whitelisted.

![Configuration diagram](/images/45e1c9d19a23761f38f56644b1ae3d5983c20c48236a9b853b0231e41763b83e.png)

### 2\. Manual Configuration

This project provides an interactive interface for manually configuring whitelists. You can `系统管理 --> 表白名单配置`access and manage them.

> Please note: Table names in the whitelist must be unique. If there are duplicate table names, you can edit the relevant records. If you need to configure multiple field names, please use half-width commas to separate them.

![Configuration interface](/images/aee9aa14a61bd1c3ceb801329689b656d0db6c03510a780e476b4e1beeaa0933.png)  
![Add whitelist configuration example](/images/237b35437be2c1ebd76c6afb18952e31b19634c735a3e55769c36b552a2252cf.png)
