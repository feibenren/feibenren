---
title:shell
categories: 
- LINUX
---

# 交互界面

shell本质上就是一种用户和机器的交互界面，这里只说bash

# 基本流程

bash本质就是一个程序，工作流程类似于

1、用户输入`ls`

2、bash收到字符串`ls`，在`$PATH`指定的目录中查找对应的文件`ls`

3、如果找到，就`fork` && `execl`，(开辟一个子进程，然后子进程执行该程序)，将结果输出





# 内置命令

bash里面还内置了一些命令,比如`cd`，这些命令不用去查找`$PATH`，比如输入了`cd /`，则直接跳转到根目录，不用开辟子进程，性能更高

所以，bash的执行流程应该是先查找内置命令，没有的话再去找外部命令


查看内置命令

```
man bash-builtins
```

bash中的内置命令，就相当于内置的函数，使用内置命令好处有

1、运行快

2、提供基本的功能，即使`$PATH`没有任何可执行文件，也不会导致整个bash无法使用

linux系统提供了一个程序`which`，`locate a command`，如果如果有结果，说明这个命令是可执行文件，如果没有，那么就是内部命令了


# shell编程

shell支持脚本编程，简单说，可以将多条shell命令写到一个文件中，执行该文件，则相当于执行了那多条shell命令

示例:
```
#! /bin/bash
ls
pwd
```


`#! /bin/bash`这一行用于指定解析该文本文件的程序，这里使用`/bin/bash`程序,后续两行就使用该程序执行

`#!`有一个专有名词:shebang,类unix系统发现一个文件的第一行头两个字母是`#!`，会执行特定操作(也就是调用指定的程序，执行指定的代码)


可以看到，shell脚本是不需要编译器编译的，而是通过指定程序来解释执行，解释执行的脚本有很多，比如js，php

```
#! /bin/node 
console.log(111);
```
同样的道理，上面的代码会被指定的目录的node去执行

这一切都归功于 `#!`shebang


shell编程还支持很多功能，比如定义变量，流程语句，函数等



# link
- [https://zh.wikipedia.org/wiki/Shebang](https://zh.wikipedia.org/wiki/Shebang)
