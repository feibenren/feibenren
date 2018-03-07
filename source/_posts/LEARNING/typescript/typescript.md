---
title: typescript
categories: 
- LEARNING
- TYPESCRIPT
tags:
- typescript
---

# 官网
[http://www.typescriptlang.org](http://www.typescriptlang.org)

#在线编译和本地编译

## 在线编译
[http://www.typescriptlang.org/play/index.html](http://www.typescriptlang.org/play/index.html)
## 本地编译
```
cnpm install typescript -g // 全局安装

tsc -v//查看版本号

tsc filename_path //编译


```


# 字符串
1、自动拆分字符串


# 参数类型

number
string
boolean
void
any

```
var username:string;

var username:any=111;
username=true//正确

function test:void(){}//函数没有返回值
function test:number(){}//函数需要返回一个数字类型的返回值
function test:number(val:string){}//函数需要返回一个数字类型的返回值,参数得是string类型


class Person{}
var p1:Person;//p1必须是Person类型
```

类型推断机制
```
var username='asdf'//推断为string类型
username=111;//提示报错
```

# 默认参数
默认值的参数必须放到后面
```
function test(val1:string,val2:number,val3:boolean=false){}
test('111',111);
```
# 可选参数
默认值的参数必须放到后面
```
function test(val1:string,val2?:number,val3:boolean=false){}
test('111');
```

# rest & spread 操作符
用来声明任意数量的方法参数,es6有这个方法
```
function test(...vals){}
var arr=[1,2,3];
test(...arr);
```

# generator函数
tsc对es6规范的支持

# 析构表达式
tsc对es6规范的支持

# 箭头表达式





# privaite,protect,public(default)
tsc 中，是有属性的访问限制符的，es6中没有

# constructor()
tsc对es6规范的支持

# 泛型
参数化的类型，一般用来限制集合的内容
```
var arr:Array<number>;//arr是数组类型的，并且里面只能放number类型的数据
arr[1]=0;
arr[2]='asdf'//报错
```

# 接口
**es6里面没有接口**
interface
一共写法规范
```
interface Person{
    username:string;
    age:number;
}
class Student{
    constructor(config:Person){//参数是Person设定的类型

    }
}
var s1=new Student({
    username:'asdf',
    age:11
});//不能多也不能少
```

```
interface Person{
    username:string;
    age:number;
    eat();
}
class Student implements Person{
    username:string;
    age:number;
    eat(){}
}//实现这个接口的类必须满足接口的规定，否则报错

```

# 模块
tsc对es6规范的支持


# 注解
？？？

# 类型定义文件(*.d.ts)
用来帮助开发者在tsc中使用已有的js包，如jquery

```
TypeScript 现在已经可以通过 npm install @types/库名 来安装类型定义文件了，这样可以把ts项目所需要的定义文件描述到npm包里，维护起来更加方便。
```

# 总结
感觉tsc和es6很相似，多的东西有interface，参数类型定义，其他的感觉都一样

