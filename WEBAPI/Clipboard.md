---
title: Clipboard
categories:
  - WEBAPI
---

# Clipboard

- ClipboardEvent.clipboardData 

就一个属性，返回的是一个`DataTransfer`对象


但是由于安全限制，这个属性方法有限,并且不同的事件，对应的方法还不一样

- copy:setData()
- cut:setData()
- paste:getData()

这些方法都是`DataTransfer`对象的方法


[demos](https://codepen.io/feibernren/pen/pYmQER?editors=1010)

# links

- [https://developer.mozilla.org/zh-CN/docs/Web/API/Clipboard](https://developer.mozilla.org/zh-CN/docs/Web/API/Clipboard)
