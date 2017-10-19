---
title: Node节点
categories: 
- LEARNING
- JAVASCRIPT
tags:
- js
---

## 类型
- Document :文档节点	整个文档（window.document）
- DocumentType :文档类型节点	文档的类型（比如）
- Element:元素节点	HTML元素（比如、等）
- Attribute:属性节点	HTML元素的属性（比如class="right"）
- Text:文本节点	HTML文档中出现的文本
- DocumentFragment:文档碎片节点	文档的片段

## 属性
- nodeName
- nodeType
- ownerDocument
- nextSibling
- previousSibling
- parentNode
- parentElement
- textContent
- nodeValue
- childNodes
- firstNode
- lastChild

## 方法
- appendChild
- hasChildNodes
- cloneNode
- insertBefore:也是内部插入，因为带insert
- removeChild
- replaceChild


节点对象都是单个节点，但是有时会需要一种数据结构，能够容纳多个节点。DOM提供两种接口，用于部署这种节点的集合：NodeList接口和HTMLCollection接口。

## NodeList接口
> 得到NodeList接口的方法
- Node.childNodes
- document.querySelectorAll

	
## HTMLCollection接口
>HTMLCollection接口与NodeList接口类似，也是节点的集合，但是集合成员都是Element节点。该接口都是动态集合，节点的变化会实时反映在集合中。document.links、docuement.forms、document.images等属性，返回的都是HTMLCollection接口对象。


## ParentNode接口，ChildNode接口

不同的节点除了继承Node接口以外，还会继承其他接口。ParentNode接口用于获取当前节点的Element子节点，ChildNode接口用于处理当前节点的子节点（包含但不限于Element子节点）。

## ParentNode接口
ParentNode接口用于获取Element子节点。Element节点、Document节点和DocumentFragment节点，部署了ParentNode接口。凡是这三类节点，都具有以下四个属性，用于获取Element子节点

- children
- firstElementChild
- lastElementChild
- childElementCount

## ChildNode接口
- remove()


