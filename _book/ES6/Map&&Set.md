---
title: Map&&Set
categories: 
- ES6
---

# Map&&Set
es6对array和Object这两种 **数据结构** 的扩展和补充

- Array:有序的数值集合
- Object:无序键值对的集合(**键只能是String**)

对比一下:

- Set:有序的、**没有重复**的数值集合
- Map:无序键值对的集合(**键可以是任何类型**)

> set是一种新的数据,和Array没有任何关系，只不过非常像，Map也是如此

# Set

```
let s1=new Set([1,1,'string',{},{}]);
//Set(4) {1, "string", {}, {}}
//对象之间不相等
console.log(s1.size);//4
s1.add(2);//Set(5) {1, "string", {}, {},2}
s1.delete(1);//Set(4) {"string", {}, {},2}
s1.has(1);//false
s1.clear();//Set(){}
```
> Set添加，删除，判断，都比Array操作方便

# weakSet
Set的条件是成员唯一

weakSet则更进一步，要求成员都必须是对象

还有重要的一点：垃圾回收机制不考虑 WeakSet 对该对象的引用

示例:

```
let ws=new WeakSet();
function test(){
    let private_val=[1];
    ws.add(private_val);
}
test();
//观察ws,因为垃圾回收机制不会立即回收，所以通过定时器来观察
setInterval(() => {
    console.log(ws);
}, 100);

```
运行test()，函数内部创建private_val变量，`ws.add()`引用private_val，而ws是全局变量，因此，private_val正常情况下在test()运行完成后不会被回收，因为被ws引用了

js中的垃圾回收机制，当一个局部变量被的引用次数为0，那么垃圾回收机制就会回收该变量

private_val被ws引用了一次，所以不会被回收，但是垃圾回收机制不考虑weakSet的引用，所以private_val在垃圾回收机制中的引用次数是0，会被回收

因此，weakset无法被遍历，因为成员不知道什么时候就没有了

为什么这么设计？？

**防止内存泄漏**

示例:

```
想不出来怎么示例
```

# Map

Object中的key只能是string类型的，Map规定key数值可以是任意类型，是对Object的补充

```
let m1=new Map();
let map_key={};
m1.set(map_key,{});//设置
m1.get(map_key);//获取
m1.delete(map_key);//删除
m1.has(map_key);//判断
```
> 相比于Object,Map添加，获取，设置，删除都比Object操作方便

# weakMap
和weakSet类似


# 总结

- 新加的四种类型，其实本质上都是Object，原始类似一共就那么几种`string,number,boolean,null,undefined,symbol`
- map和set专业于数据结构,比如Object,还将继承，无关数据结构的方法都放到了Object上面了，使得Object不那么纯洁了




