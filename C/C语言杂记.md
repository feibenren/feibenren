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



# 字符串和字符数组
先说数组，数组就是一串连续的可用内存，重点是连续

数组可以存放int，double等数据类型

字符数组就是专门存放字符的数组，例如

```
#include <stdio.h>
int main() {
	char addr[] = {'a','b','c'};
	printf("%d\n", sizeof(addr));//3
	getchar();
	return 0;
}
```
这样的结果就是3,


字符串的定义就是一连串的字符，结尾使用\0结束，表示方式有很多

```
#include <stdio.h>
int main() {
	char techang[] = "eat";//不指定数组长度，后面直接赋值为字符串，系统会自动给数组添加\0
    char name[10]={'h'};//这种设置的方法，系统也会自动补齐剩余的都为0
    printf("%d\n", sizeof(techang));//4
    printf("%d\n", strlen(techang));//3 strlen不统计0
	getchar();
	return 0;
}
```
也可以手动添加结尾标志
```
char job[] = { 'c','o','d','e','\0' };
```
可以看到，一个字符串本质上就是一个字符数组，字符数组的名字是一个指向第一个元素的指针，那么这个指针就可以赋值给一个指针，如下，系统可以识别如此赋值方式
```
char * hobby = "music";
```







# 整数是如何存储的？

C中，整数通过补码来存储，使用补码，可以统一加法和减法


# 什么是32位系统，什么是64位系统

这需要从cpu的寄存器说起

register 分为很多种，这里直说地址寄存器，专门用来存放内存对应的地址的寄存器(内存每个bit都有一个唯一的编号)

1、cpu输入输出的数据，经过寄存器，再流入内存

内存可以做的很大，但是速度慢，寄存器就是两者之前的代理

寄存器存储的仅仅是内存的地址，需要的时候找到地址，再去复制内存地址中的数据到数据寄存器中，等待cpu使用



例如，register一次只能给cpu 1byte的数据，那么cpu一次只能处理1byte的数据

如果是2byte，那么处理能力就翻倍



地址寄存器存放数据的大小，叫做带宽，一般是32位或64位的，也就是说，一次可以存放32bit或64bit的内存地址

根据这个指标，cpu分为32位cpu和64位cpu，位数越多，寄存器能对应的地址越多，寄存器能够使用的内存也就越大

32bit的内存地址，最大也就4G，这就是为什么32位的cpu只能支持4G的内存的原因

2、操作系统也会跟着CPU走

试想CPU一次处理64bit数据，但是我的操作系统设计成一次只能处理8bit数据，那么CPU的效能就无法发挥

比如C中的int数据类型

在16位的操作系统中，使用2byte来表示

在32位系统中，使用4byte来标示

这样就会导致，int表示的范围大了很多，好处大大的


综上，32位系统，就是32位cpu+32位操作系统






# char类型的本质
char类型本质就是一个占用一个bit位的整数类型,一共存放	-128 到 127 或 0 到 255个数

为什么ascii一共有126个字符？不能更多呢？

就是因为char类型最多表示127个字符而已

所以，在c中，可以这样赋值

```
#include <stdio.h>
int main() {
	char name = 'a'; 
	name = 97;//表示ascii中97对应的符号，b
	printf("%c\n", name);
	getchar();
	return 0;
}
```


# 随机数

C语言中有两个函数，rand()和srand();函数来产生,这两个函数都在`<stdlib.h>`中

1、rand()函数，可以产生一个随机数

```
#include<stdio.h>
#include<stdlib.h>

void main()
{
	printf("%d\n", rand());
    printf("%d\n", rand());
    printf("%d\n", rand());
	getchar();
}
```
但是可以发现，每次运行的时候，rand()产生的随机数都一样,为什么？

rand()函数其实是根据一个seed来产生的，具体原理不说，只要这个seed一样，那么每次都会产生相同的数，这个数虽然是随机的，但是每一都一样，那这可就不能叫做随机了，不设置seed的话，默认值是1

如何修改seed？

使用srand()

```
#include<stdio.h>
#include<stdlib.h>
void main()
{	
	srand(7);//指定一个特定的整数，
	printf("%d\n", rand());
	getchar();
}
```

可以发现和上一次的一样，但是每次运行，这个数还是固定的

那么需要产生一个每次运行都不一样的整数，这个数可以使用时间戳

```
#include<stdio.h>
#include<stdlib.h>
#include<time.h>
void main()
{	
	srand((int)time(NULL));
	printf("%d\n", rand());
	getchar();
}
```
可以发现每次运行的时间都不一样


# 递归

递归就是下山和上山

原点就是山顶

终止条件就是山底



# 静态库(lib)和动态库(ddl)









