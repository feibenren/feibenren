---
title: GUI
categories: 
- BROWSER
---


# RENDER-GUI

render进程中的GUI线程，是专门来渲染html和css的，实现流程很复杂

GUI的目的很简单:根据HTML,CSS来构建出来一个`bitmap`


html是一个TREE形的数据结构，这种数据结构有很多优点，比如查找非常方便

GUI线程的思路

- 解析html字符串，在内存中构建一个tree形状的数据结构，这个数据结构一般叫做`DOM TREE`
- CSS 也是同样的思路，会在内存中创建一个`Style Tree`
- 将这两个tree合并,合成的新的tree，叫做`render tree`
- 根据style tree中的相关样式规则，先布局，这一步一般叫做`LAYOUT`
- 然后再根据css中的相关样式，在`layout`完成后,进行`paint`
- 最后形成bitmap，交给Browser 主进程显示出来就可以了


可以看到，合并tree的时候，不是一步完成的，而是通过`layout`,`paint`两部来完成的

为什么？

性能考虑

因为这个生成BITMAP这件事情是会超级平凡的发生的

比如滚动页面，那么就得重新生成bitmap

js修改，resize窗口，等操作，gui就得重新渲染

所以，改进渲染速度，成为GUI最主要的事情

比如，滚动页面的时候，不需要layout，只需要paint即可，通过这种方式，可以达到效率最高



总的流程类似


![GUI](./images/browser_rending.png)



# RE-RENDER 




### js修改了dom结构，会怎么办？

会重新渲染整个页面吗？

不会重新渲染整个页面

修改对应的DOMtree的结构，重新合并，layout，paint

### 使用js设置了一个元素的宽度

这种情况只需要重新`layout`->`paint`,DOM TREE没有改动，所以不用重新构建


### 使用js设置了一个元素的背景颜色

这种情况更加方便，只需要`repaint`即可，因为架构没有改动


### 滚动页面，会怎样

只需要repaint，因为gui会借助GPU线程来渲染bitmap，显卡针对这种情况会做特殊优化，效果会非常好


------------------

可见，GUI的流程，是更具实际使用情况来设定的，保证效率最高


css，js在实现的时候，尽量都少走`layout`，尽量多走`paint`

# 哪些会引发 relayout?

- 1.页面渲染初始化

- 2.DOM结构改变，比如删除了某个节点

- 3.render树变化，比如减少了padding

- 4.窗口resize

5.最复杂的一种：获取某些属性，引发回流，
很多浏览器会对回流做优化，会等到数量足够时做一次批处理回流，
但是除了render树的直接变化，当获取一些属性时，浏览器为了获得正确的值也会触发回流，这样使得浏览器优化无效，包括

- （1）offset(Top/Left/Width/Height)
-  (2) scroll(Top/Left/Width/Height)
-  (3) cilent(Top/Left/Width/Height)
-  (4) width,height
-  (5) 调用了getComputedStyle()或者IE的currentStyle

# 哪些会引发 repaint?

引起relayout，一定会有repaint

但是还有一些操作只会有repaint

1、滚动页面

2、修改元素颜色，背景，边框颜色等


# 硬件加速

以上的流程都是使用cpu计算来生成bitmap的

浏览器不是有一个GPU线程吗，显卡对这些操作会很快，能不能使用GPU来生成bitmap呢？

最开始都是使用CPU来生成bitmap的，考虑到兼容，默认还是得使用CPU渲染

想要开启GPU加速，有这几种情况

- 最常用的方式：translate3d、translateZ

- opacity属性/过渡动画（需要动画执行的过程中才会创建合成层，动画没有开始或结束后元素还会回到之前的状态）

- `<video><iframe><canvas><webgl>`等元素

浏览器在针对这些情况，会在原来的图层上，创建一个新的图层，使用GPU来渲染

所以可以看到，在用css3做动画的时候，效果很流畅

这种情况下面,可以看到会有两个独立的图层,也就是说，一个图层如果有回流或者重绘，不影响其他图层

这样性能会很高

这里将使用CPU的渲染的图层，叫做`默认图层`

使用GPU渲染的图层，叫做`复合图层`

最终的bitmap，由着两个图层合并构成


## 默认图层

position:fixex/abslute，虽然可以脱离普通文档流，但是他还是属于默认图层的

因为几乎所有的元素，都是默认图层的，元素很多，如果经常改变fixed/absoute元素引发回流的话，这样消耗非常大

## 复合图层
可以看到，复合图层基本都是css3中的内容，所以，使用css3做动画，效果非常好


# 总结

GUI线程主要就是用来生成bitmap的

考虑到性能和用户需求，生成bitmap这个流程是比较长的

最后，GUI线程还可以借助显卡来加速生成速度，效果最好









# LINKS
- [https://dailc.github.io/2018/03/12/whenyouenteraurl.html](https://dailc.github.io/2018/03/12/whenyouenteraurl.html)
- [https://zh.wikipedia.org/wiki/%E5%B1%82%E5%8F%A0%E6%A0%B7%E5%BC%8F%E8%A1%A8#%E5%8F%91%E5%B1%95%E5%8E%86%E5%8F%B2](https://zh.wikipedia.org/wiki/%E5%B1%82%E5%8F%A0%E6%A0%B7%E5%BC%8F%E8%A1%A8#%E5%8F%91%E5%B1%95%E5%8E%86%E5%8F%B2)