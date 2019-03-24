---
title: Proxy
categories: 
- ECMASCRIPT
---

# Proxy

Proxy 对象用于定义基本操作的自定义行为（如属性查找，赋值，枚举，函数调用等）。

# 术语

- handler
包含陷阱（traps）的占位符对象。
- traps
提供属性访问的方法。这类似于操作系统中陷阱的概念。
- target
代理虚拟化的对象。它通常用作代理的存储后端。根据目标验证关于对象不可扩展性或不可配置属性的不变量（保持不变的语义）。


# 语法
let p = new Proxy(target, handler);
