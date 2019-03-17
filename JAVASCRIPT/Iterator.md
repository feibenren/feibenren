---
title: Iterator
categories:
  - JAVASCRIPT
---

# Iterator

在 es6 中，有四种数据结构,array,object,map,set，四种数据结构如何遍历呢\(**依次**处理数据结构的每个成员\)

还有 gengerator，也是一种数据结构，如何遍历？

## 如何遍历数据结构是一个问题

使用一种 **特定的新语法** 来遍历以上的所有数据结构

可以，但是还是不完美，因为以后可能还有其他数据结构诞生，还有自定义遍历的情况

所以，es6 规定只要数据部署了 **特定的遍历方法**，那么就可以使用 **特定的新语法**来遍历数据结构

这样就可以统一所有数据结构的遍历

# 特定的遍历方法

es6 规定的特定的遍历方法，部署在数据的 `Symbol.iterator` 属性上，是一个方法，该方法返回一个对象，这个对象就是 **遍历器**

```
let obj={}
obj[Symbol.iterator]=()=>{
    return {
        next:()=>{
            return {
                value:1,
                status:false
            }
        }
    }
}
```

只要部署了该方法，那么就可以说该数据结构 'iterable\(可遍历的\)'

其实最方便的部署遍历方法，就是使用generator

```
let obj={}
obj[Symbol.iterator]=function*(){
    yield 1;
    yield 2;
    yield 3;
}
for(let val of obj){
    console.log(val);
}
```

### 遍历器

遍历器的的本质上就是指向数据结构的一个指针，默认指向第一个数据，执行 next\(\)方法，指针指向第二个数据，以此类推，直到数据结构的结尾

所以，es6 规定，遍历器需要部署一个方法 next\(\),执行 next\(\),返回数据结构中的下一个数据

示例:

```
next:()=>{
    return {
        value:1,
        status:false
    }
}
```

# 特定的新语法

es6中规定的新的遍历方法，遍历的对象是部署了 **特定的遍历方法的数据**，其他的不行

特定的语法:

```
for(let val of iteratable_data){

}
```

### js**默认给很多数据结构**部署了Iterator

* Array
* String
* Map
* Set
* 函数的 arguments 对象
* NodeList 对象

示例:

```
let arr = [1, 2, 3];
let iter = arr[Symbol.iterator]();//获得遍历器
iter.next(); //{ value: 1, done: false }
iter.next(); //{ value: 2, done: false }
iter.next(); //{ value: 3, done: false }
```

但是没有Object，因为Object是无序的键值对，而遍历是有顺序的，所以无法部署，需要自己指定

从这可以看到，Object是不纯的数据结构

# generator

generator不仅仅是一个可以产生多种状态的'机器'，还是一个 **遍历器生成函数**

