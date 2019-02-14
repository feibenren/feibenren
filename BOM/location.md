---
title: location
categories: 
- BOM
---
# location

location对象表示的是`URL`，window.location,document.location，都指向这个对象

具体内容:

```
{
    hash: ""
    host: "www.google.com.hk"
    hostname: "www.google.com.hk"
    href: "https://www.google.com.hk"
    origin: "https://www.google.com.hk"
    pathname: "/search"
    port: ""
    protocol: "https:",
    search: "?q=BOM&oq=BOM",
    reload(){},
    replace(){}, 
}
```


# hash检测事件

HTML5 新增了hashchange 事件