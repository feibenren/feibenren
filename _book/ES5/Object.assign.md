---
title: Object.assign
categories: 

- ES5


---

#对象的复制，需要用到这个东西
用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
语法：Object.assign(target, ...sources)，返回值是组合后的目标对象
```
var obj1={
    username:'wang'
};
var obj2=Object.assign({},obj1,{sex:"nan"});
```



