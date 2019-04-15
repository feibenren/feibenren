---
title: global
categories: 
- NODEJS
---

# global

在全局中，以下这些属性直接被挂在了全局中，可以直接使用

- Class: Buffer
- clearImmediate(immediateObject)
- clearInterval(intervalObject)
- clearTimeout(timeoutObject)
- console
- global
- process
- setImmediate(callback[, ...args])
- setInterval(callback, delay[, ...args])
- setTimeout(callback, delay[, ...args])
- URL
- URLSearchParams
- WebAssembly


# global

In browsers, the top-level scope is the global scope. This means that within the browser var something will define a new global variable. 

In Node.js this is different. The top-level scope is not the global scope; var something inside a Node.js module will be local to that module.

所以说这个对象机会没啥用处了