---
title: CSS
categories: 
- BROWSER
---

在GUI线程中，没细说style tree，到底是怎么和DOM tree 合并的

也就是说，一个tree型的数据结构和另外一个tree形的数据结构，会生成一个bitmap，这是怎么实现的？

# 0

在http刚出来的时候，是没有css的

html规定的仅仅是语义，但是具体怎么展示，没有规定

那么浏览器就按照自己的理解来展示对应的语义了

如果内容比较多，想要美化一下，就直接放到表格中就可以了

所有的表格都是得对齐的，就可以做到这个目的

# 1

后来www飞速发展，导致好不好看现在开始变得很重要

table元素，本意是展示数据，不应该成为布局的工具

这个时候出现了很多关于这个问题的解决方法

比如，提出一个DOM元素对应一个修饰属性，通过这些修饰属性来修饰该元素

或者新建一个样式文件，将所有修饰的规则放到这个文件中

等等

最后，一种叫做`层叠样式表`的技术胜出

其实`样式表`的概念之前已经有了，但是`层叠`的概念还是第一次提出

简单说，样式是可以继承的


# 浏览器实现

试想一下，浏览器 得到了style tree，和dom tree，怎么去创建bitmap呢？

思路:

- 1、匹配对应元素
- 2、渲染对应的元素


### 匹配对应元素

如果dom tree上面有100个节点，css有100个rule，那么想要匹配的话，每个节点岂不是要试100次？

这样得有100*100次的匹配，那么会太慢

这时候需要使用一定方法来进行优化

简单来说就是分类


### 渲染对应的元素

因为每一个dom节点，都是有语义的，而不用的语义，对应的展示规则应该也不一样

```
div{
    width:100px;
    height:100px;
    background:#f00;
}
```
比如这个div，具体应该怎么执行渲染呢？


css提出了一个模型`可视化格式模型`，应对渲染



# 可视化格式模型

这个本质上就是`一组渲染规则`，通过这个规则，可以渲染bitmap

简单说，浏览器通过这个`渲染规则`，来进行渲染render tree

官方说明:可视化格式模型是浏览器在显示文档时的处理方式

可以分为两部分说，一个是每个元素的自身，一个是元素和元素之间的关系


# 盒子模型

`这组渲染规则`，规定为每个dom元素，生成多个box，来处理每个元素涉及到自身的展示规范

- content box:盛放内容的盒子
- padding box:内边距的盒子
- border box:边框的盒子
- margin box:外边距的盒子

这四个盒子层层嵌套，用来表示自身的排版布局



# 布局

每个元素的自身(通过盒子模型)都确定了

但是每个盒子之间的关系是怎么样的？

如果仅仅是一个盒子一个盒子的垂直排列，是无法达到目标的

需要针对这种情况设计更多的规则

这里有很多规则，不同的规则，可以有不同的排列规则

涉及到很多概念

总的来说，`盒子和盒子之间的关系`会受到很多因素影响

- box类型
- box尺寸
- 定位方案
- 外部信息，例如图片大小和屏幕大小

### box类型

比如，如果一个html，表示的是标题，按照尝试，应该是占据一行的

如果是三个普通的链接，应该是三个可以并列排序的


## 包含块（Contain Block）

contain block 仅仅是一个概念，为后面的的规则设定，确定了一个前提条件

总的来说，一个元素的尺寸，位置，可能需要和某个特定元素相关，而这个特定元素，就被称为`contain block`

比如

```
<div class="container">
    <div class="box"></div>
</div>
```

比如如果`.box`的宽度设置为`width:30%`,那么他的宽度就是`contain box`的宽度的30%

还有定位，如果`.box`是决定定位，那么他定位是相对于谁定位的？

相对于`contain box`定位

还有fixed，它的contain  box就是可视窗口


-------------

综上，`contain box`是一个概念，有些css的数值计算，是根据这个概念来的，同时，也可以通过css命令来修改contain box对应的具体元素


## 控制框（Controlling Box）

这也是一种规则，规定了一些box的展示规则

简单分为`block box`和`line box`

其实这个地方个人决定命名为`block rule`，`line rule`更合适

所有都是box容易有歧义

### block rule

使用这种rule的元素会有一些特性

- 这个box占据一整行
- 这个box里面只能包含`inline box` 或者`block box`,不能混杂

应用于`block rule`的元素，被称为`block element(块级元素)`

这也就是块级元素为什么会有那些特性的原因

### line box

这种box的特性:

- 这种box能排在一行，允许左右有其它元素


行内元素就是这么来的


# 定位方案

涉及到布局的，还有一个因素，就是定位方案

