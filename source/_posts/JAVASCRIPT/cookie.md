---
title: cookie
categories: 

- JAVASCRIPT


---


如果cookie过期了，就跳转到登陆页面，否则跳转到欢迎页面,怎么实现？？？

```
var expire=new Date(Date.now()+5000);
document.cookie='is_login=true; expires='+expire.toGMTString();
console.log(document.cookie);

```

需要注意的是
- cookie格式 `value[; expires=date][; domain=domain][; path=path][; secure]`
- expires: 日期格式等同于Date.toUTCString()的格式

