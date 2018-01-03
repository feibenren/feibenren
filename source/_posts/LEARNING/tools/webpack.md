---
title: webpack
categories: 
- LEARNING
- TOOLS
tags:
- TOOLS
---


# 什么是webpack？

就是一个模块打包机

# 优点和缺点是什么？

## 优点
- 支持模块化，yo webapp 不支持js模块化的，这个就是一个很大的问题
- 配置简单，相比于gulp，配置更加简单，内置的webpack-dev-serve非常简单好用

## 缺点
- 上手太难，引入一张图片都很麻烦，

# 核心概念


- Entry：入口，Webpack 执行构建的第一步将从 Entry 开始，可抽象成输入。
- Module：模块，在 Webpack 里一切皆模块，一个模块对应着一个文件。Webpack 会从配置的 Entry 开始递归找出所有依赖的模块。
- Chunk：代码块，一个 Chunk 由多个模块组合而成，**用于代码合并与分割**。
- Loader：模块转换器，用于把模块原内容按照需求转换成新内容。
- Plugin：扩展插件，在 Webpack 构建流程中的**特定时机注入扩展逻辑**来改变构建结果或做你想要的事情。
- Output：输出结果，在 Webpack 经过一系列处理并得出最终想要的代码后输出结果。


# entry
# Output
# Module
# Resolve
# Plugins
# DevServer
# others
# others


## webpack基础配置 , webpack.config.js

```
module.exports={
    entry:'./src/main.js',
    output:{
        filename:'boundle.js',
        path:__dirname+'/dist'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader','css-loader'
                ]
            },
            {
                test:/\.(jpg|jepg|png|gif)$/,
                use:[
                    'file-loader'
                ]
            },
        ]
    }
}
```

# 常见loader
- css-loader
- style-loader
- sass-loader
- file-loader
- 


# 常见plugin
- html-webpack-plugin:使用模板来构建页面
- clean-webpack-plugin:删除指定目录
- uglifyjs-webpack-plugin:压缩js
- CommonsChunkPlugin :防止重复
- 
- 


# 自动刷新
- webpack's Watch Mode (webpack --watch)
- webpack-dev-server(webpack-dev-server)
- webpack-dev-middleware



# TREE SHAKING
为了学会使用 tree shaking，你必须
- 使用 ES2015 模块语法（即 import 和 export）。
- 引入一个能够删除未引用代码(dead code)的压缩工具(minifier)（例如 UglifyJSPlugin）。



# 问题
- 如何生成多个页面，比如index.html,list.html，其中还有通用部分




# 代码分离
- 代码分离到不同的 bundle 中,然后可以按需加载或并行加载这些文件
- 
- 
- 

# loader 传参的两种形式
```
module: {
    rules: [
      {
        // 用正则去匹配要用该 loader 转换的 CSS 文件
        test: /\.css$/,
        use: ['style-loader', 'css-loader?minimize'],
      }
    ]
  }

```

```
use: [
  'style-loader', 
  {
    loader:'css-loader',
    options:{
      minimize:true,
    }
  }
]

```

# use loaders loader 用哪个？



# .babelrc
- plugins:告诉 Babel 要使用哪些插件，插件可以控制如何转换代码。
- presets:告诉 Babel 要转换的源码使用了哪些新的语法特性,一个 Presets 对一组新语法特性提供支持，多个 Presets 可以叠加。 Presets 其实是一组 Plugins 的集合，每一个 Plugin 完成一个新语法的转换工作


# 修改模板，页面自动刷新，如何做到？？？？？
默认在devServer中开启hot:true，可以做到js修改，会修改，但是模板修改不会自动刷新
那么如何做到呢？
在webpack中，实现自动刷新有两种方法，一种是webpack自带的watch功能，一种就是webpack-dev-server中的hot功能
hot功能：js修改，可以实现页面无刷新而修改js，但是tempate修改不会
watch功能：js修改，页面会刷新，template修改，也会刷新页面
所以，总结
- 页面的构建，几乎都写在template中的话，使用watch
- 页面的构建，几乎都写在main.js中的话，使用hot



