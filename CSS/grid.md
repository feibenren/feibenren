---
title: grid
categories:
- CSS
- LAYOUT
---

# grid

grid是css中新引入的一种二维的布局方式

涉及到的内容很多,功能强大

> firefox对flex和grid的调试都有专门的显示，chrome则没有，建议使用firefox调试


# grid术语

- grid container
- grid Tracks
- grid line
- grid cell
- grid area
- grid gutter
- fr unit
- 隐式网格和显示网格


## grid container

grid container和`flex container`意思类似

表示grid 布局的容器

`dispaly:grid`申明的元素就是`grid container`

## grid Tracks(网格轨道)

一个grid有若干个column ，row组成

`grid-template-columns/grid-template-rows`可以定义网格中的row/column

网格轨道简单说就是`grid columns 或 grid rows`,两条`相邻网格线之间的空间`


## grid line(网格线)

![grid line](./images/grid-line.jpg)

grid line的主要作用是为了`定位网格元素`用的

和grid container没有关系

grid line则是row 和column 的编号，从1开始

> 定义网格时，我们定义的是网格轨道，而不是网格线


## css中grid line表示方法

css中，因为grid line 是用来定位`grid item`的，所以表示grid line的方式很多

### 1、直接使用数字
这种表示最原始
---------------
### 2、`span num`
可以使用`跨越grid cell的个数来表示 grid line`
--------------
### 3、负数

如果column/row 的grid line的编号是`1--->n`

那么`(1--->n) === (-n--->-1)`


## grid cell

grid cell的概念和`flex item`不一样,`flex 中没有这个概念`

grid cell 则是row 和column形成的一个单元格，和`table cell`类似


## grid area

简单说就是一个或多个`table cell`，但是grid area仅仅只能是一个矩形

## grid gutter
grid cell之间的空隙

## fr unit

grid 布局引入的一个新单位

fr单位代表`grid container`中`可用空间的一等份`

> 在计算可用空间的时候，会排除 `grid gutter`

## 隐式grid & 显示grid

显示grid就是定义过的tracks

但是可能由于内容的增多，可能会出现`没有定义的 tracks`，这些tracks就是`隐式 tracks`

隐式track是默认的规则是`按照显示grid设置`

也可以通过`grid-auto-rows,grid-auto-columns`来设置隐式grid

> grid-auto-columns自己测试无效，不知道为什么grid-auto-rows却有效果


## grid item

grid item表示 grid网格布局中的子对象

是`grid container`的直系子元素

# grid css属性

- display:grid
- grid-templates-rows
- grid-templates-columns
- grid-templates
- grid-row-gap
- grid-column-gap
- grid-gap
- grid-row-start
- grid-row-end
- grid-row
- grid-column-start
- grid-column-end
- grid-column
- grid-area
- grid-template-areas
- grid


## display:grid

申明 `gird container`

## grid-templates-rows

defining the size of the row tracks

## grid-templates-columns
defining the size of the column tracks

## grid-row-gap
设置row的间隙
## grid-column-gap
设置column的间隙

## grid-gap

是`grow-row-gap,grow-column-gan`的shorthand
```
grid-gap:<'row-gap'> <'column-gap'>?
```
## grid-row-start

设置 grid item的在row的起始位置

注意有一个`span`的关键字，表示的是跨越的`grid cell`的个数

## grid-row-end

设置 grid item的在row的结束位置

## grid-row

`grid-row-start和grid-row-end`的shorthand

```
<grid-line> [ / <grid-line> ]?
```


## grid-column-start
## grid-column-end
## grid-column

以上三个属性和row的一样

## grid-area

这个属性是`grid-row-start/grid-column-start/grid-row-end/grid-column-end`的缩写，示例`grid-area:1/1/2/2`



-----------------

这个属性还有另外一种布局方式，和上面基于`grid line`的方式不一样，这种方式是基于`area name`的，通过配合`grid-template-areas`

实现基于`area name`的grid布局

## grid-template-areas


