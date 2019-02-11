---
title: srcset&sizes
categories: 
- HTML5
---


# 问题

根据不同的设备(dpr的不同和设备尺寸的不同)，展示不同的图片，在移动端的很常见，之前只能通过js来实现，很麻烦

media query虽然可以通过设备的不同来控制css，但是无法控制html中的img


现在可以根据图片的两个新的属性来实现


# srcset:根据设备的不同加载不同的图片

## 根据不同的dpr来显示不同的图片

```
<img srcset="https://via.placeholder.com/350x150?text=1x 1x,https://via.placeholder.com/350x150?text=2x 2x,https://via.placeholder.com/350x150?text=3x 3x">
```

## 根据不同的设备尺寸来显示不同的图片

```
<img srcset="https://via.placeholder.com/350x150?text=500w 500w,https://via.placeholder.com/350x300?text=1000w 1000w">

```

# sizes:图片的媒体查询

可以根据设备来加载不同的图片，但是还有一个问题：

```
<img srcset="https://via.placeholder.com/350x150?text=500w 500w,https://via.placeholder.com/350x300?text=1000w 1000w">
```
代码中，0-500px的屏幕宽度显示500w,加载的图片尺寸是350px，但是有时候不能满足我们的需求:我们希望在0-500px的时候，图片显示50px的宽度，虽然图片原始尺寸是350px

这个时候就需要使用sizes属性了


```
<img srcset="https://via.placeholder.com/350x150?text=500w 500w,https://via.placeholder.com/350x300?text=1000w 1000w" sizes='(max-width:500px) 50px,(max-width:1000px) 600px'>

```

> 只有srcset使用了`w`,才可以使用sizes，不同的src标签不支持sizes

# 兼容
ie全系不支持，其他主流浏览器都支持

在不支持的浏览器中，可以使用src属性即可
```
<img src="https://via.placeholder.com/350x150?text=default" srcset="https://via.placeholder.com/350x150?text=1x 1x,https://via.placeholder.com/350x150?text=2x 2x,https://via.placeholder.com/350x150?text=3x 3x">
```


# 链接

- [https://blog.zfanw.com/srcset-and-sizes/](https://blog.zfanw.com/srcset-and-sizes/)
- [https://www.jianshu.com/p/729fb20ad346](https://www.jianshu.com/p/729fb20ad346)
