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

# 怎么用？

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