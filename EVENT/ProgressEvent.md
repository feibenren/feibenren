---
title: ProgressEvent
categories: 
- EVENT
---

# ProgressEvent

这个 ProgressEvent 接口用来表示测量底层操作一个HTTP请求的进度（例如：一个 XMLHttpRequest、一个底层资源像 `<img>, <audio>, <video>, <style> or <link>`).

# 属性

- ProgressEvent.lengthComputable 只读
它是一个布尔值标识，表明总共需要完成的工作量和已经完成的工作是否可以被底层所计算到。换而言之，它表示的就是过程是否是可以测量的。
- ProgressEvent.loaded 只读
是一个unsigned long long类型，表示底层进程已经执行的工作量。所做的工作比率可以用属性和ProgressEvent.total计算。当使用HTTP下载资源时，这只表示内容本身的一部分，而不是头和其他开销。
- ProgressEvent.total 只读
是unsigned long long类型，表示底层进程正在执行的工作总量。当使用HTTP下载资源时，这只表示内容本身，而不是头和其他开销。

------------

- ProgressEvent.lengthComputable:是否可以被测量
- ProgressEvent.loaded:已经加载量
- ProgressEvent.total:总数据量


# 总结
只要是能得到progressEvent对象，那么就可以计算出进度了`ProgressEvent.loaded/ProgressEvent.total`

progressEvent对象就这个作用，没有其他功能
# links

- [https://developer.mozilla.org/zh-CN/docs/Web/API/ProgressEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/ProgressEvent)