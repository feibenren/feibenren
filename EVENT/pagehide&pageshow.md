---
title: pagehide&pageshow
categories: 
- EVENT
---

# pagehide&pageshow

先说这两个事件之前，得说`back-forward cache`

如果一个用户在一个网页中点击了一个连接，默认会跳转到新页面

老页面怎么办？

浏览器有一个机制，`back-forward cache`，也就是说，通过前进后退按钮可以跳转的页面，都会被缓存

缓存的是所有内容，包括js的运行结果，简单说，可以认为页面被`封冻`了，解封后和之前一样

-----------------
使用这种机制的浏览器不多

pc端浏览器一般都不支持

移动端很多也不支持，微信默认就不支持，一般手机浏览器支持

> 默认的处理是：点击了back，浏览器重新加载页面

-----------------------

pageshow就是`点击了back`之后，从`bf cache`中解封之后触发的事件

pagehide正好相反

# 注意
- 这两个事件只能添加在`defaultView`上

# links

- [http://blog.yancoder.com/2017/09/30/%E6%B5%8F%E8%A7%88%E5%99%A8history%E7%BC%93%E5%AD%98%E6%9C%BA%E5%88%B6/](http://blog.yancoder.com/2017/09/30/%E6%B5%8F%E8%A7%88%E5%99%A8history%E7%BC%93%E5%AD%98%E6%9C%BA%E5%88%B6/)
- [https://www.cnblogs.com/milo-wjh/p/6811868.html](https://www.cnblogs.com/milo-wjh/p/6811868.html)