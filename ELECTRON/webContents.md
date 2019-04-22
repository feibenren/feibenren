---
title: webContents
categories:
- ELECTRON
---

# webContents

渲染以及控制 web 页面

webContents 是 EventEmitter 的实例，`负责渲染和控制网页`, 是 BrowserWindow 对象的一个属性。 这是一个访问 webContents 对象的例子:


```
const { BrowserWindow } = require('electron')

let win = new BrowserWindow({ width: 800, height: 1500 })
win.loadURL('http://github.com')

let contents = win.webContents
console.log(contents)
```
# 事件
- did-finish-load
- did-fail-load
- did-frame-finish-load
- did-start-loading
- did-stop-loading
- dom-ready
- new-window
- unresponsive
- responsive
- destroyed
- devtools-opened
- devtools-closed
- devtools-focused
- certificate-error
- select-client-certificate
- login
- found-in-page
- media-started-playing
- media-paused
- did-change-theme-color
- context-menu
 
# 属性
- contents.id
- contents.session
- contents.hostWebContents
- contents.devToolsWebContents
- contents.debugger


# 方法
- contents.loadURL(url[, options])
- contents.loadFile(filePath[, options])
- contents.downloadURL(url)
- contents.getURL()
- contents.getTitle()
- contents.isDestroyed()
- contents.focus()
- contents.isFocused()
- contents.isLoading()
- contents.stop()
- contents.reload()
- contents.reloadIgnoringCache()
- contents.canGoBack()
- contents.canGoForward()
- contents.clearHistory()
- contents.goBack()
- contents.goForward()
- contents.goToIndex(index)
- contents.goToOffset(offset)
- contents.isCrashed()
- contents.setUserAgent(userAgent)
- contents.getUserAgent()
- contents.insertCSS(css)
- contents.executeJavaScript(code[, userGesture, callback])
- contents.getZoomLevel(callback)
- contents.setVisualZoomLevelLimits(minimumLevel, maximumLevel)
- contents.undo()
- contents.redo()
- contents.cut()
- contents.copy()
- contents.copyImageAt(x, y)
- contents.paste()
- contents.delete()
- contents.selectAll()
- contents.unselect()
- contents.replace(text)
- contents.replaceMisspelling(text)
- contents.insertText(text)
- contents.findInPage(text[, options])
- contents.stopFindInPage(action)
- contents.capturePage([rect, ]callback)
- contents.hasServiceWorker(callback)
- contents.unregisterServiceWorker(callback)
- contents.getPrinters()
- contents.print([options], [callback])
- contents.printToPDF(options, callback)
- contents.addWorkSpace(path)
- contents.removeWorkSpace(path)
- contents.setDevToolsWebContents(devToolsWebContents)
- contents.openDevTools([options])
- contents.closeDevTools()
- contents.isDevToolsOpened()
- contents.isDevToolsFocused()
- contents.toggleDevTools()
- contents.inspectElement(x, y)
- contents.inspectServiceWorker()
- contents.send(channel[, arg1][, arg2][, ...])
- contents.enableDeviceEmulation(parameters)
- contents.disableDeviceEmulation()
- contents.sendInputEvent(event)
- contents.endFrameSubscription()
- contents.startDrag(item)
- contents.savePage(fullPath, saveType, callback)
- contents.isOffscreen()
- contents.startPainting()
- contents.stopPainting()
- contents.isPainting()
- contents.setFrameRate(fps)
- contents.getFrameRate()
- contents.getOSProcessId()
- contents.getProcessId()
- contents.takeHeapSnapshot(filePath)
- contents.getType()


## contents.toggleDevTools()



# links
- [https://electronjs.org/docs](https://electronjs.org/docs)
- [中文文档](https://github.com/electron/i18n/tree/master/content/zh-CN)