---
title: C语言杂记
categories: 
- C
---

# 在线c环境
[https://studio.dev.tencent.com](https://studio.dev.tencent.com)

# 指针

```
int main(){
    int a=1;
    print("&a:%p",&a);//&,获得a变量的内存地址，也就是指针
    print("*&a:%p",*&a);//*&,获得内存地址中存储的数值，和直接打印a效果一样
    return 0;
}
```

# 单引号，双引号的不同
单引号和双引号在C语言中不一样，不能混用

单引号用来标识单个字符，双引号标识字符串



# const  #define 

`#define` 是宏定义，它不能定义常量，但宏定义可以实现在字面意义上和其它定义常量相同的功能，本质的区别就在于 #define 不为宏名分配内存，而 const 也不为常量分配内存，怎么回事呢，其实 const 并不是去定义一个常量，而是去改变一个变量的存储类，把该变量所占的内存变为只读！

# 存储类

auto 
register
static
extern


# 变量，地址，指针

变量：存储数值的容器
地址：变量的地址(变量在内存中的存储地址)
指针: 存储地址的容器
