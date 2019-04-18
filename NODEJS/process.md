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

## Event: 'rejectionHandled'
## Event: 'uncaughtException'
## Event: 'unhandledRejection'
## Event: 'warning'
## Event: 信号事件


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

## process.allowedNodeEnvironmentFlags
## process.arch
## process.argv
## process.argv0
## process.channel
## process.chdir(directory)
## process.config
## process.connected
## process.cpuUsage([previousValue])
## process.cwd()
## process.debugPort
## process.disconnect()
## process.dlopen(module, filename[, flags])
## process.emitWarning(warning[, options])
## process.emitWarning(warning[, type[, code]][, ctor])
## Avoiding duplicate warnings
## process.env
## process.execArgv
## process.execPath
## process.exit([code])
## process.exitCode
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
## process.mainModule
## process.memoryUsage()
## process.nextTick(callback[, ...args])
## process.noDeprecation
## process.pid
## process.platform
## process.ppid
## process.release
## process.send(message[, sendHandle[, options]][, callback])
## process.setegid(id)
## process.seteuid(id)
## process.setgid(id)
## process.setgroups(groups)
## process.setuid(id)
## process.setUncaughtExceptionCaptureCallback(fn)
## process.stderr
## process.stdin
## process.stdout
## process.throwDeprecation
## process.title
## process.traceDeprecation
## process.umask([mask])
## process.uptime()
## process.version
## process.versions
## Exit Codes