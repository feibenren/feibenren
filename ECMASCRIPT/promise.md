---
title: promise
categories: 
- ECMASCRIPT
---


setTimeout()无法捕捉错误


# 回调地狱

promise主要的作用就是解决`回调地狱`

Promise 对象用于`表示一个异步操作的最终状态`（完成或失败），以及该异步操作的结果值。

Promise 本质上是一个绑定了回调的对象，而不是将回调传进函数内部。


# 运行机制

这个和`event loop`有关

- 主线程执行代码，遇到promise的时候，会执行`exector function`
- exector function中的异步操作交由对应的webapi线程来执行
- webapi线程线程处理完异步代码后,根据执行的是resolve还是reject function，将then注册的对应的函数放入`micro task queue`
- 主线程执行完同步代码后，读取task queue，开始执行回调


# Promise

promise对象由两部分组成

- 状态
- promiseValue

-------------

promise对象有三种状态

- pending:初始状态
- fullfilled:成功状态
- rejected:失败状态

promise状态可以改变，但是只有两种情况

- pending---->fullfilled
- pending---->rejected

-------------------

promise中还有一个概念，就是`promiseValue`

他会按照以下的规定进行`设置`

- 默认值:`undefined`

- exector function resolve/reject的参数,会被设置为promiseValue

- then中回调函数的返回值,被设置为promiseValue

---------------------

> promise中提供的所有方法和这两个概念相关


相关方法

- new Promise()
- Promise.prototype.then()
- Promise.prototype.catch()
- Promise.prototype.finaly()
- Promise.resolve()
- Promise.reject()
- Promise.all()
- Promise.race()



# new Promise()

创建一个promise，需要通过构造函数来实现

```
new Promise( function(resolve, reject) {...} /* executor */  );
```

构造函数需要一个`参数函数`，这个`参数函数可以修改promise自身的状态`

参数函数也需要两个参数函数：resovle，reject

如果执行了`relove()`,会导致promise状态`pending-->fullfilled`

执行`reject()`,会导致promise状态`pending--->fullfilled`


并且promiseValue会被设置为这两个函数的参数

# Promise.prototype.then(fulfillment,[rejection])

promise中最重要的方法，`绑定回调函数`

> 添加fulfillment回调和rejection回调到当前 promise, 并且返回一个`新的promise`

then方法就是添加两种状态的回调，这个没什么好说的，有意思的是`then()`的返回值

then的返回值是一个新的promise

新的promise也需要从两个方面说，`状态`和`promiseValue`


-------------

new promise的状态，分为以下几种情况:

- 回调函数运行出错，new promise状态是`rejected`

- 回调函数运行不出错，并且返回一个promise，新promise的状态和返回的promise状态保持一致

- 回调函数运行不出错，返回一个非promise，新的promise的状态是`fullfilled`

---------------------
new promise的value

则是then中的回调函数的返回值设置的


# Promise.prototype.catch()
catch()是`Promise.prototype.then(null,fn)`的简写
# Promise.prototype.finaly()
finaly()是`Promise.prototype.then(fn,fn)`的简写
# Promise.resolve()
创建一个`fullfilled`状态的promise，promiseValue是其参数
# Promise.reject()
创建一个`rejected`状态的promise，promiseValue是其参数
# Promise.all()
创建一个promise

Promise.all()的参数是一个部署了iterable的对象

当所有的item的状态`都改变`为fullfilled的时候，新的promise的状态就是fullfilled，否则是rejected

新的promise的value，由所有的fullfilled的item组成，是一个数组

# Promise.race()
race()和all()相反

新对象由第一个状态改变的item决定


# 链式调用
promise提供的所有方法，都是创建一个新的promise，也就可以实现链式调用了


# 链接
- [https://github.com/mattdesl/promise-cookbook/blob/master/README.zh.md](https://github.com/mattdesl/promise-cookbook/blob/master/README.zh.md)


























# 如何用原生js模拟promise???






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