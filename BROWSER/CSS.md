---
title: CSS
categories: 
- BROWSER
---

在GUI线程中，没细说style tree，到底是怎么和DOM tree 合并的


其实在chrome的实现过程中，是没有style tree的，只有dom tree，所有的样式，都是放到dom stree中的

但是流程都差不多


但是又这样一个问题

css是一个tree，html也会形成一个tree，但是最后的结果是一个bitmap，而bitmap的展示形式，是css tree决定的


css是怎么实现的?




框的布局方式是由以下因素决定的：

框类型
框尺寸
定位方案
外部信息，例如图片大小和屏幕大小


- [https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/](https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/)