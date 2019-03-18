---
title: ARRAY
categories: 
- JAVASCRIPT
---

# ARRAY


数组是一种`类列表对象`，它的原型中提供了遍历和修改元素的相关操作。



数组对象的属性和数组元素列表是分开存储的

# length属性

JavaScript 数组的 length 属性和其数字下标之间有着紧密的联系。数组内置的几个方法（例如 join、slice、indexOf 等）都会考虑 length 的值。另外还有一些方法（例如 push、splice 等）还会改变 length 的值

该值是一个无符号 32-bit 整数

# 方法

## 修改器方法(Mutator methods,赋值函数)

- Array.prototype.push():
- Array.prototype.pop():
- Array.prototype.shift():
- Array.prototype.unshift():
- Array.prototype.sort():
- Array.prototype.splice():

##### Array.prototype.push()
在数组的末尾增加一个或多个元素，并返回数组的新长度
##### Array.prototype.pop()
删除数组的最后一个元素，并返回这个元素
##### Array.prototype.shift()
删除数组的第一个元素，并返回这个元素
##### Array.prototype.unshift()
在数组的开头增加一个或多个元素，并返回数组的新长度
##### Array.prototype.sort()
对数组元素进行排序，并返回当前数组。
##### Array.prototype.splice()
在任意的位置给数组添加或删除任意个元素。

## 访问方法(Accessor methods)

- Array.prototype.concat():
- Array.prototype.join():
- Array.prototype.slice():
- Array.prototype.indexOf():
- Array.prototype.lastIndexOf():

#### Array.prototype.concat():
返回一个由当前数组和其它若干个数组或者若干个非数组值组合而成的新数组。
#### Array.prototype.join():
连接所有数组元素组成一个字符串。
#### Array.prototype.slice():
抽取当前数组中的一段元素组合成一个新数组。

浅拷贝

```
var shallowCopy = fruits.slice(); // this is how to make a copy 
```
#### Array.prototype.indexOf():

返回数组中第一个与指定值相等的元素的索引，如果找不到这样的元素，则返回 -1。


跟据value查找index

#### Array.prototype.lastIndexOf():

返回数组中最后一个（从右边数第一个）与指定值相等的元素的索引，如果找不到这样的元素，则返回 -1。

## 迭代方法

- Array.prototype.forEach():
- Array.prototype.map():
- Array.prototype.every():
- Array.prototype.some():
- Array.prototype.filter():
- Array.prototype.reduce():
- Array.prototype.reduceRight():



#### Array.prototype.forEach():
为数组中的每个元素执行一次回调函数。



#### Array.prototype.map():

返回一个由回调函数的返回值组成的新数组

#### Array.prototype.every() && #### Array.prototype.some():

- every():如果数组中的每个元素`都`满足测试函数，则返回 true，否则返回 false。
- some()如果数组中的每个元素`有一个`满足测试函数，则返回 true，否则返回 false。


这两个方法是`断言方法`

#### Array.prototype.filter():
函数过滤

#### Array.prototype.reduce():

从左到右为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值。

#### Array.prototype.reduceRight():












