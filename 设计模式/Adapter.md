---
title: 适配器模式(Adapter Pattern)
categories: 
- 设计模式
---

Adapter 表示的是适配器，作用就是将两个没有任何联系的类关联到一起

比如usb接口和mirco接口


如果自己写的是usb接口，mirco接口是其他厂商写的

现在希望usb接口如果不读了，就使用一个adapter来读取mirco的数据


刚开始，usb接口可以简单这样写
```
package Adapter;

public class Usb implements Port {
	public void read() {
		System.out.println("Usb read...");
	}
}

```

micro是这样

```
package Adapter;

public class Micro {
	public void duqu() {
		System.out.println("micro duqu...");
	}
}

```

那么可以这样写adapter


```
package Adapter;

public class Adapter implements Port {
	public void read() {
		Micro m1=new Micro();
		m1.duqu();
	}
}

```

然后修改usb的read

```
public void read() {
	System.out.println("Usb read...");
	//如果发现接口不对，无法读取的时候
	if(false) {
		Adapter a1=new Adapter();
		a1.read();
	}
}
```

---------------


适配器模式固然可以好，但是多了就不行了

明明调用的是A类，可是细看，里面调用的B

会导致混轮，这就像补丁，仅仅是为了满足条件

最好的方式还是`重构`