---
title: app
categories:
- ELECTRON
---

# app

控制你的应用程序的事件`生命周期`。

# 事件

- will-finish-launching
- ready
- window-all-closed
- before-quit
- will-quit
- quit
- browser-window-blur
- browser-window-focus
- browser-window-created
- web-contents-created
- certificate-error
- select-client-certificate
- login
- gpu-process-crashed
- session-created
- second-instance
- remote-require
- remote-get-global
- remote-get-builtin
- remote-get-current-window

# 方法
- app.quit()
- app.exit([exitCode])
- app.relaunch([options])
- app.isReady()
- app.whenReady()
- app.focus()
- app.getAppPath()
- app.getPath(name)
- app.getFileIcon(path[, options], callback)
- app.setPath(name, path)
- app.getVersion()
- app.getName()
- app.setName(name)
- app.getLocale()
- app.setAsDefaultProtocolClient(protocol[, path, args])
# 属性
- app.isPackaged

## app.quit()

## app.exit([exitCode])


# links
- [https://electronjs.org/docs](https://electronjs.org/docs)
- [中文文档](https://github.com/electron/i18n/tree/master/content/zh-CN)