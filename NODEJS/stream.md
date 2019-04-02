---
title: stream
categories: 
- NODEJS
---

# stream
在node中，最基础的两个模块是event和stream

event模块使得node有了事件机制

stream模块使得node可以更完美的处理数据流(网络数据，文件数据等等)

http，process.stdin,process.stdout,fs等基本的模块和对象都部署了流接口，可见流的重要性

# 分类
stream一共分为五种类型的流

- stream.readable:
- stream.writable:
- stream.duplex:(双工流，可读可写)
- stream.transform:(传输流，虽然可读可写，但是并不保存数据，只负责处理流经它的数据)
- classic writable流:(很少使用)

> 我们主要关注stream.readable,stream.writeable

所有的流，无论是什么类型的，都有pipe()方法


# stream.readable,stream.writable

这两种类型的流最常用，创建的格式都类似，但是拥有的方法各不相同

```
const Readable = require("stream").Readable;
const Writable = require("stream").Writable;
let rd = new Readable();
let wd = new Writable();
```

# stream.readable
一下代码基本不可能出现在实际应用中

```
const Readable = require("stream").Readable;
let rd = new Readable();
rd.push("aaa");//可以向数据流中写入数据
rd._read = function() {//必须部署这个方法，否则会报错
  
};
rd.pipe(process.stdout);//指定输出对象
```
在fs中，我们需要指定文件目录(数据源)，纯stream.readable中可以自己手动写入数据

# stream.writable

```
const Writable=require('stream').Writable;
let ws=new Writable();
ws._write=function(chunk,encoding,next){
    //自定义stream.writable的处理程序
    console.log(chunk.toString());
    next();//执行下一次数据写入
}
ws.write('888');//写入数据
ws.end('999');//结束写入，最后也可以带点数据

```
可以看到writable的一个重要的点，就是可以自定义数据处理函数
其中的write(),end()方法在http模块中经常看到





































# 可读数据流


## 方法
- read():系统缓存读取并返回数据,该方法可以接受一个整数作为参数，表示所要读取数据的数量，然后会返回该数量的数据。如果读不到足够数量的数据，返回null。如果不提供这个参数，默认返回系统缓存之中的所有数据
- pause():暂停读取
- resume():恢复读取
- setEncoding():设置编码
- isPaused():是否暂停
- pipe():
- unpipe()
## 事件
- readable
- data
- end
- close
- error




# 可写数据流


## 方法
- write():向“可写数据流”写入数据,它接受两个参数，一个是写入的内容，可以是字符串，也可以是一个stream对象（比如可读数据流），另一个是写入完成后的回调函数
- setDefaultEncoding()
- end():end方法用于终止“可写数据流”。该方法可以接受三个参数，全部都是可选参数。第一个参数是最后所要写入的数据，可以是字符串，也可以是stream对象；第二个参数是写入编码；第三个参数是一个回调函数，finish事件触发时，会调用这个回调函数。
## 事件
- drain:writable.write(chunk)返回false以后，当缓存数据全部写入完成，可以继续写入时，会触发drain事件。
- finish
- pipe
- unpipe
- error


# 可读写数据流



# 哪些是可读数据流
http.request
fs.createReadStream
process.stdin

# 哪些是可写数据流
http.response
fs.createWriteStream
process.stdout


# 总结
按照分类来记忆，一共就分为两大类，可写和可读数据流，这个需要分清楚，可写数据流有哪些方法和事件，可读数据流有哪些方法和事件
然后记住那些常见的对象有可写数据流接口和可读数据流接口

# 问题



# 链接
[https://github.com/jabez128/stream-handbook](https://github.com/jabez128/stream-handbook)