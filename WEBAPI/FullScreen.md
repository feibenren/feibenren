---
title: FullScreen
categories: 
- WEBAPI
---
# FullScreen

使得一个元素与其子元素，可以占据整个屏幕


target是`Element`，甚至可以让一个`h1`标签全屏显示

# 方法

- Element.exitFullscreen()
- Element.requestFullscreen()

# 对应的事件

- fullscreenchange:
- fullscreenerror:



# 注意

- `requestFullscreen()`这个对象，只有`Element`元素有
- `exitFullscreen()`这个对象，只有`document`元素有

[示例代码](https://codepen.io/feibernren/pen/rRgZyR)


 # links
 - [https://developer.mozilla.org/zh-CN/docs/Web/API/Fullscreen_API](https://developer.mozilla.org/zh-CN/docs/Web/API/Fullscreen_API)