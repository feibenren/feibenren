---
title: String
categories:
- JAVA
---

- [BASE](#BASE)
- [String](#String)
- [StringBuilder](#StringBuilder)

# BASE



C中没有string类型，java也没有，

java提供了一个类`String`

这个类在`java.lang`中，所以可以直接使用

```
char[] helloArray = { 'h', 'e', 'l', 'l', 'o'};
String str1=new String(helloArray);
```

String 类的构造方法很多，基本常见的类型都可以直接转成String对象

String类有很多方法
- length()
- charAt()
- contains()
- replace()
- split()

这个类有一个特点，`一旦创建，就不好修改了`


------------

java还提供了一种简写方法

```
String str="hello";
```
字符串直接使用双引号括起来,编译器编译的时候会将`"hello"`转变成一个字符串对象


所以可以直接这样

```
System.out.println("aaa".length());
```


但是还有一个问题

```
	String str1="hello";
    String str2="hello";
    System.out.println(str1 == str2);//true
```
如果字符串会直接变成对象，两个独立的对象不会相等，但是结果相等，为什么？

编译器在编译的时候，会将双引号引起的字符串，放到内存四区的`常量/静态区`,专门有个名称`字符串常量池`

创建的对象，只是创建了指向字符串常量池中的一个引用，所以两者相同



# StringBuilder

String类有一个缺点，就是效率慢

```
String str="aaa";
String res="";

for(int i=0;i<3000;i++){
    res+=str;
}
```
这样会创建3000个string对象，效率很低

java为此提供了一个解决方法`StringBuilder`

```
    String str="aaa";
    StringBuilder res = new StringBuilder();
    for (int i=0; i<3000; i++) {
        res.append(str);
    }
```
StringBuilder 使用的是链表，不用创建新的字符串，所以不用创建新的

> StringBuilder在多线程情况下不安全，还有一个类`StringBuffer`是多线程安全版本的，但是平时很少使用`StringBuffer`