---
title: typeof && instanceof
categories: 
- LEARNING
- JAVASCRIPT
tags:
- js
---

既然typeof对数组（array）和对象（object）的显示结果都是object，那么怎么区分它们呢？instanceof运算符可以做到。

```
var o = {};
var a = [];

o instanceof Array // false
a instanceof Array // true
```