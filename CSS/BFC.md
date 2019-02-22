---
title: BFC
categories: 
- CSS
---

# BFC

- 内部box在垂直方向，一个接一个的放置；
box的垂直方向由margin决定，属于同一个BFC的两个box间的margin会重叠；
- BFC区域不会与float box重叠
- BFC就是页面上的一个隔离的独立容器，容器里的子元素不会影响到外面的元素，反之也是如此；
- 计算BFC的高度时，浮动元素也参与计算


# 触发

- 根元素；
- float属性不为none；
- position为absolute或fixed；
- display为inline-block、flex、inline-flex、table、table-cell、 table-caption
- overflow不为visible
- display：table，本身不会产生BFC，但是他会产生匿名框（包含display：- table-cell的框），而这个匿名框产生BFC。