---
title: base
categories: 
- BABEL
---
# base
babel是一个js代码转换器，将特定的的js语法转换成符合目标的js


基本的流程就是

parsing(解析)---->transforming(转换)-->generation(生成)

babel只做解析和生成两部，转换因为情况很多，所以，转换这一步交给插件

# `.babelrc`
babel推荐的配置文件
```
{
    presets:[],
    plugins:[]
}
```
presets:一组预置的plugins，**官方现在只推荐env**

plugins:转换的插件列表

# 代码填充
babel仅仅转换语法，但是，但是对API则无法转换

比如 promise，String.padStart,这些API是无法通过转换语法实现的

babel通过 babel-pollyfill插件实现 **代码填充**，从而弥补新API

babel实现的方式有三种

- babel-pollyfill
- babel-runtime
- babel-plugin-transform-runtime


但是还有一个很重要的问题

# babel无法实现模块加载功能

无论是转换语法还是pollyfill,模块加载的功能始终无法被实现,所以绝大多数情况下，单独使用babel作用不大




# plugins

es6中的新特性很多，babel将每个新特性都单独写成一个转换插件，比如 `babel-plugin-transform-es2015-classes`专门用来转换es2015中的class新语法的
如果要转换es6，则需要一组插件来支持


# preset
简单说就是一组plugins，因为使用plugins的话，太不方便了

比如我要转换es2015(es6)的话，需要的插件如下

preset就是要解决这个问题

常见的有

```
 babel-preset-es2015//只转换es6语法
 babel-preset-es2016//只转换es7语法
 babel-preset-es2017//只转换es8语法
 babel-preset-lastest//转换最新语法，等于上面三者之和
 babel-preset-react//转换react语法
 babel-preset-stage-0//转换草案语法
 babel-preset-stage-1
 babel-preset-stage-2
 babel-preset-stage-3
```
> 简写,可以省略`babel-preset-`,`babel-preset-es2015`===`es2015`



注意，babel-preset-es2015只转换es6的语法，但是async function 是es8的语法，那么只用这一个preset的话，async function 不会转码的，所以，需要两个连着使用

```
{
  "presets": ["es2017","es2015"]
}
```

所以，可以使用 **babel-preset-lastest**，最完美


但是还有一些问题

比如我要将js代码用在node中，或者就将代码运行在chorme最新版中
，那么其实有些新语法不需要转换了，转换的话，反而降低效率了

所以，官方不推荐按照js版本来使用，而是推出了 **babel-preset-env**

### babel-preset-env
环境预设:基于环境的预设
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

# babel 7

babel 7 开始了做了很多改动






















# 链接
- [https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/user-handbook.md](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/user-handbook.md)
- [https://github.com/babel/babel/tree/master/packages](https://github.com/babel/babel/tree/master/packages)
- 
- 


