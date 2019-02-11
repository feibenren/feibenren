---
title: 线程(thread) 
categories: 
- LINUX
---
# thread

linux早期没有线程的概念，只有进程

后期由于其他系统有线程机制，linux才使用进程实现了线程

这导致在linux中，线程是`light weight process`

创建process，相当于拷贝了一份parent process ，相互之间不会影响，但是开销大，通信困难

thread则是和parent共享地址空间，独立的部分仅仅是`PCB,栈空间和寄存器`，其他的都共享

这导致thread有很多优势

- 开销小
- 线程内通信方便，因为几乎都是共享的，甚至觉察不到还需要通信

但是也有很多问题，比如，多个线程读取一个文件，如何保证每个线程得到的数据一致？

这就是锁的问题

# 线程控制函数

- 创建:`pthread_create()`,对应process的fork(),当在一个进程中调用该函数后，该进程会降级为线程，成为主线程
- 销毁:`pthread_join()`,对应process的wait()
- 杀死`pthread_cacel()`,对应process的kill()
- 退出:`pthread_exit()`,对应process的exit()
- 独立:`pthread_detach()`,没有process对应，默认的thread运行结束后不会自行销毁，需要使用`pthread_join()`来销毁，但是调用`pthread_detach()`后，就不用主动销毁了，运行结束后会自动销毁，这相当于独立于父线程







