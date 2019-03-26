---
title: Event
categories: 
- EVENT
---

# Event

Event 接口表示在 DOM 中发生的事件

是一个基础类

挂载了很多的属性和方法



# 属性

- Event.currentTarget:当前注册事件的对象(这个值会在传递的途中进行改变)
- Event.target:对事件起源目标
- Event.timeStamp:事件创建时的时间戳，毫秒级别。
- Event.type:事件类型


# 方法

- Event.preventDefault():取消事件（如果该事件可取消）。
- event.stopPropagation():阻止传播(也就是阻止冒泡)


# links