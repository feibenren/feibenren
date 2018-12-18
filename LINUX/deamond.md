---
title:deamond(守护进程)
categories: 
- LINUX
---

deamond进程，一般是linux中的后台服务进程，特点有

1、独立于终端，终端关闭，程序也不会退出

2、用户退出，注销也不影响 

想要杀死deamond，一般需要使用命令`kill`来杀死

后台服务进程，比如`ftpd`,`httpd`这些都是deamond，所以后缀是d

想要实现该功能，需要先从终端说起

# termial

终端，还是一个进程

每一个用户登录，会产生一个终端进程

1、在这个终端进程中输入`ls`

2、终端进程会`fork && execl`

3、`ls`进程的父进程就是这个终端进程，所以打印的结果自然要返回自己登录的那个终端，这就是多用户的操作系统的基础


现在的问题是，如果`kill`了这个终端，那么也就无法调用`ls`了，也就是说，所有的命令，依赖于终端


如何摆脱终端？？？

思路

父进程创建一个子进程，让子进程摆脱终端，父进程运行完成后自动退出


linux提供了一个函数

```
setsid():
```
setsid - run a program in a new session

实际上摆脱的不是终端，而是session

在子进程中执行该函数，会产生一个新的session，并且脱离父终端，完全独立

```
int main(){
    pid_t pid;
    
    pid=fork();

    if(pid ==0){
        //child
        setsid();
        sleep(9999999);//在给定时间内，子进程就摆脱了父进程独立存在，杀死他，只能kill        
    }else if(pid >0){
        sleep(1);//睡1s，给足子进程创建时间
        exit(0);
    }

}


```












