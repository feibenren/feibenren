---
title: grid
categories:
- CSS
- LAYOUT
---

# 支持情况

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
- grid-row:指定单元格横向占据从第 n 根线到第 m 根线

# 链接

- [https://github.com/wangdoc/css-tutorial/blob/master/docs/layout/grid.md](https://github.com/wangdoc/css-tutorial/blob/master/docs/layout/grid.md)
- [http://www.css88.com/archives/8510/comment-page-1](http://www.css88.com/archives/8510/comment-page-1)
