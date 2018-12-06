---
title: BASE
categories: 
- C
---

# 在线c环境
[https://studio.dev.tencent.com](https://studio.dev.tencent.com)

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

假设一个int类型的数据，我们可以给这个数分配100位，可以计算足够大的数，但是不够经济

- 基本类型
    - int：4字节
    - char：1字节
    - float：4字节
    - double：8字节
- 复合类型
    - struct
    - union
- 指针类型:32位系统4位，64位系统8位



----------
