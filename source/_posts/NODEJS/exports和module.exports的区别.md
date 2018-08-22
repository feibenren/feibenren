---
title: exports和module.exports的区别
categories:
  - NODEJS
---

# 不可以直接对 exports 赋值

```
exports = {
    hello: hello,
    greet: greet
};//错误的
```

```
exports.hello = hello;
exports.greet = greet;
//正确的
```

以 node 举例

node 中实现了 commonjs 规范，怎么实现的呢

```
(function(exports, require, module, __filename, __dirname) {
  var math = require("math");
  exports.area = function(radius) {
    return Math.PI * radius * radius;
  };
});

```
简单来说，类似这样
exports,module，require，这些对象都是当作函数的参数来导入的，所以，在模块中，我们可以直接使用这些 **形参**

node中规定，exports对象的上的属性，就是该模块导出的内容

ok

假如我给函数的参数直接赋值，会怎样?

```
var change = function(a) {
  a = 100;
  console.log(a); // => 100
};
var a = 10;
change(a);
console.log(a); // => 10

```
可以看到，在模块中无论如何赋值，在模块外，都是无法获得修改后的数值的

为什么module.exports可以直接赋值

两个原因

1: node中还做了这样的一步 `module.exports=exports`,所以可以通过`module.exports`来获得导出的内容
2:`module.exports`修改的是形参的属性,如下:
```
var change = function(a) {
  a.num = 100;
};
var a = {};
change(a);
console.log(a); // => { num: 100 }

```
这样就可以实现在模块内修改参数的属性，在外部就可以获得到修改后的内容


[参考链接](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001434502419592fd80bbb0613a42118ccab9435af408fd000)
