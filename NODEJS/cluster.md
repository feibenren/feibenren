---
title: cluster
categories: 
- NODEJS
---

# cluster
cluster模块其实是Child_process的一种`特殊情况`

使用child_process，就可以创建进程,但是创建的child_process是平等的，可独立的

但是绝大部分情况下，我们需要的是一个主次关系，而这就是cluster提供的

cluster 主要用来网络，可以非常方便的共享端口


# Class: Worker

- cluster.disconnect([callback])
- cluster.fork([env])
- cluster.isMaster
- cluster.isWorker
- cluster.schedulingPolicy
- cluster.settings
- cluster.setupMaster([settings])
- cluster.worker
- cluster.workers



## cluster.disconnect([callback])
In a worker, this function will close all servers, wait for the 'close' event on those servers, and then disconnect the IPC channel.

In the master, an internal message is sent to the worker causing it to call .disconnect() on itself.
## cluster.fork([env])
Spawn a new worker process.

This can only be called from the master process.

创建worker process，它只能在master process中使用
## cluster.isMaster
## cluster.isWorker
## cluster.schedulingPolicy
## cluster.settings
## cluster.setupMaster([settings])
用于修改默认'fork' 行为

只能由主进程调用

- 所有的设置只对后来的 .fork()调用有效，对之前的工作进程无影响。
- 唯一无法通过 .setupMaster()设置的属性是传递给.fork()的env属性。
- 上述的默认值只在第一次调用时有效，当后续调用时，将采用cluster.setupMaster()调用时的当前值。


## cluster.worker

当前工作进程对象的引用，对于主进程则无效。

## cluster.workers

这是一个哈希表，储存了活跃的工作进程对象， id作为key。有了它，可以方便地遍历所有工作进程。只能在主进程中调用。