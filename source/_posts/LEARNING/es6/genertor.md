---
title: genertor
categories: 
- LEARNING
- ES6
tags:
- js
- es6
---


Generator 函数可以返回一系列的值，因为可以有任意多个yield。从另一个角度看，也可以说 Generator 生成了一系列的值，这也就是它的名称的来历（英语中，generator 这个词是“生成器”的意思）。


Generator 函数将异步操作表示得很简洁，但是流程管理却不方便


async函数返回一个 Promise 对象，可以使用then方法添加回调函数。当函数执行的时候，一旦遇到await就会先返回(**会返回什么东西吗，还是干等着**)，等到异步操作完成(**如何判断异步操作完成**)，再接着执行函数体内后面的语句。

# await:如何判断异步操作完成?
自己理解:await后面跟着的是一个promise对象，这个对象的resolve方法执行完成，就表示异步操作执行完成了，话句话说，await后面只有一个回调函数，不能有多个，这样起始很好，避免了回调的嵌套

# await返回的结果，到底是什么
resolve方法，传入的参数的第一个

# await 后面到底跟的是个什么东西？
await命令后面，可以是 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时等同于同步操作）。


# async await 返回的都是promise



## async函数完全可以看作多个异步操作，包装成的一个 Promise 对象，而await命令就是内部then命令的语法糖。


## 正常情况下，await命令后面是一个 Promise 对象。如果不是，会被转成一个立即resolve的 Promise 对象。

## 只要一个await语句后面的 Promise 变为reject，那么整个async函数都会中断执行。