---
title: mouseout && mouseleave
categories: 
- LEARNING
- JAVASCRIPT
tags:
- js
---

mouseout事件和mouseleave事件，都是鼠标离开一个节点时触发。

两者的区别是，mouseout事件会冒泡，mouseleave事件不会

# 阻止冒泡

```
event.stopPropagation();
```