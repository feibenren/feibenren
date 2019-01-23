---
title: 建造者模式(Builder Pattern)
categories: 
- 设计模式
---

Builder pattern  和Factory关注点不一样，Factory关注的是怎么将多个对象统一管理


Builder Pattern  关注的是一个复杂的对象，该怎么创建？

简单的思路就是创建一个专门来构建对象的类(Builder)，具体的创建方法放到这个类中

使用的时候,直接调用Builder即可

先创建一个容器Meal,盛放食物


```
package Builder;
import java.util.*;


public class Meal {
	private List mylist=new ArrayList<Item>();
	public void add(Item item) {
		mylist.add(item);
	}
	public void info() {
		System.out.println(mylist);
	}
}

```

使用Builder来特定的对象，如果想要变动对象，后期只需要修改Builder就可以了

```
package Builder;

public class Builder {
	
	public static Meal taocan1() {
		Meal m1=new Meal();
		m1.add(new Coke());
		m1.add(new Coke());
		m1.add(new Burger());
		return m1;
	}
	
	public static Meal taocan2() {
		Meal m1=new Meal();
		m1.add(new Coke());
		m1.add(new Burger());
		return m1;
	}
}

```



