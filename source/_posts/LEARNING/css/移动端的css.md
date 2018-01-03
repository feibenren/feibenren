---
title: 移动端的css
categories: 
- LEARNING
- css
tags:
- css
---

# viewport
- visual viewport:视口viewport 或者度量viewport
  就是实际看到的像素大小，这个数值从chrome的调试工具来看到
- layout viewport:布局viewport
 布局视口:默认980px
- 度量viewport


initial-scale=1 表示将layout viewport（布局视口）的宽度设置为 ideal viewport（理想视口）的宽度

```
<meta name="viewport" content="width=320">

```
这样做的话，就是修改了layout viewport了

document.body.clientWidth:得到设置的wiewport的width数值
window.innerWidth:得到的是页面的width数值

#参考链接
- http://blog.csdn.net/maxbyzhou/article/details/53243982