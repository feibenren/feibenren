---
title: SYMBOL
categories: 
- ECMASCRIPT
---


# Symbol

js中的第七种数据类型，可以产生独一无二的数值

绝大多数情况下，用在对象的属性上

作用:`作为对象属性的唯一标识符`

-----------------------

实现symbol的本质其实很简单

`js引擎`维护一张symbol注册表,类似

```
description1:symbol1,
description2:symbol2
symbol3
symbol4
```
description值可以为空(如果为空的话，那么就不要再次引用这个symbol了)

js引擎要做的就是保证这个表中数值不重复即可
------------
但是还有一个问题

如果是读取iframe中的内容的时候，可就不一样了`因为这是两个js引擎`在工作，维护的是两个注册表

这样就可能导致冲突

symbol所以还提供了一个`scope`的概念，分为局部作用域和全局作用域

局部作用域就是由每个js引擎`单独`维护的注册表

全局作用域则是`多个js引擎共同维护的`注册表

# 方法

- Symbol()
- Symbol.for()
- Symbol.keyfor()

### Symbol([description])
全局静态方法

创建一个局部symbol并返回

description是可选的

### Symbol.for(description)
查找或创建symbol

运行流程

- 先在当前js引擎维护的注册表中查找
- 再到全局注册表中查找
- 上面两步，查找到就返回，找不到就创建一个新的symbol并返回


### Symbol.keyfor()

根据symbol查找与之对应的description




