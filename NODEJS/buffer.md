---
title: buffer
categories: 
- NODEJS
---

# buffer

With TypedArray now available, the Buffer class implements the Uint8Array API in a manner that is more optimized and suitable for Node.js.

`TypedArray`现在可以使用，Buffer类就继承了`Uint8Array`的api，因为这样对nodejs来说更合适


Instances of the Buffer class are similar to arrays of integers but correspond to fixed-sized, raw memory allocations outside the V8 heap. The size of the Buffer is established when it is created and cannot be changed.

buffer实例分配的内存地址，是在v8的`堆内存之外`的,并且一旦建立，就不允许修改



# 创建buffer实例

可以通过构造函数来创建`new Buffer()`

但是参数可以是数字，表示长度

可以是字符串，arrayBuffer等其他二进制数据

参数的不同，创建的行为也不一致，这样不好


nodejs现在推荐使用

- Buffer.from():将传入的数据转变成buffer对象
- Buffer.allc():初始化一个buffer对象


To make the creation of Buffer instances more reliable and less error-prone, the various forms of the new Buffer() constructor have been deprecated and replaced by separate Buffer.from(), Buffer.alloc(), and Buffer.allocUnsafe() methods.