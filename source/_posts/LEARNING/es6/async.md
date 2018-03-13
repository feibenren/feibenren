---
title: async
categories: 
- LEARNING
- ES6
tags:
- js
- es6
---

# async，异步编程的终极解决方案
本质上就是gengerator的语法糖，可有可无
但是，只有gengerator的话，非常难以使用，需要配合很多第三方的库才可以让generator自动执行，很麻烦

使用了async的话，自带自动执行，无需其他插件，易用性上远远胜过gengerator原生功能

# 四大特点
- 内置执行器
- 更好的语义
- 更广的适用性
- 返回值是 Promise

**最主要的其实就是自动执行的功能**

```

function fn1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(444);
      resolve(444);
    }, 3000);
  });
};


function fn2() {
  return 555;
};


async function test() {
  console.log(333);
  let val1=await fn1();
  console.log(val1);
  let val2=await fn2();
  console.log(val2);
  console.log(6666);
}

test();

//333 3s 444 444  555 666

```

1、执行流程
```
test();//开始执行
```
2
```
 console.log(333);
```

3
```
 let val1=await fn1();//fn1，返回的是一个promise，只有当这个promise状态发生变化的时候，也就是resolve的时候，resove传入的参数，就是val1的数值，这样，所有的异步操作就可以放到fn1里面就可以，
```
省略.......

4
```
let val2=await fn2();
//fn2函数返回的就是一个普通的数值，那么val2就会得到这个函数的返回值，其实这样的话，就相当于同步操作了，没什么意义了
```
省略.......



# await 得到的是什么？

正常情况下，await命令后面是一个 Promise 对象。如果不是，会被转成一个立即resolve的 Promise 对象。


# 使用注意点
await 后面一般是promise，如果reject了，怎么办？？？

最好把await命令放在try...catch代码块中

