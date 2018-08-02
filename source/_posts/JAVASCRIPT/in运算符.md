---
title: in运算符
categories: 

- JAVASCRIPT


---

> in运算符用于检查对象是否包含某个属性（注意，检查的是键名，不是键值），如果包含就返回true，否则返回false。

```
var o = { p: 1 };
'p' in o // true
```
该运算符对数组也适用。

```
var a = ["hello", "world"];

0 in a // true
1 in a // true
2 in a // false

'0' in a // true
'1' in a // true
'2' in a // false
```

in运算符的一个问题是，它不能识别对象继承的属性。
```
var o = new Object();
o.hasOwnProperty('toString') // false

'toString' in o // true
```
上面代码中，toString方法不是对象o自身的属性，而是继承的属性，hasOwnProperty方法可以说明这一点。但是，in运算符不能识别，对继承的属性也返回true。




for...in循环用来遍历一个对象的全部属性。

```
var o = {a:1, b:2, c:3};

for (i in o){
  console.log(o[i]);
}
// 1
// 2
// 3
```
注意，for...in循环遍历的是对象所有可enumberable的属性，其中不仅包括定义在对象本身的属性，还包括对象继承的属性。