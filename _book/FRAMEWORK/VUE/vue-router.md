---
title: vue-router
categories: 

- VUE
---

# vuejs的三大件
- 模板引擎
- 组件
- 路由

# vue-router

当你要把 vue-router 添加进来，我们需要做的是，将组件(components)映射到路由(routes)，然后告诉 vue-router 在哪里渲染它们

# 三大步
- 引入组件
- 配置路由
- 挂载

```
//引入组件
var nav={template:`<h1>sidebar page</h1>`};
var sidebar={template:'<h1>sidebar page</h1>'};
var home={template:'<h1>home page</h1>'};
var list={template:'<h1>list page</h1>'};

var routes=[
    {path:'/',components:{nav:nav,sidebar:sidebar,default:home}},
    {path:'/list',components:{nav:nav,sidebar:sidebar,default:list}}
];

//配置路由
var router=new VueRouter({
    mode: 'history',
    routes
});

//挂载
var app=new Vue({
    el:"#app",
    data:{
        title:"abc"
    },
    router
});
```

