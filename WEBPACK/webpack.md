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


- Entry：入口，Webpack 执行构建的第一步将从 Entry 开始，可抽象成输入。
- Module：模块，在 Webpack 里一切皆模块，一个模块对应着一个文件。Webpack 会从配置的 - Entry 开始递归找出所有依赖的模块。
- Chunk：代码块，一个 Chunk 由多个模块组合而成，用于代码合并与分割。
- Loader：模块转换器，用于把模块原内容按照需求转换成新内容。
- Plugin：扩展插件，在 Webpack 构建流程中的特定时机注入扩展逻辑来改变构建结果或做你想要的事情。
- Output：输出结果，在 Webpack 经过一系列处理并得出最终想要的代码后输出结果。


Webpack 启动后会从 Entry 里配置的 Module 开始递归解析 Entry 依赖的所有 Module。 每找到一个 Module， 就会根据配置的 Loader 去找出对应的转换规则，对 Module 进行转换后，再解析出当前 Module 依赖的 Module。 这些模块会以 Entry 为单位进行分组，一个 Entry 和其所有依赖的 Module 被分到一个组也就是一个 Chunk。最后 Webpack 会把所有 Chunk 转换成文件输出。 在整个流程中 Webpack 会在恰当的时机执行 Plugin 里定义的逻辑。



# links
- [https://feibenren.gitee.io/webpack-shenruqianchu](https://feibenren.gitee.io/webpack-shenruqianchu)








