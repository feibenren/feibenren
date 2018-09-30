---
title: events
categories: 
- NODEJS
---

# events
node中的最重要的模块，没有之一，因为node就是基于事件机制的，而他提供 **唯一接口**，node内置的模块，都继承events模块来实现事件机制，因为它是唯一，所以都得继承他才可以实现事件机制

该对象就一个属性 **events.EventEmitter**，这个属性的作用就是一个事件的添加，发射，删除，功能

# EventEmitter 常用方法
- EventEmitter.on(event,listener):绑定事件处理函数
- EventEmitter.once(event,listener):同上，就触发一次
- EventEmitter.emit(event,[arg1],[arg2]):触发事件
- EventEmitter.removeListener(event,listener):删除对应event的listener
- EventEmitter.removeAllListeners([event]):删除对应的event的所有listener

通过这些方法，可以看到，一个事件可以绑定多个listener

示例:

```
const events=require('events');
let my_emitter=new events.EventEmitter();
my_emitter.on('e1',function(){
    console.log('e1....')
});
my_emitter.emit('e1');
```

# error事件
EventEmitter定义了一个特殊的事件，error，这个事件包含了一些错误的信息，我们不同给传递参数

如果系统没有捕获这个事件的话，node会退出的

示例:
```
const events=require('events');
let my_emitter=new events.EventEmitter();
my_emitter.on('error',function(data){
    console.log(data)
});
my_emitter.emit('error','error message');
```
那么是不是以后都必须写error捕获函数了？
