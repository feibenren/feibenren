---
title: XMLHttpRequestEventTarget
categories: 
- EVENT
---

# XMLHttpRequestEventTarget

XMLHttpRequestEventTarget是xhr对应的的`event target`

挂载的`方法`有:

- onabort
- onerror
- onload
- onloadstart
- onprogress
- ontimeout
- onloadend

这些对象的的回调函数中，传递的`事件对象`是`progress event`

而函数中的`this`，就是xhr对象本身

-------------------

但是同时，这些对应的方法，也是对应的事件

- abort
- error
- load
- loadstart
- progress
- timeout
- loadend

和对应的方法用法一样


# links

- [https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- []()
- []()
- []()
- []()
- []()