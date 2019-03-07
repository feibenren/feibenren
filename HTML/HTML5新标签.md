---
title: HTML5新标签
categories: 
- HTML
---

# HTML5新标签

### 区块和段落元素

- section
- article
- nav
- header
- footer
- aside

section表示文档中的一个区域，类似`带有语义化的div`
--------------------
aside表示和`主体无关`的区域

### 新的input

- color
- date
- number
- range


---------------
range

- min
- max
- step
- value




### 音频和视频

- video
- audio

### 语义元素

- mark
- figure:
- figcaption
- data
- time
- output
- progress
- meter
- main


[mark](https://jsbin.com/yodetiz/1/edit?html,output):突出显示文字

------------------
figure代表一段独立的内容

当它属于主体(main flow)时，它的位置独立于主体。这个标签经常是在主文中引用的图片，插图，表格，代码段等等，当这部分转移到附录中或者其他页面时不会影响到主体。


之前比如一篇文章中的图片，实际上是相对独立于文章的，figure的作用就是表明这种关系

figure配合使用的是figcaption，表示这个独立内容的标题

--------------------

data标签，是给机器阅读用的,其对应的value数值就是给机器的

```
<data value="该属性指定元素内容对应的机器可读的翻译">迷你番茄酱</data>
```

-----------------
time表示时间

------------

output标签表示计算或用户操作的结果。


--------------
progress 表示进度条

对应的属性

- max
- value

如果不设置value，那么进度条就会`显示动态加载的形式`

并且不设置value，只设置了max，那么也无效

只有同时设置了max和value，才会展示对应的进度

[https://jsbin.com/yodetiz/5/edit?html,output](https://jsbin.com/yodetiz/5/edit?html,output)


-------------
meter用来显示`标量值或者分数值`

属性有

- value
- min
- max
- low
- height
- optimum
- form

[https://jsbin.com/wotupir/17/edit?html,output](https://jsbin.com/wotupir/17/edit?html,output)





# 所有的html5有效标签

[https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML5/HTML5_element_list](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML5/HTML5_element_list)


# links
- [https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML5/HTML5_element_list](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML5/HTML5_element_list)


