---
title: 变型(transform)
categories: 
- CSS
---

# base
变形是css属性中的一类，使用`transform`来实现

主要作用是使得元素变形，比如位移，放大，缩小，旋转等

分为2d和3d两种类型

# 相关属性

- transform：设置变换
- transform-origin:设置变形的原点
- transform-style:设置变换类型(flat/preserve-3d)
- perspective:设置3d变换景深距离
- perspective-origin:设置3d变换景深原点
- backface-visibility:设置3d变换背面是否可见

## transform

```
transform:expression1 expression2;
```
expression1:变形表达式，多个表达式中间使用空格间隔

变换一般和`transition`一起使用

```
transition: all 0.5s;
```
## 变形表达式
- translate():2d位移(单方向位移还有translateX(),translateY(),translateZ(),3d位移:translate3d())
- rotate():2d旋转(单方向位移还有rotateX(),rotateY(),rotateZ(),3d位移:rotate3d())
- scale():2d缩放(单方向位移还有scaleX(),scaleY(),scaleZ(),3d位移:scale3d())
- perspective():3d变形设置变形景深


等

## transform-origin
变形的原点，如果是translate，这个原点没有什么意义，但是对于rotate就很有意义

## transform-style
默认2d变换只涉及`transform`,`transform-origin`这两个属性

transform-style属性用来设置变形风格,`flat`:平面,`preserve-3d`:3d


## 3d
3d变换就涉及到更多内容,,其中之一就是 **景深**

### 景深
正常情况下，无法在一个二维平面展示三维物体，除非欺骗我们的眼睛，而景深就是其中欺骗术中的一个概念，必须设置，否则无法在二维平面展示三维物体



# 变形元素
进行transform3D变形的元素

主要进行transform、transform-origin、backface-visibility


# 观察者
观察者是浏览器模拟出来的用来观察被透视元素的一个没有尺寸的点，观察者发出视线，类似于一个点光源发出光线，这里简单理解成浏览器虚拟出来的肉眼

# 被透视元素

**观察者观察的元素**

它有可能是变形元素本身，也可能是它的父级或祖先元素

主要进行perspective、perspective-origin等属性的设置





# 代码结构




# 链接
- [https://www.zhangxinxu.com/wordpress/2012/09/css3-3d-transform-perspective-animate-transition/](https://www.zhangxinxu.com/wordpress/2012/09/css3-3d-transform-perspective-animate-transition/)
- [https://www.oxxostudio.tw/articles/201506/css-3d.html](https://www.oxxostudio.tw/articles/201506/css-3d.html)
- [https://www.cnblogs.com/xiaohuochai/p/5351477.html](https://www.cnblogs.com/xiaohuochai/p/5351477.html)
- [http://www.alloyteam.com/2015/06/css3%E7%9A%843d%E5%8F%98%E6%8D%A2%E5%92%8C%E5%8A%A8%E7%94%BB/](http://www.alloyteam.com/2015/06/css3%E7%9A%843d%E5%8F%98%E6%8D%A2%E5%92%8C%E5%8A%A8%E7%94%BB/)
- [http://www.alloyteam.com/2012/11/css3-3d-transform/](http://www.alloyteam.com/2012/11/css3-3d-transform/)
- [http://www.alloyteam.com/2012/10/the-css3-transform-perspective-property/](http://www.alloyteam.com/2012/10/the-css3-transform-perspective-property/)



# 效果
- [http://www.lanrenzhijia.com/demos/61/6124/demo/](http://www.lanrenzhijia.com/demos/61/6124/demo/)
- [http://www.lanrenzhijia.com/demos/49/4928/demo/](http://www.lanrenzhijia.com/demos/49/4928/demo/)