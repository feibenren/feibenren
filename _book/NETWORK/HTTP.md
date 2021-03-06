---
title: HTTP
categories:
- NETWORK
---

- [base](#base)


# base

HTTP协议是www的基础，是一个应用层的协议，默认使用的80端口

在http创建之前，`tcp/ip协议协议族`已经相对成熟，并且被`操作系统`实现了，也就是说，

当时已经可以通过个人编写代码，实现计算机端口到计算机端口之间的通信了

如果没有`tcp/ip协议协议族`和`操作系统`建立的端口到端口的网络，HTTP，甚至其他任何东西都无法建立


再说socket，这个是UNIX类系统提出的一个概念，`插座`，

简单说就是`ip+port=socket`,通过这个插座，我可以和网络中另外一台计算机的`插座`进行通讯,这台计算机可以通过自己的socket来接收信息

伯纳斯李(HTTP发明者)，做的就是这样一件事情,`socket编程`

初衷就是为了方便`查阅文档`,所以与之配套的还有`HTML`,`进行通信和显示html的程序(浏览器)`

# 原始版本(http 0.9)

因为目的就是`查阅文档`，那就很简单

底层直接使用TCP、IP就可以了，相对成熟

tcp协议可以保证数据的可靠性

发送方

```
GET /xxx/index.html
```

表示获取对应主机的的`/xxx/index.html`这个文档，`GET`表示获取

将这些数据打包成一个tcp包，发送出去就可以了

返回方:

```
<html>
  <body>Hello World</body>
</html>
```
返回的就是HTML，同理，将数据放到tcp包中，返回数据，然后关闭tcp连接

一次http请求就这样完成了

------------
伯纳斯李，这样就实现了查阅文档，功能简洁明了

这也就造就了http的基本特点

- 简单快速:实现起来非常简单
- 无状态:一次请求对应一个协议，请求完成后就关闭tcp连接，对服务器来说非常省资源，客户端也没有什么开销


# 升级版(HTTP 1.0)

后来伯纳斯李免费公开HTTP，大火

但是最初版本仅仅是伯纳斯李自己写的，很原始

火了之后就有很多新的需求被提了出来

伯纳斯李领头成立了一个组织，共同制定http标准(http 1.0)

这个版本中，主要解决了这几个问题

### 新功能怎么添加?

重新设计http格式

```
http  line
http  headers

http body
```
headers和body之间用一个空行隔开

- `http line `:表示`请求方法,地址和版本,返回状态`等`基本功能`
- `http headers`:表示附加功能，格式就是`key:value`对，一行一个，相加多少就加多少
- `http body`:表示数据

比如:
```
GET /xxx/index.html HTTP/1.0
Connection: keep-alive

666
```


响应头的格式

```
HTTP/1.0 200 OK 
Content-Type: text/plain

777
```

-----------

这样设计有一个好处，而外功能可以随意添加,只要双方都实现就可以了


### 只能获取数据，不能提交数据吗?

1.0这个版本，扩充了`GET`，有`POST`,`GET`,`PUT`,`DELETE`,`OPTIONS`

这样不同的动词，就表示不同的意思

比如`GET`表示获取数据,`POST`表示提交数据

这个问题通过这个动词解决了这个问题，请求中的这个动词，经常被称为`请求方法`

### 如果请求的资源不存在，或者服务器没有正确返回，怎么办?

这个在http相应的`http line`中有体现，`状态码`和`状态描述`

通过不同的状态码表示不同的返回结果，比如

- 200:OK
- 404:NOT FOUND

### 除了返回html，都是文本，能有图片吗？

0.9的版本，返回的都是ASCII字符

想要获取图片，可以通过添加新功能的方式实现

首先得先确认自己的浏览器能不能处理对应的图片格式

所以，在发送数据的时候，可以在http headers 中添加而外字段就可以表示浏览器可以处理的数据类型

比如:
```
Accecpt:text/html,image/jepg,image/png
```
服务器收到后这个请求后，得知客户端可以处理的数据类型了

如果客户端可以处理`png`格式的图片，那么服务器就可以返回png格式的图片了

但是，服务器还得返回这次返回的数据的类型，不然浏览器不知道怎么处理对应的数据了

服务器也需要返回对应的field

```
Content-Type: text/html;
```
表示的意思就是,这次body里面的数据类型是`text/html`

这里的`text/html`是MIME规定的数据类型，还可以带参数,用封号隔开就可以

```
Content-Type: text/html; charset=utf-8
```
表示，不仅仅是html文本了，还表示这个文本是utf-8编码的

-------------

同理，发送图片，视频，音频等所有的文件格式，都可以通过http来传输了

### 每次查看，每次都得重新获取数据

设立缓存机制，这个实现比较复杂，单独说

### 传输太慢

针对传输太慢的问题，这个版本提供了很多优化方案

# 1、数据压缩
浏览器
```
Accecpt-Encoding:gzip,compless
```
表明服务器可以支持gzip压缩和compless压缩

服务器
```
Content-Encoding:gip
```
表示相应body使用了gzip压缩

# 2、keep alive

0.9的版本，一个请求响应，对应一个tcp连接，重新请求的话，得重新开启一个tcp连接

tcp连接成本是非常高昂的

因为tcp可以设置`KeepAlive`这个数据段的，也就是说，可以让tcp在设定的时间内保持连接

1.0这个版本，默认是关闭这个功能的，但是浏览器和服务器都对这个功能进行了实现

--------------

浏览器
```
Connection: keep-alive
```
表示这个tcp连接不要立马断开，后续还可能有请求会过来

服务器:
```
Connection: keep-alive
```
服务器收到该请求后，也会回复同样的字段，表示这个tcp连接不会立马断开
这个`keep-alive`到底能保持多长时间，是服务器决定的，可以在nginx，apache中设置，操作系统也有一个默认值，是`7200s`

# 3、管道机制
虽然有keep-alive机制，但是优化力度还不够

比如浏览器要请求a,b,c三个资源

- 浏览器: 发送tcp建立请求连接
- 服务器:收到该tcp请求连接，建立链接
- 浏览器:封装http请求`->a`,发送tcp包
- 服务器:解析http数据包，返回a
- 浏览器:不用再次建立tcp连接,发送tcp数据包,请求b
- ........
- 浏览器:发送tcp关闭请求
- 服务器:服务器关闭连接

可以看到，a，b，c这三个资源是请求一个，响应一个，然后再请求第二个,以此类推

如果第一个请求很慢，那么剩下的就会被堵着

这种现象叫做`队头堵塞`

管道机制的思路就比较有意思:

1、浏览器将三个http请求`编号`，放到一个tcp包中，一起发送

2、服务器收到这个请求后，将这三个请求按照`编号`给解析出来，然后取出这三个资源(具体怎么取，可以开线程同时取资源，也可以按照编号取资源)

3、三个都取出来之后，将这三个资源资源按照编号，合并成一个TCP包(当然，一个包可能放不下，tcp会自动分包发送)，返回给浏览器

4、浏览器接收到这个TCP包，也是得按照编号进行解析，分别取出这三个资源


--------------
通过这种方式，一个tcp包，格式可能是这样的

默认tcp格式
```
[port][data]
```
管道机制之后可能是这样的
```
[port][ [http 请求1] [http 请求2] [http 请求3] ]
```

-------------
可以看到，管道机制这个设计的就有点复杂了，对两端的开销都很大，并且，如果这个请求失败了，还得重来，不一定划算

### 没有状态

http请求是无状态的，也就是说，第一次请求和第二次请求，如果两次请求格式一样，那么服务器就没有办法区分这两次请求是一个人发出的，还是两个人发出的

针对这个问题，解决方案是cookie

思路也很简单

- 1、客户端每次请求的时候，都携带一个唯一id(这个id，一般情况下是服务器颁发的)
- 2、服务器根据这个id，就可以区分出各种请求了

这种方案就是`cookie`,后来在cookie的基础上，又发展出来了`session`的概念


### 其他问题

还有其他很多问题，但是思路基本一致，就是添加`key:value`对，来表示不同的功能

比如`User-agent`，表示浏览器的版本，`Date`表示响应的时间

添加了这些字段，需要浏览器和服务器的支持，如果有一方不支持的话，那就没有意义了

# 再次升级(1.1)

1.1这个版本，改动很小，就一点，`keep-alive`默认开启

这个版本使用了20多年，现在依然是主要的实现版本

# 未来(HTTP 2)

HTTP2 这个版本，想要解决现在1.1这个版本的一些'问题'

- 1、数据臃肿
- 2、数据传输慢
- 3、服务器无法主动发送数据

等

主要有这些优化:

- 二进制协议
- 多工
- 数据流
- 头信息压缩
- 服务器推送

## HTTP2-二进制协议 & HTTP2-头信息压缩
1.1的版本中，head头必须是ASCII的，body倒是二进制还是文本，都可以

但是这个很浪费资源,比如

```
Connection: keep-alive
```
需要用22个字符来标示一个功能，其实这个没必要，现在导致一个head头有上百的长度

http2这个版本中对这个功能进行了改进,都是用二进制来标示

具体实现的方式是这样的

先规定一些静态索引(定义在RFC中)，比如

- 0:status ok
- 1:status 404

这样双方就没必要发送status了，其他的功能一样道理

还有一些没有被定义在RFC中的功能,那么再使用二进制编码加入其中，最大化的压缩头部

## HTTP2-多工&数据流&服务器推送

针对1.1版本中的速度慢的问题，虽然也提出了一些解决方案,比如数据压缩，keep-alive，管道机制

但是效率还不是最大化的

效率最大化的思路应该是

- 1、不应该排队，比如1.1中，两个请求a和b，只能排队处理
- 2、一个http请求/响应，不应该一个tcp包，只能包含一个http数据包，这可能造成浪费

也就是说

http2需要实现多工通信，之前就一条路通信，现在可以多条路同时通信,这就是`多路通信(多工)`

一个tcp包，不应该关注载荷是什么，它的主要任务就是能多承载就多承载

所以，http2的改进就是一个tcp包里面可以放多个http请求，编号需要就可以了，收到再拆包

也就是说，这个时候，tcp包里面的不应叫做http数据了，而叫做`数据流`



## HTTP2-服务器推送

还有一个问题，1.1版本中，除非客户端主动发起请求，否则服务器不能主动推送数据

http2这个版本中，允许服务器主动推送数据








# LINKS

- [http://chping.website/2016/09/18/http/](http://chping.website/2016/09/18/http/)
- [https://jiaolonghuang.github.io/2015/08/16/http-pipelining/](https://jiaolonghuang.github.io/2015/08/16/http-pipelining/)
- [https://imququ.com/post/http2-and-wpo-2.html#toc-1](https://imququ.com/post/http2-and-wpo-2.html#toc-1)
