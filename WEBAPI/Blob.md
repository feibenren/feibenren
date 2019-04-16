---
title: Blob
categories: 
- WEBAPI
---

# Blob（Binary Large Object）


A Blob object represents a `file-like object` of immutable, raw data.

Blob 对象表示一个不可变、原始数据的类文件对象

# 属性
- Blob.type:MIME类型
- Blob.size:字节大小

# 方法



# 和ArrayBuffer的区别

两者都是`二进制数据`的容器，但是

- blob只能读取，不能修改数据

- ArrayBuffer只存在于缓冲区，而blob还可以存在于硬盘

-------------
总的来说，

blob针对的整体(主要是文件)，更宏观

arrayBuffer更底层，可以更加精细处理数据(比如canvas)



# 总结

读取Blob的唯一方法，就是使用`FileReader`


# links

- [https://developer.mozilla.org/zh-CN/docs/Web/API/Blob](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob)
