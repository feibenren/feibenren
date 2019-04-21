---
title: ELECTRON
categories: 
- ELECTRON
---

# ELECTRON


# main process
主进程，通常是名为main.js 的文件，是每个 Electron 应用的入口文件。它控制着整个 App 的生命周期，从打开到关闭。 它也管理着系统原生元素比如菜单，菜单栏，Dock 栏，托盘等。 主进程负责创建 APP 的每个渲染进程。而且整个 Node API 都集成在里面。

每个 app 的主进程文件都定义在 package.json 中的 main 属性当中。这也是为什么 electron. 能够知道应该使用哪个文件来启动。

在Chromium中, 这个进程被称为 "浏览器进程"。它在Electron被重新命名, 以避免与渲染器进程混淆。


# Renderer process
渲染进程是你的应用内的一个浏览器窗口。与主进程不同的是，它能够同时存在多个而且运行在不一样的进程。而且它们也能够被隐藏。

在通常的浏览器内，网页通常运行在一个沙盒的环境挡住并且不能够使用原生的资源。 然而 Electron 的用户在 Node.js 的 API 支持下可以在页面中和操作系统进行一些低级别的交互。

-----------------

如果一个模块是 GUI 或底层系统相关的, 那么它应该只在主进程中可用。



# links

- [https://github.com/electron/i18n/tree/master/content/zh-CN](https://github.com/electron/i18n/tree/master/content/zh-CN)