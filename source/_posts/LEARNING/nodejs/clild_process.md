---
title: clild_process
categories: 
- LEARNING
- nodejs
tags:
- js
---

# clild_process

child_process模块用于新建子进程。子进程的运行结果储存在系统缓存之中（最大200KB），等到子进程运行结束以后，主进程再用回调函数读取子进程的运行结果。

#常见方法
- exec()
- execFile()
- spawn()
- fork()
- send()