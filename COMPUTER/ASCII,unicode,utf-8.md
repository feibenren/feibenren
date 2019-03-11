---
title: ASCII,unicode,utf-8
categories: 
- COMPUTER
---
# base

计算机早期，只需要处理英文字母和数字，字符数量很少，2^7(128)就足够了,美国官方建立一个标准，就是ASCII标准，

后来互联网的兴起，ASCII无法表示多民族语言，UNICODE编码在此背景下产生，试图将所有语言文字规定为一种编码格式

# ASCII

只需要使用8bit(1byte)即可表示，8bit最多可以表示256个数字，但是头一位规定得是0，所以只有7位表示真实数字

# unicode

unicode仅仅将世界上所有文字字符规定了序号，但是具体怎么存储没有说明，甚至容量(比如ASCII的容量是127)都没有规定死，不同版本的容量都不同

比如,'你'字符，在unicode的序号是`AAAA`,其他的就不再规定


# utf-8

怎么将`AAAA`怎么存储，这就是utf-8做的事情，utf-8是unicode的一种实现方式

从最简单来说，将`AAAA`存储起来，只需要2个字符就可以存储起来，所有问题都解决


但是对于英文字母来说就很不公平，之前使用ASCII的时候，只使用一个字符就可以存储了,现在需要使用两个字符，存储空间大了一倍

所以，需要使用一种编码方式，如果是ASCII中出现的字符，使用一个字符存储，也就是说，这个时候使用ascii编码方式，

如果存储一个汉字，那必须使用两个字符了,也就是说，针对不同的字符，需要做到存储的字符个数也不不一样，

也就说，存储格式的长度是不确定的的，需要针对具体情况

这就是utf-8的编码思想

具体实现方式看链接 [http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html](http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html)

# 其他

还有其他很多unicode编码表示，比如utf-16，使用不多，不多说

# LINKS
- [unicode编码大全](https://unicode-table.com/cn/)
- [http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html](http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html)


