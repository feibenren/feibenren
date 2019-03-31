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

- [命令]()
- [概念]()
- [定位]()
- [对齐]()
- [其他]()


# 命令

grid网格提供的功能非常强大，css命令也非常多

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
- justify-items
- justify-self
- align-items
- align-self




# 概念

- base
- grid container
- grid item
- grid Tracks
- grid line
- grid cell
- grid area
- grid gutter
- fr unit
- 隐式网格和显示网格


## base

在grid布局中

由一组相交的垂直和水平线(grid line)组成

由此构成了行(row)和列(column)

行和列相交，会形成一个一个单元(cell)

子元素(grid item)会根据这些单元进行定位和对齐

## grid container

`grid container`和`flex container`意思类似

表示grid 布局的容器

## grid item

`grid item`一般是 `grid container`的直接子元素

grid item是grid 布局中的对象

## grid line(网格线)

grid 在布局的时候，会创建一组若干条水平和垂直的线

这些线就是`grid line`

grid line是有编号的，并且还可以给grid line起名字

![grid line](./images/grid-line.png)

## grid Tracks(网格轨道)

相邻的两条垂直或水平的`grid line`中间的空白区域

就是 `grid tracks`，

grid tracks 可以设置宽度， 其宽度决定了 `grid cell`的大小



## grid cell

`grid cell`是垂直和水平的grid line相交产生的单元

grid item默认是按照grid item进行定位的

## grid area

一个或多个`table cell`组成的矩形区域就是`grid area`

grid item也可以按照 `grid area`进行定位


## grid gutter
grid cell之间的空隙



## fr unit

grid 布局引入的一个新单位

fr单位代表`grid container`中`可用空间的一等份`

> 在计算可用空间的时候，会排除 `grid gutter`



## 隐式grid & 显示grid

定义过tracks是的grid就是显示grid

没有定义的tracks就是隐式grid




# css 命令(grid container)

关于grid container 的css命令，主要是设置grid的track和line的

设置track和line主要是用来给grid item定位和对齐使用的


## display:grid

申明 `gird container`

## grid-templates-rows/grid-templates-columns

`defines the line names and track sizing functions `
定义`grid line names`和track list

总的来说，grid-templates，表示的是设置grid网格的`模板`

>定义的模板，grid items用来定位使用

### track list

track list由多个 track组成

### grid track

定义track size的方式有很多，还有特定的函数可以使用
- `100px`
- `30%`
- `1r`
- `minmax(auto,1r)`


### track list

多个track设置中间用空格隔开

- `100px 100px`
- `100px repeat(3,100px)`
- `100px repeat(auto-fill,100px)`


### 定义 grid line 的名字

- `[header-start]`
- `[header-start main-start]`

track和line可以一起定义

- `[header-start] 100px [header-end]`

## grid-auto-rows/grid-auto-columns

设置隐式grid的模板

## grid-row-gap/grid-column-gap/grid-gap

设置间隙

## grid-tempalte-areas

设置 `grid-area`的names的模板


## grid-template

是`grid-tempalte-rows/gid-template-columns/grid-tempalte-areas`的缩写

## grid
设置的不仅仅是显式grid ，还有隐式grid


## grid-auto-flow

设置grid item的摆放顺序

# css 命令(grid items)

grid items的css命令，主要是用来定位和对齐使用的

### 定位方式
通过定位方式，可以确定一个`grid item`的edge，也就是确定一个item的大小

### 定位方式1：通过grid line定位
- grid-row-start
- grid-row-end
- grid-row
- grid-column-start
- grid-column-end
- grid-column

示例
- `100px`
- `1fr`
- `span 2`
- `1/3`
- `2`===`2/3(2+1)`

`span`的关键字，表示的是跨越的`grid cell`的个数


> 通过设置grid item的四周的edge，来定义一个grid cell的大小

### 定位方式2：通过line name定位

- grid-area

示例

- `header`

## grid-area

设置一个grid item的区域大小

设置表示区域的方式有两种

方式1:

`grid-row-start/grid-column-start/grid-row-end/grid-column-end`的缩写，示例`grid-area:1/1/2/2`
------------
方式2
- 通过name是来表示

# 对齐

grid item在grid布局中的对齐方式，通过

- justify-items
- justify-self
- align-items
- align-self
来设置

## justify-items/justify-self
用来设置inline axis方向上的grid item的对齐方式

## align-items/align-self
用来设置block axis方向上的grid item的对齐方式



# 其他

## grid & table

grid 和table布局类似，

table也是一个二维布局

但是table布局是依赖于html的，不符合数据分离的理念

并且table布局功能很有限，无法扩展

grid 布局功能更强大

## grid & flex

grid和flex布局也类似，对齐的css和flex公用一套css命令

使用grid or flex?

### 标准1
- 只需要按行或者列控制布局？那就用弹性盒子
- 需要同时按行和列控制布局？那就用网格

### 标准2
- 弹性盒从内容出发
- 网格则从布局入手

## 自动定位

所有子项目都会把自己摆放到网格中，每个单元格中放一个。默认的流向是按行排列项目，网格会首先尝试在第1行的每个单元格中摆放项目

## flex
属性 justify-self 和 justify-items 在 flex 布局方式中未被实现，是因为 flex 布局本质上是一维的，在轴上会有多个项目，无法单独对齐其中某一个元素。


---------------

我们可以通过使用repeat方法，配合auto-fill和auto-fit属性，创建类似弹性盒的效果，同时保证内容严格按照行和列的固定规则排列。











----------------------------------
----------------------------------
----------------------------------
----------------------------------
----------------------------------
----------------------------------
----------------------------------
----------------------------------
----------------------------------

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

- [https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Grid_Layout](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Grid_Layout)
- [https://github.com/wangdoc/css-tutorial/blob/master/docs/layout/grid.md](https://github.com/wangdoc/css-tutorial/blob/master/docs/layout/grid.md)
- [http://www.css88.com/archives/8510/comment-page-1](http://www.css88.com/archives/8510/comment-page-1)



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

