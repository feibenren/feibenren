---
title: webpack alias
categories: 
- LEARNING
- TOOLS
tags:
- TOOLS
- WEBPACK
---


# alias 设置别名
创建 import 或 require 的别名，来确保模块引入变得更简单

不设置别名
```
import mod1 from './app/mod1.js'
```


```
resolve:{
    alias:{
        mod1:'./app/mod1.js'
    }
}
```
```
import mod1 from 'mod1'
```