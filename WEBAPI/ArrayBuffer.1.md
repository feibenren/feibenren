---
title: ArrayBuffer
categories: 
- WEBAPI
---

# ArrayBuffer

ArrayBuffer 对象用来表示通用的、固定长度的原始`二进制数据缓冲区`。ArrayBuffer 不能直接操作，而是要通过`类型数组对象`或 `DataView` 对象来操作，它们会将缓冲区中的数据表示为特定的格式，并通过这些格式来读写缓冲区的内容。


The ArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer. You cannot directly manipulate the contents of an ArrayBuffer; instead, you create one of the typed array objects or a DataView object which represents the buffer in a specific format, and use that to read and write the contents of the buffer.



（1）ArrayBuffer对象：代表内存之中的一段二进制数据，可以通过“视图”进行操作。“视图”部署了数组接口，这意味着，可以用数组的方法操作内存。

（2) TypedArray对象：用来生成内存的视图，通过9个构造函数，可以生成9种数据格式的视图，比如Uint8Array（无符号8位整数）数组视图, Int16Array（16位整数）数组视图, Float32Array（32位浮点数）数组视图等等。

（3）DataView对象：用来生成内存的视图，可以自定义格式和字节序，比如第一个字节是Uint8（无符号8位整数）、第二个字节是Int16（16位整数）、第三个字节是Float32（32位浮点数）等等。




视图的作用是以指定格式解读二进制数据




ArrayBuffer对象代表原始的二进制数据，
TypedArray对象代表确定类型的二进制数据，
DataView对象代表不确定类型的二进制数据。

# 属性

# 方法



# links

- [https://developer.mozilla.org/zh-CN/docs/Web/API/ArrayBuffer](https://developer.mozilla.org/zh-CN/docs/Web/API/ArrayBuffer)
- [http://javascript.ruanyifeng.com/stdlib/arraybuffer.html](http://javascript.ruanyifeng.com/stdlib/arraybuffer.html)
- []()
- []()
- []()
- []()