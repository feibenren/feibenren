---
title: C语言杂记
categories: 
- C
---

# 在线c环境
[https://studio.dev.tencent.com](https://studio.dev.tencent.com)






# 函数重载

```
#include <iostream>


void  test() {
	std::cout << "hahahahah" << std::endl;
}

int  test(int val) {
	std::cout << val << std::endl;
	return 0;
}



int main() {
	
	test(1);

	return 0;
}
```
重载:函数名一样，参数不一样，调用的时候，根据参数的不同，执行函数名相同但是执行的函数体不相同


注意，重载的标准是函数名和函数参数(包括参数的个数，参数的类型)，不包括函数的返回值

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
void  test(int &val) {//注意，函数参数是一个 '引用'
	val = val + 1;
}
int main() {
	
	int a = 1;
	test(a);
	std::cout << a << std::endl;//结果是2，虽然传递的是一个普通的变量，但是函数处理的是变量的地址，所以能够修改变量本身
	return 0;
}
```
这种玩法在js中没有体现，js传递对象默认就是使用引用


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

调用函数，都有代码载入，压栈和出栈的过程，消耗资源很大
```
void say(){
	printf("hello world");
}
int main(){

	for(int i=0;i<1000;i++){
		say();
	}
}

```
但是使用宏函数的话就不会，因为在预编译阶段就已经被替换了，没有压栈和出栈，所以效率很高
```

#DEFINE say()(printf("hello world");)
int main(){

	for(int i=0;i<1000;i++){
		say();
	}
}

```
但是宏函数有很多缺点，比如得加括号防止防止运算符等级问题等

C++针对这个问题，提出了优化，使用内联函数，具体就是在一个普通函数前面使用关键词 inline标示
```
inline void say(){
	printf("hello world");
	printf("nihao world");
}
int main(){

	for(int i=0;i<1000;i++){
		say();
	}
}

```

调用的时候，类似宏函数，直接将inline函数代码块拷贝到函数调用的地方，也就没有了压栈和出栈的过程，效率很高
```

inline void say(){
	printf("hello world");
	printf("nihao world");
}
int main(){

	for(int i=0;i<1000;i++){
		//say();
		printf("hello world");
		printf("nihao world");
	}
}

```

函数inline函数也有很多局限，比如

```
inline void say(){
	for(int i=0;i<1000;i++){
		printf("hello world");
	}
}
```
如果inline函数内部有循环1000次，调用这个inline函数1000次，那么这就相当于将代码`printf("hello world");`
在调用的地方展开1000*1000次，这样的话，效率会比使用普通函数更低，所以有规定

inline函数内部不能含有循环

等等等



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


# namespace
C++引入namespace，是为了方便大规模的写代码，比如js就没有，它只是适合写小代码

## 申明和使用namespace

简单使用
```
namespace A{
	int num=1;
}

int main(){
	printf("%d",A::num);//最简单的使用方式
	return 0;
}
```

改进1
```
namespace A{
	int a=1;
	int b=2;
}

int main(){
	int c=A::a+A::b;//这样使用很不方便，很多的情况下，就很麻烦
	printf("%d",c);
	return 0;
}
```

改进2
```
namespace A{
	int a=1;
	int b=2;
}
using namespace A;//申明当前文件使用作用域A，那么这个作用域下面的就不同写A::了
int main(){
	int c=a+b;//使用using后就很方便
	printf("%d",c);
	return 0;
}
```

但是多个using的话，会怎么样????


```
namespace A{
	int a=1;
	int b=2;
}
namespace B{
	int a=1;
	int b=2;
}
using namespace A;
using namespace B;
int main(){
	int c=a+b;//如果申明了2个namespace的话，遇到a,会逐个namespace查找，发现两个namespace都有变量a，编译器就无法确定，就会报错
	printf("%d",c);
	return 0;
}
```

可见，使用namespace，需要需要保证namespace内部不要有重复，如果有，只能使用原始方法了

# 构造函数
C++中的构造函数和php类似，但是需要将public的写到一起，private写到一起

class的本质就是struct ，C中的struct只能包含变量，不能包含函数，C++中可以

```
class Person{
	public:
		int age;
		char addr[];
		void say(){}
	private:
		int sex;
}

int main(){
	Person p1;
	p1.age=2;
	printf("%d",p1.age);
}

```

## 构造函数

C++中的构造函数就和类名一样的，在public中的一个函数

但是，没有返回值，没有return，而其他普通类函数都得有
```
class Person{
	public:
		int age;
		Person(){
			age=2;
		}
}
```
当然构造函数也可以支持函数重载，这样就可以根据初始化的不同而产生不同的结果

```
class Person{
	public:
		int age;
		Person(){
			age=2;
		}
		Person(int new_age){
			age=new_age;
		}
}
int main(){
	Person p1;//age=2;
	Person p2(5);//age=5;
}
```

还有一种特殊的构造函数重载，叫做`拷贝构造函数`

```
class Person{
	public:
		int age;
		Person(int new_age){
			age=new_age;
		}
		Person(Person per){//构造函数的参数是一个Person类型的对象，这样也就相当于将之前申明好的对象复制给新的对象
			age=per.age;
		}
}
```


以上这些都是我们自己手写的，但是C++会有默认的构造函数

存在两个默认的构造函数

- 空的默认构造函数，比如
- 

```
class Person
{
public:
	int age;
};

int main() {
	Person p1;
	p1.age = 4;
	Person p2(p1);
	cout<< p2.age << endl;//4
	getchar();
	return 0;
}
```


# C++中对C的升级改造

C语言并没有经过设计，而是在实践中积累寄来的，有很多灰色地带，C++针对C做了很多的升级和改造，某些地方的功能加强，某些地方的规则更严，也就是说，一些C代码可能在C++中运行报错

## 改进-申明变量

```
int main(){
	int a=1;
	pinrtf("%d",a);
	int b=2;
	pinrtf("%d",b);
}
```
在C中，变量声明都需要在函数的开头申明，不然会报错(新版本的可以通过，但是老版本的不会),得这样写

```
int main(){
	int a=1;
	int b=2;
	pinrtf("%d",a);
	pinrtf("%d",b);
}
```
但是在C++中无所谓


## 改进-register

```
register int a=3;
int *p=&a;//寄存器是没有地址的，这样操作在C中会报错，但是C++中不会，C++遇到这种情况会自动将a变量放到栈区，不会放到寄存器中，也就是说C++比C多了一步检查
```

## struct被当作一种新的数据类型

C++对struct进行升级，将struct和class的功能相似，甚至可以使用public等关键词

```
struct Person{
	int age;
	public:
		addr[40];
}

int main(){
	struct Person p1;//C中创建p1的时候，需要添加struct关键词
	Person p2;//C++中可以不添加关键词struct
}

```

### class 和struct的不同

- struct不能含有函数，也就没有构造函数，析构函数之说
- struct默认是public的，class默认是private的

综上，struct在c++中，更多的是像多种数据的组合，而不是一个对象的模板


## 类域作用符

## new 和delete
在C中，使用堆区很麻烦，需要函数进行申明和手动释放，在C++中针对这个操作进行优化

可以很方便的进行开辟堆区和释放堆区

### 普通变量--new&delete
```
int *num=mallock( sizeof(int));//c
*num=2;
free(num);

int *num1=new int;//C++
*num1=2;
delete num1;


int *num2=new int(22);//C++初始化
delete *num2;

```

### 数组--new&delete
```
int *arr=mallock( sizeof(int)*10);//c
*arr[0]=2;
free(arr);

int *arr1=new int[10];//C++
arr1[0]=2;
delete arr1;
```



### 对象--new&delete
```
class Person{
	public:
	int age;
}

int main(){
	Person *p1=mallock(sizeof(Person));

	//Person *p1 = (Person *)malloc(sizeof(Person));//C
	//p1->age = 2;

	Person *p1 = new Person();//C++
	p1->age = 22;


	return 0;
}

```


# this

```
class Person{
	public:
		int age;
		void say(){
			printf("%d",age);//p1调用，输入1，p2调用，输出2,C++是怎么做到的？
		}
}

int main(){
	Person p1;
	p1.age=1;
	p1.say();

	Person p2;
	p2.age=2;
	p2.say();
}

```

C实现
```
struct Person{
	public:
		int age;
		
}

void say(Person *p){
	printf("%d",p->age);//通过传入指针，可以实现和C++中的功能，只是C++默认隐藏了这一切
}

int main(){
	Person p1;
	p1.age=1;
	say(&p1);

	Person p2;
	p2.age=2;
	say(&p2);
}

```

C++中可以这样操作

```
class Person
{
public:
	int age;
	void say() {
		age = 10;
		this->age = 10;//两者相同
		cout << age << endl;
	}

};

```

# 类中的const

```
class Person {
	public :
		int a;
		int b;
		void test1(){//隐藏掉的参数应该是(Person * const this)，也就是说，this不能修改

		}
		void  test const(int a,int b){//默认的参数应该是(const Person * const this,int a,int b)
			this->a=a;//会报错，类中方法的const限制的是*this，类似 (const Person *this,int a,int b)
			this->b=b;//*this被限制了也就是说，this这个地址对应的哪个空间不能修改，而这个操作就是在修改这个空间的数据
		}
}
```


# 友元函数

友元函数是一个全局函数，但是这个函数在类C1中被声明为C1的好朋友，那么这个函数就可以操作C1类中的私有变量了


友元函数的参数很特殊，需要传入一个C1的类的对象，通过这个对象来修改private中的数据

```
#include <iostream>
#include <string.h>
using namespace std;

class C1 {
private :
	int age;
	friend void getAge(C1 *, int );
};

void getAge(C1 *p1,int new_age) {
	p1->age = new_age;
	printf("%d", p1->age);
}


int main() {
	
	C1 c1;
	//c1.age = 333;
	getAge(&c1, 22);

	system("pause");
	return 0;
}
```



# 友元类
友元类和友元函数类似，

```
#include <iostream>
#include <string.h>
using namespace std;

class C1 {
friend class C2;//申明C2是自己的好盆友
private :
	int age;
};

class C2 {
private:
	int tel;
	C1 myfriend;//C2需要申明一个C1的对象
public:
	void set(int new_c1_age) {
		myfriend.age = new_c1_age;
	}
	int get() {
		return myfriend.age;
	}
};




int main() {
	
	C2 c2;
	c2.set(66);
	int res = c2.get();
	printf("%d", res);
	system("pause");
	return 0;
}
```

友元类和友元函数本质上其实都破坏了类的封装性，为什么还要设计？

这个在C++中使用不多，主要是用来调试使用，但是在JAVA等其他语言使用较多

# 深拷贝和浅拷贝

# 构造函数初始化列表

# 运算符重载
