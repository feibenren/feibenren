---
title: promise
categories: 
- ES6
---


# promise
异步函数的编程麻烦，社区出现了很多解决方案，promise就是其中一个，后被写入标准

promise是一种 **代码结构**，可以使得异步代码更简洁，可维护

# 语法

```
//创建一个构造函数
let p=new Promise((resolve,reject)=>{
  if(true){
    resolve();
  }else{
    reject();
  }
});
```
Promise构造函数的参数是一个函数，该函数的两个参数是系统提供的，这两个参数是两个函数，执行第一个参数函数，可以使该promise状态由pending->resolved,如果执行了第二个参数，那么promise的状态由pending->rejected


# Promise.protype.then(resolve,reject?)

promise中意义最大的就是可以改变 **回调地狱**,以前需要通过回调函数传 **‘下一步’**，而promise则可以通过 **then来传递‘下一步’**

promise中的执行不同的参数函数，只是改变了状态，但是状态的改变会有什么影响？

影响出现在then函数中:

then函数接收两个参数函数，如果promise的状态是resolved,那么then就会执行第一个函数，如果rejected，那么then就会执行第二个函数(绝大多数情况下，不传递第二个参数，有更好的解决方法:catch)



# Promise.protype.catch(err)

promise中如果出现了错误，可以使用`p.then(null,reject)`来捕获错误，而catch就是其简写方法，这样意图更明确

但是这个地方需要注意的是，catch不仅仅捕获rejected错误，而且捕获常规错误,这可能会给排查错误带来麻烦

```
let p=new Promise((resolve,reject)=>{
  wrong_code;
})
p.catch(err=>{
  console.log(err)
})
```

# Promise.protype.finally()
无论如何都会执行的函数，其实就相当于 `then(fn,fn)`,es2018引入



# 链条




注意，then,catch方法都返回原来的promise对象，因此可以链式使用


# 组合 

then,catch,finally这三个基本的方法就是promise的基本


还有很多其他常见情况，promise也有对应的解决方案

#### Promise.all([p1,p2,p3]),Promise.race([p1,p2,p3])

这两个方法会返回一个新的promise，表示组合的promise

两者的区别在于，
- all:所有的状态都resolved，那么新的promise才是resolved，如果有一个rejected，那么这个新的promise，就是rejected,**也就是数组中所有的promise都执行完毕，才会确定新promise的状态**
- race:和all的逻辑不同，新的promise的状态和数组中的第一个改变状态的promise相同,**也就是说，数组中的promise第一个状态改变，就可以确定新的promise的状态**

# 直接获得状态确定的promise:



其实还有一种需求:如果一个函数默认返回promise，那么在错误的时候，也应该返回rejected的promise,这样方便初处理，示例：

```
function loadImg(url){
  if(!url){
    return Promise.reject(e)
  }
  return new Promise()
}
```
同样，有时候我们也需要返回直接resolved的promise

```
function loadImg(url_obj){
  if(url_obj.is_loaded){
    return Promise.resolve(url.src);
  }
  return new Promise();
}
```

使用Promise.resolve(),Promise.reject()这两个函数实现以上功能




# 弊端

- 一旦在一个地方使用了promise，那么可能整段代码，整个项目都需要使用promise

- catch捕获所有的错误，不分rejected和常规错误

- promise不适合长组合的太长，这样逻辑会很混乱，如果处理的逻辑很复杂，最好就是分成小的部分







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