---
title: README
categories: 
- 软件设计
---

- [思想](#思想)
- [编程方式](#编程方式)
- [模式](#模式)
- [MVC](#MVC)
- [总结](#总结)


# base

怎么写代码?

也简单，想怎么写就怎么写，`实现自己的想法才是最终目的`，写代码仅仅是实现自己的想法

这个和`写文章`一样，表达自己的`thought`才是最终目的

但是每个人能力不同，水平也就有高低

经过前人总结，总结出了一些`写代码的RULES`

比如UNIX作者总结了了一些自己在写操作系统时候的`RULES`

- Build modular programs (程序应该模块化)
- Write readable programs (写可读的程序)
- Use composition
- Separate mechanisms from policy
- Write simple programs(程序应该简单)
- Write small programs(程序应该小巧)
- Write transparent programs(程序应该透明)
- Write robust programs
- Make data complicated when required, not the program(应该是数据复杂，不要让程序复杂)
- Build on potential users' expected knowledge
- Avoid unnecessary output 
- Write programs which fail in a way easy to diagnose
- Value developer time over machine time
- Write abstract programs that generate code instead of writing code by hand
- Prototype software before polishing it
- Write flexible and open programs
- Make the program and protocols extensible.

还有很多人，针对不同的领域，总结出了自己的一些`RULES`

虽然rules很多，但是其中包含的`思想`却就是那么几个

# 思想

常见的设计思想，有

### Don’t Repeat Yourself (DRY)

不要重复自己

能写一次就只写一次

### Keep It Simple, Stupid (KISS)

简单点，傻逼

### You Ain’t Gonna Need It (YAGNI)

只实现目前需要的功能，在以后您需要更多功能时，可以再进行添加。

如无必要，勿增复杂性。

软件开发先是一场沟通博弈。

### S.O.L.I.D 

面向对象五大法则

### Hollywood Principle 
好莱坞法则

我找你，你别找我

### High Cohesion & Low/Loose coupling 

高内聚， 低耦合

- 内聚：一个模块内各个元素彼此结合的紧密程度
- 耦合：一个软件结构内不同模块之间互连程度的度量

内聚意味着重用和独立，耦合意味着多米诺效应牵一发动全身。

这种思想是UNIX的设计思想之一

### Law of Demeter – 迪米特法则

迪米特法则(Law of Demeter)，又称“最少知识原则”（Principle of Least Knowledge）

一个对象应当对其他对象有尽可能少的了解,`不和陌生人说话`，这个思想是基于OO的

简单说，一个对象不应该老是去调用其他对象的方法，虽然方便，但是增加了耦合

我调用了其他对象的方法，那么我就得去了解调用对象的方法，`成本增大`

再比如:

```
let res=obj.fn1().fn2().fn3().fn4();
```
我想要调用一个函数，得必须了解三个函数才可以

很显然，这个`调用的成本太高了`

自己理解，这种思想是`高内聚，低耦合`思想的一个衍生，基本思想就是，`使用某个功能的时候，应该让使用成本降到最低`，这里的成本就是去了解`如何使用某个功能`

这种思想在解耦合的时候能用到


### Convention over Configuration（CoC）

惯例优于配置原则

简单说就是将公认的配置方式当作默认值

如果所有的配置都需要用户手动设置，会
- 程序效率不高
- 用户配置成本很高




### Separation of Concerns (SoC)- 关注点分离

这种思想的意思是如果一个问题比较复杂，那么我们关注的东西就很多

但是如果将这个问题给分解成几个简单的小问题，那么就会很好解决

比如CPU，如果要求计算和图像渲染功能集中在一起，会导致CPU很复杂

但是如果CPU就只做计算，将图像渲染的功能单独交给显卡来做，两者做起来都很简单


也是`高内聚，低耦合`的思想的衍生

### Design by Contract (DbC)
契约式设计

### Acyclic Dependencies Principle (ADP) -无环依赖原则

包之间的依赖结构图不能是环形的，比如a依赖b，b依赖c，c依赖a



----------------------

等等思想，都蕴含在从物理内存到代码结构等方方面面，甚至衍生到现实生活中，这些思想可能都有用

> 还有一点，这些思想的提出，是为了解决某些问题的，如果没有问题，提出某些思想等于白扯

个人觉得，以上这些思想中，最最最重要的，就是`KISS`

从这个思想出发，衍生出`高内聚，低耦合`等

`高内聚，低耦合`思想又衍生出`专注分离点`等思想


> 这些思想，也会被称为`原则`，也就是说，人们已经认同了这些思想，将其作为基础，就像`物理学中的定理`

# 编程方式

说了那么多思想，总归是要用到代码中的

C之前，都是汇编语言，写的代码中大量含有goto语句，导致很难理解，需要简化

C语言中就改进了很多:

比如函数，就是`DRY`,`高内聚，低耦合`，`KISS`等思想都有体现

执行顺序限制为顺序、分支和循环这三种,大大降低了程序自由度，使得复杂度大大降低，体现了`KISS`思想

这就是`面向过程`的编程方式



------------------------------

虽然结构化解决了程序控制流的复杂问题，但程序里面不仅包括控制结构，还包括要处理的数据。随着处理数据的增加，程序的复杂性也会上升。这时候，面向对象编程来了！

面向对象编程注重的是：
- 数据和其行为的打包封装
- 程序的接口和实现的解耦

也就是说，在面向过程中,`数据是数据，处理是处理`

在面向对象中`两者合二为一`

示例:

```
int dog;
int fish;
function swim(){}
```
面向过程的话，dog和cat都可以swim()
```
class Fish{
    function swim(){

    }
}
```
面向对象，只能fish才能swim


同时，应该保持`DRY`的原则，这就是类出现的原因，继承也是这种思想的产物

-------------

总的来说，`OO编程方式`的产生，原因就是`软件开发复杂度升高`



> 面向过程，面向对象仅仅是一种`编写代码的方式`，没有好不好，对不对之说

----------------

`OO编程方式`的影响很大，甚至是高级的编程语言都将这当作了`基础思想`,比如JAVA,PHP等

由于`OO编程方式`相对于之前的面向过程，更加容易编写复杂软件，得到发展

同时又基于`OO编程方式`,又衍生出了各种`新思想`

大家公认后的思想，又变成了`新原则`

最著名的`SOLID`成为了面向对象的五大基本原则

- S:Single Responsibility Principle (SRP) – 职责单一原则
- O:Open/Closed Principle (OCP) – 开闭原则
- L:Liskov substitution principle (LSP) – 里氏代换原则
- I:Interface Segregation Principle (ISP) – 接口隔离原则
- D:Dependency Inversion Principle (DIP) – 依赖倒置原则

### SRP(Single Responsibility Principle) – 职责单一原则
一个类，只做一件事，并把这件事做好
### OCP(Open/Closed Principle)– 开闭原则
对扩展是开放的，而对修改是封闭的。
### LSP(Liskov substitution principle)– 里氏代换原则

### ISP(Interface Segregation Principle )-接口隔离原则

### DIP(Dependency Inversion Principle)– 依赖倒置原则

-------------
虽然solid原则是基于OO的，但是其中的基本思想，具有普遍性，其他编程方式同样有借鉴意义

-------------

OO是现在的`主流编程方式`，好处很多，不需要知道那些为什么要这么组织代码，直接使用即可，因为只要按照OOP写，就可以非常简单的`实现先贤的思想`


但是也有问题，就是导致`代码结构复杂`


## 模式(pattern)

以上所有的东西，说的都是`思想`,`原则`

但是具体怎么做，没说

后来有人写了本书专门介绍一些`常见问题对应的代码应该怎么写最好`

这就是GoF的23个经典的设计模式

简单说，所谓的`遇到什么情况该处什么招式最好`

相当于`棋谱`，介绍怎么摆兵布阵，怎么收拾残局

这23的设计模式，书中是用C++写的，也就是基于OO思想的

但是不是说这些思想面向编程就不能用，比如单例模式

这种模式就是为了要解决`创建多个对象会没有意义的消耗系统资源`这个问题

```

function createPerson(){
    if(this.isCreated){
        return this.person;
    }else{
        this.person={
            name:111,
            age:222
        };
        return this.person;
    }
}
```
使用面向过程依然可以解决这个问题，体现这种思想


> 不是说所有的模式就是这23个，还有很多，针对不用领域就可以提出自己的设计模式，只不过这23个是经典的，基础的

# MVC

MVC是一种`架构模式`，是`Separation of Concerns(分离点的关注)`思想的体现

但是MVC的概念出现的时间非常早，GoF写的时候已经出来了

GoF认为MVC是观察者模式(Observer)(Pub/Sub), 策略模式(Strategy)和组合模式(Composite)
的一种组合演变

最初提出MVC的目的是为了把数据（Model）和视图（View）分离开来，然后用控制器（Controller）作胶水来粘合M和V之间的关系

---------------

MVC体现的思想是更高维度考虑的问题(`专注点是架构`)，是大智慧-(架构模式)

23种设计模式是底层的，基础的考虑问题(`专注点是代码`)，是小技巧-(设计模式)

小技巧组合起来可以成为大智慧



---------------------------------


同样，针对GUI领域时，发现MVC不足以满足需求，就提出了一些新的架构模式

比如MPV，MVVM等`架构模式`


# 总结

->解决问题->总结问题->归纳`套路`->形成`思想`

真实情况可能和上面的流程一样

具体是不是按照这个流程走的不重要，重要的是现在积累下来的哪些思想和套路

所有的一切的源头是`遇到问题`



# links
- [https://coolshell.cn/articles/4535.html](https://coolshell.cn/articles/4535.html)
- [https://coolshell.cn/articles/1007.html](https://coolshell.cn/articles/1007.html)
- [https://en.wikipedia.org/wiki/Unix_philosophy](https://en.wikipedia.org/wiki/Unix_philosophy)
- [http://www.nowamagic.net/librarys/veda/detail/2455](http://www.nowamagic.net/librarys/veda/detail/2455)
- [https://www.cnblogs.com/aaronjs/p/3581904.html](https://www.cnblogs.com/aaronjs/p/3581904.html)
- [https://www.cnblogs.com/aaronjs/p/3581904.html](https://www.cnblogs.com/aaronjs/p/3581904.html)