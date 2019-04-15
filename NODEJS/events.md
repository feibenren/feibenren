---
title: events
categories: 
- NODEJS
---

# events

Much of the Node.js core API is built around an idiomatic asynchronous event-driven architecture in which certain kinds of objects (called "emitters") emit named events that cause Function objects ("listeners") to be called.

很多nodejs的核心api，都是构建在` idiomatic asynchronous event-driven architecture(惯用的异步事件驱动的架构)`上的

这个架构中，某些对象(叫做`emitters`)会发射带有名字的事件，这些事件会导致某些函数(listeners)被调用


All objects that emit events are instances of the EventEmitter class


示例

```
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');
```

# Passing arguments and `this` to listeners

event会传递arguments和this给listeners，但是如果使用了箭头函数，那么this就是一个空对象了


# Class: EventEmitter


The EventEmitter class is defined and exposed by the events module:

EventEimtter类是通过events模块来定义和暴露的

- emitter.addListener(eventName, listener)
- emitter.emit(eventName[, ...args])
- emitter.eventNames()
- emitter.getMaxListeners()
- emitter.listenerCount(eventName)
- emitter.listeners(eventName)
- emitter.off(eventName, listener)
- emitter.on(eventName, listener)
- emitter.once(eventName, listener)
- emitter.prependListener(eventName, listener)
- emitter.prependOnceListener(eventName, listener)
- emitter.removeAllListeners([eventName])
- emitter.removeListener(eventName, listener)
- emitter.setMaxListeners(n)
- emitter.rawListeners(eventName)



# emitter.addListener(eventName, listener)

Alias for emitter.on(eventName, listener).

# emitter.emit(eventName[, ...args])
Synchronously calls each of the listeners registered for the event named eventName, in the order they were registered, passing the supplied arguments to each.


同步调用注册的listeners函数，会按照他们注册时候的顺序进行调用

会传递参数给每个listener


# emitter.eventNames()

Returns an array listing the events for which the emitter has registered listeners. The values in the array will be strings or Symbols.

返回注册的事件名，是一个数组

# emitter.getMaxListeners()

# emitter.listenerCount(eventName)
# emitter.listeners(eventName)

# emitter.off(eventName, listener)
Alias for emitter.removeListener().

# emitter.on(eventName, listener)

Adds the listener function to the end of the listeners array for the event named eventName. No checks are made to see if the listener has already been added. Multiple calls passing the same combination of eventName and listener will result in the listener being added, and called, multiple times.

添加listenr到listens数组的尾部

并且添加的时候不会检查是否被添加过，如果多次被添加，那么这个listener会被调用多次

# emitter.once(eventName, listener)

listener只相应一次，其他都会被忽略

# emitter.prependListener(eventName, listener)
和on函数类似，但是这个listener被添加到listeners数组的头部

# emitter.prependOnceListener(eventName, listener)
# emitter.removeAllListeners([eventName])
# emitter.removeListener(eventName, listener)
# emitter.setMaxListeners(n)
# emitter.rawListeners(eventName)

