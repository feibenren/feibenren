---
title: window
categories: 

- JAVASCRIPT


---

```
var a=111;
console.log(window.a)
```
如果在浏览器中，会输出什么？
undefined?   111?
会输出111
由于window 对象同时扮演着ECMAScript 中Global 对象的角色，因此所有在全局作用域中声明
的变量、函数都会变成window 对象的属性和方法


```
var a=111;
console.log(global.a)
```
如果是nodejs环境中呢？？？？
**会报错**

为什么呢？
很简单
按照 ECMAScript 的定义，满足以下条 件的变量是全局变量
- 在最外层定义的变量；
- 全局对象的属性；//setinterval,console等
- 隐式定义的变量（未定义直接赋值的变量）。//__dirname,__filename等


需要注 意的是，在 Node.js 中你不可能在最外层定义变量，因为所有用户代码都是属于当前模块的， 而模块本身不是最外层上下文。



----------
出现这种差别的原因就在于nodejs是有模块系统的，申明的变量，都是当前模块的变量，不是全局变量
而浏览器端不是这种情况

[http://www.runoob.com/nodejs/nodejs-global-object.html](http://www.runoob.com/nodejs/nodejs-global-object.html)

