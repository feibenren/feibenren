---
title: REQUIRE.JS
categories: 
- LIBRARY
tags:
- LIBRARY
---

# REQUIREJS
实现AMD标准的库


```

requirejs.config({
    baseUrl:'/scripts',
    paths:{
        jquery:'./libs/jquery',
        lazyload:'libs/jquery.lazyload.min'
    },
    shim:{
        lazyload:{
            deps:['jquery'],
        }
    }
});
require(['jquery','mods/center_ad','mods/loadImg'])
```

# 加载即执行

# 模块定义

## 函数式定义

```
define('mod_name',{})
//不要写死模块名称，让requirejs更具路径来作为模块名
```


```
define([
  'mod1',
  'mod2',
], function (mod1,mod2) {
  return {
      a:1,
      b:2
  }
});

```

## 对象式定义
```
define({
    a:1,
    b:2
});

```


# 参考链接
[官网](http://requirejs.org)
[http://www.ruanyifeng.com/blog/2012/11/require_js.html](http://www.ruanyifeng.com/blog/2012/11/require_js.html)