---
title: Document
categories: 
- DOM
---

# Document类型

![DOM](./images/NODE.png)

这里要说的是document对象的proto,`Document类型`

document对象不是直接继承自`Document类型`的，而是继承自`HTMLDocument类型`

document对象表示的是`加载好的网页(DOM TREE)`，利用document对象可以操作这个加载好的网页

# 子节点

document对象的子节点`常见的`就两个，dtd和html

- document.doctype----------dtd
- document.documentElement----------html

这两个都是快捷属性，方便调用

# 快捷属性

快捷属性还有很多

- document.title
- document.head
- document.body
- document.forms
- document.images
- document.anchors
- document.links

等等

# 扩展
document表示的`dom tree`,但是还有些东西不应该归属于`dom tree`

- document.cookie
- document.url
- document.reffer

# 查找元素

- document.getElementById()
- document.queryselector()
- document.queryselectorAll()
- document.getElementByClassName()
- document.getElementByTagName()

document用来查找元素的方法是最多的，同时

Elment对象也有查找元素的需求，也使用了以上的方法，但是没有`document.getElementById()`这个方法


# 创建元素

document.createElement()

元素的删除，修改，移动都可以通过NODE类型来实现，为什么偏偏将创建功能放到document上？

细想原因也简单，通过NODE创建的元素，可能会误认为是创建的子元素，通过document则没有这个误解

# 文档写入

- document.write()
- document.writeln()
- document.open()
- document.close()

这里的open和close需要说明一下

open打开的是`document stream`,而write就是往这里面写数据

`document stream`在未加载完前是打开的，加载完成后是关闭的

但是如果重新打开的话，表示的是`删除原来的document，新建一个新的document stream`

这就是为什么不推荐使用这些方法的原因了



