---
title: other
categories:
- JAVA
---


# 字符串常量池

# 注解

不是注释 

安全检测，可选

给编译器看的
```

 public  class calc {

	public  void test() {
		System.out.println(2);
	};
}

class sum extends calc {

	@Override
	public void test() {
		System.out.println(1);
	}
}

```
`@Override`可以检测下面的方法是不是真的正确的复写了父类的方法，如果不是，就报错

# 静态代码块

```
 public  class calc {
	 {
         //这块就是静态代码块，只在对象生成的时候运行一次
		int a=1; 
	 }

}

```

# Object 类 

根类，继承树

# 组合(has)和继承(is)
# 向上转型，向下转型
# instanceof 
# 类就是一种数据类型

# listArray
# String
# Strings，数组工具类(toString,sort)
# final
# bad shape

# 抽象类和接口
# 同包不需要导入语句

# javabean


# for循环 使用的是计数器，while循环使用的是条件


# jar
# StringBuilder
# 装箱和拆箱
# enum是类


# 面向对象只是面向过程的升级。

# 不像 C/C++，Java 不支持无符号类型(unsigned)。


：不带任何标志的浮点型数据，系统默认是 double 类型。

大多数情况下都是用 double 类型，float 的精度很难满足需求。


# 默认访问修饰符 

不使用任何修饰符声明的属性和方法，对同一个包内的类是可见的。接口里的变量都隐式声明为public static final，而接口里的方法默认情况下访问权限为public。

# 使用 this 在某些情况下是多余的


# 重载分辨


# super 不是一个对象的引用，不能将 super 赋值给另一个对象变量，它只是一个指示编译器调用父类方法的特殊关键字



# 多态 ：要有继承、要有重写、父类变量引用子类对象。

# 动态绑定？？？？



# K 表示键，V 表示值，E 表示异常或错误，T 表示一般意义上的数据类型。


# 泛型

泛型不能是基本类型，因为使用的是擦拭法，虚拟机会使用Object来代替<T>


也不能`new T()`因为虚拟机转换后是`new Object()`

# 集合

数组也是一种集合

有了数组，为什么还要其他集合类？？？

数组有缺陷，长度固定，只能按照索引顺序存取等等，不灵活