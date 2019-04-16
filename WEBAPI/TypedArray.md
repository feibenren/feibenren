---
title: TypedArray
categories: 
- WEBAPI
---

# TypedArray

一个TypedArray 对象描述一个底层的二进制数据缓存区的一个类似数组(array-like)视图。事实上，没有名为 TypedArray的全局对象，也没有一个名为的 TypedArray构造函数。相反，有许多不同的全局对象，下面会列出这些针对特定元素类型的类型化数组的构造函数。





# 语法

```
new TypedArray(); // ES2017中新增
new TypedArray(length); 
new TypedArray(typedArray); 
new TypedArray(object); 
new TypedArray(buffer [, byteOffset [, length]]); 

TypedArray()指的是以下的其中之一： 

Int8Array(); 
Uint8Array(); 
Uint8ClampedArray();
Int16Array(); 
Uint16Array();
Int32Array(); 
Uint32Array(); 
Float32Array(); 
Float64Array();
```


# 属性

- TypedArray.name:构造器名称
- TypedArray.prototype.buffer 
- TypedArray.prototype.byteLength 
- TypedArray.prototype.byteOffset 
- TypedArray.prototype.length



# 方法

- TypedArray.from() 
- TypedArray.of()

- TypedArray.prototype.entries()
- TypedArray.prototype.every()
- TypedArray.prototype.fill()
- TypedArray.prototype.filter()
- TypedArray.prototype.find()
- TypedArray.prototype.findIndex()
- TypedArray.prototype.forEach()
- TypedArray.prototype.includes() 
- TypedArray.prototype.indexOf()
- TypedArray.prototype.join()
- TypedArray.prototype.keys()


# 复合视图
由于视图的构造函数可以指定起始位置和长度，所以在同一段内存之中，可以依次存放不同类型的数据，这叫做“复合视图”

# 总结

typedArray是arrayBuffer的视图类，用来操作arraybuffer

通过使用不同的视图，可以按照不同的格式来操作arraybuffer

typedArray和数组方法基本一致


# links

- [http://javascript.ruanyifeng.com/stdlib/arraybuffer.html](http://javascript.ruanyifeng.com/stdlib/arraybuffer.html)
- [https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)
- []()
- []()
- []()