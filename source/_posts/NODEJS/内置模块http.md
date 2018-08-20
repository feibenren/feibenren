---
title: http
categories: 
- NODEJS
---

# http模块
node中对于网络服务的实现,
该模块包含一个服务器(http.Server)，和一个客户端(http.request)

# http.Server
http.Server对象是创建服务器的接口，继承自EventEmitter

有一些自定义事件，主要的是 **request** 事件:当接收到请求的时候，触发该事件

创建的实例还有一些方法，有

- listen();设置监听端口(只有执行了该函数，服务器才能跑起来)

示例:

```
const http=require('http');
const server=new http.Server();
server.on('request',function(req,res){
    res.end('111');
});
server.listen(9998);
```

> 但是测试发现一个怪异现象，就是我本地测试，同一个请求，使用浏览器访问request会触发多次，但是postman正常，就触发一次，不知道为什么

## http.ServerRequest(请求对象)
该对象只能通过传参方式获得，不能通过`server.ServerRequest`方式获取

只能通过request对应事件函数的第一个参数获取(req)
```
server.on('request',function(req,res){
    res.end('111');
});
```

该req对象上有很多属性
- url
- method
- headers
等,但是注意，req上面，没有请求体,请求体需要自己获得

### 如何获取GET参数
很简单，解析req.url即可
```
const http = require("http");
const server = new http.Server();
let i = 0;
server.on("request", function(req, res) {
  let str=req.url;
  str=str.split('?')[1];
  let arr=str.split('&');
  let params={};
  arr.map(val=>{
      let temp=val.split('=');
      params[temp[0]]=temp[1];
  });
  console.log(params);
  res.end(req.url);
});
server.listen(9998);
```
但是，node提供了一个模块专门用来解析url:url;

```
const http = require("http");
const url = require("url");
const server = new http.Server();
let i = 0;
server.on("request", function(req, res) {
  console.log(url.parse(req.url));
  res.end(req.url);
});
server.listen(9998);
```


### 如何获取POST数据
req对象上没有对应的属性，所以无法直接获取

该对象也继承自events，因为请求数据可能很大,那么接收数据可能需要很长时间，所以必须使用事件机制

自定义事件有三个
- data:接收到一个chunk就触发，所以可能会触发多次该事件，chunk会传入处理函数的第一个参数
- end:数据接收完成
- close:结束了请求，比如用户数据没有传完，就关闭浏览器了

然而这个地方涉及到编码问题，如果编码了，那么就简单

如果没有编码，就很复杂

> form表单的enctype属性可以指定编码，一般为x-www-form-urlencoded,form-data两种


##### 编码
这种处理其实和简单，编码后的请求体就变成了

```
name=%E4%BD%A0%E5%A5%BD%E4%BD%A0%E5%A5%BD&age=%E4%BD%A0%E5%A5%BD
```
只需要解码，拆分接口,示例

```
const http = require("http");
const server = new http.Server();
server.on("request", function(req, res) {
  let data = "";
  req.on("data", function(chunk) {
    data += chunk;
  });
  req.on("end", function() {
    let body=data.toString();
    let arrs=body.split('&');
    let objs={};
    arrs.map(val=>{
        let temp=val.split('=');
        objs[temp[0]]=decodeURIComponent(temp[1]);
    })
    res.end(JSON.stringify(objs));
  });
});
server.listen(9998)

```
然而node给我们提供了一个模块 **querystring**
直接使用

```
const http = require("http");
const querystring=require('querystring');
const server = new http.Server();

server.on("request", function(req, res) {
  let data = "";
  req.on("data", function(chunk) {
    data += chunk;
  });
  req.on("end", function() {
    res.end(JSON.stringify(querystring.parse(data)));
  });
});
server.listen(9998)

```



##### 未编码
这种情况就很麻烦,也就是form使用了form-data格式来提交数据,
得到的数据格式如下，一个大字符串，需要自己手工来提取数据，一般需要使用第三方模块来实现

```
{
    "------WebKitFormBoundaryi1gQpPazguAHtdnX\r\nContent-Disposition: form-data; name": "\"aaa\"\r\n\r\n111\r\n------WebKitFormBoundaryi1gQpPazguAHtdnX\r\nContent-Disposition: form-data; name=\"bbb\"\r\n\r\n222\r\n------WebKitFormBoundaryi1gQpPazguAHtdnX--\r\n"
}
```


## http.ServerResponse(响应对象)
服务器通过该对象来相应用户请求,相对简单,不用处理接收到的数据

主要有着几个方法
- writeHead(statusCode,[headers]):设置响应码和响应头
- write(data):写入请求体，注意，可以写入多次
- end(data):结束相应，同时可以传入最后的响应体,注意，该函数必须调用，否则无法返回数据

示例:

```
const http = require("http");
const querystring=require('querystring');
const server = new http.Server();

server.on("request", function(req, res) {
  req.writeHead(200,{
      'content-Type':'my'
  });
  req.write('response data1')
  req.write('response data2')
  req.end('response data3')
});
server.listen(9998)

```

## 简写方式
因为request事件是最常用的，所以，**http模块** 提供了简写

```
const http = require("http");
http.createServer(function(req,res){
    res.end('hello word');
}).listen(8888);
```
http.createServer返回的是server的实例，所以可以连写`.listen(888)`

# http.request
node提供的客户端

注意，http.Server是类，然而http.request是函数,
相对于服务器的功能，client就简单不少

和server一样，都是围绕着请求和响应，只不过颠倒了

### http.ClientRequest
客户端请求对象，就是`http.request()`返回的对象，该方法第一个参数是请求配置，第二个是回调函数

