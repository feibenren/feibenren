---
title: 工厂模式(Factory Pattern)
categories: 
- 设计模式
---

有这样一个需求

计算图形的面积

这些图形可能是圆，三角形，正方形等，不确定

这就需要使用接口，定义一个接口

```
public interface Shape {
	void area();
}
```
然后具体类来实现即可

```
public class Circle implements Shape{
	@Override
	public void area() {
		System.out.println("Circle draw");
	}
}
```

ok，问题来了，我现在知道有一个实现类Circle

同时还有1000个实现类，我无法记忆，怎么办?

--------------

这就需要一个方法，专门来创建实现了Shape接口的对象

```
public class ShapeFactory {
	public static Shape getShape(String name) {
		if(name.equalsIgnoreCase("Circle")) {
			return new Circle();
		}else if(name.equalsIgnoreCase("Square")) {
			return new Square();
		}else {
			return new Circle();//默认返回Circle
		}
	}
}
```

```
	public static void main(String[] args) {
		Shape s1=ShapeFactory.getShape("Circle");
		s1.area();
		
		Shape s2=ShapeFactory.getShape("Square");
		s2.area();
	}	
```

这样，只需要知道形状名称，就可以计算对应的面积，无需知道具体类是什么，怎么实现的

比如形状是`Square`,但是实现的类的名称是`Zhengfangxing`

这样就实现了一个接口及其实现类的`高内聚`