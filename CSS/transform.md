---
title: transform
categories: 
- CSS
---

# base
变形是css属性中的一类，使用`transform`来实现

主要作用是使得元素变形，比如位移，放大，缩小，旋转等

分为2d和3d两种类型,这里只说2d

- transform
- transform-origin
- transform-style

关于2d变换的就三个属性


## transform

transform 定义元素本身的变换

由单个或多个transform-function组成

```
transform:fn1 fn2;
```
变换一般和`transition`一起使用

```
transition: all 0.5s;
```
## transform-function

- translate():位移
    - translateX()
    - translateY()
    - translateZ()
    - translate3d()
- rotate():旋转
    - rotateX()
    - rotateY()
    - rotateZ()
    - rotate3d()
- scale():缩放
    - scaleX()
    - scaleY()
    - scaleZ()
    - scale3d()
- perspective():3d变形设置变形景深

等


#rotate
顺时针为正，逆时针为负

## transform-origin

变形的原点，如果是translate，这个原点没有什么意义，但是对于rotate就很有意义

默认值`center center`

## transform-style
transform-style是给`transform元素的父元素`设置的，表示

- `flat`:平面(default)
- `preserve-3d`:3d

transform-style用来设置子元素是处于什么空间内


### flat
指定`子元素`位于此元素所在平面内

### preserve-3d
指定`子元素`定位在三维空间内

因为该属性不会被（自动）继承，所以必须为元素所有非叶子后代节点设置该属性。


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



# demos
- [nazi](https://jsbin.com/sevipan/20/edit?html,css,output)