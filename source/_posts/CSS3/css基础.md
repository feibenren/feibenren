---
title: css基础
categories: 

- CSS3

---

# margin 垂直方向会叠加，水平方向不会
```
<template>
<div class="cart">
  <div class="box1"></div>
  <div class="box2"></div>
</div>
</template>

<style lang="scss">
  .cart{
    div{
      width:10px;
      height: 10px;
      background-color: #aaa;
      margin: 10px;
      float:left;
    }
  }
</style>

```

```
<template>
<div class="cart">
  <div class="box1"></div>
  <div class="box2"></div>
</div>
</template>

<style lang="scss">
  .cart{
    div{
      width:10px;
      height: 10px;
      background-color: #aaa;
      margin: 10px;
    }
  }
</style>
```

# float
本意就是图片和文本排版的一种方式，但是也非常适合排版

# 围住浮动的三种方法
- 父元素添加 overflow:hidden;
- 同时浮动父元素
- 添加非浮动的清除元素
- clearfix
```
.clearfix:after {
    content:".";
    display:block;
    height:0;
    visibility:hidden;
    clear:both;
}
```


# 没有父元素时如何清除
最简单的办法就是给一个浮动元素应用clear:both

# 定位
- static:默认的static 文档流

# relative
相对定位的关键是什么呢？就是要考虑到元素原来的空间
relative 脱离文档流了吗？

# 什么是文档流

# absolute

绝对定位元素默认的定位上下文是body 元素

由于绝对定位元素的定位上下文是body，所以在页面滚动的时候，为了维护与body
元素的相对位置关系，它也会相应地移动。

# 定位上下文
把元素的position 属性设定为relative、absolute 或fixed 后，继而可以使用top、
right、bottom 和left 属性，相对于另一个元素移动该元素的位置。这里的“另一
个元素”，就是该元素的定位上下文。


# 显示属性
- 块级元素，比如段落、标题、列表等，在浏览器中上下堆叠显示。
- 行内元素，比如a、span 和img，在浏览器中左右并排显示，只有前一行没有空间
时才会显示到下一行。

# 通用的字体类
- serif，也就是衬线字体，在每个字符笔画的末端会有一些装饰线；
- sans-serif，也就是无衬线字体，字符笔画的末端没有装饰线；
- monospace，也就是等宽字体，顾名思义，就是每个字符的宽度相等（也称代码体）；
- cursive，也就是草书体或手写体
- fantasy，不能归入其他类别的字体（一般都是奇形怪状的字体）。

# 头三个极有可能在Mac 和PC 中都安装了。

# 字符间距 ：letter-spacing
文字与文字之间的间距，中英都可以
#单词间距:word-spacing
## CSS 把任何两边有空白的字符和字符串都视作“单词"
中英都可以

# 垂直对齐 :vertical-align
vertical-align 以基线为参照上下移动文本，但这个属性只影响**行内元素**

如果你
想在垂直方向上对齐块级元素，必须把其display 属性设定为inline。vertical-align
属性最常用于公式或化学分子式中的上标和下标，比如x4-y-5 或N3O，或者用于文本
中脚注的角标，比如把星号变成上角标。

# 布局

# 三栏-固定宽度布局
思路：计算三栏的总宽度为父wrapper的总宽度即可，三栏都是float:left，注意三栏的每个栏目的padding不要影响总宽度，最好是使用每个栏目的子元素的padding

# 三栏-中栏流动布局
就是左右栏固定宽度，中间栏目宽度不固定
## 用负外边距实现
#用CSS3 单元格实现 display:table-cell 这种方式最为简单，ie67不支持，ie8支持

# 人造栏


# 响应式设计包含三个重要的方面。
- 媒体查询：是一种CSS 语法，可以根据浏览器的特性，一般是屏幕或浏览器容器宽度提供
CSS 规则；
- 流式布局：是使用em 或百分比等相对单位设定页面总体宽度，让布局能够随屏幕大小而
缩放；
- 弹性图片：是使用相对单位确保图片再大也不会超过其容器。



浏览器忽略HTML 代码中的空格符、回车符和制表符，但保留文本之间的空白——
多个空白符只保留一个。举个例子，下面这几行全都是等价的HTML 代码，它们的
结果都是显示：An HTML paragraph element。
```
<p>An HTML paragraph element</p>
<p>A HTML paragraph element</p>
<p>
An HTML paragraph element
</p>

```


```
<!--[if lte IE 8]> <!-- IE 条件注释 -->
<link src="ie_only.css" rel="stylesheet" />
<![endif]-->
```
这种特殊格式的HTML 注释会被非IE 浏览器忽略，只有IE 浏览器才会执行其中的
代码。就这个例子而言，我们是在为IE8 及更低版本的IE 加载额外的样式。加载条
件可以使用lte（less than or equal to，小于等于）、lt（less than，小于）、gte（greater
than or equal to，大于等于）、gt（greater than，大于），甚至只写一个浏览器版本号
如IE 6。以此为不同版本的IE 提供后备代码。



# 腻子脚本
- HTML5shiv.js（http://code.google.com/p/html5shiv）：让IE8 及更低版本的IE 识别
section、 article、nav 等HTML5 元素。
- selectivizr（http://www.selectivizr.com）：让IE（6/7/8）支持::first-child 等高级
CSS 选择符。
- IE9.js（http://code.google.com/p/ie7-js）：修复从IE6 到IE9 的很多bug 和缺损
功能。
- CSS3Pie（http://css3pie.com）：让IE6 到IE9 支持圆角、背景渐变、边框图片、盒
阴影、RGBa 颜色等可视化的CSS3 功能。
- Respond.js（https://github.com/scottjehl/respond）让旧版本浏览器支持媒体查询。
- -prefix-free（http://lea.verou.me/projects）为需要厂商前缀的CSS3 声明添加前缀（参
见第4 章）。
- borderBoxModel.js（https://github.com/albertogasparin/borderBoxModel）：让IE6 和
IE7 支持CSS3 的box-sizing 属性。

