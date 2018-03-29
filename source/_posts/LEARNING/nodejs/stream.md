---
title: stream
categories: 
- LEARNING
- nodejs
tags:
- js
---

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
- 如何自己写一个对象，让这个对象拥有stream接口呢？


