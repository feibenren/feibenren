---
title: 依赖反转原则（Dependency inversion principle，DIP）
categories: 
- 设计模式
---

# base

依赖反转主要是解决`依赖性`的问题

如果a依赖b，b依赖c，....

会有这种依赖链条

```
a->b->c.....
```
如果a要运行正常，那么这条依赖链条上就不能出错，一个有问题，那么a就不正常

a和链条上的所有对象，都形成了`强耦合`

DSP提出的思想就是`依赖于抽象，不应该依赖于实体`


# 控制反转

换一种说法，也就是控制的反转，

a的功能的实现是受b控制的

a是受b控制的，

现在反转了

a依赖于抽象了，两者分离了，a控制了b

-------------- 

具体怎么实现呢

主要有两种方式

- 依赖注入
- 依赖查找


## 依赖注入

比如`小明用手机发微信`

```
let phone={
    open_wechat:function(){},
    open_browser:function(){}
};

let person:{
    wechat:function(){
        phone.open_wechat();
    }
}
```
依赖注入:

```
let person:{
    wechat:function(tool){
        tool.open_wechat();
    }
}
```

`person功能的实现，只需要注入依赖的对象`

`插件`就是典型的依赖注入的思想的产物

## 依赖查找

```

let person:{
    wechat:function(){
       //到指定的位置，指定的目录，进行查找对应的对象
       let tool=require('./tool.js');
       tool.open_wechat();
    }
}
```
可以看到，依赖查找就需要约定文件目录，或者其他能找到指定对象的方法

很多框架必须按照对应的文件名写，就是这个原因


