---
title: flex
categories: 
- CSS
- LAYOUT

---

# 布局

所谓的布局，是一种基于盒子与其兄弟和祖辈盒子的交互方式来确定盒子的位置和大小的算法

也就是说

`布局是一种算法`

一种`确定大小和位置`的算法

css中的`display`就是设置这种算法的命令


- 块布局：用来布置文件。块布局包含以文档为中心的功能，例如 浮动元素或将其放置在多列上的功能。
- 行内布局：用来布置文本。
- 表格布局：用来布置表格。
- 定位布局：用来对那些与其他元素无交互的定位元素进行布置 。
- 弹性盒子布局：用来布置那些可以顺利调整大小的复杂页面。
- 网格布局：用来布置那些与一个固定网格相关的元素。

flex布局是css3中提出的一种布局方案

之前是没有`布局方案`一说的


- 常规流
- 浮动
- 定位








我们说 flexbox 是一种一维的布局，是因为一个 flexbox 一次只能处理一个维度上的元素布局，一行或者一列。作为对比的是另外一个二维布局 CSS Grid Layout，可以同时处理行和列上的布局。



当使用 flex 布局时，首先想到的是两根轴线 — 主轴和交叉轴。主轴由 flex-direction 定义，另一根轴垂直于它。我们使用 flexbox 的所有属性都跟这两根轴线有关, 所以有必要在一开始首先理解它。



另外一个需要理解的重点是 flexbox 不会对文档的书写模式提供假设。过去，CSS的书写模式主要被认为是水平的，从左到右的。现代的布局方式涵盖了书写模式的范围，所以我们不再假设一行文字是从文档的左上角开始向右书写, 新的行也不是必须出现在另一行的下面


下面的描述是来帮助我们理解为什么不用上下左右来描述 flexbox 元素的方向






您也可以在订单中使用负值，这非常有用。如果您想首先显示一个项目，并保持所有其他项目的顺序不变，您可以给该项目的顺序-1。由于该值低于0，因此将始终首先显示该项目。










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



# links
- [https://developer.mozilla.org/zh-CN/docs/Web/CSS/Layout_mode](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Layout_mode)