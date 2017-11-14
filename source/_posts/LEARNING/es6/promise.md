---
title: promise
categories: 
- LEARNING
- ES6
tags:
- js
- es6
---

浏览器端的异步操作的常见情况
- 定时器
- ajax加载数据




# Promise对象是一个构造函数，用来生成Promise实例

**所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果**

**从语法上说，Promise 是一个对象，从它可以获取异步操作的消息**


Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。它们是两个函数，由 JavaScript 引擎提供，不用自己部署。


# Promise.prototype.then()
**它的作用是为 Promise 实例添加状态改变时的回调函数**

then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。因此可以采用链式写法，即then方法后面再调用另一个then方法

第一个回调函数完成以后，会将返回结果作为参数，传入第二个回调函数


# 缺点
- 无法取消Promise
- 如果不设置回调函数，Promise内部抛出的错误
- 当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）


