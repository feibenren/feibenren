---
title: URL,URI,encodeURI(),encodeURIComponent()
categories: 

- HTML

---

![三者关系](/images/img3.png)

# URI & URL & URN区别


URI = Universal Resource Identifier 统一资源标志符
URL = Universal Resource Locator 统一资源定位符
URN = Universal Resource Name 统一资源名称



URI可以分为URL,URN或同时具备locators 和names特性的一个东西

简单的说就是 URI=URN+URL,URI这个东西可以表述一个东西的身份，

URN确定了东西的身份，URL提供了找到它的方式
URN比如有书的isbn编号，身份证，等等
URI比如有


ftp://ftp.is.co.za/rfc/rfc1808.txt (also a URL because of the protocol)
http://www.ietf.org/rfc/rfc2396.txt (also a URL because of the protocol)
ldap://[2001:db8::7]/c=GB?objectClass?one (also a URL because of the protocol)
mailto:John.Doe@example.com (also a URL because of the protocol)
news:comp.infosystems.www.servers.unix (also a URL because of the protocol)
tel:+1-816-555-1212
telnet://192.0.2.16:80/ (also a URL because of the protocol)
urn:oasis:names:specification:docbook:dtd:xml:4.1.2
这些全都是URI, 其中有些事URL. 哪些? 就是那些提供了 **访问机制** 的.


URL比如有网址，通天这个网址，我就可以找到，定位到一个资源


最后“URL”这个术语正在被弃用。所以明智吧少年！



# 为什么要进行URL编码
很简单，举个例子
http://www.baidu.com?key1=val1&key2=val2
这里的&,?://都是有特殊含义的，如果，val1是 `&1&2&`那么这个时候就会有歧义了，所以，为了保证不会产生这些歧义，就需要进行转码

转码后的样子就是

%2E%
就是两种%号，中间是十六的两个字符

```
http%3A%2F%2Fwww.w3school.com.cn
```
类似这种效果



# encodeURI && encodeURIComponent 区别
简单说，encodeURIComponent转码更彻底，推荐使用encodeURIComponent








