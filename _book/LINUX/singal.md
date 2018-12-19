---
title: singal 
categories: 
- LINUX
---

# singal

信号自古就有，烽火台，信号枪等，使用简单方便

unix系统也提供了信号机制

构成一个信号有四个要素,编号+名称+事件+默认处理动作

操作系统收到一个信号后，会去进行默认的处理动作

# 分类

信号有很多种，主要
```
Signal     	Value     Action   Comment
────────────────────────────────────────────
SIGHUP     	 1       Term    Hangup detected on controlling terminal or death of controlling process
SIGINT       2       Term    Interrupt from keyboard
SIGQUIT      3       Core    Quit from keyboard
SIGILL       4       Core    Illegal Instruction
SIGFPE       8       Core    Floating point exception
SIGKILL      9       Term    Kill signal
SIGSEGV    	 11      Core    Invalid memory reference
SIGPIPE  	 13      Term    Broken pipe: write to pipe with no readers
SIGALRM   	 14      Term    Timer signal from alarm(2)
SIGTERM    	 15      Term    Termination signal
SIGUSR1   30,10,16    Term    User-defined signal 1
SIGUSR2   31,12,17    Term    User-defined signal 2
SIGCHLD   20,17,18    Ign     Child stopped or terminated
SIGCONT   19,18,25    Cont    Continue if stopped
SIGSTOP   17,19,23    Stop    Stop process
SIGTSTP   18,20,24    Stop    Stop typed at terminal
SIGTTIN   21,21,26    Stop    Terminal input for background process
SIGTTOU   22,22,27   Stop    Terminal output for background process

The signals SIGKILL and SIGSTOP cannot be caught, blocked, or ignored.   	

```



- 1) SIGHUP: 当用户退出shell时，由该shell启动的所有进程将收到这个信号，默认动作为终止进程
- 2) SIGINT：当用户按下了<Ctrl+C>组合键时，用户终端向正在运行中的由该终端启动的程序发出此信号。默认动
作为终止进程。
- 3) SIGQUIT：当用户按下<ctrl+\>组合键时产生该信号，用户终端向正在运行中的由该终端启动的程序发出些信
号。默认动作为终止进程。
- 4) SIGILL：CPU检测到某进程执行了非法指令。默认动作为终止进程并产生core文件
- 5) SIGTRAP：该信号由断点指令或其他 trap指令产生。默认动作为终止里程 并产生core文件。
- 6) SIGABRT: 调用abort函数时产生该信号。默认动作为终止进程并产生core文件。
- 7) SIGBUS：非法访问内存地址，包括内存对齐出错，默认动作为终止进程并产生core文件。
- 8) SIGFPE：在发生致命的运算错误时发出。不仅包括浮点运算错误，还包括溢出及除数为0等所有的算法错误。默认动作为终止进程并产生core文件。
- 9) SIGKILL：无条件终止进程。本信号不能被忽略，处理和阻塞。默认动作为终止进程。它向系统管理员提供了可以杀死任何进程的方法。
- 10) SIGUSE1：用户定义 的信号。即程序员可以在程序中定义并使用该信号。默认动作为终止进程。
- 11) SIGSEGV：指示进程进行了无效内存访问。默认动作为终止进程并产生core文件。
- 12) SIGUSR2：另外一个用户自定义信号，程序员可以在程序中定义并使用该信号。默认动作为终止进程。
- 13) SIGPIPE：Broken pipe向一个没有读端的管道写数据。默认动作为终止进程。
- 14) SIGALRM: 定时器超时，超时的时间 由系统调用alarm设置。默认动作为终止进程。
- 15) SIGTERM：程序结束信号，与SIGKILL不同的是，该信号可以被阻塞和终止。通常用来要示程序正常退出。执行shell命令Kill时，缺省产生这个信号。默认动作为终止进程。
- 16) SIGSTKFLT：Linux早期版本出现的信号，现仍保留向后兼容。默认动作为终止进程。
- 17) SIGCHLD：子进程结束时，父进程会收到这个信号。默认动作为忽略这个信号。
- 18) SIGCONT：如果进程已停止，则使其继续运行。默认动作为继续/忽略。
- 19) SIGSTOP：停止进程的执行。信号不能被忽略，处理和阻塞。默认动作为暂停进程。
- 20) SIGTSTP：停止终端交互进程的运行。按下<ctrl+z>组合键时发出这个信号。默认动作为暂停进程。
- 21) SIGTTIN：后台进程读终端控制台。默认动作为暂停进程。
- 22) SIGTTOU: 该信号类似于SIGTTIN，在后台进程要向终端输出数据时发生。默认动作为暂停进程。
- 23) SIGURG：套接字上有紧急数据时，向当前正在运行的进程发出些信号，报告有紧急数据到达。如网络带外数据到达，默认动作为忽略该信号。
- 24) SIGXCPU：进程执行时间超过了分配给该进程的CPU时间 ，系统产生该信号并发送给该进程。默认动作为终止进程。
- 25) SIGXFSZ：超过文件的最大长度设置。默认动作为终止进程。
- 26) SIGVTALRM：虚拟时钟超时时产生该信号。类似于SIGALRM，但是该信号只计算该进程占用CPU的使用时间。默认动作为终止进程。
- 27) SGIPROF：类似于SIGVTALRM，它不公包括该进程占用CPU时间还包括执行系统调用时间。默认动作为终止进程。
- 28) SIGWINCH：窗口变化大小时发出。默认动作为忽略该信号。
- 29) SIGIO：此信号向进程指示发出了一个异步IO事件。默认动作为忽略。
- 30) SIGPWR：关机。默认动作为终止进程。
- 31) SIGSYS：无效的系统调用。默认动作为终止进程并产生core文件。
- 34) SIGRTMIN ～ (64) SIGRTMAX：LINUX的实时信号，它们没有固定的含义（可以由用户自定义）。所有的实时信号的默认动作都为终止进程。


# 发送信号

在linux中，发送信号有好多种方式


1. 按键产生，如：Ctrl+c、Ctrl+z、Ctrl+\
2. 系统调用产生，如：kill、raise、abort
3. 软件条件产生，如：定时器alarm
4. 硬件异常产生，如：非法访问内存(段错误)、除0(浮点数例外)、内存对齐出错(总线错误)
5. 命令产生，如：kill命令

命令kill，本质其实就是向指定的process发送信号，默认的是发送 15号信号:SIGTERM,而这个信号默认动作是终止信号

所以可以杀死process

但是process可以设定忽略15号信号，可能杀不死进程，

可以使用`kill -9 xxx`发送9号信号，因为9号信号不允许进程忽略，所以一定可以杀死进程

在C程序中，可以调用`kill()`，`alarm()`来发送信号



# 处理信号

1. 执行默认动作 
2. 忽略(丢弃) 
3. 捕捉(调用户处理函数)

在进程中，可以设置pcb中的关于信号的两个结构体来达到忽略信号的目的

但是捕捉信号的话，需要自行设定处理函数

# 捕捉

linux提供了很多种方式来捕捉信号，这里只说最简单的

```
void handler(){
    printf("i got a singal");
}

int main(){
    singal(9,handler);//绑定9号信号,处理函数是绑定的函数
    while(1);//死循环，不让程序退出
}

```














