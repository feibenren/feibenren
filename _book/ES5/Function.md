---
title: Function
categories: 
- ES5
---

# Function
在js中function的功能远远不止函数那么简单，它所代表的内容很多，比如
函数，方法，构造函数，块级作用域等等功能，很复杂

# 变量提升
在js中规定，函数中的变量在整个函数体内始终是可见的,也就是说，只要申明了一个变量，即使在之前也可以使用，这就叫做 **变量提升**
同样，对于内容的函数，也是始终可见的
所以
```
function test(){
    test2();//正常执行
    console.log(a);//undefined
    var a=1;
    function test2(){}
}
```

# 函数作用域
在js中规定，声明的全局变量，都是全局对象的一个属性,如
```
var a=1;
console.log(window.a);//1
```
那么对于一个函数呢,也存在这样一个和该函数相关的'全局变量'，这个变量就是调用对象/声明上下文,但是这个对象我们在js中是无法得到的，它是内部实现
我们可以模拟这个对象
```
function test(arg1) {
  var a = 1;
}
//类似这么个意思
var obj = {
  test: {
    a: 1,
    arg1: null,
    global: {},
  }
};
```

## 函数作用域链
当函数套函数的时候，就会有这么个形式
```
function test(arg1) {
  var a = 1;
  function test2(arg2) {
    var b = 1;
  }
}
var chain = {
  test: {
    a: 1,
    arg1: null,
    global: {},
    test2: {
      b: 1,
      arg2: null,
      global: {}
    }
  }
};

```
这样就形成了一个链条，一环套一环





