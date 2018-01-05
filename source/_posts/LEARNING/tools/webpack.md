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


# output.publicPath 配置好，devserver就会自动跳转到一个类似于public的目录页面，为什么？


# output.publicPath:'asdf'
outpath输出路径是 ouput.publicPath+path+filename
output.publicPath默认是'',
仅此而已，不要和devserver混淆到一起
改配置仅仅修改了bundle的输出路径，个人觉得最好只在product中设置

```
<script type="text/javascript" src="asdf/scripts/main--f2a22f432c0ed250bb55.js"></script>
```
所以该配置个人觉得一般仅仅是在product中才会设置，dev中千万不要设置，否则找不到目录

## template 的图片，是按照哪个相对目录来的？
devServer.contentBase来的，该属性默认为该项目目录 
## css中的图片，是按照哪个目录来的？
引入该css文件的js文件来的

# 如何使用webpac制作一个通用的模块呢？？？？
libary,libarTarget


# 为了更清晰，`-loader` 后缀在 webpack 2 中不再是可选的




# context: __dirname, // string（绝对路径！）
  // webpack 的主目录
  // entry 和 module.rules.loader 选项
  // 相对于此目录解析

# mock数据

```
devServer: {
    hot: true,
    open: true,
    // contentBase: path.resolve(__dirname, 'app/images'),
    before:function(app){
        app.get('/test/',function(req,res){
            res.end('xxxxxxx');
        })
    },
},
```

# devServer.contentBase

告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要。devServer.publicPath 将用于确定应该从哪里提供 bundle，并且此选项优先。

默认情况下，将使用**当前工作目录**作为提供内容的目录，但是你可以修改为其他目录：

contentBase: path.join(__dirname, "public")
注意，推荐使用绝对路径。

## 当前工作目录指的是这个项目所在的目录，不设置的话，默认是可以访问这个项目中所有的资源的

# devServer.overlay:全屏显示错误


# devServer.proxy
```
proxy: {
    "/api": {
        target: "http://www.test.com/news.php",
        changeOrigin: true
    }
}
```
必须添加`changeOrigin`属性


#devServer.publicPath:这个目录甚至可以是瞎写的
此路径下的打包文件可在浏览器中访问。

假设服务器运行在 http://localhost:8080 并且 output.filename 被设置为 bundle.js。默认 publicPath 是 "/"，所以你的包(bundle)可以通过 http://localhost:8080/bundle.js 访问。