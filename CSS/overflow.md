---
title: overflow
categories: 
- CSS
---


# overflow
overflow 定义当一个元素的内容太大而无法适应 `块级格式化上下文` 时候该做什么

它是 overflow-x 和overflow-y的 简写属性 


- visible:默认
- hidden:影藏
- scroll:显示滚动条(无论是否超出)
- auto:显示滚动条(浏览器自动判读是否超出)

# 前提条件

- 非行内元素
- 尺寸限制

# 特性

textarea,html(不是body)自带overflow属性


滚动条宽度都是17px



- 滚动条挤压内容区域


### padding-bottom失效
只有在chrome下才正常，其他浏览器都会失效



# 依赖overflow的样式

- resize(overflow不能是visiable)
- ecllpsis(overflow必须是hidden)