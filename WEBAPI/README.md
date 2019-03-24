---
title: README
categories: 
- WEBAPI
---

# web api

ecmascript本身只制定了以下内容:

- 语法（解析规则，关键字，流程控制，对象初始化等）
- 错误处理机制（throw， try/catch 以及用户自定义错误类型的能力）
- 类型（布尔值，数字，字符串，函数，对象等）
- 全局对象。在浏览器环境中，这个全局对象就是 window 对象，但是 ECMAScript 只定义与浏览器无关的 APIs（例如，parseInt,parseFloat， decodeURI， encodeURI 等）
- 基于原型的继承机制
- 内置对象和函数（JSON，Math，Array.prototype 方法，Object introspection 方法等）
- 严格模式


但是js中有还有大量的`外部api`，比如`Document`,`indexDB`等等

这些api是哪来的？

一共来源于两部分:
- W3C的规定
- 浏览器厂商自己添加的功能

---------------

W3C的规定规定主要主要分为两部分

- DOM
- html标准

因为DOM不仅仅是给js这一门语言使用的，所以需要单独定义

HTML标准那就涉及到很多了，比如html5中的`canvas,离线，数据库`等等

w3c的规定，都得由浏览器厂商来实现，w3c本身只是一个制定规则的组织

------------
浏览器厂商自己添加的功能也很多，这些API`不是标准`，其中最注明的就是`XMLHttpRequest`了，这个api直到现在也不是标准

但是非常火，成为了`事实上的标准`，所以w3c则说这个api，是`w3c推荐的api`

在html5版本中，才推出了真正的官方版本`fetch`

但是有些api，始终就没有成为标准，比如`console`