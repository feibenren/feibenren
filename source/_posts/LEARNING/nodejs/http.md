---
title: http
categories: 
- LEARNING
- nodejs
tags:
- js
---


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