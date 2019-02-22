---
title: Q&A
categories: 
- CSS
---

# 为什么会有间隔?

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
    .box{
      width: 200px;
      height: 200px;
      border: 1px solid #aaa;
    }
    span{
      background-color: #aaa;
    }
  </style>
</head>
<body>
  <div class="box">
    <span>aaa</span>
    <span>aaa</span>
    <span>aaa</span>
  </div>
</body>
</html>
```
![](./images/间隔.jpg)


块框中说明，一个块框中要么都是块框，要不都是行内框(inline box)

三个span都是行内框，所以会按照行内框来渲染

行内框里面都是文本，渲染文本字体有大小

空白字符(空格，换行，tab)会被当作一个空格处理，这个空格就回被当作一个`字符`对待，所以会有间隙

解决方式
----------------------
box设置`font-size:0`,span重新指定字体大小,字体大小为零，也就是不会占据空间，所以可以消除间隙
--------------------
浮动
----------


# img下几像素空白产生原因


https://segmentfault.com/q/1010000000441100






[https://www.zhangxinxu.com/wordpress/2012/04/inline-block-space-remove-%E5%8E%BB%E9%99%A4%E9%97%B4%E8%B7%9D/](https://www.zhangxinxu.com/wordpress/2012/04/inline-block-space-remove-%E5%8E%BB%E9%99%A4%E9%97%B4%E8%B7%9D/)



