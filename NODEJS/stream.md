---
title: stream
categories: 
- NODEJS
---

# stream

A stream is an abstract interface for working with streaming data in Node.js. The stream module provides a base API that makes it easy to build objects that implement the stream interface.

stream是一个抽象的接口，在nodejs中用来处理`流动数据`

Streams can be readable, writable, or both. All streams are instances of EventEmitter.

stream分为可写，可读，或者两者皆可，所有的stream都是EventEmitter的实例


# Types of Streams

- Writable - streams to which data can be written (for example, fs.createWriteStream()).
- Readable - streams from which data can be read (for example, fs.createReadStream()).
- Duplex - streams that are both Readable and Writable (for example, net.Socket).
- Transform - Duplex streams that can modify or transform the data as it is written and read (for example, zlib.createDeflate()).


# 流的工作原理

### 如何高效的处理数据？

流其实是解决这个问题才出现的，如果将数据一次性读取到内存再处理，会有以下问题

- 等待时间长
- 内存占用大

所以，如果是读取写大文件，一次性读取性能很低

流就是针对这种情况的一种解决方法

以读取数据为例：

先在内存中开辟一小段内存，先读取部分数据到该段内存中，读取完成后就立即`消费掉(处理掉)`，处理后，将该段内存清空

然后再次读取剩下的部分数据到内存中，以此循环往复，宏观上看，就像流水一样

----------

nodejs中，开辟的内存直接使用Buffer来实现，可以设置buffer的大小(通过highwatermark option)







# Object Mode(对象模式)

All streams created by Node.js APIs operate exclusively on strings and Buffer (or Uint8Array) objects. It is possible, however, for stream implementations to work with other types of JavaScript values (with the exception of null, which serves a special purpose within streams). Such streams are considered to operate in "object mode".

所有的stream都只能是基于strings和Buffer的

但是也可以使用对象模式



# Buffering

Both Writable and Readable streams will store data in an internal buffer that can be retrieved using `writable.writableBuffer` or `readable.readableBuffer`, respectively.

可写流和可读流，都会将数据存储在内部的buffer中，可以使用`writable.writableBuffer` or `readable.readableBuffer`获取到

The amount of data potentially buffered depends on the highWaterMark option passed into the stream's constructor. For normal streams, the highWaterMark option specifies a total number of bytes. For streams operating in object mode, the highWaterMark specifies a total number of objects.

每次的传输的数据量，可以通过`highWaterMark`来设置，默认指定的是`bytes`的数量

Data is buffered in Readable streams when the implementation calls stream.push(chunk). If the consumer of the Stream does not call stream.read(), the data will sit in the internal queue until it is consumed.

可读流中，`stream.push(chunk)`会将数据放到buffer中，如果消费者没有调用`stream.read()`，数据就会一直在内部的队列中，等待消费者消费掉


Once the total size of the internal read buffer reaches the threshold specified by highWaterMark, the stream will temporarily stop reading data from the underlying resource until the data currently buffered can be consumed (that is, the stream will stop calling the internal readable._read() method that is used to fill the read buffer).

如果传入的数据的数量超过了设置的阙值，那么stream就会停止读取数据，直到消费者消费掉数据(通过`readable._read()`来消费掉)

Data is buffered in Writable streams when the writable.write(chunk) method is called repeatedly. While the total size of the internal write buffer is below the threshold set by highWaterMark, calls to writable.write() will return true. Once the size of the internal buffer reaches or exceeds the highWaterMark, false will be returned.

在写数据流中，使用` writable.write(chunk)`写入数据，没有超过设置的最大值的时候，返回值是true，超过的话，就会返回false

A key goal of the stream API, particularly the stream.pipe() method, is to limit the buffering of data to acceptable levels such that sources and destinations of differing speeds will not overwhelm the available memory.

一个核心的api，就是`stream.pipe()`,它会限制缓存的数据在一个合理的范围内，不至于内存溢出

Because Duplex and Transform streams are both Readable and Writable, each maintains two separate internal buffers used for reading and writing, allowing each side to operate independently of the other while maintaining an appropriate and efficient flow of data. For example, net.Socket instances are Duplex streams whose Readable side allows consumption of data received from the socket and whose Writable side allows writing data to the socket. Because data may be written to the socket at a faster or slower rate than data is received, it is important for each side to operate (and buffer) independently of the other.

Duplex和Transform流都是可读和可写流，每个都维护了两个`独立`的buffer分别用来读和写


# Writable Streams

nodejs中，使用`Class: stream.Writable`来实现

以下模块都实现了writable stream接口

- HTTP requests, on the client
- HTTP responses, on the server
- fs write streams
- zlib streams
- crypto streams
- TCP sockets
- child process stdin
- process.stdout, process.stderr

