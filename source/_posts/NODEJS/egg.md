---
title: egg
categories: 

- NODEJS

---

# egg
基于koa的框架

# 配置



# 插件的开关
config/plugin.js中配置
```
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks'
};
```
# 插件的配置
```
// config/config.default.js
exports.keys = <此处改为你自己的 Cookie 安全字符串>;
// 添加 view 配置
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
};
```
# 自定义启动脚本 app.js

```
// app.js
module.exports = app => {
  app.beforeStart(async () => {
    // 应用会等待这个函数执行完成才启动
    app.cities = await app.curl('http://example.com/city.json', {
      method: 'GET',
      dataType: 'json',
    });

    // 也可以通过以下方式来调用 Service
    // const ctx = app.createAnonymousContext();
    // app.cities = await ctx.service.cities.load();
  });
};
```

# 内置对象
this.app=this.ctx.app


# 定时任务


# 应用内获取运行环境

# 配置

```
config
|- config.default.js
|- config.test.js
|- config.prod.js
|- config.unittest.js
`- config.local.js

```

config.default.js 为默认的配置文件，所有环境都会加载这个配置文件，一般也会作为开发环境的默认配置文件


prod 环境会加载 config.prod.js 和 config.default.js 文件，config.prod.js 会覆盖 config.default.js 的同名配置


优先级（应用 > 框架 > 插件）


# 中间件
```
//config.default.js
module.exports = {
  // 配置需要的中间件，数组顺序即为中间件的加载顺序
  middleware: [ 'gzip' ],

  // 配置 gzip 中间件的配置
  gzip: {
    threshold: 1024, // 小于 1k 的响应体不压缩
  },
};
```




一个常见的错误是把 ctx.request.body 和 ctx.body 混淆，后者其实是 ctx.response.body 的简写。


# ajax
如果在同一个域名下面，所有的http请求都是带有cookie的，包括ajax请求，不是a页面有cookie，b页面就没有了，一旦某个请求让
服务器设置了一个cookie，那么接下来，所有的请求都会带有这个新设置的cookie


# 中间件、插件、应用的关系

# 内置插件
- onerror 统一异常处理
- Session Session 实现
- i18n 多语言
- watcher 文件和文件夹监控
- multipart 文件流式上传
- security 安全
- development 开发环境配置
- logrotator 日志切分
- schedule 定时任务
- static 静态服务器
onp jsonp 支持
- view 模板引擎



# npm install --production
只安装 dependencies 的依赖