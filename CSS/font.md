---
title: font
categories: 
- CSS
---

# font

是多个命令的简写形式

- font-style
- font-variant
- font-weight
- font-size
- line-height
- font-famliy




### font-style
字体风格

- normal
- italic:斜体
- oblique:倾斜体

不是所有的字体都有确切的 oblique 和 italic 字形，即便如此，浏览器也会通过使用现有的字形来模拟所缺少的字形



### font-variant
### font-weight
字体粗细程度

- 100
- 200
- 300
- 400(normal)
- 500
- 600
- 700
- 800(bold)
- 900



### line-height

设置`line box`的高度

# font-family 

设置字体家族

font-family:f1,f2,f3,f4;

## 字体来源

来源有这么几种

- 系统安装的字体
- @font-face来加载外地的字体
- 通用字体


## 渲染顺序

注意，字体的渲染顺序是`逐字`进行的,比如

```
hello 你好
```
先渲染`h`,如果`f1`字体有这个文字，那么就可以直接渲染这个文字了，`f2,f3,f4`都不会渲染

在如果渲染`你`,如果f1字体是一个西方字体，里面没有对应的中文文字，那么只能交给`f2`来，如果f2没有，就给f3。。。。

----------------
从这个顺序中，可以总结出这几条`最佳实践`

### 1、英文字体在前，中文字体在后

如果是中英混用的文字，由于中文字体里面的英文字体都很不好看，所以混合的文字中，英文文字需要给英文字体来渲染


### 2、需要有通用字体

浏览器无法保证通过@font-face就可以正确加载，也无法保证计算机安装过对应的字体，所以需要使用通用字体来设置了


通用字体不是指特定的字体，而是符合某种规范的字体，具体使用什么字体，由浏览器来自行判断

- serif：衬线字体
- sans-serif：无衬线字体
- monospace：等宽字体
- cursive：手写体
- fantasy：艺术字体

还有一点需要注意，由于通用字体不是特指某种字体，以上的都是`关键字`,所以`不能添加引号`


### @font-face 

引入外部字体

一般写法
```
@font-face{
    font-family:'fx',
    src:'xxx'
}
```


# font 属性

- font-style
- font-variant
- font-weight
- font-size
- line-height
- font-famliy

font在书写的时候，顺序是随意的，但是有着几条规定

- 必须同时设置 font-size 和 font-family 属性值
- font-family 是必不可少的，需要放到最后
-  line-height 值必须紧跟在 font-size 之后，并且要在属性值前面加上 / 


# links
- [https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-family](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-family)