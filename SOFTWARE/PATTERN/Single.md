---
title: 单例模式(Single Pattern)
categories: 
- 设计模式
---

# 场景
有时候`全局只希望只有唯一一个对象`，可能是性能，操作正确性(比如操作文件，数据库)等方面考虑

# 解决方案
## java

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
## javascript

```
functin Person{
	if(this.instance){
		return this.instance;
	}
	this.instance={
		name:111,
		age:222
	};
	return this.instance;
}
```

# 总结



----------------

还有问题，多线程怎么办？？？
