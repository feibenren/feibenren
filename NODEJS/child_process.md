---
title: child_process
categories: 
- NODEJS
---
# child_process

The child_process module provides the ability to spawn child processes in a manner that is similar, but not identical, to popen(3). This capability is primarily provided by the child_process.spawn() function:

child_process模块提供了孕育子进程的能力，和C中的popen()类似,主要通过`process.spawn()`来实现


# 和C不同

nodejs中为了简化子进程的创建，会有何C不同的地方

> Unlike the fork(2) POSIX system call, child_process.fork() does not clone the current process.

比如nodejs中的`fork()`函数，和C中的fork()

C中是克隆父进程，然后通过pid进行区分，不好理解

nodejs则是相当于创建了一个和父进程完全独立的进程，只不过可以进行IPC

------------
还有，child_process.spawn(),这个函数在C中是没有的，类似C中的`popen()创建一个process`,

是生成child_process的基本函数


# 创建child_process

- child_process.spawn()
- child_process.fork()
- child_process.exec()
- child_process.execFile()

以上方法都可以创建`ChildProcess`类的实例


## child_process.spawn(command[, args][, options])

- command <string> The command to run【指定运行的command】.
- args <string[]> List of string arguments.【参数】
- options <Object>
+ cwd <string> Current working directory of the child process.【子进程的cpw】
+ env <Object> Environment key-value pairs.【子进程的process.env】
+ argv0 <string> Explicitly set the value of argv[0] sent to the child process. This will be set to  command if not specified.
+ stdio <Array> | <string> Child's stdio configuration (see options.stdio).【子进程的标准io，默认是pipe到父进程的标准io的】
+ detached <boolean> Prepare child to run independently of its parent process. Specific behavior depends on the platform, see options.detached).【子进程是否独立运行】
+ uid <number> Sets the user identity of the process (see setuid(2)).
+ gid <number> Sets the group identity of the process (see setgid(2)).
+ shell <boolean> | <string> If true, runs command inside of a shell. Uses '/bin/sh' on UNIX, and process.env.ComSpec on Windows. A different shell can be specified as a string. See Shell Requirements and Default Windows Shell. Default: false (no shell).【指定运行的文件是否在shell中执行】
+ windowsHide <boolean> Hide the subprocess console window that would normally be created on Windows systems. Default: false.【windows中，子进程会有一个弹出框，默认不隐藏】

child_process.spawn()是child_process生成实例的基本对象

通过参数可以看到

- 必须指定command
- options.stdio，默认是和父进程pipe连接的
- options.shell,可以设定在shell中执行，比如linux中的可执行文件,windows中的cmd，都是需要在shell中执行的
- options.detached:设置子进程是否独立于父进程

### options.detached

如何让两个进程完全独立？

在父进程中的event loop中取消子进程的引用

## child_process.exec(command[, options][, callback])

Spawns a shell then executes the command within that shell

生成一个shell，然后command在shell中执行


## child_process.execFile()

和child_process.exec()类似，它不是生成一个shell，而是使用默认的shell来执行

由于windows系统中只能执行`.exe,.cmd`的文件，所以对于普通文件，在windows系统中,`execFile()`是不可以的

## child_process.fork()

这个简单说是`process.execPath`为command执行的,参数就是当前文件名

所以这导致子进程和父进程使用`相同的文件`，exec(),spawn(),execFile()一般都是去执行其他程序


-----------

fork()方法创建的child_process,是和父进程独立的，拥有单独的V8，单独的内存

# Class: ChildProcess

## 事件

- Event:close
- Event:disconnect
- Event:error
- Event:exit
- Event:message

### Event:close
当子进程的 stdio 流被关闭时触发
### Event:disconnect
调用父进程的 subprocess.disconnect() 或子进程的 process.disconnect() 后会触发。 断开连接后就不能再发送或接收信息

### Event:error
- 无法衍生进程；
- 无法杀死进程；
- 向子进程发送信息失败。
### Event:exit
当子进程结束后时触发。
### Event:message
当子进程使用 process.send() 发送消息时触发。

## 属性
- subprocess.stderr
- subprocess.stdin
- subprocess.stdout
- subprocess.stdio

## 方法
- subprocess.channel
- subprocess.connected
- subprocess.disconnect()
- subprocess.kill([signal])
- subprocess.killed
- subprocess.pid
- subprocess.ref()
- subprocess.unref()
- subprocess.send(message[, sendHandle[, options]][, callback])


###  subprocess.ref()
Calling subprocess.ref() after making a call to subprocess.unref() will restore the removed reference count for the child process, forcing the parent to wait for the child to exit before exiting itself.

如果子进程已经独立，默认父进程运行完成后，父进程可以自动退出

如果子进程调用了这个方法，会强制子进程退出之后，父进程再退出

# IPC

### 主进程
- event message
### 子进程
- send()

