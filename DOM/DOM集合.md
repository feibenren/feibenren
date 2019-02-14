---
title: Node
categories: 
- DOM
---


# NODE
node对象是所有dom对象的祖先，这个对象挂在的属性和方法，每个DOM对象都拥有

有

- Node类型
- NodeName:
- NodeType:返回Node类型
- NodeValue
- NODE操作:添加，删除，替换等基本操作

# NODE类型


- Node.ELEMENT_NODE(1)；
- Node.ATTRIBUTE_NODE(2)；
- Node.TEXT_NODE(3)；
- Node.CDATA_SECTION_NODE(4)；
- Node.ENTITY_REFERENCE_NODE(5)；
- Node.ENTITY_NODE(6)；
- Node.PROCESSING_INSTRUCTION_NODE(7)；
- Node.COMMENT_NODE(8)；
- Node.DOCUMENT_NODE(9)；
- Node.DOCUMENT_TYPE_NODE(10)；
- Node.DOCUMENT_FRAGMENT_NODE(11)；
- Node.NOTATION_NODE(12)


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


