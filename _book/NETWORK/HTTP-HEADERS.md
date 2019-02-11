---
title: HTTP-HEADERS
categories:
- NETWORK
---

# HTTP-HEADERS

HTTP1.1的格式中，一共就三部分组成，其中，额外功能的部分都放到了`http headers`里面，这里就只说这一块


### 格式

`key:value`,一行一个，有标准的(写在RFC中的),也有非标准的，一般非标准的key，是需要是需要添加`X-`前缀来标示的

还有非常重要的一点，1.1这个版本中，是使用ASCII的，而在http2这个版本中，被修改成了二进制格式的了，这里只说1.1版本的


# 分类

field也非常多，可以简单分为这几类

- general header fields:通用头(请求头和响应头都可以使用)
- request header fields:请求头
- response header fields:响应头
- entity header fields:实体头



针对具体功能来说，可以这样归纳

# 1、http怎么识别传输内容？

request
```
Accecpt:text/html;images/png

Accept-Encoding: gzip, deflate, br

Accept-Language: zh-CN,zh;q=0.9
```
response
```
Content-Encoding: gzip
Content-Type: text/html
```


# 2、http怎么提高传输效率？


```
connection:keep-alive
```

cache

# 3、http怎么保持状态？

cookie


Set-Cookie




# LINKS
- [https://zh.wikipedia.org/wiki/HTTP头字段](https://zh.wikipedia.org/wiki/HTTP头字段)
- [https://imweb.io/topic/5795dcb6fb312541492eda8c](https://imweb.io/topic/5795dcb6fb312541492eda8c)