---
title: express
categories:
  - PACKAGE
  - NODEJS
---

# express
express是基于nodejs的http框架
# 基本思想
使用nodejs生成一个服务器，非常简单

但是难在如何针对不同的url做出不同的相应操作

nodejs的思路是:

将具体的响应操作分成一个一个的小模块，比如处理querystring的可以当做一个模块

处理cookie的当做另外一个模块，如果一个请求中，需要处理cookie，则调用该模块，如果不需要，就不调用该模块

一个一个的模块，就可以组成一个`模块序列`，在express中，就是中间件

示意图:

```
------>http request1----->[mod1,mod2]-------->http response----->

------>http request2----->[mod3,mod4]-------->http response----->

------>http request3----->[mod1,mod4]-------->http response----->
```

按照这个思路，其实只需要实现类似的结构

```
var routes={
  url1:[fn1,fn2],
  url2:[fn3,fn4]
}
```
当匹配到url后，顺序执行对应的`函数队列`即可

# 简单实现

[https://gitee.com/feibenren/myexpress](https://gitee.com/feibenren/myexpress)

