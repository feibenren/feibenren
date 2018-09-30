---
title: socket.io
categories:
  - PACKAGE
  - NODEJS
---

# socket.io

Socket.IO 是一个实时的，双工的，**基于事件**的库，两部分组成

- node server:node 服务器端
- client:浏览器端的客户端

socket.io 的特点

- 高可靠
- 自动重新连接
- namespace/room 支持
- ......

# 不仅仅实现了 websocket

socket.io 不仅仅实现了 websocket，还实现了

- JSONP Polling
- AJAX Long Polling
- Forever Iframe

# 服务器端

socket.io 服务器端基本的的流程：**接收消息->广播消息**

websocket 因为是依赖于 http 和 TCP 的，所以，需要依赖 node 的 http 模块

```
const http = require("http");
const SocketIo = require("socket.io");
let server = http.createServer(handler);
server.listen(7896);
//////////////
let serverSocket = SocketIo(server);//使用server来进行第一次的连接
serverSocket.on("connection", clientSocket => {
  clientSocket.emit("news", "nnnnn");
});
```

socket.io 还可以与 express，koa 等结合使用

```
var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);
```

只是将 `handler` 替换成`express()`即可

浏览器:index.html

```
<!doctype html>
<html>

<head>
    <title>Socket.IO chat</title>
</head>

<body>
    <ul id="messages"></ul>
    <form action="">
        <input id="m" autocomplete="off" /><button>Send</button>
    </form>
</body>

</html>

<script src="/socket.io/socket.io.js"></script>
<script src="https://code.jquery.com/jquery-1.11.1.js"></script>
<script>
    $(function () {
        var socket = io();
        $('form').submit(function () {
            socket.emit('sendMsg', $('#m').val());
            $('#m').val('');
            return false;
        });
        socket.on('reviceMsg', function (msg) {
            $('#messages').append($('<li>').text(msg));
        });
    });
</script>
```

node：index.js

```
const http = require("http");
const SocketIo = require("socket.io");
const fs = require("fs");
function handler(req, res) {
  fs.readFile("./index.html", (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end(err.toString());
    }
    res.end(data);
  });
}

let server = http.createServer(handler);

server.listen(7896);

let serverSocket = SocketIo(server);

serverSocket.on("connection", clientSocket => {
  clientSocket.on("sendMsg", data => {
    clientSocket.broadcast.emit("reviceMsg", data);
  });
});
```

- new Server(httpServer[, options]):创建 server
- server.on(eventName,callback):设置自定义事件和回调函数
- server.emit(eventName,[...args]):触发自定义事件
- clientSocket.broadcast.emit(eventName,[...args]):客户端广播，除了自己收不到，其他人都可以收到

## namespace,room

默认情况下，服务器端收到消息，会将消息广播到所有在线的客户端，这有时不符合我们的需求
## namespace
socket.io使用namespace可以将创建多个独立的 socket.io，每个namespace独立，互不干扰

服务端指定命名空间
```
let serverSocket = SocketIo(server);
let namespace1 = serverSocket.of("/namespace1");//使用of创造一个命名空间
```
客户端指定命名空间
```
let socket=io.connect("http://localhost:8080/namespace1");
```


## room
每个namespace又可以分成多个room，每个room也是相互隔离，互不干扰

相比namespace，room是可以随便进入的

```
namespace1.on("connection", clientSocket => {
  clientSocket.on("sendMsg", data => {
    clientSocket.broadcast.to(data.room).emit("reviceMsg", data.content);//在room中广播
  });
  clientSocket.on("joinRoom", data => {
    clientSocket.join(data);//加入指定的room
  });
  clientSocket.on("leaveRoom", data => {
    clientSocket.leave(data);//离开指定的room
  });
});
```

- clientSocket.broadcast.to(room):只在room中广播
- clientSocket.join(room):加入room
- clientSocket.leave(room):离开room



# 浏览器端

 socket.io 使用了特殊的 **protocol specification**,浏览器原生的 websocket 不可以,只能使用 socket.io提供的客户端

```
let socket = io();
socket.on('news', (data) => {
    console.log(data);
    socket.emit('my event','my data')
})
```

- io([url]):创建客户端(client)，url 默认我`window.location`
- client.on(eventName,callback):设置自定义事件和回调函数
- socket.emit(eventName,[...args]):触发自定义事件