## 事件

- close:底层数据关闭，这个事件表示不会再有其他事件触发了
- drain:数据流入完成(也就是数据写入完成)
- error:数据报错
- finish:
- pipe
- unpipe

### close

The 'close' event is emitted when the stream and any of its underlying resources (a file descriptor, for example) have been closed. The event indicates that no more events will be emitted, and no further computation will occur.


底层资源关闭，这个事件指示不会再有其他事件会被触发了
### drain
If a call to stream.write(chunk) returns false, the 'drain' event will be emitted when it is appropriate to resume writing data to the stream.

如果`stream.write(chunk)` 返回了false(也就是说buffer已经满了)

当如果又可以写入数据的时候，`drain`事件才是被触发

### error
数据报错
### finish

The 'finish' event is emitted after the stream.end() method has been called, and all data has been flushed to the underlying system.

finish事件会在调用`stream.end()`之后发出，并且所有的数据都会被写到底层系统中

### pipe
The 'pipe' event is emitted when the stream.pipe() method is called on a readable stream, adding this writable to its set of destinations.


当`stream.pipe()`方法被调用后，pipe事件会被触发

### unpipe

对应`stream.unpipe()`

## 方法

- writable.cork()
- writable.uncork()
- writable.end([chunk][, encoding][, callback])
- writable.write(chunk[, encoding][, callback])
- writable.destroy()


###　writable.cork()

###　writable.uncork()


###　writable.end([chunk][, encoding][, callback])

###　writable.write(chunk[, encoding][, callback])



###　writable.destroy()


# Readable Streams

- HTTP responses, on the client
- HTTP requests, on the server
- fs read streams
- zlib streams
- crypto streams
- TCP sockets
- child process stdout and stderr
- process.stdin

这些接口都实现了readable接口

## Two Reading Modes

Readable streams effectively operate in one of two modes: `flowing` and `paused`. 

可读流有两种模式，流动和暂停

In flowing mode, data is read from the underlying system automatically and provided to an application as quickly as possible using events via the EventEmitter interface.

流动模式中，数据会从底层自动的读取，提供给程序，通过eventEmitter接口，可以实现竟可能的快

In paused mode, the stream.read() method must be called explicitly to read chunks of data from the stream.


暂停模式中，必须显示调用`stream.read()`才会在stream中继续读取chunks


两种模式可以切换

#### paused---->flowing:

- Adding a 'data' event handler.
- Calling the stream.resume() method.
- Calling the stream.pipe() method to send the data to a Writable.

#### flowing---->paused:

- If there are no pipe destinations, by calling the stream.pause() method.
- If there are pipe destinations, by removing all pipe destinations. Multiple pipe destinations may be removed by calling the stream.unpipe() method.

The important concept to remember is that a Readable will not generate data until a mechanism for either consuming or ignoring that data is provided. If the consuming mechanism is disabled or taken away, the Readable will attempt to stop generating the data.

这里有一个重要的概念，如果没有消费或者忽略数据的机制提供给readable的话，readable是不会产生数据的


If a Readable is switched into flowing mode and there are no consumers available to handle the data, that data will be lost. This can occur, for instance, when the readable.resume() method is called without a listener attached to the 'data' event, or when a 'data' event handler is removed from the stream.

如果处在floowing模式中，并且没有消费者，那么数据就会丢失


## Three States

- readable.readableFlowing === null
- readable.readableFlowing === false
- readable.readableFlowing === true


### readable.readableFlowing === null

readable没有消费者

### readable.readableFlowing === false

paused

### readable.readableFlowing === true

flowing

## Choose One API Style

Readable 很早就出现在nodejs中，几经变化

Use of the readable.pipe() method is recommended for most users as it has been implemented to provide the easiest way of consuming stream data.

使用pipe方法是推荐的

## 事件

- end
- error
- readable
### 方法

- readable.destroy([error])
- readable.isPaused()
- readable.pause()
- readable.pipe(destination[, options])
- readable.read([size])
- readable.resume()
- readable.setEncoding(encoding)
- readable.unpipe([destination])
- readable.unshift(chunk)
- readable.wrap(stream)


# Duplex and Transform Streams

这两个用的比较少，但是有一个特点，只要是实现了这两个流，就有一个特点

`readableStream.pipe(duplex/Transform).pipe(writableStream)`

也就是说，duplex可以放到pipe链条中的中间pipe中

### Duplex 

- TCP sockets
- zlib streams
- crypto streams

### stransform

- zlib streams
- crypto streams

# 总结

nodejs中几乎所有重要的模块都是基于stream的

stream的思想是来自linux的，实现机制是通过eventEmitter和Buffer来实现的

虽然理解的概念很多，但是stream提供了一个最佳方案，就是`pipe()`
