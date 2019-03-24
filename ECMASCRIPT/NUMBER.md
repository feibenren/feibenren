---
title: NUMBER
categories:
- ECMASCRIPT
---

# 数值表示
[数字](./COMPUTER/数字.md)中

计算机的在表示数字的时候，由于数字种类不同，使用了不同的数据类型来标示，来达到最大的表示范围



# js

但是在js中，所有的数值都是用`小数的格式`来存储，即使是整数也使用小数的格式来存储

-------------

一共使用64位表示数字

- 第1位:符号位
- 第2-12位(11位):指数部分
- 第13-64位(52位):表示有效数字部分

因为是使用了二进制，所以有效数字的部分，永远是`1.xxxx`开头的

又规定这个1是可以省略的

那这个时候有效位数就是53了


----------------
指数，在js中，指数是11位的(2047)

一分为二，一半表示正数，一半表示负数

也就是说，指数最大的是1024，最小的是-1023


# 数值表示方法

- 科学记数法
- 十六进制(0x)
- 二进制(0b)
- 八进制(00)


# links
- [http://www.ruanyifeng.com/blog/2010/06/ieee_floating-point_representation.html](http://www.ruanyifeng.com/blog/2010/06/ieee_floating-point_representation.html)