---
title: globalShortcut
categories:
- ELECTRON
---
# globalShortcut

在应用程序没有键盘焦点时，监听键盘事件。


globalShortcut 模块可以在操作系统中注册/注销全局快捷键, 以便可以为操作定制各种快捷键。

**注意** 快捷方式是全局的; 即使应用程序没有键盘焦点, 它也仍然在持续监听键盘事件。 在应用程序模块发出 ready 事件之前, 不应使用此模块。


# 方法

- globalShortcut.register(accelerator, callback)
- globalShortcut.isRegistered(accelerator)
- globalShortcut.unregister(accelerator)
- globalShortcut.unregisterAll()



# links
- [官方文档](https://electronjs.org/docs)
- [中文文档](https://github.com/electron/i18n/tree/master/content/zh-CN)
- [开发文档](https://github.com/electron/i18n/tree/master/content/zh-CN/docs/development)