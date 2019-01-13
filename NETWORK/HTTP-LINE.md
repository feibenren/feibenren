---
title: HTTP-LINE
categories:
- NETWORK
---

# HTTP-LINE

这里的HTTP-LINE 指的是http请求、响应的第一行

http-line是http表示的`基础功能`，http-headers这些东西可以一个不要，但是http-line必须携带

# REQUEST LINE
```
GET /XXX/index.html  HTTP/1.1
```
格式是`方法 地址 协议版本`

1.1的方法常见的有

- GET：表示获取
- POST:表示添加
- PUT:表示修改
- DELETE:表示删除


# RESPONSE LINE
```
HTTP/1.1 200 OK
```
格式:`版本  状态码  状态描述`

不同的状态码由不同的状态描述，共同描述了这次响应的结果

### 状态码 & 状态描述

状态码很多，可以分为

- 1xx:消息
- 2xx:成功
- 3xx:重定向
- 4xx:客户端错误
- 5xx:服务器错误

# 总结
可以看到，只有着两个line，就可以实现了http的基本通信


