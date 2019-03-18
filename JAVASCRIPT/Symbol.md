---
title: SYMBOL
categories: 
- JAVASCRIPT
---
# Symbol

js中的第七种数据类型，可以产生独一无二的数值

```
let s1=Symbol();
```
通过`Symbol()`方法产生symbol

产生的数值是独一无二的

```
console.log( Symbol() === Symbol() );//false
```

symbol在语法层面提供了独一无二的数值，但是不方便区分,调试，可以:
```
//不添加label
let s2=Symbol();
console.log(s2);//Symbol()
let s3=Symbol();
console.log(s3);//Symbol()

//添加label
let s1=Symbol('s1');
console.log(s1);//Symbol(s1)

```
但是即使label相同，数值也不同

```
console.log(Symbol('s1') === Symbol('s1'));//false
```

# 属性名

一般情况下，不单独使用，一般都是当作对象的属性名使用
```
let name = Symbol("name");
let obj = {};
obj[name] = "wang";
console.log(obj[name]);
```

这样其实还有一个问题，假如使用者拿不到`name`变量，那么将永远无法调用到该属性(当然这也有好处)

可以使用`Symbol.for(label)`

```
console.log(Symbol.for('aaa') === Symbol.for('aaa') );//true
```
这样只要知道label名称，就可以获得对应的symbol




