---
title: 浏览器内核
categories: 
- BROWSER
---

# base

浏览器的render进程 也被称为`浏览器内核`,功能复杂，实现更复杂

其实内核做的就是两件事:`排版和渲染`

所以也被称为`排版引擎`,`渲染引擎`

这个内核，现在最著名的有`webkit`，还有其他很多


# 架构

render进程内部是多线程的，常见的有

- GUI线程:解析，绘制，html和css
- js引擎线程:负责处理js脚本,也成为js内核，比如chrome的V8
- 事件触发线程
- 定时器线程
- 异步http请求线程

这里的GUI线程和js引擎线程是互斥的，一个运行，另一个就必须挂起

# 运行流程

- Browser 进程发送请求后，新建render进程，render进程接手
- 收到接收到的数据(html)后，交由GUI线程进行解析，渲染
- GUI解析到资源文件(img,css,js等),一个资源对应新建一个请求线程，发送请求





# 链接
- [https://mp.weixin.qq.com/s/whtgk3LShhgEhF5pMEpfYw](https://mp.weixin.qq.com/s/whtgk3LShhgEhF5pMEpfYw)