---
title: react-router
categories: 
- LEARNING
- REACT
tags:
- REACT
---
# 组件库
- react-router React Router 核心
- react-router-dom 用于 DOM 绑定的 React Router
- react-router-native 用于 React Native 的 React Router
- react-router-redux React Router 和 Redux 的集成
- react-router-config 静态路由配置帮助助手

# web应用，应该引入哪个？
react-router-dom,就这一个就好
如果搭配了redux的话，还要使用react-router-redux

# 基本案例
```
import { Route, BrowserRouter, Link ,Switch,Redirect} from 'react-router-dom';
 <Router>
    <div>
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/about">关于</Link></li>
        <li><Link to="/topics">主题列表</Link></li>
      </ul>
      <hr/>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
```
link默认会渲染出a链接，点击link会改变url地址，然后react会更具url，来匹配Route对应出来的组件，渲染出组件

但是上面的代码会报错
为什么？？？
web应用中需要使用
BrowserRouter

```
import { Route, BrowserRouter, Link ,Switch,Redirect} from 'react-router-dom';
 <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/about">关于</Link></li>
        <li><Link to="/topics">主题列表</Link></li>
      </ul>
      <hr/>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </BrowserRouter>
```

# BrowserRouter子元素只能是一个

```
 <BrowserRouter>
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/about">关于</Link></li>
        <li><Link to="/topics">主题列表</Link></li>
      </ul>
      <hr/>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
  </BrowserRouter>
```
这样会报错的

# 假如我想将Link和Route分到不同的子组件中，会怎么样？？？？

比如：
header.jsx:
```
<ul>
    <li><Link to="/">首页</Link></li>
    <li><Link to="/about">关于</Link></li>
    <li><Link to="/topics">主题列表</Link></li>
</ul>
```
main.jsx
```
<Route exact path="/" component={Home}/>
<Route path="/about" component={About}/>
<Route path="/topics" component={Topics}/>
```

app.jsx

```
<div>
    <header><header/>
    <main><main/>
</div>
```
这种情况其实也很常见
结果会怎样？？？？
点击link，url会改变，但是route部分不会渲染，也就是说只修改了url

但是刷新本页面的话，会则会匹配到对应的route

也就是说，link和route不会同步了

怎么办？？？？？







# 参考
- http://www.jianshu.com/p/6a45e2dfc9d9
- http://www.jianshu.com/p/e3adc9b5f75c
- http://www.zcfy.cc/article/react-router-v4-the-complete-guide-mdash-sitepoint-4448.html