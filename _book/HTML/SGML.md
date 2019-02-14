---
title: SGML
categories: 
- HTML
---

# SGML(STANDARD GENERAL MARKUP LANGUANGE,标准通用标记语言)
SGML 是一种标记语言的规范

基本思想就是将样式和内容分开

组成部分有:

- (1)SGML声明(SGML Declaration):
- (2)文档类型定义(Document Type Definition，DTD)。
- (3)文档实例(Document Instance)。


其中，SGML声明是用来告诉SGML分析器(SGML Parser)在分析该份文件时，所使用的字符集和文件特性。


DTD是用来声明该份文件的结构与语法参数，不同的“文件内容”使用不同的“标记”来描述。

在这里所谓“标记”(Tag)是指用一特定符号将信息内容中的某一部分加以注记，而此特定符号就称为“标记”。如“＜”及“＞”都是一种标记。当然标记也可以是任何一小段文字。如“＜NAME＞”与“＜／NAME＞”，而“＜NAME＞Iamstudent＜／NAME＞”则是一段加上标记的字串。


----------------

总的来说，SGML功能强大，但是很复杂的一种`标记语言`

SGML最大的特点就是样式和内容分离


# DTD
DTD可以看到是SGML的一部分

# XML

SGML考虑的东西比较多，比如验证正确性等功能，所以导致很复杂

XML是SGML的简化版本

# HTML

HTML也是从SGML简化来的一种标记语言


HTML的发展有两条线，一条是基于XML的，一条是基于SGML的

基于xml的，就是后来的XHTML，要求必须符合xml的标准，不然会报错

但是实际中，页面标签写错是很常见的，所以浏览器一般都有`容错机制`

# XHTML

xhtml这条路后来由于种种原因，死掉了

# HTML5

真正有历史意义的是HTML5这个版本

它摆脱了SGML，XML的束缚

继续使用HTML4的的风格，而不是严格的XHTML

同时也认为SGML有些申明是没有意义的，所以也就没有了DTD申明

同时添加了位置，存储，多任务，图片等功能，使用SGML就不再合适了


# 其他

基于xml的，还有RSS,SOAP



# LINKS

- [https://www.zhihu.com/question/20249139](https://www.zhihu.com/question/20249139)
- [https://zh.wikipedia.org/wiki/SGML](https://zh.wikipedia.org/wiki/SGML)