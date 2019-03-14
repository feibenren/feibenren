---
title: SASS
categories: 
- CSS
---

# playground

sass官方的演练场

[https://www.sassmeister.com/](https://www.sassmeister.com/)


# SASS

Sass (Syntactically Awesome StyleSheets)，本身是由ruby编写的一个`预处理css`项目，扩展了css的语法

推出后大火

后来各种语言版本的sass都出来了，最出名的是C/C++版本的`libSass`，node中的node-sass这个项目使用的就是libSass

因为libSass更注重非Ruby项目中的使用，所以在非ruby项目中，我们使用libSass

sass 组成部分

- 指令
- 变量
- 嵌套
- 继承
- mixin
- 占位符
- 加减乘除
- 函数
- 编程


# base

### 特殊符号

sass中的符号的特殊意义

- `&`:Referencing Parent Selectors
- `%`:Placeholder Selectors
- `$`:变量


注意,`&`必须有后缀

```
.test{
    &:hover{}//.test:hover
    &-primary{}//.test-primary
    &{}//会报错，必须有后缀
}
```

### 注释

```
//双斜杠的注释不会再编译后的css中显示

/*会显示*/
```

# 指令

- @charset
- @import
- @media
- @extend
- @mixins
- @include
- @at-root
- @debug/error/warn
- @function/@return


### @charset

设置css 的编码

### @import
文件导入，和css原始的import不同，sass中的import语句和C中的include一样，是文件的`拷贝合并`

注意，由于是文件的合并，所以，变量，mixins，函数等等所有的功能都可以使用

### @media
媒体查询
### @extend
继承
### @mixins
申明带有`sassScript`功能的代码片段
### @include
引用mixin
### @at-root
放到顶部
### @debug/@error/@warn

调试信息,这些信息不是输入到生成的css文件中的，而是显示在控制台的

```
@debug 'this is debug'
@error 'this is error'
@warn 'this is warn'
```

###  @function/@return
函数

# 变量

sass中的变量是`$`开头的

说到变量，就得说数据类型

- numbers (e.g. 1.2, 13, 10px)
- strings of text, with and without quotes (e.g. "foo", 'bar', baz)
- colors (e.g. blue, #04a3f9, rgba(255, 0, 0, 0.5))
- booleans (e.g. true, false)
- nulls (e.g. null)
- lists of values, separated by spaces or commas (e.g. 1.5em 1em 0 2em, Helvetica, Arial, sans-serif)
- maps from one value to another (e.g. (key1: value1, key2: value2))
- function references

一共八种

numbers,string,colors,null,function这几种数据类型和js的类似

list,map这两种属性类型是sass特有的

# list
```
$list:1px 2px 3px 4px;
```
这种格式类似js的数组，可以使用sass进行遍历
# map
```
$map:(
  sm: 540px,
  md: 720px,
  lg: 960px,
  xl: 1140px)
```
这种格式类似js的对象

相对list这种数据结构，功能更强大

而且比list对了一个key，携带的数据更多


## 插值

这个和js中的`${}`一个意思，就是在`字符串中插入一个变量`

```
$height:40px;
border:#{$height} solid #aaa;
```


# 嵌套

css原生不支持嵌套，sass对css进行了扩展

> 嵌套的特点是嵌套会形成作用域，最外层的是全局作用域

嵌套可以分为三种:

- 选择符嵌套
- 属性嵌套
- 伪类嵌套

# 继承

继承使用`@extend`指令来实现

注意生成的css代码，实现方式是`类的合并`，不是产生冗余代码

[示例代码](https://jsbin.com/dikagaj/3/edit?html,css)


# 占位符

占位符是对继承的补充

继承的父类是真实的，生成的css中会包含父类，但是这个父类有时候根本用不到

这个父类的作用就是为了继承(`代码的复用`)

所以sass提供了占位符这个功能，和继承唯一的区别就是占位符不会输出到css文件中

格式

```
%test{}

.title{
    @extend %test;
}
```


# mixin

mixin的作用和继承的作用类似，都是为了代码复用，但是比继承功能强大

继承不支持传参，而mixin支持传参

因为支持传参，也就是说mixin生成的代码是不确定的，也就没法`通过类的合并`实现

只能通过代码的直接引入来实现，这就会造成代码的冗余


# mixin & 继承

sass中实现代码复用的方式就这2种

mixin功能强大，但是会导致代码冗余

继承不会造成代码冗余，但是功能仅仅是`类名的合并`

# 运算

sass支持运算，支持`+，-，*，/，%，> ,>=,<=,==,!=`

和其他语言的运算不同，其他语言的计算本质上是`数字的计算`

但是css中的变量就很古怪

- css数值类型很多，形式不一样
- css中的操作符就含有sass中的运算符，会导致歧义

比如`1.2,12,10px`这三种都是number类型的

再比如颜色`#aaa,rgb(0,0,0),rgba(0,0,0,0),hsl(1,1,1)`

形式很多

在比如`font-size:14px/1.5 serif`;属性里面还有`/`

如何运算是一个问题

只能单独说

### number类型的运算

先看形式`1,1.2,10px`

这三种形式都是number类型的

sass规定，运算的时候是带单位的

```
width:10px+10px;
width:10px/2;//不能带单位,如果带单位，那么计算后就是一个纯数字，不符合预期
width:10px*2;//同上
width:10px/2;//因为css中，/表示有特定的意思，这个和除法符号相冲突，sass规定，如果是除法，需要带小括号,如果不带，就理解为css中的斜杠符号，也就是不做任何处理
```
### color类型的运算

color类型的运算就比较简单，是按照`通道`来计算的

```
color:#222+#111;//#333;
color:#222-#111;//#111;
color:#222*2;//#333;
color:(#222/2);//#111;
```
但是这种运算方式被废弃了，不符合人的直觉，现在只能通过sass提供的函数来操作

# string类型的运算

string类型的运算就支持加法运算，因为其他运算没有意义，表示字符串的连接

# 流程控制

- @if
- @for
- @while
- @each

### @if
```
@if false {
    width: 20px;
}
@if true {
    width: 80px;
}
```
### @for
@for循环主要用来做响应式

```
@for $i from <start> through <end>

@for $i from <start> to <end>
```
两种格式，区别是to不包括边界

```
$count:12;

@for $i from 1 to $count {
    .md-#{$i} {
        width:$i;
    }
}
```

### @while

### @each

@each的作用就是遍历一个`list/map`

比如bootstrap中的btn的名称
```
$list:primary,info,danger,errror;
$map:(sm:750px,lg:1140px);
@each $item in $list{
    .btn-#{$item}{
        color: #aaa;
    }
}

@each $key,$item in $map{
    .map-#{$key}{
        color: $item;
    }
}
```

注意，@each的语法

```
$each val1,val2,val3 in $data{}
```
val1,val2,val3对应的是list/map中的一个对象

中的前三个属性

```
@each $animal, $color, $cursor in (puma, black, default),
                                  (sea-slug, blue, pointer),
                                  (egret, white, move) {}
```

如果是list类型的数据，那么他得是类似一个`二维数组`

如果是map类型的数据，那么它对应的是key，value两个


示例:

- [各种不同类型的按钮](https://codepen.io/feibernren/pen/MxQWEx)
- [栅格系统](https://codepen.io/feibernren/pen/WmMryN)

# 函数

函数的语法

```
@function test($val){
    @return $val;
}
.test{
    width:test();
}
```
sass支持自定义函数

同时sass也自带很多函数

# 函数-list

先说list这种数据格式

```
margin: 10px 15px 0 0;
font-face: Helvetica, Arial, sans-serif
```
使用空格或者逗号分隔的一系列的值就是一个list

申明格式

```
$list1:1px 2px 3px 4px;
```
但是申明这种格式，sass只能通过sass提供的内置函数来操作

- nth()
- join()
- append()
- @each


# 编程








# links
- [https://zh.wikipedia.org/wiki/Sass](https://zh.wikipedia.org/wiki/Sass)
- [https://sass-guidelin.es/zh/](https://sass-guidelin.es/zh/)
- [https://github.com/sass/node-sass](https://github.com/sass/node-sass)
- [http://www.ruanyifeng.com/blog/2012/06/sass.html](http://www.ruanyifeng.com/blog/2012/06/sass.html)
- []()