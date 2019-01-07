---
title: 单例模式(Single Pattern)
categories: 
- 设计模式
---


有时候我们希望一个类，只能有一个实例对象，比如操作文件的时候，就必须只有一个，这样才能保证正确，多个对象同时操作一个对象，会乱掉

同时，能用一个对象做，就没必要创建多个对象，性能不高

这个实现很简单


```
package test;

public class Single{

	public static Single Obj=new Single();
	
	@SuppressWarnings("unused")
	private void Single (){};//私有构造函数，这样这个类就无法被实例化
	
	public Single get_instance() {
		return Single.Obj;
	}
	
	public void say() {
		System.out.println("single say");
	}
}


```

还有问题，多线程怎么办？？？

暂且不说