---
title: HTMLAnchorElement
categories: 
- WEBAPI
---

# HTMLAnchorElement


# 属性

- HTMLAnchorElement.download

Is a DOMString indicating that the linked resource is intended to be downloaded rather than displayed in the browser. The value represent the proposed name of the file. If the name is not a valid filename of the underlying OS, browser will adapt it. The value is a URL with a scheme like http:, file:, data: or even blob: (created with URL.createObjectURL).

download的属性是一个domstring，表示连接的资源应该被下载，不是被浏览器展示

download的value是文件的名字，文件的名字可以是`http,file,data`表示的文件路径

也可以是blob

如果是blob格式的话，应该使用`URL.createObjectURL`创建



# links

- [https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLAnchorElement](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLAnchorElement)