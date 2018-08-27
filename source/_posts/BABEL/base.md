---
title: base
categories: 
- BABEL
---
# base
babel是一个js代码转换器，将高版本的js转换成低版本的js的工具

基本的流程就是

parsing(解析)---->transforming(转换)-->generation(生成)

babel只做解析和生成两部，转换因为情况很多，所以，转换这一步交给插件

## `.babelrc`
babel推荐的配置文件
```
{
    presets:[],
    plugins:[]
}
```
presets:简单说就是一组预置的plugins，

plugins:转换的插件列表

## babel-pollyfill
babel仅仅转换语法，但是，但是对API则无法转换


比如 promise，String.padStart,这些API是无法通过转换语法实现的

babel通过 babel-pollyfill插件实现 **代码填充**，从而弥补新API


## babel-runtime
为了实现一些语法功能，babel会创建一个助手函数，但是这些函数最好单独放到一个文件中(如果多个js文件的话，那么每个文件都会有助手函数)

babel-plugin-transform-runtime,babel-runtime 这两个插件就是将助手函数放到单独的一个文件中

比如:
```
class Foo {
    method() {}
  }
```
转换后

```
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Foo = function () {
    function Foo() {
        _classCallCheck(this, Foo);
    }

    _createClass(Foo, [{
        key: "method",
        value: function method() {}
    }]);

    return Foo;
}();
```
引入babel-runtime

```
import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _createClass from "babel-runtime/helpers/createClass";

let Foo = function () {
  function Foo() {
    _classCallCheck(this, Foo);
  }

  _createClass(Foo, [{
    key: "method",
    value: function method() {}
  }]);

  return Foo;
}();
```
助手函数被放到了一个文件中

但是还有一个很重要的问题

## babel无法实现模块加载功能

无论是转换语法还是pollyfill,模块加载的功能始终无法被实现












# plugins

es6中的新特性很多，babel将每个新特性都单独写成一个转换插件，比如 `babel-plugin-transform-es2015-classes`专门用来转换es2015中的class新语法的




# preset
简单说就是一组plugins，因为使用plugins的话，太不方便了

比如我要转换es2015(es6)的话，需要的插件如下

```
check-es2015-constants
es2015-arrow-functions
es2015-block-scoped-functions
es2015-block-scoping
es2015-classes
es2015-computed-properties
es2015-destructuring
es2015-duplicate-keys
es2015-for-of
es2015-function-name
es2015-literals
es2015-object-super
es2015-parameters
es2015-shorthand-properties
es2015-spread
es2015-sticky-regex
es2015-template-literals
es2015-typeof-symbol
es2015-unicode-regex
```
preset就是要解决这个问题

常见的有

```
 babel-preset-es2015
 babel-preset-es2016
 babel-preset-es2017
 babel-preset-lastest
 babel-preset-react
 babel-preset-stage-0
 babel-preset-stage-1
 babel-preset-stage-2
 babel-preset-stage-3
```

比如`babel-preset-es2015`,将es2015转成es5，**最常用**

.babelrc
```
{
  "presets": ["es2015"]
}
```
但是在es2017中，有一个async函数的功能，只是如上写的话，那么就无法编译，因为es2015中没有该语法，默认async函数原样输出

```
{
  "presets": ["es2017"]
}
```
这样写的话，只会将es2017转成es2016,一般需要写成

```
{
  "presets": ["es2017","es2015"]
}
```


可以看到，如果按照js版本来区别的话，可能会很麻烦，比如使用一个高版本的功能，我需要修改对应的.babelrc配置

所以，可以使用 **babel-preset-lastest**,它等于

```
{
  "presets": ["es2017",'es2016','es2015']
}
```
简单说就是所有最新的js语法都可以被转化

到此，最完美的就是 **babel-preset-lastest**了

但是还有一些问题

比如我要将js代码用在node中，或者就将代码运行在chorme最新版中
，那么其实有些新语法不需要转换了，转换的话，反而降低效率了

所以，官方不推荐按照js版本来使用，而是推出了 **babel-preset-env**

### babel-preset-env
环境预设:基于环境的预设

```
{
  "presets": ["env"]
}
```
如果仅仅是如上设置，那么等价于lastest配置，也就是将所有的代码转成es5代码

重点在于 options

```
{
  "presets": [
    ["env", {
      "targets": {
        "browsers": ["last 2 versions", "safari >= 7"]
      }
    }]
  ]
}
```
options的格式如下
```
options={
    targets:{
        browsers:[]|'',
        node:[]|''
    }
}
```






















# 链接
- [https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/user-handbook.md](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/user-handbook.md)
- 
- 
- 





