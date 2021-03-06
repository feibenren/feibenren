---
title: BASE
categories: 
- C
---

# 在线c环境
[https://studio.dev.tencent.com](https://studio.dev.tencent.com)

# 起源
C在basic语言的基础上衍生而来，最初主要的用途是用来写unix操作系统的，所以C和操作系统结合紧密

# hello world

```
#include <stdio.h>
int main() {
	printf("hello world");
	return 0;
}
```
- `#include <stdio.h>`引入头文件
- `int main()`主函数,整个项目中只有一个主函数
- `printf("hello world");`打印字符串,printf函数在`<stdio.h>`,不引入头文件，无法使用该函数
- `return 0;`函数返回值，对应主函数返回值类型



# 编译过程
### 1、预编译（ Preprocess）

```
gcc -E test.c -o test.i
```

- 宏定义展开
- 头文件展开
- 条件编译
- 删除注释
- 不检查语法

### 2、编译（compile）
```
gcc -S
```
- 检查语法
- 转成汇编语言

### 3、汇编（ assemble）
```
gcc -C
```
- 汇编语言转成目标文件(二进制文件)


### 4、链接（link）
- 链接各种依赖库



# 数据类型
变量为什么要分类型？

**内存管理的需要**

假设一个int类型的数据，我们可以给这个数分配100位，可以计算足够大的数，但是不够经济，基于此原因，C语言针对实际情况将变量分为各种数据类型，每种数据类型都占用一定字节的空间

- 基本类型
    - void
    - int：4字节
    - char：1字节
    - float：4字节
    - double：8字节
- 复合类型
    - struct
    - union
- 指针类型:32位系统4字节，64位系统8字节

----------

# 内存四区
内存空间很大，数据和程序都是放到内存中的，一般分为四个区域，

- 代码区:存放代码
- 静态区:存放全局变量和静态变量，常量
- 栈区:局部变量，函数形参
- 堆区:可供程序使用的内存

## 栈区
栈区是有顺序的，先入先出，堆区没有顺序，主要保存局部变量，形参，等，但是空间有限，只有1M左右

数据是由编译器来管理的，不用人工管理

所以，如果变量都是通过局部变量来申明的话，那么空间是有限的，无法做大，唯一的方法就是使用堆区

## 堆区
堆区可以说是可用的内存空间，很大，取决于机器剩余可用内存，没有使用限制，但是需要人工管理

后期使用到的几乎所有的数据都是放到堆区中的





# 指针
C语言中绝大部分都是在操作内存，操作内存必须使用指针，所以指针是C的核心


内存是是有编号的，C中使用指针存放内存编号

只要指针移动，指针对应的内存数据就不同，这就导致指针比直接操作数值更加灵活,也更加抽象，更难

```
int a=1;
int *p=&a;
printf("%d\n",*p);
```
&表示取得对应变量的地址
*表示取得指针对应的数值




## 指针分类
指针本身只是存放内存地址，大小是固定的，也许认为没有必要进行分类，比如都定义为int类型

但是

```
char name='a';

int* p=&name;//将一个存储char类型的数据的地址赋给指针，这一步没有问题

printf("%c",*p);//但是到这个地方就有问题了，p如果是int类型的指针，那么就应该取4bit的数据，将这里面的数据当作整数看待，但实际上本意是存储字符，只需要1bit,这就不对了

//也就是说，指针分类型，不是为了存储使用的，而是为了指针取值的时候，知道到底该取多少bit用的

```
这里就涉及到一个概念

### 指针步长

char  类型的指针的步长就是1bit
int  类型的指针的步长就是4bit


### 空指针

一个指向NULL的指针叫做空指针

NULL是什么？

```
#define NULL ((void *)0)
```
看定义可以看到这是一个void类型的指针，这个指针的具体数值是0，也就是指向内存编号为0 的指针

也就是说，空指针表示指向内存编号为0的指针

有什么用？

一般是防止野指针的产生，野指针的出现绝大多数意味着可能出错，所以将指针归零

### 野指针

```
int* p=123456;
```
野指针就是指针指向的地址是未知的

如上，编号123456的这个内存存放的东西是什么我不知道，虽然语法上没有问题，但是没有什么实际意义

### 万能指针

```
char* name=123456;

int* age=456789;


name=age;//类型不同的指针是不能够赋值的，虽然都是32/64bit长度，但是指针步长不同，导致后期*操作错误

void* wanneng;

wanneng=name;//万能指针可以接收随便的指针

printf("%c",(char*)wanneng);//但是在使用的时候需要转换成对应的类型，否则也是没法确定步长

```

万能指针，也叫做 无类型指针



### 多级指针

C 中可以使用多级指针

```
char name='a';
char *p=&a;
char **pp=p;

printf("%p",pp);//pp指针自己的地址
printf("%p",*pp);//p指针存储的内容，也就是name的地址
printf("%p",**pp);//name的数值


```
C中大量使用多级指针，但是一般最多就两级指针，因为两级指针就可以实现调用参数来修改数据了


# 指针和数组

```
int arr[]={1,2,3};

int* p=&arr;

printf("%p\n",arr);
printf("%p\n",p);
printf("%p\n",&arr[0]);
```
这三个地址相同

由此可以推出

数组的本质就是

1、开辟一段连续的内存

2、给这段内存取一个变量名称`arr`

3、将第一个数据项的地址赋值给`arr`

但是这些数据都是放到栈区的

知道数组的本质，那么如何在堆区中模拟使用数组呢？


```
#include<stdio.h>

void main()
{	
	int * arr = malloc(sizeof(int) * 3);//堆区开辟3个int空间

	*(arr + 0) = 4;//给第一个int空间赋值为4
	*(arr + 1) = 5;
	*(arr + 2) = 6;

	for (size_t i = 0; i < 3; i++)
	{
		printf("%d\n", *(arr + i));
	}

    free(arr);//释放堆空间
	
	getchar();
}

```

也可以使用数组的方式进行操作

```

#include<stdio.h>
#include<stdlib.h>
#include<time.h>


void main()
{	
	int * arr = malloc(sizeof(int) * 3);

	arr[0] = 4;
	arr[1] = 5;
	arr[2] = 6;

	for (size_t i = 0; i < 3; i++)
	{
		printf("%d\n", arr[i]);
	}
	free(arr);
	
	getchar();
}


```
可以观察
```
arr[1] = 4;

*(arr+sizeof(char))=4;
```
这两种写法，本质是一样的

可以得出结论

[]本质上就是*操作，是C提供的一种语法糖


由于栈区空间有限，所以，大部分的数组，都应该使用这种模拟方式，放到堆区中


#指针和字符串

字符串本质上就是一种特殊的数组，所以和数组很相似

但是使用上还是有些别扭


比如函数参数，在其他语言中，可能使用string这种类型

比如

```
voin test(string name){}
```
但是在C中，则需要使用指针来传递字符串

```
voin test(char* name){}
```

也就是说，在C中，字符串，数组都是传地址的，可以修改原来的数据

```
#include<stdio.h>
#include<stdlib.h>
#include<time.h>

void test(char * name) {

	name[3] = 't';
	printf("%s", name);
}

void main()
{	
	char name[] = "hello";

	test(name);
	
	printf("%s", name);
	getchar();
}
```


# 作用域

## 局部作用域

C中的调用函数，调用时开辟栈区，调用完成后，销毁栈区

在传值调用的时候，这就导致被调用函数无法修改调用函数内部的数据，除非传地址

但是可以通过 关键词，来打破这种约束

static

```
#include<stdio.h>
#include<stdlib.h>
#include<time.h>

int test() {

	static int num = 0;//添加了static后，这句话只会声明一次，不加static的话，调用几次，就会初始化几次
	num++;

	return num;
	
}

void main()
{	
	int res = 0;

	test();

	test();

	res=test();
	
	printf("%d", res);
	getchar();
}

```




