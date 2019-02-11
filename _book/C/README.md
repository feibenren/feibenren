---
title: BASE
categories: 
- C
---

- [在线环境](#在线环境)
- [起源](#起源)
- [hello world](#hello world)


# 在线c环境
[https://studio.dev.tencent.com](https://studio.dev.tencent.com)


# 语言

任何语言，本质上只有一个目的:`操作计算机`

操作系统对硬件的抽象，为我们提供了对外接口，用来操作计算机

那么任何语言本质上就是在这些接口上的一次次的封装

但是还有一些东西无法通过封装来满足需求，语言便是为了满足这种需求而生

无法满足的内容本质上就是逻辑



# 起源

C在basic语言的基础上衍生而来

最初主要的用途是用来写unix操作系统的

所以C和操作系统结合紧密


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

编译执行后，会在屏幕上输出`hello world`

想要明白执行细节，还需更多

- [基本规则](/C/基本规则.html)
- [内存四区](/C/内存四区.html)
- [编译](/C/编译.html)
- [变量](/C/变量.html)
- [指针](/C/指针.html)
