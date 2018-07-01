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
- flex-flow:flex-direction属性和flex-wrap属性的简写形式，默认值为 **row nowrap**
- justify-content:水平对齐方式( **flex-start** | flex-end | center | space-between | space-around)
- align-items:垂直对齐方式( flex-start | flex-end | center | baseline | **stretch**)
- align-content:多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。(flex-start | flex-end | center | space-between | space-around | **stretch** )


## 项目的属性
- order:排列顺序。数值越小，排列越靠前，默认为0
- flex-grow:项目的放大比例，默认为 **0** ，即如果存在剩余空间，也不放大
- flex-shrink:项目的缩小比例，默认为 **1**，即如果空间不足，该项目将缩小。
- flex-basis:在分配多余空间之前，项目占据的主轴空间,浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为 **auto**，即项目的本来大小
- flex:flex-grow, flex-shrink 和 flex-basis的简写，默认值为 **0 1 auto** 。后两个属性可选,(flex:auto===1 1 auto,flex:none===0 0 auto)
- align-self:允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为 **auto**，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch(auto | flex-start | flex-end | center | baseline | stretch)

注意点
- 项目的width,如果容器的空间够用，会按照默认的设置大小展示，如果不够，width会自动调整，所以，width可能会改变
- 项目的float、clear和vertical-align会失效
- 如果项目未设置高度或设为auto，将占满整个容器的高度。设置了的话，就按照设置的高度展示，一般不能设置height
- align-content定义的是多根轴线的对齐方式，不是项目，是轴线，比如定义为stretch，那么表示的意思就是多个轴线将拉伸，占满整个容器
