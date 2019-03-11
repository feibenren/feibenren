---
title: Object
categories:
- JAVASCRIPT
---

# 对象

在js中，对象是一种数据类型，表示的是一个`无序键值对的集合`

一个键值对由三部分组成`key`，`value`，`属性描述符`组成

# 属性描述符

属性描述符是用来设置这个键值对的某些特定功能

由6部分组成

- value
- writable
- enumberable
- configurable
- set
- get


### value
属性值
### writable
属性的可写性
### enumberable
属性的可遍历性
### configurable
对象描述符的可配置性
### set/get
设置属性的`accessor`

--------------------

ecmascript提供的关于对象的，就是围绕着`这三部分`展开的


针对这种数据结构的要求，语法中提供了`Object`这个内置的API来满足以上的需求

注意，这里有两个概念

对象:是一种数据结构

Object:是js语法提供的针对这种数据结构，来进行管理的一个API而已

# Object 方法

Object提供了很多管理对象的方法

- Object.assign()
- Object.create()
- Object.defineProperty()
- Object.defineProperties()
- Object.entries()
- Object.getOwnPropertyDescriptor()
- Object.preventExtensions()
- Object.isExtensiable()
- Object.seal()
- Object.isSeal()
- Object.freeze()
- Object.isFrozen()

# Object.prototype

Object有一个特殊的属性，就是prototype属性，这个属性表示的是Object对象的原型

这里的原因，可以理解为`父母`，`上一代`

原型拥有的东西自己是可以`继承`的

- Object.prototype.valueOf()
- Object.prototype.toString()
- Object.prototype.hasOwnProperty()
- Object.prototype.isPrototypeof()
- Object.prototype.propertyIsEnumberable()


# 对象的操作

对象仅仅是包裹键值对的盒子，对象的操作，主要是针对键值对的操作

- 创建
- 拷贝
- 修改
- 删除
- 查找/遍历

# 创建对象

- `new Object([value])`:
- {nameValuePair1,nameValuePair1}:
-  `Object.create(proto, [propertiesObject])`

`new Object()`这种方式和字面量的写法是一样的，形式不同而已

`new Object()`这种用法多用在将一个不确定的数值类型转换成一个对象

`Object.create(proto)`这个方法的参数proto是不能省略的，所以也多用在了继承

---------------

而关于对象描述符来说

只有`Object.create()`这个方法才完整，所以推荐使用这个方法创建对象

字面量只支持`accessor`的使用，其他对象操作符的属性无法操作

> 这三种方法，如果不设置对象描述符的话，默认是`undefined`

---------------

而关于继承链来说

`new Object()`和键值对这两种方法创建的对象都有proto

在js中，想要创建没有proto的方法只有一种`Object.create(null)`;


# 删除对象

对象本身无法删除，只能靠垃圾回收机制

对象属性可以通过`delete`关键字来删除

# 修改对象

修改本身也没什么意义

这里说修改对象的键值对





# 查找/遍历


# 对象描述符


