---
title: promise
categories: 

- ES6


---


# 如何执行异步代码？



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

```
p.then().then()
//虽然then返回的是一个promise，但是头一个then返回的promise没有设定resolve，reject，所以，第一个then执行完成后，第二个then会立即执行
//如何实现第一个then里面函数执行完成后过一段时间再执行第二个then呢？再第一个then里面继续返回一个自己设定的promise
```

**第一个回调函数完成以后，会将返回结果作为参数，传入第二个回调函数**


# 缺点
- 无法取消Promise
- 如果不设置回调函数，Promise内部抛出的错误
- 当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）



# then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行


# Promise.prototype.catch()
Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数。
**他捕获的是promise里面的错误，还是then里面的错误**:都捕获，但是需要注意的是，如果一个地方报错停住了，then里面的resolve代码就不会执行了，


```
getJSON('/post/1.json').then(function(post) {
  return getJSON(post.commentURL);
}).then(function(comments) {
  // some code
}).catch(function(error) {
  // 处理前面三个Promise产生的错误
});

```

上面代码中，一共有三个 Promise 对象：一个由getJSON产生，两个由then产生。它们之中任何一个抛出的错误，都会被最后一个catch捕获。

一般来说，不要在then方法里面定义 Reject 状态的回调函数（即then的第二个参数），总是使用catch方法。

跟传统的try/catch代码块不同的是，如果没有使用catch方法指定错误处理的回调函数，Promise 对象抛出的错误不会传递到外层代码，即不会有任何反应。

Promise 内部的错误不会影响到 Promise 外部的代码，通俗的说法就是“Promise 会吃掉错误”。



一般总是建议，Promise 对象后面要跟catch方法，这样可以处理 Promise 内部发生的错误。catch方法返回的还是一个 Promise 对象，因此后面还可以接着调用then方法。


# Promise.all([p1,p2,p3]):将多个promise包装成一个promise,所有子promise resolve/reject，才会then
# Promise.race([p1,p2,p3]):将多个promise包装成一个promise,只要有一个primise resolve/reject,就会then
# Promise.resolve():将普通对象转化为promise对象
 ```
 Promise.resolve('foo')
// 等价于
new Promise(resolve => resolve('foo'))
 ```
# Promise.reject():返回一个新的 Promise 实例，该实例的状态为rejected。