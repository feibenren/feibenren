---
title: 进程(process)
categories: 
- LINUX
---
# 进程

- [程序和进程](#程序和进程)
- [并发](#并发)
- [CPU&MMU](#CPU&MMU)
- [PUB](#PUB)
- [进程控制函数](#进程控制函数)

# 程序和进程

一个写好的程序程序，就是存储在硬盘上的一串o1串，相当于写好的`打孔纸片`

操作系统执行该程序，需要做给该程序分配内存，CPU，寄存器等资源，这个时候，可以将运行的程序叫做一个进程

进程是一个抽象的概念，没有实物与之对应，表示的是一种状态

经常使用剧本和舞台来比喻程序和进程的管理



# 并发

> 这里只说单核CPU

一个操作系统可以运行多个进程，这得益于CPU的高速度

1、同一时间内，CPU只能处理一个进程，但是CPU速度极快，往往是干1s，休息一年

2、早期的DOS系统真的只能同一时间运行一个进程，也就是，听歌的同时不能浏览网页，浏览网页的同时不能听歌

3、操作系统需要提供这样一种技术，就是CPU的`分时复用`,简单说，就是将cpu时间给切分成一个一个的时间段

4、第一个时间段给进程1，第二个时间段给进程2，由于CPU速度极快，这导致人的肉眼察觉似乎是两个进程同时运行


早期操作系统，可以根据是不是能将CPU分成一个个时间段，分为单道程序设计和多道程序设计

将CPU运行时间分片，需要硬件支持的，理论基础是`时间中断`






# CPU&MMU

CPU的结构很复杂，简单分为

- ALU:算罗单元，专门运算的单元
- 寄存器(register):从内存中存取数据，给ALU计算使用，因为内存速度不够快，ALU从这里面取数据去运算，算完后将结果再存到寄存器中,寄存器再将数据放到内存中
- MMU:内存管理单元（memory management  unit）
- 译码器：将二进制码转换成CPU指令

# PCB（process control block ）
进程控制块(PCB)，是操作系统载入程序去运行的时候，操作系统需要去控制该进程，所以在操作系统的保留内存中保留了该进程的相关信息

比如进程id，用户id，组id，虚拟空间地址，当前目录，进程状态(就绪，运行，挂起，终止)等信息


操作系统根据这些信息，去维护该进程，比如该进程需要的内存，可以到对应的虚拟内存空间去查找，程序终止可以回收资源



# 进程控制函数

- 创建：`fork()`
- 清除：`wait()`
- 执行：`execl函数族`

示例:

```
                
#include <stdio.h>
#include <unistd.h>

int main(){
        pid_t pid;

        pid=fork();//创建子进程
        //fork函数执行流程很复杂
        //1、代码执行到这一步的时候，会开辟一个新的进程，分配系统资源，这相当于一分为二了
        //2、开辟的子进程会继续执行后面的代码，前面的代码不再执行
        //3、对于子进程来说，pid是0，表示创建成功(如果是-1，表示进程创建失败)
        //4、对于父进程来说，pid是一个大于0的数，表示新创建的子进程的pid号
        //5、所以后续的代码需要通过pid来区分到底在哪个进程中执行，如果不区分，则所有进程都会执行
        
        if(pid ==0){
                //child
                execlp("date","date",NULL);//子进程会执行date命令
        }else if(pid ==-1){
                //error
                printf("fork fail");
                exit(-1);
        }else if(pid >0){
                //parent
                printf("parent process");
                sleep(1);
                wait(pid);//挂起1s后，子进程应该执行完毕，这个时候需要回收内核中的PCB，通过wait函数可以回收
        }
        return 0;
}
```


## 为什么要开子进程？

在操作系统中，谁得到的CPU时间越长，执行的效率就越高，但是操作系统是按照什么来分配CPU的？

PCB

也就是说，在linux中，一个pcb表示一个进程，不管你是process or thread


这是fork进程的一个重要原因，fork的越多，占有CPU的时间越长




# IPC
INTER PROCESS COMMUNICATION,进程间通信

父进程fork了一个子进程，可以理解为重新复制了一份父进程，只不过pid不同而已

但是还共享了一些东西

- 1、文件描述符
- 2、mmap建立的映射区



但是父子进程之间如果通信？

只能通过共享的东西来通信，比如文件描述符

方式很多，主流有

- pipe
- fifo
- mmap
- 信号


```
 int pipe(int pipefd[2]);		成功：0；失败：-1，设置errno
```
pipe，管道，实现最简单

通过上面的函数，可以得到两个pipe文件句柄

pipe的本质是

- 1、linux系统中的一种伪文件
- 2、由两个文件描述符组成，一个表示read，一个表示write
- 3、得到read的文件的read描述符，可以向pipe文件中写数据，write相反
- 4、可以看到，pipe是半双工的

子进程和父进程可以可以通过pipe的两端，实现两者的通信，但是还是只能实现一个发送消息，一个接收消息

如果想要实现发送消息和接收消息都可以的话，那么就需要建立两个pipe了

但是也是最简答的也是很麻烦


通过信号来传递信息，易于理解













