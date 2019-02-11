---
title: express
categories:
  - PACKAGE
  - NODEJS
---

# node 原生实现的服务器

```
const http=require('http');
http.createServer((req,res)=>{
  res.end('hello world');
}).listen(8000)
```

node 原生的写法，很简单就可以实现一个服务器，但是有一个问题

所有的 http 处理都需要放到一个回调函数中`(req,res)=>{}`,对于示例代码来说没有问题，但是对于一个应用来说，那么就很麻烦，所有的逻辑处理都需要放到这样一个回调中

所以，在 node 中的所有 web 框架，本质上都是对这个回调函数的'分割'，express 就是使用最广的一个 node web 框架

# express

express 官方说法:‘Fast, unopinionated, minimalist web framework for Node.js’(快速，包容，极简的 web 框架)

示例:

```
var http=require("http");
var express=require("express");
var app=new express();
app.get("/", function(req, res) {
  res.end('33')
});
var server=http.createServer(app);//express产生的app作为了响应请求的处理函数
server.listen(7896)
```
可以看到，express就是对回调函数的分割，还有一种更常见的写法：

```
const express = require("express");
const app = express();
app.get("/about", (req, res) => {
  res.end("hello world");
});
app.listen(7896);
```

以上代码中的几个角色

- app:应用(Application)
- `"/about"`:匹配路径
- `(req,res)=>{}`:中间件
- req:请求体(Request)
- res:响应体(Response)

# Application

```
let app=express()
```

app 表示整个应用

该对象挂在很多方法和属性

### HTTP METHOD

- app.METHOD(path,callback,[,callback...]):http 方法,关联路径和中间件
- app.all(path,callback,[,callback...]):所有 METHOD 都会匹配
- app.listen():创建服务器，指定端口

```
const app = express();
app.get("/", (req, res) => {
  res.end("hello world");
});
app.listen(7896);
```

### 应用变量

- app.locals:挂在 app 上的应用变量，系统将一些[应用的配置](http://expressjs.com/en/4x/api.html#app.settings.table)也挂在上面
- app.set():设置应用变量，设置后可以在 app.locals 上得到，或者使用 app.get()获得
- app.get():获得应用变量
- app.disable():将系统中设置的应用变量设置为 false,比如`app.disable('etag')`,这样 response 的时候就不会有 etag 标签
- app.enable():同上相反

# Request

```
function(req,res){
  console.log(req.url)
}
```

中间件的 req 表示 http 的请求体

req 挂在了很多关于请求的属性

- req.app:应用
- req.method:请求方法
- req.body:请求体
- req.query:请求 url 中的参数
- req.params:匹配路由中的参数
- req.cookies:请求的 cookies(加载中间件才有该对象)

等

# Response

```
function(req,res){
 res.end('end....')
}
```

中间件的 res 表示 http 的响应体

res 挂在了很多关于请求的属性和方法

- res.app:应用
- res.locals:===app.locals
- res.cookie():设置 cookie
- res.send():设置返回体
- res.end():响应数据
- res.set()/res.get():设置/获取 header

等

# 路径

```
app.get('/about',(req,res)=>{})
```

express 使用[path-to-regexp](https://github.com/pillarjs/path-to-regexp)来处理该路径`/about`，所以

可以在路径使用模糊匹配,可以在中间件中获得该模糊匹配的数据

```
app.get('/about/:id',(req,res)=>{
  console.log(req.params.id);
})
```

# 中间件

express 将几乎所有的功能都由中间件实现，本身仅仅具有最低的功能

**中间件是一个函数**,参数有四个:

```
function (req, res, next) {
  console.log('LOGGED');
};
```

- err:错误对象,只有在错误处理的中间件中才添加，其他都不添加该参数
- req:request
- res:response
- next:下一个中间件

> 通过这些参数，中间件可以完全控制整个 http 请求

## next

`next`，表示下一个中间件,执行`next()`,则将代码的控制权交给下一个中间件，下一个中间件执行完成后，则返回上一个中间件继续执行剩余代码

next 变量的引入，可以使得一个一个中间件链接起来，执行流程类似‘洋葱’

洋葱模型，非常方便将复杂的功能分成一个一个的中间件去执行，express 只需要加载对应的中间件，即可完成相应的功能，而 express 本身‘极简’

比如:

```
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.get("/", (req, res, next) => {
  console.log(req.cookies);
  res.end("eeee");
});
```

加载`cookie-parser`中间件，在`req.cookies`中可以得到处理好的 cookie

express 使用`app.use()`来加载中间件

```
app.use(cookieParser())
app.use('/admin',cookieParser())//可以为中间件指定路径，只有特定路径才会执行对应的中间件
```

# Router

使用 app 关联路径和中间件，简单明了，但是:

- 所有路径需要写在一个文件中，各个处理函数高度耦合，都依赖于 app
- 路径区分不明显(比如后台和前台路径无法区分)

鉴于此:

express 使用`express.Router()`来产生一个 **可以安装的、模块化路由处理程序**来解决以上问题

front.js

```
const express = require("express");
const front = express.Router();

front.get("/index", (req, res) => {
  res.end("front page");
});

module.exports=front;
```

admin.js

```
const express = require("express");
const admin = express.Router();

admin.get("/index", (req, res) => {
  res.end("admin page");
});

module.exports=admin;
```

index.js

```
const express = require("express");

const front = require("./front");
const admin = require("./admin");

const app = express();

app.use('/front',front);// http://127.0.0.1:3000/front/index
app.use('/admin',admin);// http://127.0.0.1:3000/admin/index

app.listen(7896);
```

通过`express.Router()`创建的 router，可以使用`app.use()`来安装 router，水平扩展程序非常方便
