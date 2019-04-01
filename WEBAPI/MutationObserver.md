---
title: MutationObserver
categories: 
- WEBAPI
---

# MutationObserver

MutationObserver接口用来监控DOM的变化

# 构造函数

```
new MutationObserver(callback)
```
创建一个observer，并且给定回调函数

如果检测到变动，就会执行回调

回调参数是一个`MutationRecord`

# 方法

- MutationObserver.observe()
- MutationObserver.disconnect()
- MutationObserver.takeRecords()


# MutationObserver.observe()

```
mutationObserver.observe(target,MutationObserverInit)
```
通过定义`MutationObserverInit`来监听的target

# MutationObserver.disconnect()
取消监听
# MutationObserver.takeRecords()
由于MutationObserver是异步的

也就是说，浏览器监听到对应的mutaion后，不会立即调用callback

而是等到DOM操作完成后，再执行回调

-------------
有这种情况：`如果DOM操作还没完成，调用disconnect()后，还有一些mutation没有传递给callback，这会造成丢失`

`tackRecords()`就是用来处理这种情况:返回没有传递给callback的mutation，然后清空队列


# LINKS
- [https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver)