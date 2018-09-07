---
title: let const
categories: 

- ES5


---

let 和var的区别：块级作用域

const 也有作用域，这一点很不一样
```
if (1) {
    const a = 111;
}

if (2) {
    const a = 2222;//这样是正确的
}
```
