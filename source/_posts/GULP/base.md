---
title: base
categories: 
- GULP
---
# base
gulp 是一个基于流的自动化构建工具

(webpack是一个模块打包机)

# 安装
gulp 分为gulp-cli(需要全局安装)和gulp(推荐本地安装)两个东西

这样做的好处是本地版本可以变化，但是cli一般不需要变化

实际测试，`cnpm i -g gulp`的话，也可以实现gulp-cli的功能，但是官方还是推荐全局安装gulp-cli

[https://github.com/gulpjs/gulp/blob/master/docs/getting-started/1-quick-start.md](https://github.com/gulpjs/gulp/blob/master/docs/getting-started/1-quick-start.md)



# api

4.0版本的api和之前的略微不同，需要注意

- gulp.src - Emit files matching one or more globs
- gulp.dest - Write files to directories
- gulp.symlink - Write files to symlinks
- gulp.task - Define tasks
- gulp.lastRun - Get timestamp of last successful run
- gulp.parallel - Run tasks in parallel
- gulp.series - Run tasks in series
- gulp.watch - Do something when a file changes
- gulp.tree - Get the tree of tasks
- gulp.registry - Get or set the task registry


# gulp.src(globs):注入匹配的vinyl流
使用方法很简单

```
gulp.src('*.js')
```
但是涉及到很多问题
- 如何匹配文件
- 如何表示文件

## 如何表示文件
如果传入流中的内容仅仅是文件的内容的话，是不行的，因为我可能需要做一些其他操作，比如给文件添加min后缀

所以

gulp使用了一种vinyl格式的虚拟文件格式


## vinyl
Virtual file format(虚拟文件格式)
[https://github.com/gulpjs/vinyl](https://github.com/gulpjs/vinyl)

```
var Vinyl = require('vinyl');

var jsFile = new Vinyl({
  cwd: '/',
  base: '/test/',
  path: '/test/file.js',
  contents: new Buffer('var x = 123')
});
```
简单来说，vinyl就是一种表示文件的对象，属性具有文件的信息，如contents,path等

可以很方便的创建一个虚拟的文件

但是和gulp.src()有什么关系?这个函数应该是产生一个本地文件的文件流啊

`vinyl-fs`就是将本地文件映射成vinyl的一个库，gulp基于此库，简单说，就是将本地文件变成了vinyl，

## 如何匹配文件
使用正则？
可以，但是多级目录的文件用正则恐怕就不合适了

这个问题其实很早就出现了

解决方式就是glob

> a mini-language used for pattern matching of file and folder paths

glob 最早是出现在类Unix系统的命令行中, 是用来匹配文件路径的

除了在命令行中，我们在程序中也会有匹配文件路径的需求。于是，很多编程语言有了对 glob 的实现 ，如 Python 中的 glob 模块； php 中的 glob 方法。

node中对应的库是[node-glob](https://github.com/isaacs/node-glob)

```
var glob = require("glob")

// options is optional
glob("**/*.js", options, function (er, files) {
  // files is an array of filenames.
  // If the `nonull` option is set, and nothing
  // was found, then files is ["**/*.js"]
  // er is an error object or null.
})
```


## 链接
- [glob](https://www.jianshu.com/p/ce7cf53274bb)
- [https://en.wikipedia.org/wiki/Glob_(programming)](https://en.wikipedia.org/wiki/Glob_(programming))


`gulp.series`和`gulp.parallel`这两个方法分别是串行执行和并行执行
参数都接收一个数组，

如果复杂情况，可能出现如下情况
```
gulp.task(
  "default",
  gulp.series("clean", gulp.parallel(["styles", "scripts"]))
);

```

# gulp.dest(path)
写入pipe过来的数据，并re-emit数据(这样就可以实现输出到多个目录)

# 




# recipes

## styles处理
写css一般不直接写纯css

一般使用less/sass来写前置处理css(也叫做css预处理,pre-processor)

然后对纯css再处理一次，叫做后处理css(post-processor),比如加前缀，压缩,加sourcemap等

流程如下:

pre-css------> css----->post-css

因为处理css工序比较繁杂，需要的工具也很多

常见的有

`gulp-less`,
`gulp-sass`,
`gulp-autoprefixer`,
`gulp-clean-css`(之前叫做`gulp-minify-css`),






然后使用
## scripts处理
## images处理

## 输出mian.js,main.min.js两份js

