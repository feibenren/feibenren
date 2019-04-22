---
title: BrowserWindow
categories:
- ELECTRON
---

# BrowserWindow

创建和控制浏览器窗口。

# 构造函数
- `new BrowserWindow([options])`

options包含很多属性

# 事件

- page-title-updated
- close
- closed
- unresponsive
- responsive
- blur
- focus
- show
- hide
- ready-to-show
- maximize
- unmaximize
- minimize
- restore
- resize
- move
- enter-full-screen
- leave-full-screen
- enter-html-full-screen
- leave-html-full-screen


# 静态方法

- BrowserWindow.getAllWindows()
- BrowserWindow.getFocusedWindow()
- BrowserWindow.fromWebContents(webContents)
- BrowserWindow.fromBrowserView(browserView)
- BrowserWindow.fromId(id)
- BrowserWindow.addExtension(path)
- BrowserWindow.removeExtension(name)
- BrowserWindow.getExtensions()
- BrowserWindow.addDevToolsExtension(path)
- BrowserWindow.removeDevToolsExtension(name)
- BrowserWindow.getDevToolsExtensions()


# 实例属性
- win.webContents
- win.id

# 实例方法
- win.destroy()
- win.close()
- win.focus()
- win.blur()
- win.isFocused()
- win.isDestroyed()
- win.show()
- win.showInactive()
- win.hide()
- win.isVisible()
- win.isModal()
- win.maximize()
- win.unmaximize()
- win.isMaximized()
- win.minimize()
- win.restore()
- win.isMinimized()
- win.setFullScreen(flag)
- win.isFullScreen()
- win.isNormal()
- win.setBackgroundColor(backgroundColor)
- win.setBounds(bounds[, animate])
- win.getBounds()
- win.setContentBounds(bounds[, animate])
- win.getContentBounds()
- win.getNormalBounds()
- win.setEnabled(enable)
- win.setSize(width, height[, animate])
- win.getSize()
- win.setContentSize(width, height[, animate])
- win.getContentSize()
- win.setMinimumSize(width, height)
- win.getMinimumSize()
- win.setMaximumSize(width, height)
- win.getMaximumSize()
- win.setResizable(resizable)
- win.isResizable()
- win.isFullScreenable()
- win.setFullScreenable(fullscreenable)
- win.setAlwaysOnTop(flag[, level][, relativeLevel])
- win.isAlwaysOnTop()
- win.center()
- win.setPosition(x, y[, animate])
- win.getPosition()
- win.setTitle(title)
- win.getTitle()
- win.flashFrame(flag)
- win.loadURL(url[, options])
- win.loadFile(filePath[, options])
- win.reload()
- win.setProgressBar(progress[, options])


## win.loadFile(filePath[, options])
## win.loadURL(url[, options])
## win.setTitle(title)
## win.getTitle()
## win.reload()

## win.setProgressBar(progress[, options])


## win.flashFrame(flag)
启动或停止闪烁窗口, 以吸引用户的注意。


# links
- [https://electronjs.org/docs](https://electronjs.org/docs)
- [中文文档](https://github.com/electron/i18n/tree/master/content/zh-CN)