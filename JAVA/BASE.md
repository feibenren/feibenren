---
title: BASE
categories:
- JAVA
---

- [简介](#简介)
- [版本](#版本)
- [开发](#开发)
- [helloworld](#helloworld)
- [组织架构](#组织架构)

# 简介
JAVA是一门

- 简单的
- 强类型的
- 跨平台的
- 面向对象的
- 功能全面的
- 完善的


的语言


### 简单的

JAVA语法尽可能的简化，尽可能的接近C++

又抛弃了C++中繁杂的语法

学过C/C++，可以非常方便的上手JAVA

### 强类型的
java是强类型语言，和js，php不一样，变量在运行前需要确定类型，才好分配内存


### 跨平台的

C/C++虽然说也是每个平台都可以运行，但是到每个平台都需要重新编译，以适应当前平台，虽然也可以跨平台，但是对平台还是有依赖

JAVA的思路和C/C++不一样，JAVA使用虚拟机(JVM)来实现跨平台

- C++生成的二进制文件(`机器码`)直接在`机器上跑`
- JAVA生成的二进制(`字节码`)文件则在`JVM上跑`，JVM负责平台兼容，windows下生成的二进制文件可以直接在linux 上的jvm上跑，C++无法做到



### 面向对象的

和C++不一样，java是纯面向对象的，C++为了兼容C，还有面向过程的内容

JAVA中，因为所有的东西都是面向对象的，所以所有的内容都是一个一个类

### 功能全面的

C++功能很全面，JAVA是对C++的继承，简化

并没有减少功能，和`javascript`不一致，为了特定的运行环境，减少了很多东西




### 完善的

java拥有完善的类库



# 开发

这里有几个概念

- `JVM`:字节码运行的环境
- `JRE`:JVM+核心类库
- `JDK`:JRE+开发环境(编译器，调试器等)

开发java，只需要本地安装JDK即可

# 版本

JDK会升级，会添加修改一些功能，因此java语言的语法也有更新

所以，JDK的版本决定java的版本

简单说`Java X=Java SE X=JDK1.X`


JDK针对不同的用途,分为

- JAVA SE:Standard Edition,标准版
- JAVA EE:Enterprise Edition ,企业版
- JAVA ME:Micro Edition,微缩版





# helloworld

```
package test;
public class Person {
	public static void main(String[] args) {
		System.out.println("hello world");
	}
}
```
# 组织架构

```
|-bin
|-src
|---test
|----------Person.java
|----------Student.java
```
- src:项目所有的源码会放到src目录中
- bin:项目生成的目录都会放到bin目录下
- test:package,java中有一个包的概念，一个包下面可以有很多类文件，一般都是域名倒过来写,比如`com.taobao.www`
- Person.java:类文件,这个文件名，决定该文件中对外公开的类名，需要一致，同时也需要声明所在包名

## package

hello world中的`System`对象哪里来的? 系统默认导入的

一个包可以有很多类文件，jdk里面有java所需要的基本的包

`java.lang`,java语言包

编译器会自动导入该包，相当于省略了

```
import java.lang.*
```
import 导入的一定是类，不是包


