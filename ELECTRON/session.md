---
title: session
categories:
- ELECTRON
---

# session
管理浏览器会话、cookie、缓存、代理设置等。


session 模块可用于创建新的 session 对象。

你还可以使用WebContents的session属性或 session模块访问现有页的session


# 实例方法
- ses.getCacheSize(callback)
- ses.clearCache(callback)
- ses.clearStorageData([options, callback])
- ses.flushStorageData()
- ses.setProxy(config, callback)
- ses.resolveProxy(url, callback)
- ses.setDownloadPath(path)
- ses.enableNetworkEmulation(options)
- ses.disableNetworkEmulation()
- ses.setCertificateVerifyProc(proc)
- ses.setPermissionRequestHandler(handler)
- ses.setPermissionCheckHandler(handler)
- ses.clearHostResolverCache([callback])
- ses.allowNTLMCredentialsForDomains(domains)
- ses.setUserAgent(userAgent[, acceptLanguages])
- ses.getUserAgent()
- ses.getBlobData(identifier, callback)


# 实例属性
- ses.cookies`



# links
- [https://electronjs.org/docs](https://electronjs.org/docs)
- [中文文档](https://github.com/electron/i18n/tree/master/content/zh-CN)