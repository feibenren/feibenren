---
title: table
categories: 
- HTML5
---

# table

涉及到的标签

- table
- tr:table row
- td:table data
- th:table header
- thead:table head
- tbody:table body
- tfoot:table foot
- colgroup:column group
- col:column


table的历史很长


最早的思路是在table元素上添加属性来控制表格

现在的思路是通过css来控制，达到数据和样式分离的目的


# table

table上面挂在了很多的属性，常见的有

- align
- bgcolor
- border
- cellpadding
- cellspacing
- rules
- frame

# table 属性

table元素，是有默认的展示规则的

- 没有边框
- 每个td之间有margin
- 每个td有padding

table的属性，几乎都是围绕这三个特点展开的

### table:border属性

border属性设置的是

- table元素

- td元素

的`边框的粗细`，单位是1px

border-style,border-color没有设置，默认使用系统设置

注意，这个属性的属性值是一个数字

```
 <table border='1'>
```



### table:cellpadding属性

类似设置td的padding

### table:cellspacing属性

类似设置td的margin

### table:frame属性

设置的是table元素的边框样式,注意，仅仅是table元素

```
<!-- 只显示table元素的顶部边框，类似border-top -->
<table frame='above'>
```

### table:rules属性
设置table元素的内部边框，具体效果看案例

### table:width

table可以设置widt

table的宽度首先要满足内容的排版，如果设置的width足够大，

就按照设置的witdh来展示，如果不够，就按照内容排版的大小来展示

示例代码[https://jsbin.com/rugumut/18/edit?html,output](https://jsbin.com/rugumut/18/edit?html,output)


# table css样式

css有3个命令是针对table的

- table-layout
- border-spacing
- border-collapse


### table-layout

- auto(default)
- fixed

默认是auto布局，也就是说td的内容决定table的宽度，表格设置的宽度需要先满足内容

fixed的布局的意思就是先满足`width设置`，默认每列都会被均分，内容如果超出的话，就使用css命令overflow来控制




### border-collapse

这个属性是table特有的，针对下面这种情况而特意设置的

table默认td有边框，table也有边框，设置了table的border属性，就会出现两个边框

但是现在常见的需求是单个边框

思路是设置`border-spacing/cellspacing`来达到

但是这种情况仅仅是清空了margin，导致两个边框合并在了一起，出现了`粗边框`

border-collapse属性就是设置`边框折叠、边框合并`的

- collapse
- separate(初始值)

在table元素上应用这个属性，就可以实现细边框


### border-spacing

这个属性对标于table的`cellspacing`属性

也就是设置td的margin

但是需要注意，如果设置了`border-collapse:collapse`，那么就会导致td的边框合并

这个时候想要设置td的border margin就没有意义了，会导致无效


# 示例代码

[https://jsbin.com/hexutip/11/edit?html,output](https://jsbin.com/hexutip/11/edit?html,output)









tbody可以用来对"行"进行分组，而colgroup则用来对"列"进行分组。




# links
- [http://www.ruanyifeng.com/blog/2009/05/html_table_mastering.html](http://www.ruanyifeng.com/blog/2009/05/html_table_mastering.html)
- 


