---
title: url
categories: 
- NODEJS
---

# URL

The url module provides utilities for URL resolution and parsing

URL模块提供了针对url的组装和解析的组件

url有两组api，一组是nodejs自定义的，一组是html5的接口

現在nodejs推荐使用html5的接口，其实两者差异不大

# 构造函数

- Constructor: new URL(input[, base])

# 属性

- url.hash
- url.host
- url.hostname
- url.href
- url.origin
- url.password
- url.pathname
- url.port
- url.protocol
- url.search
- url.searchParams
- url.username



# url.searchParams


url.searchParams对象返回的是一个`URLSearchParams`接口

URLSearchParams这个接口其实是html5中规定的一个接口,nodejs引入了该接口，nodejs之前有一个自己的与之类似功能的模块`querystring`