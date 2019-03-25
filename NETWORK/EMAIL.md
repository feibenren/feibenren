---
title: EMAIL
categories:
- NETWORK
---


- [BASE](#BASE)
- [MUA](#MUA)
- [MTA](#MTA)
- [MDA](#MDA)
- [SMTP](#SMTP)
- [POP3/IMAP](#POP3/IMAP)


# BASE

现实中的邮件发送，过程是这样的:

```
发件人->邮局->收件人邮箱<-收件人
```

这个过程可以简单归纳为两部

- 发件人->收件人邮箱

- 收件人邮箱<-收件人



网络中发送邮件，也是对现实世界的抽象

最早的时候，是没有邮件概念的，因为都是大型电脑，二十四小时开机，直接通信即可，后来计算机普遍，不可能实现所有的电脑都二十四小时开机，所以就需要一个代理来接收邮件，又来才演化出来现在的样子

```
发件人软件(mail user agent,比如outlook,发件人)->qq邮箱(mail transfer agent,邮局)->163邮箱(mail delivery agent,收件人邮箱)<-收件人软件(mail user agent,比如outlook，收件人)
```

这里有几个专业名词

- MUA:发件人
- MTA:邮件代理
- MDA:收件邮箱，发送的邮件，都是放到这个服务器上的硬盘的，需要等收件人来自己去取邮件

注意，在实现的代码过程中，发送邮件的时候是需要填写发件人和收件人的信息的

也就是说，我们代码中实现的是`填写邮件信封和邮件内容`,发送给qq邮箱，然后qq邮箱帮我们再次转发给163邮箱

这是两个步骤

这两个步骤，使用的通信协议是`SMTP`

只有这两个步骤都走通了，才会返回成功的状态

--------------

收件人从自己的电脑上获取MDA硬盘上的邮件，使用`POP3/IMAP`协议


# SMTP

simple mail transfer protocol

base on TCP

这个协议默认的端口是25

> 这个协议之是一个`push`协议，也就是只是推送

应用层协议，格式一般如下:

```
From: "Tommy Lee" <lee@example.com>
To: "Jack Zhang" <zhang@example.com>
Subject: Test
Date: Wed, 17 May 2000 19:08:29 -0400
Message-ID: <NDBBIAKOPKHFGPLCODIGIEKBCHAA.lee@example.com>

Hello World.
```

# 邮件正文


但是注意，SMTP协议没有发送的具体内容的格式

这个协议的格式中只有

发件人，收件人，主题，时间，主体等

但是主体具体怎么写，没有规定，而是在另外一个规范中规定了,`RFC`

早期的RFC规定正文只能是ASCII码来写

也就是说，邮件正文只能是英文字母，中文无法使用，并且无法加载二进制文件，这就造成了问题

后来对RFC格式进行升级，可以携带所有数据类型，这就是 `多用途互联网邮件扩展（MIME，Multipurpose Internet Mail Extensions）`-[MIME](./NETWORK/MIME.md)

# POP3/IMAP

>这两个协议，就是`pull`拉协议

这个协议主要就是从收件箱服务器上将数据获取到本地的协议