---
title: gcc
categories: 
- LINUX
---
# gcc
gcc是GUN项目中的一个开源的的C编译器

# C编译的过程

C源码到可执行文件，大致需要经过这几步

1、预编译

2、编译成汇编语言

3、将汇编语言编译成01字节码

4、将01字节码链接系统库，因为C语言需要底层的支持，比如`printf()`，如果没有`stdout`的支持，那么就无法输出到屏幕上

# gcc对应的步骤

- 预编译（pre-compile）:`gcc -E`，生成.i文件
- 编译(compile):`gcc -S`，生成.s文件
- 汇编(assemble):`gcc -c`,生成.o文件
- 链接(link)

