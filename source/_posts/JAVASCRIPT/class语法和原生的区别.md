---
title: class语法和原生的区别
categories: 

- JAVASCRIPT


---

```
class Person{
  constructor(name){
    this.name=name;
  }
  static say(){
    console.log('Person say...');
  }
  eat(){
    console.log(this.name+' Person eat....')
  }
}
let p1=new Person('p1');
p1.eat();
///////////////////等价于
function Human(name){
  this.name=name;//class中的constructor方法
}
Human.say=function () {//class 中的static的静态方法
  console.log('human say...')
}
Human.prototype.eat=function(){//class方式申明的所有的函数，都是放到prototype中的
  console.log(this.name+' human eat...')
}
let h1=new Human('h1');
// Human.say();
h1.eat();
//所以，总的来说，class语法，可以看到可以将构造函数和prototype放到一起写，更直观明了，
```
# 参考链接
[https://github.com/wizardforcel/eloquent-js-3e-zh/blob/master/6.md][https://github.com/wizardforcel/eloquent-js-3e-zh/blob/master/6.md]
