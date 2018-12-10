---
title: 如何关闭页面的时候展示一个confirm框
categories: 
- QUESTION
---

# 通过beforeunload
```
window.addEventListener('beforeunload',function(ev){
    var mes='xxx';
    ev.returnValue=mes;//ie,firefox
    return mes;//chrome,safari
})
```
必须将event.returnValue 的值设置为要显示给用户的字符串（对
IE 及Fiefox 而言），同时作为函数的值返回（对Safari 和Chrome 而言），


