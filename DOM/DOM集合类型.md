---
title: DOM集合类型
categories: 
- DOM
---

# DOM集合
DOM集合由于需求的不同，分多好多中，每一种集合的产生的方式都不同，每种集合的属性和方法也不一样

这里只讨论4种集合

- NodeList
- HTMLCollection
- NamedNodeMap
- DomTokenList

需要注意的是

### 所有的DOM集合都是`live`的，都是动态的

比如，通过`Node.childNodes`查询到的子节点，是13个，如果在通过js插入一个子节点，那么`Node.childNodes`会立马变成14个，无需再次查询

方便是方便，但是这样对性能有很大影响，所以建议是缓存查询结果

### 三个集合的proto都是Object

不像html元素，层级都很多，集合的层级就很少

### 很少直接使用

# NodeList

NodeList从字面意思上表示的是Node(节点)的列表，只能通过这两种方式获得这种集合:

- Node.childNodes 
- document.querySelectorAll()

Node.childNodes，返回的结果，可能包含文本节点，注释节点等


# HTMLCollection

HTMLCollection从字面表示是`html的集合`,和NodeList的区别是`HTMLCollection只能包含HTML元素`

这个集合可以通过以下的方式来获得:

- getElementsByTagName()
- document.anchors,document.forms,document.images,document.links
- ELEMENT.children

# NamedNodeMap

NamedNodeMap表示的是属性的集合，通过

- ELEMENT.attributes

(注意，不是`NODE.attributes`)

NamedNodeMap集合对象有以下方法

- getNamedItem(name)
- removeNamedItem(name)
- setNamedItem(node)
- item(pos)

但是一般针对属性，很少直接使用，不方便操作，一般都是使用`getAttribute()`,`setAttribute()`来设置和获取

只有在遍历属性的时候会用上


# DomTokenList

这个集合就一种情况出现

- `Element.ClassList`

- add:
- contains: 
- forEach:
- item:
- keys: 
- length: 
- remove: 
- replace: 
- toggle:

这些方法仅仅是为了方便操作class而来的




# links
- [https://developer.mozilla.org/zh-CN/docs/Web/API/NodeList](https://developer.mozilla.org/zh-CN/docs/Web/API/NodeList)