---
title: flex
categories: 
- LEARNING
- css
tags:
- css
---

Flex:IE9+支持

[案例地址](http://static.vgee.cn/static/index.html)


> 采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。


## 容器的属性
- flex-direction:主轴的方向(**row** | row-reverse | column | column-reverse)
- flex-wrap:如果一条轴线排不下，如何换行(**nowrap** | wrap | wrap-reverse)
- flex-flow:flex-direction属性和flex-wrap属性的简写形式，默认值为**row nowrap**
- justify-content:水平对齐方式( **flex-start** | flex-end | center | space-between | space-around)
- align-items:垂直对齐方式( **flex-start** | flex-end | center | space-between | space-around)
- align-content:多根轴线（多行）的对齐方式。如果项目只有一根轴线，该属性不起作用。(**flex-start** | flex-end | center | space-between | space-around | stretch)


## 项目的属性
- order:排列顺序。数值越小，排列越靠前，默认为0
- flex-grow:项目的放大比例，默认为0，即如果存在剩余空间，也不放大
- flex-shrink:项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
- flex-basis:在分配多余空间之前，项目占据的主轴空间,浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小
- flex:flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选
- align-self:允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch(auto | flex-start | flex-end | center | baseline | stretch)