---
title: process
categories: 
- NODEJS
---

# process

The process object is a global that provides information about, and control over, the current Node.js process. As a global, it is always available to Node.js applications without using require().


process对象是一个全局对象，提供关于`当前nodejs进程`的信息和控制等

# event

- Event: 'beforeExit'
- Event: 'disconnect'
- Event: 'exit'
- Event: 'message'
- Event: 'multipleResolves'
- Event: 'rejectionHandled'
- Event: 'uncaughtException'
- Event: 'unhandledRejection'
- Event: 'warning'
- Event: 信号事件

## Event: 'beforeExit'
如果nodejs中eventLoop中已经空了，默认就会退出，退出前会触发这个事件

注意:显示退出不会触发这个事件，比如`process.exit()`

## Event: 'disconnect'

IPC通信中失去连接

## Event: 'exit'

和beforeExit类似，不同是`process.exit()`会触发这个事件

## Event: 'message'
IPC通信

## Event: 'multipleResolves'

promise中如果执行了多个resolve()，则只有第一个会传递，剩下的会被丢弃

如果有多个resolve，会触发这个事件

## Event: 'uncaughtException'

## Event: 'rejectionHandled'
## Event: 'unhandledRejection'
primose中reject没有被处理，会触发该事件
## Event: 'warning'

## Event: 信号事件

linux中系统的信号，nodejs也可以捕获，比如`process.on('SIGINT')`


# 方法

- process.abort()

- process.allowedNodeEnvironmentFlags
- process.arch
- process.argv
- process.argv0
- process.channel
- process.chdir(directory)
- process.config
- process.connected
- process.cpuUsage([previousValue])
- process.cwd()
- process.debugPort
- process.disconnect()
- process.dlopen(module, filename[, flags])
- process.emitWarning(warning[, options])
- process.emitWarning(warning[, type[, code]][, ctor])
- Avoiding duplicate warnings
- process.env
- process.execArgv
- process.execPath
- process.exit([code])
- process.exitCode
- process.getegid()
- process.geteuid()
- process.getgid()
- process.getgroups()
- process.getuid()
- process.hasUncaughtExceptionCaptureCallback()
- process.hrtime([time])
- process.hrtime.bigint()
- process.initgroups(user, extraGroup)
- process.kill(pid[, signal])
- process.mainModule
- process.memoryUsage()
- process.nextTick(callback[, ...args])
- process.noDeprecation
- process.pid
- process.platform
- process.ppid
- process.release
- process.send(message[, sendHandle[, options]][, callback])
- process.setegid(id)
- process.seteuid(id)
- process.setgid(id)
- process.setgroups(groups)
- process.setuid(id)
- process.setUncaughtExceptionCaptureCallback(fn)
- process.stderr
- process.stdin
- process.stdout
- process.throwDeprecation
- process.title
- process.traceDeprecation
- process.umask([mask])
- process.uptime()
- process.version
- process.versions
- Exit Codes


## process.abort()
立即退出process

### 和exit()有什么区别?

## process.arch
架构
## process.argv

命令行中的参数

第一个是node

第二个是入口文件

第三个以后才是参数

## process.argv0

process.argv0 === process.argv[0] 

## process.channel

IPC通信中的channel

## process.chdir(directory)
修改当前目录

## process.config

执行程序的配置信息(也就是node.exe)


## process.connected
IPC通信的时候判断是否连接

## process.cpuUsage([previousValue])
`当前进程`的cpu使用量
## process.cwd()
返回当前目录
## process.debugPort
## process.disconnect()
IPC中取消连接
## process.dlopen(module, filename[, flags])
## process.emitWarning(warning[, options])
触发warning事件
## process.emitWarning(warning[, type[, code]][, ctor])
## process.env

The process.env property returns an object containing the user environment

返回用户的环境信息，是一个对象，有path，shell等信息

可以通过命令行来修改这个对象，使用参数`-e `

## process.execArgv
!!!!
## process.execPath
返回启动该进程的可执行程序的绝对路径

## process.exit([code])
The process.exit() method instructs Node.js to terminate the process synchronously with an exit status of code.

这个方法指示nodejs同步停止进程，并且可以指定一个状态码

如果有异步函数没有执行完成，会等待这些函数执行完成后再退出

一般情况下，我们没必要手动执行，因为node运行完成后会自动结束

## process.exitCode

设置退出码

会覆盖`process.exit(code)`的状态码


## process.getegid()
## process.geteuid()
## process.getgid()
## process.getgroups()
## process.getuid()
## process.hasUncaughtExceptionCaptureCallback()
## process.hrtime([time])
## process.hrtime.bigint()
## process.initgroups(user, extraGroup)
## process.kill(pid[, signal])
发送 linux中 杀死 信号给指定的进程id
## process.mainModule

process.mainModule === require.main

## process.memoryUsage()

## process.nextTick(callback[, ...args])
## process.noDeprecation
## process.pid

当前进程的pid

## process.platform
平台
## process.ppid
## process.release
当前发布版本的node的信息
## process.send(message[, sendHandle[, options]][, callback])
IPC通信中发送信息
## process.setegid(id)
## process.seteuid(id)
## process.setgid(id)
## process.setgroups(groups)
## process.setuid(id)
## process.setUncaughtExceptionCaptureCallback(fn)
## process.stderr
标准错误输出
## process.stdin
标准错误输入
## process.stdout
标准输出
## process.throwDeprecation
## process.title
设置当前进程的标题，在linux命令`ps`中显示
## process.traceDeprecation
## process.umask([mask])
## process.uptime()
当前node运行的事件
## process.version
当前node信息
## process.versions
当前node，和node的依赖的版本信息
## Exit Codes
退出码

- 0:正常退出
- ....