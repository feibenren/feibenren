---
title: BROWSER-STRUCTOR
categories: 
- BROWSER
---

- [架构](#架构)
- [browser进程](#browser进程)
- [render进程](#render进程)
- [GPU进程](#GPU进程)


# STRUCTOR

主要分析一下浏览器的结构

最早的浏览器只负责`解析超文本`和`处理http请求`,

没有css，js，多tab等，那个时候很简单，一个进程可以完成所有的事情

可以这样设计

- Browser进程
    - http处理线程:专门处理http请求
    - GUI线程:只需要处理html，转换成`bitmap`输入给显示器(当然可能需要另外开一个GPU的线程来加速渲染)

> bitmap，这里简单说就是说是点阵图，位图

后来加入了css，js，可以这样设计

--------------------

- Browser进程
    - http处理线程
    - GUI线程:这个地方就不仅仅是解析html了，还有css
    - js引擎线程:这个线程负责js的解析运行(一个线程还不够,这里只简单说)

这里就有一个问题

GUI线程是用来渲染html和css,使其变成`bitmap`

如果js线程中运行的js修改了html或者css，那么GUI岂不是就白做了？还得重来


所以，规定GUI线程和js引擎是互斥的，一个运行，另一个就必须挂起


--------------------

后来加入了多tab功能，那么该怎么设计?

思路是:

一个Browser主进程，管理整个浏览器

如果开了一个tab页面，就单独开除一个进程(这个进程一般叫做`render进程`)，这个tab页面由这个render进程负责

render进程要做的事情很多，渲染html，css，运行js等，几乎做了浏览器所有的事情，所以，render进程也被称为`浏览器内核`

-----------

- Browser进程:
    - 界面展示管理，用户交互的线程
    - 网络请求线程,下载html，图片，css等
- render进程:专门用来解析html，css，js
    - GUI进程
    - JS引擎进程
    - 异步请求线程,就是XHR发送的请求,可能会有多个
    - 异步请求线程,就是XHR发送的请求,可能会有多个
    - .....
- render进程:专门用来解析html，css，js
    - GUI进程
    - JS引擎进程
    - 异步请求线程,就是XHR发送的请求,可能会有多个
    - 异步请求线程,就是XHR发送的请求,可能会有多个
    - .....




这里有一个问题,异步请求的线程为什么要存在？直接使用Browser进程来进行不就可以了吗？

可能是实现上的考虑，如果js发送了1000个请求，10个tab页面那Browser进程就受不了了，只能这样设计


--------------------

现在的浏览器，有了3D功能，就使用显卡来渲染页面，会增加一个进程`GPU进程`，加快渲染，GUI线程会和这个进程紧密配合，加快渲染速度

还有插件，浏览器一个插件对应一个进程,所以插件装多了会很卡

# chrome架构


- Browser 进程:浏览器主进程,唯一一个
- 第三方插件进程:一个第三方插件一个进程
- GPU 进程:3D渲染,就一个
- render 进程:渲染进程，一个tab页面一个，相互独立
- render 进程:渲染进程，一个tab页面一个，相互独立
- render 进程:渲染进程，一个tab页面一个，相互独立


# chrome Browser 进程

- 负责浏览器界面显示，与用户交互。如前进，后退等

- 负责各个页面的管理，创建和销毁其他进程

- 将Renderer进程得到的内存中的Bitmap，绘制到用户界面上

- 网络资源的管理，下载等

> 这里需要注意的是render进程将结果bitmap给Browser进程来绘制

注意，tab可以有多个，但是html显示的区域就一个，这个区域是Browser进程来管理的

这个管理仅仅是负责创建和销毁，处理过程由每个tab页面对应的render进程来处理，Browser仅仅是发起对render进程的调用和接收render进程的运算结果



# 运行流程

- 用户输入URL
- Browser进程接收到url，发起请求，Borwser进程同时开启子进程:render 进程
- render进程接手请求，等待返回结果
- render进程收到结果后，开始渲染(html，css，js)，过程很复杂
- render进程可能会借助GPU进程来进行3D渲染(这个一般叫做`硬件加速`)
- render进程处理完成后，将处理完成的结果(其实是一个位图)交给browser进程来处理
- Browser进程收到后，将位图展示在显示区域

如果用户进行了操作，比如resize window，改动了窗口大小

- render进程将处理对应的事件回调
- GUI重新渲染,将结果传给Browser进程
- Browser进程收到后，将位图展示在显示区域





# 链接
- [https://mp.weixin.qq.com/s/whtgk3LShhgEhF5pMEpfYw](https://mp.weixin.qq.com/s/whtgk3LShhgEhF5pMEpfYw)
- [https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/](https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/)
- [http://taligarsiel.com/Projects/howbrowserswork1.htm](http://taligarsiel.com/Projects/howbrowserswork1.htm)
- [https://coolshell.cn/articles/9666.html](https://coolshell.cn/articles/9666.html)