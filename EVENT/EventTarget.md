---
title: EventTarget
categories: 
- EVENT
---

# EventTarget

EventTarget是一个由可以接收事件的对象实现的接口，并且可以为它们创建侦听器。

# 方法

- EventTarget.addEventListener()

- EventTarget.removeEventListener()

- EventTarget.dispatchEvent()



# EventTarget.addEventListener()

在EventTarget上注册特定事件类型的事件处理程序。

addEventListener()的工作原理是将实现EventListener的函数或对象添加到调用它的EventTarget上的指定事件类型的`事件侦听器列表`中。

```
target.addEventListener(type, listener[, options]);
target.addEventListener(type, listener[, useCapture]);
```
- type
表示监听事件类型的字符串。
- listener
回调函数
- options 
    - capture
    - once

# listener

当所监听的事件类型触发时，会接收到一个事件通知（实现了 Event 接口的对象）对象

listener中的this是触发事件的元素的引用，`this == ev.currentTarget`(通过on属性添加的回调不一定)



# EventTarget.removeEventListener()

删除使用 EventTarget.addEventListener() 方法添加的事件


# EventTarget.dispatchEvent()

向一个指定的`EventTarget`派发一个`EventObject`,  并以合适的顺序`同步调用`目标元素相关的事件处理函数。




# links
- [https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget)