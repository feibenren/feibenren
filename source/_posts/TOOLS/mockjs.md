---
title: mockjs
categories: 
- TOOLS

---


# MOCKJS:生成模拟数据
原理：
Mock.js 通过覆盖和模拟原生 XMLHttpRequest 的行为来拦截 Ajax 请求

所以，只要是xhr就可以拦截，但是jsonp就不可以了，jsonp的原理不是xhr

基本规则
```
'name|rule': value
```
# string，number,float,object,array的模拟

```
Mock.mock({
    "username|3-5":'a',
    "age|20-29":1,//后面的1没有意义
    "money|100-200.2":1,//两位数的小数
    "info|1-2":{a:1,b:2,c:3,d:4},
    "hobbies|1-2":['swim','reading','singing'],
})
```




# 参考链接
- http://mockjs.com/examples.html