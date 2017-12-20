---
title: flux
categories: 
- LEARNING
- REACT
tags:
- REACT
---


# 一种软件架构思想

![flux](/images/flux.png)

本质上就是一个浏览器端的严格的MVC框架，
起始服务器端的mvc框架是非常好用的，
比如一个正常的mvc框架的流畅
- 用户发送一个请求
- 控制器
- model
- view
然后改请求就完成了，想要继续其他操作，就要继续发送请求，周而复始

但是在浏览器端，那么就不一样了，
- 用户进行一个操作(发送一个请求)
- control
- model
- view
这个和后端差不多，但是问题就是，浏览器端的model和view都存在，这个时候，绝大多数情况下，使用直接在view中发送一个操作，直接修改model，因为这样省事，绕过了controller，这样就没有controller什么事了，问题就出在这里，导致混乱

flux的核心问题就是解决view和model直线的问题，只能是model影响view，不能view影响model,所以要单项数据流



# 四个部分
- View： 视图层
- Action（动作）：视图层发出的消息（比如mouseClick） (相当于tp框架中的一次http请求)
- Dispatcher（派发器）：用来接收Actions、执行回调函数(相当于控制器)
- Store（数据层）：用来存放应用的状态，一旦发生变动，就提醒Views要更新页面(相当于model)

# Flux 的最大特点，就是数据的"单向流动"

- 用户访问 View
- View 发出用户的 Action
- Dispatcher 收到 Action，要求 Store 进行相应的更新
- Store 更新后，发出一个"change"事件
- View 收到"change"事件后，更新页面


