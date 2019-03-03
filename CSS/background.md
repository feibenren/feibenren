---
title: background
categories: 
- CSS
---

# background属性

background属性是8个属性的简写：

- background-clip
- background-color
- background-image
- background-origin
- background-position
- background-repeat
- background-size
- background-attachment


### background-color
背景色没什么好说的，很简单

注意，background-color会渲染`border-box`,只有margin box不渲染

### background-image

这个也没什么好说的，注意，可以有多个url

```
background-image:url(),url()
```

### background-origin

这个是针对`background-image`来设置的

表示背景图片，是从盒子的什么区域开始的(原点,origin)

- border-box
- padding-box(default)
- content-box

比如，`background-origin:content-box`表示的是背景图片从content区域开始渲染，其他的区域不会渲染


示例代码[https://jsbin.com/bisavuq/edit?html,css,output](https://jsbin.com/bisavuq/edit?html,css,output)


### background-clip

背景裁剪(适用于背景颜色和背景图片)

可以设定`背景的裁剪范围`(是盒子模型的content，padding，border，还是其他)

- border-box
- padding-box
- content
- text

比如，`background-origin:border-box`,那么背景图片会从border box开始渲染

但是还可以通过`background-clip:content-box`，来将设置好的背景图片进行裁剪，只保留content-box的区域的背景图片


示例代码[https://jsbin.com/kuhixuw/1/edit?html,css,output](https://jsbin.com/kuhixuw/1/edit?html,css,output)



### background-position

用来设置background-image的位置

- x,y
- 关键词center、right、top、bottom

默认值是(0,0)

### background-repeat
设置background-image的重复方式的

- repeat(default)
- space
- round
- no-repeat


以上都是简写方式

```
background-repeat:x-repeat y-repeat
```

比如

```
background-repeat:repeat no-repeat
background-repeat:repeat-x
```
这两者相等

平时都是用简写方式，足够用了

示例代码[https://jsbin.com/yuqoboq/edit?html,css,output](https://jsbin.com/yuqoboq/edit?html,css,output)


### background-size
设置background-image的大小的

默认是`auto auto`

- x,y
- 单个数值(设置的是图片的宽度，高度为auto)
- contain
- cover


### background-attachment

用来设置background-image的图片的`依附表现`

- scroll(default)
- fixed
- local


##### fixed

表示相对`视口`固定，感觉和固定定位差不多

##### scroll(default)

这个表示相对`元素自身`固定

也就是说，如果一个元素由滚动条，那么这个背景图片，也`不会`随着滚动条的滚动而滚动


##### local

表示相对于`元素的内容固定`

和scroll相比，如果一个元素有滚动条，那么这个背景图片会随着滚动条滚动(因为它是相对于内容来固定的，不是元素本身)


示例代码 [https://jsbin.com/pojiven/edit?html,css,output](https://jsbin.com/pojiven/edit?html,css,output)


# background 的初始值

- background-clip(border-box)
- background-color(none)
- background-image(none)
- background-origin(padding-box)
- background-position(0,0)
- background-repeat(repeat)
- background-size(auto,auto)
- background-attachment(scroll)

默认顺序

 bg-color || bg-image || bg-position [ / bg-size]? || bg-repeat || bg-attachment || bg-origin || bg-clip

 但是顺序不固定

 所以，最最常见的写法是

 ```
 background:#aaa url() center center no-repeat;
 ```

```
 background:#aaa url() center center/cover no-repeat;
 ```



# 其他

border 是在background之上的



 # links
 - [https://developer.mozilla.org/zh-CN/docs/Web/CSS/background](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background)
 - [https://juejin.im/entry/589ff0c75c497d0056358912](https://juejin.im/entry/589ff0c75c497d0056358912)