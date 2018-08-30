---
title: express
categories: 
- PACKAGE
- NODEJS

---

# express

# 中间件执行流程

```
app.get('*',function (req,res,next) {
  console.log(2222);
  next();
  console.log(33333);
});


app.get('/',function (req,res,next) {
  console.log(44444)
  res.send('hahaha');
  console.log(55555);
  // next();
});
```
输出循序：2,4,5,3;
洋葱模型


# 练手项目

[gitee.com/feibenren/express_demo](gitee.com/feibenren/express_demo)


通过这项目，发现了一些问题
1、mysql数据库不怎么好用
2、就一个基本的框架，其他的东西都得自己写
3、回调
