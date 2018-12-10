---
title: assert
categories: 

- NODEJS

---

## assert模块是Node的内置模块，主要用于断言。如果表达式不符合预期，就抛出一个错误。

```
var assert = require('assert');

function add (a, b) {
  return a + b;
}

var expected = add(1,2);
assert( expected === 4, '预期1加2等于3');//这样的话，系统就会报错，如何捕获这个错误？？？没法捕获，这个模块主要用来测试使用
```