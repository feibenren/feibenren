---
title: net
categories:
- NODEJS
---
# net

The net module provides an asynchronous network API for creating stream-based TCP or IPC servers (net.createServer()) and clients (net.createConnection()).

net模块提供了异步的，基于stream的网络接口，包括TCP服务器`通过net.createServer()创建爱你`和客户端`net.createConnection()`

net模块还支持`进程间通信`,也就是本地套接字

# Class: net.Server

This class is used to create a TCP or IPC server.

这个类用来创建一个tcp或ipc服务器

## 事件

- Event: 'close'
- Event: 'connection'
- Event: 'error'
- Event: 'listening'


## 属性
- server.listening
- server.maxConnections
- server.ref()
- server.unref()
- 
- 
- 
## 方法
- server.address()
- server.close()
- server.listen()
- server.getConnections(callback)
- server.ref()
- server.unref()


# Class: net.Socket

This class is an abstraction of a TCP socket or a streaming IPC endpoint 

这个类是一个tcp socket或者是ipc的节点

简单说就是TCP的客户端，或者是IPC的客户端


# 总结

net模块是对TCP的服务器和客户端的封装

net模块是基于stream和EventEmitter的

并且可以实现本地的IPC通信

