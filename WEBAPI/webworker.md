---
title: webworker
categories: 
- HTML5
---

# worker

这个过程中数据并不是被共享而是被复制。



一个专用worker仅仅能被生成它的脚本所使用


而在worker线程中，workers 也可以调用自己的 close  方法进行关闭：

close();















js是单线程的，这样做历史原因很多

但是，这样做其实是有很多问题的，比如:

- 大批量计算
- 无法利用多核cpu

node给出了解决方式就是 child_process,cluster,可以实现多线程开发

浏览器端给出的就是html5推出的 **web workers**，也实现了多线程运行

# 主线程

多线程开发，自然就有一个问题，**主线程**和 **子线程** ，主线程控制子线程

主线程就是之前运行的线程，在主线程中创建子线程

在浏览器中，子线程都是写在一个单独的js文件中的

示例:
```
var worker = new Worker("scripts/worker.js");
```
主线程通过 `Worker`构造函数来生成 **代表子线程的一个对象**，通过该对象，可以给子线程发送数据，监听子线程的返回数据，杀死子线程等功能

```
//向worker发送信息
var post_data = {
  type: "add",
  data: 111
};
worker.postMessage(post_data);
//主线程监听子线程发送的消息
worker.onmessage=(e)=>{
    console.log(e.data);
}
//主线程监听子线程是否报错
worker.onerror=function(e){
    console.log(e.message);
}
//关闭子线程
worker.terminate();
```

# 子线程

子线程就是主线程创建的时候传递给构造函数的js文件，子线程代码写在该文件中

在node中，子线程机会没有什么限制，但是在浏览器端，考虑到安全性，需要做限制

- 同源限制(必须和主线程同源)
- 不能操作DOM(也就是说，document对象不能用),alert(),confirm()方法无法使用
- 主线程和子线程通信只能通过消息完成
- 不能读取本地文件

> 简单说，worker线程,得是安全的，并且不能操作dom

子线程--->主线程通信，与 主线程---->子线程通信，用的方法是一样的

worker.js

```
// self.onmessage=function(){}
var worker_data = "worker_data";
//子线程向父线程发送消息
self.postMessage(worker_data);
//自己关闭自己
self.close();
```


# 用途

用途应该很广，但是到现在没发现大规模使用的场景
















# 链接
- [https://wangdoc.com/javascript/bom/webworker.html](https://wangdoc.com/javascript/bom/webworker.html)
- [https://www.ibm.com/developerworks/cn/web/1112_sunch_webworker/](https://www.ibm.com/developerworks/cn/web/1112_sunch_webworker/)