这个对象上有一些方法

- write():写入请求体
- end():结束请求体编辑，发送该请求
- abort():取消请求
- setTimeout():设置超时时间

示例:
```
const http = require("http");
let options={
    method:'GET',
    port:'80',
    // path:'/index.html',//注意，一定是/开头
    host:'520hdhd.com',
    headers:{
        'xxx':'xxx'
    }
};
let client=http.request(options,function(res){
    let data='';
    res.on('data',function(chunk){
        data+=chunk;
    });
    res.on('end',function(){
        console.log(data.toString());
    });

});
client.end();
```

注意，回调函数只有响应体

同样的道理，响应体数据可能会很大，所以需要使用事件机制来接收数据

### http.ClientResponse
该实例是回调函数的第一个参数，和http.ServerRequest类似

属性:
- statusCode:响应码
- headers:响应头

方法:
- setEncoding():设置响应体的编码格式，不设置的话，默认就是buffer

事件:
- data:接收数据(可能触发多次)
- end:数据接收完毕
- close:连接结束

### 简写
http.request针对get请求，做了简写

```
const http = require("http");
let options = {
  method: "GET",
  port: "80",
  // path:'/index.html',//注意，一定是/开头
  host: "520hdhd.com",
  headers: {
    xxx: "xxx"
  }
};
http.get(options, function(res) {
  let data = "";
  res.on("data", function(chunk) {
    data += chunk;
  });
  res.on("end", function() {
    console.log(data.toString());
  });
});

```
其实和http.request差不多，就不用写 `client.end()`而已













































## 模块方法
- createServer(callback)：创造服务器实例。

## 服务器实例的方法
- listen(port)：启动服务器监听指定端口。

## HTTP回应的属性
- headers：HTTP请求的头信息。
- url：请求的路径。

## HTTP回应的方法
- setHeader(key, value)：指定HTTP头信息。
- write(str)：指定HTTP回应的内容。
- end()：发送HTTP回应。



## 常见问题
- 如何搭建一个基础班的服务器
- 如何搭建一个静态服务器
- 如何获得一个静态页面的内容 wget
- 如何获得一个页面中所有的css
- 如何获得一个页面中所有的图片
- 如何curl????

## 如何搭建一个基础班的服务器

```
var http=require('http');
var process=require('process');
var args=process.argv.slice(2);
var server=http.createServer(function(request,response){
    console.log(request.url);
});

var host=(typeof args[0] != "undefined") ? args[0] : '127.0.0.1';
var port=(typeof args[1] != "undefined") ? args[1] : 3000;

server.listen(port,host,function(){
    console.log(`server start at http://${host}:${port}`);
});

```

## 如何搭建一个静态服务器

```
//通过127.0.0.1:3000/1.jpg,可以看到test目录下面的图片
var http = require('http');
var process = require('process');
var path = require('path');
var fs = require('fs');
var args = process.argv.slice(2);
var server = http.createServer(function (request, response) {
    request.setEncoding('utf-8');
    var file = path.join(__dirname, 'test', request.url);
    fs.stat(file, function (err, stat) {
        if (err) {
            console.log(err);
            response.end('报错了');
        }
        if (stat &&stat.isFile()) {
            var stream = fs.createReadStream(file);
            response.writeHead(200, {'Content-Type': 'image/jpeg'});
            var res = fs.readFileSync(file);
            response.end(res);
            response.on('end', function () {
                console.log('传输完成');
            })
        } else {
            response.writeHead('404',{"Content-Type":"text/plain"});
            response.write('查找文件不存在');
            response.end();
        }
    });


    request.on('error', function (e) {
        console.log('problem with request: ' + e.message);
    });
    response.on('error', function (e) {
        console.log('problem with request: ' + e.message);
    });

});

var host = (typeof args[0] != "undefined") ? args[0] : '127.0.0.1';
var port = (typeof args[1] != "undefined") ? args[1] : 3000;

server.listen(port, host, function () {
    console.log(`server start at http://${host}:${port}`);
});
//有报错，不知道为什么
```


## 如何获得一个静态页面的内容
```
var http = require('http');
var fs = require('fs');
var url='http://www.baidu.com';
http.get(url,function(client){
    var res;
    client.on('data',function(e){
        res+=e;
    });
    client.on('end',function(){
        fs.writeFile('baidu.html',res);
    })
})
```


## 获取指定页面的所有图片

```
//通过127.0.0.1:3000/1.jpg,可以看到test目录下面的图片
var http = require('http');
var process = require('process');
var path = require('path');
var fs = require('fs');
var URL=require('url');
var args = process.argv.slice(2);
//获得网页中所有的图片
var target='http://m.lianqiwenhuaw.com/';

http.get(target,function(client){
    var data;
    client.on('data',function(e){
        data+=e;
    });
    client.on('end',function(){
        var imageUrls=data.match(/src="[a-zA-Z0-9_\/\.]*[jpg|png|gif]"/g);
        imageUrls.forEach(function(val) {
            val=val.replace(/["|']/g,'').replace('src=','');
            var old=val;
            val='http://'+path.join('m.lianqiwenhuaw.com',val);
            // console.log(val);
            http.get(val,function(client){
                var data;
                client.on('data',function(e){
                    data+=e;
                });
                client.on('end',function(){
                    var file_name=old.split(/\//g).reverse()[0];
                    // console.log(file_name);
                    fs.writeFile(path.join(__dirname,'test',file_name),data);//这样得到的图片显示图片损坏，到底哪里出了问题
                });
            });
        }, this);
        
        // console.log(imagesUrl);
    })
})

```