通过`contain box `, `control box`,这两个箱子，基本可以实现元素的展示

比如
```
<h1>xxxx</h1>
<p>
    <span>ggg</span>
    <span>ggg</span>
    <span>ggg</span>
</p>
<div class="box">
    <div class="rect"></div>
</div>
```
通过上面的机制

`h1`,`p`,`div`,`rect`会被当读放到单独一行(block box)

三个`span`会并排展示(inline box)

`.rect`如果设置了百分比宽度，会按照box的宽度进行计算(contain box)

-----------------

三个最外层的元素会怎么排列?

按照直观感觉,应该是从上往下，从左到右

css会按照这种直观感觉，设定`默认的排列规则`

dom元素通过这种默认的排列规则，会像水流一样，形成一种`flow`,这种flow称为`normal flow(常规流，文档流)`

-------------

但是还有一些需求无法满足

比如，希望一张图片在一个段落的开头，文字环绕周围

希望一个元素，永远固定在一个位置

文字居中怎么实现？

希望一个元素右排列

-------------------------

上面的问题，都是定位的问题，css提供了而外两种定位方案

- position
- float


## float

简单说，使用了这种机制，可以使得一个元素脱离`normal flow`

脱离后会怎么办?

一个浮动框，会被向左或向右偏移，直到它的外边界( outter edge，又叫margin edge ) 接触到它 `contain box` 的边界或另一个浮动元素的外边界( outter edge，又叫margin edge ) 

如果存在一个`line box`，浮动框的顶边会和当前行框的顶部对齐

--------------
可以看到，float 元素，脱离原来的位置后，会在，会按照指定的规则定位

-------------
但是使用这种机制，会有一个问题，就是`塌陷`

```
 <div class="parent">
    <div class="child">aaa</div>
</div>
```
比如,child脱离了普通文档流，那么也就说，parent里面没有东西了，如果没有自己设置高度，那么parent就回按照高度为0来进行渲染，这有时候不一定符合我们的预期

## POSITION

这种定位方式就更直接

分为4种
- static:默认，没有效果
- relative:不脱离`normal flow`，会按照原来的位置,移动指定值
- abslote:脱离`normal flow`，会按照`contain box`来移动指定值
- fixed:脱离`normal flow`，会按照可视窗口移动指定值


## 层级

因为有了定位方案

所以，这里就会出现一个问题，`元素重叠`

有时候默认提供的层叠顺序不是我们希望的

css 提供了`z-index`来指定层级顺序

# FC

以上的所有内容，功能已经比较全面了，可以实现基本的功能

--------------------

但是使用的时候，还是会有一个问题，比如

```
<div class="s1">
    <div class="s2">
        <div class="s3"></div>
    </div>
</div>
```
三者都是百分比宽度，这里就有一个问题，s3的实际宽度，收到s1的影响

再比如float会引发塌陷等问题

这时就希望提出一种不受外部影响的机制，这种机制被称为`format context`

又按照box type分为

- `block format content(BFC)`
- `linke format content(IFC)`


## BFC

- 内部box在垂直方向，一个接一个的放置

- box的垂直方向由margin决定，属于同一个BFC的两个box间的margin会重叠

- BFC区域不会与float box重叠（可用于排版)

- BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此

- 计算BFC的高度时，浮动元素也参与计算（不会浮动坍塌）

可以看到，BFC会影响到`normal flow`

触发BFC的css命令

- 根元素

- float属性不为none

- position为absolute或fixed

- display为inline-block, flex, inline-flex，table，table-cell，table-caption

- overflow不为visible

## IFC

和BFC类似

# 外部信息

外部信息也会影响到排列布局

比如可视区域宽度是100px，那么渲染出来的bitmap，宽度也应该是100px


# css3

以上是css2.1的版本，可以感觉到，盒子模型设计的没有什么问题

但是元素和元素之间的`定位方案`，设计的似乎不足，比如塌陷问题，垂直居中问题

不得已需要引入`FC`的概念，进行弥补，导致问题更加复杂

css3提供了更多专门针对`定位`的解决方案，比如`flex`,`grid`等，使用非常方便

# 总结

`style tree+dom tree->render tree`，这个过程,非常复杂，主要原因就是需要`自定义展示语义化的html标签`

从这个角度看，css样式，本质上就是一条渲染命令，决定了浏览器生成bitmap的结果












# LINS
- [https://www.jianshu.com/p/bca9a8e4b60d](https://www.jianshu.com/p/bca9a8e4b60d)
- [https://bbs.csdn.net/topics/340173664](https://bbs.csdn.net/topics/340173664)
- [https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/](https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/)