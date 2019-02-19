---
title: CSS
categories: 
- BROWSER
---

在GUI线程中，没细说style tree，到底是怎么和DOM tree 合并的

也就是说，一个tree型的数据结构和另外一个tree形的数据结构，会生成一个bitmap，这是怎么实现的？

# 0

在http刚出来的时候，是没有css的

html规定的仅仅是语义，但是具体怎么展示，没有规定

那么浏览器就按照自己的理解来展示对应的语义了

如果内容比较多，想要美化一下，就直接放到表格中就可以了

所有的表格都是得对齐的，就可以做到这个目的

# 1

后来www飞速发展，导致好不好看现在开始变得很重要

table元素，本意是展示数据，不应该成为布局的工具

这个时候出现了很多关于这个问题的解决方法

比如，提出一个DOM元素对应一个修饰属性，通过这些修饰属性来修饰该元素

或者新建一个样式文件，将所有修饰的规则放到这个文件中

等等

最后，一种叫做`层叠样式表`的技术胜出

其实`样式表`的概念之前已经有了，但是`层叠`的概念还是第一次提出

> 层叠和继承不是一回事


# 浏览器实现

试想一下，浏览器得到了style tree，和dom tree，怎么去创建bitmap呢？

思路:

- 1、匹配对应元素
- 2、渲染对应的元素


### 匹配对应元素

如果dom tree上面有100个节点，css有100个rule，那么想要匹配的话，每个节点岂不是要试100次？

这样得有100*100次的匹配，那么会太慢

这时候需要使用一定方法来进行优化

简单来说就是`从右到左`来匹配，这样匹配的效率会更高


### 渲染对应的元素

因为每一个dom节点，都是有语义的，而不用的语义，对应的展示规则应该也不一样

```
div{
    width:100px;
    height:100px;
    background:#f00;
}
```
比如这个div，具体应该怎么执行渲染呢？

这里可以简单的认为是通过两个模型来渲染的,`盒子模型`,`可视化格式模型`

`所有的css都作用于这两个盒子上了`

# 盒子模型

盒子模型是针对`元素本身`的，这个模型规定了`所有元素`都由`content+padding+border+margin`组成

仅此而已

可以通过设置`width,padding,margin,border`来设置这些盒子

# 可视化格式模型(visual formatting model)

盒子模型规定的内容很少，就规定了每个元素由四个盒子，但是对于页面来说，怎么将元素在页面`布局排列`没说

可视化格式模型，做的就是这个事情

这个模型不会再产生`盒子`,而是规定了一些`布局规则`，主要有:

- box类型
- 定位体系

通过这些规则来进行渲染整个页面

所以说，这个模型是页面的渲染规则



# LINS
- [https://www.jianshu.com/p/bca9a8e4b60d](https://www.jianshu.com/p/bca9a8e4b60d)
- [https://bbs.csdn.net/topics/340173664](https://bbs.csdn.net/topics/340173664)
- [https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/](https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/)
- [https://blog.csdn.net/JiangJunDriver/article/details/79259147](https://blog.csdn.net/JiangJunDriver/article/details/79259147)



https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Visual_formatting_model