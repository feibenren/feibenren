---
title: 抽象工厂(Abstract Factory Pattern)
categories:  
- 设计模式
---


工厂模式针对的是一个接口

但是如果有1000个接口呢？

按照之前的玩法，就会有1000个工厂方法

这些工厂方法名称可能不一样，`getFactory`,`myFactory`,那么逐个记忆不可能,怎么办？

事先写好规范，让每个工厂类按照规范写,

规范可以用接口，也可以用抽象类

但是在这个地方只能使用抽象类

如果使用接口的话，那么具体的工厂类就没法统一成写成统一规范的抽象类了


确定工厂类的规范
```
public abstract class Factory {
	public abstract Color getColor(String name);
	
	public abstract Color getShape(String name);
}

```
每个工厂类都需要继承这个类

```
package test;

public class ColorFactory extends Factory {
	@Override
	public Color getColor(String name) {
		// TODO Auto-generated method stub
		if(name.equalsIgnoreCase("Red")) {
			return new Red();
		}else if (name.equalsIgnoreCase("Yellow")) {
			return new Yellow();
		}
		return new Red();
	}
	@Override
	public Color getShape(String name) {
		// TODO Auto-generated method stub
		return null;
	}

}

```

但是怎么调用呢？

还需要一个类来专门获取`Factory`类型的类


```
public class Producer {
	public static Factory getFactory(String name) {
		if(name.equalsIgnoreCase("Color")) {
			return new ColorFactory();
		}else if(name.equalsIgnoreCase("Shape")) {
			return new ShapeFactory();
		}	
		
		return new ColorFactory();
	}
}
```

这样多个工厂方法都不需要知道，只需要知道这一个即可

使用就这样使用
```
public static void main(String[] args) {
	Factory color_factory=Producer.getFactory("Color");//注意,所有的工厂类的类型都是Factory
	Color c1=color_factory.getColor("red");
	c1.getColor();//red
}	
```

--------------

抽象工厂是在工厂方法上的另外一层抽象