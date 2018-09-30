---
title: base
categories:
  - ELECTRON
---

# base

electron 是基于 node 和 Chromium ,用 HTML，CSS 和 JavaScript 来构建跨平台桌面应用的开源库

著名应用:

- vscode
- github desktop
- atom
- skype


# 应用结构

electron 运行原理涉及到两种进程，主进程和渲染进程

主进程控制整个应用

由于使用了chromium，chromium的多进程也被使用到了，每个web页面运行在他自己的渲染进程中

总结:
- 主进程:表示app
- 渲染进程:表示每个web页面

基本规则是: 如果一个模块是 GUI 或底层系统相关的, 那么它应该只在主进程中可用


主进程脚本就像一个普通的Node. js 脚本


渲染进程除了额外能够使用node模块的能力外，与普通网页没有什么区别

两者有本质区别
- 主进程有且只有一个，渲染进程可以多个
- 渲染进程调用GUI相关的api(比如dialog、menu)是不允许的,主进程没有限制

相同点
- 都可以使用node提供的api


两者之间是可以通信的，主要通过 `ipcRenderer`,`ipcMain`


# 主进程

主进程有且只有一个，package.json中的main字段指定的脚本就是主进程


# 渲染进程









# 基本模块

electron将应用抽象成几个对象，比如
- app:应用对象
- BrowserWindow:浏览器窗口
- remote 
- shell



# app
控制你的应用程序的事件生命周期

事件
- ready
- window-all-closed

方法:
- app.quit():
- 
- 
- 
- 
- 
- 
- 
- 
- 
- 

# BrowserWindow
创建和控制浏览器窗口





# 快捷键


# shell

## shell.beep()
播放哔哔的声音，在windows中展示叮叮叮的声音

# 小例子
- [markdown编辑器](https://gitee.com/feibenren/electron-markdown)
- [网页图片下载器]()
- [资源管理器]()