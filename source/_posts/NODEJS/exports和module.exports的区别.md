---
title: exports和module.exports的区别
categories: 

- NODEJS

---


# 但是你不可以直接对exports赋值
```
exports = {
    hello: hello,
    greet: greet
};//错误的
```

```
exports.hello = hello;
exports.greet = greet;
//正确的
```

给exports赋值是无效的，因为赋值后，module.exports仍然是空对象{}。

[参考链接](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001434502419592fd80bbb0613a42118ccab9435af408fd000)
