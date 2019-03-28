---
title: Request
categories: 
- WEBAPI
---
# Request

Request接口是fetch接口的一部分

表示http请求对象

# 属性
- Request.method
- Request.url
- Request.headers
- Request.credentials
- Request.redirect
- Request.mode
- Request.cache 




# Request.redirect

设置重定向应该怎么处理
- follow:自动重定向
- error:如果产生重定向将自动终止并且抛出一个错误
- manual:手动处理重定向


# 总结

request对象就是用来设置请求的http的，东西不多

但是request对象还实现了`Body`接口，所以，Body上的属性和方法也可以使用
