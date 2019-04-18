---
title: zlib
categories: 
- NODEJS
---

# zlib
The zlib module provides compression functionality implemented using Gzip and Deflate/Inflate

zlib模块提供了Gzip和Deflate/Inflate的压缩函数

- zlib.createDeflate([options])
- zlib.createDeflateRaw([options])
- zlib.createGunzip([options]):gzip解压缩
- zlib.createGzip([options]):gzip压缩
- zlib.createInflate([options])
- zlib.createInflateRaw([options])
- zlib.createUnzip([options])


# 总结

zlib是duplex和transform的stream

所以可以放到pipe链条的中间

但是nodejs中提供的zlib主要是为steam服务的

这样就会导致很多问题，比如，将一个文件夹压缩到一个压缩包里面，就无法实现

需要借助其他第三方包
# links
- [https://github.com/archiverjs/node-archiver](https://github.com/archiverjs/node-archiver)
- [https://github.com/Stuk/jszip](https://github.com/Stuk/jszip)