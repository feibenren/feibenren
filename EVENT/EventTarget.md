---
title: EventTarget
categories: 
- EVENT
---

# EventTarget


EventTarget is a DOM interface implemented by objects that can receive events and may have listeners for them.

eventTarget是一个DOM接口，这个接口可以接收事件，并且给这些事件设置listener(监听函数)

Element, Document, and Window are the most common event targets, but other objects can be event targets too, for example XMLHttpRequest, AudioNode, AudioContext, and others.

Element，document，window是最常见的 event target，但是 其他的对象也可以，比如 `XMLHttpRequest`

Many event targets (including elements, documents, and windows) also support setting event handlers via onevent properties and attributes.

很多 event targets 也支持 `onevent`属性的设置


> evet target 字面翻译就是 `事件的目标`，其实我决定不翻译最好，就直接使用`event target`这个概念

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