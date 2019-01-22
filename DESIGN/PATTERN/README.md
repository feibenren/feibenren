---
title: README
categories: 
- 设计模式
---

> 数据结构，算法，设计模式这些被奉为程序员必修的三门内功

# base

刚开始没有设计模式一说

有一个建筑师，写了一本《设计模式》，介绍建筑领域的一些`套路`

后来这些思想被引入了软件领域

有四个人(四人帮,gang of four )写了一本书,系统介绍了23中设计模式


-----------------

### 设计模式要解决什么问题

很简单，软件开发过程中的各种问题，比如，扩展，测试等等，这些都是成熟的`套路`

### 目标是什么？

- 中意于组合而不是继承
- 依赖于接口而不是实现
- 高内聚，低耦合。

### 局限性

23个设计模式现在都是用OO(面向对象)的方式来实现的，但是

`设计模式是套路，和OO没有一点关系，只不过用OO表示比较方便而已`




### 具体内容是什么？

没有具体内容，就是一种模式，简单说就是遇到什么情况该用什么`套路`

总的来说，可以分为2大类

- 1、怎么创建对象?

- 2、对象和对象之间应该怎么通信?

#### 怎么创建对象?

这是一个很复杂的问题？

比如，

创建一个好，还是创建多个好？

如果有100个类，怎么才能方便的创建这些实例？




#### 对象和对象之间应该怎么通信?

一个对象操作了一个方法，怎么才能通知其他对象？

假如通知的对象有100个，该怎么通知？


### 原则

这里一共有6个原则:

- 开闭原则（Open Close Principle）
- 里氏代换原则（Liskov Substitution Principle）
- 依赖倒转原则（Dependence Inversion Principle）
- 接口隔离原则（Interface Segregation Principle）
- 迪米特法则，又称最少知道原则（Demeter Principle）
- 合成复用原则（Composite Reuse Principle）

#### 开闭原则

对扩展开放，对修改关闭

也就是，扩展功能的时候，不能修改原来代码，只能拓展新代码

这样才能保证维护和升级


#### 里氏代换原则


#### 依赖倒转原则


#### 接口隔离原则

使用多个隔离的接口比单个接口要好，目的就是为了降低耦合

#### 迪米特法则(最少知道原则)

一个实体应该和其他实体关系越少越好，保持自己相对独立，典型的`高内聚`思想

#### 合成复用原则

多用合成/聚合，而不是上来就使用继承，因为`继承是最强的耦合`，没了爹，自己就不存在

---------------------

总的来说，就是就一个目的,`高内聚，低耦合`


# 设计模式

- 1[工厂模式(Factory Pattern)](#Factory)
- 2[抽象工厂(Abstract Factory Pattern)](#AbstractFactory)
- 3[单例模式(Single Pattern)](#Single)
- 4[建造者模式(Builder Pattern)](#Builder)
- 5[原型模式(Prototype Pattern)](#Prototype)
- 6[适配器模式(Adapter Pattern)](#Adapter)
- 7[工厂模式](#工厂模式)
- 8[工厂模式](#工厂模式)
- 9[工厂模式](#工厂模式)
- 10[工厂模式](#工厂模式)
- 11[工厂模式](#工厂模式)
- 12[工厂模式](#工厂模式)
- 13[工厂模式](#工厂模式)
- 14[工厂模式](#工厂模式)
- 15[工厂模式](#工厂模式)
- 16[工厂模式](#工厂模式)
- 17[工厂模式](#工厂模式)
- 18[工厂模式](#工厂模式)
- 19[工厂模式](#工厂模式)
- 20[工厂模式](#工厂模式)
- 21[工厂模式](#工厂模式)
- 22[工厂模式](#工厂模式)
- 23[工厂模式](#工厂模式)




# links
- [https://www.cnblogs.com/pony1223/p/7608955.html](https://www.cnblogs.com/pony1223/p/7608955.html)
- [http://www.runoob.com/design-pattern/design-pattern-intro.html](http://www.runoob.com/design-pattern/design-pattern-intro.html)
-[https://coolshell.cn/articles/8745.html](https://coolshell.cn/articles/8745.html)
-[https://coolshell.cn/articles/8961.html](https://coolshell.cn/articles/8961.html)
-[]()
-[]()
-[]()
-[]()