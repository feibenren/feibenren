---
title: plugins
categories: 
- GULP
---

# plugins
gulp自身几乎什么都不做，一切都依靠插件来完成

# gulp常用插件
- gulp-load-plugins:加载插件
- gulp-util:
- gulp-git:
- gulp-bump:
- gulp-changed:
- gulp-uglify:丑化js(压缩js)
- gulp-sourcemaps:
- gulp-concat:将文件流中的所有文件合并成一个文件
- gulp-rename:重命名

- gulp-imagemin:
- gulp-babel:
- gulp-sroucemaps


- gulp-less:处理less文件
- gulp-sass:处理sass文件
- gulp-clean-css:压缩css文件
- 
- 
- 
- 
- 
- 
- 
- 



# gulp-autoprefixer

该插件是postcss下面的一个主要插件，需要传参数的，因为给css加前缀是需要看支持的浏览器的
常见的配置是
```
.pipe(autoprefixer({
        browsers: ['last 2 versions'],
    }))
```
browsers字段配置的是查询到的目标浏览器，会根据查询到的浏览器来添加前缀
而查询浏览器使用的是
[browserslist](https://github.com/browserslist/browserslist)

注意:
autoprefixer不推荐将配置写到代码中，但是gulp-autoprefixer需要将配置写到代码中


autoprefixer官方不推荐这种写法，推荐将配置写到一个单独的配置文件中`.browserslistrc`中，因为这样可以与Babel, ESLint and Stylelint这些插件共享

写法是：一行一个配置，注释用`#`

Browserslist config should be named .browserslistrc or browserslist and have browsers queries split by a new line. Comments starts with # symbol:

```
# Browsers that we support

last 1 version
> 1%
IE 10 # sorry
```



# gulp-babel
将高版本js转化为低版本js，注意，这个地方不是所有的功能都可以实现
比如,import,export功能就不支持，babel只是转化高版本的js语法，无法实现导入导出功能

配置babel比较麻烦，需要单独配置一个`.babelrc`的文件,还要安装`gulp-babel`,`babel-core`,`babel-preset-env`三个插件

示例:
```
.pipe(plugins.babel())
```
所有的配置写到`.babelrc`中去
```
{
    "presets": [
        "env",
        {
            "targets": {
                "browsers": ["last 2 versions"]
            }
        }
    ]
}
```

# gulp-uglify:丑化js(压缩js)

# gulp-rename
重命名文件
示例:

```
  .pipe(rename({
    dirname: "main/text/ciao",
    basename: "aloha",
    prefix: "bonjour-",
    suffix: "-hola",
    extname: ".md"
  }))
```
一般就配置一个suffix

# gulp-concat
将gulp.src中的文件合并成一个文件
这里有个问题需要解决
### 顺序
假如有a.js,b.js,c.js这三个文件，如果要合并到一个文件，那么怎么合并呢？

gulp-concat做的很简单，按照gulp.src()中的配置来进行合并,默认使用换行符来合并文件

如果
```
gulp.src('*.js')
```
这样写的话，无法保证三个文件的顺序,想要保证文件的顺序，需要这样写

```
gulp.src(['a.js','b.js','c.js'])
```


#gulp-imagemin
压缩图片

