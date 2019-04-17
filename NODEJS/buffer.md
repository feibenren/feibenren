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


# 静态方法

- Class Method: Buffer.alloc(size[, fill[, encoding]])
- Class Method: Buffer.byteLength(string[, encoding])
- Class Method: Buffer.compare(buf1, buf2)
- Class Method: Buffer.concat(list[, totalLength])
- Class Method: Buffer.from(array)
- Class Method: Buffer.isBuffer(obj)
- Class Method: Buffer.isEncoding(encoding)

# 属性

- 
- 


# 方法

- buf.readDoubleBE(offset)
- buf.readDoubleLE(offset)
- buf.readFloatBE(offset)
- buf.readFloatLE(offset)
- buf.readInt8(offset)
- buf.readInt16BE(offset)
- buf.readInt16LE(offset)
- buf.readInt32BE(offset)
- buf.readInt32LE(offset)
- buf.readIntBE(offset, byteLength)
- buf.readIntLE(offset, byteLength)
- buf.readUInt8(offset)
- buf.readUInt16BE(offset)
- buf.readUInt16LE(offset)
- buf.readUInt32BE(offset)
- buf.readUInt32LE(offset)


- buf.values()
- buf.write(string[, offset[, length]][, encoding])
- buf.writeDoubleBE(value, offset)
- buf.writeDoubleLE(value, offset)
- buf.writeFloatBE(value, offset)
- buf.writeFloatLE(value, offset)
- buf.writeInt8(value, offset)
- buf.writeInt16BE(value, offset)
- buf.writeInt16LE(value, offset)
- buf.writeInt32BE(value, offset)
- buf.writeInt32LE(value, offset)
- buf.writeIntBE(value, offset, byteLength)
- buf.writeIntLE(value, offset, byteLength)
- buf.writeUInt8(value, offset)
- buf.writeUInt16BE(value, offset)
- buf.writeUInt16LE(value, offset)
- buf.writeUInt32BE(value, offset)
- buf.writeUInt32LE(value, offset)

# 总结

- Buffer对象都是在内存中的
- 继承自util8Int
- 和DataView,TypeArray很多方法类似