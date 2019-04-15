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

# Event: 'beforeExit'

The 'beforeExit' event is emitted when Node.js empties its event loop and has no additional work to schedule. Normally, the Node.js process will exit when there is no work scheduled, but a listener registered on the 'beforeExit' event can make asynchronous calls, and thereby cause the Node.js process to continue.

The listener callback function is invoked with the value of process.exitCode passed as the only argument.

The 'beforeExit' event is not emitted for conditions causing explicit termination, such as calling process.exit() or uncaught exceptions.

The 'beforeExit' should not be used as an alternative to the 'exit' event unless the intention is to schedule additional work.



# Event: 'disconnect'


# Event: 'exit'
# Event: 'message'
# Event: 'multipleResolves'
# Event: 'rejectionHandled'
# Event: 'uncaughtException'
# Event: 'unhandledRejection'
# Event: 'warning'