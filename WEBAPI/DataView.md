---
title: DataView
categories: 
- WEBAPI
---
# DataView

DataView 视图是一个可以从 ArrayBuffer 对象中读写多种数值类型的底层接口，使用它时，不用考虑不同平台的`字节序`问题。


# 语法

```
new DataView(buffer [, byteOffset [, byteLength]])
```


# 方法


- DataView.prototype.getInt8(byteOffset)
- DataView.prototype.getUint8(byteOffset)
- DataView.prototype.getInt16(byteOffset)
- DataView.prototype.getUint16(byteOffset)
- DataView.prototype.getInt32(byteOffset)
- DataView.prototype.getUint32(byteOffset)
- DataView.prototype.getFloat32(byteOffset)
- DataView.prototype.getFloat64(byteOffset)


## dataview.getInt8(byteOffset)

从DataView起始位置以byte为计数的指定偏移量(byteOffset)处获取一个8-bit数(一个字节).



- DataView.prototype.setInt8(byteOffset, value)
- DataView.prototype.setUint8(byteOffset, value)
- DataView.prototype.setInt16(byteOffset, value)
- DataView.prototype.setUint16(byteOffset, value)
- DataView.prototype.setInt32(byteOffset, value)
- DataView.prototype.setUint32(byteOffset, value)
- DataView.prototype.setFloat32(byteOffset, value)
- DataView.prototype.setFloat64(byteOffset, value)

## dataview.setInt8(byteOffset, value)



# 总结

如果arrayBuffer数据都是用处理格式，那么和typeArray差别不大

DataView的优势在于可以按照不同的格式处理一个数据

# links

- [http://javascript.ruanyifeng.com/stdlib/arraybuffer.html](http://javascript.ruanyifeng.com/stdlib/arraybuffer.html)
- [https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)
- []()
- []()
- []()