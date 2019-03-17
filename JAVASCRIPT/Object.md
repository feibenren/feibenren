---
title: OBJECT
categories:
- JAVASCRIPT
---
# 对象

对象是一种数据结构，由`无序的数据键值`对组成

如果仅仅从一种数据结构来说，很简单

但是js还将对象赋予了更多的功能，比如
- 继承
- 键值对控制
等

- [BASE_OBJECT](./JAVASCRIPT/BASE_OBJECT.md)
- [PROTO](./JAVASCRIPT/PROTO.md)
- [属性描述符](./JAVASCRIPT/属性描述符.md)

# Object方法
- Object.create()
- Object.assign()
- Object.defineProperty()
- Object.defineProperties()
- Object.keys()
- Object.entries()





# Object.prototype方法




# Object.create(proto, [propertiesObject])


跟据原型创建对象

注意这个proto参数是必填的

[https://codepen.io/feibernren/pen/WmJaGV?editors=0012](https://codepen.io/feibernren/pen/WmJaGV?editors=0012)

有一种非常常见的写法
```
var obj=Object.create(null);
```
创建了一个没有原型的对象，也就是`obj`没有Object.prototype上面挂在的方法，更纯净

# Object.defineProperty(obj,property,protertyObj)

可以使用`Object.defineProperty()`来定义对象的属性

这里有一点需要注意，就是默认值

```
var obj={}
Object.defineProperty(obj,'name',{
    value:1
});
```
如果这样设置的话，`configurable,writable,enumberable`这三个属性都是false

并且可怕的是，`configurable`为false之后，那么这个属性描述符就无法修改了

由于`writable`为false，会导致无法修改这个属性

# Object.assign(target,source1,source2....)
复制对象的属性到目标对象上

但是需要注意:

- [不会复制prototype上的属性](https://codepen.io/feibernren/pen/KERExZ?editors=0012)
- [会调用源对象的get accessor](https://codepen.io/feibernren/pen/KERExZ?editors=0012)
- [enumberable:true才复制](https://codepen.io/feibernren/pen/ywjrBx?editors=0012)
- [仅仅是数值复制](https://codepen.io/feibernren/pen/wOjZvr?editors=0012)
- [后者覆盖前者](https://codepen.io/feibernren/pen/pYVYRr?editors=0012)
- 会修改target对象
- 返回值也是新的target对象

可以看到，`Object.assign()`进行属性的拷贝，不是完全的复制，所以想要实现更加精确的复制，需要使用`Object.getPropertyName()`和`Object.definePerperty()`来重新设置属性


# Object.keys()
这个方法很简单

获得对象自身的属性名称

[https://codepen.io/feibernren/pen/vPjMOX?editors=0012](https://codepen.io/feibernren/pen/vPjMOX?editors=0012)

但是有两点需要注意

- enumberable:true
- prototype属性不获取

# Object.values()
和Object.keys()对应，获得的是对象的values

# Object.entries()
返回一个对象的`键值对数组`

[https://codepen.io/feibernren/pen/gEzyPW?editors=0012](https://codepen.io/feibernren/pen/gEzyPW?editors=0012)

这个是Object.keys(),Object.values()的组合版本，返回的是一个二维数组

# Object.getPrototypeOf()
获得一个对象的原型


# Object.getOwnPropertyDescriptor()

获得自身的对象描述符

[https://codepen.io/feibernren/pen/gEzyPW?editors=0012](https://codepen.io/feibernren/pen/gEzyPW?editors=0012)

# Object.getOwnPropertyNames()

获得自己所有的属性名，包括`enumberable:false`的属性

其他方法无法遍历`enumberable:false`的属性，只有这个方法可以

[https://codepen.io/feibernren/pen/vPjMmx?editors=0012](https://codepen.io/feibernren/pen/vPjMmx?editors=0012)


# Object.preventExtensions(),Object.isExtensible()

阻止对象自身的扩展

注意，仅仅是自身的扩展，原型上可以继续扩展

而且阻止的仅仅是扩展，`修改,删除`原来的属性还是可以的

```
'use strict';
var obj={
    name:2,
    age:3,
};
console.log(Object.isExtensible(obj));//true
Object.preventExtensions(obj);
console.log(Object.isExtensible(obj));//false
obj.name=555;//还是可以修改原来的属性
// obj.title=4;//会报错
console.log(obj);
obj.__proto__.sex=55;
console.log(obj);
```

# Object.seal(),Object.isSeal()

seal(),表示`密封`

比Object.preventExtension()更严格

seal的对象，不能添加属性，也不能删除属性



# Object.freeze(),Object.isFrozen()

freez表示冻结

比seal更厉害，不能修改原来的属性


# 冻结，密封，防扩展

- Object.preventExtension()
- Object.seal()
- Object.freeze()

这三个方法都可以`控制对象的扩展`

---------------------------
preventExtension()，仅仅是控制对象这个`盒子自身`
不让进入新的键值对，其他的就没有任何限制
------------------------
seal()的限制，是在preventExtension()的基础上的更加严厉的控制,它将每个属性的`configurable`设置为false，所以，删除会报错

-----------------
freeze()属性的，则是在seal的基础上，又修改了`writable`属性为false，这样修改原有的属性的属性值也会报错



