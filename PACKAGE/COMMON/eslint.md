---
title: ESLINT
categories: 
- LIBARY
---
# ESLINT

Lint工具用于检查代码的语法是否正确、风格是否符合要求。

JavaScript语言的最早的Lint工具，是Douglas Crockford开发的JSLint。由于该工具所有的语法规则，都是预设的，用户无法改变。所以，很快就有人抱怨，JSLint不是让你写成正确的JavaScript，而是让你像Douglas Crockford一样写JavaScript。

JSHint可以看作是JSLint的后继者，最大特定就是允许用户自定义自己的语法规则，写在项目根目录下面的.jshintrc文件。

JSLint和JSHint同时检查你的语法和风格。另一个工具JSCS则是只检查语法风格。

最新的工具ESLint不仅允许你自定义语法规则，还允许用户创造插件，改变默认的JavaScript语法，比如支持ES6和JSX的语法。

# 运行原理

eslint本质上就是一个nodejs的package

eslint会使用`Espree`这个包解析js，根据自己设定的rules，来检查代码的风格是否符合要求

# 配置

`npx eslint --init`会创建一个eslint的配置文件

这个配置文件格式很多，`.eslintrc.*`,之前默认是`.eslintrc`,现在不推荐这种格式

而是推荐使用`.eslintrc.*`(js,json,yaml)

配置文件中有三个字段

- Environments 
- Globals 
- Rules 

## Environments 

 which environments your script is designed to run in. Each environment brings with it a certain set of predefined global variables.

 这段js是在哪个环境下运行的，每个环境，都会有一些预置的全局变量

 比如

 - node
 - browser
 - es6
 - commonjs


 ```
 {
    "env": {
        "browser": true,
        "node": true
    }
}
 ```

## Globals

 the additional global variables your script accesses during execution

 自己设定的额外的全局变量，在运行的时候

## Rules 

which rules are enabled and at what error level.

定义哪个rule打开，并且定义错误级别


- off/0:关闭
- warn/1:开启并警告
- error/2:开启并报错


```
{
    rules:{
        "no-empty":1,
        "no-await-in-loop":'error',
    }
}
```

# 使用外部配置文件

eslint中的rule很多，很难自己配置

可以使用别人的配置，配置文件中有`extends`字段，用来扩展别人的配置

使用的方式有很多

- `eslint:recommended`
- `eslint:all`
- 从npm包中继承配置
- 从plugin中继承配置
- 直接使用文件继承配置

## `eslint:recommended`

启动eslint中打对号的核心rule

## `eslint:all`

启动eslint中的核心rule，不管打不打对号

## 从npm包中继承配置

某些共享的npm package，会导出自己的rules

比如

- eslint-config-standard
- eslint-config-airbnb


这些包需要先被下载到本地，然后

```
{
    extends:'eslint-config-standard'
}
{
    extends:'standard'
}
```

`eslint-config-`可以被省略



## 从plugin中继承配置


```
{
    "plugins": [
        "react"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
}
```

注意,`plugin:`开头的extends

## 直接使用文件继承配置
```
{
    "extends": [
        "./node_modules/coding-standard/eslintDefaults.js",
        "./node_modules/coding-standard/.eslintrc-es6",
        "./node_modules/coding-standard/.eslintrc-jsx"
    ],
    "rules": {
        "eqeqeq": "warn"
    }
}
```




# 忽略配置

使用`.eslintignore`来配置


# 展示形式

eslint展示报错的形式很多，默认只能是在命令行中显示

还可以使用表格，网页等形式来展现，取决于使用的工具

# 集成

编辑器，构建工具，框架等等都有各自方面的eslint的配置


# links

- [http://javascript.ruanyifeng.com/tool/lint.html](http://javascript.ruanyifeng.com/tool/lint.html)