---
title: Node
categories: 
- DOM
---




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