grid-template-areas是一种基于`area name`的方式的布局方案，通过`grid-area`来定义`area name`，然后通过`grid-tempalte-areas`来设置整个grid box的布局方式

[示例代码](https://codepen.io/feibernren/pen/yrBEvG)

## grid-template



# grid css函数

CSS网格布局擅长于将一个页面划分为几个主要区域，以及定义这些区域的大小、位置、层次等关系（前提是HTML生成了这些区域）。


可用于布局页面主要的区域布局或小型组件


网格是一组相交的水平线和垂直线，它定义了网格的列和行。我们可以将网格元素放置在与这些行和列相关的位置上


# grid 特点

- Fixed and flexible track sizes
- Item placement
- Creation of additional tracks to hold content
- Alignment control
- Control of overlapping content
- 
- 
- 



# The Grid container
# Grid Tracks
# The fr Unit






# grid 和其他布局方式

## grid & table

grid 和table布局类似，

table也是一个二维布局

但是table布局是依赖于html的，不符合数据分离的理念

并且table布局功能很有限，无法扩展

grid 布局功能更强大

## grid & flex

grid和flex布局更是类似

举个例子

[https://codepen.io/feibernren/pen/qwWojX?editors=1100](https://codepen.io/feibernren/pen/qwWojX?editors=1100)


flex只要是可以断行，那么就可以理解为分为多个flex box，每个flex box都是按照设置的flex css属性来展示，想要实现每个flex中的column对齐，是无法做到的

而grid则可以很容易做到

# 使用grid or flex?

## 标准1
- 只需要按行或者列控制布局？那就用弹性盒子
- 需要同时按行和列控制布局？那就用网格

## 标准2
- 弹性盒从内容出发
- 网格则从布局入手













grid会把 grid-gap 属性的值重置为 0，而且你还不能在简写中设置间距值。





我们可以通过使用repeat方法，配合auto-fill和auto-fit属性，创建类似弹性盒的效果，同时保证内容严格按照行和列的固定规则排列。


Default spans

元素默认延伸一个轨道

也就是如果我定义了`grid-row-start:2`,不定义`grid-row-end`,那么他的默认值就是start数值+1，也就是默认跨度是一个track




https://caniuse.com/#search=grid
ie10+基本都支持

# 基本概念

网格（grid）由一系列“单元格”（cell）组成。每个单元格由垂直的和水平的“格线”（grid line）划分出边界。一组垂直的网格，构成一“栏”（column）；一组水平的网格，构成一“排”（row）‘。

单元格与单元格之间有垂直或水平的间距（gutter）

Grid 布局的基本元素是行（row）和列（column）。行与行之间、列与列之间存在间距（gutter）。行与列的交叉部分，就是一个单元格（cell）。多个单元可以组成一个区域（area）。

- container:包裹容器
- items:单元格
- fr:fraction，剩余空间进行分配

# container

- display:grid/inline-grid:开启网格布局
- grid-template-columns:定义单元格列宽
- grid-template-rows:定义单元格行宽
- grid-row-gap: 设置行间距
- grid-column-gap: 设置列间距;
- grid-gap:设置行间距和列间距
- grid-template-areas:为区域命名(如果多个区域同名，就表示它们合并成一个区域)
- grid-auto-flow:

# 单元格

- grid-area:属性指定项目放在哪一个区域
- grid-column:指定单元格纵向占据从第 n 根线到第 m 根线
- grid-row:指定单元格横向占据从第 n 根线到第 m 根线(grid-column-start,grid-column-start的组合属性)





# 注意

grid-auto-columns,grid-auto-rows,这两个属性只能设置一个数值,因为自身就表示隐式grid，表示的是所有的grid tracks

虽然可以设置，但是自己测试，发现浏览器对`grid-auto-columns`不支持
-----------------------

# 链接

- [https://github.com/wangdoc/css-tutorial/blob/master/docs/layout/grid.md](https://github.com/wangdoc/css-tutorial/blob/master/docs/layout/grid.md)
- [http://www.css88.com/archives/8510/comment-page-1](http://www.css88.com/archives/8510/comment-page-1)
