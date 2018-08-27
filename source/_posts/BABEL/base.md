---
title: base
categories: 
- BABEL
---
# base
babel是一个js代码转换器，就是将高版本的js转换成低版本的js

基本的流程就是

parsing(解析)---->transforming(转换)-->generation(生成)

babel只做解析和生成两部，转换因为情况很多，所以，转换这一步交给插件

babel配置文件是`.babelrc`,格式:
```
{
    presets:[],
    plugins:[]
}
```
presets:简单说就是一组预置的plugins，

plugins:转换的插件列表，很多

## babel仅仅是转换语法


# plugins
es6中的新特性很多，babel将每个新特性都单独写成一个转换插件，比如 `babel-plugin-transform-es2015-classes`专门用来转换es2015中的class新语法的

## 注意
#### 转换到哪个版本？？？

es5

#### 











# 链接
- [https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/user-handbook.md](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/user-handbook.md)
- 
- 
- 





