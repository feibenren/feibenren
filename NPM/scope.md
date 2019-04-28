---
title: scope
categories: 
- NODEJS
---
# scope

When you sign up for an npm user account or create an Org, you are granted a scope that matches your user or Org name. You can use this scope as a namespace for related packages.

在注册的时候，npm就授权了和自己的用户名或组织名称相同的scope

使用scope可以创建和别人同名的package

# 创建

使用npm cli
```
 npm init --scope=@feibenren
```
或者直接修改package.json文件

将名称修改为`@feibenren/xxx`

# 发布

使用scope默认是private的，需要手动设置为public
```
 npm publish --access public
```

> 发布的时候会检测scope是否是用户名或组织名，如果不是，就会发布失败