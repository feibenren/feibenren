---
title: http
categories:
  - NODEJS
---
# HTTP
http模块是nodejs中负责http协议的模块
# 运行机理
http协议本质上是socket通信

nodejs在内部维护了一个`SOCKET连接池`,由`http.Agent`维护

这些socket连接，会根据`keepAlive`来确定销毁还是放入连接池中

# Class: http.Agent

- new Agent([options])
- agent.createConnection(options[, callback])
- agent.keepSocketAlive(socket)
- agent.reuseSocket(socket, request)
- agent.destroy()
- agent.freeSockets
- agent.getName(options)
- agent.maxFreeSockets
- agent.maxSockets
- agent.requests
- agent.sockets


## new Agent([options])

options:

- keepAlive <boolean> Keep sockets around even when there are no outstanding requests, so they can be  used for future requests without having to reestablish a TCP connection. Default: false.
- keepAliveMsecs <number> When using the keepAlive option, specifies the initial delay for TCP Keep-Alive packets. Ignored when the keepAlive option is false or undefined. Default: 1000.
- maxSockets <number> Maximum number of sockets to allow per host. Default: Infinity.
- maxFreeSockets <number> Maximum number of sockets to leave open in a free state. Only relevant if keepAlive is set to true. Default: 256.
- timeout <number> Socket timeout in milliseconds. This will set the timeout after the socket is connected.

从参数可以看到，http.Agent负责维护tcp request pool

其对象所拥有的方法基本上是`net模块`的方法的实现


# Class: http.ClientRequest

This object is created internally and returned from `http.request()`. It represents an in-progress request whose header has already been queued.

http.ClientRequest这个对象是内部生成的，并且通过`http.request()`这个方法返回的

表示的是一个`正在进行的请求对象`

To get the response, add a listener for 'response' to the request object. 'response' will be emitted from the request object when the response headers have been received. The 'response' event is executed with one argument which is an instance of http.IncomingMessage.


为了得到response，需要添加一个`response`事件handler到request对象上

response对象会在响应http的headers都收到之后触发

response事件触发后，会给hanlder传递一个`http.IncomingMessage`的实例，这个实例表示response

## 事件

- abort
- connect
- continue
- information
- `response`
- socket
- timeout
- `upgrade`


## 属性

- request.finished
- request.maxHeadersCount
- request.socket


## 方法
- `request.end([data[, encoding]][, callback])`
- request.flushHeaders()
- request.getHeader(name)
- request.setHeader(name, value)
- request.setTimeout(timeout[, callback])
- `request.write(chunk[, encoding][, callback])`

### request.end([data[, encoding]][, callback])

Finishes sending the request. If any parts of the body are unsent, it will flush them to the stream. If the request is chunked, this will send the terminating '0\r\n\r\n'.

这个函数表示结束发送request请求，如果body中还有没有发送的部分，他们会被直接刷到stream中，如果request被阻塞了，他们会发送结束标志

If data is specified, it is equivalent to calling request.write(data, encoding) followed by request.end(callback).

如果data有填写，相当于`request.write(data, encoding);request.end(callback);`这两步

If callback is specified, it will be called when the request stream is finished.

### request.write(chunk[, encoding][, callback])

往body中写入数据

# Class: http.Server

This class inherits from `net.Server`

http.Server添加了一些事件和方法

## 事件

- request

# 方法
- server.close()
- server.listen()
- server.setTimeout()
# 属性
- server.timeout
- server.keepAliveTimeout


# Class: http.ServerResponse

This object is created internally by an HTTP server — not by the user. It is passed as the second parameter to the 'request' event.

这个对象是http server内部创建的，不是用户，它在request事件中触发的时候，会被当作第二个参数传入

## 事件
- response.close
- response.finish
## 属性
- response.connection
- response.finished
- response.headersSent
- response.sendDate
- response.socket
- response.statusCode
- response.statusMessage
- response.write()
- response.writeHead()
## 方法
- response.end()
- response.getHeader(name)
- response.getHeaderNames()
- response.getHeaders()
- response.hasHeader(name)
- response.removeHeader(name)
- response.setHeader(name, value)
- response.setTimeout(msecs[, callback])

# Class: http.IncomingMessage
An IncomingMessage object is created by http.Server or http.ClientRequest and passed as the first argument to the 'request' and 'response' event respectively. It may be used to access response status, headers and data.


## 事件

- IncomingMessage.aborted
- IncomingMessage.close

## 属性
- IncomingMessage.aborted
- IncomingMessage.complete
- IncomingMessage.headers
- IncomingMessage.httpVersion
- IncomingMessage.method
- IncomingMessage.rawHeaders
- IncomingMessage.socket
- IncomingMessage.statusCode
- IncomingMessage.statusMessage
- IncomingMessage.url

## 方法
- IncomingMessage.destroy()
- IncomingMessage.setTimeout()


# 属性和快捷方式
- http.STATUS_CODES
- http.createServer([options][, requestListener])
- http.get(options[, callback])
- http.get(url[, options][, callback])
- http.globalAgent
- http.maxHeaderSize
- http.request(options[, callback])
- http.request(url[, options][, callback])


## http.METHODS

A list of the HTTP methods that are supported by the parser.

支持解析的method列表

## http.STATUS_CODES
STATUS_CODES列表
## http.createServer([options][, requestListener])

Returns a new instance of http.Server.

返回http.Server的实例

The requestListener is a function which is automatically added to the 'request' event.

requestListener这个函数会自动添加为`request`事件listener


## http.get()

Since most requests are GET requests without bodies, Node.js provides this convenience method. The only difference between this method and http.request() is that it sets the method to GET and calls req.end() automatically. Note that the callback must take care to consume the response data for reasons stated in http.ClientRequest section.

大多数的请求都是get请求，并且没有bodies，nodejs提供了一个快捷方法

和`http.request()`不同的是

- method设置为get
- 自动调用`req.end()`方法


## http.globalAgent
## http.maxHeaderSize
## http.request(options[, callback])
## http.request(url[, options][, callback])

Node.js maintains several connections per server to make HTTP requests. This function allows one to transparently issue requests.




# 总结

## 客户端

- http.request()
- response事件
- request.write()
- request.end()

## 服务器端
- http.createServer()
- server.createServer()
- request事件
- server.listen()
- response.write()
- response.end()
