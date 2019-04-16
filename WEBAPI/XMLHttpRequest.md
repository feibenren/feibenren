---
title: XMLHttpRequest
categories: 
- WEBAPI
---

# XMLHttpRequest
XMLHttpRequest是一个浏览器的api，用来发送http请求

应该叫做`HttpRequest`更合适

# 构造方法

- XMLHttpRequest()
构造函数初始化一个 XMLHttpRequest 对象

> 构造函数仅仅是创建了一个xhr对象，其他的什么都不干

# 属性
- XMLHttpRequest.onreadystatechange
- XMLHttpRequest.readyState
- XMLHttpRequest.timeout:设置超时时间
- XMLHttpRequest.response 
- XMLHttpRequest.responseText
- XMLHttpRequest.responseType
- XMLHttpRequest.responseURL
- XMLHttpRequest.responseXML
- XMLHttpRequest.status:返回状态码
- XMLHttpRequest.statusText :状态码描述
- XMLHttpRequest.withCredentials

# 方法
- XMLHttpRequest.abort()
- XMLHttpRequest.getAllResponseHeaders()
- XMLHttpRequest.getResponseHeader()
- XMLHttpRequest.open()
- XMLHttpRequest.send()
- XMLHttpRequest.overrideMimeType()
- XMLHttpRequest.setRequestHeader()




# XMLHttpRequest.open()

初始化一个请求

```
xhrReq.open(method, url);
xhrReq.open(method, url, async);
xhrReq.open(method, url, async, user);
xhrReq.open(method, url, async, user, password);
```

# XMLHttpRequest.send()

发送请求

```
void send();
void send(ArrayBuffer data);
void send(ArrayBufferView data);
void send(Blob data);
void send(Document data);
void send(DOMString? data);
void send(FormData data);
```

# XMLHttpRequest.readyState

xhr中`最重要`的一个属性，表示的是`xhr的状态`

- 0:UNSENT，xhr被创建(new XMLHttpRquest())
- 1:OPENED，xhr被初始化(xhr.open())
- 2:HEADERS_RECEIVED，xhr发送了请求并且response headers已经被接收完毕
- 3:LOADING，xhr接收response body数据
- 4:DONE，xhr接收完数据

# xhr流程

从readyState可以看到xhr的整个流程:

- `var xhr=new XMLHttpRequest()`,创建对象
- `xhr.open()`,xhr初始化
- `xhr.send()`,xhr发送请求




# links

- [https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
