---
title: FUNCTION
categories: 
- ECMASCRIPT
---

# Function

函数本身的基本作用就是`可重复使用的代码片段`

如C语言中的函数，就提供了这个基本功能

js还为函数添加了`构造函数`的功能，可以成为一个对象的生成器


这里只说function当做一个全局对象来说

# 绑定切换this

function.prototype本身没有提供其他功能，主要的功能就是固定this

函数中的this，是js在运行的时候，根据函数的`执行上下文`决定的

function提供了三个方法，来固定function中的this

- Function.prototype.call(thisArg,arg1,arg2...)
- Function.prototype.apply(thisArg,[arg1,arg2...])
- Function.prototype.bind(thisArg,arg1,arg2...)


### Function.prototype.call(thisArg,arg1,arg2...)
使用指定的this和参数来调用对应的函数
### Function.prototype.apply(thisArg,[arg1,arg2...])
和call一样，只是参数是一个数组
### Function.prototype.bind(thisArg,arg1,arg2...)

bind方法和上面的两个方法完全不一样，上面两个方法是调用函数

bind的方法是创建并返回一个新函数，并绑定新函数的this值

> args是当目标函数被调用时，预先添加到绑定函数的参数列表中的参数

```
var obj1={
  name:1,
  say(arg1,arg2,arg3){
    console.log(this);
    console.log(arg1,arg2,arg3);
  }
}
var new_fn=obj1.say.bind(obj2,1,2);
new_fn(4);//1 2 4
```


