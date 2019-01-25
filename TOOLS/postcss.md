---
title: postcss
categories: 
- TOOLS
---
# base

现在的css处理流程比较复杂，如果从css所处的状态，可以分为三种状态

```
pre css ======> css ======> post css
```

- pre css(比如使用使用sass写css，这个时候css是sass形式)
- css(纯css，浏览器可以识别，但是需要优化，比如压缩，添加前缀)
- post css(添加前缀，压缩，处理雪碧图等等等后置操作)


`pre css`这一块，有很多css的预处理语言，比如`sass，less，stylus`等

post css处理的操作很多，对应的插件也很杂乱,比如`autoprofixer`,`cssnano`等


# postcss

postcss的思路和以上的插件都不同


postcss做的就两件事:

- 将css载入，转化成AST(语法树)
- 调用插件处理AST

postcss本身什么都不做，所有的具体的处理交给插件

`postcss`这个词，容易有误导，虽然处于`post css`这个阶段(因为接收的是css)

但是`这里的css可以不纯`,因为转换成AST后，插件只要能处理这个`不纯的css`,那么这个时候，postcss其实在做`pre css`这个状态的工作

-------------

综上,postcss的想法就是要改写`css处理流程`,也就是不分pre css,还是post css了


> postcss对css做的工作和webpack的类似

## webpack 配置

```
 {
    loader: 'postcss-loader'
 },
```
postcss的配置，全部写在`postcss.config.js`中

```
autoprefixer=require("autoprefixer");
module.exports = {
  plugins: [autoprefixer({ grid : "autoplace" }),require("precss")]
};
```


# 插件

postcss的插件很多

实现的功能很多，因为解析成AST了，甚至可以自己设定一种语法，让post进行编译

常见的插件有

## autoprefixer

post最最主要的功能，给css添加前缀

## precss

这个插件可以识别`sass-like`的css格式

比如变量，嵌套，等功能，可以被这个插件识别，这个时候`webpack`可以不使用`sass-loader`了

并且一些css标准中未被实现的，也支持

这是一个插件组，很多插件合在一起，组成这个插件，一个插件针对一个特定的功能

---------------

但是`pure-sass`就不一定可以了，所以最好还是使用`sass-loader`放心

## postcss-sprites

将背景图合并成一张雪碧图


## cssnano

压缩css

# 总结
插件功能很多，很多css之前没有想过的功能可以通过插件来实现

# LINKS

- [https://www.ibm.com/developerworks/cn/web/1604-postcss-css/index.html](https://www.ibm.com/developerworks/cn/web/1604-postcss-css/index.html)
- [https://github.com/postcss/postcss](https://github.com/postcss/postcss)