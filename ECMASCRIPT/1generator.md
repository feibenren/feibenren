---
title: generator
categories:
  - ECMASCRIPT
---

# generator

gengerator 是可以产生一些列值的'机器',通过它可以解决异步问题

# 语法

### gengerator

```
function* G(){
    yield 1;
    yield 2;
    yield 3;
}
let g=G();
```

- function\*，用来区分普通函数和 generator
- yield 关键词，运行到这里，会暂停
- 和普通函数一样执行，普通函数得到的运行结果，而 gengerator 运行得到的是一个状态机

## next()

```
let g=G();
```

这样得到的仅仅是一个状态机，但是不会执行任何代码，没有任何结果

如果想要获得这个机器里面的各种状态，需要使用 next()方法

```
g.next();//{ value: 1, done: false }
```

这样就可以得到第一个状态的数值，只不过返回的不是具体数值，是包装过的对象

以此类推，可以逐个得到状态机中的每个数值

```
function* G() {
  yield 1;
  yield 2;
  yield 3;
}
let g = G();
let r1 = g.next();//{ value: 1, done: false }
let r2 = g.next();//{ value: 2, done: false }
let r3 = g.next();//{ value: 3, done: false }
let r4 = g.next();//{ value: undefined, done: true }
```

next 方法可以传递参数,这个参数表示 **上一个** yield 表达式的返回值

```
function* G() {
  yield 1;
  let val=yield 2;//执行第二个next()的时候，仅仅是返回2，没有赋值val
  console.log(val);
  yield 3;
}
let g = G();
let r1 = g.next();
let r2 = g.next();
let r3 = g.next('arguments');//gengerator中的`yield 2`会整体替换成传递的参数
let r4 = g.next();
console.log(r1,r2,r3,r4);
```

通过这种形式，可以人为控制 gengerator 中生成的状态

## 自动执行 next()

可以使用遍历器遍历

```
var myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

for(let val of myIterable){
  
}

```

## generator解决异步问题

如果仅仅是产生一些的值，那么也没有多大的意义

generator可以配合promise，实现异步编程

```
function* G() {
  yield axios.get("http://www.baidu.com");
  yield axios.get("http://www.taobao.com");
  yield axios.get("http://www.tmall.com");
}
let g = G();

let baidu = g.next();
baidu.then(res => res.text()).then(baidu_data => {
  console.log(baidu_data);
  g.next(res2 => {
    //get taobao data
    ...
    g.next(res3=>{
        //get tmall data
    })
  });
});
```
可以看到，yield返回的都是promise

在第一个promise的状态变成resolve的时候，执行next方法，获取taobao数据，以此类推，就可以实现异步编程，但是then的嵌套还是有问题


修改一下

```
function* G() {
  yield axios.get("http://www.baidu.com");
  yield axios.get("http://www.taobao.com");
  yield axios.get("http://www.tmall.com");
}

function my_run(G) {
  let g = G();
  function next() {
    let val = g.next();
    if (val.status) {
      return val.value;
    }
    val.value.then(data => {
      next(data);
    });
  }
  next();
}
my_run(G);
```
以上函数，可以使得gengerator自动执行

`co`模块是广泛使用的自执行库


# async & await

co,gengerator,promise的配合使用，比较完美的解决了异步编程问题

es2017将这种模式进一步简化

```
async function G() {
  let baidu = await axios.get("http://www.baidu.com");
  let taobao = await axios.get("http://www.taobao.com");
  let tmall = await axios.get("http://www.tmall.com");
}
G();
```
- async:表明async函数
- await:功能和yield一样
- 内置执行器:async 函数不需要自动执行库了，内置了
- 返回值是 Promise
- 执行async和普通函数一样


> async function被视为终极异步编程解决方案


# 思考

### gengerator为什么可以封装异步任务

异步任务的解决方案，有
- callback:基础
- promise:then()中传递异步任务


Generator 函数可以暂停执行和恢复执行，这是它能封装异步任务的根本原因


yield 语句运行的时候是同步运行，而不是异步运行（否则就失去了取代回调函数的设计目的了）。实际操作中，一般让 yield 语句返回 Promises 对象。

async 函数返回一个 Promise 对象，可以使用 then 方法添加回调函数。当函数执行的时候，一旦遇到 await 就会先返回(**会返回什么东西吗，还是干等着**)，等到异步操作完成(**如何判断异步操作完成**)，再接着执行函数体内后面的语句。

# await:如何判断异步操作完成?

自己理解:await 后面跟着的是一个 promise 对象，这个对象的 resolve 方法执行完成，就表示异步操作执行完成了，话句话说，await 后面只有一个回调函数，不能有多个，这样起始很好，避免了回调的嵌套

# await 返回的结果，到底是什么

resolve 方法，传入的参数的第一个

# await 后面到底跟的是个什么东西？

await 命令后面，可以是 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时等同于同步操作）。

# async await 返回的都是 promise

## async 函数完全可以看作多个异步操作，包装成的一个 Promise 对象，而 await 命令就是内部 then 命令的语法糖。

## 正常情况下，await 命令后面是一个 Promise 对象。如果不是，会被转成一个立即 resolve 的 Promise 对象。

## 只要一个 await 语句后面的 Promise 变为 reject，那么整个 async 函数都会中断执行。
