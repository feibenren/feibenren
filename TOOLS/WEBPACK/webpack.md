---
title: webpack
categories: 
- WEBPACK
---

# webpack

模块打包机,'A bundler for javascript and friends',基本思路简单说就是"all in js",所有的asserts(css,js,images,fonts 等)通过入口文件的引入构成AST(语法树)，webpack根据构成的AST按照指定的配置进行处理、输出。

特点:
- 所有js模块均可识别，模块化得以实现
- 所有asserts可以按照指定配置进行处理，高度配置化
- 其他一些优化功能，如code split,tree shaking等

# 基本概念
- entry:入口文件
- output:出口文件
- loader:设置特定assert对应的处理程序
- plugin:webpack 功能扩展

# 开发
webpack不仅仅是打包机，对开发环境很友好，主要模块,`webpack-dev-server`

# CODE SPLIT
webpack配置的entry如果是一个，那么默认所有的js模块都会放到一个输出文件中，可能会导致打包后的文件巨大，无法使用

webpack提供了三种优化方法
- 多个入口起点
- 防止重复(多个入口引入相同模块，每个模块都会打包，需要去重)
- 动态导入(按需加载)








# 核心概念



# links
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 








