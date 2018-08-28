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

# gulp.dest(path):写入数据
写入pipe过来的数据，并re-emit数据(这样就可以实现输出到多个目录)

# gulp.task([name],fn):定义task
定义一个暴露给gulp-cli的task



## [name]

task名称

可以省略，如果身略了，那么默认会使用函数名(或者给函数定义一个displayName属性)，因为这个name是需要在命令行中运行的，所以不能含有空格

## fn
任务具体函数，该函数需要注意


常见的格式

```
function someTask() {
  return gulp.src(['some/glob/**/*.ext']).pipe(someplugin());
}
someTask.description = 'Does something';

gulp.task(someTask)
```

由于gulp中所有的任务是异步的，所以，该函数的第一个参数是回调函数，当任务执行完成后，需要执行该回调函数来发出完成信号

但是，也可以通过返回steam,promise来发出一个完成信号

示例:
```sync
function test(){
}
gulp.task(test);//会报错

```
```callback
gulp.task('clean', function(done) {
  del(['.build/'], done);
});

```
stream
```
gulp.task('somename', function() {
  return gulp.src('client/**/*.js')
    .pipe(minify())
    .pipe(gulp.dest('build'));
});
```
promise
```
gulp.task('clean', function() {
  return new Promise(function (resolve, reject) {
    del(['.build/'], function(err) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
});
```





### fn.name
函数名称，这个名称会在task中的name没写的时候，当作name使用
### fn.displayName
如果task中的name没写，并且fn函数是匿名函数的话，那么就需要定义该属性来表示name
### fn.discription
任务的描述，但是我本地测试没有成功


# gulp.parallel(...tasks)
Takes a number of task names or functions and returns a function of the composed tasks or functions.

将一组任务合并成一个组合任务

When using task names, the task should already be registered.

当使用任务名称的时候，这个任务应该已经被注册了

When the returned function is executed, the tasks or functions will be executed in parallel, all being executed at the same time. If an error occurs, all execution will complete.

当组合任务被执行，那么这个组合任务中的每个单独的任务会并行执行

tasks
Type: Array, String or Function

A task name, a function or an array of either.

示例：
```
gulp.parallel(str1,str2)
gulp.parallel([str1,str2])
gulp.parallel(fn1,fn2)
gulp.parallel([fn1,fn2])
```

# gulp.series(...tasks)
和gulp.parallel()相似，只不过是串行执行

# gulp.watch(globs[, opts][, fn])

匹配对应的文件，执行对应的方法

该方法和gulp.task对应的函数类似，也需要执行回调或者返回stream/promise





# gulp.tree(options)
返回任务列表






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

## 输出main.js,main.min.js两份js

## 合并css/js

## 如何区分dev,production

## 开发的时候使用浏览器

```
const gulp = require("gulp");
const config = require("./gulp/config.js");
const plugins = require("gulp-load-plugins")();
const del = require("del");

var server = require("browser-sync").create();
var reload = server.reload;

const dist = "dist";
const tmp = ".tmp";
const src = "src";
const config = {
  tmp, //零时总目录
  dist, //输出总目录
  html: {
    src: `${src}/*.html`,
    tmp: `${tmp}`,
    dist: `${dist}`
  },
  styles: {
    src: `${src}/styles/*.less`,
    tmp: `${tmp}/styles/`,
    dist: `${dist}/styles/`
  },
  scripts: {
    src: `${src}/scripts/*.js`,
    tmp: `${tmp}/scripts/`,
    dist: `${dist}/scripts/`
  },
  images: {
    src: `${src}/images/*.*`,
    tmp: `${tmp}/images/`,
    dist: `${dist}/images/`
  }
};

gulp.task("styles", () => {
  return gulp
    .src(config.styles.src)
    .pipe(plugins.less())
    .pipe(
      plugins.autoprefixer({
        browers: ["last 1 version"]
      })
    )
    .pipe(plugins.cleanCss())
    .pipe(gulp.dest(config.styles.tmp))
    .pipe(reload({ stream: true }));
});

gulp.task("scripts", () => {
  return gulp
    .src(config.scripts.src)
    .pipe(plugins.babel())
    .pipe(gulp.dest(config.scripts.tmp))
    .pipe(reload({ stream: true }));
});
gulp.task("images", () => {
  return gulp
    .src(config.images.src)
    .pipe(plugins.imagemin())
    .pipe(gulp.dest(config.images.tmp))
    .pipe(reload({ stream: true }));
});
gulp.task("clean", () => {
  return del([config.dist, config.tmp]);
});
gulp.task("html", () => {
  return gulp
    .src(config.html.src)
    .pipe(gulp.dest(config.html.tmp))
    .pipe(reload({ stream: true }));
});

gulp.task(
  "serve",
  gulp.series(
    "clean",
    gulp.parallel("styles", "scripts", "html", "images"),
    cb => {
      server.init({
        server: config.tmp
      });
      gulp.watch(config.styles.src, gulp.parallel("styles"));
      gulp.watch(config.scripts.src, gulp.parallel("scripts"));
      gulp.watch(config.html.src, gulp.parallel("html"));
      gulp.watch(config.images.src, gulp.parallel("images"));
      cb();
    }
  )
);

gulp.task(
  "build",
  gulp.series(
    "clean",
    gulp.parallel("html", "styles", "images", "scripts"),
    () => {
      return gulp.src(config.tmp + "/**/*").pipe(gulp.dest(config.dist));
    }
  )
);


```

