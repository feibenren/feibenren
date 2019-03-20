---
title: matchMedia
categories: 
- WEBAPI
---

# matchMedia

```
mql = window.matchMedia('(max-width:750px)')
```
返回一个新的MediaQueryList 对象

# MediaQueryList 对象

表示指定的媒体查询字符串解析后的结果

matchMedia()会返回一个meidaQueryList对象，这个对象如下属性

- matches:boolean值，表示匹配结果
- addListener()
- removeListener()

## mediaQueryList.addListener()

这个方法会接收一个回调函数

这个函数，会在`matches的结果发生变化`的时候才会执行

也就是matches从false->true的时候会触发，false->true的时候也会触发


# LINKS

- [https://developer.mozilla.org/zh-CN/docs/Web/API/Window/matchMedia](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/matchMedia)