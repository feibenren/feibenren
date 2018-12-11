---
title: C语言杂记
categories: 
- C
---

# 在线c环境
[https://studio.dev.tencent.com](https://studio.dev.tencent.com)



# 变量类型


注意，C++中并没有明确一个字符类型占用几个字节，一个int到底占用几个字节，这些都由编译环境决定，只有 ` double应该大于float`这种类似规定，这个和js，php，java很不一样

常见的规定是这样的:
- char，1个字节
- int,4个字节
也就是说，char类型的变量，只能表示最多256种字符，很显然，汉字无法表示，只能表示英语和其他一些特殊字符

int类型存储占用的空间竟然比char类型的还要大。。。。。。。。

# sizeof运算符

计算“某个变量”,或者“某个变量类型”所占的字节数

字节，是计算机的“信息计量单位”，用大B表示，由8个比特(用小写的b表示)构成
也就是说

```
1B =8b
```
那么一个字节可以表示的范围就是0-2的8次方(256)

由于C++语言没有规定变量类型到底占用几个字节，所以需要使用`sizeof`来确定

4中书写方式

```
int a=1;
cout << sizeof a;
cout << sizeof char;
cout << sizeof(a);
cout << sizeof(char);


```


# 函数重载

```
#include <iostream>


void  test() {
	std::cout << "hahahahah" << std::endl;
}

void  test(int val) {
	std::cout << val << std::endl;
}



int main() {
	
	test(1);

	return 0;
}
```
重载:函数名一样，参数不一样，调用的时候，根据参数的不同，执行函数名相同但是执行的函数体不相同

C++支持重载，js就不支持

# 变量的引用

注意，这个地方说的变量的引用，不是使用变量，而是一个特有的名词

```
int i,j;
int &J=i;
```
这个时候，`J`就是`变量i`的引用，表示的是变量i的一个"别名"，修改J就是修改i

> 引用(&)是标识符的别名
> 定义一个引用的时候，必须同时对他进行初始化，指向一个已经存在的变量
> 引用一旦被初始化后，就不能再指向其他变量了

## 引用有什么用？
传址调用

```
#include <iostream>
void  test(int val) {//注意，函数参数是一个普通的变量
	val = val + 1;
}
int main() {
	
	int a = 1;
	test(a);
	std::cout << a << std::endl;//结果是1，int默认就是传值调用
	return 0;
}
```


```
#include <iostream>
void  test(int &val) {//注意，函数参数是一个 '变量的引用'
	val = val + 1;
}
int main() {
	
	int a = 1;
	test(a);
	std::cout << a << std::endl;//结果是2，虽然传递的是一个普通的变量，但是函数处理的是变量的地址，所以能够修改变量本身
	return 0;
}
```
这种玩法在js中没有体现


还有一种玩法

```
int main() {
	int a = 1;
	int &b = a;//如果这样申明了，其实就是变量a的一个别名，a和b完全一样，没有任何区别
    //因为其实a表示的是哪个特定的内存块的一个引用，那么b其实也就是指向那个特定内存块的引用，
    //也就是说，这个内存块，有两个引用，这个在其他语言中很少见到
	b++;
	std::cout << a <<b<< std::endl;
	return 0;
}
```

# 内联函数


# 默认是private

# 类内部也允许函数的重载


# 函数的申明和函数的实现

在c++中，函数的申明和函数的实现是可以分开的，在js中不可以
```
void test();

void test(){
	std::cout << 1 << std::endl;
}
```

同样，在类中也可以实现申明和实现分离

```
#include <iostream>
class Person
{
public:
	char name;
	int age=0;
	void say() {
		std::cout << "say fuc" <<std::endl;
	};
	int eat();
private:
	bool sex;
};

int Person::eat() {
	std::cout << "eat fuc" << std::endl;
	return 0;
}
```

# 申明对象
在js，php中，使用new来初始化一个对象，在c++中不需要
```
Person p1;
Person p1();
Person p1(1);
```
直接这样就可以实现对象的初始化了，很方便

# 构造函数

- 与类名相同
- 不能return
- 不能有返回类型
- 可以重载
- 可以带默认值

分类
- 默认构造函数
- 委托构造函数

最好都写上默认构造函数，因为可以重载

## 申明

### 初始化列表


调用：

```
Person p1(28);
```