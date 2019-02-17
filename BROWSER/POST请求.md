---
title: POST请求
categories: 
- BROWSER
---

# POST请求中，浏览器做了什么?

在浏览器中，发送post请求有两种方式`form`,`ajax`,但是这两种方式其实都是做了以下的事情:

- 编码
- 发送请求

通过form，浏览器会自动做一些事情，但是走ajax的话，浏览器做的事情就少了

# 发送请求
先说发送请求，发送请求的格式很简单，如下:
```
POST /test.html HTTP/1.1
Content-Type:编码格式

xxxxxx
```
具体的数据又编码格式决定

# 编码

编码其实就是按照指定的编码格式`组合数据`

怎么设置`编码格式`？

form标签有一个属性`encode type`,简写`enctype`,可以设置

比如

```
 <form  enctype="text/plain">
```
浏览器会将这个设置用来请求头中，以此达到标示数据格式的目的

```
Content-Type:text/plain
```


编码格式主要有如下几种:

### application/x-www-form-urlencoded

这种编码方式很简单:

```
username=aaa&pwd=bbb
```
类似GET请求的数据，使用`&`连接数据而已

但是这里有一点需要注意，就是汉字(或者说非数字或字母),需要`百分号编码`,而`百分号编码`是可以编码二进制数据的，但是这里使用的标准是不支持编码二进制数据的，所以使用这种编码方式不能提交二进制文件


### multipart/form-data
使用这种格式提交数据，和邮件的扩展差不多，

```
------WebKitFormBoundaryBiKmw11laZ0PueAu
Content-Disposition: form-data; name="username"

aaa
------WebKitFormBoundaryBiKmw11laZ0PueAu
Content-Disposition: form-data; name="pwd"

哈哈哈
------WebKitFormBoundaryBiKmw11laZ0PueAu--

```

### text/plain

纯文本
```
username=aaa
pwd=bbb
```
用回车连接，不是用&连接了

### application/json

注意：在form支持的enctype中，`没有这种格式`

这是一种自定义的格式，表示的意思其实就是说发送的数据是json字符串

`只能`通过ajax自己设定这个`Contype-Type`来实现

发送的时候，`依然按照urlencode的方式来发送`

同样，后端需要识别这个header头才可以，否则肯定还是按照`urlencode`来解析的，那就不对了

比如原生PHP就无法识别，需要通过特定方式才可以









