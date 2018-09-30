---
title: websocket
categories: 
- HTML5
---
# 概述
在BS模型中，只能由客户端发送请求，服务器端只能被动响应，然而，现在实时应用很多，比如在线聊天功能，因为服务器无法主动发送消息给客户端，那么客户端就必须每隔一段时间发送查询请求，基于此的技术有 `长轮询`，`commet`等

然而这样效率低下，轮询毕竟是一种不得已的方案，不能实时得到最新数据(轮询有事件间隔),服务器压力大

为此html5提出了一种新的协议，**websocket**,可以实现 **服务器端主动给客户端发送消息**，实现双工通道，是一个 **持久化的协议**

websocket协议是基于http和tcp协议的，首次建立链接的时候，使用的http协议，连接建立后，使用tcp协议通信

**因为是一种新的协议，客户端和服务器都需要实现这种协议才可以使用**

### 客户端

- 浏览器:基本都已经实现(IE10+)
- android:`java-websocket.jar`实现websocket
- ...

不是仅仅是浏览器，各种语言，各种平台都有对应的实现

### 服务器端

各种语言都有对应的实现，

- PHP:[Workerman](https://github.com/walkor/workerman/)
- nodejs:[socket.io](https://socket.io/)
- ...


# 浏览器客户端
```
let ws = new WebSocket('ws://echo.websocket.org');//回音服务,没有同源限制
ws.onmessage = (event) => {//接收到消息的回调
    console.log(event.data);
};
ws.onclose = function (evt) {//链接断开
    console.log("Connection closed.");
};
ws.onopen = () => {//使用http建立链接后的回调
    ws.send("Hello WebSockets!");//客户端发送数据
}
```
浏览器在实现上，采用了事件机制，和xhr类似

- ws.readyState:ws的状态值(和xhr类似)，值为1时表示连接成功
- ws.onopen:使用http建立链接后的回调(此时ws.readyState值为1)
- ws.onmessage:接收到消息的回调(一般会使用分类来区分数据类型)
- ws.send():发送数据

# node服务器端

在node中，主要使用第三方包`socket.io`来实现websocket服务


# socket和websocket的关系
没有关系，类似java和javascript

## websocket
html5新提出来的一个协议，主要用来解决浏览器和服务器端的双向通信的问题，替换原来的轮询技术

和http协议属于同一等级，都在应用层

## socket
不是一个协议，是一组api，是会话层的一个抽象,就是为了方便使用底层协议(TCP,UDP等)，最早的api是用C写的[Berkeley_sockets](https://en.wikipedia.org/wiki/Berkeley_sockets),后来其他很多语言都遵这套API，成了一个事实标准


# 链接
- [WebSocket、Socket、TCP、HTTP区别](https://www.cnblogs.com/jiangzhaowei/p/8781635.html)
- [http://www.ruanyifeng.com/blog/2017/05/websocket.html](http://www.ruanyifeng.com/blog/2017/05/websocket.html)
