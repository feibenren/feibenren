---
title: MIME
categories:
- NETWORK
---

# 多用途互联网邮件扩展（MIME，Multipurpose Internet Mail Extensions）

smtp中的正文，没有规定具体格式，而是使用了RFC(Request For Comments，开会决定的备忘录)来规定具体格式

RFC早期版本，规定正文默认就是ASCII字符，其他不能使用

这就有问题了

无法携带图片，无法携带html(因为即使传递过去了，也当作ascii显示)，无法使用汉字发邮件


后来发现功能不够用，需要对这个RFC进行升级扩展

于是推出了一些列的标准格式,`RFC 2045、RFC 2046、RFC 2047、RFC 2048、RFC 2049`

注意,MIME不是什么具体的标准，看名字就知道，它是一个扩展,具体的内容是定义在`备忘录`中

使用这些规范，邮件可以发送任何格式的文件

这就形成了`使用ascii码来表示任何文件的先河`

导致后来`HTTP`协议也引入了MIME，因为http协议传递的也不仅仅是html了，还有图片等二进制文件




# 具体格式

```
From: "Tommy Lee" <lee@example.com>
To: "Jack Zhang" <zhang@example.com>
Subject: Test
Date: Wed, 17 May 2000 19:08:29 -0400
Message-ID: <NDBBIAKOPKHFGPLCODIGIEKBCHAA.lee@example.com>

Hello World.
```
最早的RFC规定的格式

改进的措施

添加一个标签头，表示MIME版本，但是其实是用的是RFC规范，这个作用仅仅是为了标记使用了MIME
```
MIME-Version: 1.0
```

```
Content-Type: text/plain; charset="ISO-8859-1"

boundary=&quot;----=_Part_287491_22998031.1213783671982&quot;

------=_Part_287491_22998031.1213783671982
xxxxxxxxxxxx
------=_Part_287491_22998031.1213783671982
```

`Content-Type`:指定接下来的一段是的内容格式，编码方式
`boundary`:确定分割线
`------=boundary`:两个分割线之间的数据，就是`Content-Type`指定的数据

这样的数据块可以有多个

```
Content-Type: text/plain; charset="ISO-8859-1"

boundary=&quot;----=_Part_287491_22998031.1213783671982&quot;

------=_Part_287491_22998031.1213783671982
xxxxxxxxxxxx
------=_Part_287491_22998031.1213783671982


Content-Type: text/html; charset=gbk

boundary=&quot;----=_Part_287491_22998031.1213783671982&quot;

------=_Part_287491_22998031.1213783671982
xxxxxxxxxxxx
------=_Part_287491_22998031.1213783671982
```

这样就扩展了邮件内容的格式，主要是这样一行

```
Content-Type: text/plain; charset="ISO-8859-1"
```
`Content-Type`中的信息类型,分为两个部分，`主类型(Main Type)`和`次要类型(Sub Type)`

还有一个字符编码，表明内容使用什么编码