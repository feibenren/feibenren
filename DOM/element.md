---
title: ELEMENT
categories: 
- DOM
---

# ELEMENT

ELEMENT对象是所有的html元素的基对象

但是所有的html元素对象并不是直接继承自ELEMENT,而是`HTMLElement`


# HTMLElement

HTMLElement这个类型主要添加了一些属性

- id
- className
- title
- .......

# 属性

- getAttribute()
- setAttribute()
- removeAttribute()
- ELEMENT.CommonAttribute
- ELEMENT.attributes


# 方法
- ELEMENT.scrollIntoView()
- 


# ELEMENT.scrollIntoView()

这是一个非标准接口

```
element.scrollIntoView(); // 等同于element.scrollIntoView(true) 
element.scrollIntoView(alignToTop); // Boolean型参数 
element.scrollIntoView(scrollIntoViewOptions); // Object型参数
```

### scrollIntoViewOptions

- behavior:`auto(default)`,`instant`,`smooth`,Defines the transition animation.
- block:`start|center(deafult)|end|nearest`,Defines vertical alignment.
- inline: `start|center(deafult)|end|nearest`,Defines horizontal alignment.


[https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView)









































# 属性
- attributes，id，tagName
- innerHTML，outerHTML
- children，childElementCount，firstElementChild，lastElementChild
- nextElementSibling，previousElementSibling
- className，classList
- clientHeight，clientLeft，clientTop，clientWidth
- scrollHeight，scrollWidth，scrollLeft，scrollTop

# 方法
- hasAttribute()，getAttribute()，removeAttribute()，setAttribute()
- querySelector()，querySelectorAll()，getElementsByClassName()，getElementsByTagName()
- closest()，matches()
- addEventListener()，removeEventListener()，dispatchEvent()
- getBoundingClientRect()，getClientRects()
- insertAdjacentHTML()，remove()
- scrollIntoView()

