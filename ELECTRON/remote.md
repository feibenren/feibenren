---
title: remote
categories:
- ELECTRON
---

# remote
在渲染进程中使用主进程模块。

remote 模块为渲染进程（web页面）和主进程通信（IPC）提供了一种`简单方法`。

在Electron中, GUI 相关的模块 (如 dialog、menu 等) 仅在主进程中可用, 在渲染进程中不可用。 为了在渲染进程中使用它们, ipc 模块是向主进程发送进程间消息所必需的。 使用 remote 模块, 你可以调用 main 进程对象的方法, 而不必显式发送进程间消息, 类似于 Java 的 RMI 。
例如：从渲染进程创建浏览器窗口

# 方法

- remote.require(module)
- remote.getCurrentWindow()
- remote.getCurrentWebContents()
- remote.getGlobal(name)

# 属性

- remote.process



## remote.require(module)

返回 any - 主进程中require(module) 返回的对象。 由其相对路径指定的模块将相对于主进程的入口点来解析。

> 相当于按照主进程来加载模块

## remote.getCurrentWindow()
返回 BrowserWindow - 此网页所属的窗口
## remote.getCurrentWebContents()
返回 WebContents - 此网页的 web 内容
## remote.getGlobal(name)

返回 any-主进程中 name (例如 global[name]) 的全局变量。

# links
- [https://electronjs.org/docs](https://electronjs.org/docs)
- [中文文档](https://github.com/electron/i18n/tree/master/content/zh-CN)